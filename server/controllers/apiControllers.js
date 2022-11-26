var pool = require('../db');

const apiController = {

    employes : async (req, res)=> {
        try {
            const [result] = await pool.query('SELECT * FROM employee')                        
            if(result){
                return res.status(200).json({ status : "Consulta exitosa", result})
            }
            return res.status(404).json({ status : "Búsquedas sin resultados"})
        } catch (error) {
            return res.status(500).json({ message : error })
        }        
    },

    insert : async(req, res)=>{
        const { name , salary } = req.body
        try {
            const [result] = await pool.query('INSERT INTO employee(name, salary) VALUES (?,?)', [name, salary]);          
            if(result.affectedRows>0){
                return res.status(200).json({ status : "Registro Insertado correctamente", id : result.insertId, name : name, salary : salary })
            }
            return res.status(404).json({ status : "No se puede crear el registro"})
        } catch (error) {
            return res.status(500).json({ message : error })
        }
    },

    consultId : async(req, res)=>{        
        try {
            const [consulta] = await pool.query('SELECT * FROM employee WHERE id = ? ', [req.params.id])
            if(consulta[0]){
                return res.status(200).json({status : "Registro consultado correctamente", consulta})
            }
            return res.status(404).json({ status : "No existe registo para el ID"})
        } catch (error) {
            return res.status(500).json({ message : error })
        }
    },

    update : async(req, res)=>{        
        const { id } = req.params;
        const { name, salary } = req.body;        
        try {
            const [updateEmployee] = await pool.query('UPDATE employee SET name = ?, salary= ? WHERE id = ?', [name, salary, id]);          
            if(updateEmployee.affectedRows>0){
                return res.status(200).json({ status : "Registro actualizado correctamente", info : updateEmployee.info })
            }
            return res.status(404).json({ status : "No se puede actualizar el registro"})
        } catch (error) {
            return res.status(500).json({ message : error })
        }
    },

    delete : async(req, res)=>{        
        try {
            const [deleteEmploye] = await pool.query('DELETE FROM employee WHERE id = ? ', [req.params.id])
            if(deleteEmploye.affectedRows>0){
                return res.status(200).json({status : "Registro eliminado correctamente", affectedRows: deleteEmploye.affectedRows})
            }
            return res.status(404).json({ status : "No existe registro para eliminar"})
        } catch (error) {
            return res.status(500).json({ message : error })
        }
    }
}

module.exports =  apiController;