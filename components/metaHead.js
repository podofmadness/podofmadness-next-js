import Head from "next/head"
import getJsonLd from "../lib/jsonLD"

export default function MetaHead({
	pageType,
	headline,
	description,
	datePublished,
	previewImage,
	buildDate,
	keywords,
	children,
}) {
	const jsonLD = getJsonLd({
		pageType,
		headline,
		description,
		datePublished,
		previewImage,
		buildDate,
	})
	const jsonLDAsString = JSON.stringify(jsonLD)
	return (
		<Head>
			<title>Pod of Madness</title>
			<link key="meta-icon" rel="icon" href="/favicon.ico" />
			<meta
				key="meta-keywords"
				name="keywords"
				content={keywords.join(", ")}
			></meta>
			<meta key="meta-author" name="author" content="Jordan Gass-Poore'"></meta>
			<meta
				key="meta-og-title"
				property="og:title"
				content="Pod of Madness"
			></meta>
			<meta
				key="meta-og-site_name"
				property="og:site_name"
				content="The Pod of Madness Podcast"
			/>
			<meta
				key="meta-og-description"
				property="og:description"
				content="Life is Mad."
			/>
			<meta
				key="meta-og-url"
				property="og:url"
				content="http://podofmadness.com"
			/>
			<meta key="meta-og-locale" property="og:locale" content="en_US" />
			<meta
				key="meta-twitter-site"
				name="twitter:site"
				content="@podofmadness"
			/>
			<meta
				key="meta-twitter-description"
				name="twitter:description"
				content="Life is Mad."
			/>
			<meta
				key="meta-twitter-card"
				name="twitter:card"
				content="summary_large_image"
			/>
			<meta
				key="meta-twitter-creator"
				name="twitter:creator"
				content="@chronotope"
			/>
			<meta
				key="meta-twitter-title"
				name="twitter:title"
				content="Pod of Madness"
			/>
			<meta
				key="meta-og-image"
				property="og:image"
				content="https://podofmadness.com/assets/logo-white-bg.png"
			/>
			<meta
				key="meta-twitter-image"
				name="twitter:image"
				content="https://podofmadness.com/assets/logo-white-bg.png"
			/>

			<script key="meta-ld-json" type="application/ld+json">
				{jsonLDAsString}
			</script>
			{children}
		</Head>
	)
}
