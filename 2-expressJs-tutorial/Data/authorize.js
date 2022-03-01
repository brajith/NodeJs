
const authorize = (req, res, next) => {
    const { name } = req.query
    
    if(name === 'brajith') {
        req.user = "john"
        console.log('authorization sucessful')
        console.log(`----------------`)
        next()
    }
    else {
        res.status(401).send('Unauthorized')
    }
}

module.exports = authorize