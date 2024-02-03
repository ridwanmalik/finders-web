import { Button } from "@/components/ui"
import Link from "next/link"

const Home = () => {
  return (
    <div>
      <h1 className="text-6xl text-gray-300 font-bold">Home</h1>
      <Link href="/sign-in">
        <Button>Sign In</Button>
      </Link>
    </div>
  )
}
export default Home
