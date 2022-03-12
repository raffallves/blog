import { GetStaticPaths, GetStaticProps } from "next"
import { getAllPostSlugs, getPostData } from "../../lib/getPosts"
import Date from '../../components/Date'
import Head from 'next/head'

export default function Post({ postData }) {
    return (
        <>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
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