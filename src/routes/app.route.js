import { Router } from "express";
import Task from "../models/Task";
const router = Router();

//muestra de tareas
router.get("/", async (req, res) => {
  const tasks = await Task.find().lean();
  //tasksList sera el array de obj que se enviariá
  res.render("index", { tasksList: tasks });
});

//listar tareas
router.post("/task/add", async (req, res) => {
  try {
    const task = Task(req.body);

    await task.save();

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

//ruta para ir ala edicion de tarea
router.get("/edit/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();
    res.render("edit", { task });
  } catch (error) {
    console.log(error.message);
  }
});

//edicion de tareas
router.post("/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndUpdate(id, req.body);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

//borrar tarea

router.get("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

export default router;
