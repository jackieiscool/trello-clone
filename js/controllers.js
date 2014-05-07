app.controller('CardsController', function($scope) {
  $scope.cards = [];
  $scope.newCard = '';

  $scope.addCard = function() {
    if ($scope.newCard.length == 0) {
      return
    }
    else {
      $scope.cardId = $scope.cards.length + 1;
      $scope.cards.push({
        id: $scope.cardId,
        title: $scope.newCard
      });
    }
    $scope.newCard = '';
  };
}).
controller('ItemsController', function($scope) {
  $scope.items = [];
  $scope.newItem = '';

  $scope.addItem = function() {
    if ($scope.newItem.length == 0) {
      return
    }
    else {
      $scope.itemId = $scope.items.length + 1;
      $scope.items.push({
        id: $scope.itemId,
        title: $scope.newItem,
      });
    }
    $scope.newItem = '';
  };
});