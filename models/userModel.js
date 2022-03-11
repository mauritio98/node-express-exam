import users from '../data/user.js'


class UserModel{

    registerUser(req,res,next){
        console.log("userModel");
        //agregamos al array
        users.push(req.body);
        return users;
    }

    loginUser(req,res,next){
        console.log("userModel");
        //filtro comparacion
        return users.find(e => e.username == req.body.username && req.body.password == req.body.password);
    }
}



export default new UserModel();