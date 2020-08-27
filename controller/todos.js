const express= require ('express');
const router = express.Router()
const ToDo = require('../model/todo.js')

router.get('/', (req, res)=>{
    ToDo.find({}, (error, allToDos) =>{
        res.render('toDo/Index', {
            toDo: allToDos
        })
    })
});

router.get('/new', (req, res)=>{
    res.render('toDo/New');
})

module.exports = router