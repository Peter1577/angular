const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname , 'dist/blog')));

app.get('*' , function(req,res){
    res.sendFile(path.join(__dirname , 'dist/blog/index.html'));
});


app.listen(3030,function(){
    console.log("open localhost:3030");
});