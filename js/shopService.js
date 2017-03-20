angular.module("assessment").service("shopService",["$http","$q",function($http,$q) {

  this.displayProducts = () => {
    return $http({
      url:"http://practiceapi.devmounta.in/products",
      method:"GET"
    });
  };

  this.getProductDetails = (productId) => {
    return $http({
      url:"http://practiceapi.devmounta.in/products/" + productId,
      method:"GET"
    });
  };

}]);
