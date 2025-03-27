const { Sequelize,Model, DataTypes} = require("sequelize")
const { defaultValueSchemable } = require("sequelize/lib/utils")

const sequelize = new Sequelize("test", "root", "", {
    host : "localhost",
    dialect  : "mysql" ,
    port : 3306
})

class Table extends Model{}

Table.init({
    table_id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    table_size:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    table_disp:{
        type: DataTypes.BOOLEAN,
        allowNull:false
    }

}, {
 sequelize,
 modelName: "Table",
})  

module.exports = Table
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