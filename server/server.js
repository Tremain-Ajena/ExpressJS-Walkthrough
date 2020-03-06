const express = require('express');
const path = require('path');
// const fs = require('fs');
const bodyParser= require('body-parser');

let app = express();

// app.get('/', (request, response) => {
//     // the function is saying "I want to respond to the get http method at the root('/') of my server and I want to get the request and response into a callback for when the response is made"
//     // response.send('Hello World!')
//     response.sendFile(path.join(__dirname,'../public/index.html'));

// });
// app.get('/css/styles.css', (require,response) => {
//     response.sendFile(path.join(__dirname, '../public/css/styles.css'));
// });

app.use(bodyParser.urlencoded({extended: false}));

app.post('/contact-form', (request,response)=>{
    console.log(request.body.email);
    console.log(request.body.name);
    response.send('Thank you for submitting your contact form.')
})


// // Our own middleware logger that we created
// app.use((request,response,next) => {
//     // console.log(request.originalUrl);
//     // next(); 
//     fs.appendFileSync('log.txt', `${request.url}\n`);
//     next();
//     // the log.txt file is how the server tracks every request that has been made to it
// });


// app.get('/', (request,response)=> {
//     response.send('Hello People!');
// });

app.use(express.static(path.join(__dirname,'../public')));

// app.get('/order/:id', (request,response) =>{
//     let id = request.params.id;
//     let email = request.query.email;
//     response.send(`Your name is ${id} and email is ${email}`);

// })

app.listen(3000);
// this is asking for the app to listen on port 3000