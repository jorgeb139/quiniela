import Image from "next/image";
import {useState} from 'react';

import MainLayout from "../components/MainLayout";
import Button from "../components/Button";
import {colors} from '../styles/theme'
import GoogleLogo from "../components/Icons/Google";
import FacebookLogo from "../components/Icons/Facebook";
import TwitterLogo from "../components/Icons/Twitter";
import LoginModal from "../components/LoginModal";
import { loginWithGoogle, loginWithFacebook, loginWithTwitter } from "../firebase/client";

export default function Home() {

  const [user, setUser] = useState(null);

  const formModal = {
    email: "",
    password: "",
  }

  const handleClick = (event, network) => {
    if (network === "Google") {
      loginWithGoogle().then(user => {
        const { displayName, email, photoURL, uid } = user;
        setUser(user)
        console.log(first)
      }).catch(err => {
        console.log(err)
      })
    } else if (network === "Facebook") {
      loginWithFacebook().then(user => {
        const { displayName, email, photoURL, uid } = user;
        setUser(user)
        console.log(user)
      }).catch(err => {
        console.log(err)
      })
    } else if (network === "Twitter") {
      loginWithTwitter().then(user => {
        const { displayName, email, photoURL, uid } = user;
        setUser(user)
        console.log(user)
      }).catch(err => {
        console.log(err)
      })
    }

  }

  return (
    <>
      <MainLayout title="Quiniela Mundial" description="Encontrarás todas las opciones para disfrutar tu quiniela">
        <section>
          <div style={{
            display: "flex",
            justifyContent: "center",
          }}>
            <Image
              src={"/img/copa-mundial.png"}
              height={120}
              width={120}
              alt="Banner hero"
            />
          </div>
          <h1>
            Bienvenidos a <br/><strong>Quiniela Mundial</strong>
          </h1>
          <h2>
            ¡Vive el mundial con más intensidad que nunca!
          </h2>
          <div>
            <p>Inicia sesión con:</p>
            <Button id="GoogleButton" onClick={event => handleClick(event, 'Google')}>
              <GoogleLogo height="24" width="24"/>
              Google
            </Button>
            <Button id="FacebookButton" onClick={event => handleClick(event, 'Facebook')}>
              <FacebookLogo height="24" width="24"/>
              Facebook
            </Button>
            <Button id="TwitterButton" onClick={event => handleClick(event, 'Twitter')}>
              <TwitterLogo height="24" width="24"/>
              Twitter
            </Button>
            <Button id="EmailButton">
              {/* <EmailLogo height="24" width="24"/> */}
              Correo electrónico
            </Button>
          </div>
          <LoginModal formModal = { formModal }/>
        </section>
      </MainLayout>

      <style jsx>{`

        div{
          margin-top: 16px;
        }

        section{
          display: grid;
          height: 100%;
          place-items: center;
          place-content: center;
        }

        h1{
          color: ${colors.primary};
          font-weight: 800;
          margin-bottom: 16px;
          font-size: 30px;
        }

        h2{
          color: ${colors.secondary};
          font-size: 19px;
          margin: 0;
        }

      `}</style>
    </>
  );
}
