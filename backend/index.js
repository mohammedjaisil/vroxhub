const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { error } = require("console");
const { type } = require("os");
const bcrypt = require("bcryptjs");

app.use(express.json());
app.use(cors());


//database connection with mongodb

mongoose.connect("mongodb+srv://vroxhub:vroxhub@cluster0.teow9ey.mongodb.net/photography")

//Api creation 
app.get("/",(req,res)=>{
    res.send("express app is running")
})

//image storage engine 

const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})



const upload = multer({storage:storage})


//creating upload endpoint for image 

app.use('/images',express.static('upload/images'))
app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})


//schema for creating products
const Product = mongoose.model("Product",{
    id :{
        type:Number,
        required:true,
    },
    name :{
        type: String,
        required:true,

    },
    image:{
        type: String,
        required:true,
    },
    category:{
        type: String,
        required:true,
    },
    new_price:{
        type: Number,
        required:true,
    },
    old_price:{
        type: Number,
        required:true,
    },
    date:{
        type: Date,
        default:Date.now,
    },
    available:{
        type:Boolean,
        default:true,
    },


}) 

app.post('/addproduct',async (req,res)=>{
    let products = await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id+1;
    }else{
        id=1;
    }
    const product = new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    });
    console.log(product);   
    await product.save();
    console.log("saved");
    res.json({
        success:true,
        name:req.body.name, 
    })
})


//creating api for delete products

app.post('/removeproduct',async (req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name
    })

})


//creating api for getting all product

app.get('/allproducts',async(req,res)=>{
    let products = await Product.find({});
    console.log('all products fetched');
    res.send(products);
})


//schema creating for user model

const Users = mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now
    }
})



// signup endpoint
app.post('/signup', async (req, res) => {
    let check = await Users.findOne({ email: req.body.email });
    if (check) {
        return res.status(400).json({ success: false, errors: "User already exists with this email" });
    }

    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new Users({
        name: req.body.username,
        email: req.body.email,
        password: hashedPassword,
        cartData: cart,
    });

    await user.save();

    const data = { user: { id: user.id } };
    const token = jwt.sign(data, 'secret_ecom', { expiresIn: "1h" });

    res.json({ success: true, token });
});

// login endpoint
app.post('/login', async (req, res) => {
    let user = await Users.findOne({ email: req.body.email });
    if (!user) {
        return res.json({ success: false, errors: "Email not found" });
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
        return res.json({ success: false, error: "Invalid password" });
    }

    const data = { user: { id: user.id } };
    const token = jwt.sign(data, 'secret_ecom', { expiresIn: "1h" });

    res.json({ success: true, token });
});




app.listen(port,(error)=>{
    if (!error){
        console.log("server running on port" +port)
    }
    else{
        console.log("error" +error)
    }
})



mongoose.connect("mongodb+srv://vroxhub:vroxhub@cluster0.teow9ey.mongodb.net/photography", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 10000, // 10 seconds
})
.then(() => {
    console.log("✅ Connected to MongoDB");
})
.catch((err) => {
    console.error("❌ MongoDB connection error:", err);
});
