import type { NextPage } from 'next'
import NavBar from '../components/NavBar'
import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import styles from '../styles/Home.module.css'
import { GetStaticProps } from 'next'
import { getSortedPostsData } from '../lib/getPosts'

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData()

    return {
        props: {
            allPostsData
        }
    }
}


const Homer: NextPage = ({ allPostsData }) => {
    return (
        <div >
            <Head>
                <title>Rafael Alves</title>
                <meta name='description' content='Generated by create next app' />
            </Head>

            <header>
                <NavBar />
            </header>

            <main>
                <h1 >Blog</h1>
                <ul>
                    {allPostsData.map(({slug, date, title}) => (
                        <li key={slug} >
                            <Link href={`/posts/${slug}`} >
                            <a>{title}</a>
                            </Link>
                            <br/>
                            {slug}
                            <br/>
                            <Date dateString={date} />
                        </li>
                    ))}
                </ul>
            </main>

            <footer>

            </footer>
        </div>
    )
}

export default Homer