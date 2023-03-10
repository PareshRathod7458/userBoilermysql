const Joi = require('@hapi/joi');

function addForm(data) {
    const schema = Joi.object({
        categoryname: Joi.string().min(3).max(30).empty().required().messages({
                "string.base": `City should be a type of text`,
                "string.empty": 'City  is not allowed to be empty',
                "string.required": `city is Required`,
            })
    })

    return schema.validate(data, { abortEarly: false });
}

function editForm(req) {

    const schema = Joi.object({
        categoryname: Joi.string().min(3).max(30).empty().required().messages({
            "string.base": `Name should be a type of text`,
            "string.min": `Name should be a 3 Character '`,
            "string.max": `Name should be a 30 Character '`,
            "string.empty": 'Name is not allowed to be empty',
            "any.required": `Name is Required`,
        })
    })

    return schema.validate(req, { abortEarly: false });
}

    module.exports ={
        addForm,
        editForm
    }