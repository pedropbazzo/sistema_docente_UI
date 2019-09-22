'use strict';
(() => {
    const app = angular.module('sadApp');

    function QuestionFooterController() {
      let questionFooterCtrl = this;
    };

    app.component('sadQuestionCardFooter', {
        templateUrl: 'js/component/sad-question-card-footer/sad-question-card-footer.component.html',
        controller: QuestionFooterController,
        controllerAs: 'questionFooterCtrl',
        bindings: {
            questionario: '<',
            questaoRadio: '=',
            numeroDeQuestoes: '<',
            numeroDeQuestoesRespondidas: '<',
            enviarResposta: '&',
            respostaRapida: '&',
            porcentagem: '<'
        }
    });

})();
