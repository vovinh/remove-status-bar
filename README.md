# remove-status-bar
Remove status bar from ios simulator screenshots

remove-status-bar
========
NodeJS script to remove status bars from iOS simulator's screenshots

Parameters
========
Usage:
-------------------------------------------------------------------
$0 -d [string : required : absolute directory path that contains images] -iPhoneMaxWidth [number : optional : max with for iPhone images] -iPhoneStatusBarHeight [number : optional : height of IPhone status bar in pixels] -iPadStatusBarHeight [number : optional : height of IPad status bar in pixels]

-iPhoneMaxWidth : Use to differentiate between iPhone and iPad because screenshots of IPhone and IPad might have different status bar height. Default : 1242 Pixels

-iPhoneStatusBarHeight : Height of status bar for IPhone, this will be cropped from the screenshot's image. Default : 50 Pixels

-iPadStatusBarHeight : Height of status bar for IPad, this will be cropped from the screenshot's image. Default : 40 Pixels

Examples
========
*** node remove-status-bar.js -d "C:\screenshots"










