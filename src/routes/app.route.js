import { Router } from "express";
import Task from "../models/Task";
const router = Router();

router.get("/", async (req, res) => {
  const tasks = await Task.find().lean();
  //tasksList sera el array de obj que se enviariá
  res.render("index", { tasksList: tasks });
});

router.post("/task/add", async (req, res) => {
  try {
    const task = Task(req.body);

    await task.save();

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});
router.get("/about", (req, res) => {
  res.render("about");
});
router.get("/editing", (req, res) => {
  res.render("editing");
});

export default router;
