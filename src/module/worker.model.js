const { Sequelize,Model, DataTypes, BOOLEAN } = require("sequelize")
const { defaultValueSchemable } = require("sequelize/lib/utils")

const sequelize = new Sequelize("test", "root", "", {
    host : "localhost",
    dialect  : "mysql" ,
    port : 3306
})

class Worker extends Model{}

Worker.init({
    worker_id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    worker_name:{
        type: DataTypes.STRING,
        allowNull:false
    },
    worker_rol:{
        type: DataTypes.STRING,
        allowNull:false
    },
    salary:{ 
        type: DataTypes.FLOAT(10,2),
        allowNull:false
    }
}, {
 sequelize,
 modelName: "worker",
})

module.exports = Worker
//async function testConnection(params) {
//    try{
//        await sequelize.authenticate()
//        console.log("all good")
//    }catch(error){
//       console.error("All Bad",err)
//    }
//}
//
//testConnection()