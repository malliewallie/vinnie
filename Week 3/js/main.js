$.ajax({
    url: 'template-parts/content.php',

beforeSend: function(){
$('body').append('<div class="overlay"></div>');
$('.overlay').append('<div class="loading"></div>');
},  
success: function(data){
    $('body').append(data);

    $(data).on('load', function (){
        $('.overlay').fadeOut();
    })
  
  }

});