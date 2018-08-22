resizebase64 = function(base64, maxWidth, maxHeight, callback) {

  // Max size for thumbnail
  if(typeof(maxWidth) === 'undefined')  maxWidth = 500;
  if(typeof(maxHeight) === 'undefined')  maxHeight = 500;

  // Create and initialize two canvas
  let canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");
  let canvasCopy = document.createElement("canvas");
  let copyContext = canvasCopy.getContext("2d");

  // Create original image
  let img = new Image();
  img.src = base64;
  
  img.onload = function() {
	  // Determine new ratio based on max size
	  let ratio = 1;
	  if(img.width > maxWidth)
	    ratio = maxWidth / img.width;
	  else if(img.height > maxHeight)
	    ratio = maxHeight / img.height;

	  // Draw original image in second canvas
	  canvasCopy.width = img.width;
	  canvasCopy.height = img.height;
	  copyContext.drawImage(img, 0, 0);

	  // Copy and resize second canvas to first canvas
	  canvas.width = img.width * ratio;
	  canvas.height = img.height * ratio;
	  ctx.drawImage(canvasCopy, 0, 0, canvasCopy.width, canvasCopy.height, 0, 0, canvas.width, canvas.height);

	  callback(canvas.toDataURL());
  };
}