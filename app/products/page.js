import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import Footer from "../(components)/Footer"
import Header from "../(components)/Header"
import { ProductPagination } from "../(components)/Pagintion"
import ScrollTop from "../(components)/ScrollToTop"
import ProductListing from "./ProductListing"

const Products = () => {
  return (
    <>
      <Header />
      <ScrollTop />
      <ProductListing />
      <ProductPagination />
      <Footer />
    </>
  )
}

export default Products
