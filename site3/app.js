const $ = id => document.getElementById(id);
const au = $('au');
au.volume = .7;

const BASE = '../site/assets/audio/Ya%20esta%20pasando!/';

/* Cada universo son los mismos 10 temas en otra realidad.
   t=título  d=duración  side=lado  note=nota de producción  diff=qué cambia */
const U = {
  prime: {
    icon:'☰', name:'PRIME', badge:'ORIGINAL 1994', year:1994,
    blurb:'Línea raíz. Grabado en un galpón sin luz sobre cinta de 1/4". Todo lo demás ramifica desde acá.',
    accent:'#d9ff3d',
    t:[
      ['TECNO OLI GARCAS','2:40','A1','4 pistas, una sola toma','ORIGINAL'],
      ['SILLAS VACÍAS','2:12','A2','sin overdub: el silencio es real','ORIGINAL'],
      ['AMOR INHUMANO','2:48','A3','el bajo entró tarde y se quedó','ORIGINAL'],
      ['INSATISFACCIÓN PRODUCTIVA','2:35','A4','letra escrita de memoria en el bondi','ORIGINAL'],
      ['MANUAL DE SUPERVIVENCIA','3:01','A5','la más larga del lado A','ORIGINAL'],
      ['EL PROMPT','1:30','B1','spoken word, casi spoken word','ORIGINAL'],
      ['CAJA NEGRA','2:33','B2','el fondo es la calle grabada','ORIGINAL'],
      ['ÚLTIMOS HOMBRES','2:50','B3','coro de tres personas, una de ellas afinada','ORIGINAL'],
      ['UNA NUEVA ESPERANZA','3:02','B4','terminó en fade, no en silencio','ORIGINAL'],
      ['TODAVÍA ESTAMOS ACÁ','3:00','B5','la última, siempre la última','ORIGINAL'],
    ]
  },
  alpha: {
    icon:'⬢', name:'ALPHA', badge:'REMIX INDUSTRIAL 1996', year:1996,
    blurb:'Pasada por cinta y metida de vuelta a la máquina. El mismo ruido, con otra capa de mugre.',
    accent:'#ff8800',
    t:[
      ['TECNO OLI GARCAS','3:12','A1','+72 bpm, bajo doblado en octava','REMASTER'],
      ['SILLAS VACÍAS','2:44','A2','el silencio del medio ahora es industrial','ALARGADO'],
      ['AMOR INHUMANO','3:20','A3','coro rearmado en armonías','CORO +ARMONÍA'],
      ['INSATISFACCIÓN PRODUCTIVA','2:58','A4','el bondi de la letra ahora es un tren','LETRA REMIX'],
      ['MANUAL DE SUPERVIVENCIA','3:44','A5','drum machine en lugar de batería','MACHINE DRUMS'],
      ['EL PROMPT','1:52','B1','spoken word pasado por eco de galpón','ECO x4'],
      ['CAJA NEGRA','2:55','B2','la calle ahora grita','SUB +12dB'],
      ['ÚLTIMOS HOMBRES','3:05','B3','el coro sigue feo, a propósito','IDIOMÁTICO'],
      ['UNA NUEVA ESPERANZA','3:18','B4','el fade ahora es un corte limpio','CORTE LIMPIO'],
      ['TODAVÍA ESTAMOS ACÁ','3:08','B5','+1 parte de guitarra que no existía','GUITARRA +1'],
    ]
  },
  beta: {
    icon:'⬡', name:'BETA', badge:'ACÚSTICO 1995', year:1995,
    blurb:'La misma canción desarmada. Sin pistas, sin máquina, solo manos y un parlor al fondo.',
    accent:'#00ff88',
    t:[
      ['TECNO OLI GARCAS','2:28','A1','guitarra acústica, se le ven las cuerdas','ACÚSTICO'],
      ['SILLAS VACÍAS','1:58','A2','versión a capela','A CAPELA'],
      ['AMOR INHUMANO','3:02','A3','dos guitarras y nada más','DESPOJADO'],
      ['INSATISFACCIÓN PRODUCTIVA','2:44','A4','la letra cantada casi susurrada','SUSURRO'],
      ['MANUAL DE SUPERVIVENCIA','2:52','A5','el tema del fuego, con fuego de verdad','MENOS CAPAS'],
      ['EL PROMPT','1:44','B1','spoken word, nadie se mueve','PURO'],
      ['CAJA NEGRA','2:22','B2','el ruido original de la calle','RUIDO CRUDO'],
      ['ÚLTIMOS HOMBRES','2:40','B3','tres voces sobre un parlante roto','VOZ ROTA'],
      ['UNA NUEVA ESPERANZA','2:50','B4','la más esperanzosa del álbum','FINAL ABIERTO'],
      ['TODAVÍA ESTAMOS ACÁ','2:48','B5','terminó con la púa en el aire','A CAPELA'],
    ]
  },
  gamma: {
    icon:'◆', name:'GAMMA', badge:'INSTRUMENTAL 1997', year:1997,
    blurb:'Sin voz. Estos temas nunca tuvieron letra y esta es la línea donde por fin suenan solos.',
    accent:'#a300ff',
    t:[
      ['TECNO OLI GARCAS','2:46','A1','el riff desnudo, sin letra','RIFF PURO'],
      ['SILLAS VACÍAS','2:20','A2','el vacío pasa a ser el tema','AMBIGUO'],
      ['AMOR INHUMANO','3:00','A3','el coro virou interludio','CORO → INTERLUDIO'],
      ['INSATISFACCIÓN PRODUCTIVA','2:50','A4','letra ausente, título intacto','SIN VOX'],
      ['MANUAL DE SUPERVIVENCIA','3:14','A5','+puente que no llegó al disco','PUENTE NUEVO'],
      ['EL PROMPT','1:22','B1','spoken word convertido en glitch','GLITCH'],
      ['CAJA NEGRA','2:40','B2','el beat se construyó con la calle','BEAT DE RUIDO'],
      ['ÚLTIMOS HOMBRES','2:56','B3','sin coros queda el miedo','SIN CORO'],
      ['UNA NUEVA ESPERANZA','3:12','B4','treinta segundos de guitarra sola','SOLO GUITARRA'],
      ['TODAVÍA ESTAMOS ACÁ','3:04','B5','el outro se corta antes de tiempo','OUTRO ANTICIPADO'],
    ]
  },
  delta: {
    icon:'◇', name:'DELTA', badge:'LIVE 2001', year:2001,
    blurb:'Grabado entre la gente. Se escucha el galpón, el feedback y a alguien que grita.',
    accent:'#ff0088',
    t:[
      ['TECNO OLI GARCAS','3:40','A1','arrancó con el feedback de la sala','FEEDBACK'],
      ['SILLAS VACÍAS','2:05','A2','alguien tiró una silla de verdad','EVENTO REAL'],
      ['AMOR INHUMANO','3:44','A3','cantó todo el público','300 VOCES'],
      ['INSATISFACCIÓN PRODUCTIVA','3:10','A4','la letra se gritó más que se cantó','GRITADO'],
      ['MANUAL DE SUPERVIVENCIA','4:22','A5','la más larga de todas las líneas','+80s EN VIVO'],
      ['EL PROMPT','2:10','B1','hubo que leerlo dos veces, con ruido','DOBLE LECTURA'],
      ['CAJA NEGRA','2:58','B2','el público cambió el tempo','TEMPO VIVO'],
      ['ÚLTIMOS HOMBRES','3:36','B3','la amplificación se rompió','AMPLIFICADOR'],
      ['UNA NUEVA ESPERANZA','3:28','B4','silencio antes del final, aprobado','SILENCIO'],
      ['TODAVÍA ESTAMOS ACÁ','4:50','B5','no pararon de gritar, seguimos sonando','OVERRUN'],
    ]
  },
  omega: {
    icon:'★', name:'OMEGA', badge:'MEZCLA FINAL 2006', year:2006,
    blurb:'Donde convergen todas las líneas. No es la mejor: es la que sobrevivió al paso del tiempo.',
    accent:'#ffe600',
    t:[
      ['TECNO OLI GARCAS','3:24','A1','prime + alpha + intro en vivo','CONVERGENCIA'],
      ['SILLAS VACÍAS','2:48','A2','el mejor silencio de todos','CONVERGENCIA'],
      ['AMOR INHUMANO','3:28','A3','coro original + coro del público','AMBOS COROS'],
      ['INSATISFACCIÓN PRODUCTIVA','3:05','A4','la letra que pidió el público','LETRA FINAL'],
      ['MANUAL DE SUPERVIVENCIA','3:56','A5','todo lo que entró, entró','MÁXIMA CAPA'],
      ['EL PROMPT','2:04','B1','spoken word + máquina + eco','CAPAS x3'],
      ['CAJA NEGRA','3:02','B2','el ruido de calle como instrumento','MASTER LIMPIO'],
      ['ÚLTIMOS HOMBRES','3:20','B3','el coro feo, ahora con prueba','RESTAURADO'],
      ['UNA NUEVA ESPERANZA','3:44','B4','fade largo, todos presentes','FADE FINAL'],
      ['TODAVÍA ESTAMOS ACÁ','4:12','B5','última. siempre la última','CIERRE'],
    ]
  }
};
const ORDER = ['prime','alpha','beta','gamma','delta','omega'];

/* tracks fuente de audio: una sola pista real por tema, compartida por todos los universos */
const SRC = [
  '1-tecno_oli_garcas.mp3','2-sillas_vacias.mp3','3-amor_inhumano.mp3',
  '4-insatisfaccion_productiva.mp3','5-manual_de_supervivencia.mp3','6-el_prompt.mp3',
  '7-caja_negra.mp3','8-ultimos_hombres.mp3','9-una_nueva_esperanza.mp3',
  '10-todavia_estamos_aca.mp3'
].map(f => BASE + f);

let cur = 'prime';
let track = 0;
let playing = false;
let sec = 0;

const pad = n => String(n).padStart(2,'0');
const fmt = s => Math.floor(s/60)+':'+pad(Math.floor(s%60));
const rows = k => U[k].t;
const current = () => rows(cur)[track];
const duration = () => {
  if (au.duration && isFinite(au.duration)) return Math.round(au.duration);
  const p = current()[1].split(':');
  return +p[0]*60 + +p[1];
};

function renderUniverses(){
  $('uniStrip').innerHTML = ORDER.map(k=>{
    const u = U[k];
    return `<button class="uni ${k===cur?'active':''}" role="tab" aria-selected="${k===cur}" data-k="${k}">
      <span class="uni-name">${u.icon} ${u.name}</span>
      <span class="uni-badge">${u.badge}</span>
    </button>`;
  }).join('');
  $('uniStrip').querySelectorAll('.uni').forEach(b=>b.onclick=()=>{
    if (b.dataset.k === cur) return;
    go(b.dataset.k, track, true);
  });
  $('uniBlurb').textContent = U[cur].blurb;
}

function renderList(){
  $('trackList').innerHTML = rows(cur).map((t,i)=>{
    const [title,dur,side,note,diff] = t;
    const on = i===track;
    return `<li class="trk ${on?'active':''} ${on&&playing?'playing':''}" data-i="${i}">
      <span class="trk-n">${pad(i+1)}</span>
      <span class="trk-b">
        <span class="trk-t">${title}<span class="eq" aria-hidden="true"><i></i><i></i><i></i></span></span>
        <span class="trk-m"><span>${side}</span><span class="dur">${dur}</span><span class="tag">${diff}</span><span>${note}</span></span>
      </span>
    </li>`;
  }).join('');
  $('trackList').querySelectorAll('.trk').forEach(el=>el.onclick=()=>go(cur,+el.dataset.i,true));
}

function renderVersions(){
  $('verTitle').textContent = rows(cur)[track][0];
  $('verList').innerHTML = ORDER.map((k,i)=>{
    const t = rows(k)[track];
    const isCur = k===cur;
    return `<div class="ver ${isCur?'current':''}" data-k="${k}" role="button" tabindex="0">
      <span class="ver-ico" style="color:${U[k].accent}">${U[k].icon}</span>
      <span class="ver-b">
        <span class="ver-u">${U[k].name} · ${U[k].badge}</span>
        <span class="ver-n">${t[3]}</span>
      </span>
      <span class="ver-r">
        <span class="ver-d">${t[1]}</span>
        <span class="ver-x">${t[4]}</span>
      </span>
    </div>`;
  }).join('');
  $('verList').querySelectorAll('.ver').forEach(el=>{
    const fire = ()=>go(el.dataset.k, track, true);
    el.onclick = fire;
    el.onkeydown = e => { if (e.key==='Enter'||e.key===' ') { e.preventDefault(); fire(); } };
  });
}

function renderDeck(){
  const t = current();
  $('deckTitle').textContent = pad(track+1)+'. '+t[0];
  $('deckSide').textContent = t[2];
  $('deckDur').textContent = t[1];
  $('deckUni').textContent = U[cur].name;
  $('tDur').textContent = fmt(duration());
  $('tCur').textContent = fmt(sec);
  $('bPlay').textContent = playing ? '❚❚' : '▶';
  $('roUni').textContent = U[cur].name;
  $('roTrk').textContent = pad(track+1)+'/10';
  const d = duration()||1;
  $('seekFill').style.width = Math.min(100,sec/d*100)+'%';
  $('seek').setAttribute('aria-valuenow', Math.round(sec/d*100));
  $('roRec').className = playing ? '' : 'off';
}

function renderAll(){
  renderUniverses();
  renderList();
  renderVersions();
  renderDeck();
}

function go(k,i,autoplay){
  cur = k;
  track = (i + rows(k).length) % rows(k).length;
  sec = 0;
  const src = new URL(SRC[track], document.baseURI).href;
  if (au.src !== src) au.src = SRC[track];
  renderAll();
  if (autoplay) au.play().catch(()=>{});
}

/* ---------- visualizadores ---------- */
let phase = 0;
function viz(){
  phase += playing ? .09 : .012;

  const s = $('spectrum'), sc = s.getContext('2d');
  const sw = s.clientWidth, sh = s.clientHeight;
  if (sw && sh){
    s.width = sw; s.height = sh;
    sc.clearRect(0,0,sw,sh);
    const bars = 16, bw = sw/bars;
    for (let i=0;i<bars;i++){
      const v = playing ? .12 + .88*Math.abs(Math.sin(phase*2.2 + i*.85)) : .05;
      const h = Math.max(2, v*sh);
      const grd = sc.createLinearGradient(0,sh,0,sh-h);
      grd.addColorStop(0,'#a300ff');
      grd.addColorStop(.6,'#00f0ff');
      grd.addColorStop(1,'#ff00aa');
      sc.fillStyle = grd;
      sc.fillRect(i*bw+1, sh-h, bw-2, h);
    }
  }

  const w = $('wave'), wc = w.getContext('2d');
  const ww = w.clientWidth, wh = w.clientHeight;
  if (ww && wh){
    w.width = ww; w.height = wh;
    wc.clearRect(0,0,ww,wh);
    wc.lineWidth = 1;
    wc.strokeStyle = playing ? '#00f0ff' : '#3a2a55';
    wc.beginPath();
    for (let x=0;x<ww;x++){
      const env = Math.sin(x/ww*Math.PI);
      const amp = playing ? wh*.42 : wh*.05;
      const y = wh/2 + Math.sin(x*.09 + phase)*env*amp;
      x===0 ? wc.moveTo(x,y) : wc.lineTo(x,y);
    }
    wc.stroke();
  }
}

/* lluvia */
function rain(){
  const c = $('rain'), x = c.getContext('2d');
  let w, h, drops = [];
  const build = ()=>{
    w = c.width = innerWidth;
    h = c.height = innerHeight;
    const n = Math.min(190, Math.round(w/9));
    drops = Array.from({length:n},()=>({
      x: Math.random()*w, y: Math.random()*h,
      l: 8 + Math.random()*22, v: 3 + Math.random()*7, a: .1 + Math.random()*.45
    }));
  };
  build();
  addEventListener('resize', build);
  (function loop(){
    x.clearRect(0,0,w,h);
    for (const d of drops){
      x.strokeStyle = `rgba(0,240,255,${d.a})`;
      x.lineWidth = 1;
      x.beginPath();
      x.moveTo(d.x, d.y);
      x.lineTo(d.x - d.l*.28, d.y + d.l);
      x.stroke();
      d.y += d.v; d.x -= d.v*.28;
      if (d.y > h + d.l){ d.y = -d.l; d.x = Math.random()*w; }
    }
    requestAnimationFrame(loop);
  })();
}

/* ---------- bifurcaciones ---------- */
function fork(){
  const key = 'fork_' + Date.now().toString(36);
  const from = cur;
  const base = rows(from).map(t=>t.slice());
  const letters = 'ABCDEFGHJKLMNPQRSTVWXYZ';
  U[key] = {
    icon:'⑂', name:'FORK-'+letters[Math.floor(Math.random()*letters.length)],
    badge:'BIFURCACIÓN '+new Date().getFullYear(), year:new Date().getFullYear(),
    blurb:'Rama generada desde '+U[from].name+' con variaciones aleatorias de duración y mezcla.',
    accent:'#00f0ff',
    t: base.map(t=>{
      const p = t[1].split(':');
      const d = Math.max(45, +p[0]*60 + +p[1] + Math.round((Math.random()-.5)*44));
      return [t[0], fmt(d), t[2], 'mutación sobre '+t[3], 'MUTACIÓN'];
    })
  };
  ORDER.push(key);
  go(key, track, true);
  toast('TIMELINE BIFURCADA DESDE '+U[from].name);
}

function purge(){
  ORDER.slice(1).forEach(k=>delete U[k]);
  ORDER.splice(1);
  go('prime', track, true);
  toast('TIMELINE PURGADA · SOLO PRIME');
}

function toast(msg){
  openModal('SISTEMA', `<p class="hl">▸ ${msg}</p><p>Universos activos: <strong>${ORDER.length}</strong> · señal <strong>${pad(track+1)}</strong></p>`, [{t:'OK',a:closeModal}]);
}

/* ---------- modales ---------- */
function openModal(title, html, buttons){
  $('modalTitle').textContent = title;
  $('modalBody').innerHTML = html;
  $('modalFoot').innerHTML = '';
  (buttons || [{t:'CERRAR',a:closeModal}]).forEach(b=>{
    const el = document.createElement('button');
    el.className = 'btn';
    el.textContent = b.t;
    el.onclick = b.a;
    $('modalFoot').appendChild(el);
  });
  $('modalWrap').hidden = false;
}
function closeModal(){ $('modalWrap').hidden = true; }

function compareAll(){
  const head = `<tr><th>#</th><th>TEMA</th>${ORDER.map(k=>`<th>${U[k].name}</th>`).join('')}</tr>`;
  const body = rows(cur).map((t,i)=>`<tr>
    <td>${pad(i+1)}</td><td>${t[0]}</td>
    ${ORDER.map(k=>`<td>${rows(k)[i][1]}</td>`).join('')}
  </tr>`).join('');
  /* sin <thead>/<tbody> explícitos: innerHTML los descarta y el browser
     reenvuelve todo en tbody, partiendo los selectores */
  openModal('COMPARATIVA COMPLETA · DURACIÓN POR UNIVERSO',
    `<table>${head}${body}</table><p class="hl">▸ Cada fila es el mismo tema medido en las ${ORDER.length} líneas de tiempo.</p>`);
}

function about(){
  openModal('FICTICIA//NEON',
    `<p>Un <span class="hl">multiverso</span> del disco <strong>"Ya está pasando!"</strong>. Cada universo es otra versión de los mismos 10 temas: remix, acústico, instrumental, en vivo, mezcla final.</p>
     <p>Elegí un tema y mirá a la derecha: ahí están sus <strong>versiones paralelas</strong>. Clic en cualquiera para saltar a esa realidad.</p>
     <p><strong>⑂ BIFURCAR</strong> crea una rama nueva · <span class="bad">PURGAR</span> vuelve a Prime</p>
     <p class="bad">▸ Es una simulación narrativa. Los archivos de audio son los originales del disco; lo que cambia es la ficha de cada versión.</p>`);
}

function lore(){
  openModal('LORE DEL MULTIVERSO',
    `<p>En 1994 ficticia. grabó "Ya está pasando!" en un galpón con una cinta de 1/4". Eso es <strong>Prime</strong>: el universo raíz, el único que existe sin condiciones.</p>
     <p>Pero cada banda que hace ruido genera ramificaciones. Lo que se pudo remixear se remixeó (<span class="hl">Alpha</span>). Lo que se pudo desarmar se desarmó (<span class="hl">Beta</span>). Lo que nunca tuvo letra se volvió instrumental (<span class="hl">Gamma</span>). Lo que se tocó frente a 300 personas vive en otra línea (<span class="hl">Delta</span>).</p>
     <p>Y al final todo converge (<strong>Omega</strong>) — no porque sea mejor, sino porque sobrevivió al paso del tiempo.</p>`);
}

/* ---------- controles ---------- */
function toggle(){
  if (playing) au.pause();
  else au.play().catch(()=>{});
}
$('bPlay').onclick = toggle;
$('bNext').onclick = ()=>go(cur, track+1, true);
$('bPrev').onclick = ()=>go(cur, track-1, true);
$('bRand').onclick = ()=>go(cur, Math.floor(Math.random()*10), true);
$('vol').oninput = e => au.volume = e.target.value/100;

$('seek').onclick = e=>{
  const r = e.currentTarget.getBoundingClientRect();
  const ns = Math.round(((e.clientX - r.left)/r.width)*duration());
  sec = ns;
  try { au.currentTime = ns; } catch(_){}
  renderDeck();
};
$('seek').onkeydown = e=>{
  const d = duration();
  if (e.key==='ArrowRight'){ sec = Math.min(d, sec+5); try{au.currentTime=sec}catch(_){} renderDeck(); e.preventDefault(); }
  if (e.key==='ArrowLeft'){ sec = Math.max(0, sec-5); try{au.currentTime=sec}catch(_){} renderDeck(); e.preventDefault(); }
};

$('btnFork').onclick = fork;
$('btnCompare').onclick = compareAll;
$('modalX').onclick = closeModal;
$('modalWrap').onclick = e=>{ if (e.target === $('modalWrap')) closeModal(); };

au.addEventListener('timeupdate', ()=>{ sec = Math.floor(au.currentTime||0); renderDeck(); });
au.addEventListener('loadedmetadata', renderDeck);
au.addEventListener('play', ()=>{ playing = true; renderAll(); });
au.addEventListener('pause', ()=>{ playing = false; renderAll(); });
au.addEventListener('ended', ()=>go(cur, track+1, true));

addEventListener('keydown', e=>{
  if (!$('modalWrap').hidden){
    if (e.key === 'Escape') closeModal();
    return;
  }
  if (e.target.tagName === 'INPUT') return;
  const k = e.key;
  if (k === ' '){ e.preventDefault(); toggle(); }
  else if (k === 'ArrowDown'){ e.preventDefault(); go(cur, track+1, playing); }
  else if (k === 'ArrowUp'){ e.preventDefault(); go(cur, track-1, playing); }
  else if (k === 'ArrowRight'){ e.preventDefault(); go(ORDER[(ORDER.indexOf(cur)+1)%ORDER.length], track, playing); }
  else if (k === 'ArrowLeft'){ e.preventDefault(); go(ORDER[(ORDER.indexOf(cur)+ORDER.length-1)%ORDER.length], track, playing); }
  else if (k === 'f' || k === 'F') fork();
  else if (k === 'c' || k === 'C') compareAll();
  else if (k === '?') about();
  else if (k === 'l' || k === 'L') lore();
  else if (e.ctrlKey && (k === 'p' || k === 'P')){ e.preventDefault(); purge(); }
});

/* reloj */
function clock(){
  const d = new Date();
  $('roClock').textContent = [d.getHours(),d.getMinutes(),d.getSeconds()].map(n=>pad(n)).join(':');
}
setInterval(clock, 1000);

/* init */
rain();
go('prime', 0, false);
clock();
setInterval(viz, 60);
addEventListener('resize', viz);