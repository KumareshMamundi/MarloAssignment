const express = require('express');
// const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
// app.use(cors({origin: '*'}));
app.use( express.json({limit: '100mb'}) );
// app.use( express.urlencoded({
//   limit: '100mb'
// }));

routes(app);

app.post('/post', (req, res) => {
    const fs = require('fs');
    let data = "This is a file containing a collection of books.";
  
    fs.writeFile("books.txt", data, (err) => {
    if (err)
        console.log(err);
    else {
        console.log("File written successfully\n");
        console.log("The written has the following contents:");
        console.log(fs.readFileSync("books.txt", "utf8"));
    }
    });
    res.send('post data');
});

// app.get('/', (req, res) => {
//     res.send('home');
// });

// models.User.findAll({raw: true}).then(data => {
//     console.log(data);
// })
app.listen(3000, () => {
    console.log('server running port on 3000');
});