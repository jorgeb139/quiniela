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
import Image from "next/image"
import styles from "./styles"
import { colors } from "../../styles/theme"

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
    <>
      {group === undefined ? (
        <div>Cargando</div>
      ) : (
        // console.log("group: ", group.matches)
        <TableContainer component={Paper}>
          <Table aria-label="simple table" className={"calendarTable"}>
            <TableBody>
              {group.matches?.map(
                ({ id, date, time, home, homeflag, away, awayflag }) => (
                  <TableRow
                    key={id}
                    sx={{
                      "&:nth-child(n) th, &:nth-child(n) td": { border: 0 },
                      "&:nth-of-type(odd)": {
                        backgroundColor: colors.primaryTable,
                      },
                      "&:nth-of-type(even)": {
                        backgroundColor: colors.secondaryTable,
                      },
                    }}
                  >
                    <TableCell align="center" width="40px">
                      <span
                        className={`dayText ${id % 2 === 0 ? "dark" : "light"}`}
                      >
                        {`${
                          id > 1
                            ? group.matches[id - 2].date.day === date.day
                              ? ""
                              : date.day
                            : date.day
                        }`}
                      </span>
                      <br />
                      <span
                        className={`monthText ${
                          id % 2 === 0 ? "dark" : "light"
                        }`}
                      >
                        {`${
                          id > 1
                            ? group.matches[id - 2].date.day === date.day
                              ? ""
                              : date.month
                            : date.month
                        }`}
                      </span>
                    </TableCell>
                    <TableCell align="center">
                      <Image
                        src={"/img/Ecuador-bandera.png"}
                        alt="Qatar"
                        width={26}
                        height={26}
                        layout="intrinsic"
                      />
                      <br />
                      <span
                        className={`
                        teamsText
                        ${id % 2 === 0 ? "dark" : "light"}`}
                      >
                        {`${home}`}
                      </span>
                    </TableCell>
                    <TableCell align="center">
                      <span
                        className={`
                        vsText
                        ${id % 2 === 0 ? "dark" : "light"}`}
                      >
                        VS
                      </span>
                    </TableCell>
                    <TableCell align="center">
                      <Image
                        src={"/img/Paises-bajos-bandera.png"}
                        alt="Qatar"
                        width={26}
                        height={26}
                        layout="intrinsic"
                      />
                      <br />
                      <span
                        className={`
                        teamsText
                        ${id % 2 === 0 ? "dark" : "light"}`}
                      >{`${away}`}</span>
                    </TableCell>
                    <TableCell align="center">
                      <span
                        className={`
                        timeText
                        ${id % 2 === 0 ? "dark" : "light"}`}
                      >{`${time}`}</span>
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
      <style jsx>{styles}</style>
    </>
  )
}
