export default function CartItem({ item, onIncrease, onDecrease, onRemove }) {
	return (
		<div className="">
			<div className="">
				<img
					src={item.thumbnail}
					alt={item.title}
					loading="lazy"
					className=""
				/>
				<div>
					<p className="">{item.title}</p>
					<p className="">💲{item.price}</p>
				</div>
			</div>

			<div className="">
				<button onClick={onDecrease} className="">
					-
				</button>
				<span className="quantity">{item.quantity}</span>
				<button onClick={onIncrease} className="">
					+
				</button>
				<button onClick={onRemove} className="">
					Remove
				</button>
			</div>
		</div>
	)
}
