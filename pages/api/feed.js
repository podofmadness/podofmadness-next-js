import forwardfeed from "../../lib/forwardfeed"

export default async (request, response) => {
	//res.status(200).json({ text: "Hello" })
	// express helps us take JS objects and send them as JSON
	response.set("Content-Type", "text/xml")
	response.status(200).send(await forwardfeed())
}
