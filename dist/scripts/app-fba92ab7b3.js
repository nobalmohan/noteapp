!function(){"use strict";angular.module("noteapp",["ui.router","ngMaterial","toastr"])}(),function(){"use strict";function t(){function t(){return e}var e=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Angular Material Design",url:"https://material.angularjs.org/#/",description:"The Angular reference implementation of the Google's Material Design specification.",logo:"angular-material.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}];this.getTec=t}angular.module("noteapp").service("webDevTec",t)}(),function(){"use strict";function t(){function t(t){var e=this;e.relativeDate=t(e.creationDate).fromNow()}t.$inject=["moment"];var e={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0};return e}angular.module("noteapp").directive("acmeNavbar",t)}(),function(){"use strict";function t(t){function e(e,o,n,r){var a,i=t(o[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});o.addClass("acme-malarkey"),angular.forEach(e.extraValues,function(t){i.type(t).pause()["delete"]()}),a=e.$watch("vm.contributors",function(){angular.forEach(r.contributors,function(t){i.type(t.login).pause()["delete"]()})}),e.$on("$destroy",function(){a()})}function o(t,e){function o(){return n().then(function(){t.info("Activated Contributors View")})}function n(){return e.getContributors(10).then(function(t){return r.contributors=t,r.contributors})}var r=this;r.contributors=[],o()}o.$inject=["$log","githubContributor"];var n={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:e,controller:o,controllerAs:"vm"};return n}t.$inject=["malarkey"],angular.module("noteapp").directive("acmeMalarkey",t)}(),function(){"use strict";function t(t,e){function o(o){function r(t){return t.data}function a(e){t.error("XHR Failed for getContributors.\n"+angular.toJson(e.data,!0))}return o||(o=30),e.get(n+"/contributors?per_page="+o).then(r)["catch"](a)}var n="https://api.github.com/repos/Swiip/generator-gulp-angular",r={apiHost:n,getContributors:o};return r}t.$inject=["$log","$http"],angular.module("noteapp").factory("githubContributor",t)}(),function(){"use strict";function t(t,e){function o(){t.noteCollection.push({noteTitle:t.addNote.noteTitle,noteContent:t.addNote.noteContent})}t.noteCollection=[],t.editData,t.saveNoteForm=function(){if(t.noteCollection.length>0)for(var n in t.noteCollection)if(t.noteCollection.hasOwnProperty(n)){var r=t.noteCollection[n];for(var a in r){if(t.editData&&r.$$hashKey!==t.editData.$$hashKey){console.log("update");break}o(),console.log("new");break}}t.noteCollection.push({noteTitle:t.addNote.noteTitle,noteContent:t.addNote.noteContent}),e.info("Note added !")},t.editNote=function(e,o){t.editData=o;for(var n in t.noteCollection)if(t.noteCollection.hasOwnProperty(n)){var r=t.noteCollection[n];for(var a in r)r[a]===o.noteTitle&&(r=o)}console.log(t.noteCollection)}}t.$inject=["$scope","toastr"],angular.module("noteapp").controller("MainController",t)}(),function(){"use strict";function t(t){t.debug("runBlock end")}t.$inject=["$log"],angular.module("noteapp").run(t)}(),function(){"use strict";function t(t,e){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),e.otherwise("/")}t.$inject=["$stateProvider","$urlRouterProvider"],angular.module("noteapp").config(t)}(),function(){"use strict";angular.module("noteapp").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function t(t,e){t.debugEnabled(!0),e.allowHtml=!0,e.timeOut=3e3,e.positionClass="toast-top-right",e.preventDuplicates=!0,e.progressBar=!0}t.$inject=["$logProvider","toastrConfig"],angular.module("noteapp").config(t)}(),angular.module("noteapp").run(["$templateCache",function(t){t.put("app/main/main.html",'<div flex="" layout="row" layout-align="center center"><md-card flex="50" class="addNoteContainer"><form name="addNoteForm"><md-card-title><md-card-title-text><span class="md-headline">Add New Note</span></md-card-title-text></md-card-title><md-card-content><md-input-container class="md-block"><label>Title</label> <input required="" name="noteTitle" ng-model="addNote.noteTitle"><div ng-messages="addNoteForm.noteTitle.$error"><div ng-message="required">This is required.</div></div></md-input-container><md-input-container class="md-block"><label>Note</label> <input required="" name="noteContent" ng-model="addNote.noteContent"><div ng-messages="addNoteForm.noteContent.$error"><div ng-message="required">This is required.</div></div></md-input-container></md-card-content><md-card-actions layout="row" layout-align="end center"><md-button type="submit" class="md-primary md-light md-raised" ng-click="addNoteForm.$valid ? saveNoteForm() : noop()"><i class="material-icons">add</i>Add Note</md-button></md-card-actions></form></md-card></div><div flex=""><md-grid-list md-cols-sm="2" md-cols-md="3" md-cols-lg="3" md-cols-gt-lg="3" md-row-height-sm="1:1" md-row-height-md="1:0.8" md-row-height-lg="1:0.86" md-row-height-gt-lg="1:0.68" md-gutter="10px" md-gutter-gt-lg="15px"><md-grid-tile md-colspan-gt-sm="1" md-colspan-sm="1" md-rowspan-gt-sm="1" layout="column" ng-repeat="note in noteCollection"><md-card class="noteContainer"><md-card-actions layout="row" layout-align="end center"><md-button ng-click="editNote($event, note)"><i class="material-icons">border_color</i></md-button></md-card-actions><md-card-title class="card-title"><md-card-title-text><span class="md-headline">{{note.noteTitle}}</span></md-card-title-text></md-card-title><md-card-content class="card-content"><p>{{note.content}}</p></md-card-content></md-card></md-grid-tile></md-grid-list></div>'),t.put("app/components/navbar/navbar.html",'<md-toolbar layout="row" layout-align="center center"><md-button href="https://github.com/Swiip/generator-gulp-angular">Gulp Angular</md-button><section flex="" layout="row" layout-align="left center"><md-button href="#" class="md-raised">Home</md-button><md-button href="#" class="md-raised">About</md-button><md-button href="#" class="md-raised">Contact</md-button></section><md-button class="acme-navbar-text">Application was created {{ vm.relativeDate }}.</md-button></md-toolbar>')}]);
//# sourceMappingURL=../maps/scripts/app-fba92ab7b3.js.map