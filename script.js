'use strict';
const btn = document.querySelector('.btn-card');
const countriesContainer = document.querySelector('.countries');

/* 
const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};


const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};


*/
///////////////////////////////////////
// Our First AJAX Call: XMLHttpRequest

const getChampionData = function (agentUuid) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://valorant-api.com/v1/agents/${agentUuid}`);
  request.send();

  request.addEventListener('load', function () {
    const data = JSON.parse(this.responseText);
    console.log(data);
    const html = `
    
  <article class="card">
    <img class="card__img" src="${data.data.displayIcon}" />
    <div class="card__data">
    <h3 class="agent-name">${data.data.displayName}</h3>
      <h3 class="agent-title">${data.data.developerName}</h3>
      <h4 class="agent-description">${data.data.description}</h4>
      <p class="card__row"><span>🕹️</span>${data.data.role.displayName}</p>
      <p class="card__row"><span>🔶</span>${data.data.role.description}</p>
      <p class="card__row"><span>🔉</span>Agent Sound<audio controls class="agent-sound"><source src="${data.data.voiceLine.mediaList[0].wave}" type="audio/wav"></audio></p>
    </div>
  </article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getChampionData('dade69b4-4f5a-8528-247b-219e5a1facd6');
getChampionData('f94c3b30-42be-e959-889c-5aa313dba261');
getChampionData('5f8d3a7f-467b-97f3-062c-13acf203c006');
getChampionData('7f94d92c-4234-0a36-9646-3a87eb8b5c89');
getChampionData('9f0d8ba9-4140-b941-57d3-a7ad57c6b417');
getChampionData('a3bfb853-43b2-7238-a4f1-ad90e9e46bcc');
getChampionData('569fdd95-4d10-43ab-ca70-79becc718b46');
getChampionData('add6443a-41bd-e414-f6ad-e58d267f4e95');
getChampionData('95b78ed7-4637-86d9-7e41-71ba8c293152');
getChampionData('95b78ed7-4637-86d9-7e41-71ba8c293152');
getChampionData('8e253930-4c05-31dd-1b6c-968525494517');
getChampionData('bb2a4828-46eb-8cd1-e765-15848195d751');
getChampionData('601dbbe7-43ce-be57-2a40-4abd24953621');
getChampionData('117ed9e3-49f3-6512-3ccf-0cada7e3823b');
getChampionData('6f2a04ca-43e0-be17-7f36-b3908627744d');
getChampionData('320b2a48-4d9b-a075-30f1-1f93a9b638fa');
getChampionData('1e58de9c-4950-5125-93e9-a0aee9f98746');
getChampionData('707eab51-4836-f488-046a-cda6bf494859');
getChampionData('41fb69c1-4189-7b37-f117-bcaf1e96f1bf');
getChampionData('22697a3d-45bf-8dd7-4fec-84a9e28c69d7');
getChampionData('eb93336a-449b-9c1b-0a54-a891f7921d69');

// getChampionData('320b2a48-4d9b-a075-30f1-1f93a9b638fa');
// const agentCard = document.querySelector('.country');
// if (agentCard) {
//   agentCard.addEventListener('click', function () {
//     console.log('asdfasdf');
//   });
// }
