import { parseISO, format } from "date-fns"
import { TwitterTweetEmbed } from "react-twitter-embed"

export default function ATweet({ twitterUrl }) {
	var regex = new RegExp(
		/.*twitter\.com\/.*\/status\/([a-zA-Z0-9]*)[\/|\?]?\??/,
		"i"
	)
	var matches = twitterUrl.match(regex)
	console.log(matches)
	let twitterId = matches[1]
	return <TwitterTweetEmbed tweetId={twitterId} />
}
