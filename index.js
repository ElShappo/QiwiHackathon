let data = fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    .then(response => response.json())
    .then(response => console.dir(response));