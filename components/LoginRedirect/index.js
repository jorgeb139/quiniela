import { useRouter } from "next/router"

export default function LoginRedirect(url) {
  const router = useRouter()
  setTimeout(() => {
    router.push(url.url)
  }, 5000)
}
