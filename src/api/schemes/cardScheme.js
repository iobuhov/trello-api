const joi = require('@hapi/joi');

module.exports = joi
    .object()
    .keys({
        'name': joi
            .string()
            .required(),
        'description': joi
            .string()
            .required(),
        'estimate': joi
            .string()
            .required(),
        'status': joi
            .string()
            .valid('to-do', 'in-progress', 'done')
            .required(),
        'dueDate': joi
            .date()
            .required(),
        'labels': joi
            .array()
            .items(joi.string())
            .required()
    });
