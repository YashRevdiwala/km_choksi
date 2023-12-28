import { Card } from "@/components/ui/card"
import Image from "next/image"

const CollectionList = (data) => {
  return (
    <div className="p-6">
      <Card className="">
        <Image
          src={data.data.src}
          width={500}
          height={500}
          alt="Our Collection"
        />
        <p className="text-center text-lg my-4">{data.data.title}</p>
      </Card>
    </div>
  )
}

export default CollectionList
