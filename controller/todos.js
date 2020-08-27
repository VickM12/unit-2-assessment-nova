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

router.delete('/:id', (req, res)=>{
    ToDo.findByIdAndRemove(req.params.id, (err, toDo)=>{
        res.redirect('/todo')
    });
});

router.put('/:id', (req, res)=>{
    if (req.body.isDone ==="on"){
        req.body.isDone= true;
    }else {req.body.isDone = false;
    }
})

router.post('/', (req, res)=>{
    if (req.body.isDone ==="on"){
        req.body.isDone= true;
    }else {req.body.isDone = false;
    }
    const task ={
        task: req.body.task,
        isDone:req.body.isDone
    }

    ToDo.create(task, (err, newTask)=>{
        console.log(err);
        console.log(newTask);
        res.redirect('/todo')
    })
})

router.get('/:id/edit', (req, res)=>{
   ToDo.findById(req.params.id, (err, foundToDo) =>{
       res.render('/toDo/Edit', {
           toDo: foundToDo
       });
    });
});

router.get('/:id', (req, res)=>{
   ToDo.findById(req.params.id, (err, foundToDo)=>{
    res.render('toDo/Show',{
        todo:foundToDo
        })
    })
})
module.exports = router