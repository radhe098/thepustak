const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const port= 5000;
app.use(cors());
app.use(express.json());
 




app.get('/', (req, res) => {    
    res.send('Hello World!')  
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
}); 
