import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllPostSlugs, getPostData } from '@/lib/posts'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { extractSubject, themes } from '@/lib/subjects'
import Date from '@/components/Date'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import remarkPrism from 'remark-prism'
import { Paragraph, Heading } from '@/components/mdx/style'

// Retrieves the post's data based on the current path
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getPostData(params.slug, 'en', 'tech')
    const mdxSource = await serialize(postData.stringData, { 
        parseFrontmatter: true, 
        mdxOptions: {
            remarkPlugins:[[remarkPrism]]
        }
    })

    return {
        props: {
            source: mdxSource
        }
    }
}

// Get all possible path names to enable dynamic paths
export const getStaticPaths: GetStaticPaths = async () => {
    const paths = await getAllPostSlugs('\\en')
    return {
        paths,
        fallback: false
    }
}

export default function Post({ source }) {
    const [showButton, setShowButton] = useState(false)
    const router = useRouter()
    const subject = extractSubject(router.pathname)
    const theme = themes.get(subject)

    // Create custom components for the MDX page
    const components = {
        p: Paragraph,
        h1: Heading.H1,
        h2: Heading.H2,
        h3: Heading.H3,
        h4: Heading.H4,
        h5: Heading.H5,
        h6: Heading.H6,
    }

    // 'Scroll back to top' button's functionality
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        })

        return () => {
            window.removeEventListener('scroll', () => {
                if (window.scrollY > 300) {
                    setShowButton(true)
                } else {
                    setShowButton(false)
                }
            })
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>  
            <style jsx>{`
               .back-to-top {
                position: fixed;
                bottom: 80px;
                right: 20px;
                font-size: 30px;
                color: red;
                cursor: pointer;
                background: none;
                border: none;
            }

            pre > code {
                border-radius: 50%;
            }

           article {
                margin-left: 5%;
                margin-right: 5%;       
            }

            ::-moz-selection {
                background-color: ${theme};
                color: white;
            }

            ::selection {
                background-color: ${theme};
                color: white;
            }

            .post-date {
                font-weight: 700;
                color: #808080;
            }

            a {
                color: ${theme};
                text-decoration: underline;
                target: _blank;
            }

            a:hover {
                color: ${theme};
                text-decoration: none;
            }

            h1 {
                text-align: center;
                font-size: 2.3em;
            }

            p {
                font-size: 1em;
            }

            @media only screen and (min-width: 850px) {

                article {
                    margin-left: 15%;
                    margin-right: 15%;
                }

            }
            `}</style>
            <Head>
                <title>{source.frontmatter.title}</title>
            </Head>
            <article>
                <h1>{source.frontmatter.title}</h1>
                <div className='post-date'>
                    <Date dateString={source.frontmatter.date} language={router.pathname.substring(1, 3)} />
                </div>
                <MDXRemote {...source} components={components} />
                {showButton && (
                    <button onClick={scrollToTop} className={'back-to-top'}>☝</button>
                )}
            </article>
        </>
    )
}