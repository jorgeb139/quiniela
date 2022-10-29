import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material"
import SpainFlag from "../../components/Icons/flags/spain"

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
  createData(
    <SpainFlag height="24" width="24" />,
    "Qatar",
    1,
    0,
    "Ecuador",
    <SpainFlag height="24" width="24" />
  ),
  createData(
    <SpainFlag height="24" width="24" />,
    "Alemania",
    1,
    3,
    "Australia",
    <SpainFlag height="24" width="24" />
  ),
  createData(
    <SpainFlag height="24" width="24" />,
    "Argentina",
    1,
    0,
    "Brasil",
    <SpainFlag height="24" width="24" />
  ),
  createData(
    <SpainFlag height="24" width="24" />,
    "España",
    1,
    0,
    "Senegal",
    <SpainFlag height="24" width="24" />
  ),
  createData(
    <SpainFlag height="24" width="24" />,
    "Francia",
    1,
    0,
    "Inglaterra",
    <SpainFlag height="24" width="24" />
  ),
]

export default function Calendar() {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table" stickyHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.homeTeam}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell width="5px" component="th" scope="row">
                  {row.homeFlag}
                </TableCell>
                <TableCell align="left">{row.homeTeam}</TableCell>
                <TableCell align="center">{row.homeGoals}</TableCell>
                <TableCell align="center">{row.awayGoals}</TableCell>
                <TableCell align="right">{row.awayTeam}</TableCell>
                <TableCell width="5px">{row.awayFlag}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
