const Team = require("../models/Team.model");


const createTeam = (req, res) => {
    const data = JSON.parse(req.body.data);


    data.paid = false;
    data.selected = false;


    new Team(data).save().catch(err => {
        return res.json({success: false})
    }).then(() => {
        return res.json({
            success: true
        })
    })
    ;

};

const view = (req, res) => {
    Team.find().then((teams) => {
        return res.render("admin-pages/ProgrammingContest/ProgrammingContestTeamView.ejs", {teams})
    });
}


const deleteTeam = (req, res) => {
    Team.findByIdAndRemove(req.params.id, (err) => {
    }).catch(err => {
        return res.json({success: false})
    }).then(() => {
        return res.json({success: true});
    });
}

const showEditTeam = (req, res) => {

    Team.findById(req.params.id, (err) => {
        console.log(err);
    }).then((team) => {
        res.render("admin-pages/ProgrammingContest/ProgrammingContestTeamEdit.ejs", {team})
    });
}

const editTeam = (req, res) => {
    let data = JSON.parse(req.body.data);
    const id = data._id;
    delete data._id;
    Team.findByIdAndUpdate(id, data, {new: true, useFindAndModify: true}).catch(err => {
        return res.json({success: false})
    }).then(value => {
        return res.json({success: true});
    });

}


module.exports = {
    createTeam, view, deleteTeam, showEditTeam, editTeam
}
