import Link from 'next/link'
import Image from 'next/image'

export default function Header({userName}){
    return (
        <>
            <Link href="/">
                <a>
                    <Image
                        src={"/img/copa-mundial.png"}
                        height={120}
                        width={120}
                        alt="Copa Mundial"
                    />
                </a>
            </Link>
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
                    <Link href="/posicion-participantes">
                        <a>
                        Posiciones de participantes
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

            <div className="userLogin"> 
                Bienvenido(a) {userName}
            </div>

            <style jsx>{`
                .userLogin {
                    font-weight: 500;
                }

            `}</style>

        </>
    )
}



