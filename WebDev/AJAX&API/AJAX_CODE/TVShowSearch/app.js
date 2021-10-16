// const form = document.querySelector('#searchForm');
// form.addEventListener('submit', async function (e) {
//     e.preventDefault();
//     const searchTerm = form.elements.query.value;
//     const config = { params: { q: searchTerm } }
//     const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
//     makeImages(res.data)
//     form.elements.query.value = '';
// })

// const makeImages = (shows) => {
//     for (let result of shows) {
//         if (result.show.image) {
//             const img = document.createElement('IMG');
//             img.src = result.show.image.medium;
//             document.body.append(img)
//         }
//     }
// }


const form = document.querySelector('#searchForm');
const resultsDiv = document.querySelector('#results'); // selecting the results div that we created in the HTML code

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    resultsDiv.innerHTML = ""; // this will clear any potential previous results from the results div
    const searchTerm = form.elements.query.value;
    document.body('img').remove();
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    //const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`);
    // way to do on line 28 is not recommended as a link might have a lot of calls
    makeImages(res.data);
    form.elements.query.value = '';
})

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img)
        }
    }
}