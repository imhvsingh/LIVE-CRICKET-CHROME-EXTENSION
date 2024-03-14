async function getMatchData() {

    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=42dc1b1d-5240-499c-aad1-6fc96d165a57&offset=0")
        .then(data => data.json())
        .then(data => {
            if (data.status != "success") return;

            const matchesList = data.data;

            if (!matchesList) return [];

            //add your api key from cricketdata.org
            const relevantData = matchesList.filter(match => match.series_id == "{your_api_key}").map(match => `${match.name}, ${match.status}`);

            console.log({ relevantData });

            document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match} </li>`).join('');

            return relevantData;

        })
        .catch(e => console.log(e));
}

getMatchData();