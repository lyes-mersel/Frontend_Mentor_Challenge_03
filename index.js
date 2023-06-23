var starsNumber = 0;

$(".star-btn").on("click", (event) => {
    if (starsNumber != 0) {
        $(".btn-clicked").removeClass("btn-clicked");
    }
    starsNumber = $(event.target).text();
    $(event.target).addClass("btn-clicked");
})

$(".submit-btn").on("click", () => {
    if (starsNumber != 0) {
        $("#rating-state").toggleClass("hide");
        $("#thx-state").toggleClass("hide");
        $("#thx-state h2").html("You selected " + starsNumber + " out of 5")
    }
})