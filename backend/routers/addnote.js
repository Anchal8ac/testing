import express from 'express';
import Note from '../model/note.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { title, content } = req.body;

  console.log("New Post Received:", title, content);

  if (!title || !content) {
    return res.status(400).json({ error: "Title and content are required" });
  }

  try {
    const newNote = new Note({ title, content });
    await newNote.save();
    res.status(201).json({ message: 'Note saved successfully', note: newNote });
  } catch (err) {
    console.error("Save error:", err);
    res.status(500).json({ error: "Failed to save note" });
  }
});

export default router;
