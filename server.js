require('dotenv').config({ path: './.env' }); 

console.log("🔍 Loaded MONGO_URI:", process.env.MONGO_URI ? "✅ Yes" : "❌ No");
console.log("🔍 Loaded NEWS_API_KEY:", process.env.NEWS_API_KEY ? "✅ Yes" : "❌ No");
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
// Middleware
app.use(express.json());
app.use(cors());
const newsRoutes = require('./routes/newsRoutes'); 
const reviewRoutes = require('./routes/reviewRoutes');
const commentRoutes = require('./routes/commentRoutes');
const userRoutes = require('./routes/userRoutes');
const messageRoutes = require('./routes/messageRoutes');

app.use('/api/news', newsRoutes);  
app.use('/api/users', userRoutes);            
app.use('/api', messageRoutes);               
app.use('/api/reviews', reviewRoutes);        
app.use('/api', commentRoutes);               

const PORT = process.env.PORT || 5000;
const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
  console.error("❌ MONGO_URI is missing in .env file");
  process.exit(1);
}
mongoose.connect(mongoURI)
  .then(() => {
    console.log("✅ MongoDB connected!");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch(err => console.error("❌ MongoDB connection error:", err));
