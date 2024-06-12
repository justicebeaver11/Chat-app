const { register, login, setAvatar, getAllUsers, firebaseLogin, checkUsername } = require("../controllers/userController");


const router = require("express").Router();
router.post("/register", register);
router.post("/login", login);
router.post("/setavatar/:id", setAvatar);
router.get("/allusers/:id", getAllUsers);
router.post("/firebaseLogin", firebaseLogin);
router.post("/checkUsername", checkUsername);

module.exports = router;