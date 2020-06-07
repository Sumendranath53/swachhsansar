const fetchedData = fetch('https://api.airvisual.com/v2/countries?key=770dda25-9658-4bc0-8997-60d9f218a47e')

.then((response) => {
    return response.json();
})

.then((data) =>
    {
       console.log(data);
    });




    // 1151f178829c2e069af6e0d19ed2c682187ac0e1
