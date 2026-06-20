//Assign ID to every element which needs to be used in JS. (Get data, Set data,Display/Hide)
//Assign class to every element which needs to be used in CSS. (Styling, Display/Hide)
//Use dash seperated names for class and id. (user-img, user-name, user-gender,etc..)

//Steps:
//1. Create an HTML page  with- (Tags-h1,input,p,span,div), (HTML entities- gear,bullet,lens,clock)
//2. Create a CSS file and link it to the HTML file. (Styling, Display/Hide)
//3. Create a JS file and link it to the HTML file. (Get data, Set data,Display/Hide)

var API_URL="https://autosuggest-backend.onrender.com/api/autosuggest";

var searchbar=document.getElementById("search-bar");
var searchsuggestions=document.getElementById("search-suggestions");

//This event listener is used to listen for the input event on the search bar. Whenever the user types something in the search bar, this event listener will be triggered and the function inside it will be executed.
//Input is taken such that it shows in the suggestions when user types something in the search bar.
//Get the data which user types
//Call API to get the suggestions based on the input
//Put this data as query in the API URL and make a fetch request to the API.
//API call
//Append them into UI (search suggestions - div tag) so that user can see the suggestions.
searchbar.addEventListener("input",function(){
    var query=searchbar.value.trim();
    console.log(query);
    fetchSuggestions(query);
})

//API call
//Append them into UI (search suggestions - div tag) so that user can see the suggestions.
function fetchSuggestions(query){
    var fullAPI=API_URL+ "?q=" + query + "&weighted=true&algorithm=trie&limit=8";
    fetch(fullAPI)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        // console.log(data);
        showSuggestions(data);
    })
    .catch(function(error){
        console.log("Error: "+error);
    });
}

function showSuggestions(data){
    var values=data.results;
    if(data.count==0){
        searchsuggestions.innerHTML="<div>No results found</div>";
    }
    else{
        var htmlString="";
        for(var i=0;i<values.length;i++){
            htmlString+="<div><span class='suggestion-item'>"+values[i].text+"</span><span class='suggestion-description'>"+values[i].description+"</span></div>";
        }
        searchsuggestions.innerHTML=htmlString;
    }
}
