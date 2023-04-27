import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Tech from '@/components/icons/subjects/Tech'
import Question from '@/components/icons/Question'
import Enter from '@/components/icons/Enter'


export default function Subject<Any>({ id, subject, image, description, theme, posts }) {
    const router = useRouter()
    let icon
    let slug

    if (id === 1) {
        icon = <Tech />
        slug = '/tech'
    }

    let counter = 0
    for (let i = 0; i < posts.length; i++) {
        if (posts[i].file.includes(slug.substring(1, slug.length - 1))) {
            counter++
        }
    }
    
    return (
        <>
            <style jsx>{`
                .box {
                    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.5);
                    max-width: 400px;
                    max-height: 300px;
                    display: flex;
                    flex-direction: row;
                    border-radius: 25px;
                    position: relative;
                }

                .box h2 {
                    margin: 0;
                    padding: 0 1rem;
                }

                .box .title {
                    padding: 0.4rem;
                    text-align: right;
                    color: ${theme};
                    font-weight: bold;
                    font-size: 12px;
                }

                .box .subject-description {
                    padding: 0.5rem 1rem;
                    font-size: 14px;
                }

                .box svg {
                    width: 85px;
                    height: 85px;
                    margin: 0 auto;
                }

                .subject-icon {
                    width: 80px;
                    height: 80px;
                    position: absolute;
                    border-radius: 50%;
                    border: 6px solid white;
                    background-color: ${theme};
                    top: 15px;
                    left: 85px;
                }

                .box-text {
                    display: grid;
                    grid-template-columns: 1fr 2fr;
                }

                .title-wrapper {
                    padding: 2.5em 1.5em 1.5em 1.5em;
                }

                .subject-image {
                    overflow: hidden;
                    z-index: -1;
                    border-top-left-radius: 25px;
                    border-bottom-left-radius: 25px;
                    position: relative;
                }

                .actions {
                    color: ${theme};
                    display: flex;
                    align-content: center;
                    justify-content: space-around;
                    padding-top: 2.4em;
                }

                .actions-icon {
                    cursor: pointer;
                }

                ::-moz-selection {
                    background-color: ${theme};
                    color: white;
                }

                ::selection {
                    background-color: ${theme};
                    color: white;
                }
                
            `}</style>
            <div className='box'>
                <div className='subject-icon'>{icon}</div>
                <div className='box-text'>
                    <div className='subject-image'>
                        <Image 
                        src={image} 
                        width='160'
                        height='330' 
                        alt=""/>
                    </div>
                    <div className='title-wrapper'>
                        <div className='title'>{counter} {counter === 1 ? 'post' : 'posts'}</div>
                        <h2>{subject}</h2>
                        <div className='subject-description'>{description}</div>
                        <div className='actions'>
                            <div className='actions-icon'>
                                <Link href={`${router.pathname + slug}/about`}>
                                    <Question theme={theme}/>
                                </Link>
                            </div>
                            <div className='actions-icon'>
                                <Link href={router.pathname + slug}>
                                    <Enter theme={theme} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}