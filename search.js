const searchBar = document.getElementById("gay");
// const animeList = document.getElementById("");
let searchResults = [];

// function enterKeyPressed(e) {
//     this.value=e.target.value;
//     // if (e.keyCode == 13) {

//     //         const searchString = document.getElementById("gay").value;
//     //         // fetch(`https://gogoanime.herokuapp.com/search?keyw=${searchString}`)
//     //         //     .then((response) => response.json())
//     //         //     .then((animelist) => console.log(animelist));
//     //     }; 
//     // }
// }
 
function searchFunc(){
    // e.preventDefault();
    let searchString = searchBar.value;
    console.log("called")
    //const searchString = document.getElementById("gay").value;
    fetch(`https://gogoanime.herokuapp.com/search?keyw=${searchString}`)
        .then((response) => response.json())
        .then((animelist) => console.log(animelist));
    return false;
};

// searchBar.addEventListener('keyup', (e) => {
//     const searchString = e.target.value;
//     fetch(`https://gogoanime.herokuapp.com/search?keyw=${searchString}`)
//         .then((response) => response.json())
//         .then((animelist) => console.log(animelist));
// }); 