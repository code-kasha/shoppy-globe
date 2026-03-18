import { Link } from "react-router"

import Cart from "../../assets/cart.svg?react"
import Logo from "../../assets/logo.svg?react"

export default function Navbar() {
	return (
		<>
			<nav className="flex items-center justify-between flex-wrap bg-teal-600 p-6">
				<div className="flex items-center text-white mr-2">
					<Link to="/" className="flex items-center">
						<span className="mr-2">
							<Logo />
						</span>
						<span className="font-semibold text-xl tracking-tight">
							Shoppy Globe
						</span>
					</Link>
				</div>
				<div className="hover:bg-cyan-200 rounded-xl p-2">
					<Link to="/cart">
						<Cart />
					</Link>
				</div>
			</nav>
		</>
	)
}
