
    $(".navbar-burger").on("click", function(event) {
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    })
    const porfolioCard = $(".portfolioContainer");
    porfolioCard.on("click", function() {
      console.log($(this).data("value"))
      console.log("hello");
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
