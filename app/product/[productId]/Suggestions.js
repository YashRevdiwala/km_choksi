import { cn } from "@/lib/utils"
import { Montserrat } from "next/font/google"
import Link from "next/link"

const montserrat = Montserrat({
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
})

const Suggestion = () => {
  const productList = [
    {
      title: "Bold Glint Diamond Ring",
      desc: "Unisex | Finger Ring | 22 Karat",
      src: "/assets/product-19.jpg",
      href: "/product/bold-glint-diamond-ring",
    },
    {
      title: "Bold Glint Diamond Ring",
      desc: "Unisex | Finger Ring | 22 Karat",
      src: "/assets/product-02.jpg",
      href: "/product/bold-glint-diamond-ring",
    },
    {
      title: "Bold Glint Diamond Ring",
      desc: "Unisex | Finger Ring | 22 Karat",
      src: "/assets/product-10.jpg",
      href: "/product/bold-glint-diamond-ring",
    },
    {
      title: "Bold Glint Diamond Ring",
      desc: "Unisex | Finger Ring | 22 Karat",
      src: "/assets/product-04.jpg",
      href: "/product/bold-glint-diamond-ring",
    },
  ]

  return (
    <div className="py-14 px-8">
      <div className="text-center text-2xl">
        <p>You May Also Like</p>
      </div>
      <div
        className={cn(
          montserrat.className,
          "grid grid-cols-2 md:grid-cols-4 py-8 font-[15px] md:space-x-4 max-sm:pl-3"
        )}
      >
        {productList.map((data) => (
          <div key={data.src} className="md:py-4 py-6 px-2">
            <Link href={data.href}>
              <img
                src={data.src}
                alt="product-image"
                className="h-[150px] md:h-[350px]"
              />
              <p className="pt-4 pb-2 pr-2">{data.title}</p>
              <div className="font-semibold pr-2 text-[#777]">
                <p className="md:hidden">{data.desc}</p>
                <pre className="max-sm:hidden">{data.desc}</pre>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Suggestion
