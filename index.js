if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(search, pos) {
	  return this.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
  };
}

function validateInput(base64String, maxWidth, maxHeight) {
	let validationResult = {
		isValid: false,
		errorMessage: 'An error occurred.'
	};

	if(!base64String) {
		validationResult.errorMessage = 'The input parameter base64String is ' + base64String + '.';
	} else if(typeof(base64String) != 'string') {
		validationResult.errorMessage = 'The input parameter base64String is not of type \'string\'.';
	} else if(!base64String.startsWith('data:image')) {
		validationResult.errorMessage = 'The input parameter base64String does not start with \'data:image\'.';
	} else if(!maxWidth) {
		validationResult.errorMessage = 'The input parameter maxWidth is ' + maxWidth + '.';
	} else if(typeof(maxWidth) != 'number') {
		validationResult.errorMessage = 'The input parameter maxWidth is not of type \'number\'.';
	} else if(maxWidth < 2) {
		validationResult.errorMessage = 'The input parameter maxWidth must be at least 2 pixel.';
	} else if(!maxHeight) {
		validationResult.errorMessage = 'The input parameter maxHeight is ' + maxHeight + '.';
	} else if(typeof(maxHeight) != 'number') {
		validationResult.errorMessage = 'The input parameter maxHeight is not of type \'number\'.';
	} else if(maxHeight < 2) {
		validationResult.errorMessage = 'The input parameter maxHeight must be at least 2 pixel.';
	} else {
		validationResult.isValid = true;
		validationResult.errorMessage = null;
	}

	return validationResult;
}

function resizeBase64(base64String, maxWidth, maxHeight, successCallback, errorCallback) {
	let validationResult = validateInput(base64String, maxWidth, maxHeight);

	if(validationResult.isValid === true) {
		// Create and initialize two canvas
		let canvas = document.createElement("canvas");
		let ctx = canvas.getContext("2d");
		let canvasCopy = document.createElement("canvas");
		let copyContext = canvasCopy.getContext("2d");

		// Create original image
		let img = new Image();
		img.src = base64String;

		img.onload = function() {
			// Determine new ratio based on max size
			let ratio = 1;
			if(img.width > maxWidth) {
			ratio = maxWidth / img.width;
			} else if(img.height > maxHeight) {
			ratio = maxHeight / img.height;
			}

			// Draw original image in second canvas
			canvasCopy.width = img.width;
			canvasCopy.height = img.height;
			copyContext.drawImage(img, 0, 0);

			// Copy and resize second canvas to first canvas
			canvas.width = img.width * ratio;
			canvas.height = img.height * ratio;
			ctx.drawImage(canvasCopy, 0, 0, canvasCopy.width, canvasCopy.height, 0, 0, canvas.width, canvas.height);

			successCallback(canvas.toDataURL());
		};

		img.onerror = function() {
			errorCallback('Error while loading image.');
		};
	} else {
		errorCallback(validationResult.errorMessage);
	}
};

export { resizeBase64 };