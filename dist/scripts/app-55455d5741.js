!function(){"use strict";angular.module("formioApp",["ngSanitize","ui.router","ui.bootstrap","ui.bootstrap.accordion","ui.bootstrap.alert","ngFormioHelper","ngFormBuilderHelper","ngFormBuilder","bgf.paginateAnything","formio","ngMap"])}(),function(){"use strict";angular.module("formioApp").provider("EmployeeResource",function(){return{$get:function(){return null},base:"users.",templates:{"abstract":"views/employee/resource.html",view:"views/employee/view.html"},controllers:{view:["$scope",function(o){o.position=null,o.employee.loadSubmissionPromise.then(function(e){e.data.address&&(o.position=[e.data.address.geometry.location.lat,e.data.address.geometry.location.lng])})}]}}})}(),function(){"use strict";angular.module("formioApp").config(["formioComponentsProvider",function(o){o.register("icons",{title:"Icons",template:"formio/components/icons.html",controller:["$scope",function(o){o.setValue=function(e){o.data[o.component.key]=e}}],group:"custom",icon:"fa fa-smile-o",settings:{input:!0,icons:[{value:5,icon:"fa fa-thumbs-o-up"},{value:4,icon:"fa fa-smile-o"},{value:3,icon:"fa fa-meh-o"},{value:2,icon:"fa fa-frown-o"},{value:1,icon:"fa fa-thumbs-o-down"}],fontSize:"2em",activeColor:"green",multiple:!1,"protected":!1,persistent:!0,tableView:!1},views:[{name:"Display",template:"formio/components/icons/display.html"},{name:"Validation",template:"formio/components/icons/validate.html"},{name:"API",template:"formio/components/common/api.html"},{name:"Layout",template:"formio/components/common/layout.html"},{name:"Conditional",template:"formio/components/common/conditional.html"}]})}]).run(["$templateCache","FormioUtils",function(o,e){o.put("formio/components/icons.html",e.fieldWrap('<i ng-repeat="icon in component.icons" ng-style="{ color: (data[component.key] == icon.value ? component.activeColor : \'\'), \'font-size\': component.fontSize }" ng-click="setValue(icon.value)" class="{{icon.icon}}" aria-hidden="true"></i>')),o.put("formio/components/icons/display.html",'<ng-form>  <form-builder-option property="label"></form-builder-option>  <value-builder data="component.icons" label-label="Icon" label-property="icon"></value-builder>  <form-builder-option property="fontSize" label="Font Size"></form-builder-option>  <form-builder-option property="activeColor" label="Active Color"></form-builder-option>  <form-builder-option property="customClass"></form-builder-option>  <form-builder-option property="protected"></form-builder-option>  <form-builder-option property="persistent"></form-builder-option>  <form-builder-option property="tableView"></form-builder-option></ng-form>'),o.put("formio/components/icons/validate.html",'<ng-form><form-builder-option property="validate.required"></form-builder-option></ng-form>')}])}(),function(){"use strict";angular.module("formioApp").run(["$rootScope","AppConfig","FormioAuth",function(o,e,t){t.init(),angular.forEach(e.forms,function(e,t){o[t]=e})}])}(),function(){"use strict";function o(o,e,t,r,i,n,l,m){o.state("home",{url:"/",templateUrl:"views/main.html",controller:m}).state("users",{"abstract":!0,url:"/users",templateUrl:"views/users.html"}),angular.forEach(r.resources,function(o,e){i.register(e,o.form,t.get(o.resource+"Provider"))}),n.register("form",r.appUrl,{base:"users.employee.",tag:"common",controllers:{submissions:["$scope","$stateParams",function(o,e){o.submissionQuery.owner=e.employeeId}]}}),l.register("",r.appUrl,{templates:{submission:{view:"views/form/submission/view.html"}},controllers:{form:{view:["$scope","$rootScope",function(o,e){e.whenReady.then(function(){e.isAdministrator||(o.hideComponents=["employee"],o.submission.data.employee=e.user)})}]}}}),e.otherwise("/")}o.$inject=["$stateProvider","$urlRouterProvider","$injector","AppConfig","FormioResourceProvider","FormioFormsProvider","FormioFormBuilderProvider","FormIndexController"],angular.module("formioApp").config(o)}(),function(){"use strict";angular.module("formioApp").constant("moment",moment)}(),function(){"use strict";angular.module("formioApp").config(["AppConfig","FormioProvider","FormioAuthProvider","formioComponentsProvider","$locationProvider",function(o,e,t,r,i){i.hashPrefix(""),e.setAppUrl(o.appUrl),e.setBaseUrl(o.apiUrl),t.setForceAuth(!0),t.setStates("auth.login","home"),t.register("login","user","login"),r.addGroup("custom",{title:"Custom Components"})}])}();