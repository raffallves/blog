import Link from 'next/link'
import Image from 'next/image'
import Date from './Date'

export default function Card<Any>({title, date, slug}) {
    return (
        <>
            <style jsx>{`
                .card {
                    border: 2px solid black;
                    height: 330px;
                    width: 300px;
                    margin: 2.5em;
                    text-overflow: ellipsis;
                }

                .card:hover {
                    border-color: red;
                }

                .card-content {
                    padding: 30px;
                }

                .card-image {
                    object-fit: contain;
                }
                
            `}</style>
            <div className={"card"}>
                <Image className={'card-image'} src={'/pexel.jpg'} alt={'Post image'} width={'300'} height={'80'} layout={'responsive'}/>
                <div className={'card-content'}>
                    <Link href={`/posts/${slug}`}>
                        <a>
                            <h3>{title}</h3>
                        </a>
                    </Link>
                    <Date dateString={date}/>
                </div>
            </div>
        </>
    )
}