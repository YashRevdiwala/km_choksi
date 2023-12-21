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
      href: "/product-detail/bold-glint-diamond-ring",
    },
    {
      title: "Bold Glint Diamond Ring",
      desc: "Unisex | Finger Ring | 22 Karat",
      src: "/assets/product-02.jpg",
      href: "/product-detail/bold-glint-diamond-ring",
    },
    {
      title: "Bold Glint Diamond Ring",
      desc: "Unisex | Finger Ring | 22 Karat",
      src: "/assets/product-10.jpg",
      href: "/product-detail/bold-glint-diamond-ring",
    },
    {
      title: "Bold Glint Diamond Ring",
      desc: "Unisex | Finger Ring | 22 Karat",
      src: "/assets/product-04.jpg",
      href: "/product-detail/bold-glint-diamond-ring",
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
          "grid grid-cols-4 py-8 font-[15px] space-x-4"
        )}
      >
        {productList.map((data) => (
          <div key={data.src} className="py-4">
            <Link href={data.href}>
              <img src={data.src} alt="product-image" className="h-[350px]" />
              <p className="pt-4 pb-2">{data.title}</p>
              <div className="flex font-semibold text-muted text-[#6f6868]">
                <pre>{data.desc}</pre>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Suggestion
