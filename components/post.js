import Link from "next/link"
import Audio from "./audio"
import SocialPrompt from "./socialPrompt"

export default function Post({ post, isNew, isSocial, isFull, isFront }) {
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
	const frontSocial = isSocial ? (
		<React.Fragment>
			<br />
			<SocialPrompt tweetUrl={post.socialPrompt} />
		</React.Fragment>
	) : (
		""
	)
	return (
		<>
			<div
				className="episode__entry"
				itemScope
				itemType="http://schema.org/PodcastEpisode"
			>
				<h3>
					{newPrompt}
					<Link href={`/posts/${post.id}`}>
						<a itemProp="url" title="Download podcast" className="title-link">
							<span itemProp="name">{post.title}</span>
						</a>
					</Link>
				</h3>
				<div
					itemProp="associatedMedia"
					itemScope
					itemType="http://schema.org/MediaObject"
				>
					<p>
						<Audio
							contentUrl={post.contentUrl}
							datePublished={post.date}
							minutesRequired={post.minutesRequired}
						/>
					</p>
					<p className="right">
						<a itemProp="contentUrl" href={post.contentUrl}>
							Download
						</a>
					</p>
					<p itemProp="description">{post.description}</p>
				</div>
			</div>
			{frontSocial}
		</>
	)
}
