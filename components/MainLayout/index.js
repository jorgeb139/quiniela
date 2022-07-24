import {colors, fonts} from '../../styles/theme'
import Head from 'next/head'
import Header from '../Header/index'
import Footer from '../Footer/index'

export default function MainLayout ({children, title, description,}) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="icon" href="/img/copa-mundial.png" />
            </Head>

            <header>
                <Header userName = 'Jorge Burguera'/>
            </header>

            <main>
                {children}
            </main>

            <footer>
                <Footer/>
            </footer>

            <style jsx>{`
                html, body {
                    background-image:
                        radial-gradient(${colors.primary}, 1px, transparent 1px),
                        radial-gradient(${colors.primary}, 1px, transparent 1px);
                    background-position: 0 0, 25px 25px;
                    background-size: 50px 50px;
                    font-family: ${fonts.base};
                    padding: 0;
                    margin: 0;
                }

                main {
                    font-family: ${fonts.base};
                    height: 100vh;
                    padding: 4rem 0;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
            `}</style>
        </>
    )
}

MainLayout.defaultProps = {
    title: "Quiniela Mundial",
    description: "Quiniela Mundial es una aplicación que permite jugar a la quiniela de una manera fácil y rápida."
}