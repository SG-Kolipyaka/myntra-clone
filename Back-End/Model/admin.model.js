const mongoose=require("mongoose")

const AdminUserSchema=mongoose.Schema({
    name:{type:String,require:true},
    lastname:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true},
    companyuserId:{type:String,require:true},
},{
    versionKey:false
})

const AdminUserModel=mongoose.model("adminuser",AdminUserSchema)


module.exports={
    AdminUserModel
}