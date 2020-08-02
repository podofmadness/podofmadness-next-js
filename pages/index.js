import Head from "next/head"
import Link from "next/link"
import { getSortedPostsData } from "../lib/posts"
import ATweet from "../components/ATweet"

export default function Home({ allPostsData }) {
	const jsonLD = {
		"@context": "http://schema.org",

		"@type": "CollectionPage",

		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": "https://podofmadness.com",
		},
		headline: "Pod of Madness.",
		datePublished: "2020-06-22 7:00:51 -0400",
		dateModified: "2018-06-22 7:00:51 -0400",
		description:
			"A horror-comedy podcast that makes about as much sense as the genre itself.",
		isPartOf: {
			"@type": ["CreativeWork", "Product", "Blog"],
			name: "Pod of Madness",
			productID: "https://podofmadness.com",
		},
		image: ["https://podofmadness.com/assets/logo-white-bg.png"],

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
	const jsonLDAsString = JSON.stringify(jsonLD)
	return (
		<div className="container">
			<Head>
				<title>Pod of Madness</title>
				<link key="meta-icon" rel="icon" href="/favicon.ico" />
				<meta
					key="meta-keywords"
					name="keywords"
					content="horror, zombies, covid-19, coronavirus, podcast"
				></meta>
				<meta key="meta-author" content="Jordan Gass-Poore'"></meta>
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
			</Head>

			<main>
				<h1 className="title">
					Learn <a href="https://nextjs.org">Next.js!</a>
				</h1>
				<p>
					Read{" "}
					<Link href="/posts/first-post">
						<a>this page!</a>
					</Link>
				</p>
				<p className="description">
					Get started by editing <code>pages/index.js</code>
				</p>
				<section>
					<ATweet
						twitterUrl={
							"https://twitter.com/podofmadness/status/1259558869891788801?ref_src=twsrc%5Etfw"
						}
					/>
					<p>
						Posts:
						<ul>
							{allPostsData.map(({ id, date, title }) => (
								<li key={id}>
									{title}
									<br />
									{id}
									<br />
									{date}
								</li>
							))}
						</ul>
					</p>
				</section>
				<div className="grid">
					<a href="https://nextjs.org/docs" className="card">
						<h3>Documentation &rarr;</h3>
						<p>Find in-depth information about Next.js features and API.</p>
					</a>

					<a href="https://nextjs.org/learn" className="card">
						<h3>Learn &rarr;</h3>
						<p>Learn about Next.js in an interactive course with quizzes!</p>
					</a>

					<a
						href="https://github.com/zeit/next.js/tree/master/examples"
						className="card"
					>
						<h3>Examples &rarr;</h3>
						<p>Discover and deploy boilerplate example Next.js projects.</p>
					</a>

					<a
						href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						className="card"
					>
						<h3>Deploy &rarr;</h3>
						<p>
							Instantly deploy your Next.js site to a public URL with Vercel.
						</p>
					</a>
				</div>
			</main>

			<footer>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{" "}
					<img src="/vercel.svg" alt="Vercel Logo" className="logo" />
				</a>
			</footer>

			<style jsx>{`
				.container {
					min-height: 100vh;
					padding: 0 0.5rem;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}

				main {
					padding: 5rem 0;
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}

				footer {
					width: 100%;
					height: 100px;
					border-top: 1px solid #eaeaea;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				footer img {
					margin-left: 0.5rem;
				}

				footer a {
					display: flex;
					justify-content: center;
					align-items: center;
				}

				a {
					color: inherit;
					text-decoration: none;
				}

				.title a {
					color: #0070f3;
					text-decoration: none;
				}

				.title a:hover,
				.title a:focus,
				.title a:active {
					text-decoration: underline;
				}

				.title {
					margin: 0;
					line-height: 1.15;
					font-size: 4rem;
				}

				.title,
				.description {
					text-align: center;
				}

				.description {
					line-height: 1.5;
					font-size: 1.5rem;
				}

				code {
					background: #fafafa;
					border-radius: 5px;
					padding: 0.75rem;
					font-size: 1.1rem;
					font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
						DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
				}

				.grid {
					display: flex;
					align-items: center;
					justify-content: center;
					flex-wrap: wrap;

					max-width: 800px;
					margin-top: 3rem;
				}

				.card {
					margin: 1rem;
					flex-basis: 45%;
					padding: 1.5rem;
					text-align: left;
					color: inherit;
					text-decoration: none;
					border: 1px solid #eaeaea;
					border-radius: 10px;
					transition: color 0.15s ease, border-color 0.15s ease;
				}

				.card:hover,
				.card:focus,
				.card:active {
					color: #0070f3;
					border-color: #0070f3;
				}

				.card h3 {
					margin: 0 0 1rem 0;
					font-size: 1.5rem;
				}

				.card p {
					margin: 0;
					font-size: 1.25rem;
					line-height: 1.5;
				}

				.logo {
					height: 1em;
				}

				@media (max-width: 600px) {
					.grid {
						width: 100%;
						flex-direction: column;
					}
				}
			`}</style>

			<style jsx global>{`
				html,
				body {
					padding: 0;
					margin: 0;
					font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
						Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
						sans-serif;
				}

				* {
					box-sizing: border-box;
				}
			`}</style>
		</div>
	)
}

export async function getStaticProps() {
	const allPostsData = getSortedPostsData()
	return {
		props: {
			allPostsData,
		},
	}
}
