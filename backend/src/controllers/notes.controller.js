const notesCtrl = {};

const Note = require('../models/Note');

notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.status(200).json(notes);
};

notesCtrl.createNote = async (req, res) => {
    const { title } = req.body;
    const newNote = new Note({
        title
    });
    await newNote.save();
    res.status(201).json('New Note added');
};

notesCtrl.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.status(200).json(note);
}

notesCtrl.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id)
    res.json('Note Deleted');
}

notesCtrl.updateNote = async (req, res) => {
    const { title } = req.body;
    await Note.findByIdAndUpdate(req.params.id, {
        title
    });
    res.json('Note Updated');
}

module.exports = notesCtrl;
