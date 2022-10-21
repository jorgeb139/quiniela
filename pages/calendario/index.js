import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material"
import Paper from "@mui/material/Paper"
import MainLayout from "../../components/MainLayout"

function createData(
  homeFlag,
  homeTeam,
  homeGoals,
  awayGoals,
  awayTeam,
  awayFlag
) {
  return { homeFlag, homeTeam, homeGoals, awayGoals, awayTeam, awayFlag }
}

const rows = [
  createData("Ban", "Qatar", 1, 0, "Ecuador", "Ban"),
  createData("Ban", "Alemania", 1, 3, "Australia", "Ban"),
  createData("Ban", "Argentina", 1, 0, "Brasil", "Ban"),
  createData("Ban", "España", 1, 0, "Senegal", "Ban"),
  createData("Ban", "Francia", 1, 0, "Inglaterra", "Ban"),
  createData("Ban", "Qatar", 1, 0, "Ecuador", "Ban"),
  createData("Ban", "Alemania", 1, 3, "Australia", "Ban"),
  createData("Ban", "Argentina", 1, 0, "Brasil", "Ban"),
  createData("Ban", "España", 1, 0, "Senegal", "Ban"),
  createData("Ban", "Francia", 1, 0, "Inglaterra", "Ban"),
  createData("Ban", "Qatar", 1, 0, "Ecuador", "Ban"),
  createData("Ban", "Alemania", 1, 3, "Australia", "Ban"),
  createData("Ban", "Argentina", 1, 0, "Brasil", "Ban"),
  createData("Ban", "España", 1, 0, "Senegal", "Ban"),
  createData("Ban", "Francia", 1, 0, "Inglaterra", "Ban"),
  createData("Ban", "Qatar", 1, 0, "Ecuador", "Ban"),
  createData("Ban", "Alemania", 1, 3, "Australia", "Ban"),
  createData("Ban", "Argentina", 1, 0, "Brasil", "Ban"),
  createData("Ban", "España", 1, 0, "Senegal", "Ban"),
  createData("Ban", "Francia", 1, 0, "Inglaterra", "Ban"),
]

export default function Calendario() {
  return (
    <MainLayout
      title="Calendario | Quiniela Mundial"
      description="Calendario de partidos del mundial"
    >
      <TableContainer component={Paper}>
        <Table aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Ban </TableCell>
              <TableCell>Local</TableCell>
              <TableCell>Goles</TableCell>
              <TableCell>Goles</TableCell>
              <TableCell>Visitante</TableCell>
              <TableCell>Ban </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.homeTeam}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.homeFlag}
                </TableCell>
                <TableCell>{row.homeTeam}</TableCell>
                <TableCell>{row.homeGoals}</TableCell>
                <TableCell>{row.awayGoals}</TableCell>
                <TableCell>{row.awayTeam}</TableCell>
                <TableCell>{row.awayFlag}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <h1>Calendario</h1>
    </MainLayout>
  )
}
