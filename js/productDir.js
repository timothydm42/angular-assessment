angular.module("assessment").directive("productDir", [function() {

  return {
    templateUrl:"./views/product-tmpl.html",
    restrict: "E",
    scope:{
      product: "=",
    },
    controller:["$scope",($scope) => {
      $scope.toggle = () => {
        var toggler = !toggler;
      }
    }],
    link:(scope,element,attributes) => {

    },
  };

}])
