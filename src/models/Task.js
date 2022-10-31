//propiedades de mongo db, como mysql
import { Schema, model } from "mongoose";

const TaskSchema = new Schema(
  {
    title: {
      require: true,
      type: String,
      unique: true,
      //trim es una funcion de javascrip para quitar los espacio sen blanco
      trim: true,
    },
    description: {
      require: true,
      type: String,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  { timeStamps: true, versionKey: false }
);

//mongoose, por defualt add __v propierty like version key, we dont use

export default model("Task", TaskSchema);
