import styles, { globalStyles } from "./styles"

import Head from "next/head"
import PrincipalHeader from "../Header/PrincipalHeader"
import Grid from "@mui/material/Unstable_Grid2"

const MainLayout = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/img/copa-mundial.png" />
      </Head>
      <Grid container>
        <Grid item xs={12}>
          <PrincipalHeader />
        </Grid>
        <Grid item xs={12} justifyContent="center"></Grid>
      </Grid>
      <Grid
        container
        justifyContent="center"
        sx={{
          margin: { xs: "50px 5vh", md: "50px 10vh" },
        }}
      >
        {/* <div className="bgContainer"> */}
        {/* <div className="prueba">{children}</div> */}
        {children}
        {/* </div> */}
      </Grid>
      {/* <div className="principalContainer"> */}
      {/* <header className="principalSection"></header> */}

      {/* <main>
          </main> */}

      {/* <footer>
            <Footer/>
        </footer> */}
      {/* </div> */}

      <style jsx>{styles}</style>
      <style jsx>{globalStyles}</style>
    </>
  )
}
export default MainLayout

MainLayout.defaultProps = {
  title: "Quiniela Mundial",
  description:
    "Quiniela Mundial es una aplicación que permite jugar a la quiniela de una manera fácil y rápida.",
}
