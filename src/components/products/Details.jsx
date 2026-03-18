import { formatDate } from "../../utils/formatDate"

export default function ReviewCard({ review }) {
	return (
		<div className="">
			<p className="">{review.reviewerName}</p>
			<p className="">{"⭐".repeat(review.rating)}</p>
			<p className="">{review.comment}</p>
			<p className="">{formatDate(review.date, { dateOnly: true })}</p>
			<p className="">{review.reviewerEmail}</p>
		</div>
	)
}
