const Team = require("../models/Team.model");
const participationCodeService = require("../services/ParticipationService/participationCode.service")


const createTeam = (req, res) => {
    const data = JSON.parse(req.body.data);


    data.paid = false;
    data.selected = false;
    data.participationCode = generateCode(data);


    new Team(data).save().catch(err => {
        return res.json({success: false})
    }).then(() => {
        sendSuccessMail(data);
        return res.json({
            success: true
        })
    })
    ;

};

const generateCode = (data)=>{
    return participationCodeService.generateParticipationCode(
        data.teamLeader.email +
        data.teamMember1.email +
        data.teamMember2.email +
        data.coach.email);
}

const sendSuccessMail = (data)=>{
    participationCodeService.mailCode({code: data.participationCode,to:data.teamMember1.email})
    participationCodeService.mailCode({code: data.participationCode,to:data.teamMember2.email})
    participationCodeService.mailCode({code: data.participationCode,to:data.teamLeader.email})
    participationCodeService.mailCode({code: data.participationCode,to:data.coach.email})
}

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
