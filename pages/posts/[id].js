import Layout from "../../components/layout"
import { getAllPostIds, getPostData } from "../../lib/posts"
import Row from "../../components/Row"
import ColumnSpan from "../../components/ColumnSpan"
import Post from "../../components/post"
import SiteNav from "../../components/SiteNav"
import MetaHead from "../../components/metaHead"
import SocialPrompt from "../../components/socialPrompt"

export default function APost({ postData, buildDate }) {
	// 	<ColumnSpan spanCount="2">{morePosts}</ColumnSpan>
	//  <Date dateString={postData.date} />
	var buildDateObj = new Date(buildDate)
	return (
		<Layout>
			<MetaHead
				pageType="episode"
				headline={postData.title}
				urlId={"/posts/" + postData.id}
				description={postData.subtitle ? postData.subtitle : ""}
				buildDate={buildDateObj}
				keywords={postData.keywords.split(",")}
				extendedData={{
					episodeNumber: postData.episodeNumber,
					director: "Jordan Gass-Poore'",
					copyrightHolder: "Jordan Gass-Poore'",
					productionCompany: "Local Switchboard",
					editor: "Jordan Gass-Poore'",
					contentUrl: postData.contentUrl,
				}}
			></MetaHead>
			<SiteNav />
			<Row className="main-content">
				<ColumnSpan spanCount="8">
					<Post
						post={postData}
						isNew={false}
						isFull={true}
						isSocial={false}
						isFront={false}
					/>
				</ColumnSpan>
				<ColumnSpan spanCount="4">
					<SocialPrompt tweetUrl={postData.socialPrompt} />
				</ColumnSpan>
			</Row>
		</Layout>
	)
}

export async function getStaticPaths() {
	const paths = getAllPostIds()
	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id)
	return {
		props: {
			postData,
			buildDate: new Date().toString(),
		},
	}
}
