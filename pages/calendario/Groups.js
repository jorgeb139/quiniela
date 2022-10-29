// import {
//   Accordion,
//   AccordionDetails,
//   AccordionSummary,
//   Typography,
// } from "@mui/material"
// import { useState } from "react"

// export default function Groups(response) {
//   const [expanded, setExpanded] = useState(false)

//   const handleChange = (panel) => (event, newExpanded) => {
//     setExpanded(newExpanded ? panel : false)
//   }

//   console.log(response)
//   return (
//     <div>
//       {response.map(({ id, group, countries }) => (
//         <div key={id}>
//           <h2>{group}</h2>
//           {countries.map(
//             ({
//               id,
//               country,
//               gamesPlayed,
//               gamesWon,
//               gamesTied,
//               gamesLost,
//               goalsFavor,
//               goalsAgainst,
//               goalsDifference,
//               points,
//             }) => (
//               <div key={id}>
//                 <p>País: {country}</p>
//                 <p>Partidos jugados: {gamesPlayed}</p>
//                 <p>Partidos ganados: {gamesWon}</p>
//                 <p>Partidos empatados: {gamesTied}</p>
//                 <p>Partidos perdidos: {gamesLost}</p>
//                 <p>Goles a favor: {goalsFavor}</p>
//                 <p>Goles en contra: {goalsAgainst}</p>
//                 <p>Diferencia de goles: {goalsDifference}</p>
//                 <p>Puntos: {points}</p>
//               </div>
//             )
//           )}
//         </div>
//       ))}

//       <Accordion
//         expanded={expanded === "panel1"}
//         onChange={handleChange("panel1")}
//       >
//         <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
//           <Typography>Collapsible Group Item #1</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
//             dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
//             lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//     </div>
//   )
// }

// Groups.getInitialProps = async () => {
//   return fetch("https://my-json-server.typicode.com/jorgeb139/lab_arch/groups")
//     .then((res) => res.json())
//     .then((response) => {
//       return { response }
//     })
// }
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

export default function Groups({ response }) {
  const baseURL =
    "https://my-json-server.typicode.com/jorgeb139/lab_arch/groups"

  const [groups, setGroups] = useState([])
  const [expanded, setExpanded] = useState(false)

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  useEffect(() => {
    ;(async () => {
      const data = await axios.get(baseURL)
      console.log("Grupos: ", data.data)
      setGroups(data.data)
    })()
  }, [])

  return (
    <div>
      <h1>Calendario:</h1>
      {groups?.map(({ id, countries, group }) => (
        <Accordion
          expanded={expanded === `panel${id}`}
          onChange={handleChange(`panel${id}`)}
          key={id}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
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
