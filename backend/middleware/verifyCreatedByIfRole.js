const verifyCreatedByIfRole = (...rolesToVerify) => {
    return (req, res, next) => {
        if(!req?.roles) return res.sendStatus(401);
        const rolesArray = [...rolesToVerify];

        // This variable represents wheter the user is of a role that doesn't need to be verified
        const noNeedToVerify = req.roles.map(role => rolesArray.includes(role)).find(val => val === false)
        
        // If you need to verify the user, verify them
        if (!noNeedToVerify) {
            // verifyJWT verified that req.uid matches the uid in the access token so
            // req.params.id === req.uid will evaluate to true if user with uid uid is trying to access /!uid
            if (req.params.id === req.uid) {
                next();
            }
        }
        // Allow them to pass if they don't need to be verified
        else {
            next();
        }
    }
}

module.exports = verifyCreatedByIfRole