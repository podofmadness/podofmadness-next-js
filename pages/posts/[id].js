import Layout from "../../components/layout"
import { getAllPostIds, getPostData } from "../../lib/posts"
import Date from "../../components/date"
import Row from "../../components/Row"
import ColumnSpan from "../../components/ColumnSpan"
import Post from "../../components/post"
import Nav from "../../components/nav"

export default function APost({ postData }) {
	// 	<ColumnSpan spanCount="2">{morePosts}</ColumnSpan>
	//  <Date dateString={postData.date} />
	return (
		<Layout>
			<Nav />
			<Row className="main-content">
				<ColumnSpan spanCount="10">
					<Post
						post={postData}
						isNew={false}
						isFull={false}
						isSocial={true}
						isFront={false}
					/>
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
		},
	}
}
