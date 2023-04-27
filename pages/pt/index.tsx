import type { GetStaticProps } from 'next'
import  Head  from 'next/head'
import { useRouter } from 'next/router'
import { getSubjects } from '@/lib/subjects'
import { listPosts } from '@/lib/posts'
import Subject from '@/components/Subject'

export const getStaticProps: GetStaticProps = async () => {
    const posts = await listPosts('\\pt')
    
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

                ::-moz-selection {
                    background-color: #f00;
                    color: white;
                }

                ::selection {
                    background-color: #f00;
                    color: white;
                }
            `}</style>
            <Head>
                <title>Página Principal - Ensaios sobre o real e o possível, por Rafael Alves</title>
                <meta name='description' content='Relatos da experiência de um ser humano.' />
            </Head>
            <h1>O que penso sobre <mark>Tudo</mark></h1>
            <section className='subjects-wrapper'>
                {subjects.map((d) =>(
                        <Subject 
                        key={d.id}
                        id={d.id}
                        subject={d.subject} 
                        image={d.image} 
                        description={d.description}
                        theme={d.theme}
                        posts={posts} />
                ))}
            </section>
        </>
    )
}

export default Home