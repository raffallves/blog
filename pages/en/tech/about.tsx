import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { extractSubject, themes } from '@/lib/subjects'

const About: NextPage = () => {
    const router = useRouter()
    const subject = extractSubject(router.pathname)
    const theme = themes.get(subject)

    return (
        <>
            <style jsx>{`
                ::-moz-selection {
                    background-color: ${theme};
                    color: white;
                }

                ::selection {
                    background-color: ${theme};
                    color: white;
                }

                .about-content {
                    margin-right: 5%;
                    margin-left: 5%;
                    text-justify: inter-word;
                }

                h1 {
                    font-size: 2.8em;
                    text-align: center;
                }

                p {
                    font-size: 1.1em;
                }

                .posts-link {
                    color: ${theme};
                    font-size: 1.1em;
                    font-weight: bold;
                    text-decoration: underline;
                }

                .posts-link:hover, .posts-link:active, .posts-link:focus {
                    text-decoration: none;
                }

                @media all and (min-width: 850px) {
                    .about-content {
                        margin-right: 15%;
                        margin-left: 15%;
                    }
                }

            `}</style>
            <Head>
                <title>Why and how to write about technology?</title>
                <meta name='description' content='A bit of my motivation and methodology when talking about technlogy.' />
            </Head>
            <section className='about-content'>
                <h1>Why and how to write about technology?</h1>
                <p>Technology has accompanied mankind throughout the ages — from our distant ancestors who optimized their daily labor by observing reality and its elements to come up with stone tools, to the more recent ones that noticed all the utilities of copper a few million years later.</p>
                <p>It&#39;s true that today the word &#34;technology&#34; refers to inventions that are a bit more modern, such as Web 2.0, Artificial Intelligence, quantum computing, and the metaverse, but our relationship with it is still the same.</p>
                <p>My intent with these essays is to synthesize information from across many areas of human knowledge so as to better understand technology — what it is exactly, how it affects humanity, how it works, and what might be its possible future ramifications.</p>
                <p>Inevitably, since this is an intrinsic quality of the subject — besides being my area of professional expertise, which requires me to demonstrate a higher degree of knowledge —, I can come off as a bit too technical at some points, therefore, let this be a warning for those who have a pathological aversion to details.</p>
                <Link href={'/en/tech/'}>
                    <p className='posts-link'>Go to posts</p>
                </Link>
            </section>
        </>
    )
}

export default About