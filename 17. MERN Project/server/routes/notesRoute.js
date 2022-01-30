import express from 'express';
import {
  getNotes,
  postNotes,
  patchNotes,
  deleteNotes,
} from "../controller/NotesController.js";
import authMiddleware from '../middleware/authenticate.js';

const router = express.Router();

router.get('/', authMiddleware, getNotes); // R
router.post('/', authMiddleware, postNotes); // C
router.put('/:id', authMiddleware, patchNotes); // U
router.delete('/:id', authMiddleware, deleteNotes); // D

export default router;

