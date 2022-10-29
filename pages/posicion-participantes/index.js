import {
  Table,
  TableContainer,
  Grid,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
} from "@mui/material"
import Paper from "@mui/material/Paper"
import MainLayout from "../../components/MainLayout"

function createData(position, username, points) {
  return { position, username, points }
}

const rows = [
  createData(1, "Jugador 1", 10),
  createData(2, "Jugador 2", 9),
  createData(3, "Jugador 3", 8),
  createData(4, "Jugador 4", 7),
  createData(5, "Jugador 5", 6),
  createData(6, "Jugador 6", 5),
  createData(7, "Jugador 7", 4),
  createData(8, "Jugador 8", 3),
  createData(9, "Jugador 9", 2),
  createData(10, "Jugador 10", 1),
]

export default function PosicionJugadores() {
  return (
    <MainLayout
      title="Calendario | Quiniela Mundial"
      description="Calendario de partidos del mundial"
    >
      <Grid container justifyContent="center" sx={{ width: "450px" }}>
        <Grid item>
          <TableContainer component={Paper}>
            <Table aria-label="simple table" stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>Posición</TableCell>
                  <TableCell>Usuario</TableCell>
                  <TableCell>Puntos</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.username}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.position}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.username}
                    </TableCell>
                    <TableCell>{row.points}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <h1>Calendario</h1>
    </MainLayout>
  )
}
