export default function ProductSection({ title, children }) {
	return (
		<section className="">
			<h2 className="">{title}</h2>
			{children}
		</section>
	)
}
