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

  it("can push underscore prefixed attributes", inject(function($rootScope, $compile) {
    var scope = $rootScope.$new();
    scope.files = [];
    var html = "" +
      "<ng-push ng-model=\"files\" data-_id=\"1234567890\" data-_name=\"foo\"></ng-push>" +
      "<ng-push ng-model=\"files\" data-_id=\"0987654321\" data-_name=\"bar\"></ng-push>" +
      "<ng-push ng-model=\"files\" data-__method=\"DELETE\"></ng-push>";
    var ele = $compile(html)(scope);
    assert.lengthOf(scope.files, 3);
    assert.deepEqual([
      {
        _id:   "1234567890",
        _name: "foo"
      },
      {
        _id:   "0987654321",
        _name: "bar"
      },
      {
        __method: "DELETE"
      }
    ], scope.files);
  }));
});
