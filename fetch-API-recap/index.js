const summonBtn = document.querySelector('#summon');
const pond = document.querySelector('#pond');
const addForm = document.querySelector('#add-form');

const renderDucks = (ducksArray) => {
    // console.log('You clicked the summon button!');
    pond.innerHTML = '';
    console.log(ducksArray);
    ducksArray.forEach(({ imgUrl, name, quote }) => {
        pond.innerHTML += `<div class="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
        <img
        src=${imgUrl}
        alt=${name} />
        </figure>
        <div class="card-body">
        <h2 class="card-title">${name}</h2>
        <p>${quote}</p>
        </div>
        </div>`;
    });
};

const errorHandler = (error) => {
    console.error(error);
    const h2 = document.createElement('h2');
    h2.classList.add(
        'inline-block',
        'm-auto',
        'text-6xl',
        'mb-6',
        'text-red-600'
    );
    h2.textContent = error;
    pond.appendChild(h2);
};

// summonBtn.addEventListener('click', () => {
//     // console.log('You tried to summon the ducks');
//     fetch('https://duckpond-89zn.onrender.com/ducks')
//         .then((res) => {
//             if (!res.ok) throw new Error(`${res.status} Something went wrong!`);
//             console.log(res);
//             return res.json();
//         })
//         .then((data) => renderDucks(data))
//         .catch((err) => errorHandler(err));
// });

summonBtn.addEventListener('click', async () => {
    // console.log('You tried to summon the ducks');
    try {
        const res = await fetch('https://duckpond-89zn.onrender.com/ducks');
        console.log(res);
        if (!res.ok) throw new Error(`${res.status} Something went wrong!`);
        const data = await res.json();
        renderDucks(data);
    } catch (err) {
        errorHandler(err);
    }
});

addForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name');
    const imgUrl = document.getElementById('img-url');
    const quote = document.getElementById('quote');

    try {
        const res = await fetch('https://duckpond-89zn.onrender.com/ducks', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                name: name.value,
                imgUrl: imgUrl.value,
                quote: quote.value,
            }),
        });
        console.log(res);
        if (!res.ok) throw new Error(`${res.status} Something went wrong!`);
        const data = await res.json();
        console.log(data);

        renderDucks(data);
    } catch (err) {
        errorHandler(err);
    }
    addForm.reset();
});
