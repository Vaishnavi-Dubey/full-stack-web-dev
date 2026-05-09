/**
 * Professional Express.js REST API Server.
 * Covers: Express setup, REST endpoints (GET, POST, PUT, DELETE), 
 * JSON parsing, and basic error handling.
 */

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample Data (In-memory "Database")
let items = [
    { id: 1, name: 'Learn HTML', completed: true },
    { id: 2, name: 'Master Express', completed: false }
];

// --- REST Endpoints ---

// GET: Retrieve all items
app.get('/api/items', (req, res) => {
    res.json(items);
});

// GET: Retrieve a single item by ID
app.get('/api/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item not found.');
    res.json(item);
});

// POST: Create a new item
app.post('/api/items', (req, res) => {
    const newItem = {
        id: items.length + 1,
        name: req.body.name,
        completed: req.body.completed || false
    };
    items.push(newItem);
    res.status(201).json(newItem);
});

// PUT: Update an existing item
app.put('/api/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item not found.');

    item.name = req.body.name || item.name;
    item.completed = req.body.completed !== undefined ? req.body.completed : item.completed;
    
    res.json(item);
});

// DELETE: Remove an item
app.delete('/api/items/:id', (req, res) => {
    const itemIndex = items.findIndex(i => i.id === parseInt(req.params.id));
    if (itemIndex === -1) return res.status(404).send('Item not found.');

    const deletedItem = items.splice(itemIndex, 1);
    res.json(deletedItem);
});

// Start Server
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
        console.log('Available endpoints:');
        console.log('  GET    /api/items');
        console.log('  POST   /api/items  { "name": "..." }');
    });
}

module.exports = app; // For testing
