var bookmarkName= document.getElementById("bookmarkName");
var bookmarkURL= document.getElementById("bookmarkURL");
var bookMarkList=[];

var submitBtn=document.getElementById("submitBtn");

if(localStorage.getItem("bookMarkList")==null){
    bookMarkList=[];
}else{
    bookMarkList=JSON.parse(localStorage.getItem("bookMarkList"));
    console.log(bookMarkList);
    display(bookMarkList);

}

function submit(){

    var bookMark={
        name:bookmarkName.value,
        URL:bookmarkURL.value,
    }
bookMarkList.push(bookMark);
display(bookMarkList);
localStorage.setItem("bookMarkList",JSON.stringify(bookMarkList));
clearForm();
}

function clearForm(){
    bookmarkName.value="";
    bookmarkURL.value="";
}

function display(list){
    var cartona=``;
    for (var i=0;i<list.length;i++){
       cartona+=` <tr>
        <td>${i+1}</td>
        <td>${list[i].name}</td>
        <td>
          <button onclick="visit ('${list[i].url}')" class="btn btn-warning btn-visit">
            <i class="fa-solid fa-eye pe-2"></i>
            Visit
          </button> </td>
        <td>
          <button onclick="deletebookMark(${i})" class="btn btn-danger btn-delete pe-2">
            <i class="fa-solid fa-trash-can"></i>
            Delete
          </button>
        </td>
    </tr>`;
    }
    document.getElementById("tbody").innerHTML=cartona;
}

function deletebookMark(index){
    console.log("delete");
    bookMarkList.splice(index,1);
    localStorage.setItem("bookMarkList",JSON.stringify(bookMarkList));
    console.log(bookMarkList);
    display(bookMarkList);
}
var regx=/^[A-Za-z]{1,}$/
function validate() {
  if(regx.test(bookmarkName.value)){
    return true;
  }else{
    return false;
  }
}

var regx2=/^(https:\/\/)?(www\.)?[A-Za-z0-9_\.]{1,}\.[A-Za-z]{3}$/
function validateURL() {
  if(regx2.test(bookmarkURL.value)){
    return true;
  }else{
    return false;
  }
}



var mybtn=document.querySelectorAll(".bookmark-body button");
var lightBox=document.querySelector("#box");

for(i=0;i<mybtn.length;i++){
  
    mybtn[i].addEventListener("click",function(){
      if(`bookmarkName.value=""
      bookmarkURL.value=""`){
      box.classList.replace("d-none","d-flex");
  }
})

}

function visit(url){
  window.open(url);
}
closeBtn.addEventListener("click",closeSlider)
function closeSlider(){
  box.classList.replace("d-flex","d-none")
}