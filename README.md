# NativeScript Badge Button Plugin
Creates a native UIButton with a badge component. Currently only supported on iOS. 

### Getting Started
* `npm install nativescript-badge-button --save`
*  Add the `BadgeButton` element to your `Page` tag: 
```
xmlns:BadgeButton="nativescript-badge-button"
```
*  Use the element on your page: 
```
<BadgeButton:BadgeButton text="Button with Badge" badgeValue="1" badgeOriginX="450" />
```

### Available Properties
|Property|Type|Default|
|---|---|---|
badgeBGColor|UIColor|redColor
badgeTextColor|UIColor|whiteColor
badgeFont|UIFont|systemFontOfSize:12.0
badgePadding|number|6
badgeMinSize|number|8
badgeOriginX|number|0
badgeOriginY|number|-4
shouldHideBadgeAtZero|boolean|true
shouldAnimateBadge|boolean|true

### Demo
* Note: Incremental badge is animated, but recording tool can only capture 4 fps.
![Image](http://g.recordit.co/7HbsdiPnS1.gif)

### Known Issues
* Positioning of the badge is incorrect when rotating the device
* OriginX of the badge does not auto calculate based on the button text

### Credits
* https://github.com/mikeMTOL/UIBarButtonItem-Badge
* https://github.com/TanguyAladenise/BBBadgeBarButtonItem
