/**
 * @type {{id: Number, name: string}}
 */
let items = []
let nextId = 1

function getItems(req, res) {
    res.json(items)
}

function getItem(req, res) {
    const id = parseInt(req.params.id, 10)
    const item = items.find(i => i.id === id)
    if (!item) return res.status(404).json({ error: 'Item not found' })
    res.json(item)
}

function createItem(req, res) {
    const { name } = req.body
    const newItem = { id: nextId++, name }
    items.push(newItem)
    res.status(201).json(items)
}

function updateItem(req, res) {
    const id = parseInt(req.params.id, 10)
    const { name } = req.body
    const item = items.find(i => i.id === id)
    if (!item) return res.status(404).json({ error: 'Item not found' })

    item.name = name
    res.json(item)
}

function deleteItem(req, res) {
    const id = parseInt(req.params.id, 10)
    items = items.filter(i => i.id !== id)
    res.status(204).send()
}

function itemDetail(req, res) {
    console.log(req.params)
    const { id, detailType } = req.params
    const item = items.find(i => i.id === parseInt(id))
    if (!item) return res.status(404).json({ error: 'Item not found' })

    res.json({
        item: item,
        message: `detail: ${detailType}`
    })
}

function itemType(req, res) {
    console.log("itemtype hit", req.params)
    const { id, itemType: type } = req.params
    const item = items.find(i => i.id === parseInt(id))
    if (!item) return res.status(404).json({ error: 'item not found' })

    res.json({
        message: `item: ${item.name} - ${type}`
    })
}

module.exports = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem,
    itemDetail,
    itemType,
}
