(function() {
  'use strict';

  angular
    .module('noteapp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
