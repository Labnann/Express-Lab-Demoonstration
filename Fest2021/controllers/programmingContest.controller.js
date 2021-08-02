

const Team = require("../models/Team.model");


const createTeam = (req, res) => {
    const data = JSON.parse(req.body.data);

    console.log(data);

    data.paid = false;
    data.selected=false;



    new Team(data).save().then(res.json({
        success: true
    }));

};

const view = (req,res)=>{
    console.log("view hit");
    Team.find().then((teams)=>{
        res.render("admin-pages/ProgrammingContest/ProgrammingContestTeamView.ejs",{teams})
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
    }).then((team)=>{
        res.render("admin-pages/ProgrammingContest/ProgrammingContestTeamEdit.ejs",{team})
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
