app.directive('albumList', function() {
  return {
    restrict: 'E',
    templateUrl: '/templates/album-list.html',
    scope: {
      albums: '='
    }
  };
});
