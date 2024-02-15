import { Button, Icon, Input } from "@/components/ui"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="bg-white h-[90px]">
      <div className="container flex h-full items-center">
        <div className="flex gap-8">
          <h2 className="text-2xl font-bold inline-flex items-center gap-2">
            <Icon name="briefcase" className="text-primary" />
            Finders
          </h2>
          <div className="search p-3 border border-input min-w-[520px] rounded-md flex items-center">
            <select name="location" className="focus:outline-none focus-visible:outline-none bg-transparent pr-4">
              <option value="dhaka">Dhaka</option>
              {/* <option value="chittagong">Chittagong</option>
              <option value="sylhet">Sylhet</option>
              <option value="khulna">Khulna</option>
              <option value="rajshahi">Rajshahi</option>
              <option value="barishal">Barishal</option>
              <option value="rangpur">Rangpur</option>
              <option value="mymensingh">Mymensingh</option>
              <option value="jashore">Jashore</option> */}
            </select>
            <div className="border-r border-input mx-2 h-full" />
            <Icon name="search" className="text-primary mx-2" />
            <input
              type="search"
              placeholder="Job tittle, keyword, company"
              className="flex-1 focus:outline-none bg-transparent"
            />
          </div>
        </div>
        <div className="ml-auto flex gap-3">
          <Link href="/sign-in">
            <Button variant="outline" className="bg-white">
              Sign In
            </Button>
          </Link>
          <Link href="/post-job">
            <Button>Post a Job</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Navbar
