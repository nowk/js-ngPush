var assert = require("chai").assert;

require("angular");
require("angular-mocks");
require("..");

describe("ngPush", function() {
  beforeEach(function() {
    angular.mock.module("ngPush");
  });

  it("pushes attributes to ngModel", inject(function($rootScope, $compile) {
    var scope = $rootScope.$new();
    scope.files = [];
    var html = "" +
      "<ng-push ng-model=\"files\" data-name=\"file1.txt\" data-size=\"123\" data-type=\"image/jpeg\"></ng-push>" +
      "<ng-push ng-model=\"files\" data-name=\"file2.txt\" data-size=\"456\" data-type=\"image/jpeg\"></ng-push>";
    var ele = $compile(html)(scope);
    assert.lengthOf(scope.files, 2);
    assert.deepEqual([
      {
        name: "file1.txt",
        size: "123",
        type: "image/jpeg"
      },
      {
        name: "file2.txt",
        size: "456",
        type: "image/jpeg"
      }
    ], scope.files);
  }));
});
