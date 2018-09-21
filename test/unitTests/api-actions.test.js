const actions = require('../../lib/api-actions');

var recipe = { "recipeName" : "pancakes", "cookingTime" : "10", "ingredients" : "eggs milk", "method" : "bake" }

test('returns a document', () => {
    const mockCollection = {
        find: function(userID, something, next) {
            const mockedResponse = [{ 
                "recipeName" : "pancakes", 
                "cookingTime" : "30", 
                "ingredients" : "eggs milk", 
                "method" : "bake" }];
            next(mockedResponse)
        }
    }
    actions.getDocument(mockCollection, 'one', 'pancakes', function(data) {
            console.log(data);
          });
    
    expect(actions.getDocument(mockCollection, "j:5ba0fc6684357e0295ff472d", 'pancakes', 'WHAT DO I PASS HERE?')).toEqual([recipe])
})
