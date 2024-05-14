const express = require('express');
const app = express();
const port = 3000;

let Register = {};

function updateRegister(name="Adam", age="∞", tag="newOne") {
    Register.Name = name;
    Register.Age = age;
    Register.Tag = tag;
}

app.use(express.json());

app.get('/', (req, res) => {
    res.send(Register);
});

app.post('/', (req, res) => {
    const { name, age, tag } = req.body;
    updateRegister(name, age, tag); // Call the function with values from req.body
    res.send('Updated successfully!');
});
app.post('/login',(req,res)=>{
    const userName=req.body.userName;
    const userTag=req.body.userTag;
    function Login(userName,userTag){
       
        if(Register.Name==userName && Register.Tag==userTag){
            res.send("Login Successfull");
        }
        else{
            res.send("Login Failed!!!!!! check userName or userTag")
        }

    }
    Login(userName,userTag);
})


app.delete('/delete',(req,res)=>{
    delete Register.Name;
    delete Register.Age;
    delete Register.Tag;

    res.send("User Data is deleted");

})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
