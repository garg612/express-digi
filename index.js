//we make it using express it is mux=ch more easy to use than http module
import express from "express";//we use this command in module system to import express
//if we use require then we have to use common js module system
//if we use import then we have to use module system

const app=express();

const port =9000;

// app.get('/',(req,res)=>{
//     res.send("hello, its kushagra this side")
// })
// app.get('/about',(req,res)=>{
//     res.send("this is about page")
// })
// app.get('/contactus',(req,res)=>{
//     res.send("contact us page")
// })

app.use(express.json())

let data=[]
let id=1

//add a new tea
app.post('/teas',(req,res)=>{
    
    const{name,price}=req.body
    const newitem={id:id++,name,price}
    data.push(newitem)
    res.status(201).send(newitem)
})

//get all teas
app.get('/add',(req,res)=>{
    res.status(200).send(data)
})

//get a tea by id
app.get('/add/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    
    const tea = data.find(t => t && typeof t.id !== 'undefined' && t.id === id);
    if(!tea){
        return res.status(404).send("item not found");
    }
    res.status(200).send(tea);
});

//update tea
app.put('/add/:id',(req,res)=>{
    const teaid = parseInt(req.params.id);
    
    const tea = data.find(t => t && typeof t.id !== 'undefined' && t.id === teaid);
    if(!tea){
        return res.status(404).send("item not found");
    }
    const {name, price} = req.body;
    tea.name = name;
    tea.price = price;
    res.status(200).send(tea);
});

//delete
app.delete("/add/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    
    const index = data.findIndex(t => t && typeof t.id !== 'undefined' && t.id === id);
    if(index === -1){
        return res.status(404).send("item not found");
    }
    data.splice(index,1);
    return res.status(204).send("deleted successfull");
});

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})