const { BadRequest } = require('../errors')
const jwt = require('jsonwebtoken')



const login = async (req, res) => {
    const {username, password} = req.body
    // we have three methods to validate
    // Mongoose validation
    // Joi
    // check in the controller

    // demo id for now
    if(!username || !password) {
        throw new BadRequest('Please provide username and password')
    }
    const id = new Date().getDate()

    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: '30d'})
    res.status(200).json({msg: 'user created', token})
}


const dashboard = async (req, res) => {

    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({msg: `Hello, ${req.user.username}`, secret: `Here is your authorized data, your lucky number is ${luckyNumber}`})
}

module.exports = {
    login,
    dashboard,
}