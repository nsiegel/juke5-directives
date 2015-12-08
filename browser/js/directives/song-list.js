app.directive('songList', function() {
  return {
    restrict: 'E',
    templateUrl: '/templates/song-list.html',
    scope: {
      songs: '=',
      show: '='
    },
    link: function(scope, element, attr){
      scope.show = attr.show;
      console.log(scope.show)
    }
  };
});
