export default function Post<Any>({ post }) {
    return (
        <>
            <div>{post}</div>
        </>
    )
}

export async function getStaticProps<GetStaticProps>() {
    const res = await fetch('https://raffallves-blog.s3.amazonaws.com/one.mdx')
    const post = await res.json()

    return {
        props: {
            post
        }
    }
}

export async function getStaticPaths<GetStaticPaths>() {
    
}