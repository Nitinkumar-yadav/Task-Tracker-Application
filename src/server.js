const express = require('express');
const app = express();
const moviesRouter = require('../routes/movies');

app.use(express.json());
app.use('/api/movies', moviesRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
