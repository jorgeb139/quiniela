import Link from 'next/link'

export default function Header({userName}){
    return (
        <>
            <nav className = "principal-menu">
                <ul>
                    <li>
                    <Link href="/">
                        <a>
                        Inicio
                        </a>
                    </Link>
                    </li>
                    <li>
                    <Link href="/como-jugar">
                        <a>
                        ¿Cómo jugar?
                        </a>
                    </Link>
                    </li>
                    <li>
                    <Link href="/resultados">
                        <a>
                        Resultados
                        </a>
                    </Link>
                    </li>
                    <li>
                    <Link href="/calendario">
                        <a>
                        Calendario
                        </a>
                    </Link>
                    </li>
                    <li>
                    <Link href="/posicion-jugadores">
                        <a>
                        Posiciones de jugadores
                        </a>
                    </Link>
                    </li>
                    <li>
                    <Link href="/faqs">
                        <a>
                        Preguntas y respuestas
                        </a>
                    </Link>
                    </li>
                </ul>
            </nav>

            <nav>
                <div className="userLogin"> 
                    Bienvenido(a) {userName}
                </div>
            </nav>
        </>
    )
}



