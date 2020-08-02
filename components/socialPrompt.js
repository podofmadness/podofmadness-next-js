import Audio from "./audio"

export default function Post({ post, isNew, isSocial, isFull }) {
	const newPrompt = isNew ? (
		<img
			src="https://podofmadness.com/assets/new.gif"
			style={{
				marginRight: ".4em",
			}}
		/>
	) : (
		""
	)
	return (
		<br />
		<h4 className="pink">
			Join us on Twitter for this Episode's Prompt
		</h4>
	)
}
