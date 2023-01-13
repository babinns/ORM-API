const db = require("../models")

// standard: js searches for index.js

class PersonController {

    static async takeAllPeople(req, res){
        try {
            const allPeople = await db.people.findAll()
            return res.status(200).json(allPeople) 
        }catch (error){
            return res.status(500).json(error.message)
        }
    }
    static async findPersonById(req, res) {
        const {id} = req.params
        try {
            const onePerson = await db.people.findOne({where: {id: 
            Number(id)
        }

        
        })
        return res.status(200).json(onePerson)

        }catch (error){
            res.status(500).json(error.message)
         

        }

    }

    static async createPerson (req, res){
        const newPerson = req.body
        try {

            const newPersonCreated = await db.people.create(newPerson)
            return res.status(200).json(newPersonCreated)

        }catch (error) {
            res.status(500).json(error.message)

        }

    }

    //update
    static async updatePerson (req, res) {
        const {id} = req.params
        const newInfo = req.body
        try{
            await db.people.update(newInfo, { where: {id: Number(id)}})
            const updatedPerson = await db.people.findOne({where: {id: 
            Number(id)}})
            return res.status(200).json(updatedPerson)
        }catch (error) {
        res.status(500).json(error.message)
    }
}

    static async deletePerson (req, res) {
        const {id} = req.params
        try{
            await db.people.destroy({where: {id: Number(id) }})
            return res.status(200).json({message: `id ${id} deleted`})
        }catch (error){
            res.status(500).json(error.message)
        }
    }

}

module.exports = PersonController