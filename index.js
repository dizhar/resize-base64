if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(search, pos) {
	  return this.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
  };
}

function resizeBase64(base64String, maxWidth, maxHeight, successCallback, errorCallback) {
  if(base64String === undefined) {
	  errorCallback('The input parameter base64String is undefined.');
  } else if(base64String === null) {
	  errorCallback('The input parameter base64String is null.');
  } else if(typeof(base64String) != 'string') {
	  errorCallback('The input parameter base64String is not of type \'string\'.');
  } else if(!base64String.startsWith('data:image')) {
	  errorCallback('The input parameter base64String does not start with \'data:image\'.');
  } else if(maxWidth === undefined) {
	  errorCallback('The input parameter maxWidth is undefined.');
  } else if(maxWidth === null) {
	  errorCallback('The input parameter maxWidth is null.');
  } else if(typeof(maxWidth) != 'number') {
	  errorCallback('The input parameter maxWidth is not of type \'number\'.');
  } else if(maxWidth < 2) {
	  errorCallback('The input parameter maxWidth must be at least 2 pixel.');
  }	else if(maxHeight === undefined) {
	  errorCallback('The input parameter maxHeight is undefined.');
  }	else if(maxHeight === null) {
	  errorCallback('The input parameter maxHeight is null.');
  } else if(typeof(maxHeight) != 'number') {
	  errorCallback('The input parameter maxHeight is not of type \'number\'.');
  } else if(maxHeight < 2) {
	  errorCallback('The input parameter maxHeight must be at least 2 pixel.');
  } else {
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
  }
};

export { resizeBase64 };