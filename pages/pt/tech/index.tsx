import type { NextPage } from 'next'
import  Head  from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { getSortedPostsData } from '@/lib/posts'
import Date from '@/components/Date'
import Enter from '@/components/icons/Enter'
import { extractSubject, themes } from '@/lib/subjects'

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = await getSortedPostsData('tech', 'pt')

    return {
        props: {
            allPostsData
        }
    }
}


const Home: NextPage = ({ allPostsData }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const router = useRouter()
    const subject = extractSubject(router.pathname)
    const theme = themes.get(subject)

    return (
        <>
            
            <Head>
                <title>O que penso sobre a tecnologia.</title>
                <meta name='description' content='Postagens que dão corpo à tentativa da minha mente de conceber a tecnologia e suas implicações.' />
            </Head>

            <style jsx>{`

                ::-moz-selection {
                    color: white;
                    background-color: ${theme};
                }

                ::selection {
                    color: white;
                    background-color: ${theme};
                }

                h1 {
                    font-size: 3em;
                    text-align: center;
                }

                h1 > mark {
                    background: linear-gradient(120deg, ${theme} 0%, ${theme} 100%);
                    background-repeat: no-repeat;
                    background-size: 100% 35%;
                    background-position: 0 90%;
                }

                .posts-section {
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: center;
                    width: 100%;
                    gap: 1em;
                }

                .post-link {
                    width: 100%;
                }

                .post-metadata {
                    display: flex;
                    flex-wrap: nowrap;
                    justify-content: flex-start;
                    gap: 1em;
                }

                .link-button {
                    width: 25px;
                    height: 25px;
                }

                @media screen and (min-width: 900px) {
                    .posts-section {
                        margin-right: 15%;
                        margin-left: 15%;
                    }
                }

                @media screen and (min-width: 1050px) {
                    .posts-section {
                        margin-right: 20%;
                        margin-left: 20%;
                    }
                }
            
            `}</style>

            <h1>O que penso sobre <mark>Tecnologia</mark></h1>

            <section className={'posts-section'}>
                {allPostsData.map(({slug, date, title, description}) => (
                    <div key={slug} className='post-link'>
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <div className='post-metadata'>
                            <Date dateString={date} language={router.pathname.substring(1, 3)} />
                            <div className='link-button'>
                                <Link href={`${router.pathname.substring(4)}/posts/${slug}`}>
                                    <Enter theme={theme} />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

        </>
    )
}

export default Home