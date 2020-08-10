import Layout from "../../components/layout"
import { getAllPostIds, getPostData } from "../../lib/posts"
import Row from "../../components/Row"
import ColumnSpan from "../../components/ColumnSpan"
import Post from "../../components/post"
import Nav from "../../components/nav"
import MetaHead from "../../components/MetaHead"
import SocialPrompt from "../../components/socialPrompt"

export default function APost({ postData, buildDate }) {
	// 	<ColumnSpan spanCount="2">{morePosts}</ColumnSpan>
	//  <Date dateString={postData.date} />
	var buildDateObj = new Date(buildDate)
	return (
		<Layout>
			<MetaHead
				pageType="CollectionPage"
				headline={postData.title}
				buildDate={buildDateObj}
				keywords={postData.keywords.split(",")}
			></MetaHead>
			<Nav />
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
					<h4>Talk with us about this episode on Twitter:</h4>
					<br />
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
