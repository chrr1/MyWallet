import express from "express"
import {
    createTransaction, 
    deleteTransaction, 
    getSummaryByUserId, 
    getTransactionsByUserId} 
    from "../controller/transactionsController.js"

const router = express.Router()

router.get("/summary/:userId", getSummaryByUserId); 
router.get("/:userId", getTransactionsByUserId)
router.post("/", createTransaction);
router.delete("/:id", deleteTransaction)

export default router;