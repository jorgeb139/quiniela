import Image from 'next/image'
import Link from 'next/link'

export const Logo: React.FC = () => (
  <Link href='/principal'>
    <a>
      <Image src='/img/Qatar2022_blanco.png' height={90} width={90} alt='Copa Mundial' />
    </a>
  </Link>
)
