import useSWR from 'swr';
import MainLayout from '../../components/MainLayout'

export default function Resultados({ data }){
    // const { data, error } = useSWR('/api/getGamesData', fetcher)
    
    // if (error) return <div>Falló al cargar la información de los partidos</div>
    // if (!data) return <div>Cargando...</div>

    return (
        <MainLayout title="Resultados | Quiniela Mundial" description="Calendario de partidos del mundial">
            <h1>Resultados:</h1>
            {data.map(({ id, title, body }) => (
                <div key={id}>
                <h3>{title}</h3>
                <p>{body}</p>
                </div>
            ))}
            {/* {JSON.parse(data).games.map(({ id, homeTeam, awayTeam, homeTeamScore, awayTeamScore, status, homeGoals, awayGoals }) => (
                <div key={id}>
                    <h2>{homeTeam} vs {awayTeam}</h2>
                    <p>Marcador: {homeTeamScore} - {awayTeamScore}</p>
                    <p>Status del partido: {status}</p>
                    Goles:
                    {
                        homeGoals.map(({ id, player, minute }) => (
                            <div key={id}>
                                <p>Jugador: {player}</p>
                                <p>Minuto: {minute}</p>
                            </div>
                        ))
                    }
                </div>
            ))} */}
        </MainLayout>
    )
}

export async function getStaticProps() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    //   const res = await fetch("https://drive.google.com/file/d/1sMCjXpfTe7z_n7nDWv-3kLoir56d_OlL/view?usp=sharing");
      const data = await res.json();
      return {
        props: {
          data,
        },
      };
    } catch (error) {
      console.log(error);
    }
  }
// export async function getStaticProps() {
//     try {
//         const fetcher = (url) => fetch(url).then((res) => res.json());
//         const { data, error } = useSWR('/api/getGamesData', fetcher)
    
//         // if (error) return <div>Falló al cargar la información de los partidos</div>
//         // if (!data) return <div>Cargando...</div>
//     //   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     //   const data = await res.json();
//       return {
//         props: {
//           data,
//         },
//       };
//     } catch (error) {
//       console.log(error);
//     }
// }
