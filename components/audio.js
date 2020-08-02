// https://stackoverflow.com/questions/6108819/javascript-timestamp-to-relative-time
function timeDifference(current, previous) {
	var msPerMinute = 60 * 1000
	var msPerHour = msPerMinute * 60
	var msPerDay = msPerHour * 24
	var msPerMonth = msPerDay * 30
	var msPerYear = msPerDay * 365

	var elapsed = current - previous

	if (elapsed < msPerMinute) {
		return Math.round(elapsed / 1000) + " seconds ago"
	} else if (elapsed < msPerHour) {
		return Math.round(elapsed / msPerMinute) + " minutes ago"
	} else if (elapsed < msPerDay) {
		return Math.round(elapsed / msPerHour) + " hours ago"
	} else if (elapsed < msPerMonth) {
		return "approximately " + Math.round(elapsed / msPerDay) + " days ago"
	} else if (elapsed < msPerYear) {
		return "approximately " + Math.round(elapsed / msPerMonth) + " months ago"
	} else {
		return "approximately " + Math.round(elapsed / msPerYear) + " years ago"
	}
}

export default function Audio({ contentUrl, datePublished, minutesRequired }) {
	var relativeTime = timeDifference(
		Date.parse(Date.now()),
		Date.parse(datePublished)
	)
	var dateTimeCode = "PT"
	var datetimeString = ""
	var intMinutes = parseInt(minutesRequired, 10)
	if (intMinutes >= 60) {
		var hours = Math.floor(intMinutes / 60)
		var minutes = intMinutes - hours * 60
		dateTimeCode += hours + "H" + minutes + "M"
		datetimeString = hours + " hours and " + minutes + "minutes"
	} else {
		dateTimeCode += minutesRequired + "M"
		datetimeString = minutesRequired + " minutes"
	}
	console.log("Audio data", contentUrl, datePublished, minutesRequired)
	return (
		<>
			<audio controls>
				<source src={contentUrl} type="audio/mpeg" />
			</audio>
			<small
				className="hidden"
				itemProp="datePublished"
				dateTime={datePublished}
			>
				{relativeTime}
			</small>
			<small className="hidden" itemProp="timeRequired" dateTime={dateTimeCode}>
				{datetimeString}
			</small>
		</>
	)
}
