import './style.css'
import * as mt from "./modular-things/modular-things";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="http://modular-things.github.io/modular-things/" target="_blank">
      Modular Things Standalone
    </a>
    <div class="card">
      <button id="pairing" type="button">Pair Devices</button>
    </div>
    <div class="card" id="things">
      <button id="noDevice" type="button">No Things Yet</button>
    </div>
  </div>
`

// a button that lets us pair to devices,
let pairButton = document.querySelector<HTMLButtonElement>('#pairing')!;
pairButton.addEventListener('click', async () => {
  await mt.authorizePort();
})

// to listen in and render devices that we do have, 
// we can use this callback, 
mt.onThingListChange((things) => {
  console.log(things);
  let thingListElement = document.querySelector<HTMLElement>('#things')!;
  thingListElement.innerHTML = "";
  if(Object.keys(things).length == 0){
    thingListElement.innerHTML = `<button id="noDevice" type="button">No Things Yet</button>`;
  } else {
    for(let t in things){
      console.log(things[t]);
      thingListElement.innerHTML += `<button id="${things[t].name}" type="button">${things[t].name}</button>\n`;
    }
  }
})

// go ahead and startup things, 
await mt.begin();