

const config=require('../../config/db.config');
const sql = require('mssql');



async function getUsers(req,res){debugger
    try {
        let pool=await poolc.connect();
        const result = await pool.query('SELECT * FROM operation.member')
        //result will give all  about table with data
        res.send(result.rows);

    } catch (err) {
        res.status(500).send('Internal Server Error')
    }
}

async function login(req,res){debugger
    try {
        const pool = await sql.connect();

        console.log(req.body);
        const result = await pool.request()
        .input('Username', sql.NVarChar, req.body.UserName)
        .input('Password', sql.NVarChar, req.body.Password)
            .execute('UserLogin')
        //result will give all  about table with data
        let permissions;
        if(result.recordset[0].UserID){
            const userID = result.recordset[0].UserID;

            // Call getUserPermissions function with UserID
             permissions = await getUserPermissionsByUserID(userID); // Helper function without res

          
        }
        res.status(200).send({
            IsSuccess: true,
            Message: 'Login successful',
            user: result.recordset[0],
            Permissions: permissions
        });

    } catch (err) {
        res.status(500).send('Internal Server Error')
    }
}
//this is the sample ex of sp calling using select statment (imp)
// Function to get user permissions based on their ID
async function getUserPermissions(req, res) {
    try {
        // Get UserID from request parameters
        const { UserID } = req.params;

        // Validate if UserID is provided
        if (!UserID) {
            return res.status(400).json({ message: 'UserID is required' });
        }

        // Connect to the database
        const pool = await sql.connect();

        // Execute the stored procedure to get user permissions
        const result = await pool.request()
            .input('UserID', sql.Int, UserID)
            .execute('[dbo].[GetUserPermissions]');

        // Return the permissions result
        return res.status(201).json({
            isSuccess:true,
            message: 'success',
            user: result.recordset[0] || null
        });
    } catch (error) {
        console.error('Error creating member:', error);
         return res.status(500).json({isSuccess:false, message:'Error getting member',data:error.message});
    }
};
async function getUserPermissionsByUserID(UserID) {
    try {
        const pool = await sql.connect();

        // Execute the stored procedure to get user permissions
        const result = await pool.request()
            .input('UserID', sql.Int, UserID)
            .execute('[dbo].[GetUserPermissions]');

        return result.recordset || null; // Return the result of permissions
    } catch (error) {
        console.error('Error fetching permissions:', error);
        throw error; // Re-throw the error to handle it in the calling method
    }
}

async function getUsersSP(req,res){debugger
    let procedureName = 'my_procedure';
    pool.query(`CALL ${procedureName}($1, $2, $3)`, ['param1', 'param2', 'param3'], (error, results) => {
      if (error) {
        throw error;
      }
      console.log(results.rows);
      pool.end();
    });
}

         

module.exports = {
    getAllUser: getUsers,
    getUserPermissions:getUserPermissions,
    Login:login
 
}
