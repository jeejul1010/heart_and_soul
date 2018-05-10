var img;

function preload(){
  img=loadImage("assets/heartandsoul.jpg");
}

function setup() {
  createCanvas(img.width, img.height);
}

function draw() {
  img.loadPixels();
  loadPixels();
  var mx = mouseX;
  var my = mouseY;
  for(var y=0; y<img.height; y++){
    for(var x=0; x<img.width; x++){
      var index = (y * img.width + x) * 4;
      var r = img.pixels[index];
      var g = img.pixels[index+1];
      var b = img.pixels[index+2];
      var a = img.pixels[index+3];
      
      if(dist(mx, my, x, y) < 80){
        r = 255 - r;
        b = 255 - b;
        g = 255 - g;
      }
      pixels[index] = r;
      pixels[index+1] = g;
      pixels[index+2] = b;
      pixels[index+3] = a;
    }
  }
  updatePixels();
}
