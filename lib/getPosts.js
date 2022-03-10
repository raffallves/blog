import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map(filename => {
        // Remove '.mdx' from file name to get slug
        const slug = filename.replace(/\.mdx$/, '')

        // Read markdown files as string
        const fullPath = path.join(postsDirectory, filename)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the posts metadata section
        const matterResult = matter(fileContents)

        // Combine the data with the slug
        return {
            slug,
            ...matterResult.data
        }
    })

    // Sort posts by date
    return allPostsData.sort(({date: a}, {date: b}) => {
        if (a < b) {
            return 1
        } else if (a > b) {
            return -1
        } else {
            return 0
        }
    })
}

export function getAllPostSlugs() {
    const fileNames = fs.readdirSync(postsDirectory)

    return fileNames.map(filename => {
        return {
            params: {
                slug: filename.replace(/\.mdx$/, '')
            }
        }
    })
}

export async function getPostData(slug) {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    const processedContent =  await remark().use(html).process(matterResult.content)
    const contentHtml = processedContent.toString()

    // Combine the data with the slug
    return {
        slug,
        contentHtml,
        ...matterResult.data
    }
}