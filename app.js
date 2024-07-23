const port = process.env.PORT || 8080;

app.use(express.json());

let data = [];

app.get('/', (req, res) => {
    res.send('Welcome to the Node.js API');
});

app.get('/data', (req, res) => {
    res.json(data);
});

app.post('/data', (req, res) => {
    const newData = req.body;
    data.push(newData);
    res.status(201).json(newData);
});

app.put('/data/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const newData = req.body;
    data = data.map((item, index) => index === id ? newData : item);
    res.json(newData);
});

app.delete('/data/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    data = data.filter((_, index) => index !== id);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});