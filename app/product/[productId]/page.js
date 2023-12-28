import Footer from "@/app/(components)/Footer"
import Header from "@/app/(components)/Header"
import ProductData from "./ProductData"
import Suggestion from "./Suggestions"
import ScrollTop from "@/app/(components)/ScrollToTop"
import { ProductPagination } from "@/app/(components)/Pagintion"

const ProductDeatils = () => {
  return (
    <>
      <Header />
      <ScrollTop />
      <ProductData />
      <Suggestion />
      <ProductPagination />
      <Footer />
    </>
  )
}

export default ProductDeatils
