import { S3Client, GetObjectCommand, ListObjectsV2Command } from '@aws-sdk/client-s3'

let s3 = new S3Client({region: process.env.AWS_REGION})

// Fetch posts metadata
export async function getSortedPostsData(subject, language) {
    // Get posts manifest for specific subject from aws
    const command = new GetObjectCommand({Bucket: process.env.AWS_BUCKET, Key: `\\${language}\\${subject}\\manifest.json`})

    try {
        const response = await s3.send(command)
        const stringResponse = await response.Body.transformToString()
        const manifest = await JSON.parse(stringResponse)

        // Sort posts by date
        return manifest.sort(({date: a}, {date: b}) => {
            if (a < b) {
                return 1
            } else if (a > b) {
                return -1
            } else {
                return 0
            }
        })

    } catch (e) {
        console.error(e.message)
    }

}

// List objetcs in bucket to get their names and use them as paths
export async function getAllPostSlugs(lang) {
    const command = new ListObjectsV2Command({Bucket: process.env.AWS_BUCKET, Prefix: lang})

    try {
        const response = await s3.send(command)

        // Remove 'manifest.json' files from the response
        for (let i = 0; i < response.Contents.length; i++) {
            if (response.Contents[i].Key.includes('manifest.json')) {
                response.Contents.splice(i, 1)
            }
        }
        
        // Return paths in the format that Next expects
        return response.Contents.map(object => {
            // Extract post slug
            let slug = object.Key.replace(/\.mdx$/, '')
            for (let i = slug.length - 1; i > 0; i--) {
                if (slug[i] === '\\') {
                    slug = slug.substring(i+1, slug.length)
                }
            }
            
            return {
                params: {
                    slug: slug
                }
            }
        })
    } catch (e) {
        console.error(e.message)
    }

}

// Lists posts for a given language
export async function listPosts(lang) {
    const command = new ListObjectsV2Command({Bucket: process.env.AWS_BUCKET, Prefix: lang})
    
    try {
        const response = await s3.send(command)

        return response.Contents.map(object => {
            
            return {
                file: object.Key,

            }
        })

    } catch (e) {
        console.error(e.message)
    }
}

// Gets post data to be parsed by MDX Remote
export async function getPostData(slug, lang, subject) {
    const command = new GetObjectCommand({Bucket: process.env.AWS_BUCKET, Key: `\\${lang}\\${subject}\\posts\\${slug}.mdx`})
    
    try {
        // Try to get post from S3 bucket
        const response = await s3.send(command)
        const stringData = await response.Body.transformToString()

        // Combine the data with the slug
        return {
            slug,
            stringData,
        }
    } catch (e) {
        console.error(e.message)
    }
}