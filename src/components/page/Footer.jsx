export default function Footer() {
	return (
		<>
			<footer className="flex sm:flex-row items-center justify-between flex-wrap bg-teal-600 p-4 xxs:space-y-2 xs:space-y-0">
				<span className="flex mx-auto items-center">
					<p className="">
						© 2026{" "}
						<a href="#" className="">
							&nbsp;Shoppy Globe™
						</a>
					</p>
				</span>
				<ul className="hidden xxs:flex xs:hidden sm:flex space-x-4 mx-auto">
					<li>
						<a href="#" className="">
							About
						</a>
					</li>
					<li>
						<a href="#" className="">
							Privacy Policy
						</a>
					</li>
					<li>
						<a href="#" className="">
							Licensing
						</a>
					</li>
					<li>
						<a href="#" className="">
							Contact
						</a>
					</li>
				</ul>
			</footer>
		</>
	)
}
