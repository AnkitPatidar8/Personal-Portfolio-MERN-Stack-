const express = require('express')
const app =  express()
const mongoose = require('mongoose')
const cors = require('cors')
require("dotenv").config()

// middleware
const corsOptions = {
  origin: "https://ankit-patidar-portfolio.netlify.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes 
const contactRoute = require("./routes/contactRoute")
app.use("/api/contacts", contactRoute )
// routs adminrouts.js
const adminRoute = require("./routes/adminRoute");
app.use("/api/admin", adminRoute);


// ➤ NEW: Skills CRUD route
const skillRoute = require('./routes/skillRoute');
app.use('/api/skills', skillRoute); // ⬅️ yeh line add karein
  
// about expreance eductionn 
const aboutRoutes = require("./routes/aboutRoutes");
app.use("/api/about", aboutRoutes);


// mongodb connection 
mongoose.connect(process.env.MONGO_URI,{
 useNewUrlParser:true,
  useUnifiedTopology: true,
})
.then(()=>console.log("mongodb connected"))
.catch((err)=> console.log(`something wrong ${err}`))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  });


