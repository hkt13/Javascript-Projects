const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const movies= document.querySelector("#movie-box")
    const getmovies=async(url)=>{
  const response= await fetch(url);
  const data= await response.json()
  showmovies(data)
 }

 const showmovies=(data)=>{
    movies.innerHTML="";//phlese jo hai unko clear kr do//agr nhi likhoge toh movies search ki hui ya nhi hoga agr search toh movies existing ones ke niche niche add hoti ja rhi append hoti ja rhi hai ye kaam isiliye hu rha hai kyuki hm hmare id movies mein append krwa rhe hai
    //this above statement will empty the movie box jo movie box hai usko phle khaali kr do phir new data daalo toh yeh har baar hm showmovies function ko starting mein bol rhe hai
data.results.forEach((el) => {
    const box= document.createElement("div")
    box.classList.add("box")
    box.innerHTML=`
    <img src="${IMGPATH + el.poster_path}" alt="">
    <div class="overlay">
            <div id="title">
        <h2>${el.original_title}</h2>
        <span>${el.vote_average}</span>
            </div>
            <h3>Overview:</h3>
            <p>
            ${el.overview}
            </p>
        </div>
    
    `
    movies.appendChild(box)
});

 }
document.getElementById("search-box").addEventListener("keyup",function (event) {
    if(event.target.value!=""){
    getmovies(SEARCHAPI+event.target.value)//yha this.value bhi likh skte the// toh jaisi hi tarfet.value mein kch likha toh woh jo search api ke usme qyuery ke baad concatenate hota rhega ar getmovies function call hota rhega and then getmovies api fetch krega ar api fetch krke show movies ko call krta rhega(data milega showmovies ko ar showmovies us data pr saara kaam krta rhega) word likhte likhte search hota rhega..toh searching ke lie wapas se kch nhi chlana pdega
    }
    else
    {
        getmovies(APIURL)
    }
})

    getmovies(APIURL)