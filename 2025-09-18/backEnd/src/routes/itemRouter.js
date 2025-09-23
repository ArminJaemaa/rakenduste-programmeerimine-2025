const express = require('express')
const {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem,
    itemDetail,
    itemType,
} = require('../controllers/itemController')

const router = express.Router()

router.get('/:id/detail/:detailType', itemDetail)   // GET item with detail
router.get('/:id-:itemType', itemType)       // GET item with type

router.get('/', getItems)           // READ all
router.get('/:id', getItem)         // READ one
router.post('/', createItem)        // CREATE
router.put('/:id', updateItem)      // UPDATE
router.delete('/:id', deleteItem)   // DELETE

module.exports = router
