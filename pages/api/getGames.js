// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200
  res.json({
    games: {
      id1: {
        id: 1,
        homeTeam: "Brasil",
        homeTeamScore: 3,
        homeGoals: [
          {
            id: 1,
            player: "Neymar Jr.",
            minute: "10",
          },
          {
            id: 2,
            player: "Neymar Jr.",
            minute: "42",
          },
          {
            id: 3,
            player: "Lucas Paquetá",
            minute: "73",
          },
        ],
        awayTeam: "Croacia",
        awayTeamScore: 0,
        awayGoals: [],
        date: "2018-06-18T18:00:00.000Z",
        status: "FINISHED", // "FINISHED", "IN_PLAY", "NOT_STARTED"
      },
      id2: {
        id: 2,
        homeTeam: "Argentina",
        homeTeamScore: 1,
        homeGoals: [
          {
            id: 1,
            player: "Lionel Messi",
            minute: "89",
          },
        ],
        awayTeam: "Venezuela",
        awayTeamScore: 5,
        awayGoals: [
          {
            id: 1,
            player: "Salomón Rondón",
            minute: "1",
          },
          {
            id: 2,
            player: "Salomón Rondón",
            minute: "2",
          },
          {
            id: 3,
            player: "Nathaly Varela",
            minute: "5",
          },
          {
            id: 4,
            player: "Raúl Febres",
            minute: "7",
          },
          {
            id: 5,
            player: "Jorge Burguera",
            minute: "13",
          },
        ],
        date: "2018-07-18T18:00:00.000Z",
        status: "FINISHED",
      },
    },
  })
  // res.json({id: 1, homeTeam: "Brasil"},{ id: 2, homeTeam: "Croacia" })
}
