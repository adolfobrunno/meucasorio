'use strict';

angular.module('meucasorioApp')
  .factory('Modal', function ($rootScope, $modal) {
    /**
     * Opens a modal
     * @param  {Object} scope      - an object to be merged with modal's scope
     * @param  {String} modalClass - (optional) class(es) to be applied to the modal
     * @return {Object}            - the instance $modal.open() returns
     */
    function openModal(scope, modalClass) {
      var modalScope = $rootScope.$new();
      scope = scope || {};
      modalClass = modalClass || 'modal-default';

      angular.extend(modalScope, scope);

      return $modal.open({
        templateUrl: 'components/modal/modal.html',
        windowClass: modalClass,
        scope: modalScope
      });
    }

    // Public API here
    return {

      /* Confirmation modals */
      confirm: {

        register: function(data) {
          data = data || angular.noop;
          console.log('init registerModal')
          return function(){
              console.log('register modal...');
              console.log(arguments);
               var args = Array.prototype.slice.call(arguments),
                marriage = args.shift(),
                registerModal;

                registerModal = openModal({
                  modal: {
                      dismissable: true,
                      title: 'Confira seus dados',
                      html: '<ul><li>Noivo: ' + marriage.groom.name+', ' + marriage.groom.email+'</li>'+
                            '<li>Noiva: ' +marriage.bride.name+', '+marriage.bride.email+'</li>'+
                            '<li>Página: www.meucasorio.com.br/pages/'+marriage.domain+'</li>'+
                            '<li>Data: '+marriage.when+'</li>'+
                            '<li>Local: '+marriage.where+', '+marriage.city+'</li></ul>',
                      buttons: [{
                          classes: 'btn-danger',
                          text: 'Corrigir',
                          click: function(e){
                              console.log('corrigir...');
                              registerModal.dismiss(e);
                          }
                          }, {
                          classes: 'btn-primary',
                          text: 'Confirmar',
                          click: function(e) {
                            registerModal.close(e);
                          }
                    }]
                    }
                }, 'modal-primary');

              registerModal.result.then(function(event){
                data.apply(event, args);
              })
          }

        },

        /**
         * Create a function to open a delete confirmation modal (ex. ng-click='myModalFn(name, arg1, arg2...)')
         * @param  {Function} del - callback, ran when delete is confirmed
         * @return {Function}     - the function to open the modal (ex. myModalFn)
         */
        delete: function(del) {
          del = del || angular.noop;
          /**
           * Open a delete confirmation modal
           * @param  {String} name   - name or info to show on modal
           * @param  {All}           - any additional args are passed straight to del callback
           */
          return function() {
          console.log('modal confirm delete');
            var args = Array.prototype.slice.call(arguments),
                name = args.shift(),
                deleteModal;

            deleteModal = openModal({
              modal: {
                dismissable: true,
                title: 'Confirm Delete',
                html: '<p>Are you sure you want to delete <strong>' + name + '</strong> ?</p>',
                buttons: [{
                  classes: 'btn-danger',
                  text: 'Delete',
                  click: function(e) {
                    deleteModal.close(e);
                  }
                }, {
                  classes: 'btn-default',
                  text: 'Cancel',
                  click: function(e) {
                    deleteModal.dismiss(e);
                  }
                }]
              }
            }, 'modal-danger');

            console.log(del);
            deleteModal.result.then(function(event) {
              del.apply(event, args);
            });
          };
        }
      }
    };
  });
