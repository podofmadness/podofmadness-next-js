import fs from "fs"
import RSS from "rss"
import { getSortedPostsData } from "../lib/posts"
import forwardfeed from "../lib/forwardfeed"

function dateSortDesc(a, b) {
	const date1 = new Date(a.data.frontmatter.date)
	const date2 = new Date(b.data.frontmatter.date)
	if (date1 > date2) return -1
	if (date1 < date2) return 1
	return 0
}

function generate() {
	const previewItems = getSortedPostsData(false, null, "content/blog")
	const feed = new RSS({
		title: "blog",
		site_url: "https://blog.dev",
		feed_url: "https://blog.dev/feed.xml",
	})

	previewItems.sort(dateSortDesc).map(({ id, date, title, filename }) => {
		feed.item({
			title: title,
			guid: id,
			url: `https://blog.dev/blog/${filename}`,
			date: date,
			description: "",
			author: "blogger",
		})
	})

	const rss = feed.xml({ indent: true })
	fs.writeFileSync("./public/feed.xml", rss)
}

generate()

/**
function generate() {
	var feed = forwardfeed()
	feed.then((result) => {
		fs.writeFileSync("./public/rss.xml", result)
	})
}

generate()
 */
