import Link from 'next/link'
import Image from 'next/image'
import Date from './Date'

export default function Card<Any>({title, date, slug}) {
    return (
        <>
            <style jsx>{`
                .card {
                    display: flex;
                    flex-direction: column;
                    width: clamp(20rem, calc(20rem + 2vw), 22rem);
                    overflow: hidden;
                    box-shadow: 0 .1rem 1rem rgba(0, 0, 0, 0.1);
                    border-radius: 1em;
                    background: #ECE9E6;
                    background: linear-gradient(to right, #FFF, #ECE9E6);
                }

                .card:focus {
                    box-shadow: none;
                    border: 4px solid red;
                }

                .card:hover {
                    box-shadow: none;
                }

                .card-body {
                    padding: 1rem;
                    display: flex;
                    flex-direction: column;
                    gap: .5rem;
                }

                .card-footer {
                    display: flex;
                    padding: 1rem;
                    margin-top: auto;
                }

                .card-image {
                    object-fit: cover;
                    display: block;
                    max-width: 100%;
                }
                
            `}</style>
            <div className={"card"}>
                <div className={"card-header"}>
                    <Image className={'card-image'} src={'/pexel.jpg'} alt={'Post image'} width={'500'} height={'300'}/>
                </div>
                <div className={'card-body'}>
                    <Link href={`/posts/${slug}`}>
                        <a>
                            <h3>{title}</h3>
                        </a>
                    </Link>
                </div>
                <div className={"card-footer"}>
                    <Date dateString={date}/>
                </div>
            </div>
        </>
    )
}