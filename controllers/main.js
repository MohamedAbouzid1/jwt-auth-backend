
const login = async (req, res) => {
    res.send('Fake login/register/logout route')
}

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100) // generate a random number between 0 and 100
    res.status(200).json({
        msg: `Hello, ${req.user.username}`,
        secret: `Here is your authorized data, your lucky number is ${luckyNumber}`
    })
}

module.exports = {
    login,
    dashboard
}