import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Homer: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Rafael Alves</title>
                <meta name='description' content='Generated by create next app' />
            </Head>
            <header className={styles.header}>
                <nav>
                    <ul>
                        <li>
                            <Link href={'/about'}>
                                <a>
                                    About
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className={styles.main}>
                <h1 className={styles.title}>Blog</h1>
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default Homer