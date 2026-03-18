export default function Pagination({ page, totalPages, onPageChange }) {
	return (
		<div className="">
			<button
				disabled={page === 1}
				onClick={() => onPageChange(page - 1)}
				className=""
			>
				Prev
			</button>

			<p className="">
				Page {page} of {totalPages}
			</p>

			<button
				disabled={page === totalPages}
				onClick={() => onPageChange(page + 1)}
				className=""
			>
				Next
			</button>
		</div>
	)
}
