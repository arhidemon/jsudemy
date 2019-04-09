function learnJS(lang,callbak) {
    console.log('Я учу ' + lang);
    callbak();
}

function done() {
    console.log('Я прошел 3й урок!');
}

learnJS('JavaScript', done());