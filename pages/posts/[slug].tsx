import { GetStaticPaths, GetStaticProps } from "next"
import { getAllPostSlugs, getPostData } from "../../lib/getPosts"
import Head from 'next/head'
import { useState, useEffect } from 'react'

export default function Post({ postData }) {
    const [showButton, setShowButton] = useState(false)

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
                    justify-content: start;
                    margin-left: 5%;
                    margin-right: 5%;
                    row-gap: 3em;
                }

                a {
                    color: red;
                    text-decoration: underline;
                    target: _blank;
                }

                a:hover {
                    color: red;
                    text-decoration: none;
                }

                h1 {
                    text-align: center;
                    font-size: 2em;
                }

                h2 {
                    margin-top: 2rem;
                    margin-bottom: 2rem;
                    font-size: 1.5em;
                }

                h3 {
                    margin-top: 2rem;
                    margin-bottom: 2rem;
                    font-size: 1.5sem;
                }

                p {
                    font-size: 1.2em;
                }

                @media only screen and (min-width: 768px) {

                    article {
                        margin-left: 15%;
                        margin-right: 15%;
                    }

                }
            `}</style>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
            {showButton && (
                <button onClick={scrollToTop} className={'back-to-top'}>☝</button>
            )}
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getPostData(params.slug)

    return {
        props: {
            postData
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostSlugs()
    return {
        paths,
        fallback: false
    }
}