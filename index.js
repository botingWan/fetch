
fetch('https://restcountries.eu/rest/v2/region/europe')
    .then(function (response) {
        return response.json();
    })
    .then(function (countries) {
        countries.forEach(function (country) {
            const countryNode = document.createElement('div');
            countryNode.className = 'country';
            countryNode.innerHTML = `
                    <div class='container'>
                        <img class='flag' src=${country.flag} />
                    </div>
            `
            // const countryFlag = document.createElement('img');
            // countryFlag.src = country.flag;
            // countryNode.appendChild(countryFlag);
            document.getElementById('result').appendChild(countryNode);
        })

    })
