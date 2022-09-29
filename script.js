function getAdvice() {

    fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
        .then(data => {
            document.getElementById('error').innerText = '';
            document.getElementById('advice').innerText = `"${data.slip.advice}"`
            document.getElementById('number').innerText = data.slip.id
        }
        ).catch(err => {
            console.log(err);
            document.getElementById('error').innerText = 'Network problem. Try reconnecting...'
        }
        )
}

getAdvice();  





