const express = require('express');
const app = express();
const path = require('path');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));



app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.post('/create', (req, res) => {
    if(req.body.email === "deb@gmail.com" && req.body.password === "12345"){
        res.render('welcome.ejs',{title:req.body.email});
    }else{
        res.render('Error.ejs');
    }
});





app.listen(3000, () => {
    console.log(`Server started on 3000`);
});