// import useSWR from "swr"
import MainLayout from "../../components/MainLayout"
export default function Resultados({ response }) {
  return (
    <MainLayout
      title="Resultados | Quiniela Mundial"
      description="Calendario de partidos del mundial"
    >
      <h1>Resultados:</h1>
      {response.map(
        ({
          id,
          homeTeam,
          awayTeam,
          homeTeamScore,
          status,
          awayTeamScore,
          homeGoals,
          awayGoals,
        }) => (
          <div key={id}>
            <h2>
              {homeTeam} {homeTeamScore} - {awayTeamScore} {awayTeam}
            </h2>
            <p>Status del partido: {status}</p>
            Goles Local:
            {homeGoals.map(({ id, player, minute }) => (
              <div key={id}>
                <p>Jugador: {player}</p>
                <p>Minuto: {minute}</p>
              </div>
            ))}
            Goles Visitante:
            {awayGoals.map(({ id, player, minute }) => (
              <div key={id}>
                <p>Jugador: {player}</p>
                <p>Minuto: {minute}</p>
              </div>
            ))}
          </div>
        )
      )}
    </MainLayout>
  )
}

Resultados.getInitialProps = async () => {
  return fetch("https://my-json-server.typicode.com/jorgeb139/lab_arch/games")
    .then((res) => res.json())
    .then((response) => {
      return { response }
    })
}

// // import useSWR from "swr"
// import MainLayout from "../../components/MainLayout"
// export default function Resultados({ response }) {
//   return (
//     <MainLayout
//       title="Resultados | Quiniela Mundial"
//       description="Calendario de partidos del mundial"
//     >
//       <h1>Resultados:</h1>
//       {response.map(
//         ({
//           id,
//           homeTeam,
//           awayTeam,
//           homeTeamScore,
//           status,
//           awayTeamScore,
//           homeGoals,
//           awayGoals,
//         }) => (
//           <div key={id}>
//             <h2>
//               {homeTeam} {homeTeamScore} - {awayTeamScore} {awayTeam}
//             </h2>
//             <p>Status del partido: {status}</p>
//             Goles Local:
//             {homeGoals.map(({ id, player, minute }) => (
//               <div key={id}>
//                 <p>Jugador: {player}</p>
//                 <p>Minuto: {minute}</p>
//               </div>
//             ))}
//             Goles Visitante:
//             {awayGoals.map(({ id, player, minute }) => (
//               <div key={id}>
//                 <p>Jugador: {player}</p>
//                 <p>Minuto: {minute}</p>
//               </div>
//             ))}
//           </div>
//         )
//       )}
//     </MainLayout>
//   )
// }

// Resultados.getInitialProps = async () => {
//   return fetch("https://my-json-server.typicode.com/jorgeb139/lab_arch/games")
//     .then((res) => res.json())
//     .then((response) => {
//       return { response }
//     })
// }
