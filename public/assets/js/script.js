$(function () {
    $(".devour").on("click", function (event) {
        const id = $(this).data("id");
        const devour = $(this).data("devour");
        const devouredState = {
            devoured: devour
        };
            // Send the PUT request.
            $.ajax("/api/burgers/" + id, {
                type: "PUT",
                data: devouredState
            }).then(function () {
                // Reload the page to get the updated list
                location.reload();
            });

    });
});