import express from 'express';
import {
    getNotes,
    postNotes,
    patchNotes,
    deleteNotes,
  } from "../controller/NotesController.js";
import authMiddleware from '../middleware/authenticate.js';

const router = express.Router();

router.get('/',authMiddleware, getNotes);
router.post('/',authMiddleware,postNotes);
router.put('/:id',authMiddleware, patchNotes);
router.delete('/:id',authMiddleware,deleteNotes);

export default router;

