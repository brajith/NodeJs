const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const timestamp = new Date().getFullYear()
    console.log(`----------------`)
    console.log(method, url, timestamp)
    next()
}

module.exports = logger