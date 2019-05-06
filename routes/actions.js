const express = require('express')
const asyncHandler = require('../helpers/asyncHandler')
const db = require('../data/dbConfig')

const router = express.Router()
const table = 'actions'

router.get('/', asyncHandler( async(req, res) => {
    const result = await db(table)
    res.status(200).json(result)
}))

router.get('/:id', asyncHandler( async(req, res) => {
    const result = await db(table)
    .where('id', req.params.id).first()
    res.status(200).json(result)
}))

router.post('/', asyncHandler( async(req, res) => {
    const [id] = await db(table).insert(req.body);
    const result = await db(table)
    .where({ id })
    .first();
    res.status(201).json(result);
}))

module.exports = router