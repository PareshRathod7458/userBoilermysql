const Joi = require("@hapi/joi");

function addForm(data){
    const schema = Joi.object({
      categoryname:Joi.optional(),
        pname: Joi.string().empty().required().messages({
            "string.base": `Project Name should be a type of text`,
            "string.empty":'Project Name  is not allowed to be empty',
            "string.required": `Project Name is Required`,
          }),
          ptitle: Joi.string().empty().required().messages({
            "string.base": `Project Title should be a type of text`,
            "string.empty":'Project Title  is not allowed to be empty',
            "string.required": `Project Title is Required`,
          }),
          url: Joi.string().empty().required().messages({
            "string.base": `URL should be a type of text`,
            "string.empty":'URL  is not allowed to be empty',
            "string.required": `URL is Required`,
          }),
          pdate:Joi.string().required().messages({
            "string.base": `Project Date should be a type of text`,
            "string.empty":'Project Date  is not allowed to be empty',
            "string.required": `Project Date is Required`,
          }),
        
    })

    return schema.validate(data, { abortEarly: false });
    
}

function editForm(req){
    const schema = Joi.object({
      categoryname:Joi.optional(),
        pname: Joi.string().empty().required().messages({
            "string.base": `Project Name should be a type of text`,
            "string.empty":'Project Name  is not allowed to be empty',
            "string.required": `Project Name is Required`,
          }),
          ptitle: Joi.string().empty().required().messages({
            "string.base": `Project Title should be a type of text`,
            "string.empty":'Project Title  is not allowed to be empty',
            "string.required": `Project Title is Required`,
          }),
          url: Joi.string().empty().required().messages({
            "string.base": `URL should be a type of text`,
            "string.empty":'URL  is not allowed to be empty',
            "string.required": `URL is Required`,
          }),
          pdate:Joi.string().required().messages({
            "string.base": `Project Date should be a type of text`,
            "string.empty":'Project Date  is not allowed to be empty',
            "string.required": `Project Date is Required`,
          }),

    })

    return schema.validate(req, { abortEarly: false });
    
}

module.exports={
    addForm,
    editForm
}