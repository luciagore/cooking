const actions = require('../../lib/api-actions');

var collection = { "recipeName" : "pancakes", "cookingTime" : "10", "ingredients" : "eggs milk", "method" : "bake" }
var recipe = { "recipeName" : "PANCAKES", "cookingTime" : "10", "ingredients" : "EGGS MILK", "method" : "BAKE" }


mock = jest.fn()
mock.mockReturnValue(collection)

test('returns a document', () => {
    // const find = jest.fn()
    // find.mockReturnValue(collection);
    // console.log(find('blaaaaaah'));
    expect(mock(actions.getDocument(collection, "j:5ba0fc6684357e0295ff472d", 'pancakes', collection))).toEqual([recipe])
    // // expect(find("getDocument()")).toEqual(recipe)
    expect(mock).toHaveBeenCalled();
    // expect(getDocument(collection, userID, query, next/callback)).toBe([recipe]);
  });
