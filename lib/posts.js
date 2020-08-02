import fs from "fs"
import path from "path"
import showdown from "showdown"
// Add this line to imports

export function postId(fileName) {
	return fileName.replace(/\.md$/, "")
}

export function showdownConverter() {
	var converter = new showdown.Converter({
		strikethrough: true,
		simpleLineBreaks: false,
		tasklists: true,
		metadata: true,
	})
	converter.setFlavor("original")
	return converter
}

const postsDirectory = path.join(process.cwd(), "posts")
// https://nextjs.org/learn/basics/dynamic-routes/implement-getstaticprops
export function getSortedPostsData() {
	// Get file names under /posts
	const fileNames = fs.readdirSync(postsDirectory)
	const allPostsData = fileNames.map((fileName) => {
		// Remove ".md" from file name to get id
		const id = postId(fileName)

		// Read markdown file as string
		const fullPath = path.join(postsDirectory, fileName)
		const fileContents = fs.readFileSync(fullPath, "utf8")

		var converter = showdownConverter()

		// var html = md.render(text);
		var html = converter.makeHtml(fileContents)
		var metadata = converter.getMetadata()
		// return { ...metadata, content: html };

		// Use gray-matter to parse the post metadata section
		// const matterResult = matter(fileContents)

		metadata.title = metadata.title + ": " + metadata.subtitle
		delete metadata.subtitle
		// Combine the data with the id
		return {
			id,
			// contentHtml: html,
			...metadata,
		}
	})
	// console.log("Unsorted Posts", allPostsData)
	var filteredPostsData = allPostsData.filter((post) => post.type == "episode")
	// Sort posts by date
	return filteredPostsData.length == 1
		? filteredPostsData
		: filteredPostsData.sort((a, b) => {
				if (a.date < b.date) {
					return 1
				} else {
					return -1
				}
		  })
}

export function getAllPostIds() {
	const fileNames = fs.readdirSync(postsDirectory)
	return fileNames.map((fileName) => {
		return {
			params: {
				id: postId(fileName),
			},
		}
	})
}

export async function getPostData(id) {
	const fullPath = path.join(postsDirectory, `${id}.md`)
	const fileContents = fs.readFileSync(fullPath, "utf8")

	var converter = showdownConverter()

	// var html = md.render(text);
	var html = converter.makeHtml(fileContents)
	var metadata = converter.getMetadata()

	// Combine the data with the id and contentHtml
	return {
		id,
		contentHtml: html,
		...metadata,
	}
}
