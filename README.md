# Splotch
###### 117 color schemes and 468 variations


## Install
```
npm install splotch
```

## Usage
	1. Link to splotch on html page
```html
<link rel="stylesheet" type="text/css" href="./node_modules/splotch/splotch.min.css">	
```
	2. To use on the whole page
```html
<body class"mint-1">
```
	3. To use different varieties (each class has four variations)
```html
<div class='mint-1'></div>
<div class='mint-2'></div>
<div class='mint-3'></div>
<div class='mint-4'></div>
```
[List of classes availible](https://git-clay.github.io/splotch/)  

## Coming soon
- colors extending past just text

## Color classes by category
[Check out the classes you can use](https://git-clay.github.io/splotch/)  
Each class has four variations. The syntax is classname dash number(1,2,3,4) ex:`class='icecream-1'` or `class='seafoam-4'`



## ERROR?
- If using React with webpack you might come across `Resource interpreted as Stylesheet but transferred with MIME type text/html: "http://localhost:3000/node_modules/splotch/splotch.min.css"`
- fix: Instead of linking to 'Splotch' in you index.html file you will need to set up your webpack.config.js file to handle css. npm install css-loader and style-loader. In your config file, add `module: {
    loaders: [{ test: /\.css$/, loader: 'style-loader!css-loader'}]`
then add `import splotch from "./node_modules/splotch/splotch.min.css"` to your main React js file.