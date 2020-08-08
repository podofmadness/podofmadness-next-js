export default function ColumnSpan({ children, spanCount, className }) {
	let spanSize = `span${spanCount} `
	spanSize += className
	return <div className={spanSize}>{children}</div>
}
