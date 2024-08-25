const User = require('../model/User');

const handleLogout = async (req, res) => {
    // On frontend, also delte the access token
    
    const cookies = req.cookies;
    if (!cookies.jwt) return res.sendStatus(204); // No content
    const refreshToken = cookies.jwt;
    
    // Is refreshToken in db?
    // Not using findOneAndUpdate so we can send a 403
    const foundUser = await User.findOne({refreshToken: refreshToken}).exec();
    if (!foundUser) {
        res.clearCookie('jwt', {httpOnly: true, sameSite: 'None', secure: true});        
        return res.sendStatus(403); // Forbidden
    }
    
    // Delete refreshToken in db
    foundUser.refreshToken = '';
    const result = await foundUser.save();
    console.log(result);
    
    res.clearCookie('jwt', {httpOnly: true, sameSite: 'None', secure: true});
    res.sendStatus(204)
}


module.exports = {handleLogout};