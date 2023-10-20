import Note from "../models/notes.js";

export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    console.log(error)
  }
};

export const createNote = async (req, res ) => {
  try {
    const { title, description, date, writer } = req.body
    const newNote = new Note({
      title,
      description,
      date,
      writer
    });
    const savedNote = await newNote.save();
    return res.json(savedNote);
  } catch (error) {
    console.log(error)
  }
};

export const getNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      const error = new Error("Note does not exists");
      error.status = 404;
      throw error;
    }
    res.json(note);
  } catch (error) {
    console.log(error)
  }
};

export const deleteNote = async (req, res, ) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);

    if (!deletedNote) {
      const error = new Error("Note does not exists");
      error.status = 404;
      throw error;
    }

    return res.sendStatus(204);
  } catch (error) {
    console.log(error)
  }
};

export const updateNote = async (req, res, ) => {
  try {
    const { title, description, duration, writer } = req.body;
    const noteUpdated = await Note.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          title,
          description,
          duration,
          writer
        },
      },
      {
        new: true,
      }
    );

    return res.json(noteUpdated);
  } catch (error) {
    console.log(error)
  }
};