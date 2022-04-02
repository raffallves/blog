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