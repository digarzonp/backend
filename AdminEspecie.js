const { PrismaClient } = require ("@prisma/client")



//crear una clase adminespecie con dos objetos : crear especie y listar especie
// con metodos req y response
class AdminEspecie{

    constructor(){
       this.prisma = new PrismaClient()
    }

    async crearEspecie(req, res){

        const datos=req.body;
        console.log(" estos son los datos "+ datos);
        const especie =await this.prisma.especie.create(
            {
                data:datos
            }
        );

        res.json(especie);

    }

    async listarEspecies(req, res){
        const especies = await this.prisma.especie.findMany();
        res.json(especies);
    
    }


};

module.exports=AdminEspecie; // importamte exportarlo para que este disponible en todos las clases 