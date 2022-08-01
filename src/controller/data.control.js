const express = require("express");

const Grocery = require("../model/data.model");

const router = express.Router();

router.get("/",async(req,res)=>{   
    res.send("Hello From the Abhi")
})

router.post("/grocery", async(req, res)=>{

    const grocery = await Grocery.create(req.body);
    return res.status(201).send({grocery});
})

// router.post("/cart" , async(req,res)=>{
//     try{
//         const addingRecord =  new Grocery(req.body)
//         //console.log(req.body)
//        const insertMens = await addingRecord.save()
//             res.status(201).send(insertMens);
//     }
//     catch(e){
//        res.status(400).send(e.message)
//     }
//     // const addingRecord = await Grocery.create(req.body);
//     // return res.status(201).send({addingRecord});
// })

router.get("/grocery", async(req, res)=>{

    const grocery = await Grocery.find().lean().exec();
    return res.status(201).send({grocery});
})

// router.get("/cart" , async(req,res)=>{
//     try{
//         const getData =  await Grocery.find({});
//             res.send(getData);
//     }
//     catch(e){
//        res.status(400).send(e.message)
//     }
//     // const getData = await Grocery.find().lean().exec();
//     // return res.status(201).send({getData});
// })


// //get by id

// router.get("/cart/:id" , async(req,res)=>{
//     try{
//         const _id = req.params.id;
//       //  const getData =  await Grocery.findById({_id:_id}); // or
//         const getData =  await Grocery.findById(_id).sort({"ranking":1});
//             res.send(getData);
//     }
//     catch(e){
//        res.status(400).send(e.message)
//     }
// })

// //patch by id

// router.patch("/cart/:id" , async(req,res)=>{
//     try{
//         const _id = req.params.id;
//       //  const getData =  await Grocery.findById({_id:_id}); // or
//         const getData =  await Grocery.findByIdAndUpdate(_id,req.body,{
//             new:true
//         });
//             res.send(getData);
//     }
//     catch(e){
//        res.status(500).send(e.message)
//     }
// })

// //delete by id

// router.delete("/cart/:id" , async(req,res)=>{
//     try{
//         const _id = req.params.id;
//       //  const getData =  await Grocery.findById({_id:_id}); // or
//         const getData =  await Grocery.findByIdAndDelete(_id);
//             res.send(getData);
//     }
//     catch(e){
//        res.status(500).send(e.message)
//     }
// })



module.exports = router;