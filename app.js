let search;
async function starWarSearch() {
    const name = document.createElement('p');
    const birth_year = document.createElement('p');
    const resultsDiv = document.querySelector(`.output-here`);
    resultsDiv.classList.add(`result`);
    try {
        console.log(`GET successful`);
        const star1 = await axios.get(`https://swapi.dev/api/people/?search=${search}`);
        console.log(star1.data.results);
        resultsDiv.innerHTML = 
        `<div>
        <p>Name: ${star1.data.results[0].name}</p>
        <p>Birth Year: ${star1.data.results[0].birth_year}</p>
        <p>Eye Color: ${star1.data.results[0].eye_color}</p>
        <p>Weight: ${star1.data.results[0].mass} kg</p>
        <p>Height: ${star1.data.results[0].height} cm</p>
        </div>`;
    } catch (err){
        console.log(`GET failed`);
        console.log(err);
        resultsDiv.innerHTML = 
        `<div>
            <p>Nothing found for "${search}."  Please try Another search term.</p>
        </div>`;
    }
}


const form = document.querySelector(`form`)
form.addEventListener(`submit`, (s) => {
    s.preventDefault();
    const searchParam = document.querySelector(`input`);
    search = searchParam.value;
    starWarSearch();
    searchParam.value = ``;
});