import axios from "axios"
import { useState, useEffect } from "react"
import styles from "./styles"
import { Card, CardContent, Grid } from "@mui/material"
import Image from "next/image"
import { colors } from "../../styles/theme"

export default function MatchesResults() {
  const baseURL =
    "https://my-json-server.typicode.com/jorgeb139/foodDelivery/results"
  const [user, setUser] = useState([])
  const [userCopy, setUserCopy] = useState([])

  useEffect(() => {
    ;(async () => {
      const data = await axios.get(baseURL)

      const foundUser = data.data.find((element) => element.userId === 1) // Need to obtain the user from local storage
      setUser(foundUser)
      setUserCopy(foundUser)
    })()
  }, [])

  const predictsUpdate = (data, type) => {
    console.log("type: ", type)
  }

  const handleOnChange = (event, groupId, id, team, status) => {
    if (status === "NOT STARTED") {
      const enemy = team === "homePredicted" ? "awayPredicted" : "homePredicted"
      const tempUser = { ...user }
      const value = !isNaN(parseInt(event.target.value))
        ? parseInt(event.target.value)
        : ""
      tempUser.pronostics[groupId - 1].matches[id - 1][team] = value
      setUser(tempUser)
      setUserCopy(tempUser)
      if (
        !isNaN(
          parseInt(
            tempUser.pronostics[groupId - 1].matches[id - 1].homePredicted
          )
        ) &&
        !isNaN(
          parseInt(
            tempUser.pronostics[groupId - 1].matches[id - 1].awayPredicted
          )
        )
      ) {
        predictsUpdate(tempUser, "update")
      } else if (
        tempUser.pronostics[groupId - 1].matches[id - 1][team] === "" &&
        userCopy.pronostics[groupId - 1].matches[id - 1][enemy] === ""
      ) {
        tempUser.pronostics[groupId - 1].matches[id - 1][enemy] = ""
        predictsUpdate(tempUser, "reset")
      }
    }
  }

  return (
    <>
      {user.length === 0 ? (
        <div>Cargando...</div>
      ) : (
        <Grid container sx={{ padding: { lg: "0 15%", md: "0 5%" } }}>
          {user.pronostics?.map(({ id, group, matches }) => (
            <Grid
              container
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
              key={id}
            >
              <Grid item xs={12} padding="20px 0">
                <h2 className="group-title">Grupo {group}</h2>
              </Grid>
              {matches?.map(
                ({
                  id,
                  groupId,
                  date,
                  time,
                  home,
                  homeScore,
                  homeflag,
                  homePredicted,
                  away,
                  awayScore,
                  awayflag,
                  awayPredicted,
                  points,
                  status,
                }) => (
                  <Grid
                    item
                    xs={12}
                    md={4}
                    key={id}
                    className="inputBox"
                    padding={1}
                  >
                    <Card
                      sx={{
                        minWidth: 275,
                        minHeight: 270,
                        backgroundColor: colors.primaryDark,
                      }}
                    >
                      <CardContent
                        className={"cardMatches"}
                        sx={{ backgroundColor: colors.primaryDark }}
                      >
                        <div className="flexRow dateRow">
                          <span className="cardDate">
                            {date.day} {date.month}
                            <br />
                            {time}
                          </span>
                        </div>
                        <section className="teamsContainer">
                          <div className="flexRow">
                            <div className="cardDate">
                              <Image
                                src={"/img/Paises-bajos-bandera.png"}
                                alt="Qatar"
                                width={53}
                                height={53}
                                layout="intrinsic"
                              />
                              <br />
                              <span>{home}</span>
                            </div>
                          </div>
                          <div className="flexRow inputsContainer">
                            <input
                              readOnly={status !== "NOT STARTED"}
                              pattern="[0-9]"
                              type="tel"
                              autoComplete="off"
                              className={`inputField ${
                                homePredicted !== "" && status === "NOT STARTED"
                                  ? "inputFieldFilled"
                                  : homePredicted !== "" &&
                                    status !== "NOT STARTED"
                                  ? "inputFieldFilledPast"
                                  : homePredicted === "" &&
                                    status !== "NOT STARTED"
                                  ? "inputFieldPast"
                                  : "inputFieldActiveEmpty"
                              }`}
                              maxLength="1"
                              defaultValue={homePredicted}
                              onChange={(event) =>
                                handleOnChange(
                                  event,
                                  groupId,
                                  id,
                                  "homePredicted",
                                  status
                                )
                              }
                            />
                            <input
                              readOnly={status !== "NOT STARTED"}
                              pattern="[0-9]"
                              type="tel"
                              autoComplete="off"
                              className={`inputField ${
                                awayPredicted !== "" && status === "NOT STARTED"
                                  ? "inputFieldFilled"
                                  : awayPredicted !== "" &&
                                    status !== "NOT STARTED"
                                  ? "inputFieldFilledPast"
                                  : awayPredicted === "" &&
                                    status !== "NOT STARTED"
                                  ? "inputFieldPast"
                                  : "inputFieldActiveEmpty"
                              }`}
                              maxLength="1"
                              defaultValue={awayPredicted}
                              onChange={(event) =>
                                handleOnChange(
                                  event,
                                  groupId,
                                  id,
                                  "awayPredicted",
                                  status
                                )
                              }
                            />
                          </div>
                          <div className="flexRow">
                            <div className="cardDate">
                              <Image
                                src={"/img/Ecuador-bandera.png"}
                                alt="Qatar"
                                width={53}
                                height={53}
                                layout="intrinsic"
                              />
                              <br />
                              <span>{away}</span>
                            </div>
                          </div>
                        </section>
                        <div className="flexRow">
                          <span className="cardResults">
                            {status === "NOT STARTED"
                              ? "Sin comenzar"
                              : status === "PLAYING"
                              ? "En juego"
                              : "Resultado: " + homeScore + " - " + awayScore}
                          </span>
                        </div>
                        <div className="flexRow">
                          <span className="cardPoints">
                            {status === "NOT STARTED"
                              ? "0 pts"
                              : points + " puntos"}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
                )
              )}
            </Grid>
          ))}
        </Grid>
      )}
      <style jsx>{styles}</style>
    </>
  )
}
