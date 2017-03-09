const fs = require('fs')
const path = require('path')
const sizeOf = require('image-size');
const exec = require('child_process').exec;
var argv = require('yargs')
    .usage('Usage: $0 -d [string : absolute directory path that contains images] -iPhoneMaxWidth [number : max with for iPhone images] -iPhoneStatusBarHeight [number : height of IPhone status bar in pixels] -iPadStatusBarHeight [number : height of IPad status bar in pixels]')
    .demandOption(['d'])
    .argv;

var MAX_IPHONE_WIDTH = 1242;
var IPAD_STATUS_HEIGHT = 40;
var IPHONE_STATUS_HEIGHT = 50;


if(!argv.d){
	console.error("-d parameter is required !");
}

if(argv.iPhoneMaxWidth){
	MAX_IPHONE_WIDTH = argv.iPhoneMaxWidth;
}

if(argv.iPhoneStatusBarHeight){
	IPHONE_STATUS_HEIGHT = argv.iPhoneStatusBarHeight;
}

if(argv.iPadStatusBarHeight){
	IPAD_STATUS_HEIGHT = argv.iPadStatusBarHeight;
}

console.log("Use max width for IPhone images: " +  MAX_IPHONE_WIDTH + " pixels");
console.log("Use IPhone status bar's height: " +  IPHONE_STATUS_HEIGHT + " pixels");
console.log("Use IPad status bar's height: " +  IPAD_STATUS_HEIGHT + " pixels");

console.log("Cropping images in :" +  argv.d);

var exexOptions = {
	cwd: argv.d
};

getDirectories(argv.d);

function getDirectories (srcpath) {
  fs.readdir(srcpath, (err, files) => {
	  files.forEach(file => {
		handleFile(srcpath, file)
	  });
  });
}

function handleFile(dir, f){
	console.log("Found file : " + f);
	if(f && (f.toLowerCase().indexOf('.png') >= 0 || f.toLowerCase().indexOf('.jpg') || f.toLowerCase().indexOf('.jpeg') >= 0)){
		var oldPath = path.join(dir,f);
		var newPath = path.join(dir,'cropped_' + f);
		sizeOf(oldPath, function (err, dimensions) {
			var width = dimensions.width;
			var height = dimensions.height;
			var cmd = 'magick "{0}" -crop {1}x{2}+0+{4} "{3}"';
			cmd = cmd.replace('{0}', oldPath);
			cmd = cmd.replace('{1}', width);
			cmd = cmd.replace('{2}', height);
			cmd = cmd.replace('{3}', newPath);
			cmd = cmd.replace('{4}', width > MAX_IPHONE_WIDTH ? IPAD_STATUS_HEIGHT : IPHONE_STATUS_HEIGHT);
			console.log("Execute command : " + cmd);
			var process = exec(cmd , exexOptions ,function(error, stdout, stderr) {
				if(error){
					console.log(error);
					return;
				}
			});
			process.stdout.on('data', function(data) {
				console.log(data); 
			});
			process.stderr.on('data', function(data) {
				console.log(data); 
			});
		});
	}
};