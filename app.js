const express = require('express');
const path = require('path');
const app = express();
// Import Router
const mainRouter = require('./routes/index')




































app.set('view engine', 'ejs')
// console.log(app.get('view engine'))
//you can change set ejs path
// app.set('views' , path.resolve(__dirname) + '/templates')
// Ejs Path View
// console.log(app.get('views'))
// Full Static Folder Upload
app.use(express.static('public'));
// Port Listener Notification Console
app.listen(3000, () => {
  console.log('Listening on port 3000 fucking .....');
})
// Use Mainrouer For Rou Files from router folder
app.use(mainRouter);



//manual routs
// app.get('/', (req, res) => {
//   res.render('index');
// })

// app.get('/about', (req, res) => {
//   res.render('about')
// })


// app.get('/bootstrap.min.css', (req, res) => {
//   res.sendFile(path.resolve( __dirname) + '/bootstrap.min.css')
// })

// routes moved in index.js



