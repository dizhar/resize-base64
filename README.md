# resize-base64

A function that resizes a Base64 image. Pass a Base64 string of an image, the maximum width, the maximum size, and a callback to the function and it returns the resized image as soon as the resizing is done.

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

## Example

```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<script src="../src/index.js"></script>
<script type="text/javascript">
	let base64Image_320x240 = 'data:image/jpeg;base64,/9j/4AAQSk...';
	let maxWidth = 75;
	let maxHeight = 75;
	
	let callback = function(image) {
		document.getElementById('smallImage').src = image;
	}
	
	resizebase64(base64Image_320x240, maxWidth, maxHeight, callback);
</script>
</head>
<body>
	<img id="smallImage">
</body>
</html>
```

See test/resizeBase64ImageFrom320x240ToMax75x75.html for details.