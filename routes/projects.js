const express = require('express')
const asyncHandler = require('../helpers/asyncHandler')
const db = require('../data/dbConfig')

const router = express.Router()
const table = 'projects'

router.get('/', asyncHandler( async(req, res) => {
    const result = await db(table)
    res.status(200).json(result)
}))

router.post('/', asyncHandler( async(req, res) => {
    const [id] = await DB.addDish(req.body);
    const result = await db(model)
    .where({ id })
    .first();
    res.status(201).json(result);
}))