import { Grid } from "@mui/material"

import MainLayout from "../../components/MainLayout"
import Calendar from "./Calendar"
import Groups from "./Groups"

export default function Calendario(response) {
  console.log("Response:", response)
  return (
    <MainLayout
      title="Calendario | Quiniela Mundial"
      description="Calendario de partidos del mundial"
    >
      <div style={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            <Groups />
          </Grid>
          <Grid item xs={12} md={5}>
            <Calendar />
          </Grid>
        </Grid>
      </div>
    </MainLayout>
  )
}
