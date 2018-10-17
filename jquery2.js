

// Un tableau qui va contenir toutes tes images.
    var images = new Array();
    images.push("1.jpg");
    images.push("2.jpg");
    images.push("3.jpg");

    var imgId = 0;
    var direction='next';

    function ChangerImage(direction){
        document.getElementById("image").src = images[imgId];

       /* if(imgId < images.length-1){
            imgId++;
        }
        else{
            imgId = 0;
        }*/

       if(direction =='next'){
           imgId++;
           if(imgId > images.length-1){
               imgId=0;
           }

       } else if (direction =='previous') {
           imgId--;
           if(imgId<0){
               imgId=images.length-1;
           }

       }
           }

        window.setInterval(function() {
            ChangerImage('next')}, 3000);



$(function(){

    ChangerImage('next');

    $( "#previous" ).click(function() {
        ChangerImage('previous');
    });
    $( "#next" ).click(function() {
        ChangerImage('next');
    });

});


