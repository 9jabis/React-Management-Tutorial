const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([{
        'id': 1,
        'image': 'https://picsum.photos/64/64/',
        'name': '구자빈',
        'birthday': '990401',
        'gender': '남자',
        'job': '대학생'
    },
    {
        'id': 2,
        'image': 'https://picsum.photos/64/64//',
        'name': '구자빈2',
        'birthday': '990402',
        'gender': '남자',
        'job': '대학생'
    },
    {
        'id': 3,
        'image': 'https://picsum.photos/64/64///',
        'name': '구자빈3',
        'birthday': '990403',
        'gender': '남자',
        'job': '대학생'
    }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));