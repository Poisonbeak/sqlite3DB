window.addEventListener("DOMContentLoaded", e => {
    const [NToNButton, DeleteNToN, OneToNButton, DeleteOneToN, OneToOneButton, DeleteOneToOne] = document.querySelectorAll("button");

    NToNButton.addEventListener("click", e => {
        console.log(`Clicked on ${e.target.id}`);
        fetch("http://localhost:5000/N:N")
        .then(response => response.json())
        .then(message => {
            console.log(message);
        })
    })
    DeleteNToN.addEventListener("click", e => {
        console.log(`Clicked on ${e.target.id}`);
        fetch("http://localhost:5000/Delete/N:N")
        .then(response => response.json())
        .then(message => {
            console.log(message);
        })
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