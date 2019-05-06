const express = require('express')
const asyncHandler = require('../helpers/asyncHandler')
const db = require('../data/dbConfig')
// const knex = require('knex')

const router = express.Router()
const table = 'projects'

router.get('/', asyncHandler( async(req, res) => {
    const result = await db(table)
    res.status(200).json(result)
}))

router.get('/:id', asyncHandler( async(req, res) => {
    const project = await db(table).where('id', req.params.id).first()
    const actions = await db(table)
    .select('projects.id')
    .join('actions', 'projects.id', '=', 'actions.project_id')
    .select('actions.*')
    .where('projects.id', req.params.id)
    res.status(200).json({
        ...project,
        actions: actions
    })
}))

router.post('/', asyncHandler( async(req, res) => {
    const [id] = await db(table).insert(req.body);
    const result = await db(table)
    .where({ id })
    .first();
    res.status(201).json(result);
}))

module.exports = router