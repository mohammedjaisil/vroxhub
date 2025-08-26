require('dotenv').config();
console.log('Mongo URI:', process.env.MONGO_URI);

const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const app = express();
const port = 1000;

app.use(express.json());
app.use(cors());

// Connect to MongoDB using environment variable
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Serve static images folder
app.use('/images', express.static('upload/images'));

// Multer storage engine for images
const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  }
});
const upload = multer({ storage: storage });

// Routes

// Root endpoint
app.get('/', (req, res) => {
  res.send('Express app is running');
});

// Upload image endpoint
app.post('/upload', upload.single('product'), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`
  });
});

// Product Schema & Model
const Product = mongoose.model('Product', {
  id: { type: Number, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  new_price: { type: Number, required: true },
  old_price: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  available: { type: Boolean, default: true }
});

// Add product
app.post('/addproduct', async (req, res) => {
  try {
    const products = await Product.find({});
    let id = 1;
    if (products.length > 0) {
      id = products[products.length - 1].id + 1;
    }
    const product = new Product({
      id,
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
    });
    await product.save();
    res.json({ success: true, name: req.body.name });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Remove product
app.post('/removeproduct', async (req, res) => {
  try {
    await Product.findOneAndDelete({ id: req.body.id });
    res.json({ success: true, name: req.body.name });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get all products
app.get('/allproducts', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// User Schema & Model
const Users = mongoose.model('Users', {
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  cartData: { type: Object },
  date: { type: Date, default: Date.now }
});

// Signup
app.post('/signup', async (req, res) => {
  try {
    console.log("🟢 Signup attempt with:", req.body);  // Log incoming data

    let userExists = await Users.findOne({ email: req.body.email });
    if (userExists) {
      console.log("🔴 User already exists");
      return res.status(400).json({ success: false, errors: "User already exists with this email" });
    }

    const cart = {};
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
    console.log("✅ User saved:", user.email);

    const data = { user: { id: user.id } };
    const token = jwt.sign(data, 'secret_ecom', { expiresIn: '1h' });

    res.json({ success: true, token });
  } catch (error) {
    console.error("❌ Signup error:", error);  // Log error
    res.status(500).json({ success: false, error: error.message });
  }
});

// Login
app.post('/login', async (req, res) => {
  try {
    const user = await Users.findOne({ email: req.body.email });
    if (!user) {
      return res.json({ success: false, errors: "Email not found" });
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.json({ success: false, error: "Invalid password" });
    }

    const data = { user: { id: user.id } };
    const token = jwt.sign(data, 'secret_ecom', { expiresIn: '1h' });

    res.json({ success: true, token });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
