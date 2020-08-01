import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html lang="en">
				<Head></Head>
				<body id="top" data-spy="scroll" data-target=".subnav" data-offset="80">
					<Main />
					<NextScript />
					<script src="/scripts/jquery.min.js"></script>
					<script src="/scripts/bootstrap-tooltip.js"></script>
					<script src="/scripts/bootstrap-affix.js"></script>
					<script src="/scripts/bootstrap-dropdown.js"></script>
					<script src="/scripts/bootstrap-popover.js"></script>
					<script src="/scripts/bootstrap-scrollspy.js"></script>

					<script src="/scripts/bootstrap-collapse.js"></script>
					<script src="/scripts/bootstrap-modal.js"></script>
					<script src="/scripts/bootstrap-transition.js"></script>
					<script
						async
						src="https://platform.twitter.com/widgets.js"
						charSet="utf-8"
					></script>
				</body>
			</Html>
		)
	}
}

export default MyDocument
