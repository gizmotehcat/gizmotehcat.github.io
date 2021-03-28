
$("document").ready(() => {
    //jquery click events for elevator navigation system
    $(".nav_elevator").on('click', () => {
        $('.nav_elevator').removeClass("ele_active");
        $('.innermost_wrapper').addClass( "hidden" );
        $("body").removeClass("level0 level1 level2 level3");
    });

    $("#zero").on('click', () => {
        $('#zero').addClass( "ele_active" );
        $('.welcome_wrapper').removeClass("hidden");
        $("body").addClass("level0");
        $(".pb_class").css("color", "rgb(31, 15, 76)");
        $(".vertical_class").css("color", "rgb(255, 255, 255)");
    });

    $("#one").on('click', () => {
        $('#one').addClass( "ele_active" );
        $('.techstack_wrapper').removeClass("hidden");
        $("body").addClass("level1");
        $(".pb_class").css("color", "rgb(255, 255, 255)");
        $(".vertical_class").css("color", "rgb(31, 15, 76)");
    });

    $("#two").on('click', () => {
        $('#two').addClass( "ele_active" );
        $("body").addClass("level2");
        $(".pb_class").css("color", "rgb(255, 255, 255)");
        $(".vertical_class").css("color", "rgb(31, 15, 76)");
    });

    $("#three").on('click', () => {
        $('#three').addClass( "ele_active" );
        $("body").addClass("level3");
        $(".pb_class").css("color", "rgb(255, 255, 255)");
        $(".vertical_class").css("color", "rgb(31, 15, 76)");
    });

        
});