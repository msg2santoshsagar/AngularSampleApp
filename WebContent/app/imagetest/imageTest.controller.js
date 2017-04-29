(function() {
	'use strict';

	angular
	.module('angularSampleApp')
	.controller('ImageTestController', ImageTestController);

	ImageTestController.$inject = ['$scope', '$state','SelectFileService'];

	function ImageTestController ($scope, $state,SelectFileService) {
		var vm = this;
		vm.image={};
		vm.image.imageSrc="";
		vm.image.imageName="Name";
		
		var IMAGE_ALLOWED_TAG="image/*";
		

		console.log("Image Test Controller");

		vm.handleFile=function(){
			SelectFileService.selectFile(IMAGE_ALLOWED_TAG,true).then(
					function(image){
						vm.image.imageSrc=image;
						
						var canvasElement=document.getElementById("canvas1");
						canvasElement.width  = 540;
						canvasElement.height = 360;
						
						var imageObj=new Image();
						
						imageObj.onload=function(){
							var ctx=canvasElement.getContext("2d");
							ctx.drawImage(imageObj,0,0,540,360);
							
						}
						imageObj.src=image;
						
						console.log("Canvas 1 Element :: ",canvasElement);
						
						
						
					},function(errImage){
						console.log("Image Load Error Found  : ",errImage);
					}
			);
		}
		
		
		
		
		/*var fileElement = document.getElementById("imgFile");

		fileElement.onchange=function(e){
			var imageFile=fileElement.files[0];
			console.log("Image is loaded : ",imageFile);
			
			
			var reader = new FileReader();
			reader.onload = function(img) {
	            var imageActualSource=img.target.result;
	            toDataURL(imageActualSource,function(data){
	            	//console.log("Image Data From to data url ",data);
	            	vm.image.imageSrc=data;
	            	console.log("Imge Src ",vm.image.imageSrc);
	            })
	         };
	         reader.readAsDataURL(imageFile);
			
			


		}



		function toDataURL(src,callback,outputFormat) {
			var img = new Image();
			img.crossOrigin = 'Anonymous';
			img.onload = function() {
				var canvas = document.createElement('CANVAS');
				var ctx = canvas.getContext('2d');
				var dataURL;
				canvas.height = this.height;
				canvas.width = this.width;
				ctx.drawImage(this, 0, 0);
				dataURL = canvas.toDataURL(outputFormat);
				callback(dataURL);
			};
			img.src = src;
			if (img.complete || img.complete === undefined) {
        	    img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
        	    img.src = src;
        	  }
		}*/





	}
})();
