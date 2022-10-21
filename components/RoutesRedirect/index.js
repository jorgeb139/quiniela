import { useRouter } from "next/router"

export default function RoutesRedirect(url) {
  console.log("Redirecciona")
  const router = useRouter()
  setTimeout(() => {
    router.push(url.url)
  }, 4000)
}
