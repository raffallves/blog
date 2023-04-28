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
                <title>Por que e como escrever sobre tecnologia?</title>
                <meta name='description' content='Um pouco sobre minhas motivações e metodologia ao falar em tecnologia.' />
            </Head>
            <section className='about-content'>
                <h1>Por que e como escrever sobre tecnologia?</h1>
                <p>A tecnologia acompanha a humanidade há milênios — desde os nossos ancestrais mais distantes que, observando o comportamento da matéria que compunha a realidade a sua volta, tiveram a inventividade de lascar pedras para otimizar suas tarefas diárias, até aqueles que, alguns milhões de anos mais tarde, perceberam todas as utilidades do cobre.</p>
                <p>Claro que, hoje em dia, a palavra &#34;tecnologia&#34; remete à invenções mais modernas como a Web 2.0, a Inteligência Artificial, a computação quântica e o metaverso, mas nossa relação com ela continua sendo a mesma.</p>
                <p>Minha intenção com estes ensaios é sintetizar informações de diversas áreas do conhecimento humano com o objetivo de entender a tecnologia — o que ela é exatamente, como ela afeta a humanidade, como ela funciona e quais podem ser os seus possíveis desdobramentos futuros.</p>
                <p>Inevitavelmente, por se tratar de uma qualidade intrínseca do assunto — além de ser minha área de atuação profissional, o que requer que eu demonstre um nível de conhecimento mais elevado —, posso acabar sendo bastante técnico em alguns pontos, portanto, que isso sirva de aviso àqueles cuja aversão a detalhes é patológica.</p>
                <Link href={'/pt/tech/'}>
                    <p className='posts-link'>Ir para as postagens</p>
                </Link>
            </section>
        </>
    )
}

export default About