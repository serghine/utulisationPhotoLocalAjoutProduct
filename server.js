const express=require('express');
const mongoose=require('mongoose');
const hbs=require('hbs');
const bodyParser=require('body-parser');
const logger=require('morgan');
const routerProduct=require('./router/routerProduct');
const fileUpload=require("express-fileupload");
const path=require('path');



const app = express();
app.use(logger('dev'));
app.set("view engine","hbs");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(fileUpload())//apload fille telecharger du contenue
app.use(express.static(path.join(__dirname,"./public")));
app.use(routerProduct);







const port=1000;
mongoose.connect("mongodb://localhost:27017/productPhoto",{useCreateIndex:true,useUnifiedTopology:true,useNewUrlParser:true})
.then(function(result){
    app.listen(1000,function(){
        console.log(`le server est lancer a cette adress http://localhost:${port}`);
    })
})
.catch(function(err){
    console.log("erreur avec la connexion a la base de données",err)
})
