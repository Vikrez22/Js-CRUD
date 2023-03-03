let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log("button clicked");
    formValidation();
});

// formvalidation function

let formValidation = ()=>{
    if(input.value === ""){
        msg.innerHTML = "Your Post can't be blank, use ur num.6";
        console.log("failure");
    } 
    else {
       console.log("success");
       msg.innerHTML = "";
       acceptData();
    }
};

//Accept and store data

let data = {};

let acceptData = () => {
    data["text"] = input.value;
    console.log(data); 
    createPost();
};

//upload data
let createPost = () => {
    posts.innerHTML += 
    ` <div>
    <p>${data.text}</p>
    <span class="options">
        <i onClick="editPost(this)"><i class=" fa-solid fa-pen-to-square"></i></i>
        <i onClick="deletePost(this)"><i class=" fa-solid fa-trash"></i></i>
    </span>
</div>
`;  
//reset the form
input.value = "";
};

//delete
let deletePost = (e) => {
    e.parentElement.parentElement.remove();
};

//update
let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
}