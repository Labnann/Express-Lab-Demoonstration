

const Team = require("../models/Team.model");


const createTeam = (req, res) => {
    const data = JSON.parse(req.body.data);


    data.paid = false;
    data.selected=false;



    new Team(data).save().then(res.json({
        success: true
    }))
        .catch(err=>{
            res.json({success: false})
        });

};

const view = (req,res)=>{
    Team.find().then((teams)=>{
        res.render("admin-pages/ProgrammingContest/ProgrammingContestTeamView.ejs",{teams})
    });
}


const deleteTeam = (req, res)=>{
    Team.findByIdAndRemove(req.params.id,(err)=>{
    }).then(()=>{
        res.json({success: true})
            .catch(err=>{
                res.json({success: false})
            });
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
    let data = JSON.parse(req.body.data);
    const id = data._id;
    delete data._id;
    Team.findByIdAndUpdate(id,data,{new: true, useFindAndModify:true}).then(value=>{
        res.json({success:true});
    }).catch(err=>{
        res.json({success:false});
    });

}


module.exports= {
    createTeam,view,deleteTeam,showEditTeam, editTeam
}
