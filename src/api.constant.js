const createURL = (url) => {
    return `http://0.0.0.0:8080/${url}`
}
const apiUrl =  {
    list: createURL('data')
}

export default apiUrl;