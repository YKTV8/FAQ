// const toggle = document.querySelectorAll('.faq')
// //console.log(toggle)

// toggle.forEach((toggle)=>{
//     toggle.addEventListener('click',()=>{
//     removeActive()
//     toggle.classList.add('active')

// })
// })
// function removeActive(){
//     toggle.forEach(toggle=>{
//         toggle.classList.remove('active')
//     })
// }

const toggleThru = document.querySelectorAll('.faq-toggle')

toggleThru.forEach(toggle =>{
    toggle.addEventListener('click', () =>{
        toggle.parentNode.classList.toggle('active')
        })
})