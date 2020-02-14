window.onload = alertMe;

function alertMe() {
    messages = [
        "Saturday = Preston &#129374; Pancakes in the Park! 9 a.m. Saturday at the city park pavilion.",
        "Don't forget to go to the church this Sunday &#9962;"
        ]
    let today = new Date().getDay();
    let message = "";
    message = (today==5)? messages[0]: message;
    message = (today==6)? messages[1]: message;
    document.getElementById("alertBanner").innerHTML = message;
}

function toggleMenu () {
    
    document.getElementById("primaryNav").classList.toggle("hide");
 
 }

 function updateCurrentDate() {
    let options = {
        weekday: "long"
        ,day: "numeric"
        ,month: "long"
        ,year: "numeric"
        ,hour: "numeric"
        ,minute: "numeric"
    };
    // return new Date();
    return new Date().toLocaleDateString("en-Us", options)
}