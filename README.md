# resize-base64

Functions that resize a Base64 image. Pass a Base64 string of an image, the maximum width, the maximum size, a success callback, and an error callback to the function. The function returns the resized image in the success callback.

| Function | Description |
| ------ | ----------- |
| resizeBase64ForMaxWidth | resizes an image to the maximum width, the aspect ratio of the image is maintained |
| resizeBase64ForMaxHeight | resizes an image to the maximum height, the aspect ratio of the image is maintained |
| resizeBase64ForMaxWidthAndMaxHeight | resizes an image to the maximum width and maximum height, the aspect ratio of the image is not maintained |

Every function takes the parameters listed below.

| Parameter | Description |
| ------ | ----------- |
| base64String | the image to resize as a Base64 string |
| maxWidth | the maxmium width that the image should be resized to |
| maxHeight | the maxmium height that the image should be resized to |
| successCallback | the callback that contains the resized image as a Base64 string |
| errorCallback | the callback that contains the error that occurred during resizing |

## Restrictions

* The function can only be used in frontend code.
* Since enlarging images is not desirable due to the loss of quality, the function does not support it. Create a feature request for enlarging images if necessary.

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

See https://github.com/hendrik-scholz/resize-base64-angular-example for details.

### Vue

See https://github.com/hendrik-scholz/resize-base64-vue-example for details.

## Test

The tests in the test folder have to be run with the following lines commented out in the index.js:

```
export { resizeBase64ForMaxWidth };
export { resizeBase64ForMaxHeight };
export { resizeBase64ForMaxWidthAndMaxHeight };
```

## Example

```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<script src="../index.js"></script>
<script type="text/javascript">
	let base64Image_320x240 = 'data:image/jpeg;base64,/9j/4AAQSk...';
	let maxWidth = 2;
	let maxHeight = 120;
	
	let successCallback = function(resizedImage) {
		document.getElementById('originalImage').src = base64Image_320x240;
		document.getElementById('resizedImage').src = resizedImage;
	};
	
	let errorCallback = function(errorMessage) {
		alert(errorMessage);
	};
	
	resizeBase64ForMaxHeight(base64Image_320x240, maxWidth, maxHeight, successCallback, errorCallback);
</script>
</head>
<body>
	<img id="originalImage">

	<img id="resizedImage">
</body>
</html>
```

See test/resizeBase64ImageFrom320x240ToMaxHeight120.html for details.