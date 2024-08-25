const verifyRoles = (...allowedRoles) => {
    return (req, res, next) => {
        if(!req?.roles) return res.sendStatus(401);
        const rolesArray = [...allowedRoles];
        console.log(rolesArray);
        console.log(req.roles);
        // Boolean array for if role is one of the user's roles, then call find to return only true
        const result = req.roles.map(role => rolesArray.includes(role)).find(val => val === true);
        if(!result) return res.sendStatus(401);
        next();
    }
}

module.exports = verifyRoles;

// {"user": "dave1", "pwd": "Aa$12345"}