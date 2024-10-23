const config=require('../../config/db.config');
const sql = require('mssql');






async function getAllMesuremtnLookups(req, res) {
    try {
        let pool=await sql.connect();
        const result = await pool.request().execute('[dbo].[GetALLMesuerMentsLookup]');
        if (result.recordset && result.recordset.length > 0) {
            // return res.status(200).json(result.recordset);
            return res.status(200).json(result.recordset);
            //result will give all  about table with data
            // res.send(result.rows);  // Send the fetched lookups
        } else {
            return res.status(500).json({ message: 'Error fetching lookup' });   // Handle no data found
        }
    } catch (error) {
        console.error('Error fetching lookups:', error.message);
        return res.status(500).json({ message: 'Error fetching lookups' }); // Improved error handling
    }
}
async function getAllLookupByID(req, res) {
    try {
        // Validate if LookupID is provided
        const { LookupID } = req.params;
        // Validate if LookupID is provided
        if (!LookupID) {
            return res.status(400).json({
                message: 'LookupID is required'
            });
        }
        let pool=await sql.connect();
        const result = await pool.request()
            .input('LookupID', sql.Int, LookupID)  // Provide the LookupID parameter
            .execute('[dbo].[GetALLLookupByID]');

        if (result.recordset && result.recordset.length > 0) {
            // return res.status(200).json(result.recordset);
            return res.status(200).json(result.recordset);
            //result will give all  about table with data
            // res.send(result.rows);  // Send the fetched lookups
        } else {
            return res.status(500).json({ message: 'Error fetching lookup' });   // Handle no data found
        }
    } catch (error) {
        console.error('Error fetching lookups:', error.message);
        return res.status(500).json({ message: 'Error fetching lookup' }); // Improved error handling
    }
}

async function savemesurmentLookup(req, res) {
    try {
        // Get the input parameters from the request body
        const { LookupID, LookupCode, LookupDescription, LookupCategory, Status, CreatedBy } = req.body;
        let pool=await sql.connect();
        // Connect to SQL Server

        // Execute the stored procedure
        const result = await pool.request()
            .input('LookupID', sql.Int, LookupID || null)  // Pass null if LookupID is not provided (for insert)
            .input('LookupCode', sql.NVarChar(50), LookupCode)
            .input('LookupDescription', sql.NVarChar(255), LookupDescription)
            .input('LookupCategory', sql.NVarChar(100), LookupCategory)
            .input('Status', sql.Bit, Status)
            .input('CreatedBy', sql.NVarChar(100), CreatedBy)
            .input('IsActive', sql.Bit, IsActive)

            .execute('[dbo].[InsertOrUpdateMesuerMentsLookup]');  // Replace with the actual stored procedure name

        // Return success response
        return res.status(201).json({
            message: 'lookupMesurment created successfully',
            data: result.recordset || null,
            isSuccess:true
        });
    } catch (error) {
        console.error('Error creating lookupMesurment:', error);
         return res.status(500).json({ isSuccess:false, message:'Error creating lookup'});
    }
};

//this is the sample ex of sp calling using select statment (imp)
module.exports = {
    getAllItems: getAllMesuremtnLookups,
    getById:getAllLookupByID,
    createItem:savemesurmentLookup
 
}