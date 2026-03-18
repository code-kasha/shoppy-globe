import { useState } from "react"
import { useSelector } from "react-redux"
import useCartProducts from "../hooks/useProducts"
import { PAGE_SIZE } from "../constants/pagination"

import Search from "../components/Search"
import Spinner from "../components/Spinner"
import Error from "../components/Error"
import Card from "../components/products/Card"
import Pagination from "../components/Pagination"

export default function ProductList() {
	const [page, setPage] = useState(1)
	const [prevTerm, setPrevTerm] = useState("")

	const term = useSelector((state) => state.search.term)

	if (term !== prevTerm) {
		setPrevTerm(term)
		setPage(1)
	}

	const { products, total, loading, error } = useCartProducts(
		page,
		PAGE_SIZE,
		term,
	)
	const totalPages = Math.ceil(total / PAGE_SIZE)

	if (loading) return <Spinner message="Loading products..." />
	if (error) return <Error message={error} />

	return (
		<div className="space-y-4">
			<Search />

			<p className="text-3xl font-semibold text-center p-2 pb-6">
				Product List
			</p>

			<div className="grid xxs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 mx-auto px-2">
				{products.map((product) => (
					<Card key={product.id} product={product} />
				))}
			</div>

			<Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
		</div>
	)
}
