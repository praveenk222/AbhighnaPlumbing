const config=require('../../config/db.config');
const sql = require('mssql');

async function getAllorders(req, res) {
    try {
        let pool=await sql.connect();
        const result = await pool.request().execute('[dbo].[GetAllOrders]');
        console.log(result)

        if (result.recordset && result.recordset.length > 0) {
            // return res.status(200).json(result.recordset);
            return res.status(200).json(result.recordset);
            //result will give all  about table with data
            // res.send(result.rows);  // Send the fetched orders
        } else {
            return res.status(500).json({ message: 'Error fetching orders' });   // Handle no data found
        }
    } catch (error) {
        console.error('Error fetching orders:', error.message);
        return res.status(500).json({ message: 'Error fetching orders' }); // Improved error handling
    }
}
async function getAllorderDetails(req, res) {
    try {
        let pool=await sql.connect();
        const { ID } = req.params;
        console.log(ID)
        const result = await pool.request()  
            .input('OrderID', sql.Int, ID)
            .execute('[dbo].[GetOrderWithDetails]');
        console.log(result)

        if (result.recordset && result.recordset.length > 0) {
            // return res.status(200).json(result.recordset);
            return res.status(200).json(result.recordset);
            //result will give all  about table with data
            // res.send(result.rows);  // Send the fetched orders
        } else {
            return res.status(500).json({ message: 'Error fetching orders' });   // Handle no data found
        }
    } catch (error) {
        console.error('Error fetching orders:', error.message);
        return res.status(500).json({ message: 'Error fetching orders' }); // Improved error handling
    }
}

    const createorder = async (req, res) => {
        
    
        try {
            const {
                OrderID,
                CustomerID,
                PaymentID,
                ShippingID,
                Discount,
                Taxes,
                TotalAmount,
                isCompleted,
                OrderDate,
                Dispatched,
                DispatchedDate,
                Shipped,
                ShippingDate,
                Deliver,
                DeliveryDate,
                Notes,
                CancelOrder,
                CreatedBy,
                ModifiedBy
            } = req.body;
            const pool = await sql.connect();
    console.log(req)
            // Call the stored procedure to insert the order
            const result = await pool.request()
        .input('CustomerID', sql.Int, CustomerID)
        .input('OrderID', sql.Int, OrderID || null)  // Can be NULL for insert
        .input('PaymentID', sql.Int, PaymentID || null)
        .input('ShippingID', sql.Int, ShippingID || null)
        .input('Discount', sql.Decimal(18, 2), Discount || 0)
        .input('Taxes', sql.Decimal(18, 2), Taxes || 0)
        .input('TotalAmount', sql.Decimal(18, 2), TotalAmount)
        .input('isCompleted', sql.Bit, isCompleted || 0)
        .input('OrderDate', sql.DateTime, OrderDate || null)
        .input('Dispatched', sql.Bit, Dispatched || 0)
        .input('DispatchedDate', sql.DateTime, DispatchedDate || null)
        .input('Shipped', sql.Bit, Shipped || 0)
        .input('ShippingDate', sql.DateTime, ShippingDate || null)
        .input('Deliver', sql.Bit, Deliver || 0)
        .input('DeliveryDate', sql.DateTime, DeliveryDate || null)
        .input('Notes', sql.NVarChar(sql.MAX), Notes || null)
        .input('CancelOrder', sql.Bit, CancelOrder || 0)
        .input('CreatedBy', sql.NVarChar(255), CreatedBy)
        .input('ModifiedBy', sql.NVarChar(255), ModifiedBy || null)        // Execute the stored procedure
            .execute('InsertOrUpdateOrder');
            // Return success response
            console.log(res)
           return res.status(201).json({
            isSuccess:true,
                message: 'order order created successfully',
                data: result.recordset || null
            });
        } catch (error) {
            console.error('Error creating order:', error);
             return res.status(500).json({  isSuccess:false, message:'Error creating order'});
        }
    };
//this is the sample ex of sp calling using select statment (imp)
module.exports = {
    getAllUser: getAllorders,
    getById:getAllorderDetails,
    createorder:createorder
 
}