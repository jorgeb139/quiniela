import { useRouter } from 'next/router'
import { useEffect } from 'react'

interface RoutesRedirectProps {
  url: string
}

const RoutesRedirect: React.FC<RoutesRedirectProps> = ({ url }) => {
  const router = useRouter()

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push(url).catch((error) => {
        console.warn(error)
      })
    }, 4000)

    return () => clearTimeout(redirectTimer)
  }, [router, url])

  return null
}
