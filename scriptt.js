function onClick(e) {
  e.preventDefault();
  // get form values
  let song = document.getElementById('song').value;
  let artist = document.getElementById('artist').value;

  // setup URL
  let url = "https://api.lyrics.ovh/v1/" + artist + "/" + song;
  // call API

let goodInput = true;

  fetch(url)
    .then(function(response) {

      if (response.status != 200) {
        goodInput = false;
        return {
          text: "Incorrect input"
        }
      }

      return response.json();
    }).then(function(json) {
      console.log(json);

      let results = "";
      if (goodInput === false) {
        results = "<p>" + "Song not found" + "</p>";
      }
      else if (goodInput === true) {
        results += '<h1>' + song + " by " + artist + "</h1><br>";
        let lyrics = json.lyrics;

        results += "<p>" + lyrics + "</p>";

      }

      document.getElementById('result').innerHTML = results;
    });
}
function updateResult(info) {
  document.getElementById('result').textContent = info;
}

document.getElementById('woo').addEventListener('click', onClick);

/*use this api: https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song/search */
