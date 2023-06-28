import { PrismaClient } from '@prisma/client'



//crear una clase adminespecie con dos objetos : crear especie y listar especie
// con metodos req y response
class AdminEspecie{

    constructor(){
        this.prisma = new PrismaClient()
    }

    crearEspecie(req, res){

    }

    listarEspecies(req, res){
        
    }

};

module.exports=AdminEspecie; // importamte exportarlo para que este disponible en todos las clases 