const { Sequelize,Model, DataTypes} = require("sequelize")
const { defaultValueSchemable } = require("sequelize/lib/utils")

const sequelize = new Sequelize("test", "root", "", {
    host : "localhost",
    dialect  : "mysql" ,
    port : 3306
})

class Plate extends Model{}

Plate.init({
    plate_id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    plate_name:{
        type: DataTypes.STRING,
        allowNull:false
    },
    plate_desc:{
        type: DataTypes.STRING,
        allowNull:false
    },
    price:{ 
        type: DataTypes.FLOAT(10,2),
        allowNull:false
    },
    plate_img:{
        type: DataTypes.STRING,
        allowNull:false
    },
    plate_cat:{ 
        type: DataTypes.STRING,
        allowNull:false
    },
    ingredients:{ 
        type: DataTypes.STRING,
        allowNull:false
    },
    is_stock : {
        type: DataTypes.BOOLEAN
    }
}, {
 sequelize,
 modelName: "Plate",
})

module.exports = Plate
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