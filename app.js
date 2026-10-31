const photo = (name, alt) => ({ src: `assets/photos/${name}`, alt });

const places = [
  {
    name: 'Beijing', english: 'BEIJING', chapters: [
      { start: 0, title: 'Tsinghua Arts & Design\nGraduation Exhibition', eyebrow: 'BEIJING · 01', description: 'I visited the graduation exhibition at Tsinghua University’s Academy of Arts & Design. There were installations, illustrations, ceramics, and models. As I wandered through, I found myself imagining the stories behind each piece.' },
      { start: 5, title: 'Everyday Life\nand Poniu', eyebrow: 'BEIJING · 02', description: 'I wanted to keep a little piece of everyday life here, too. Poniu is my green-eyed tabby and my little darling. I also have a mug that looks just like her; seeing it always brings her to mind.' }
    ], photos: [
      photo('2050843cd10e2fefe4f6411aca601c26.jpg','An installation at the graduation exhibition'), photo('6f8a746b59f1cc1d15987461dc009ce7.jpg','Illustrations at the graduation exhibition'), photo('a29036c49a37c9e359520b9bd4bc0ad6.jpg','A ceramic piece shaped like a bird'), photo('71022cb57e6d658e10f02cca00c0a922.jpg','A black cat sculpture in the exhibition'), photo('a5377714b71bc6fc9883b7fa2d0eecf5.jpg','A lunar rover model at the exhibition'),
      photo('5da9aeada0b0978d9579dffd1108cd09.jpg','A playful helmet selfie'), photo('4411a88476af3a0ad49b6e84991d137c.jpg','Cat-print mugs on a table'), photo('e1cdfb18268f62f53f013646a1fdd3ea.jpg','A black cat with a mug'), photo('ffb7671d88dc92cb085fdeb119cc25e0.jpg','Poniu, a green-eyed tabby'), photo('faf660162bdbe421e4d34214c56dfcd3.jpg','A mug printed with a cat who looks like Poniu')
    ]
  },
  { name:'Shenyang', english:'SHENYANG', chapters:[{start:0,title:'A Night of\nLive Music',eyebrow:'SHENYANG · MUSIC & FRIENDS',description:'I caught a lively music festival in Shenyang. There were motorcycles, friends, music, and flags waving above the crowd. The evening sky was beautiful, too. It was one of those days that felt alive from beginning to end.'}], photos:[
    photo('0c5b6c11405dfa069d0dc5828d7da0a2.jpg','Motorcycles on the festival grounds'),photo('b2b6bf1347641073d9b71d5c7818b250.jpg','A selfie at the festival'),photo('4059811531bd08388fa48e71b1d98c15.jpg','Flags waving in front of the stage'),photo('6437d7ba19ebfc4fa153bb7566c3be18.jpg','Friends posing together at the festival'),photo('d4d18f9cc8a1c6b8cb8e3bfa342168a5.jpg','The evening sky above the festival'),photo('df2248dc7080cd429663cc2c7d267c42.jpg','Friends watching the show on the lawn'),photo('212cad8f77fcdd8030eddc1120ebf839.jpg','Flags, lights, and the festival crowd'),photo('b3e9a09d7a2efb388746772baeeb7f2e.jpg','A band playing on a black-and-white stage')
  ]},
  { name:'Qingdao',english:'QINGDAO',chapters:[{start:0,title:'A Day by\nthe Sea',eyebrow:'QINGDAO · BY THE SEA',description:'I spent a day by the sea in Qingdao. I watched the water and sky change, felt the breeze, and took a few photos. We found good things to eat along the way, too. Those little moments are what I remember most.'}],photos:[
    photo('d88243ebcee597056d26901d3086bedc.jpg','A meal from the trip'),photo('e946169b6ca9a81c192357fd731b622a.jpg','Blue sky over the beach'),photo('a8b1a5465a30107a97b32794342ea006.jpg','A selfie after time by the sea'),photo('d0f8ed77400c470accabe5f0e69e4a0c.jpg','A red chair sitting in the water'),photo('b527dac4959fe1b8443bf2ed8a85a415.jpg','Evening clouds and a city bridge')
  ]},
  {name:'Tianjin',english:'TIANJIN',chapters:[{start:0,title:'A Day of\nLittle Discoveries',eyebrow:'TIANJIN · A DAY OUT',description:'I wandered around Tianjin, stopping to look at animals and plants and to photograph whatever caught my eye. We found somewhere to eat when we got tired. There was no big plan, but the day felt full.'}],photos:[
    photo('d072cca407ea7fa13f8d5fa91594f9eb.jpg','A small animal resting on someone’s shoulders'),photo('52cb841ab8cb19300e272d6b7160e1b8.jpg','A plate of freshly pan-fried dumplings'),photo('5a21dffee68e46cd96ad9eed9a54cd8a.jpg','A purple water lily in a pond'),photo('5a927d792c4bea77dcb609d604465047.jpg','Plants displayed in a greenhouse'),photo('5ca65f53224880defd4b937b46a4cbb2.jpg','A friend taking a photo beneath the trees'),photo('24b3e17b74e19b17834cb59e3df50efd.jpg','A colorful bowl of seafood sashimi')
  ]},
  {name:'Xuzhou',english:'XUZHOU',chapters:[{start:0,title:'Visiting the\nLittle Animals',eyebrow:'XUZHOU · LITTLE FRIENDS',description:'I went to Xuzhou to visit my relatives’ little animals. I spent time with the cats, rabbits, and dogs. Just being around them helped me slow down and relax.'}],photos:[
    photo('584fc8faf3a8dd4afce30d1e34e6be9a.jpg','A white cat enjoying a gentle scratch'),photo('86ad7f16e1236de0b8d359e972e1210d.jpg','A curious white cat up close'),photo('febf23750be4566223776b7aa3bab2a9.jpg','Two little dogs behind a glass door'),photo('ca96659c0b0a29940b5f1bf22e66636b.jpg','A rabbit resting in the sunlight'),photo('1adb829c3cda256cb1e0559205678d31.jpg','A small gray dog')
  ]},
  {name:'Fuyang',english:'FUYANG',chapters:[{start:0,title:'Small Wonders\nAlong the Way',eyebrow:'FUYANG · SMALL WONDERS',description:'This trip to Fuyang began at the station. Later, I saw all kinds of animals: reptiles, jellyfish, a beluga, and a few smaller creatures. Everything felt new, and I came home with plenty of photos.'}],photos:[
    photo('e01a1fb08864e52d8f6a2a4debe3322a.jpg','A station platform and a quick selfie'),photo('885e6e854bbc7465c74148f993fe8ac7.jpg','A pose in front of a floral installation'),photo('8246c9b126a097e2a64b730d24bef1e3.jpg','A floral display inside a shopping center'),photo('30b5fc5258a0b23b2061cee9d284761a.jpg','A reptile at an animal exhibit'),photo('32a5138e4403d80b2d171506c642f62d.jpg','Jellyfish glowing under blue lights'),photo('0b8b88f38b4f5ae600e4516122888bc6.jpg','A beluga at the aquarium'),photo('9cd3da5b6ff675b9104c18bca44b60e9.jpg','A small animal exploring its bedding')
  ]},
  {name:'Zhejiang',english:'ZHEJIANG',chapters:[{start:0,title:'Old Streets\nand Hanfu',eyebrow:'ZHEJIANG · OLD STREETS',description:'I wandered through an old street in Zhejiang and dressed up in hanfu with my friends. The lanes invited us to take our time. We walked, took photos, and came away with memories that still make me smile.'}],photos:[
    photo('8e3774fd8ebfdf06da6e83ff0b9211fa.jpg','A hanfu photo with a friend'),photo('f67d17d5ee4c82f02264f11963e9c27a.jpg','Posing in hanfu at the shopping center'),photo('6f24eb1b9b2edd9a310398d4b653d7dc.jpg','A selfie with friends'),photo('107c57e3154f14fc5ca47e7d9e5fd0c1.jpg','A stone lane lined with old-street shops'),photo('8a2006e955dbf8c2d4871062826923fb.jpg','Sitting on a flame-shaped display in hanfu'),photo('a12a7e46683691a5cd6dcf33ed4adef9.jpg','A sweet treat from the trip'),photo('0dc53317ecc0cca20b8c270c85251f9e.jpg','A playful hanfu pose on a mall display')
  ]},
  {name:'Guangzhou',english:'GUANGZHOU',chapters:[{start:0,title:'Guangzhou\nAfter Dark',eyebrow:'GUANGZHOU · AFTER DARK',description:'Guangzhou at night stayed with me. Lights filled the narrow streets and warmed the old buildings; by day, huge trees spread their branches overhead. I kept stopping to take photos.'}],photos:[
    photo('169b747142f1347a81f589eea490b714.jpg','A narrow Guangzhou lane after dark'),photo('c29af44e0a028fc96eb0c42de392f681.jpg','A traditional building glowing at night'),photo('db233633f2027d1546cfd8d424b5aee4.jpg','A great old tree growing between buildings')
  ]}
];

const $ = (id) => document.getElementById(id);
const shakesPerStop = 3;
const state = { city: -1, photo: 0, travelStep: 0, motionReady: false, motionAllowed: false, orientationAllowed: false, lastShake: 0, lastAccel: null, tiltBase: null, tiltLocked: false, lastTilt: 0, touchX: null, toastTimer: null };
const mapCities = [...document.querySelectorAll('.map-city')];
const routePath = $('routeProgress');
const routeLength = routePath.getTotalLength();
const stopLengths = mapCities.map((node) => {
  const x = parseFloat(node.style.getPropertyValue('--x')) / 100 * 420;
  const y = parseFloat(node.style.getPropertyValue('--y')) / 100 * 660;
  let nearest = 0, nearestDistance = Infinity;
  for (let i=0;i<=800;i++) {
    const length = routeLength * i / 800, point = routePath.getPointAtLength(length);
    const distance = (point.x-x)**2 + (point.y-y)**2;
    if (distance < nearestDistance) { nearestDistance=distance; nearest=length; }
  }
  return nearest;
});
routePath.style.strokeDasharray = `0 ${routeLength}`;

function toast(message) {
  const el = $('toast'); el.textContent = message; el.classList.add('show');
  clearTimeout(state.toastTimer); state.toastTimer = setTimeout(() => el.classList.remove('show'), 2100);
}
function setOverlay(el, open) { el.classList.toggle('is-open', open); el.setAttribute('aria-hidden', String(!open)); }
function updateMap() {
  const nextCity = state.city + 1;
  const targetCity = state.travelStep > 0 ? nextCity : (state.city >= 0 ? state.city : 0);
  const destinationCity = nextCity < places.length ? nextCity : state.city;
  mapCities.forEach((node, i) => { node.classList.toggle('visited', i <= state.city); node.classList.toggle('active', i === targetCity); });
  $('progressCount').textContent = String(Math.max(0, state.city + 1)).padStart(2,'0');
  $('progressBar').style.width = `${Math.max(0, state.city + 1) / places.length * 100}%`;
  const startLength = state.city >= 0 ? stopLengths[state.city] : 0;
  const targetLength = stopLengths[targetCity];
  const routePosition = state.travelStep > 0 ? startLength + (targetLength-startLength) * state.travelStep / shakesPerStop : startLength;
  routePath.style.strokeDasharray = `${routePosition} ${routeLength}`;
  const foot = $('footprint');
  {
    const box = $('mapStage').getBoundingClientRect(); const point = routePath.getPointAtLength(routePosition);
    foot.style.left = `${point.x / 420 * box.width}px`; foot.style.top = `${point.y / 660 * box.height}px`; foot.classList.add('show');
    const destination = places[destinationCity];
    if (state.travelStep > 0) {
      $('stopKicker').textContent = `ON THE WAY · STEP ${state.travelStep} OF ${shakesPerStop}`;
      $('currentStop').textContent = `Heading to ${destination.name}`;
      $('hintText').textContent = `${shakesPerStop-state.travelStep} more gentle ${shakesPerStop-state.travelStep===1?'shake':'shakes'} to ${destination.name}`;
    } else if (state.city >= 0) {
      $('stopKicker').textContent = `STOP ${String(state.city+1).padStart(2,'0')} · ${places[state.city].english}`;
      $('currentStop').textContent = places[state.city].name;
      $('hintText').textContent = state.city === places.length-1 ? 'Final stop · open your photos' : `Shake ${shakesPerStop} times to reach ${destination.name}`;
    } else {
      $('stopKicker').textContent = "THE JOURNEY HASN'T BEGUN"; $('currentStop').textContent = 'Ready to revisit?'; $('hintText').textContent = `Shake ${shakesPerStop} times to reach ${destination.name}`;
    }
  }
}
function activeChapter(place, imageIndex) { return [...place.chapters].reverse().find(ch => imageIndex >= ch.start) || place.chapters[0]; }
function renderPhoto() {
  const place = places[state.city], item = place.photos[state.photo], chapter = activeChapter(place, state.photo);
  $('galleryIndex').textContent = `${String(state.city+1).padStart(2,'0')} / ${String(places.length).padStart(2,'0')}`;
  $('galleryCity').textContent = place.name;
  $('galleryEyebrow').textContent = chapter.eyebrow;
  $('galleryTitle').innerHTML = chapter.title.replace(/\n/g,'<br>');
  $('galleryDescription').textContent = chapter.description;
  $('photoNumber').textContent = String(state.photo+1).padStart(2,'0');
  $('photoTotal').textContent = String(place.photos.length).padStart(2,'0');
  $('memoryPhoto').src = item.src; $('memoryPhoto').alt = item.alt;
  $('photoCaption').textContent = item.alt;
  $('photoBackdrop').style.backgroundImage = `url("${item.src}")`;
  $('galleryBackdrop').style.backgroundImage = `url("${item.src}")`;
  $('galleryProgress').style.width = `${(state.photo+1)/place.photos.length*100}%`;
  $('galleryFootnote').textContent = state.city === 0 && state.photo === 4 ? 'From the exhibition into everyday life' : 'A little moment, kept here';
}
function openPlace(index) {
  state.city = index; state.photo = 0; state.tiltBase = null; state.tiltLocked = false; updateMap(); renderPhoto();
  setOverlay($('galleryOverlay'), true);
  if (state.city === 0) toast('Beijing holds two chapters. Keep turning to find the second.');
}
function finishJourney() { setOverlay($('galleryOverlay'), false); setTimeout(() => setOverlay($('endOverlay'), true), 260); }
function closeGallery() { setOverlay($('galleryOverlay'), false); state.tiltBase = null; state.tiltLocked = false; updateMap(); }
function advancePhoto(direction=1) {
  if (state.city < 0) return;
  if (direction < 0) return;
  const place = places[state.city], target = state.photo + direction;
  if (target >= place.photos.length) {
    if (state.city === places.length-1) { finishJourney(); return; }
    closeGallery(); toast(`You have reached the end of ${place.name}. Shake ${shakesPerStop} times to continue.`); return;
  }
  state.photo = target;
  const frame = $('photoFrame'); frame.classList.add('changing');
  setTimeout(() => { renderPhoto(); requestAnimationFrame(() => frame.classList.remove('changing')); }, 140);
}
function advanceStep() {
  if ($('introOverlay').classList.contains('is-open') || $('galleryOverlay').classList.contains('is-open') || $('endOverlay').classList.contains('is-open')) return;
  if (state.city + 1 >= places.length) return;
  state.travelStep += 1;
  if (state.travelStep >= shakesPerStop) {
    const arrival = state.city + 1; state.travelStep=0; openPlace(arrival); return;
  }
  updateMap();
  if (state.travelStep === 1) toast(`One small step toward ${places[state.city+1].name}.`);
}
function resetJourney(showIntro=true) {
  state.city=-1; state.photo=0; state.travelStep=0; state.lastShake=0; state.lastAccel=null; state.tiltBase=null; state.tiltLocked=false;
  setOverlay($('galleryOverlay'),false); setOverlay($('endOverlay'),false); updateMap();
  if (showIntro) setOverlay($('introOverlay'),true); else toast('The journey is ready to begin again.');
}
function beginJourney() { setOverlay($('introOverlay'),false); state.city=-1; state.travelStep=0; updateMap(); $('hintText').textContent=`Shake ${shakesPerStop} times to reach Beijing`; toast(state.motionAllowed ? 'Ready. Three gentle shakes will take you to Beijing.' : 'Use gentle shakes or tap “Step Forward.”'); }

async function requestSensors() {
  const results = [];
  for (const type of ['DeviceMotionEvent','DeviceOrientationEvent']) {
    const Sensor = window[type];
    if (Sensor && typeof Sensor.requestPermission === 'function') {
      try { results.push(await Sensor.requestPermission() === 'granted'); } catch { results.push(false); }
    } else { results.push(!!Sensor); }
  }
  state.motionAllowed = results[0]; state.orientationAllowed = results[1];
  if (state.motionAllowed && !state.motionReady) { window.addEventListener('devicemotion', handleMotion, {passive:true}); state.motionReady=true; }
  if (state.orientationAllowed) window.addEventListener('deviceorientation', handleOrientation, {passive:true});
  if (!state.motionAllowed || !state.orientationAllowed) $('permissionNote').textContent='You can still use the on-screen button and swipe gestures';
}
function handleMotion(event) {
  let magnitude = null;
  const a = event.acceleration;
  if (a && a.x != null && a.y != null && a.z != null) magnitude = Math.hypot(a.x,a.y,a.z);
  else {
    const g=event.accelerationIncludingGravity;
    if (g && g.x != null && g.y != null && g.z != null) {
      const current={x:g.x,y:g.y,z:g.z};
      if (state.lastAccel) magnitude=Math.hypot(current.x-state.lastAccel.x,current.y-state.lastAccel.y,current.z-state.lastAccel.z);
      state.lastAccel=current;
    }
  }
  const threshold = a ? 13 : 5.5, now=Date.now();
  if (magnitude != null && magnitude > threshold && now-state.lastShake>950) { state.lastShake=now; advanceStep(); }
}
function handleOrientation(event) {
  if (!$('galleryOverlay').classList.contains('is-open') || event.gamma == null) { state.tiltBase=null; state.tiltLocked=false; return; }
  const angle = event.gamma;
  if (state.tiltBase == null) { state.tiltBase=angle; return; }
  const delta=angle-state.tiltBase, now=Date.now();
  // One photo per deliberate side tilt. Return the phone near its starting angle to re-arm.
  if (state.tiltLocked) {
    if (Math.abs(delta)<5 && now-state.lastTilt>250) state.tiltLocked=false;
    return;
  }
  if (delta>12 && now-state.lastTilt>500) {
    state.lastTilt=now; state.tiltLocked=true; advancePhoto(1);
  }
}

$('startButton').addEventListener('click', async () => { await requestSensors(); beginJourney(); });
$('advanceButton').addEventListener('click', advanceStep);
$('resetButton').addEventListener('click', () => resetJourney(true));
$('closeGallery').addEventListener('click', closeGallery);
$('nextPhoto').addEventListener('click', () => advancePhoto(1));
$('replayButton').addEventListener('click', () => { setOverlay($('endOverlay'),false); resetJourney(false); });
$('finishButton').addEventListener('click', () => setOverlay($('endOverlay'),false));
$('photoFrame').addEventListener('pointerdown', event => { state.touchX=event.clientX; });
$('photoFrame').addEventListener('pointerup', event => { if (state.touchX == null) return; const delta=event.clientX-state.touchX; state.touchX=null; if (delta < -42) advancePhoto(1); });
window.addEventListener('resize', updateMap);
window.addEventListener('keydown', event => {
  if (event.key==='Escape' && $('galleryOverlay').classList.contains('is-open')) closeGallery();
  if (event.key==='ArrowRight' && $('galleryOverlay').classList.contains('is-open')) advancePhoto(1);
});
updateMap();
