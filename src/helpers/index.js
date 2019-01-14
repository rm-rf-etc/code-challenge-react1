
export const dataPreprocess = (_json) => {

    let data = []
    try {
        data = _json.data.children
    }
    catch (err) {
        throw new Error('invalid data received')
    }

    return data
}
