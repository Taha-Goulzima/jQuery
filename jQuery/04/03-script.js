$('h1').click(function(){
    $('h1').css('color','purple');
})

$('button').click(function(){
    $('h1').css('color','green');
})

$('input').keypress(function(event){
    $('h1').text(event.key)
})