/*Array of user objects is used so that when toggle button is clicked, the user details can be changed to the next user in the array. */
var users=[
{
    "name":"John Doe",
    "gender":"Male",
    "image":"../images/card.png"
},
{
    "name":"Jane Doe",
    "gender":"Female",
    "image":"../images/image.png"
}
]

var currId= 0;
function toggle(){
    /* Toggle the currId from 0->1 and 1-->0. This is done using the modulus operator. */
    currId=(currId+1)%2;

    /*giving id to the elements in the html file so that they can be accessed and modified using javascript. */
    var user=users[currId];
    document.getElementById("user-img").src=user.image;
    
    /*innerHTML is used to change the content of the element & innerText is used to change the text content */
    document.getElementById("user-name").innerText=user.name;
    document.getElementById("user-gender").innerText=user.gender;
}