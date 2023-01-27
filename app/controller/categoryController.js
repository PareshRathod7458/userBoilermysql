const connection = require('../middleware/db');
const {addForm,editForm} = require('../validation/categoryValidation');
const {logger} = require('../logger/logger');
const { logout } = require('./userController');
const { result } = require('@hapi/joi/lib/base');


exports.addData = async(req,res)=>{
    try{
          const {error} = addForm(req.body);
          if(error){
            return res.status(400).send(error.details[0].message);

          }else{
                    const categoryname = req.body.categoryname;
                    const sql = `INSERT INTO tb_category(categoryname)VALUES('${categoryname}')`;
                    connection.query(sql,(err,result)=>{
                        if(err){
                            logger.error('Error',err);
                        }
                        else
                        {
                            res.send('Data Inserted');
                        }
                    })
          }
    }catch(err){
        logger.error('Error',err);
    }
}

exports.findData = async(req,body)=>{
    let sql = `SELECT * FROM tb_category`
    connection.query(sql,(err,result)=>{
        if(err){
            console.error('Error',err);
        }
        else
        {
            res.send(result);
        }
    })
}

exports.findDataById = async(req,res)=>{
    const id = req.params.id;

    let sql = `SELECT * FROM tb_category WHERE id=${id}`
    connection.query(sql,(err,result)=>{
        if(err){
            logger.error('Error',err)
        }
        else
        {
            res.send(result)
        }
    })
}
exports.editData = async(req,res)=>{
    try{
        const {error} = editForm(req.body);
        if(error){
                return res.status(400).send(error.details[0].message);
        }else
        {
            const id = req.params.id;
            const categoryname = req.body.categoryname;
            let sql = `UPDATE tb_category SET categoryname=${categoryname} WHERE id = ${id}`
            connection.query(sql,(err,result)=>{
                if(err){
                    logger.error('Error',err);
                }else{
                    res.send('data updata');
                }
            })
        }
    }catch(err){
        logger.error('Error',err);
    }
}

exports.deleteData = async(req,res)=>{
    const id = req.params.id;
    let sql = `DELETE FROM tb_category WHERE id=${id}`
    connection.query(sql,(err,result)=>{
        if(err){
            logger.error('Error',err)
        }
        else{
            res.send('data delete')
        }
    })
}