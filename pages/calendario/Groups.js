import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material"
import axios from "axios"
import { useState, useEffect } from "react"

export default function Groups({ setGroupMatches }) {
  const baseURL =
    "https://my-json-server.typicode.com/jorgeb139/lab_arch/groups"

  const [groups, setGroups] = useState([])
  const [expanded, setExpanded] = useState("panel1")

  const handleChange = (id) => (event, newExpanded) => {
    setExpanded(newExpanded ? `panel${id}` : false)
    setGroupMatches(id)
  }

  useEffect(() => {
    ;(async () => {
      const data = await axios.get(baseURL)
      setGroups(data.data)
    })()
  }, [])

  return (
    <div>
      {groups?.map(({ id, countries, group }) => (
        <Accordion
          expanded={expanded === `panel${id}`}
          onChange={handleChange(id)}
          key={id}
        >
          <AccordionSummary
            aria-controls={`panel${id}d-content`}
            id={`panel${id}`}
          >
            <Typography color={"black"}>Grupo {group}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>País</TableCell>
                    <TableCell align="right">PJ</TableCell>
                    <TableCell align="right">PG</TableCell>
                    <TableCell align="right">PE</TableCell>
                    <TableCell align="right">PP</TableCell>
                    <TableCell align="right">GF</TableCell>
                    <TableCell align="right">GC</TableCell>
                    <TableCell align="right">Dif</TableCell>
                    <TableCell align="right">Puntos</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {countries?.map(
                    ({
                      id,
                      country,
                      gamesPlayed,
                      gamesWon,
                      gamesTied,
                      gamesLost,
                      goalsFavor,
                      goalsAgainst,
                      goalsDifference,
                      points,
                    }) => (
                      <TableRow
                        key={id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {country}
                        </TableCell>
                        <TableCell align="right">{gamesPlayed}</TableCell>
                        <TableCell align="right">{gamesWon}</TableCell>
                        <TableCell align="right">{gamesTied}</TableCell>
                        <TableCell align="right">{gamesLost}</TableCell>
                        <TableCell align="right">{goalsFavor}</TableCell>
                        <TableCell align="right">{goalsAgainst}</TableCell>
                        <TableCell align="right">{goalsDifference}</TableCell>
                        <TableCell align="center">{points}</TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  )
}
