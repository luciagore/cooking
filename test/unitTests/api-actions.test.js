const actions = require('../../lib/api-actions');

var recipe = { "recipeName" : "pancakes", "cookingTime" : "10", "ingredients" : "eggs milk", "method" : "bake" }

test('returns a document', (done) => {
    const mockCollection = {
        find: function(userID, something, next) {
            const mockedResponse = [{ 
                "recipeName" : "pancakes", 
                "cookingTime" : "10", 
                "ingredients" : "eggs milk", 
                "method" : "bake" }];
            next(mockedResponse)
        }
    }
        actions.getDocument(mockCollection, 'one', 'eggs', (recipes) => {
        expect(recipes).toEqual([recipe])
        done();
    });
    
});
