const actions = require('../../lib/api-actions');


describe('Getting recipes', () => {
    var recipe = { 
        "recipeName": "pancakes",
        "cookingTime": "10",
        "ingredients": "eggs milk",
        "method": "bake" 
        }
    test('returns a recipe by ingredients', (done) => {
        //setup
        const mockCollection = {
            find: function (userID, something, next) {
                const mockedResponse = [{
                    "recipeName": "pancakes",
                    "cookingTime": "10",
                    "ingredients": "eggs milk",
                    "method": "bake"
                }];
                next(null, mockedResponse)
            }
        }
        // execution of our method
        actions.getRecipeByIngredients(mockCollection, 'one', 'eggs milk', (recipes) => {
            // actual test
            expect(recipes).toEqual([recipe])
            done();
        });

    });
    test('returns a recipe by title', (done) => {
        //setup
        const mockCollection = {
            find: function (userID, something, next) {
                const mockedResponse = [{
                    "recipeName": "pancakes",
                    "cookingTime": "10",
                    "ingredients": "eggs milk",
                    "method": "bake"
                }];
                next(null, mockedResponse)
            }
        }
        // execution of our method
        actions.getRecipeByTitle(mockCollection, 'one', 'pancakes', (recipes) => {
            // actual test
            expect(recipes).toEqual([recipe])
            done();
        });
    });
    
    test('returns a collection of recipes', (done) => {
        // setup
        let recipes = [{
            "cookingTime": "10",
            "ingredients": "eggs milk",
            "method": "bake",
            "recipeName": "pancakes"
        },
        {
            "cookingTime": "30",
            "ingredients": "celery onios potatoes",
            "method": "cook",
            "recipeName": "soup"
        }]
        const mockedCollection = {
            find: function (userID, someObject, next) {
                const mockedResponse = [
                    {
                        "recipeName": "pancakes",
                        "cookingTime": "10",
                        "ingredients": "eggs milk",
                        "method": "bake"
                    },
                    {
                        "recipeName": "soup",
                        "cookingTime": "30",
                        "ingredients": "celery onios potatoes",
                        "method": "cook"
                    }];
                next(null, mockedResponse)
            }
        }
        // exercise getRecipes method
        actions.getRecipes(mockedCollection, 'two', (docs) => {
            // actual test
            expect(docs).toEqual(recipes)
            done();
        })
    })
});
