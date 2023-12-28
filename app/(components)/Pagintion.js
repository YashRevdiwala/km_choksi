import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export function ProductPagination() {
  return (
    <Pagination className="pb-4 md:pb-8">
      <PaginationContent>
        <PaginationPrevious href="#" />
        <PaginationLink href="#" isActive>
          1
        </PaginationLink>
        <PaginationLink href="#">2</PaginationLink>
        <PaginationLink href="#">3</PaginationLink>
        <PaginationEllipsis />
        <PaginationNext href="#" />
      </PaginationContent>
    </Pagination>
  )
}
