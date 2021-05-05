var count = 0;

$(document).ready(function () {
    $("#plus").click(function () {
        if(counter < 5) {
        count++;
        $("input").val(count);
        }
    });
});

var count = 0;

$(document).ready(function () {
    $("#moins").click(function () {
        //if (counter > 0){
        count--;
        $("input").val(count);
   // }
    });
});

