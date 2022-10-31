import { Router } from "express";
import Task from "../models/Task";
const router = Router();
import { changeStatus, deleteTask, editTask, saveTask, taskEdited, taskList }from '../controllers/task.controller'


//muestra de tareas
router.get("/", taskList);

//guardar tarea
router.post("/task/add", saveTask);

//ruta para ir ala edicion de tarea
router.get("/edit/:id", editTask);

//edicion de tareas
router.post("/edit/:id", taskEdited);

//borrar tarea
router.get("/delete/:id", deleteTask);

//cambiar estado de tarea
router.get("/changeStatus/:id", changeStatus);
export default router;
