import { Toaster } from "react-hot-toast"
import { Outlet } from "react-router"

import PageTransition from "./components/core/PageTransition"

import Header from "./components/page/Header"
import Footer from "./components/page/Footer"

function App() {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main className="flex-1">
				<PageTransition>
					<Outlet />
				</PageTransition>
				<Toaster position="top-right" />
			</main>
			<Footer />
		</div>
	)
}

export default App
