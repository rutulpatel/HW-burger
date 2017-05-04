$(document).ready(function() {

    $("#submitBtn").on("click", function() {
        alert("clicked");
    });

    function loadToEatData() {
        $.get("/api/all?devoured=false", function(data) {
            console.log(data);

            for (var i = 0; i < data.length; i++) {

                var div = $("<div>");
                var input = $("<input>")
                    .attr({ "type": "text", "disabled": "", "value": data[i].burger_name });
                var button = $("<button>")
                    .attr({ "class": "btn btn-danger btn-sm" }).text("Devour it!");

                div.html(input).append(button);
                $("#to-eat-container").append(div);
            }
        });
    }

    function loadEatenData() {
        $.get("/api/all?devoured=true", function(data) {
            console.log(data);

            for (var i = 0; i < data.length; i++) {

                var div = $("<div>");
                var input = $("<input>")
                    .attr({ "type": "text", "disabled": "", "value": (i + 1) + ". " + data[i].burger_name });
                div.html(input);
                $("#eaten-container").append(div);
            }
        });
    }

    loadToEatData();
    loadEatenData();
});