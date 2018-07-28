# Custom Props Extension

> This plugin is no longer maintained. Custom Property technology has come a long way and is supported natively in many major browsers. I have built an ES6 Class which offers many of this plugins features and more... without being a dependancy of custom-props. Check it out here: [Custom Properties.](https://github.com/marknotton/custom-properties)

Using Custom-props, this plugin adds a couple features to make it even easier to query custom properies

http://www.yearofmoo.com/2015/04/cross-browser-custom-css-properties.html

## Installation

```
bower install custom-props-extension --save
```

## Usage

Returns all custom properties on the body
```
$.customproperty()
```

Returns all custom properties on the main element
```
$('main').customproperty()
```

Returns a specific custom properties on the main element
```
$('main').customproperty('myCustomProperyName')
```

Returns a range or custom properties on the main element
```
$('main').customproperty(['myCustomProperyName', 'anotherCustomProperyName'])
```
