const User = require('../model/User');
const Convo = require('../model/Convo');

const handleNewConvo = async (req, res) => {
    
    try {
        // Read out request body
        const {req_uid, searched_user} = req.body;
        if (!searched_user) return res.status(400).json({'message': 'Username required for search'});

        // Look for the user requested
        const foundUser = await User.findOne({username: searched_user}).exec();
        if (!foundUser) return res.sendStatus(404); // User not found

        // Make a new convo between the users
        const newConvo = await Convo.create({
            "users": [req_uid, foundUser._id],
            "messages": []
        });
        console.log(newConvo);

        // Update the requesting user's convos
        const requestingUser = await User.findOne({req_uid: req_uid}).exec();
        if (!requestingUser) return res.sendStatus(400); // Requesting user not found
        requestingUser.convos = [...requestingUser.convos, newConvo._id];
        await requestingUser.save();

        // Update the user requested's convos
        foundUser.convos = [...foundUser.convos, newConvo._id];
        await foundUser.save();

        // Respond with the new conversation's ID
        const newConvoID = newConvo._id;
        res.status(201).json({newConvoID})
    } catch (err) {
        res.status(500).json({'message': err.message});
    }
}

module.exports = {handleNewConvo};