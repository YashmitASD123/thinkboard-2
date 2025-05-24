import Note from "../models/Note.js";

export const getNotes = async(_, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getNotes:", error);
    res.status(500).json({ message: "Error fetching notes" });
  }
}

export const createNote = async(req, res) => {
  try {
    const newNote = new Note({title: req.body.title, content: req.body.content});  
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    console.error("Error in createNote:", error);
    res.status(500).json({ message: "Error creating note" });
  }
}

export const updateNote = async(req, res) => {
  try {
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json(updatedNote);
  } catch (error) {
    console.error("Error in updateNote:", error);
    res.status(500).json({ message: "Error updating note" });
  }
}

export const deleteNote = async(req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.error("Error in deleteNote:", error);
    res.status(500).json({ message: "Error deleting note" });
  }
}

export const getNoteAsID = async(req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json(note);
  } catch (error) {
    console.error("Error in getNoteAsID:", error);
    res.status(500).json({ message: "Error fetching note" });
  }
}
