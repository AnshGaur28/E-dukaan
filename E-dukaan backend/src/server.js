const { connectDb } = require('./config/mongoconnect');
const app = require('./index') ;
const PORT = process.env.PORT ;
app.listen(PORT ,async ()=>{
    await connectDb();
    console.log("Connected to Database")
    console.log('Server live on port :',{PORT});
})