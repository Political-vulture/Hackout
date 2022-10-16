const imageView = document.getElementById("img");
const textView = document.getElementById("title");
const episodeNo = document.getElementById("totalCount");
const statuss = document.getElementById("status");
const genre = document.getElementById("year");
const jojo = "another-anime";

fetch(`https://gogoanime.herokuapp.com/anime-details/${jojo}`)
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
        textView.innerHTML = json["animeTitle"];
        episodeNo.innerHTML = json["totalEpisodes"] + " Episodes";
        statuss.innerHTML = json["status"];
        imageView.src = `${json["animeImg"]}`;
        genre.innerHTML = json["releasedDate"];
    });