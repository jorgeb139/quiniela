import Image from 'next/image'
import { MouseEvent } from 'react'
import styles from './Index.module.scss'

import MainLayout from '../components/MainLayout'
import { LoginButton } from '../components/LoginButton'
import GoogleLogo from '../components/Icons/Google'
import FacebookLogo from '../components/Icons/Facebook'
import TwitterLogo from '../components/Icons/Twitter'
import { loginWithFacebook, loginWithGoogle, loginWithTwitter } from '../services/authService'
import { useAuth } from '../contexts/AuthContext/AuthContext'

export default function Home() {
  const { user, isLoading } = useAuth()

  const handleClick = (event: MouseEvent<HTMLButtonElement>, network: 'Google' | 'Facebook' | 'Twitter') => {
    const loginFunctions = {
      Google: loginWithGoogle,
      Facebook: loginWithFacebook,
      Twitter: loginWithTwitter
    }

    const loginFunction = loginFunctions[network]
    loginFunction().catch((err) => {
      console.log(err)
    })
  }

  return (
    <MainLayout
      title='Quiniela Mundial'
      description='Encontrarás todas las opciones para disfrutar tu quiniela'
      page='index'
    >
      <section className={styles.section}>
        <div className={styles.div}>
          <Image src={'/img/Qatar2022_blanco.png'} height={120} width={120} alt='Banner hero' />
        </div>
        <h1>
          Bienvenidos a <br />
          <strong>Quiniela Mundial</strong>
        </h1>
        <h2>¡Vive el mundial con más intensidad que nunca!</h2>
        {!isLoading && !user && (
          <div className={styles.div}>
            <p>Inicia sesión con:</p>
            <LoginButton id='GoogleButton' onClick={(event) => handleClick(event, 'Google')}>
              <GoogleLogo height='24' width='24' />
              Google
            </LoginButton>
            <LoginButton id='FacebookButton' onClick={(event) => handleClick(event, 'Facebook')}>
              <FacebookLogo height='24' width='24' />
              Facebook
            </LoginButton>
            <LoginButton id='TwitterButton' onClick={(event) => handleClick(event, 'Twitter')}>
              <TwitterLogo height='24' width='24' />
              Twitter
            </LoginButton>
          </div>
        )}
        {user && (
          <div className={styles.div}>
            <p>
              ¡Bienvenido <strong>{user.displayName}</strong>!
            </p>
            <p>
              Has iniciado sesión con el correo: <strong>{user.email}</strong>
            </p>
            <p>Redireccionando al panel principal, un momento por favor.</p>
          </div>
        )}
      </section>
    </MainLayout>
  )
}
