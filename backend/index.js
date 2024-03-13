const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;


app.use(cors());
app.use(express.json());

//mpngodb connection
mongoose.connect('mongodb://localhost:27017/ecommerce')
.then(()=> console.log('MongoDB is running'))
.catch((e)=> console.log("Error connecting", e))

// Routes
app.use('/api/products', require('./routes/ProductRoutes'));
app.use('/api/users', require('./routes/UserRoutes'));
app.use('/api/orders', require('./routes/OrderRoutes'));
app.use('/api/cart', require('./routes/CartRoutes'))

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
