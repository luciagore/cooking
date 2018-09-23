'use strict';

var http = require('http');
var config = require('../config');
var _ = require('lodash');

var actions = {
    addDocument: function(collection, content, next) {
        collection.insert(content, function(){
            next()
        });
    },
    removeDocument: function(collection, id, next) {
        collection.remove({ _id: id}, function() {
            next()
        });
    },
    getRecipes: function (collection, userId, next) {
        collection.find({userID: userId}, {}, function(e, docs){
            next(docs);
        });
    },
    getRecipeByIngredients: function(collection, userId, ingredient, next) {
        collection.find({userID: userId},{},function(e, docs){
            var recipes = [];
            docs.forEach(function(recipe) {
                var ingredientsU = recipe.ingredients.toUpperCase();
                var ingredientU = ingredient.toUpperCase();
                if (_.includes(ingredientsU, ingredientU)) {
                    recipes.push(recipe);
                }
            });
            next(recipes);
        });
    },
    getRecipeByTitle: function(collection, userId, query, next) {
        collection.find({userID: userId},{},function(e,docs){
            var recipes = [];
            docs.forEach(function(recipe) {
                var recipeName = recipe.recipeName.toUpperCase().replace(/ /g,"_");

                if (recipeName === query.toUpperCase()) {
                    recipes.push(recipe);
                }
            });
            next(recipes);
        });
    },
    registerUser: function(collection, userDetails, next) {
        collection.insert(userDetails, function() {
            next(userDetails)
        });
    },
    getUserID: function(collection, username, next) {
        collection.find({username: username}, {}, function(e, users) {
            next(users[0]._id)
        })
    },
    getUserInfo: function(collection, userId, next) {
        collection.find({_id: userId}, {}, function(e, user) {
            next(user)
        })
    },
    makeHttpRequest: function(httpDetails, res, next) {
        var options = {
            host: httpDetails.host,
            path: httpDetails.path + httpDetails.query
        };

        return http.get(options, function(res) {
            var body = '';

            if (res.statusCode !== 200) {
                console.log("Uh oh! Something has gone wrong!");
                return;
            }

            res.on('data', function(chunk) {
                body += chunk;
            });
            res.on('end', function(){
                var parsed = JSON.parse(body);
                next({
                    parsed: parsed.recipes
                });
            });
        });
    }
};

module.exports = actions;
