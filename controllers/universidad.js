const path = require("path");
const Universidad = require("../utils/database").models.Universidad;
const sequelize =require("../utils/database");
const Sequelize = require("sequelize");

// Proceso cuando se llame a la ruta
exports.getAltaUniversidad = (req,res)=>{
    //res.send('<h1>Formulario de consola</h1>')
    res.sendFile(path.join(__dirname,'..','views','formulario.html'));
}

exports.postAltaUniversidad = (req,res)=>{
    console.log(req.body)
    //INSERT INTO Consola VALUES ()
    Universidad.create(req.body)
        .then(resultado=>{
            console.log("Registro exitoso");//Servidor
            res.send("Registro exitoso") //Cliente
        })
        .catch(error=>{
            console.log(error); //Servidor
            res.send("Ocurrio un error")//Cliente
        })    
}

exports.getUniversidades = (req,res)=>{
    //SELECT * from Consola;
    Universidad.findAll()
        .then(universidades=>{
            console.log("Universidades",universidades);
            res.send(universidades);
        })
        .catch(e=>{
            console.log(e);
            res.send("Error");
        })
}

exports.postEliminarUniversidad=(req,res)=>{
    //DELETE FROM Consola WHERE id=
    console.log(req.body)
    Consola.destroy({
        where:{
            id : req.body.id
        }
    }).then(()=>{
        console.log("Universidad eliminada")
        res.send("Universidad eliminada")
    }).catch(e=>{
        console.log(e)
        res.send("Error")
    })
}

exports.postActualizarUniversidad=(req,res)=>{
    //UPDATE Consola SET WHERE id=
    console.log(req.body)
    Consola.update({nombreUniversidad: req.body.nombreUniversidad},{
        where:{
            id: req.body.id
        }
    }).then(()=>{
        console.log("Universidad actualizada")
        res.send("Universidad actualiza")
    }).catch(e=>{
        console.log(e)
        res.send("Error")
    })
}

exports.getConsultaUniversidad = (req,res)=>{
    res.send('<h1>Datos de las consolas</h1>')
}

