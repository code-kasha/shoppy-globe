export default function Pagination({ page, totalPages, onPageChange }) {
	return (
		<div
			className="
			flex items-center justify-center gap-4
			py-8
		"
		>
			{/* Prev */}
			<button
				disabled={page === 1}
				onClick={() => onPageChange(page - 1)}
				className={`
					px-5 py-2 rounded-lg
					text-[0.78rem] font-semibold tracking-widest uppercase
					border transition-all duration-200 ease-out
					active:scale-[0.97]
					${
						page === 1
							? "bg-transparent border-[#c2d6ee] text-[#93b8e0] cursor-not-allowed opacity-40"
							: "bg-transparent border-[#2a5a8c] text-[#1d6ec2] hover:bg-[#1d6ec2] hover:text-white hover:border-[#1d6ec2] hover:shadow-[0_4px_14px_rgba(29,110,194,0.35)] cursor-pointer"
					}
				`}
			>
				← Prev
			</button>

			{/* Page indicator */}
			<p
				className="
				text-[0.82rem] font-medium
				text-[#3a6080]
				bg-[#eef4fb] border border-[#c2d6ee]
				px-4 py-2 rounded-lg
				min-w-28 text-center
				m-0
			"
			>
				<span className="text-[#0f2a4a] font-semibold">{page}</span>
				<span className="mx-1.5 text-[#93b8e0]">/</span>
				<span>{totalPages}</span>
			</p>

			{/* Next */}
			<button
				disabled={page === totalPages}
				onClick={() => onPageChange(page + 1)}
				className={`
					px-5 py-2 rounded-lg
					text-[0.78rem] font-semibold tracking-widest uppercase
					border transition-all duration-200 ease-out
					active:scale-[0.97]
					${
						page === totalPages
							? "bg-transparent border-[#c2d6ee] text-[#93b8e0] cursor-not-allowed opacity-40"
							: "bg-transparent border-[#2a5a8c] text-[#1d6ec2] hover:bg-[#1d6ec2] hover:text-white hover:border-[#1d6ec2] hover:shadow-[0_4px_14px_rgba(29,110,194,0.35)] cursor-pointer"
					}
				`}
			>
				Next →
			</button>
		</div>
	)
}
