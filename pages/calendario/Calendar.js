import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material"
import { useState, useEffect } from "react"
import axios from "axios"

export default function Calendar({ groupMatches }) {
  const baseURL =
    "https://my-json-server.typicode.com/jorgeb139/lab_arch/matches"

  const [group, setGroup] = useState([])

  useEffect(() => {
    ;(async () => {
      const data = await axios.get(baseURL)
      console.log("Data: ", data.data[groupMatches - 1])
      setGroup(data.data[groupMatches - 1])
    })()
  }, [groupMatches])

  return (
    <div>
      {group === undefined ? (
        <div>Cargando</div>
      ) : (
        // console.log("group: ", group.matches)
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableBody>
              {group.matches?.map(
                ({ id, date, time, home, homeflag, away, awayflag }) => (
                  <TableRow
                    key={id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center" component="th" scope="row">
                      {`${date}`}
                      <br />
                      {`${time}`}
                    </TableCell>
                    <TableCell align="center">
                      Band
                      <br />
                      {`${home}`}
                    </TableCell>
                    <TableCell align="center">
                      {" "}
                      Band
                      <br />
                      {`${away}`}
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {/* {groups !== undefined &&
        console.log("groups: ", groups[groupMatches - 1].matches)} */}
      {/* console.log("group: ", groups[groupMatches - 1]["matches"]) */}
      {}
      {/* {groups?.map(({ id, group, matches }) => {
        console.log("groupMatches: ", groupMatches)
        console.log("id: ", id)
        console.log("groups: ", groups)
        if (groupMatches === id) {
          console.log("entró acá con id: ", id)
          return (
            <TableContainer key={id} component={Paper}>
              <Table aria-label="simple table" stickyHeader>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell width="5px" component="th" scope="row">
                      {id}
                    </TableCell>
                    <TableCell align="left">{id}</TableCell>
                    <TableCell align="center">{id}</TableCell>
                    <TableCell align="center">{id}</TableCell>
                    <TableCell align="right">{id}</TableCell>
                    <TableCell width="5px">{id}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          )
        } else {
          return <div key={id}>Cargando</div>
        }
      })} */}
    </div>
  )
}
