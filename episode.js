const imageView = document.getElementById("img");
const textView = document.getElementById("title");
const episodeNo = document.getElementById("totalCount");
const statuss = document.getElementById("status");
const genre = document.getElementById("year");
const animeid = "one-piece";

// async function getAnimeData(){
//     const response = await fetch(`https://gogoanime.herokuapp.com/anime-details/${animeid}`);
//     const json = await response.json();
//     console.log(json.message);
//     textView.innerText = json.message["animeTitle"];
//     episodeNo.innerText = json.message["episodesAvaliable"];
//     statuss.innerText = json.message["status"];
//     imageView.src = '${json.message["animeImg"]};' 
// }

// getAnimeData();

// fetch(`https://gogoanime.herokuapp.com/anime-details/${animeid}`)
// .then((response) => {
//     return response.json();
// })
// .then((item) => {
//     data = item.data
//     console.log(data)

//     if (data && data.length > 0) {
//         data.map((item) => {
//             console.log(item)
//             const imageView = document.getElementById("img");
//             const textView = document.getElementById("title");
//             const episodeNo = document.getElementById("totalCount");
//             const statuss = document.getElementById("status");
//             const genre = document.getElementById("year");

//             textView.innerText = json.message["animeTitle"];
//             episodeNo.innerText = json.message["episodesAvaliable"];
//             statuss.innerText = json.message["status"];
//             imageView.src = `${json.message["animeImg"]}`;
//             genre.innerText = json.message["releasedDate"];
//         })

//     }
// });
fetch(`https://gogoanime.herokuapp.com/anime-details/${animeid}`)
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
        textView.innerHTML = json["animeTitle"];
        episodeNo.innerHTML = json["totalEpisodes"] + " Episodes";
        statuss.innerHTML = json["status"];
        imageView.src = `${json["animeImg"]}`;
        genre.innerHTML = json["releasedDate"];
    });

