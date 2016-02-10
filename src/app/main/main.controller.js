(function() {
  'use strict';

  angular
    .module('noteapp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, toastr) {

    $scope.noteCollection = [];
    $scope.editData;

    $scope.saveNoteForm = function saveNote() {
      //console.log($scope.noteCollection);


      if ($scope.noteCollection.length > 0) {
        for (var key in $scope.noteCollection) {
          if (!$scope.noteCollection.hasOwnProperty(key)) continue;
          var obj = $scope.noteCollection[key];
          for (var prop in obj) {
            //console.log(obj.$$hashKey);
            //console.log($scope.editData.$$hashKey);
            if($scope.editData && obj.$$hashKey !== $scope.editData.$$hashKey) {
              console.log("update"); break;
            }else {
              pushData();
              console.log("new"); break;
            }
            //obj = editData;
            //$scope.addNote.noteTitle = editData.noteTitle;
            //$scope.addNote.noteContent = editData.noteContent;
          }
        }
      } else {

      }


      $scope.noteCollection.push({
        noteTitle: $scope.addNote.noteTitle,
        noteContent: $scope.addNote.noteContent
      });


      toastr.info("Note added !");
      //$scope.addNote.noteTitle = "";
      //$scope.addNote.noteContent= "";
    };

    $scope.editNote = function editNote($event, editData) {
      $scope.editData = editData;
      for (var key in $scope.noteCollection) {
        if (!$scope.noteCollection.hasOwnProperty(key)) continue;
        var obj = $scope.noteCollection[key];
        for (var prop in obj) {
          if (obj[prop] === editData.noteTitle) {
            obj = editData;
            //$scope.addNote.noteTitle = editData.noteTitle;
            //$scope.addNote.noteContent = editData.noteContent;
          }
        }
      }
      console.log($scope.noteCollection);

    };

    function pushData() {
      $scope.noteCollection.push({
        noteTitle: $scope.addNote.noteTitle,
        noteContent: $scope.addNote.noteContent
      });
    }


  }
})();
