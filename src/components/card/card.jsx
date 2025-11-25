export default function Card({
	title,
	description,
	image,
	className,
	textContainer,
	imageHandler,
}) {
	return (
		<div className={className}>
			<div className={imageHandler}>
				{image && <img src={image} alt={title} />}
			</div>
			<div className={textContainer}>
				{title && <h1>{title}</h1>}
				{description && <h3>{description}</h3>}
			</div>
		</div>
	);
}
