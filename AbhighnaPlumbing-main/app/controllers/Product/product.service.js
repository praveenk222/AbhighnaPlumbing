const config=require('../../config/db.config');
const sql = require('mssql');






async function getAllProducts(req, res) {
    try {
        let pool=await sql.connect();
        const result = await pool.request().execute('[dbo].[GetAllProducts]');

        if (result.recordset && result.recordset.length > 0) {
            // return res.status(200).json(result.recordset);
            return res.status(200).json(result.recordset);
            //result will give all  about table with data
            // res.send(result.rows);  // Send the fetched products
        } else {
            return res.status(500).json({ message: 'Error fetching products' });   // Handle no data found
        }
    } catch (error) {
        console.error('Error fetching products:', error.message);
        return res.status(500).json({ message: 'Error fetching products' }); // Improved error handling
    }
}
async function getProductByID(req, res) {
    try {
        let pool=await sql.connect();
        const { ID } = req.params;
        console.log(ID)
        const result = await pool.request()  
            .input('ID', sql.Int, ID)
             .execute('[dbo].[GetProductsByID]');

        if (result.recordset && result.recordset.length > 0) {
            // return res.status(200).json(result.recordset);
            return res.status(200).json(result.recordset);
            //result will give all  about table with data
            // res.send(result.rows);  // Send the fetched products
        } else {
            return res.status(500).json({isSuccess:false, message: 'Error no products' });   // Handle no data found
        }
    } catch (error) {
        console.error('Error fetching products:', error.message);
        return res.status(500).json({isSuccess:false, message: 'Error fetching products' }); // Improved error handling
    }
}

    const createProduct = async (req, res) => {
        
    
        try {
            // Validate input
            // if (!name || !supplierID || !categoryID || !unitPrice || !unitInStock) {
            //     return res.status(400).send('Missing required fields');
            // }
            const {
                ProductID,
                name,
                supplierID,
                categoryID,
                subCategoryID,
                unitPrice,
                oldPrice,
                discount,
                unitInStock,
                productAvailable,
                shortDescription,
                picturePath,
                note,
                createdBy,
                modifiedBy,
                TypeID,
                MeasurementValue,
                MesurmentID,
                IsActive
            } = req.body;
            // Connect to the database
            const pool = await sql.connect();
    console.log(req)
            // Call the stored procedure to insert the product
            const result = await pool.request()
            .input('ProductID', sql.Int, ProductID)
            .input('Name', sql.NVarChar(255), name)
            .input('SupplierID', sql.Int, supplierID)
            .input('CategoryID', sql.Int, categoryID)
            .input('SubCategoryID', sql.Int, subCategoryID)
            .input('UnitPrice', sql.Decimal(18, 2), unitPrice)
            .input('OldPrice', sql.Decimal(18, 2), oldPrice)
            .input('Discount', sql.Decimal(18, 2), discount)
            .input('UnitInStock', sql.Int, unitInStock)
            .input('ProductAvailable', sql.Bit, productAvailable)
            .input('ShortDescription', sql.NVarChar(sql.MAX), shortDescription)
            .input('PicturePath', sql.NVarChar(sql.MAX), picturePath)
            .input('Note', sql.NVarChar(sql.MAX), note)
            .input('CreatedBy', sql.NVarChar(255), createdBy)
            .input('ModifiedBy', sql.NVarChar(255), modifiedBy)
            .input('TypeID', sql.Int, TypeID)
            .input('MeasurementValue', sql.Decimal(18, 2), MeasurementValue)
            .input('MesurmentID', sql.Int, MesurmentID)
            .input('IsActive', sql.Bit, IsActive)
            .execute('[dbo].[InsertOrUpdateProductAndMeasurements]');
            // Return success response
           return res.status(201).json({
            isSuccess:true,
                message: 'Product created successfully',
                data: result.recordset || null
            });
        } catch (error) {
            console.error('Error creating product:', error);
             return res.status(500).json({  isSuccess:false, message:'Error creating product'});
        }
    };
//this is the sample ex of sp calling using select statment (imp)
module.exports = {
    getAllUser: getAllProducts,
     getById:getProductByID,
    createProduct:createProduct
 
}