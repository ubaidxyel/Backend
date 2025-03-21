const {Router} = require("express")
const {getTasks, saveTasks, updateTasks, deletetask} = require("../controllers/TaskController")
const router = Router();


router.get("/get", getTasks)
router.post("/save", saveTasks)
router.put("/update/:id", updateTasks)
router.delete("/delete/:id", deletetask)

module.exports = router