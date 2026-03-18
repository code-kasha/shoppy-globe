export default function Gallery({ images, selectedImage, onSelect, title }) {
	return (
		<div className="">
			<img src={selectedImage} alt={title} loading="lazy" className="" />
			<div className="">
				{images?.map((img, i) => (
					<img
						key={i}
						src={img}
						loading="lazy"
						alt={`${title} view ${i + 1}`}
						onClick={() => onSelect(img)}
						className={`${selectedImage === img ? "active" : ""}`}
					/>
				))}
			</div>
		</div>
	)
}
