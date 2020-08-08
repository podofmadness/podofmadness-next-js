import Head from "next/head"
import Link from "next/link"
import { getSortedPostsData } from "../lib/posts"
import ATweet from "../components/ATweet"
import Post from "../components/post"
import MetaHead from "../components/metaHead"
import Nav from "../components/Nav"
import MainContainer from "../components/MainContainer"
import Jumbotron from "../components/Jumbotron"
import Row from "../components/Row"
import ColumnSpan from "../components/ColumnSpan"

export default function Home({ allPostsData, allSocialData, buildDate }) {
	var buildDateObj = new Date(buildDate)
	let morePosts
	if (allPostsData.length > 1) {
		var postList = allPostsData.map((aPost) => {
			return (
				<li>
					<a href="#">{aPost.title}</a>
				</li>
			)
		})
		delete postList[0]
		morePosts = (
			<React.Fragment>
				<h4>Previous Episodes</h4>
				<ul>{postList}</ul>
				<h4>More episodes coming soon!</h4>
			</React.Fragment>
		)
	} else {
		morePosts = <h4>More episodes coming soon!</h4>
	}
	return (
		<div className="container">
			<MetaHead
				pageType="CollectionPage"
				buildDate={buildDateObj}
				keywords={["horror", "zombies", "covid-19", "coronavirus", "podcast"]}
			></MetaHead>
			<Nav />
			<MainContainer>
				<Jumbotron>
					<Row>
						<ColumnSpan spanCount="6">
							<h1>Pod of Madness</h1>
							<p className="lead">Life is Mad</p>
						</ColumnSpan>
						<ColumnSpan spanCount="6">
							<center className="fun">
								<div className="toaster animated"></div>
							</center>
							<center className="logo">
								<img src="https://podofmadness.com/assets/logo-transparent.png" />
							</center>
						</ColumnSpan>
					</Row>
				</Jumbotron>
				<Row>
					<ColumnSpan spanCount="12">
						<h4>
							A horror-comedy podcast that makes about as much sense as the
							genre itself.
						</h4>

						<p>Horror is not homogeneous.</p>
						<hr />
					</ColumnSpan>
				</Row>
				<Row className="main-content">
					<ColumnSpan spanCount="6">
						<Post
							post={allPostsData[0]}
							isNew={true}
							isFull={false}
							isSocial={true}
							isFront={true}
						/>
					</ColumnSpan>
					<ColumnSpan spanCount="4">
						<h4>Listen to our Social SoundBites:</h4>
						<ATweet twitterUrl={allSocialData[0].socialPrompt} />
					</ColumnSpan>
					<ColumnSpan spanCount="2">{morePosts}</ColumnSpan>
				</Row>
			</MainContainer>

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
	const allPostsData = getSortedPostsData("episode")
	const allSocialData = getSortedPostsData("socialSoundBite")
	console.log("allPostsData", allPostsData[0])
	return {
		props: {
			allPostsData,
			allSocialData,
			buildDate: new Date().toString(),
		},
	}
}
