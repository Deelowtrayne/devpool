const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');

const authService = require('./services/authService');
const routes = require('./routes/routes')(authService);

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use('/api/user/register', routes.registerUser);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`App running on port ${PORT}...`));