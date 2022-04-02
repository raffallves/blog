import NavBar from './NavBar'
import Footer from './Footer'

export default function Layout<Any>({ children }) {
    return (
        <>
            <NavBar />
            <style jsx>{`
                main {
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: center;
                    margin-right: 5%;
                    margin-left: 5%;
                    padding-top: 100px;
                    padding-bottom: 50px;
                }
            `}</style>
            <main>{children}</main>
            <Footer />
        </>
    )
}