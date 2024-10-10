const router = require('express').Router()
const Recipe = require('./recipes-model')

router.get('/:recipe_id', (req, res, next) => {
    Recipe.getRecipeById(req.params.recipe_id)
        .then(resource => {
           if (!resource || resource.length === 0) {
            const error = new Error('Recipe ID not found')
            error.status = 404
            throw error
           }
            res.status(200).json(resource)
        })
        .catch(next)
})



router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'something went wrong inside the recipes router',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router