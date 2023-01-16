const notf = document.querySelector('.notification')
const markAll = document.querySelector('.mark-all')
const unread = document.querySelectorAll('.unread')


notf.innerText=unread.length

markAll.addEventListener("click",()=>{
unread.forEach(message => {
    message.classList.remove("unread")
});
const newunread=document.querySelectorAll(".unread")
notf.innerText=newunread.length
})


unread.forEach(message=>{
        message.addEventListener(("click"),()=>{
            message.classList.remove("unread")
           const newunread=document.querySelectorAll(".unread")
notf.innerText=newunread.length 
    })

})