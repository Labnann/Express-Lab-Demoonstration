
const MathOlympiadUser = require("../models/MathOlympiadUser.model");
 const createUser = (req, res) => {
        req.body.paid = false;
        req.body.selected=false;
        new MathOlympiadUser(req.body).save().then(res.json({
            success: true
        }));

};

const view = (req,res)=>{
    MathOlympiadUser.find().then((users)=>{
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

const showEditUser = (req,res)=>{

    MathOlympiadUser.findById(req.params.id,(err)=>{
        console.log(err);
    }).then((user)=>{
        console.log(user);
        res.render("admin-pages/MathOlympiad/MathOlympiadUserEdit.ejs",{user})
    });
}


module.exports= {
    createUser,view,deleteUser,showEditUser
}
