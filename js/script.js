function validation() {
    var title = document.getElementById("title").value.trim();
    var price = document.getElementById("boxOffice").value.trim();
    var dateOfLaunch = document.getElementById("dateOfLaunch").value;
    var inStock = document.getElementsByName("inStock");
    var category= document.getElementById("category").value;


    if (title == "") {
        alert("Please enter the Title.");
        return false;
    }
    if (!(title.length > 1 && title.length < 100)) {
        alert("The Title should have 2 to 100 characters!");
        return false;
    }

    if (price == "") {
        alert("Please enter the boxOffice.");
        return false;
    }
    if (!price.match(/^\d+$/)) {
        alert("boxOffice has to be a number");
        return false;
    }


    isChecked = false;

    for (let i = 0; i < inStock.length; i++) {
        if (inStock[i].checked == true) {
            isChecked = true;
        }
    }
    if (isChecked == false) {
        alert("Please select Active status!");
        return false;
    } 

    if (dateOfLaunch == "") {
        alert("Please enter the Date of Launch!");
        return false;
    }
  
    if (category == "Select") {
        alert("Please select one Genres");
        return false;
    }

    else {
        location.href = "edit-movie-status.html";
    }
    return false;
}