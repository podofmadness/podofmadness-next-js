import ATweet from "../components/ATweet"

export default function SocialPrompt({ tweetUrl }) {
	return (
		<>
			<h4 className="pink">Join us on Twitter for this Episode's Prompt</h4>
			<ATweet twitterUrl={tweetUrl} />
		</>
	)
}
