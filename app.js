const express = require('express')
const app = express()
const port = 3001
//const  art = require("./database.js");
var tasks=[]
var users=[
  {
    id: 1,
    name: "Петров"
  },
  {
    id: 2,
    name: "Сидоров"
  },
  {
    id: 3,
    name: "Иванов"
  }
]

app.get('/users/', (req, res) => 
res.send(users))

app.get('/tasks/', (req, res) =>
res.send(tasks))

app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))

app.post('/deletetask/', (req, res) =>{
   tasks=tasks.filter((task,index)=>index!=req.body.index);
   res.send("good");
})
app.post('/changecount/', (req, res) =>{
  tasks.map((task,index)=>{
    if(index==req.body.index){
        task.pri=req.body.pri;
        return task;
    }
        return task;
  });
  tasks.sort((a, b) => +a.pri > +b.pri ? -1 : 1);
  res.send("good");
})

app.post('/addtask/',(req, res)=>
  {
    tasks.push(req.body);
    tasks.sort((a, b) => +a.pri > +b.pri ? -1 : 1);
    res.send("good");
    
  }
)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))