   // server.js
   const express = require('express');
   const app = express();
   const port = 3000;

   // Serve static files dari folder public
   app.use(express.static('public'));

   // API endpoint untuk mengirim data
   app.get('/api/data', (req, res) => {
       res.json({ message: 'Halo dari server!' });
   });

   app.listen(port, () => {
       console.log(`Server berjalan di http://localhost:${port}`);
   });