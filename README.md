# remove-status-bar
Remove status bar from ios simulator screenshots

remove-status-bar
========
NodeJS script to remove status bars from iOS simulator's screenshots

ImageMagick® is required and it should be added to your environment PATH variable. This is the version I have :

Version: ImageMagick 7.0.3-10 Q16 x64 2016-12-11 http://www.imagemagick.org
Copyright: Copyright (C) 1999-2015 ImageMagick Studio LLC
License: http://www.imagemagick.org/script/license.php
Visual C++: 180040629
Features: Cipher DPC Modules OpenMP
Delegates (built-in): bzlib cairo flif freetype jng jp2 jpeg lcms lqr openexr pangocairo png ps rsvg tiff webp xml zlib


Parameters
========
Usage:
-------------------------------------------------------------------
$0 *-d* [string : required : absolute directory path that contains images] *-iPhoneMaxWidth* [number : optional : max with for iPhone images] *-iPhoneStatusBarHeight* [number : optional : height of IPhone status bar in pixels] *-iPadStatusBarHeight* [number : optional : height of IPad status bar in pixels]

-iPhoneMaxWidth : Use to differentiate between iPhone and iPad because screenshots of IPhone and IPad might have different status bar height. Default : 1242 Pixels

-iPhoneStatusBarHeight : Height of status bar for IPhone, this will be cropped from the screenshot's image. Default : 50 Pixels

-iPadStatusBarHeight : Height of status bar for IPad, this will be cropped from the screenshot's image. Default : 40 Pixels

Examples
========
```
node remove-status-bar.js -d "C:\screenshots"
```









