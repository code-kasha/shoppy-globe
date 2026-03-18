import { useDispatch, useSelector } from "react-redux"
import { setSearchTerm, clearSearchTerm } from "../store/searchSlice"

export default function Search() {
	const dispatch = useDispatch()
	const term = useSelector((state) => state.search.term)

	return (
		<div className="flex justify-center items-center mt-6 mb-4 px-4">
			<div className="relative w-full max-w-lg">
				{/* Search icon */}
				<span
					className="
					absolute left-3.5 top-1/2 -translate-y-1/2
					text-[#93b8e0] pointer-events-none
				"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<circle cx="11" cy="11" r="8" />
						<path d="m21 21-4.3-4.3" />
					</svg>
				</span>

				{/* Input */}
				<input
					type="text"
					value={term}
					name="search"
					onChange={(e) => dispatch(setSearchTerm(e.target.value))}
					placeholder="Search products..."
					className="
						w-full pl-10 pr-10 py-2.5
						bg-[#eef4fb] border border-[#c2d6ee] rounded-xl
						text-[0.88rem] text-[#0f2a4a]
						placeholder:text-[#93b8e0]
						outline-none
						transition-all duration-200
						focus:border-[#1d6ec2] focus:bg-white
						focus:shadow-[0_0_0_3px_rgba(29,110,194,0.15)]
					"
				/>

				{/* Clear button */}
				{term && (
					<button
						onClick={() => dispatch(clearSearchTerm())}
						className="
							absolute right-3 top-1/2 -translate-y-1/2
							flex items-center justify-center
							w-5 h-5 rounded-full
							text-[#93b8e0] bg-[#d6e8f7]
							transition-all duration-200
							hover:bg-[#1d6ec2] hover:text-white
							cursor-pointer
						"
						aria-label="Clear search"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="10"
							height="10"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="3"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M18 6 6 18M6 6l12 12" />
						</svg>
					</button>
				)}
			</div>
		</div>
	)
}
