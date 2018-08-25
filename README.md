# resize-base64

A function that resizes a Base64 image. Pass a Base64 string of an image, the maximum width, the maximum size, a success callback, and an error callback to the function. The function returns the resized image in the success callback.

| Parameter | Description |
| ------ | ----------- |
| base64String | the image to resize as a Base64 string |
| maxWidth | the maxmium width that the image should be resized to |
| maxHeight | the maxmium height that the image should be resized to |
| successCallback | the callback that contains the resized image as a Base64 string |
| errorCallback | the callback that contains the error that occurred during resizing |


## Restrictions

The function can only be used in frontend code. 

## Installation

```
bower install https://github.com/hendrik-scholz/resize-base64/archive/master.zip
```

```
npm install https://github.com/hendrik-scholz/resize-base64/#master
```

Add the following line to your package.json and call 'npm install' from the directory
where your package.json is saved.

```
"resize-base64": "https://github.com/hendrik-scholz/resize-base64/#master"
```

## Usage

### Angular

Add the following line to the TS file to import the resize function.

```
import { resizeBase64 } from 'resize-base64';
```

Call the resize function as shown in the example below.

See https://github.com/hendrik-scholz/resize-base64-angular-example for details.

## Test

Tests have to be run with 'export { resizeBase64 };' commented out in the index.js.

## Example

```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<script src="../index.js"></script>
<script type="text/javascript">
	let base64Image_320x240 = 'data:image/jpeg;base64,/9j/4AAQSk...';
	let maxWidth = 75;
	let maxHeight = 75;
	
	let successCallback = function(resizedImage) {
		document.getElementById('originalImage').src = base64Image_320x240;
		document.getElementById('resizedImage').src = resizedImage;
	};
	
	let errorCallback = function(errorMessage) {
		alert(errorMessage);
	};
	
	resizeBase64(base64Image_320x240, maxWidth, maxHeight, successCallback, errorCallback);
</script>
</head>
<body>
	<img id="originalImage">

	<img id="resizedImage">
</body>
</html>
```

See test/resizeBase64ImageFrom320x240ToMax75x75.html for details.