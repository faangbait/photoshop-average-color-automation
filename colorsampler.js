#target photoshop

if (app.documents.length > 0) {

var myDocument = app.activeDocument;

var color0= myDocument.colorSamplers[0].color;
var color1= myDocument.colorSamplers[1].color;
var color2= myDocument.colorSamplers[2].color;
	
var newRGB = new RGBColor();

newRGB.red = (color0.rgb.red+color1.rgb.red+color2.rgb.red)/3;
newRGB.green = (color0.rgb.green+color1.rgb.green+color2.rgb.green)/3;
newRGB.blue = (color0.rgb.blue+color1.rgb.blue+color2.rgb.blue)/3;
	
var newColor= new SolidColor();

newColor.rgb=newRGB;

app.foregroundColor = newColor;


};