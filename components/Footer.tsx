export default function Footer<Any>() {
    return (
        <footer>
            <style jsx>{`
                footer {
                    position: relative;
                    bottom: 0;
                    width: 100%;
                    height: 10vh;
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: center;
                    align-itens: center;
                    z-index: 10;
                }

                hr {
                    width: 100%;
                    background-image: -moz-linear-gradient(left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
                    background-image: -webkit-linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
                    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
                    border: none;
                }
            
            `}</style>
            <hr/>
            <p>by <strong>Rafael Alves 🧠📚💰🌌</strong></p>
        </footer>
    )
}