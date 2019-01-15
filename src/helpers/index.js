
export const dataPreprocess = (response) => {

	let data = []
	let markerNext = ''
	try {
		const payload = response.data
		markerNext = payload.data.after
		data = payload.data.children
	}
	catch (err) {
		throw new Error('invalid data received')
	}

	return {data, markerNext}
}

export const subredditFromPathString = (string) => (
	string.replace(/^\//, '').split('/')[1]
)
