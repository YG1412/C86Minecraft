var canvas = new fabric.Canvas('myCanvas');
block_img_width = 30;
block_img_height = 30;
player_x = 10;
player_y = 10;
var player_object= "";
var block_img_width
function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
        top:player_y,
        left:player_x
    });
        canvas.add(player_object);


    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_img_object = Img;

        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(block_img_object);


    });
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e)
{
    keypressed = e.keyCode;
    console.log(keypressed);
    if(e.shiftKey == true && keypressed == '80')
    {
        console.log("p and shift are pressed together ");
        block_img_width = block_img_width + 10;
        block_img_height = block_img_height + 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }

    if(e.shiftKey == true && keypressed == '77')
    {
        console.log("m and shift are pressed together ");
        block_img_width = block_img_width - 10;
        block_img_height = block_img_height - 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }

    if(keypressed == '38')
    {
      up();
      console.log("up");

    }

    
    if(keypressed == '40')
    {
      down();
      console.log("down");
      
    }

    
    if(keypressed == '37')
    {
      left();
      console.log("left");
      
    }

    
    if(keypressed == '39')
    {
      right();
      console.log("right");
      
    }

    
    if(keypressed == '87')
    {
      new_image('wall.jpg');
      console.log("w");
      
    }

    if(keypressed == '71')
    {
      new_image('ground.png');
      console.log("g");
      
    }

    if(keypressed == '76')
    {
      new_image('light_green.png');
      console.log("l");
      
    }

    if(keypressed == '84')
    {
      new_image('trunk.jpg');
      console.log("t");
      
    }

   
    if(keypressed == '82')
    {
      new_image('roof.jpg');
      console.log("r");
      
    }

    if(keypressed == '89')
    {
      new_image('yellow_wall.jpg');
      console.log("y");
      
    }

    if(keypressed == '68')
    {
      new_image('dark_green.jpg');
      console.log("d");
      
    }

    if(keypressed == '85')
    {
      new_image('different.jpg');
      console.log("u");
      
    }

    if(keypressed == '67')
    {
      new_image('cloud.jpg');
      console.log("c");
      
    }



}