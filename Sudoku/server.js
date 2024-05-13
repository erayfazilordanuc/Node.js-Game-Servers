const express = require('express');
// const fs = require('fs');
const app = express();
// const path = require('path');

// app.use(express.static(path.join(__dirname, 'Sudoku')));
app.use(express.json());

// app.post('/write-to-file', (req, res) => {
//     const { text } = req.body;

//     fs.writeFile('bestScore.txt', text, (err) => {
//         if (err) {
//             console.error('Dosyaya yazılırken bir hata oluştu:', err);
//             res.status(500).send('Internal Server Error');
//             return;
//         }
//         console.log('Metin dosyasına yazı başarıyla eklendi.');
//         res.send('Metin dosyasına yazı başarıyla eklendi.');
//     });
// });

// app.post('/read-the-file', (req, res) => {

//     fs.readFile('bestScore.txt', 'utf8', (err, score) => {
//         if (err) {
//             console.error('Dosyaya yazılırken bir hata oluştu:', err);
//             res.status(500).send('Internal Server Error');
//             return;
//         }
//         console.log('Metin dosyasına yazı başarıyla eklendi.');
//         res.send(score);
//     });
// });


app.get('/', async (req, res) => {
    res.sendFile('index.html', { root: __dirname }); // path.join(__dirname, 'public', 'index.html')
});

app.get('/9x9sudoku.html', async (req, res) => {
    res.sendFile('9x9sudoku.html', { root: __dirname });
});

app.get('/3x3sudoku.html', async (req, res) => {
    res.sendFile('3x3sudoku.html', { root: __dirname });
});

app.listen(8080, () => {
    console.log("Server successfully running on port 8080");
});

