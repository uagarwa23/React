var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require("mongoose")


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect("mongodb://localhost:27017/myshoppingdb") 
console.log("mongoose connection success");

let products = require("./models/productmodel")

app.get("/wsproducts",(req,res)=>{
  products.find(function(err,data){
    if(err){
      throw err;
    }else{
      res.json(data);
    }
  })
})

app.post("/wsproducts",(req,res)=>{
  let newProduct = req.body;
  products.create(newProduct, function(err, data){
    if(err){
      throw err;
    }else{
      res.json(data);
    }
  })
})

app.delete("/wsproducts/:id",(req,res)=>{
  let query = {"_id": req.params.id} 
  console.log(req.params.id)
  products.remove(query,function(err, data){
    if(err){
      throw err;
    }else{
      res.json(data);
    }
  })
})

app.put("/wsproducts/:id",(req,res)=>{
  let newProduct = req.body;
  let query = {"_id": req.params.id} 
  let upt = {'$set':{name:newProduct.name, price:newProduct.price}}
  let options = {new:true};
  products.findOneAndUpdate(query,upt,options,function(err, data){
    if(err){
      throw err;
    }else{
      res.json(data);
    }
  })
})

//app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.get("*",(req,res)=>{
  res.send("My shopping Products Web Service with MongoDB");
})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
