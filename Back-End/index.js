const express=require("express")
const app=express()
const {connection}=require("./db")
app.use(express.json())


app.get("/",(req,res)=>{
res.status(200).send("Home")
})

app.listen(4500,async ()=>{
    try{
await connection
console.log("connected to Db")
    }catch(er){
console.log(er)
    }
    console.log("server is running at 4500")
})