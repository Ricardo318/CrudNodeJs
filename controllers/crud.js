
const { query } = require('express');
const conexion = require('../model/database');

exports.save = (req, res)=>{
  const user = req.body.user;
  const pass = req.body.pass;
  const email = req.body.email;
  conexion.query('INSERT INTO users SET ?', {user:user,pass:pass,email:email}, (error, results)=>{
    if(error){
      console.log(error);
    }else{
      res.redirect('/listado');
    }
  })
};
exports.update = (req, res)=>{
  const id = req.body.id;
  const user = req.body.user;
  const pass = req.body.pass;
  const email = req.body.email;
  conexion.query('UPDATE users SET ? WHERE id = ?', [{user:user,pass:pass,email:email},id],(error, result)=>{
    if(error){
      console.log(error);
  }else{
      res.redirect('/listado');
  }

  })
}

exports.listado = (req, res)=>{
  const user = req.body.user;
  const pass = req.body.pass;
  const email = req.body.email;
  conexion.query('SELECT * FROM users ', {user:user,pass:pass,email:email },(error, result)=>{
    if(error){
      console.log(error);
    }else{
      res.redirect('/');
    }
  })
};

exports.pedido = (req, res)=>{
  const producto = req.body.producto;
  const cantidad = req.body.cantidad;
  const precio = req.body.precio;
  const fecha = req.body.fecha;
  const telefono = req.body.telefono;
  conexion.query('SELECT * FROM pedido ', {producto:producto,cantidad:cantidad,precio:precio,fecha:fecha,telefono:telefono },(error, result)=>{
    if(error){
      console.log(error);
    }else{
      res.redirect('/');
    }
  })
};

exports.guardar = (req, res)=>{
  const producto = req.body.producto;
  const cantidad = req.body.cantidad;
  const precio = req.body.precio;
  const fecha_pedido = req.body.fecha_pedido;
  const telefono = req.body.telefono;
  conexion.query('INSERT INTO pedido SET ?',{producto:producto, cantidad:cantidad,precio:precio,fecha_pedido:fecha_pedido,telefono:telefono }, (error, results)=>{
    if(error){
      console.log(error);
    }else{
      res.redirect('/pedido');
    }
  })
};

exports.modificar = (req, res)=>{
  const id = req.body.id;
  const producto = req.body.producto;
  const cantidad = req.body.cantidad;
  const precio = req.body.precio;
  const fecha_pedido = req.body.fecha_pedido;
  const telefono = req.body.telefono;
  conexion.query('UPDATE pedido SET ? WHERE id = ?', [{producto:producto,cantidad:cantidad,precio:precio,fecha_pedido:fecha_pedido,telefono:telefono },id],(error, result)=>{
    if(error){
      console.log(error);
  }else{
      res.redirect('/pedido');
  }

  })
}

