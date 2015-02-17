# ngPush

[![Browserify](https://img.shields.io/badge/browserify-only-ff69b4.svg)](https://img.shields.io/badge/browserify-only-ff69b4.svg)
[![Build Status](https://travis-ci.org/nowk/js-ngPush.svg?branch=master)](https://travis-ci.org/nowk/js-ngPush)
[![David DM](https://david-dm.org/nowk/js-ngPush.png)](https://david-dm.org/nowk/js-ngPush)

> Push to ngModel bootstrapper

A simple way to bootstrap collections without making extra XHR calls or embedding JSON data in your HTML.


## Install

    npm install js-ngPush

## Usage

    require("angular");
    require("js-ngPush");

    var m = angular.module("App", [
      "ngPush"
    ]);

    m.controller("FilesCtrl", ["$scope", function($scope){
      $scope.files = [];
    }]);

Data (something to this effect)

    files := []File{
      {Name: "file1.txt", Size: 123},
      {Name: "file2.txt", Size: 456},
    }

HTML

    <section data-ng-controller="FilesCtrl">
      <% range .Files %>
        <ng-push ng-model="files" data-name="<% .Name %>" data-size="<% .Size %>"></ng-push>
      <% end %>
    </section>

Results in

    $scope.files = [
      {name: "file1.txt", size: "123"},
      {name: "file2.txt", size: "456"}
    ];

## License

MIT
