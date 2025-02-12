const express = require("express");
const app = express();
const userModel = require("./models/user");
const path = require("path");
app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
app.get("/",(req,res)=>
{
 res.render("index")
})
app.post("/create",async(req,res)=>
{
    let {name,email,image,contact,gender,age} = req.body;
        let createdUser =await userModel.create(
        {
            name,
            email,
            image,
            contact,
            gender,
            age
        }
    )
    res.redirect("/show");
})
app.get("/show",async(req,res)=>
{
   let users =await userModel.find();
res.render("show",{users});
})
app.get("/delete/:id",async(req,res)=>
{
 let deleteuser = await userModel.findOneAndDelete({_id:req.params.id});
res.redirect("/show");
})

app.get("/edit/:userid",async(req,res)=>
{
let editUser = await userModel.findOne({_id:req.params.userid})
res.render("edit",{editUser})
})
app.post("/update/:userid",async(req,res)=>
{
    let {name,email,image,contact,gender,age} = req.body;
    let user = await userModel.findOneAndUpdate({_id:req.params.userid},{name,email,image,contact,gender,age},{new:true});
    res.redirect("/show");
    
})
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});