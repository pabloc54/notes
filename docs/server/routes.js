const appRouter = (app) => {
    let notes = [];
    app.get('/api/notes', (req, res) => res.json(notes));
    app.get('/api/notes/:id', (req, res) => {
        const id = Number(req.params.id);
        const note = notes.find((note) => note.id === id);
        if (note)
            return res.json(note);
        return res.status(404).end();
    });
    app.post('/api/notes', (req, res) => {
        const note = req.body;
        const id = notes.reduce((acc, note) => (acc === note.id ? acc + 1 : acc), 1);
        const newNote = { ...note, id, date: new Date() };
        notes = [...notes, newNote];
        return res.status(204).end();
    });
    app.delete('/api/notes/:id', (req, res) => {
        const id = Number(req.params.id);
        notes = notes.filter((note) => note.id !== id);
        return res.status(204).end();
    });
    app.put('/notes/:id', (req, res) => {
        const id = Number(req.params.id);
        const note = req.body;
        let index = notes.findIndex((note) => note.id === id);
        const newNote = { ...note, id, date: new Date() };
        notes[index] = newNote;
        return res.status(204).end();
    });
};
export default appRouter;