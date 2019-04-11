var question1;
var question2;
var question3;
$(".results").hide();

$(".enter").click(function(){
 

question1 = $(".q1").val(); 
$(".name").html(question1+" ");

question3 = $(".q3").val(); 
$(".age").html(question3+" ");

question2 = $(".q2").val(); 
$(".fruit").html(question2);

var q4 = parseInt(question3)+20;

$(".age2").html(q4+" ");

$(".results").show();
$("inputs").text("");
});