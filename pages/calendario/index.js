import { Grid } from "@mui/material"
import { useState } from "react"

import MainLayout from "../../components/MainLayout"
import Calendar from "./Calendar"
import Groups from "./Groups"

export default function Calendario(response) {
  const [groupMatches, setGroupMatches] = useState("1")

  return (
    <MainLayout
      title="Calendario | Quiniela Mundial"
      description="Calendario de partidos del mundial"
    >
      <div style={{ flexGrow: 1 }}>
        <h1>Grupos y calendario</h1>
        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            <Groups setGroupMatches={setGroupMatches} />
          </Grid>
          <Grid item xs={12} md={5}>
            <Calendar groupMatches={groupMatches} />
          </Grid>
        </Grid>
      </div>
    </MainLayout>
  )
}
