const express = require('express');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const blogRoutes = require('./routes/blogRoutes');

const app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.use('/api', blogRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(3000, () => {
  console.log('App is running on port 3000');
});