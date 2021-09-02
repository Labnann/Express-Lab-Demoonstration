const MathOlympiadUser = require("../models/MathOlympiadUser.model");
const participationCodeService = require("../services/ParticipationService/participationCode.service");

const createUser = (req, res) => {

    const data= req.body;
    data.paid = false;
    data.selected = false;
    data.participationCode = participationCodeService.generateParticipationCode(data.email);

    new MathOlympiadUser(data).save().catch(err => {
        return res.json({success: false})
    }).then(
        (value) => {

            sendSuccessMail(data);
            return res.json({
                success: true
            })
        }
    )


};

const sendSuccessMail = (data)=>{
    participationCodeService.mailCode({code: data.participationCode,to:data.email})
}


const view = (req, res) => {
    MathOlympiadUser.find().then((users) => {
        console.log(users)
        res.render("admin-pages/MathOlympiad/MathOlympiadUserView.ejs", {users})
    });


}


const deleteUser = (req, res) => {
    MathOlympiadUser.findByIdAndRemove(req.params.id, (err) => {
    }).catch(err => {
        return res.json({success: false})
    }).then(() => {
        return res.json({success: true});
    })

}

const showEditUser = (req, res) => {

    MathOlympiadUser.findById(req.params.id, (err) => {

    }).then((user) => {
        return  res.render("admin-pages/MathOlympiad/MathOlympiadUserEdit.ejs", {user})
    })
    ;
}

const editUser = (req, res) => {
    const id = req.body._id;
    delete req.body._id;
    MathOlympiadUser.findByIdAndUpdate(id, req.body, {new: true, useFindAndModify: true}).catch(err => {
        return  res.json({success: false})
    }).then(value => {
        return   res.json({success: true});
    })


}


module.exports = {
    createUser, view, deleteUser, showEditUser, editUser
}
