import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import ScrollToTopButton from '../ScrollToTopButton'
import styles from './MainLayout.module.scss'
import { PrincipalHeader } from '../Header/PrincipalHeader'

interface MainLayoutProps {
  title?: string
  description?: string
  page?: string
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title, description, page = '' }) => {
  const router = useRouter()

  useEffect(() => {
    if (router.asPath === '/') {
      document.querySelector('body').style.background =
        'linear-gradient(112deg, rgba(170, 34, 77, 1) 0%, rgba(43, 21, 32, 1) 100%)'
    } else {
      document.querySelector('body').style.background = ''
    }
  }, [])

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <link rel='icon' href='/img/copa-mundial.png' />
      </Head>
      <div className={styles.container}>
        <header>
          <PrincipalHeader />
        </header>
        <main className={styles.mainContent}>{children}</main>
        <ScrollToTopButton />
      </div>
    </>
  )
}

MainLayout.defaultProps = {
  title: 'Quiniela Mundial',
  description: 'Quiniela Mundial es una aplicación que permite jugar a la quiniela de una manera fácil y rápida.'
}

export default MainLayout
