import { Link } from "react-router"

import Cart from "../../assets/cart.svg?react"
import Logo from "../../assets/logo.svg?react"

export default function Navbar() {
	return (
		<nav
			className="
			flex items-center justify-between
			bg-[#0f2a4a] border-b border-[#1a3a5c]
			px-6 py-4
			shadow-[0_2px_12px_rgba(15,42,74,0.25)]
		"
		>
			{/* Brand */}
			<Link to="/" className="flex items-center gap-2.5 group">
				<span className="[&>svg]:invert [&>svg]:sepia [&>svg]:saturate-[3] [&>svg]:hue-rotate-185 [&>svg]:brightness-90">
					<Logo />
				</span>
				<span
					className="
					font-serif text-xl tracking-tight
					text-white
					transition-colors duration-200
					group-hover:text-[#93b8e0]
				"
				>
					Shoppy Globe
				</span>
			</Link>

			{/* Cart icon */}
			<Link
				to="/cart"
				className="
					flex items-center justify-center
					p-2 rounded-xl
					text-[#93b8e0]
					bg-transparent
					border border-transparent
					transition-all duration-200
					hover:bg-[#1a3a5c] hover:border-[#2a5a8c] hover:text-white
				"
			>
				<Cart />
			</Link>
		</nav>
	)
}
