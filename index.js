

angular.module("ngPush", []).directive("ngPush", function() {
  return {
    restrict: "EA",
    scope: {
      collection: "=ngModel"
    },
    link: function(scope, element, attrs) {
      // ignore angular based attributes
      var ignore = [
        "$attr",
        "$$element",
        "ngModel",
        "$$observers"
      ];

      var obj = {};
      var keys = Object.keys(attrs);
      angular.forEach(keys, function(k) {
        if (!~ignore.indexOf(k)) {
          obj[k] = attrs[k];
        }
      });

      scope.collection.push(obj);
    }
  };
});
