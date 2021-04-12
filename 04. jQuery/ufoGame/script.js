/* In js:
document.getElementByID("spaceship");
in jQuery
$('#spaceship)
*/
$(document).ready(function(){

    var spaceship = $('#spaceship');

    //Changing css via jQuery
    spaceship.css({     //css function
        'position' : 'absolute',  // Which is static by default
        'left' : 500,
        'top': 200,
        'width': 160,
        'height': 120
    })
    
    //Now i want to change the spaceship position using my keys
    var ismovingRight = false;
    var ismovingDown = false;
    var ismovingUp = false;
    var ismovingLeft = false;
    //keydown event
    $(document).on("keydown", function(e){
        /*Cheaking keyCode */
        console.log(e.keyCode)
       
       var kc = e.keyCode;
       if(kc == 39){
          ismovingRight = true;
       }
       if(kc == 40){
           ismovingDown = true;
       }
       if(kc == 37){
        ismovingLeft = true;
        }
        if(kc == 38){
            ismovingUp = true;
        }
    });
    
       
    //keyup event
    $(document).on("keyup", function(e){
       var kc = e.keyCode;
        if(kc == 39){
          ismovingRight = false;
        }
        if(kc == 40){
        ismovingDown = false;
        }
        if(kc == 37){
         ismovingLeft = false;
        }
        if(kc == 38){
          ismovingUp = false;
        }
    });


    //writing function for smooth flow of spaceship
    var speed = 6
    function move(){
        if(ismovingRight){
            spaceship.css('left', (spaceship.position().left + speed))
        }
        if(ismovingDown){
            spaceship.css('top', (spaceship.position().top + speed))
        }
        if(ismovingUp){
            spaceship.css('top', (spaceship.position().top  -speed))
        }
        if(ismovingLeft){
            spaceship.css('left', (spaceship.position().left - speed))
        }
    }      
    
    setInterval(move , 10)

});

// Can also be used to make snake games