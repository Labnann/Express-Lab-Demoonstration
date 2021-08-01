
const MathOlympiadUser = require("../models/MathOlympiadUser.model");
 const createUser = (req, res) => {
        new MathOlympiadUser(req.body).save().then(res.json({
            success: true
        }));

};

const view = (req,res)=>{
    MathOlympiadUser.find().then((users)=>{
        console.log(users);
        res.render("admin-pages/MathOlympiad/MathOlympiadUserView.ejs",{users})
    });



}


const deleteUser = (req,res)=>{
    console.log("Deleting", req.params.id);
    MathOlympiadUser.findByIdAndRemove(req.params.id,(err)=>{
        console.log(err);
    }).then(()=>{
        res.json({success: true});
    });
}
module.exports= {
    createUser,view,deleteUser
}
