import { Button } from "@/components/ui"
import Link from "next/link"

const Home = () => {
  return (
    <div className="bg-background h-[50vh]">
      <div className="container h-full pt-24 flex">
        <div className="w-1/2">
          <h2 className="text-4xl font-medium mb-4">
            Find a job that suits
            <br />
            your interest & skills.
          </h2>
          <p className="text-gray-400 mb-6">Easy to Find your desired job in a Flash.</p>
          <Link href="/sign-in">
            <Button>Sign In</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Home
