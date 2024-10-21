
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const expenseRoutes = require('./routes/expenseRoutes');


dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://15.206.185.251' 
})); 

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

  app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Expense Tracker API' });
  });



app.use('/api/auth', authRoutes);
app.use('/api/expenses', expenseRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const port = 5001;
app.listen(port, () => console.log(`Server running on port ${port}`));
