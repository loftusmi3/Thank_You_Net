const User = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const handleLogin = async (req, res) => {
    const {user, pwd } = req.body;
    if (!user || !pwd) return res.status(400).json({'message': 'Username and password are required'});
    
    const foundUser = await User.findOne({username: user}).exec();
    if (!foundUser) return res.sendStatus(401); // Unauthorized

    const match = await bcrypt.compare(pwd, foundUser.password);
    if (match) {
        const roles = Object.values(foundUser.roles);
        // Create JWTs
        const accessToken = jwt.sign(
            {"UserInfo": {
                "uid": foundUser.uid,
                "roles": roles
            }},
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn: '10m'}
        );
        const refreshToken = jwt.sign(
            {"uid": foundUser.uid},
            process.env.REFRESH_TOKEN_SECRET,
            {expiresIn: '1d'}
        );

        foundUser.refreshToken = refreshToken;
        const result = await foundUser.save();
        console.log(result)

        // Http cookie is not available to js so it's much more secure
        res.cookie('jwt', refreshToken, {httpOnly: true, sameSite: 'None', maxAge: 24*60*60*1000, secure: true})
        res.json({roles, accessToken});
    } else {
        res.sendStatus(401);
    }
}

module.exports = {handleLogin};