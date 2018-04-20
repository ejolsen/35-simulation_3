module.exports = {

    register: function(req, res) {
        const db = req.app.get('db');
        db.createUser([req.body.username, req.body.password])
        .then(createdUser => {
        res.status(200).send(req.user)
        });
    },

    userLogin: function(req, res) {
        const {username, password} = req.body
        const db = req.app.get('db');
        db.find_user([username, password]).then
        ( user => { res.status(200).send(user)})
    } 
};


