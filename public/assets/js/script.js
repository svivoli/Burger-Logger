$(function () {
    $(".devour").on("click", function (event) {
        const id = $(this).data("id");
        const devour = $(this).data("devour");
        const devouredState = {
            devoured: devour
        };
        if ($(this)[0].innerText === "DEVOUR!") {
            // Send the PUT request.
            $.ajax("/api/burgers/" + id, {
                method: "PATCH",
                data: devouredState
            }).then(function () {
                // Reload the page to get the updated list
                location.reload();
            });
        } else {
            $.ajax("/api/burgers/" + id, {
                type: "DELETE"
            }).then(function () {
                location.reload();
            });
            $(this)
                .parent()
                .remove();
        }
    });
});