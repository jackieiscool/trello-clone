app.controller('CategoriesController', function($scope) {
  $scope.categories = ['To Do', 'Doing', 'Done'];

  $scope.handleDrop = function() {
    console.log(this);
    // console.log($scope);
  };
}).
controller('CardsController', function($scope) {
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

  $scope.handleDrag = function($index) {
    // $scope.cards.push(this.card);
    // console.log(this.card.id);
    // console.log($scope.cards);
    $scope.cards.splice((this.card.id - 1), 1);
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
        completed: "false"
      });
    }
    $scope.newItem = '';
  };

  $scope.itemCompleted = function() {
    completed: "true";
  };
});