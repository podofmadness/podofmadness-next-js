import fs from "fs"
import RSS from "rss"
import path from "path"
import { getSortedPostsData } from "../lib/posts"
import forwardfeed from "../lib/forwardfeed"
import siteData from "../lib/siteData"
var xml = require("xml")

function dateSortDesc(a, b) {
	const date1 = new Date(a.data.frontmatter.date)
	const date2 = new Date(b.data.frontmatter.date)
	if (date1 > date2) return -1
	if (date1 < date2) return 1
	return 0
}

function generate() {
	const siteDataObj = siteData()
	const previewItems = getSortedPostsData(false, null, "content/blog")
	const feed = new RSS({
		title: siteDataObj.siteName,
		site_url: siteDataObj.site_url,
		feed_url: siteDataObj.feed_url,
		pubDate: siteDataObj.pubDate,
		lastBuildDate: siteDataObj.buildDate,
		language: "en",
		managingEditor: "jordan@podofmadness.com (Jordan Gass-Poore')",
		image_url: siteDataObj.imageUrl,
		// author: siteDataObj.author,
		ttl: "60",
		custom_namespaces: {
			itunes: "http://www.itunes.com/dtds/podcast-1.0.dtd",
		},
		custom_elements: [
			{ "itunes:subtitle": siteDataObj.siteSubtitle },
			{ "itunes:author": siteDataObj.author },
			{
				"itunes:summary":
					"A horror-comedy podcast that makes about as much sense as the genre itself. Horror is not homogeneous.",
			},
			{
				"itunes:owner": [
					{ "itunes:name": siteDataObj.author },
					{ "itunes:email": siteDataObj.authorEmail },
				],
			},
			{
				"itunes:image": {
					_attr: {
						href: siteDataObj.imageUrl,
					},
				},
			},
			{ "itunes:explicit": "no" },
			{
				"itunes:category": [
					{
						_attr: {
							text: "TV & Film",
						},
					},
					{
						"itunes:category": {
							_attr: {
								text: "Film Interviews",
							},
						},
					},
				],
			},
			{
				"itunes:category": [
					{
						_attr: {
							text: "Society & Culture",
						},
					},
				],
			},
		],
	})

	/**
{
    title:  'item title',
    description: 'use this for the content. It can include html.',
    url: 'http://example.com/article4?this&that', // link to the item
    guid: '1123', // optional - defaults to url
    categories: ['Category 1','Category 2','Category 3','Category 4'], // optional - array of item categories
    author: 'Guest Author', // optional - defaults to feed author property
    date: 'May 27, 2012', // any format that js Date can parse.
    lat: 33.417974, //optional latitude field for GeoRSS
    long: -111.933231, //optional longitude field for GeoRSS
    enclosure: {url:'...', file:'path-to-file'}, // optional enclosure
    custom_elements: [
      {'itunes:author': 'John Doe'},
      {'itunes:subtitle': 'A short primer on table spices'},
      {'itunes:image': {
        _attr: {
          href: 'http://example.com/podcasts/everything/AllAboutEverything/Episode1.jpg'
        }
      }},
      {'itunes:duration': '7:04'}
    ]
}
	 */

	previewItems.sort(dateSortDesc).map((postData) => {
		let keywords = []
		try {
			let spacedKeywords = postData.keywords.split(",")
			keywords = spacedKeywords.map((term) => {
				let newTerm = term.trim()
				// console.log(newTerm)
				return newTerm
			})
		} catch (e) {
			console.log("Keywords broken", e)
			keywords = false
		}
		feed.item({
			title: postData.title,
			guid: `https://podofmadness.com/posts/${postData.id}`,
			url: `https://podofmadness.com/posts/${postData.id}`,
			date: postData.date,
			description: postData.description,
			author: siteDataObj.author,
			date: postData.date,
			categories: keywords ? keywords : ["Horror", "TV & Film"],
			enclosure: {
				url: postData.contentUrl,
				file: `./public${postData.localFile}`,
			},
			custom_elements: [
				{ "itunes:author": siteDataObj.author },
				{ "content:encoded": postData.contentHtml },
				// {'itunes:subtitle': 'A short primer on table spices'},
				{
					"itunes:image": {
						_attr: {
							href: siteDataObj.imageUrl,
						},
					},
				},
				{ "itunes:duration": postData.duration },
				{ "itunes:explicit": "no" },
				{
					"itunes:keywords": postData.keywords
						? keywords
						: ["Horror", "TV & Film"],
				},
				{
					"itunes:episodeType": "full",
				},
			],
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
