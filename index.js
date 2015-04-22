// ignore angular based attributes
var ignore = [
  "$attr",
  "$$element",
  "ngModel",
  "$$observers"
];

angular.module("ngPush", []).directive("ngPush", function() {
  return {
    restrict: "EA",
    scope: {
      collection: "=ngModel"
    },
    link: function(scope, element, attrs) {
      var obj = {};
      var keys = Object.keys(attrs);
      angular.forEach(keys, function(k) {
        if (!~ignore.indexOf(k)) {
          // prefix the raw data-___ attribute and strip off `data-` and use
          // that is the key name
          var key = attrs.$attr[k].replace(/^data-/, "");
          obj[key] = attrs[k];
        }
      });

      scope.collection.push(obj);
    }
  };
});
