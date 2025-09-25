const cats = [
    {
        id: "7d613b93-fa3e-4ef3-a9d2-e09e5ca6e4e6",
        name: "Meow",
        createdAt: 1727098800585,
        updatedAt: null,
        deleted: false,
    },
    {
        id: "2dc9ce08-d345-4fed-8560-4c6b66fb0836",
        name: "Kitty",
        createdAt: 1727098952739,
        updatedAt: null,
        deleted: false,
    },
];

function createId(length) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < 8; j++) {
            const randomInd = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomInd);
        };
        if (i < length - 1) {
            result += "-";
        }
    };
    return result;
}

exports.create = (req, res) => {
    const { name } = req.body;
    const newId = createId(5);
    const timestamp = Date.now();
    const updated = null;
    const deleted = false;
    const newCat = {
        id: newId,
        name: name,
        createdAt: timestamp,
        updatedAt: updated,
        deleted: deleted
    };
    cats.push(newCat);
    console.log(newCat);
    res.sendStatus(201);
};

exports.read = (req, res) => {
    res.send(cats);
};

exports.readOne = (req, res) => {
    const name = (req.params.name);
    const cat = cats.find(i => i.name === name)
    if (!cat) return res.status(404).json({ error: 'cat not found' })
    console.log(cat)
    res.sendStatus(200);
}

exports.update = (req, res) => { };

exports.delete = (req, res) => { };