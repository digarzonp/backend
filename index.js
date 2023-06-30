const express=require("express");  //importar express
const AdminEspecie=require("./AdminEspecie") // importar la clase que cree

class AteneaVetAPI{
    constructor(){

        this.puerto=3000;

        this.app= express();         // crear una app de la clase express 
        
        this.adminEspecie= new AdminEspecie()  //creo un objeto de la clase AdminEspecie

        this.app.use(this.configurarCORS);
        this.app.use(express.json());       //HABILITAR EL SOPORTES JSON

        this.app.post("/crear_especie", (req, res)=>{

            this.adminEspecie.crearEspecie(req, res);                           //del objeto llame el metodo crear especie
        });
        this.app.get("/listar_especies",(req, res)=>{

            this.adminEspecie.listarEspecies(req, res);
        });                      //crear ruta crear especie



    }
    configurarCORS(req, res, next){               //cors nos permite colocarle a alas peticiones unos encabezados para sobrepazar la restincion de la politica de origen unico de los navegadores web

        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Methods","GET, POST");
        res.header("Access-Control-Allow-Headers","COntent-Type");
        next();



    }
    iniciarServidor(){

        this.app.listen(this.puerto, ()=>{
            console.log(`Servidor ejecutandose en el puerto ${this.puerto}`);
        });

    }

}


const ateneaVetAPI= new AteneaVetAPI();
ateneaVetAPI.iniciarServidor();