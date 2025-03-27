window.addEventListener("DOMContentLoaded", e => {
    const [NToNButton, DeleteNToN, OneToNButton, DeleteOneToN, OneToOneButton, DeleteOneToOne] = document.querySelectorAll("button");

    NToNButton.addEventListener("click", e => {
        console.log(`Clicked on ${e.target.id}`);
    })
    DeleteNToN.addEventListener("click", e => {
        console.log(`Clicked on ${e.target.id}`);
    })

    OneToNButton.addEventListener("click", e => {
        console.log(`Clicked on ${e.target.id}`);
    })
    DeleteOneToN.addEventListener("click", e => {
        console.log(`Clicked on ${e.target.id}`);
    })

    OneToOneButton.addEventListener("click", e => {
        console.log(`Clicked on ${e.target.id}`);
    })
    DeleteOneToOne.addEventListener("click", e => {
        console.log(`Clicked on ${e.target.id}`);
    })
})