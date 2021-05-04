$(function(){
 $(":input").css("backgroundColor","yellow");
   
    $(':text').css('backgroundColor','gray');
    $(':password').css('backgroundColor','gray');
    $(':radio').parent().css('backgroundColor','red');
    $(':checkBox:checked').parent().css('backgrondColor','green');
    $(':text').val($('option:selected')).text()+'Este é ';
});
