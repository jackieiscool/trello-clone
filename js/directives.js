app.directive('draggable', function() {
  return {
    scope: {drag: '&', card: '='},
    link: 
    function(scope, element) {
      var el = element[0];

      el.draggable = true;

      el.addEventListener(
        'dragstart',
        function(e) {
          e.dataTransfer.effectAllowed = 'move';
          e.dataTransfer.setData('Text', this.id);
          this.classList.add('drag');
          return false;
        },
        false
      );

      el.addEventListener(
        'dragend',
        function(e) {
          this.classList.remove('drag');
          scope.$apply('drag()');
          return false;
        },
        false
      );
    }
  }
}).
directive('droppable', function() {
  return {
    scope: {drop: '&', category: '='},
    link: function(scope, element) {
      var el = element[0];
      el.addEventListener(
        'dragover',
        function(e) {
          e.dataTransfer.dropEffect = 'move';
          // allows us to drop
          if (e.preventDefault) e.preventDefault();
          this.classList.add('over');
          return false;
        },
        false
      );
      el.addEventListener(
        'dragenter',
        function(e) {
          this.classList.add('over');
          return false;
        },
      false
      );
      el.addEventListener(
        'dragleave',
        function(e) {
          this.classList.remove('over');
          return false;
        },
        false
      );
      el.addEventListener(
        'drop',
        function(e) {
          if (e.stopPropagation) e.stopPropagation();
          this.classList.remove('over');

          var categoryId = this.id;
          var card = document.getElementById(e.dataTransfer.getData('Text'));
          var list = this.children[1].children[1];
          list.appendChild(card);

          scope.$apply(function(scope) {
            var fn = scope.drop();
            if ('undefined' !== typeof fn) {
              fn(item.id, binId);
            }
          });
          
          return false;
        },
        false
      );
    }
  }
});