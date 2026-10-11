const dark = document.querySelector('.js-moon');
const light = document.querySelector('.js-sun');
 function setDarkmode()  {
   document.body.classList.add('dark-mode');
   document.querySelector('.js-sun').classList.remove('hidden');
   document.querySelector('.js-moon').classList.add('hidden');
 }
 function setLightMode(){
  document.body.classList.remove('dark-mode');
   document.querySelector('.js-sun').classList.add('hidden');
   document.querySelector('.js-moon').classList.remove('hidden');
 }
 dark.addEventListener('click', () => {
  setDarkmode()
 });
 light.addEventListener('click', ()=> {
  setLightMode()
 })


 const API_KEY = '4bef0c4b713c8a5673a0711a0888d84f'; 
const API_URL = 'https://v3.football.api-sports.io/fixtures?live=all';


const teamName1 = document.getElementById('name');
const teamName2 = document.getElementById('name1');
const scoreText = document.getElementById('score');
const matchStatus = document.querySelector('.live');
const teamImg1 = document.querySelector('.imges');
const teamImg2 = document.querySelector('.imges1');
const leagueName = document.querySelector('.league-name');


async function fetchFootballData() {
    try {
        const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'v3.football.api-sports.io',
                'x-rapidapi-key': API_KEY
            }
        });

        const data = await response.json();

        
        if (data.response && data.response.length > 0) {
            
            const match = data.response[0];

          
            leagueName.innerText = match.league.name;

            
            teamName1.innerText = match.teams.home.name;
            teamName2.innerText = match.teams.away.name;

          
            scoreText.innerText = `${match.goals.home} - ${match.goals.away}`;

          
            teamImg1.src = match.teams.home.logo;
            teamImg2.src = match.teams.away.logo;

            
            matchStatus.innerHTML = `<div class="live-dot"></div> ${match.fixture.status.elapsed}'`;
            
        } else {
          
            leagueName.innerText = "No Live Matches Right Now";
            scoreText.innerText = "0 - 0";
        }

    } catch (error) {
        console.error("Error fetching football data:", error);
        leagueName.innerText = "Error loading data";
    }
}
fetchFootballData();
const btn = document.querySelector('.toggle-btn');
const nav = document.querySelector('.nav');
 btn.addEventListener("click", ()=> {
    nav.classList.toggle('menu')
 })