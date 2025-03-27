const { Sequelize,Model, DataTypes, BOOLEAN } = require("sequelize")
const { defaultValueSchemable } = require("sequelize/lib/utils")

const sequelize = new Sequelize("test", "root", "", {
    host : "localhost",
    dialect  : "mysql" ,
    port : 3306
})

class Ingredient extends Model{}

Ingredient.init({
    ingredient_id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    ingredient_name:{
        type: DataTypes.STRING,
        allowNull:false
    },
    ingredient_type:{
        type: DataTypes.STRING,
        allowNull:false
    },
    ingredient_cant:{ 
        type: DataTypes.FLOAT(10,2),
        allowNull:false
    }
}, {
 sequelize,
 modelName: "ingredient",
})

module.exports = Ingredient
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