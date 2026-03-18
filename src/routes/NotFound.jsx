import { useNavigate } from "react-router"

export default function NotFound() {
	const navigate = useNavigate()

	return (
		<div className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-4">
			<p className="text-8xl font-bold text-slate-500">404</p>
			<h1 className="mt-4 text-2xl font-semibold text-gray-800">
				Page not found
			</h1>
			<p className="mt-2 text-gray-500 text-sm">
				Sorry, we couldn't find the page you're looking for.
			</p>
			<div className="mt-8 flex gap-3">
				<button
					onClick={() => navigate("/")}
					className="px-5 py-2 bg-slate-500 hover:bg-slate-600 text-white text-sm rounded-lg transition-colors"
				>
					Go home
				</button>
				<button
					onClick={() => navigate(-1)}
					className="px-5 py-2 border border-gray-200 hover:bg-gray-50 text-gray-600 text-sm rounded-lg transition-colors"
				>
					Go back
				</button>
			</div>
		</div>
	)
}
