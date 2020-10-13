const generateList = (length) => {
    let A = []
    for (let i = 0; i < length; i++) {
        A.push({
            value: Math.floor(Math.random() * 101),
            color: 'white',
        })
    }
    return A
}

const sleep = (ms) => {
    return new Promise((r) => setTimeout(r, ms))
}
export { generateList, sleep }
