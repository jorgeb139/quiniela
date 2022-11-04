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
} from "@mui/material"
import axios from "axios"
import { useState, useEffect } from "react"
import styles from "./styles"
import { colors } from "../../styles/theme"
import { Box } from "@mui/system"

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
    <>
      {groups?.map(({ id, countries, group }) => (
        <Accordion
          expanded={expanded === `panel${id}`}
          onChange={handleChange(id)}
          key={id}
          // sx={{ paddingRight: "120px" }}
        >
          <AccordionSummary
            aria-controls={`panel${id}d-content`}
            id={`panel${id}`}
            sx={{
              backgroundColor: colors.primaryAccordion,
              borderRadius: "5px 5px 0px 0px",
            }}
          >
            <span className="groupTitleAccordion">Grupo {group}</span>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: colors.primaryTable,
            }}
          >
            <Box className="mobileTableContainer">
              <TableContainer>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow
                      sx={{
                        "&:nth-child(n) th, &:nth-child(n) td": { border: 0 },
                      }}
                    >
                      <TableCell>
                        <span className="tableHeaderTexts">País</span>
                      </TableCell>
                      <TableCell align="right">
                        <span className="tableHeaderTexts">PJ</span>
                      </TableCell>
                      <TableCell align="right">
                        <span className="tableHeaderTexts">PG</span>
                      </TableCell>
                      <TableCell align="right">
                        <span className="tableHeaderTexts">PE</span>
                      </TableCell>
                      <TableCell align="right">
                        <span className="tableHeaderTexts">PP</span>
                      </TableCell>
                      <TableCell align="center">
                        <span className="tableHeaderTexts">Puntos</span>
                      </TableCell>
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
                        points,
                      }) => (
                        <TableRow
                          key={id}
                          sx={{
                            "&:nth-child(n) th, &:nth-child(n) td": {
                              border: 0,
                            },
                            "&:nth-of-type(odd)": {
                              backgroundColor: colors.secondaryTable,
                            },
                            "&:nth-of-type(even)": {
                              backgroundColor: colors.primaryTable,
                            },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            <span className="tableBodyTexts">{country}</span>
                          </TableCell>
                          <TableCell align="right">
                            <span className="tableBodyTexts">
                              {gamesPlayed}
                            </span>
                          </TableCell>
                          <TableCell align="right">
                            <span className="tableBodyTexts">{gamesWon}</span>
                          </TableCell>
                          <TableCell align="right">
                            <span className="tableBodyTexts">{gamesTied}</span>
                          </TableCell>
                          <TableCell align="right">
                            <span className="tableBodyTexts">{gamesLost}</span>
                          </TableCell>
                          <TableCell align="center">
                            <span className="tableBodyTexts">{points}</span>
                          </TableCell>
                        </TableRow>
                      )
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
      <style jsx>{styles}</style>
    </>
  )
}
