const express = require('express');
const router = express.Router();
const { borrowBook, getUserBorrowedBooks, getAllBorrowedBooks, returnBook, getOverdueBooks } = require('../controllers/BorrowedController');

router.post('/borrow', borrowBook);
router.put('/return/:id', returnBook);
router.get('/overdue', getOverdueBooks);
router.get('/user', getUserBorrowedBooks); 
router.get('/all', getAllBorrowedBooks); 

module.exports = router;
