(function() {
	'use strict';

	angular
	.module('angularSampleApp')
	.controller('ContactUsController', ContactUsController);

	ContactUsController.$inject = ['$scope', '$state'];

	function ContactUsController ($scope, $state) {
		var vm = this;

		vm.pattern={
				"IN":{
					"regex":"^[0-9]{10}$"
				},
				"US":{
					"regex":"^[0-9]{9}$"
				},
				"UK":{
					"regex":"^[0-9]{10}$"
				}
		};

		vm.currentPattern="";

		vm.changePattern=function(){
			var countryCode  =  vm.countryCode;
			console.log("Country Code ",countryCode);
			vm.countryCode   =  null;
			vm.currentPattern=vm.pattern[countryCode].regex;
			console.log("Current Pattern ",vm.currentPattern);
		}
		
		vm.printFormData=function(){
			console.log("Form Data : ",$scope.form1);
			console.log("Form Phone Data : ",$scope.form1.phone);
			//console.log("Form Phone Data error : ",$scope.form1.phone.$error);
		}


	}
})();
