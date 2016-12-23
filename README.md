## When passing an image base64 as first argument to the function, it returns the base64 of the resized image. maxWidth and maxHeight are optional.

####  What is it for?
`If you have a base64 image and you would like to resize it, this function will return a base64 image resizes to your height and width specifications.`


#### How do I install it?
`npm install resize-base64  --save`

`bower install resize-base64 --save`


#### How do I use it?
```
var resizebase64 = require('resizebase64');  

var  img = resizebase64(base64, maxWidth, maxHeight); 

```


