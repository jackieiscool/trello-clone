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

});