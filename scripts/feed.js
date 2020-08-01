import forwardfeed from "../lib/forwardfeed"

export default function Feed() {}
Feed.getInitialProps = async ({ res }) => {
	res.setHeader("Content-Type", "text/xml")
	// res.write(await forwardfeed())
	res.end()
}
