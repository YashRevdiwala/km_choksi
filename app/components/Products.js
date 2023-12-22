import { Separator } from "@/components/ui/separator"

const Products = () => {
  return (
    <div className="w-screen">
      <Separator className="my-6" />
      <p className="text-center text-4xl my-4 py-4">
        Gold & Diamond Jewellery Products
      </p>
      <div className="flex flex-row flex-wrap gap-4 justify-center px-6 pt-4">
        <img
          src="/assets/collection/banner01.jpg"
          className="h-[490px] relative object-cover "
          alt="banner-image"
        />
        <img
          src="/assets/collection/banner02.jpg"
          className="h-[490px] relative object-cover "
          alt="banner-image"
        />
        <img
          src="/assets/collection/banner03.jpg"
          className="h-[490px] relative object-cover "
          alt="banner-image"
        />
      </div>
      <div className="flex flex-row flex-wrap gap-9 justify-center px-6 py-6">
        <img
          src="/assets/collection/banner04.jpg"
          className="h-[350px] relative object-cover "
          alt="banner-image"
        />
        <img
          src="/assets/collection/banner05.jpg"
          className="h-[350px] relative align-bottom object-cover "
          alt="banner-image"
        />
        <img
          src="/assets/collection/banner06.jpg"
          className="h-[350px] relative object-cover "
          alt="banner-image"
        />
      </div>
    </div>
  )
}

export default Products
