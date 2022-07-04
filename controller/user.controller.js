
const UserModel = require('../models/user.model');
/*
exports.getUserByParams = (req, res)=>{
    //console.log('get emp by id');
    UserModel.getUserByParams(req.params.id, (err, employee)=>{
        if(err)
        res.send(err);
        console.log('single employee data',employee);
        res.send(employee);
    })
}
*/
exports.getTest = (req, res) => {
    console.log('Peticion Recibida')
    res.json({success: true})
}

exports.getUser =  async (req, res) => {
    const user = req.body.user;
    const password = req.body.password;
    console.log(user)
    console.log(password)
    try {
      const result = await UserModel.getUserByParams(user,password);
      res.json({
        result: result[0].fullname,
        success: true
    })
    } catch (err) {
      console.log('fallo')
    }
  };