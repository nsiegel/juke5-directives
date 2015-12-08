app.directive('doubleClick', function(PlayerFactory) {
  return {
    restrict: 'A',
    link: function(scope, element, attr){
      element.on('dblclick', function() {
        PlayerFactory.start(scope.song);
      });
    }
  };
});
