
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('FLASH-MD V2.5  is running!'));
app.listen(PORT, () => console.log(`FLASH-MD Server running on port ${PORT}`));

require('./db-init')();
require('./king');
