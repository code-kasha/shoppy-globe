export default function Footer() {
	return (
		<footer
			className="
			flex flex-col sm:flex-row items-center justify-between gap-3
			bg-[#0f2a4a] border-t border-[#1a3a5c]
			px-6 py-4
		"
		>
			{/* Copyright */}
			<span className="text-[0.8rem] text-[#5a8ab0]">
				© 2026{" "}
				<a
					href="#"
					className="
						text-[#93b8e0] no-underline
						transition-colors duration-200
						hover:text-white
					"
				>
					Shoppy Globe™
				</a>
			</span>

			{/* Links */}
			<ul
				className="
				hidden xxs:flex xs:hidden sm:flex
				items-center gap-5 list-none m-0 p-0
			"
			>
				{["About", "Privacy Policy", "Licensing", "Contact"].map((label) => (
					<li key={label}>
						<a
							href="#"
							className="
								text-[0.8rem] text-[#5a8ab0] no-underline
								transition-colors duration-200
								hover:text-white
							"
						>
							{label}
						</a>
					</li>
				))}
			</ul>
		</footer>
	)
}
