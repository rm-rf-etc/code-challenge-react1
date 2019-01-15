
export const dataPreprocess = (response) => {

	let data = []
	try {
		const payload = response.data
		data = payload.data.children
	}
	catch (err) {
		throw new Error('invalid data received')
	}

	return data
}

export const subredditFromPathString = (string) => (
	string.replace(/^\//, '').split('/')[1]
)
