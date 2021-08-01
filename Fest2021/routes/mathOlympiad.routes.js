const ensureAuthenticated = require("../middlewares/auth.middleware");
const router= require("express").Router();
const mathOlympiadController = require("./../controllers/mathOlympiad.controller")

router.get("/view",ensureAuthenticated,mathOlympiadController.view);
router.post("/create",ensureAuthenticated,mathOlympiadController.createUser);
router.get("/delete/:id",ensureAuthenticated,mathOlympiadController.deleteUser);
router.get("/edit/:id",ensureAuthenticated,mathOlympiadController.showEditUser);
router.post("/edit/",ensureAuthenticated,mathOlympiadController.editUser);


module.exports = router;

