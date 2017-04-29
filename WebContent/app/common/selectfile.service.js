(function() {
	'use strict';

	angular
	.module('angularSampleApp')
	.service('SelectFileService', SelectFileService);

	SelectFileService.$inject = ['$q'];

	function SelectFileService ($q) {

		this.selectFile=function(fileType,isMultiple){

			var deferred = $q.defer();

			var input=document.createElement('input');

			input.type="file";
			input.accept=fileType;

			if(isMultiple){
				input.multiple="multiple"
			}

			input.onchange=function(e){
				var file=input.files[0];
				if(file==null){
					console.log("Slect file service :: File Found Null, Returning");
					return;
				}

				var reader = new FileReader();
				reader.onload = function(img) {
					deferred.resolve(img.target.result);
				};
				reader.readAsDataURL(file);
			}
			input.click();
			return deferred.promise;
		}


	}
})();
