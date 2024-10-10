function getRecipeById(recipe_id) {
    return Promise.resolve(`awesome recipe! Recipe ID: ${recipe_id}`)
}

module.exports = { getRecipeById }