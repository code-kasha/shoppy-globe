import { Component } from "react"

export default class ErrorBoundary extends Component {
	state = { hasError: false, error: null }

	static getDerivedStateFromError(error) {
		return { hasError: true, error }
	}

	componentDidCatch(error, info) {
		console.error("ErrorBoundary caught:", error, info)
	}

	reset = () => this.setState({ hasError: false, error: null })

	render() {
		if (this.state.hasError) {
			return (
				<div className="min-h-full flex items-center justify-center p-8 bg-neutral-50 font-serif">
					<div className="w-full max-w-md text-center px-8 py-12 bg-white border border-neutral-200 rounded-sm shadow-sm animate-[enter_0.35s_cubic-bezier(0.16,1,0.3,1)_both]">
						<div className="flex items-center justify-center w-14 h-14 mx-auto mb-6 rounded-full bg-red-50 text-red-600">
							<svg
								className="w-7 h-7"
								viewBox="0 0 48 48"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle
									cx="24"
									cy="24"
									r="22"
									stroke="currentColor"
									strokeWidth="2"
								/>
								<path
									d="M24 14v12"
									stroke="currentColor"
									strokeWidth="2.5"
									strokeLinecap="round"
								/>
								<circle cx="24" cy="33" r="1.5" fill="currentColor" />
							</svg>
						</div>

						<h2 className="text-xl font-normal tracking-tight text-neutral-900 mb-2">
							Something went wrong
						</h2>
						<p className="text-sm leading-relaxed text-neutral-400 font-sans mb-8">
							This page failed to load. It may be a network issue or a temporary
							glitch.
						</p>

						<div className="flex items-center justify-center gap-3 flex-wrap">
							<button
								className="px-5 py-2 text-sm font-medium font-sans bg-neutral-900 text-white border border-neutral-900 rounded-sm cursor-pointer tracking-wide hover:bg-neutral-700 transition-colors"
								onClick={this.reset}
							>
								Try again
							</button>
							<button
								className="px-5 py-2 text-sm font-medium font-sans bg-transparent text-neutral-400 border border-neutral-200 rounded-sm cursor-pointer tracking-wide hover:border-neutral-400 hover:text-neutral-600 transition-colors"
								onClick={() => (window.location.href = "/")}
							>
								Go home
							</button>
						</div>

						{this.state.error && (
							<details className="mt-7 text-left border-t border-neutral-100 pt-4">
								<summary className="text-xs font-sans text-neutral-300 cursor-pointer uppercase tracking-widest">
									Error details
								</summary>
								<pre className="mt-2 text-xs text-red-500 bg-red-50 p-3 rounded-sm overflow-x-auto whitespace-pre-wrap wrap-break-word font-mono">
									{this.state.error.message}
								</pre>
							</details>
						)}
					</div>
				</div>
			)
		}

		return this.props.children
	}
}
