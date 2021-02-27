const hideMenu = function(page) {
    $( "#home_wrapper" ).fadeOut( "slow" );
    $( "#" + page).delay(700).fadeIn( "slow" );
}

$( ".menu_button" ).click(function() {
    $( "#about_wrapper" ).fadeOut("slow");
    $( "#projects_wrapper" ).fadeOut("slow");
    $( "#contact_wrapper" ).fadeOut("slow");
    $( "#experience_wrapper" ).fadeOut("slow");
    $( "#home_wrapper" ).delay(700).fadeIn("slow");
});

$( "#about" ).click(function(){
    hideMenu("about_wrapper");
});

$( "#experience" ).click(function(){
    hideMenu( "experience_wrapper" );
});

$( "#projects" ).click(function(){
    hideMenu( "projects_wrapper" );
});

$( "#contact" ).click(function(){
    hideMenu( "contact_wrapper" );
});
