import { ReactNode } from "react"
import Navbar from "./_components/navbar"

const LandingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}
export default LandingLayout
