let express = require('express');
let app = express();

// app.get('/rohit:saini',(request,response)=>{
// //app.get('/rohit:saini',function(request,response){
//     response.send("hello world");
//     response.status(400).write('334').end();
// })


// app.use(express.static(__dirname+'\components')); // Adding middleware
// app.get('/', function (request, response) { // A simple request handler 
//  response.send('Simple web server of files from ' + __dirname);
// });








app.listen(3031,()=>{
    console.log(`App listening at http://localhost:3031`)
})