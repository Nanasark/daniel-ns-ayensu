import express from 'express';
import "reflect-metadata";
import { AppDataSource } from './data-source';
// import userRoutes from '../src/routes/user.routes'
// import testRoutes from '../src/routes/test.routes'
import userRoutes from '../src/User/user.route'

const app = express()

app.use(express.json())

app.use('/api/users',userRoutes)

// app.use("/api/test", testRoutes);

app.listen(3000, () => {
  console.log("Server running");
});


AppDataSource.initialize().then(()=>{
    console.log("App initiallized and running")

}).catch((err)=>
    console.error("Initialization ERROR:", err)
)
