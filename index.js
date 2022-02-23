const express= require('express');
 
const app = express();

app.use(express.json());

app.get("/test",async(request,response)=>{
    response.json('hello world');
})

app.listen(3000,() => {
    console.log('serveur successfully lanched')
});