function select(x)
{
    var subheading = document.getElementById("subheader-text");

    switch(x) {
        case 1:
            subheading.innerText = "View Profile Details";
            break;
        case 2:
            subheading.innerText = "Book/View Consultations ";
            break;
        case 3:
            subheading.innerText = "View Prescriptions";
            break;
        case 4:
            subheading.innerText = "View Medical Records";
            break;
        case 5:
            subheading.innerText = "View Vaccination Records";
            break;
        case 6:
            subheading.innerText = "Logout";
            break;
    };
}

function deselect(x)
{
    var subheading = document.getElementById("subheader-text");
    subheading.innerText = "Home";
}