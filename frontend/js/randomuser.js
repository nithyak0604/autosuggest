function random(){
    /* fetch is used to make a network request to the API and get the data */
    fetch("https://randomuser.me/api/")
    /* .then is used to handle the response from the API */
    .then(function(res) {
        /* res.json() is used to convert the response to json format */
        return res.json();
    })
    .then(function(data){
        var user=data.results[0];
        //var fullName=user.name.title+" "+user.name.first+" "+user.name.last;
        document.getElementById("user-img").src=user;
        document.getElementById("user-name").innerText=fullName;
        document.getElementById("user-gender").innerText=user.gender;
    })
    .catch(function(error){
        console.log("Error: "+error);
    })
}