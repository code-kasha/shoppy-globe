import { useSelector, useDispatch } from "react-redux"
import {
	removeFromCart,
	increaseQuantity,
	decreaseQuantity,
} from "../store/cartSlice"
import { Link, useNavigate } from "react-router"
import Item from "../components/cart/Item"
import toast from "react-hot-toast"

export default function Cart() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const cartItems = useSelector((state) => state.cart.items)
	const total = cartItems.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0,
	)
	if (!cartItems.length) {
		return (
			<div className="">
				<p className="">Your cart is empty</p>
				<Link to="/" className="">
					Continue Shopping
				</Link>
			</div>
		)
	}

	return (
		<div className="">
			<h1 className="">Your Cart</h1>

			<div className="">
				{cartItems.map((item) => (
					<Item
						key={item.id}
						item={item}
						onIncrease={() => dispatch(increaseQuantity(item.id))}
						onDecrease={() => dispatch(decreaseQuantity(item.id))}
						onRemove={() => {
							dispatch(removeFromCart(item.id))
							toast.success(`${item.title} removed from cart`)
						}}
					/>
				))}
			</div>

			<div className="">
				<p className="">Total: 💲{total.toFixed(2)}</p>
				<button
					onClick={() => navigate("/checkout", { state: { fromCart: true } })}
					className=""
				>
					Checkout
				</button>
			</div>
		</div>
	)
}
