import Image from "next/image"
import { useState, useEffect } from "react"

import MainLayout from "../components/MainLayout"
import Button from "../components/Button"
import { colors } from "../styles/theme"
import GoogleLogo from "../components/Icons/Google"
import FacebookLogo from "../components/Icons/Facebook"
import TwitterLogo from "../components/Icons/Twitter"
import LoginModal from "../components/LoginModal"
import {
  loginWithGoogle,
  loginWithFacebook,
  loginWithTwitter,
  onAuthStateChange,
} from "../firebase/client"

export default function Home() {
  // Save the user data in the state
  const [user, setUser] = useState(undefined)

  // Check if the user is logged in when the component is mounted
  useEffect(() => {
    onAuthStateChange(setUser)
  }, [])

  const formModal = {
    email: "",
    password: "",
  }

  const handleClick = (event, network) => {
    if (network === "Google") {
      loginWithGoogle()
        .then(setUser)
        .catch((err) => {
          console.log(err)
        })
    } else if (network === "Facebook") {
      loginWithFacebook()
        .then(setUser)
        .catch((err) => {
          console.log(err)
        })
    } else if (network === "Twitter") {
      loginWithTwitter()
        .then(setUser)
        .catch((err) => {
          console.log(err)
        })
    }
  }

  return (
    <>
      <MainLayout
        title="Quiniela Mundial"
        description="Encontrarás todas las opciones para disfrutar tu quiniela"
      >
        <section>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src={"/img/copa-mundial.png"}
              height={120}
              width={120}
              alt="Banner hero"
            />
          </div>
          <h1>
            Bienvenidos a <br />
            <strong>Quiniela Mundial</strong>
          </h1>
          <h2>¡Vive el mundial con más intensidad que nunca!</h2>
          {user === null && (
            <div>
              <p>Inicia sesión con:</p>
              <Button
                id="GoogleButton"
                onClick={(event) => handleClick(event, "Google")}
              >
                <GoogleLogo height="24" width="24" />
                Google
              </Button>
              <Button
                id="FacebookButton"
                onClick={(event) => handleClick(event, "Facebook")}
              >
                <FacebookLogo height="24" width="24" />
                Facebook
              </Button>
              <Button
                id="TwitterButton"
                onClick={(event) => handleClick(event, "Twitter")}
              >
                <TwitterLogo height="24" width="24" />
                Twitter
              </Button>
              <Button id="EmailButton">
                {/* <EmailLogo height="24" width="24"/> */}
                Correo electrónico
              </Button>
            </div>
          )}
          {user && (
            <div>
              <p>
                ¡Bienvenido <strong>{user.displayName}</strong>
              </p>
              <p>
                Has iniciado sesión con el correo: <strong>{user.email}</strong>
              </p>
            </div>
          )}
          <LoginModal formModal={formModal} />
        </section>
      </MainLayout>

      <style jsx>{`
        div {
          margin-top: 16px;
        }

        section {
          display: grid;
          height: 100%;
          place-items: center;
          place-content: center;
        }

        h1 {
          color: ${colors.primary};
          font-weight: 800;
          margin-bottom: 16px;
          font-size: 30px;
        }

        h2 {
          color: ${colors.secondary};
          font-size: 19px;
          margin: 0;
        }
      `}</style>
    </>
  )
}
