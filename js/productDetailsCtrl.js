angular.module("assessment").controller("productDetailsCtrl", ["$scope","$state","$q","shopService",function($scope,$state,$q,shopService) {

  var getProductDetails = () => {
    shopService.getProductDetails($state.params.productId).then(function(result) {
      console.log(result);
      $scope.productDetails = result.data;
    })
  };
  getProductDetails();

}]);
