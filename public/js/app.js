

(function(){
    var MYLIBRARY = MYLIBRARY || (function(){
       this.manager = false;
        
        return{
            init: function(Args){
                this.manager = Args;
            },
            isManager: function(){
                return this.manager;
            }
        };
    }());
    
    var app = angular.module('SIT', []);

    app.controller('MainController', function($scope){
        
        this.signIn = function()
        {
            // google id
        };
        
        this.isManager = function(){
            alert("show is " + MYLIBRARY.isManager());
            return MYLIBRARY.isManager();
        };
    });
})();

