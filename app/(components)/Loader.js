import { Loader2 } from "lucide-react"

const Loader = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <Loader2 className="animate-spin" />
    </div>
  )
}

export default Loader
