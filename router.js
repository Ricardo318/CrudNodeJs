
const express = require('express');
const router = express.Router();

const conexion = require('./model/database');
router.get('/', (req, res)=>{
    
    conexion.query('SELECT * FROM users,pedido', (error, result)=>{
        if(error){
            throw error;
        }else{
            res.render('index', {result:result});
        }
    } )
}) 

router.get('/listado', (req, res)=>{
    const results = req.params.results;
    conexion.query('SELECT * FROM users', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('listado', {results:results});
        }
    } )
}) 

//Crear Registros
router.get('/create', (req, res)=>{
    res.render('create');
}) 

//Ruta para editar registros
router.get('/edit/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('SELECT * FROM users WHERE id=?', [id], (error, result)=>{
        if(error){
            throw error;
        }else{
            res.render('edit', {user:result[0]});
        }
    })
 })
 
//Ruta para eliminar registros
router.get('/delete/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('DELETE FROM users WHERE id = ?', [id], (error, result)=>{
    if(error){
        throw error;
    }else{
        res.redirect('/listado');
    }
})
})

router.get('/guardar', (req, res)=>{
    res.render('guardar');
}) 

router.get('/pedido', (req, res)=>{
    const results = req.params.results;
    conexion.query('SELECT * FROM pedido', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('pedido', {results:results});
        }
    } )
}) 

router.get('/modificar/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('SELECT * FROM pedido WHERE id=?', [id], (error, result)=>{
        if(error){
            throw error;
        }else{
            res.render('modificar', {producto:result[0]});
        }
    })
 })
 
//Ruta para eliminar registros
router.get('/eliminar/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('DELETE FROM pedido WHERE id = ?', [id], (error, result)=>{
    if(error){
        throw error;
    }else{
        res.redirect('/pedido');
    }
})
})

const crud = require('./controllers/crud');
router.post('/save', crud.save)
router.post('/update', crud.update);
router.post('/listado', crud.listado);
router.post('/pedido', crud.pedido);
router.post('/guardar', crud.guardar);
router.post('/modificar', crud.modificar);




module.exports = router;
