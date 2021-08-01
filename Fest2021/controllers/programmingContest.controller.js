

const Team = require("../models/Team.model");
const createTeam = (req, res) => {
    req.body.paid = false;
    req.body.selected=false;
    new Team(req.body).save().then(res.json({
        success: true
    }));

};

const view = (req,res)=>{
    Team.find().then((users)=>{
        res.render("admin-pages/ProgrammingContest/ProgrammingContestTeamView.ejs",{users})
    });



}


const deleteTeam = (req, res)=>{
    console.log("Deleting", req.params.id);
    Team.findByIdAndRemove(req.params.id,(err)=>{
    }).then(()=>{
        res.json({success: true});
    });
}

const showEditTeam = (req, res)=>{

    Team.findById(req.params.id,(err)=>{
        console.log(err);
    }).then((user)=>{
        res.render("admin-pages/ProgrammingContest/ProgrammingContestTeamEdit.ejs",{user})
    });
}

const editTeam = (req, res)=>{
    console.log("EDITING WITH",req.body);
    const id = req.body._id;
    delete req.body._id;
    Team.findByIdAndUpdate(id,req.body,{new: true, useFindAndModify:true}).then(value=>{
        console.log("Edited",value);
        res.json({success:true});
    });

}


module.exports= {
    createTeam,view,deleteTeam,showEditTeam, editTeam
}
