import Head from "next/head"
import Link from "next/link"
import { getSortedPostsData } from "../lib/posts"
import ATweet from "../components/ATweet"
import Post from "../components/post"

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
			<nav>
				<div className="navbar navbar-fixed-top">
					<div className="navbar-inner">
						<div className="container">
							<a
								className="btn btn-navbar"
								data-toggle="collapse"
								data-target=".nav-collapse"
							>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</a>
							<a className="brand" href="">
								Pod of Madness
							</a>
							<div className="nav-collapse" id="main-menu">
								<ul className="nav" id="main-menu-left">
									<li className="dropdown" id="preview-menu">
										<a
											className="dropdown-toggle"
											data-toggle="dropdown"
											href="#"
										>
											Subscribe <b className="caret"></b>
										</a>
										<ul className="dropdown-menu">
											<li>
												<a target="_blank" href="feed.xml">
													RSS
												</a>
											</li>
											<li className="divider"></li>
											<li>
												<a
													target="_blank"
													href="https://soundcloud.com/pod-of-madness"
												>
													Soundcloud
												</a>
											</li>
										</ul>
									</li>
									<li>
										<a href="https://twitter.com/podofmadness" target="_blank">
											Follow us on
											<img
												height="25px"
												width="25px"
												src="https://podofmadness.com/assets/twittergif-transparent.gif"
											/>
										</a>
									</li>
									<li>
										<a
											href="https://www.instagram.com/podofmadness/"
											target="_blank"
										>
											Check out our Insta
										</a>
									</li>
								</ul>
								<ul className="nav pull-right" id="main-menu-right">
									<li>
										<a
											rel="tooltip"
											target="_blank"
											href="https://www.localswitchboard.nyc"
											title="Static Web Hosting"
										>
											A production of Local Switchboard
											<i className="icon-share-alt"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</nav>

			<main>
				<div className="container">
					<header className="jumbotron subhead" id="overview">
						<div className="row">
							<div className="span6">
								<h1>Pod of Madness</h1>
								<p className="lead">Life is Mad</p>
							</div>
							<div className="span6">
								<center className="fun">
									<div className="toaster animated"></div>
								</center>
								<center className="logo">
									<img src="https://podofmadness.com/assets/logo-transparent.png" />
								</center>
							</div>
						</div>
					</header>
					<div className="row">
						<div className="span12">
							<h4>
								A horror-comedy podcast that makes about as much sense as the
								genre itself.
							</h4>

							<p>Horror is not homogeneous.</p>
							<hr />
						</div>
					</div>
					<div className="row main-content">
						<div className="span6">
							<Post post={allPostsData[0]} isNew={true} isFull={false} />
							<br />
							<h4 className="pink">
								Join us on Twitter for this Episode's Prompt
							</h4>
							<blockquote className="twitter-tweet">
								<p lang="en" dir="ltr">
									My friend Forrest was diagnosed with the coronavirus. So,
									talking about zombie movies on the inaugural episode of the
									<a href="https://twitter.com/podofmadness?ref_src=twsrc%5Etfw">
										@podofmadness
									</a>
									horror podcast was a no-brainer. Leave your fEeEed-back
									below...
									<a href="https://t.co/7UjItYXKT4">
										pic.twitter.com/7UjItYXKT4
									</a>
								</p>
								&mdash; podofmadness (@podofmadness)
								<a href="https://twitter.com/podofmadness/status/1244388735782916098?ref_src=twsrc%5Etfw">
									March 29, 2020
								</a>
							</blockquote>
						</div>
						<div className="span4">
							<h4>Listen to our Social SoundBites:</h4>
							<ATweet twitterUrl="https://twitter.com/podofmadness/status/1259558869891788801?ref_src=twsrc%5Etfw" />
							<blockquote className="twitter-tweet">
								<p lang="en" dir="ltr">
									Host
									<a href="https://twitter.com/jgasspoore?ref_src=twsrc%5Etfw">
										@jgasspoore
									</a>
									asks her mom the age old question: If you were Mrs. Voorhees
									and I was Jason from Friday The 13th... would you have killed
									for me? Happy Mother&#39;s Day. 💐
									<a href="https://t.co/TP7GKZfHLD">
										pic.twitter.com/TP7GKZfHLD
									</a>
								</p>
								&mdash; podofmadness (@podofmadness)
								<a href="https://twitter.com/podofmadness/status/1259558869891788801?ref_src=twsrc%5Etfw">
									May 10, 2020
								</a>
							</blockquote>
						</div>
						<div className="span2">
							<h4>Previous Episodes</h4>
							<ul>
								<li>
									<a href="#">New Episode</a>
								</li>
								<li>
									<a href="#">New Episode</a>
								</li>
								<li>
									<a href="#">New Episode</a>
								</li>
							</ul>
							<h4>More episodes coming soon!</h4>
						</div>
					</div>
				</div>
			</main>

			<footer></footer>

			<style jsx>{`
				code {
					background: #fafafa;
					border-radius: 5px;
					padding: 0.75rem;
					font-size: 1.1rem;
					font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
						DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
				}

				@media (max-width: 600px) {
					code {
						width: 100%;
					}
				}
			`}</style>

			<style jsx global>{``}</style>
		</div>
	)
}

export async function getStaticProps() {
	const allPostsData = getSortedPostsData()
	console.log("allPostsData", allPostsData[0])
	return {
		props: {
			allPostsData,
		},
	}
}
