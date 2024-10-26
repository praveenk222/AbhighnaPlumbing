const config=require('../../config/db.config');
const sql = require('mssql');






async function getAllInvenory(req, res) {
    try {
        let pool=await sql.connect();
        const result = await pool.request().execute('[dbo].[USP_GetProductCount]');

        if (result.recordset && result.recordset.length > 0) {
            // return res.status(200).json(result.recordset);
            return res.status(200).json(result.recordset);
            //result will give all  about table with data
            // res.send(result.rows);  // Send the fetched Invenory
        } else {
            return res.status(500).json({ message: 'Error fetching lookup' });   // Handle no data found
        }
    } catch (error) {
        console.error('Error fetching Invenory:', error.message);
        return res.status(500).json({ message: 'Error fetching Invenory' }); // Improved error handling
    }
}




//this is the sample ex of sp calling using select statment (imp)
module.exports = {
    getAllItems: getAllInvenory,
   
 
}