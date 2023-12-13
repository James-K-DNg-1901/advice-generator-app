const dice_btn = document.getElementById('dice-btn');
const advice_id = document.getElementById('advice-id');
const advice_value = document.getElementById('advice-value');

const webApi = 'https://api.adviceslip.com/advice';

dice_btn.addEventListener('click', function () {
  fetch(webApi, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        advice_value.innerhtml = "Error."
      }
    })
    .then(data => {
        console.log(data);
        advice_id.innerHTML = data.slip.id;
        advice_value.innerHTML = data.slip.advice;
    })
});