export default function Spinner({ message }) {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center gap-3">
			<div className="w-6 h-6 rounded-full border-2 border-neutral-200 border-t-neutral-900 animate-spin" />
			{message && (
				<p className="text-sm text-neutral-400 font-sans tracking-wide">
					{message}
				</p>
			)}
		</div>
	)
}
