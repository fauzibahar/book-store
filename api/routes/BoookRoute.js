import express from "express";
import { createBook, deleteBook, getBookById, getBooks, updateBook } from "../controllers/Book.js";

const router = express.Router();

router.post("/books", createBook);
router.get("/books", getBooks);
router.get("/books/:id", getBookById);
router.put("/books/:id", updateBook);
router.delete("/books/:id", deleteBook);

export default router;
