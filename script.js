const url = "https://type.fit/api/quotes";
    fetch(url)
    .then(unconvertedQuotes => unconvertedQuotes.json())
    .then(convertedJson => {
        let data = convertedJson;

        console.log(data)

        function newQuote() {
            let randomQuote = Math.floor(Math.random() * (data.length));

            document.getElementById('container').innerHTML = data[randomQuote];
        }

        let btn = document.createElement('button');
        btn.innerHTML = 'Click for a new quote.';
        document.body.appendChild(btn);
        button.addEventListner('onclick', newQuote());
    })