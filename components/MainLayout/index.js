import styles, {globalStyles} from './styles';

import Head from 'next/head'
import Header from '../Header/index'
import Footer from '../Footer/index'

export default function MainLayout ({children, title, description,}) {
    return (
        <>
            <div>
                <Head>
                    <title>{title}</title>
                    <meta name="description" content={description} />
                    <link rel="icon" href="/img/copa-mundial.png" />
                </Head>

                {/* <header>
                    <Header userName = 'Jorge Burguera'/>
                </header> */}

                <main>
                    {children}
                </main>

                {/* <footer>
                    <Footer/>
                </footer> */}
            </div>

            <style jsx>{styles}</style>
            <style jsx global>{globalStyles}</style>
        </>
    )
}

MainLayout.defaultProps = {
    title: "Quiniela Mundial",
    description: "Quiniela Mundial es una aplicación que permite jugar a la quiniela de una manera fácil y rápida."
}