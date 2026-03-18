import { useCallback, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router"
import toast from "react-hot-toast"
import { addToCart } from "../../store/cartSlice"
import { selectCartItemIds } from "../../store/selectors"

export default function Card({ product }) {
	const dispatch = useDispatch()
	const cartItemIds = useSelector(selectCartItemIds)
	const isInCart = cartItemIds.has(product.id)
	const [expanded, setExpanded] = useState(false)

	const handleAddToCart = useCallback(() => {
		dispatch(addToCart(product))
		toast.success(`${product.title} added to cart`)
	}, [dispatch, product])

	return (
		<div
			className="
				group relative flex flex-col
				w-54 xxs:w-46 xs:w-54 sm:w-48 md:w-44 lg:w-50 xl:w-56 2xl:w-60
				mx-auto rounded-xl overflow-hidden
				bg-[#eef4fb]
				border border-[#c2d6ee]
				shadow-[0_2px_8px_rgba(30,60,120,0.08)]
				transition-all duration-200 ease-out
				hover:-translate-y-1 hover:scale-[1.015]
				hover:shadow-[0_12px_32px_rgba(30,60,120,0.15)]
				hover:border-[#93b8e0]
			"
		>
			{/* ── Image ── */}
			<div className="overflow-hidden bg-[#dceaf7] aspect-square">
				<img
					src={product.thumbnail}
					alt={product.title}
					className="
						w-full h-full object-cover
						transition-transform duration-400 ease-out
						group-hover:scale-105
					"
					loading="lazy"
				/>
			</div>

			{/* ── Body ── */}
			<div className="flex flex-col gap-1.5 p-2.5 pt-2 flex-1">
				{/* Title */}
				<h3 className="font-serif text-[0.92rem] leading-snug text-[#0f2a4a] m-0">
					<Link
						to={`/product/${product.id}`}
						onClick={(e) => {
							e.preventDefault()
							setExpanded((v) => !v)
						}}
						className={`
							text-[#1a3a5c] no-underline
							transition-colors duration-200
							hover:text-[#1d6ec2] cursor-pointer text-center
							${expanded ? "" : "line-clamp-1"}
						`}
					>
						{product.title}
					</Link>
				</h3>

				{/* Price + Rating */}
				<div className="flex justify-between items-center gap-1 mt-auto">
					<span
						title="Price"
						className="
							text-[0.76rem] font-medium text-[#3a6080]
							bg-[#d6e8f7] rounded px-1.5 py-0.5
							transition-colors duration-200
							group-hover:bg-[#c2d9f0] group-hover:text-[#0f2a4a]
						"
					>
						💲{product.price}
					</span>
					<span
						title="Rating"
						className="
							text-[0.76rem] font-medium text-[#3a6080]
							bg-[#d6e8f7] rounded px-1.5 py-0.5
							transition-colors duration-200
							group-hover:bg-[#c2d9f0] group-hover:text-[#0f2a4a]
						"
					>
						⭐{product.rating}
					</span>
				</div>

				{/* Button */}
				<button
					onClick={handleAddToCart}
					disabled={isInCart}
					className={`
						w-full mt-1 py-2 rounded-md
						text-[0.72rem] font-semibold tracking-widest uppercase
						border-none cursor-pointer
						transition-all duration-200 ease-out
						active:scale-[0.97]
						${
							isInCart
								? "bg-[#d6e4f0] text-[#7a9bb5] cursor-not-allowed shadow-none"
								: `bg-[#1d6ec2] text-white
							   shadow-[0_2px_10px_rgba(29,110,194,0.35)]
							   hover:bg-[#155da0]
							   hover:shadow-[0_4px_16px_rgba(29,110,194,0.45)]`
						}
					`}
				>
					{isInCart ? "In Cart" : "Add to Cart"}
				</button>
			</div>
		</div>
	)
}
