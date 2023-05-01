import type { GetStaticProps } from 'next'
import  Head  from 'next/head'
import { useRouter } from 'next/router'
import Subject from '@/components/Subject'
import { getSubjects } from '@/lib/subjects'
import { listPosts } from '@/lib/posts'

// Returns a list of all posts in a given language to be counted by each subject
export const getStaticProps: GetStaticProps = async () => {
    const posts = await listPosts('\\en')
    
    for (let i = 0; i < posts.length; i++) {
        if (posts[i].file.includes('manifest.json')) {
            posts.splice(i, 1)
        }
    }
    
    return {
        props: {
            posts: posts
        }
    }
}

const Home = ({ posts }) => {
    const router = useRouter()
    const path = router.pathname
    const subjects = getSubjects(path)
    
    return (
        <>
            <style jsx>{`
                .subjects-wrapper {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-around;
                    align-content: space-between;
                    width: 90%;
                }

                h1 {
                    font-size: 3em;
                    text-align: center;
                }

                h1 > mark {
                    background: linear-gradient(120deg, #ff0000 0%, #ff0000 100%);
                    background-repeat: no-repeat;
                    background-size: 100% 35%;
                    background-position: 0 90%;
                }
            `}</style>
            <Head>
                <title>Home Page - Essays on reality and possibility, by Rafael Alves</title>
                <meta name='description' content="Notes on a human being's experience." />
            </Head>
            <h1>My thoughts on <mark>Everything</mark></h1>
            <section className='subjects-wrapper'>
                {subjects.map((d) =>(
                    <Subject 
                    key={d.id}
                    id={d.id}
                    subject={d.subject} 
                    imageDesktop={d.imageDesktop}
                    imageMobile={d.imageMobile} 
                    description={d.description}
                    theme={d.theme}
                    posts={posts} />
                ))}
            </section>
        </>
    )
}

export default Home