angular.module("assessment").controller("shopCtrl",["$scope","$q","$state","shopService",function($scope,$q,$state,shopService) {

  var displayProducts = () => {
    shopService.displayProducts().then(function(result) {
      $scope.productsArray = result.data;
    })
  }
  displayProducts();

}]);
