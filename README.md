# Custom Props Extension

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
