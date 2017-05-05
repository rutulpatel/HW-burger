$(document).ready(function() {

    function loadToEatData() {
        $.get("/api/all?devoured=false", function(data) {
            // console.log(data);
            $("#to-eat-container").empty();
            for (var i = 0; i < data.length; i++) {

                var div = $("<div>");
                var input = $("<input>")
                    .attr({ "type": "text", "disabled": "", "value": data[i].burger_name });
                var button = $("<button>")
                    .attr({ "class": "btn btn-danger btn-sm devour-it-btn", "data-index": data[i].id, "id": "devour_" + data[i].id }).text("Devour it!");

                div.html(input).append(button);
                $("#to-eat-container").append(div);
            }

            $(".devour-it-btn").on("click", function() {
                var clickedData = { data: ["devoured", true, "id", $(this).attr("data-index")] };
                $.ajax({
                    method: "PUT",
                    url: "/api/all",
                    data: clickedData
                }).done(function() {
                    loadData();
                });
            });
        });
    }

    function loadEatenData() {
        $.get("/api/all?devoured=true", function(data) {
            // console.log(data);
            $("#eaten-container").empty();
            for (var i = 0; i < data.length; i++) {

                var div = $("<div>");
                var input = $("<input>")
                    .attr({ "type": "text", "disabled": "", "value": (i + 1) + ". " + data[i].burger_name });
                div.html(input);
                $("#eaten-container").append(div);
            }
        });
    }

    function addBurger(burgerName) {
        if (burgerName && burgerName != "") {
            var data = { "burgerName": burgerName };
            $.post("/api/new", data, function(result) {
                $("#burgerName").val("");
                loadData();
            });
        } else {
            alert("Please enter a burger name...");
        }
    }

    $("#submitBtn").on("click", function() {
        addBurger($("#burgerName").val());
    });

    function loadData() {
        loadToEatData();
        loadEatenData();
    }

    loadData();
});