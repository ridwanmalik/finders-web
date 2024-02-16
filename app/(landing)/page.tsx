import { WorkingSvg } from "@/components/svg"
import { Button, Icon } from "@/components/ui"
import Link from "next/link"

const Home = () => {
  return (
    <div className="bg-background">
      <div className="container h-full">
        <div className="flex">
          <div className="w-1/2 py-24">
            <h2 className="text-4xl font-medium mb-4">
              Find a job that suits
              <br />
              your interest & skills.
            </h2>
            <p className="text-gray-400 mb-6">Easy to Find your desired job in a Flash.</p>
            <div className="flex gap-2">
              <Link href="/sign-in">
                <Button variant="outline" className="bg-white hover:bg-white/60">
                  Sign In
                </Button>
              </Link>
              <Link href="/find-a-job">
                <Button>Find a Job</Button>
              </Link>
            </div>
          </div>
          <div className="w-1/2 py-12">
            <WorkingSvg className="w-full h-full max-h-[200px]" />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-6 pb-9">
          {Array.from(Array(8).keys()).map(i => (
            <div className="bg-white/60 hover:bg-white rounded-md flex gap-5 p-3" key={i}>
              <div className="w-16 h-16 bg-blue-100 rounded flex items-center justify-center">
                <Icon name="briefcase" size={40} className="text-primary" />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-medium">1,75,324</h3>
                <p className="text-gray-400">Live Job</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Home
