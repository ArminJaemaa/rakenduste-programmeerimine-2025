const express = require('express')
const {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem,
} = require('../controllers/itemController')

const router = express.Router()

router.get('/', getItems)           // READ all
router.get('/:id', getItem)         // READ one
router.post('/', createItem)        // CREATE
router.put('/:id', updateItem)      // UPDATE
router.delete('/:id', deleteItem)   // DELETE

module.exports = router
