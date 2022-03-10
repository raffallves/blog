export default function Post<Any>({ post }) {
    return (
        <>
            <div>{post}</div>
        </>
    )
}

export const getStaticProps:GetStaticProps = async () => {
    const res = await fetch('https://raffallves-blog.s3.amazonaws.com/one.mdx')
    const post = await res.json()

    return {
        props: {
            post
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    
    return {
        paths: [
            { params: {...} }
        ]
    }
}