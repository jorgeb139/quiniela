// import useSWR from "swr"
import { Grid } from "@mui/material"
import MainLayout from "../../components/MainLayout"
import MatchesResults from "./MatchesResults"
import styles from "./styles"

export default function Resultados() {
  return (
    <MainLayout
      title="Resultados | Quiniela Mundial"
      description="Calendario de partidos del mundial"
    >
      <div style={{ flexGrow: 1 }}>
        {/* <h1 className="title">Grupos y calendario</h1> */}
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item xs={12}>
            <MatchesResults />
          </Grid>
        </Grid>
      </div>
      <style jsx>{styles}</style>
    </MainLayout>
  )
}
