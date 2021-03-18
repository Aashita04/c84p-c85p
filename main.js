canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height =70;
car1_image="car1.png";
car1_x =10;
car1_y =10;

car2_width = 120;
car2_height =70;
car2_image="car2.png";
car2_x =10;
car2_y =100;

bg_image="car race track1.jpg";

function add(){
    bg_image=new Image();
    bg_image.onload=upload_background;
    bg_image.src=background_image;

    car1_img=new Image();
    car1_img.onload= uploadcar1;
    car1_img.src=car1_image;

    car2_img=new Image();
    car2_img.onload= uploadcar2;
    car2_img.src=car2_image;
}

function uploadbackground() {
    ctx.drawImage(bg_image,0,0,canvas.width,canvas.height);
}

function upload_car1() {
    ctx.drawImage(car1_img,car1_x,car1_y,car1_width,car1_height);
}

function upload_car2() {
    ctx.drawImage(car2_img,car2_x,car2_y,car2_width,car2_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e) {

    keypressed=e.keyCode;
    console.log(keypressed);
    
    if (keypressed=='38'){

        car1_up();
        console.log("Up key is pressed.");
    }

    if (keypressed=='37'){

        car1_left();
        console.log("Left key is pressed.");
    }

    if (keypressed=='39'){

        car1_right();
        console.log("Right key is pressed.");
    }

    if (keypressed=='40'){

        car1_down();
        console.log("Down key is pressed.");
    }

    if (keypressed=='87'){

        car2_up();
        console.log("W key is pressed.");
    }

    if (keypressed=='83'){

        car2=_down();
        console.log("S key is pressed.");
    }

    if (keypressed=='65'){

        car2_left();
        console.log("A key is pressed.");
    }

    if (keypressed=='68'){

        car2_right();
        console.log("D key is pressed.");
    }

}

function car1_up(){
    if (car1_y > 0){
        car1_y= car1_y-10;
        console.log("When up is pressed x= "+ car1_x+" and Y = " + car1_y);
        upload_background();
        upload_car1();
    }
}

function car1_down(){
    if (car1_y <= 500){
        car1_y= car1_y+10;
        console.log("When down is pressed x= "+ car1_x+" and Y = "+ car1_y);
        upload_background();
        upload_car1();

    }
}

function car1_left(){
    if (car1_x > 0){
        car1_x= car1_x-10;
        console.log("When left is pressed x= "+ car1_x+" and Y = "+ car1_y);
        upload_background();
        upload_car1();
    }
}

function car1_right(){
    if (car1_x <= 700){
        car1_x= car1_x+10;
        console.log("When right is pressed x= "+ car1_x+" and Y = "+ car1_y);
        upload_background();
        upload_car1();
    }
}

function car2_up(){
    if (car2_y > 0){
        car2_y= car2_y-10;
        console.log("When w is pressed x= "+ car2_x+" and Y = " + car2_y);
        upload_background();
        upload_car2();
    }
}

function car2_down(){
    if (car2_y <= 500){
        car2_y= car2_y+10;
        console.log("When s is pressed x= "+ car2_x+" and Y = "+ car2_y);
        upload_background();
        upload_car2();

    }
}

function car2_left(){
    if (car2_x > 0){
        car2_x= car2_x-10;
        console.log("When a is pressed x= "+ car2_x+" and Y = "+ car2_y);
        upload_background();
        upload_car2();
    }
}

function car2_right(){
    if (car2_x <= 700){
        car2_x= car2_x+10;
        console.log("When d is pressed x= "+ car2_x+" and Y = "+ car2_y);
        upload_background();
        upload_car2();
    }
}