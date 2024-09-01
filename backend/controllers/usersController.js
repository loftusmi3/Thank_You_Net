const User = require('../model/User');
const Convo = require('../model/Convo');

const getAllUsers = async (req, res) => {
    const users = await User.find();
    if (!users) return res.status(204).json({ 'message': 'No users found' });
    res.json(users);
}

const deleteUser = async (req, res) => {
    if (!req?.body?.id) return res.status(400).json({ "message": 'User ID required' });
    const user = await User.findOne({ _id: req.body.id }).exec();
    if (!user) {
        return res.status(204).json({ 'message': `User ID ${req.body.id} not found` });
    }
    const result = await user.deleteOne({ _id: req.body.id });
    res.json(result);
}

const getUser = async (req, res) => {
    if (!req?.params?.id) return res.status(400).json({ "message": 'User ID required' });
    const user = await User.findOne({ _id: req.params.id }).exec();
    if (!user) {
        return res.status(204).json({ 'message': `User ID ${req.params.id} not found` });
    }
    res.json(user);
}

const handleNewConvo = async (req, res) => {
    
    try {
        // Read out request body
        if (!req.body.searched_user) return res.status(400).json({'message': 'Username required for search'});
        if (!req.body.req_user) return res.status(400).json({'message': 'Username required for search'});

        // Look for the user requested
        const foundUser = await User.findOne({username: req.body.searched_user}).exec();
        if (!foundUser) return res.sendStatus(404); // User not found
        
        // Look for the requesting user
        const requestingUser = await User.findOne({username: req.body.req_user}).exec();
        if (!requestingUser) return res.sendStatus(404); // Requesting user not found

        // Make a new convo between the users
        const newConvo = await Convo.create({
            "users": [foundUser._id, requestingUser._id],
            "messages": []
        });
        console.log(newConvo);

        // Update the requesting user's convos
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

module.exports = {
    getAllUsers,
    deleteUser,
    getUser,
    handleNewConvo
};