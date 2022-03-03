import Head from 'next/head'
import NavBar from '../../components/NavBar'

export default function Post<Any>() {
    return (
        <>
            <Head>
                <title>Post Name</title>
                <meta name={'description'} content={'Generated by create next app'} />
            </Head>
            <header>
                <NavBar />
            </header>
            <main>
                Post
            </main>
        </>
    )
}