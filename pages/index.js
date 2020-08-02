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
			<nav>
				<div class="navbar navbar-fixed-top">
					<div class="navbar-inner">
						<div class="container">
							<a
								class="btn btn-navbar"
								data-toggle="collapse"
								data-target=".nav-collapse"
							>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
							</a>
							<a class="brand" href="">
								Pod of Madness
							</a>
							<div class="nav-collapse" id="main-menu">
								<ul class="nav" id="main-menu-left">
									<li class="dropdown" id="preview-menu">
										<a class="dropdown-toggle" data-toggle="dropdown" href="#">
											Subscribe <b class="caret"></b>
										</a>
										<ul class="dropdown-menu">
											<li>
												<a target="_blank" href="feed.xml">
													RSS
												</a>
											</li>
											<li class="divider"></li>
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
								<ul class="nav pull-right" id="main-menu-right">
									<li>
										<a
											rel="tooltip"
											target="_blank"
											href="https://www.localswitchboard.nyc"
											title="Static Web Hosting"
										>
											A production of Local Switchboard
											<i class="icon-share-alt"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</nav>

			<main>
				<div class="container">
					<header class="jumbotron subhead" id="overview">
						<div class="row">
							<div class="span6">
								<h1>Pod of Madness</h1>
								<p class="lead">Life is Mad</p>
							</div>
							<div class="span6">
								<center class="fun">
									<div class="toaster animated"></div>
								</center>
								<center class="logo">
									<img src="https://podofmadness.com/assets/logo-transparent.png" />
								</center>
							</div>
						</div>
					</header>
					<div class="row">
						<div class="span12">
							<h4>
								A horror-comedy podcast that makes about as much sense as the
								genre itself.
							</h4>

							<p>Horror is not homogeneous.</p>
							<hr />
						</div>
					</div>
					<div class="row main-content">
						<div class="span6">
							<div
								class="episode__entry"
								itemscope
								itemtype="http://schema.org/PodcastEpisode"
							>
								<h3>
									<img src="https://podofmadness.com/assets/new.gif" />
									<a
										itemprop="url"
										href="#"
										target="_blank"
										title="Download podcast"
										class="title-link"
									>
										<span itemprop="name">
											Down With The Sickness: Forrest Has The Coronavirus,
											Discusses Zombie Movies
										</span>
									</a>
								</h3>
								<div
									itemprop="associatedMedia"
									itemscope
									itemtype="http://schema.org/MediaObject"
								>
									<p>
										<audio controls>
											<source
												src="https://podofmadness.com/assets/E1S1-PodofMadness_01.mp3"
												type="audio/mpeg"
											/>
										</audio>
										<small
											class="hidden"
											itemprop="datePublished"
											datetime="2020-03-29"
										>
											2 months ago
										</small>
										<small
											class="hidden"
											itemprop="timeRequired"
											datetime="PT37M"
										>
											8 minutes
										</small>
									</p>
									<p class="right">
										<a
											itemprop="contentUrl"
											href="podofmadness.com/assets/E1S1-PodofMadness_01.mp3"
										>
											Download
										</a>
									</p>
									<p itemprop="description">
										Host Jordan Gass-Poore' discusses zombie movies with her
										friend, Forrest, who was diagnosed with the coronavirus.
									</p>
								</div>
							</div>
							<br />
							<h4 class="pink">Join us on Twitter for this Episode's Prompt</h4>
							<blockquote class="twitter-tweet">
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
						<div class="span4">
							<h4>Listen to our Social SoundBites:</h4>
							<blockquote class="twitter-tweet">
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
						<div class="span2">
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
	return {
		props: {
			allPostsData,
		},
	}
}
