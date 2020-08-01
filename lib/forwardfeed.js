import axios from "axios"

export default async function forwardfeed() {
	var feed = ""
	try {
		const feedRespoonse = await axios.get(
			"https://evolving-faith.libsyn.com/rss/"
		)
		const replace = `atom:link href="https://evolving-faith.libsyn.com/rss/"`
		feed = feedRespoonse.data.replace(
			new RegExp(replace, "i"),
			`atom:link href="https://local.dev/forward/"`
		)
		//console.log("feedFound ", feed)
	} catch (e) {
		return e
	}
	return feed
}
