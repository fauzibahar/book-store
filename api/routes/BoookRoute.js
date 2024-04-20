import express from "express";
import { createBook, deleteBook, getBookById, getBooks, updateBook } from "../controllers/Book.js";

const router = express.Router();

router.post("/api/books", createBook);
router.get("/api/books", getBooks);
router.get("/api/books/:id", getBookById);
router.put("/api/books/:id", updateBook);
router.delete("/api/books/:id", deleteBook);

export default router;
