

let myImage = document.querySelector('.image');
let images = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/12.jpg", "images/5.jpg", "images/6.jpg", 
"images/7.jpg", "images/8.jpg", "images/11.jpg"
]
let i =0;
// src="images/1.jpg"

function slider()
{
    myImage.setAttribute('src', images[i])
    if(i == images.length-1){
        i=0;
    }else{
        i++;
    }


    setTimeout(function(){
        slider();
    }, 2000)

}

slider();


