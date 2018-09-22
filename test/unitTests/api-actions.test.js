const actions = require('../../lib/api-actions');


describe('getting documents', () => {
    var recipe = { 
        "recipeName": "pancakes",
        "cookingTime": "10",
        "ingredients": "eggs milk",
        "method": "bake" 
        }
    test('returns a document by', (done) => {
        //setup
        const mockCollection = {
            find: function (userID, something, next) {
                const mockedResponse = [{
                    "recipeName": "pancakes",
                    "cookingTime": "10",
                    "ingredients": "eggs milk",
                    "method": "bake"
                }];
                next(mockedResponse)
            }
        }
        // execution of our method
        actions.getRecipeByIngredients(mockCollection, 'one', 'eggs', (recipes) => {
            // actual test
            expect(recipes).toEqual([recipe])
            done();
        });
    });
    
    test('returns a collection of documents', (done) => {
        // setup
        let docs = [{
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
                next(mockedResponse)
            }
        }
        // exercise getDocuments method
        actions.getRecipes(mockedCollection, 'two', (docs) => {
            // actual test
            expect(docs).toEqual(docs)
            done();
        })
    })
});
