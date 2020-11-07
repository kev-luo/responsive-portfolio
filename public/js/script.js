$(document).ready(function () {
    $(".navbar-burger").on("click", function(event) {
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    })

    $("#projectDemo").on("click", function(event) {
        event.preventDefault();
        $("#projectModal").addClass("is-active");
    })

    $("#weatherDemo").on("click", function(event) {
        event.preventDefault();
        $("#weatherModal").addClass("is-active");
    })

    $("#quizDemo").on("click", function(event) {
        event.preventDefault();
        $("#quizModal").addClass("is-active");
    })

    $(".modal-background").on("click",function(event) {
        event.preventDefault();
        $(".modal").removeClass("is-active");
    })

    $(".modal-close").on("click",function(event) {
        event.preventDefault();
        $(".modal").removeClass("is-active");
    })
});