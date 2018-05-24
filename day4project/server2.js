let express = require("express")
let router = express.Router()
let productData = require("./data")
let middleWare = require("body-parser")

let app = express();

let contextPath="/express-app"

app.use(contextPath,router)

router.use(middleWare.json());
router.route("/api/wsproducts").get((request,resposne)=>{
    //resposne.send("My Products Data.")
    resposne.json(productData)
})
//send params with :
router.route("/api/wsproducts/:id").get((request,resposne)=>{
    //resposne.send("My Products Data.")
    let reqId = request.params.id;
    console.log("req id:",reqId)
    let product = productData.filter((e)=>e.id == reqId)
    if(product.length==0){
        resposne.json("No product found") 
    }else{
        resposne.json(product)
    }
})

router.route("/api/wsproducts/").post((req, res)=>{     
    let data1={"id":req.body.id,"name":req.body.name,"price":req.body.price,"description":req.body.description}
    console.log(data1)
    productData.push(data1);
    res.json(productData)
})

router.route("/api/wsproducts/:id").delete((request,resposne)=>{
    //resposne.send("My Products Data.")
    let reqId = request.params.id;
    let index = productData.findIndex((e)=>e.id==reqId)
    productData.splice(index,1);
    resposne.send("Product Deleted.")
})

router.route("/api/wsproducts/:id").put((req,resposne)=>{
    //resposne.send("My Products Data.")
    let reqId = req.params.id;
    let index = productData.findIndex((e)=>e.id==reqId)
    let dataToUpdate={"id":req.body.id,"name":req.body.name,"price":req.body.price,"description":req.body.description}
    productData[index]=dataToUpdate   
    resposne.json(productData)
})

//define route handlers
app.listen(5001, ()=>{
    console.log("server listening at port 5001")
})

