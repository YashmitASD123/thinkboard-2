import { Router } from "express";
import { createNote, deleteNote, getNotes, getNoteAsID, updateNote  } from "../controllers/notes.controller.js";

const app = Router();

app.get("/", getNotes);
app.get("/:id", getNoteAsID);
app.post("/", createNote);
app.put("/:id", updateNote);
app.delete("/:id", deleteNote);

export default app;