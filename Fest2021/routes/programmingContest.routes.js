const ensureAuthenticated = require("../middlewares/auth.middleware");
const router= require("express").Router();
const programmingContestController = require("../controllers/mathOlympiad.controller");

router.get("/view",ensureAuthenticated,programmingContestController.view);
router.post("/create",ensureAuthenticated,programmingContestController.createTeam);
router.get("/delete/:id",ensureAuthenticated,programmingContestController.deleteTeam);
router.get("/edit/:id",ensureAuthenticated,programmingContestController.showEditTeam);
router.post("/edit/",ensureAuthenticated,programmingContestController.editTeam);


module.exports = router;

