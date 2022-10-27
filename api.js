const url =
  `http://api.themoviedb.org/3/trending/all/week?api_key=9fcf7a3dcf6947a420682da4c7f85220&language=en-US`;
  //facing error while trying to access "api_key=${process.env.API_KEY}"
var arr = [];
var poster_path = "https://image.tmdb.org/t/p/w500";
function fetcData() {
  fetch(url)
    .then((respone) => respone.json())
    .then((data) => {
      // data.forEach(element => {
      //     arr.push(element.results)
      // });
      for (let key in data.results) {
        arr.push(data.results[key]);
      }
      // console.log(arr[0].name);
      let card = "";
      arr.forEach((element, index) => {
        card += `
        <div class="col-md-6">
        <div class="card text-white mb-3">
        <div class="row no-gutters">
        <div class="col-md-4">
          <img src="${
            poster_path + element.poster_path
          }" class="card-img" alt="${element.name}" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${
              element.name ? element.name : element.title
            }</h5>
            <p class="card-text">
            ${element.overview}
            </p>
            <p class="card-text">
              <small class="text-muted">Released on: ${
                element.first_air_date
                  ? element.first_air_date
                  : element.release_date
              }, Rating: ${element.vote_average}</small>
            </p>
          </div>
        </div>
      </div>
      </div></div>
        `;

        let cardElement = document.getElementById("movie");
        if (arr.length != 0) {
          cardElement.innerHTML = card;
        } else {
          cardElement.innerHTML = `<h3>No movies available</h3>`;
        }
      });
    })
    .catch((error) => console.log(error));
}

fetcData();
console.log(arr);
