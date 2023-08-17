const addbtn = document.querySelector("button");
const main =document.querySelector(".main");
addbtn.addEventListener("click",function(){
    addnote();
})


// saving notes
const savenotes=()=>{
    const notedata =document.querySelectorAll(".note textarea");
    const emptyarray=[];
    notedata.forEach( note=> {
        emptyarray.push(note.value)
    });
    console.log(emptyarray);

    if (emptyarray.length===0){
        //all the selected items will be removed from the local storage
        localStorage.removeItem("notedata");
    }else{

            // to add the  defined value inside the local storage 
    localStorage.setItem("notedata",JSON.stringify(emptyarray))
    }


}
 


// creating the note inside javascript using createelement function
const addnote =(text="")=>{
    const note= document.createElement('div');
    //adding any class using classlist.add function
    note.classList.add("note");
    note.innerHTML= `<div class="tool">
    <i class="  fas fa-save save"></i>
    <i class=" fas fa-trash-alt delete"></i>
</div>

<textarea>${text}</textarea>
`;
// value of text = ${text}

//to delete the whole note selecing the icons which are present inside the note
note.querySelector('.delete').addEventListener("click", function(){
    note.remove();
    savenotes();
    
})
//to save the whole note selecting the save icon
note.querySelector('.save').addEventListener('click',function(){
    savenotes();
})
//auto save
note.querySelector('textarea').addEventListener("focusout",function(){
    savenotes();
})
main.appendChild(note);

}





function showsavednotes (){
    //parse is used to convert ino a arrayobject so that we can run a loop
const lsnote = JSON.parse(localStorage.getItem('notedata'));
if (lsnote === null){
    addnote();
}else{
lsnote.forEach((lsnote) => {
    addnote(lsnote);
    });
}
}showsavednotes()