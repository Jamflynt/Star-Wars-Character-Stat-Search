async function starWarSearch() {
    try {
        console.log(`GET successful`);
        const star1 = await axios.get(`https://swapi.dev/api/people/?search=${search}`);
        console.log(star1.data.results);

    } catch (err){
        console.log(`GET failed`);
        console.log(err);
    }
}
starWarSearch();

let search;
const resultDiv = document.querySelector(`.results`);
const output = document.createElement('p');
const body = document.querySelector(`body`);
body.append(output);

const form = document.querySelector(`form`)
form.addEventListener(`submit`, (s) => {
    s.preventDefault();
    const searchParam = document.querySelector(`input`);
    search = searchParam.value;
    starWarSearch();
    searchParam.value = ``;
});