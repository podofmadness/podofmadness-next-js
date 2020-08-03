export default async function getJsonLd({
	pageType,
	headline,
	description,
	datePublished,
	previewImage,
	buildDate,
}) {
	const jsonLD = {
		"@context": "http://schema.org",
		"@type": "CollectionPage",
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": "https://podofmadness.com",
		},
		headline: headline ? headline : "Pod of Madness.",
		datePublished: datePublished ? datePublished : "2020-06-22 7:00:51 -0400",
		dateModified: buildDate.toISOString(),
		description: description
			? description
			: "A horror-comedy podcast that makes about as much sense as the genre itself.",
		isPartOf: {
			"@type": ["CreativeWork", "Product", "Blog"],
			name: "Pod of Madness",
			productID: "https://podofmadness.com",
		},
		image: previewImage
			? [previewImage]
			: ["https://podofmadness.com/assets/logo-white-bg.png"],

		isAccessibleForFree: true,
		author: {
			"@type": "Person",
			name: "Jordan Gass-Poore'",
			description: "Jordan Gass-Poore' is a journalist and podcaster.",
			sameAs: "http://jgasspoore.com/",
			image: {
				"@type": "ImageObject",
				url:
					"https://pbs.twimg.com/profile_images/1237825194225553410/vwm8F8EE_400x400.jpg",
			},
			givenName: "Jordan",
			familyName: "Gass-Poore'",
		},
		publisher: {
			"@type": "Project",
			name: "Pod of Madness",
			url: "https://podofmadness.com",
			foundingDate: "2020-1-01",
			logo: {
				"@type": "ImageObject",

				url: "https://podofmadness.com/assets/logo-white-bg.png",
			},
		},
	}
	switch (pageType) {
		case "episode":
			jsonLD["@type"] = "PodcastEpisode"
			break

		default:
			break
	}
	return jsonLD
}
