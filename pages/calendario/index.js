import { Grid } from "@mui/material"
import { useState } from "react"

import MainLayout from "../../components/MainLayout"
import Calendar from "./Calendar"
import Groups from "./Groups"
import styles from "./styles"

export default function Calendario(response) {
  const [groupMatches, setGroupMatches] = useState("1")

  return (
    <MainLayout
      title="Calendario | Quiniela Mundial"
      description="Calendario de partidos del mundial"
    >
      <div style={{ flexGrow: 1 }}>
        {/* <h1 className="title">Grupos y calendario</h1> */}
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Groups setGroupMatches={setGroupMatches} />
          </Grid>
          <Grid item xs={12} md={5}>
            <Calendar groupMatches={groupMatches} />
          </Grid>
        </Grid>
      </div>
      <style jsx>{styles}</style>
    </MainLayout>
  )
}
