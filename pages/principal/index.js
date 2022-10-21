import { Grid } from "@mui/material"
import MainLayout from "../../components/MainLayout"
import styles from "./styles"

export default function Home() {
  return (
    <>
      <MainLayout
        title="Quiniela Mundial"
        description="Encontrarás todas las opciones para disfrutar tu quiniela"
      >
        <Grid container>
          <Grid item xs={12}>
            <h1 className="principalTitle">
              Bienvenidos a <strong>Quiniela Mundial</strong>
            </h1>
          </Grid>
        </Grid>
      </MainLayout>

      <style jsx>{styles}</style>
    </>
  )
}
