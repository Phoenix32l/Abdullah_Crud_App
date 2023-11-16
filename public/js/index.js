$("#add_tasks").submit(function(event){
    alert("Task Created")
})


$("#update_tasks").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })


    var request = {
        "url" : `http://localhost:3000/api/tasks/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
    })
})


if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/api/tasks/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Confirm?")){
            $.ajax(request).done(function(response){
                alert("Data Deleted");
                location.reload();
            })
        }
    })
}