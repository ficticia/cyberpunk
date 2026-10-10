const $=id=>document.getElementById(id);
const audio=$('audioPlayer');
audio.volume=0.7;

const BASE="../site/assets/audio/Ya%20esta%20pasando!/";

const UNIVERSES={
  prime:{icon:"☰",label:"PRIME",badge:"ORIGINAL",year:1994,era:"DEMO SUCIA · TTY",color:"--dos-highlight",
    desc:"La primera línea de tiempo. Sucio, crudo, grabado en un casete gastado en un galpón sin luz.",
    tracks:[
      {t:"TECNO OLI GARCAS",d:"2:40",side:"A1",src:BASE+"1-tecno_oli_garcas.mp3",note:"grabado en 4 pistas, 1 toma"},
      {t:"SILLAS VACÍAS",d:"2:12",side:"A2",src:BASE+"2-sillas_vacias.mp3",note:"sin overdub, silencio real entre temas"},
      {t:"AMOR INHUMANO",d:"2:48",side:"A3",src:BASE+"3-amor_inhumano.mp3",note:"el bajo entró tarde y se quedó"},
      {t:"INSATISFACCIÓN PRODUCTIVA",d:"2:35",side:"A4",src:BASE+"4-insatisfaccion_productiva.mp3",note:"letra escrita en el bondi"},
      {t:"MANUAL DE SUPERVIVENCIA",d:"3:01",side:"A5",src:BASE+"5-manual_de_supervivencia.mp3",note:"la más larga del lado A"},
      {t:"EL PROMPT",d:"1:30",side:"B1",src:BASE+"6-el_prompt.mp3",note:"spoken word, casi spoken word"},
      {t:"CAJA NEGRA",d:"2:33",side:"B2",src:BASE+"7-caja_negra.mp3",note:"ruido de fondo = la calle grabada"},
      {t:"ÚLTIMOS HOMBRES",d:"2:50",side:"B3",src:BASE+"8-ultimos_hombres.mp3",note:"coro de tres personas, una表现得 feo"},
      {t:"UNA NUEVA ESPERANZA",d:"3:02",side:"B4",src:BASE+"9-una_nueva_esperanza.mp3",note:"terminó en fade, no en silencio"},
      {t:"TODAVÍA ESTAMOS ACÁ",d:"3:00",side:"B5",src:BASE+"10-todavia_estamos_aca.mp3",note:"la última, sempre la última"}
    ]},
  alpha:{icon:"⬢",label:"ALPHA",badge:"REMIX INDUSTRIAL",year:1996,era:"FÁBRICA · 24 CANALES",color:"#ff8800",
    desc:"Cada tema pasado por cinta de 1/4\" y metido de vuelta a la máquina. Sucio igual, pero con otro dirt.",
    tracks:[
      {t:"TECNO OLI GARCAS",d:"3:12",side:"A1",src:BASE+"1-tecno_oli_garcas.mp3",note:"+72bpm, bajo doblado en octava",diff:"REMASTER"},
      {t:"SILLAS VACÍAS",d:"2:44",side:"A2",src:BASE+"2-sillas_vacias.mp3",note:"el silencio del medio ahora es industrial",diff:"ALARGADO"},
      {t:"AMOR INHUMANO",d:"3:20",side:"A3",src:BASE+"3-amor_inhumano.mp3",note:"coro rearmado enarmonías",diff:"CORO +ARMONÍA"},
      {t:"INSATISFACCIÓN PRODUCTIVA",d:"2:58",side:"A4",src:BASE+"4-insatisfaccion_productiva.mp3",note:"el bondi de la letra ahora es un tren",diff:"REMIX LETRA"},
      {t:"MANUAL DE SUPERVIVENCIA",d:"3:44",side:"A5",src:BASE+"5-manual_de_supervivencia.mp3",note:"drum machine en vez de batería",diff:"MACHINE DRUMS"},
      {t:"EL PROMPT",d:"1:52",side:"B1",src:BASE+"6-el_prompt.mp3",note:"spoken word pasado por eco de galpón",diff:"ECO x4"},
      {t:"CAJA NEGRA",d:"2:55",side:"B2",src:BASE+"7-caja_negra.mp3",note:"la calle ahora grita",diff:"SUB +12dB"},
      {t:"ÚLTIMOS HOMBRES",d:"3:05",side:"B3",src:BASE+"8-ultimos_hombres.mp3",note:"el coro feo sigue feo, a propósito",diff:"IDIOMÁTICO"},
      {t:"UNA NUEVA ESPERANZA",d:"3:18",side:"B4",src:BASE+"9-una_nueva_esperanza.mp3",note:"el fade ahora es un corte",diff:"CORTE LIMPIO"},
      {t:"TODAVÍA ESTAMOS ACÁ",d:"3:08",side:"B5",src:BASE+"10-todavia_estamos_aca.mp3",note:"+1 parte de guitarra que no existía",diff:"GUITARRA +1"}
    ]},
  beta:{icon:"⬡",label:"BETA",badge:"ACÚSTICO",year:1995,era:"SALA PEQUEÑA · 2 CANALES",color:"#00ff88",
    desc:"La misma canción desarmada. Sin pistas, sin máquina, solo manos y un parlor en el fondo.",
    tracks:[
      {t:"TECNO OLI GARCAS",d:"2:28",side:"A1",src:BASE+"1-tecno_oli_garcas.mp3",note:"guitarra acústica, se le ven las cuerdas",diff:"ACÚSTICO"},
      {t:"SILLAS VACÍAS",d:"1:58",side:"A2",src:BASE+"2-sillas_vacias.mp3",note:"versionín de a capela",diff:"A CAPELA"},
      {t:"AMOR INHUMANO",d:"3:02",side:"A3",src:BASE+"3-amor_inhumano.mp3",note:"dos guitarras y nada más",diff:"DESPOJADO"},
      {t:"INSATISFACCIÓN PRODUCTIVA",d:"2:44",side:"A4",src:BASE+"4-insatisfaccion_productiva.mp3",note:"la letra cantada susurrando",diff:"SUSURRO"},
      {t:"MANUAL DE SUPERVIVENCIA",d:"2:52",side:"A5",src:BASE+"5-manual_de_supervivencia.mp3",note:"el tema del fuego, con fuego de verdad",diff:"MENOS CAPAS"},
      {t:"EL PROMPT",d:"1:44",side:"B1",src:BASE+"6-el_prompt.mp3",note:"spoken word, nadie en el medio se mueve",diff:"PURO"},
      {t:"CAJA NEGRA",d:"2:22",side:"B2",src:BASE+"7-caja_negra.mp3",note:"el ruido de la calle quedó",diff:"ORIGINAL RUIDO"},
      {t:"ÚLTIMOS HOMBRES",d:"2:40",side:"B3",src:BASE+"8-ultimos_hombres.mp3",note:"tres voces, un parlante roto",diff:"VOZ ROTA"},
      {t:"UNA NUEVA ESPERANZA",d:"2:50",side:"B4",src:BASE+"9-una_nueva_esperanza.mp3",note:"la más esperanzadora del album",diff:"FINAL ABIERTO"},
      {t:"TODAVÍA ESTAMOS ACÁ",d:"2:48",side:"B5",src:BASE+"10-todavia_estamos_aca.mp3",note:"terminó con la púa en el aire",diff:"FINAL A CAPELA"}
    ]},
  gamma:{icon:"◆",label:"GAMMA",badge:"INSTRUMENTAL",year:1997,era:"MODO 13h · 256 COLORES",color:"#8800ff",
    desc:"Sin voz. Los temas sin letra todavía existen, y algunos no estaban escritos. Esta línea es esa.",
    tracks:[
      {t:"TECNO OLI GARCAS",d:"2:46",side:"A1",src:BASE+"1-tecno_oli_garcas.mp3",note:"el riff desnudo, sin letra",diff:"RIFF PURO"},
      {t:"SILLAS VACÍAS",d:"2:20",side:"A2",src:BASE+"2-sillas_vacias.mp3",note:"el emptiness es el tema",diff:"AMBIGUO"},
      {t:"AMOR INHUMANO",d:"3:00",side:"A3",src:BASE+"3-amor_inhumano.mp3",note:"el coro virou interludio",diff:"CORO→INTERLUDIO"},
      {t:"INSATISFACCIÓN PRODUCTIVA",d:"2:50",side:"A4",src:BASE+"4-insatisfaccion_productiva.mp3",note:"letra ausente, título intacto",diff:"SIN VOX"},
      {t:"MANUAL DE SUPERVIVENCIA",d:"3:14",side:"A5",src:BASE+"5-manual_de_supervivencia.mp3",note:"+bridge que no llegó a disco",diff:"BRIDGE NUEVO"},
      {t:"EL PROMPT",d:"1:22",side:"B1",src:BASE+"6-el_prompt.mp3",note:"spoken word → glitch loop",diff:"GLITCH"},
      {t:"CAJA NEGRA",d:"2:40",side:"B2",src:BASE+"7-caja_negra.mp3",note:"el beat se construyó con la calle",diff:"BEAT DE RUIDO"},
      {t:"ÚLTIMOS HOMBRES",d:"2:56",side:"B3",src:BASE+"8-ultimos_hombres.mp3",note:"sin coros, queda el miedo",diff:"SIN CORO"},
      {t:"UNA NUEVA ESPERANZA",d:"3:12",side:"B4",src:BASE+"9-una_nueva_esperanza.mp3",note:"guitarra sola 40 segundos",diff:"SOLO GUITARRA"},
      {t:"TODAVÍA ESTAMOS ACÁ",d:"3:04",side:"B5",src:BASE+"10-todavia_estamos_aca.mp3",note:"outro se corta antes de tiempo",diff:"OUTRO ANTICIPADO"}
    ]},
  delta:{icon:"◇",label:"DELTA",badge:"LIVE",year:2001,era:"SALA LLENA · 300 PERSONAS",color:"#ff0088",
    desc:"Grabado entre la gente. Se escucha el galpón, se escucha a alguien que grita, se escucha el feedback.",
    tracks:[
      {t:"TECNO OLI GARCAS",d:"3:40",side:"A1",src:BASE+"1-tecno_oli_garcas.mp3",note:"arrancó con feedback de la sala",diff:"FEEDBACK"},
      {t:"SILLAS VACÍAS",d:"2:05",side:"A2",src:BASE+"2-sillas_vacias.mp3",note:"alguien tiró una silla de verdad",diff:"EVENTO REAL"},
      {t:"AMOR INHUMANO",d:"3:44",side:"A3",src:BASE+"3-amor_inhumano.mp3",note:"el coro cantó todo el público",diff:"300 VOCES"},
      {t:"INSATISFACCIÓN PRODUCTIVA",d:"3:10",side:"A4",src:BASE+"4-insatisfaccion_productiva.mp3",note:"la letra se gritó más que se cantó",diff:"GRITADO"},
      {t:"MANUAL DE SUPERVIVENCIA",d:"4:22",side:"A5",src:BASE+"5-manual_de_supervivencia.mp3",note:"la más larga de todas las líneas",diff:"+80s LIVE"},
      {t:"EL PROMPT",d:"2:10",side:"B1",src:BASE+"6-el_prompt.mp3",note:"hubo que leerlo dos veces, con ruido",diff:"DOBLE LECTURA"},
      {t:"CAJA NEGRA",d:"2:58",side:"B2",src:BASE+"7-caja_negra.mp3",note:"el público cambió el tempo",diff:"TEMPO VIVO"},
      {t:"ÚLTIMOS HOMBRES",d:"3:36",side:"B3",src:BASE+"8-ultimos_hombres.mp3",note:"la amplificación se rompió",diff:"AMPLIFICADOR"},
      {t:"UNA NUEVA ESPERANZA",d:"3:28",side:"B4",src:BASE+"9-una_nueva_esperanza.mp3",note:"silencio antes del final, aprobado",diff:"SILENCIO"},
      {t:"TODAVÍA ESTAMOS ACÁ",d:"4:50",side:"B5",src:BASE+"10-todavia_estamos_aca.mp3",note:"no pararon de gritar, seguimos Playing",diff:"OVERRUN"}
    ]},
  omega:{icon:"★",label:"OMEGA",badge:"MEZCLA FINAL",year:2006,era:"MASTER DEFINITIVO",color:"#ffff00",
    desc:"Donde convergen todas las líneas. No es mejor: es la que sobrevivió al paso del tiempo.",
    tracks:[
      {t:"TECNO OLI GARCAS",d:"3:24",side:"A1",src:BASE+"1-tecno_oli_garcas.mp3",note:"prime + alpha + live intro",diff:"CONVERGENCIA"},
      {t:"SILLAS VACÍAS",d:"2:48",side:"A2",src:BASE+"2-sillas_vacias.mp3",note:"el mejor silencio de todos",diff:"CONVERGENCIA"},
      {t:"AMOR INHUMANO",d:"3:28",side:"A3",src:BASE+"3-amor_inhumano.mp3",note:"coro original + coro del público",diff:"AMBOS COROS"},
      {t:"INSATISFACCIÓN PRODUCTIVA",d:"3:05",side:"A4",src:BASE+"4-insatisfaccion_productiva.mp3",note:"la letra que pidió el público",diff:"LETRA FINAL"},
      {t:"MANUAL DE SUPERVIVENCIA",d:"3:56",side:"A5",src:BASE+"5-manual_de_supervivencia.mp3",note:"todo lo que se pudo meter, metido",diff:"MÁXIMA CAPA"},
      {t:"EL PROMPT",d:"2:04",side:"B1",src:BASE+"6-el_prompt.mp3",note:"spoken word + machine + eco",diff:"CAPAS x3"},
      {t:"CAJA NEGRA",d:"3:02",side:"B2",src:BASE+"7-caja_negra.mp3",note:"ruido de calle como instrumento",diff:"MASTER LIMPIO"},
      {t:"ÚLTIMOS HOMBRES",d:"3:20",side:"B3",src:BASE+"8-ultimos_hombres.mp3",note:"el coro feo, ahora con prueba",diff:"RESTAURADO"},
      {t:"UNA NUEVA ESPERANZA",d:"3:44",side:"B4",src:BASE+"9-una_nueva_esperanza.mp3",note:"fade largo, todos presentes",diff:"FADE FINAL"},
      {t:"TODAVÍA ESTAMOS ACÁ",d:"4:12",side:"B5",src:BASE+"10-todavia_estamos_aca.mp3",note:"última. siempre la última",diff:"CIERRE"}
    ]}
};
const ORDER=["prime","alpha","beta","gamma","delta","omega"];

let curUni="prime",curTrack=0,playing=false,sec=0,view="list",collapsed={left:false,right:false};

const fmt=s=>Math.floor(s/60)+":"+String(Math.floor(s%60)).padStart(2,"0");
const dur=()=>{
  if(audio.duration&&isFinite(audio.duration))return Math.round(audio.duration);
  const p=UNIVERSES[curUni].tracks[curTrack].d.split(":");
  return +p[0]*60+ +p[1];
};
const pad=n=>String(n).padStart(2,"0");
const uni=()=>UNIVERSES[curUni];

function loadTrack(i,autoplay){
  const t=uni().tracks;
  curTrack=(i+t.length)%t.length;
  sec=0;
  const src=new URL(t[curTrack].src,document.baseURI).href;
  if(audio.src!==src)audio.src=t[curTrack].src;
  renderAll();
  if(autoplay)audio.play().catch(()=>{});
}
function renderList(){
  const u=uni();
  $('trackList').innerHTML=u.tracks.map((t,i)=>`
    <div class="track-row ${i===curTrack?'active':''} ${i===curTrack&&playing?'playing':''}" data-i="${i}">
      <span class="track-num">${pad(i+1)}</span>
      <div class="track-info">
        <div class="track-title">${t.t}</div>
        <div class="track-meta">
          <span class="track-side">${t.side}</span>
          <span class="track-dur">${t.d}</span>
          ${t.diff?`<span class="track-version">${t.diff}</span>`:""}
        </div>
        <div class="track-meta"><span>${t.note}</span></div>
      </div>
      <div class="track-actions">
        <button class="track-btn play" data-i="${i}" title="Reproducir">${i===curTrack&&playing?'❚❚':'▶'}</button>
        <button class="track-btn fork" data-i="${i}" title="Comparar versiones">⑂</button>
      </div>
    </div>`).join("");
  $('trackList').querySelectorAll('.track-row').forEach(el=>{
    el.onclick=e=>{
      if(e.target.closest('.fork')){openCompare(+el.dataset.i);return}
      loadTrack(+el.dataset.i,true);
    };
  });
}
function renderCompare(){
  const idx=curTrack;
  $('compareGrid').innerHTML=ORDER.map(k=>{
    const u=UNIVERSES[k],t=u.tracks[idx];
    return `<div class="compare-card ${k}">
      <div class="compare-header">
        <span class="compare-icon">${u.icon}</span>
        <span class="compare-label">${u.label}</span>
        <span class="compare-badge">${u.badge}</span>
      </div>
      <div class="compare-tracks">
        <div class="compare-track ${k===curUni?'current':''}" data-uni="${k}">
          <span class="compare-track-num">${t.side}</span>
          <span class="compare-track-title">${t.t}</span>
          <span class="compare-track-diff">${t.d}</span>
        </div>
        <div style="padding:4px 6px;font-size:9px;color:var(--dos-gray);border-top:1px dotted var(--dos-darkgray)">
          ${t.note}
        </div>
      </div>
    </div>`;
  }).join("");
  $('compareGrid').querySelectorAll('.compare-track').forEach(el=>{
    el.onclick=()=>{switchUni(el.dataset.uni);loadTrack(idx,true)};
  });
}
function renderMeta(){
  const u=uni();
  $('metaGrid').innerHTML=`
    <div class="meta-card">
      <h4>UNIVERSO ${u.label}</h4>
      <div class="meta-row"><span class="meta-label">Nombre</span><span class="meta-value">${u.label}</span></div>
      <div class="meta-row"><span class="meta-label">Tipo</span><span class="meta-value">${u.badge}</span></div>
      <div class="meta-row"><span class="meta-label">Año</span><span class="meta-value">${u.year}</span></div>
      <div class="meta-row"><span class="meta-label">Era</span><span class="meta-value">${u.era}</span></div>
    </div>
    <div class="meta-card">
      <h4>DESCRIPCIÓN</h4>
      <p style="line-height:1.7;color:var(--dos-fg)">${u.desc}</p>
    </div>
    <div class="meta-card">
      <h4>TIMELINE</h4>
      ${ORDER.map(k=>`<div class="meta-row"><span class="meta-label">${UNIVERSES[k].icon} ${UNIVERSES[k].label}</span><span class="meta-value" style="color:${UNIVERSES[k].color}">${k===curUni?'◄ ACTUAL':UNIVERSES[k].year}</span></div>`).join("")}
    </div>
    <div class="meta-card">
      <h4>TECNICAL SPECS</h4>
      <div class="meta-row"><span class="meta-label">CPU Load</span><span class="meta-value">12%</span></div>
      <div class="meta-row"><span class="meta-label">Buffer</span><span class="meta-value">64 KB</span></div>
      <div class="meta-row"><span class="meta-label">Sample Rate</span><span class="meta-value">22.05 kHz</span></div>
      <div class="meta-row"><span class="meta-label">Channels</span><span class="meta-value">2 (Stereo)</span></div>
      <div class="meta-row"><span class="meta-label">Codec</span><span class="meta-value">MPEG-1 Layer 3</span></div>
    </div>`;
}
function renderTree(){
  $('timelineTree').querySelectorAll('.tree-root').forEach(root=>{
    const k=root.dataset.path;
    const t=uni().tracks;
    const kids=root.querySelector('.tree-children');
    kids.innerHTML=t.map((tr,i)=>`<div class="tree-item ${k===curUni&&i===curTrack?'active':''}" data-track="${i}"><span class="tree-num">${pad(i+1)}</span>${tr.t}</div>`).join("");
    kids.querySelectorAll('.tree-item').forEach(el=>el.onclick=e=>{
      e.stopPropagation();
      if(k!==curUni)switchUni(k,false);
      loadTrack(+el.dataset.track,true);
    });
  });
}
function renderPlayer(){
  const u=uni(),t=u.tracks[curTrack];
  $('stTrack').textContent='TRACK: '+pad(curTrack+1)+'/10';
  $('stUniverse').textContent='UNIVERSO: '+u.label;
  $('stTime').textContent=fmt(sec);
  $('blinkRec').textContent=playing?'● PLAY':'● STOP';
  $('blinkRec').className=playing?'blink rec':'blink';
  $('statCPU').textContent=Math.floor(Math.random()*20+5)+'%';
  document.title=`FICTICIA_OS v2.0 | ${u.label} :: ${t.t}`;
}
function renderAll(){
  renderList();renderCompare();renderMeta();renderTree();renderPlayer();
  $('centerTitle').textContent=`${uni().icon}  UNIVERSO ${uni().label} — ${uni().badge}`;
}
function switchUni(k,play){
  curUni=k;
  $('selUniverse').value=k;
  $('statTimeline').textContent=UNIVERSES[curUni].label;
  renderAll();
  if(play)loadTrack(curTrack,true);
}
function setView(v){
  view=v;
  document.querySelectorAll('#centerTabs .tab').forEach(t=>t.classList.toggle('active',t.dataset.view===v));
  document.querySelectorAll('.view').forEach(s=>s.classList.toggle('active',s.id==='view'+v[0].toUpperCase()+v.slice(1)));
  $('stMode').textContent='MODO: '+v.toUpperCase();
  if(v==='wave')drawWave();
  if(v==='compare')renderCompare();
}

/* menu */
function initMenus(){
  const menus=document.querySelectorAll('.menu');
  menus.forEach(m=>{
    const title=m.querySelector('.menu-title');
    title.onclick=e=>{
      e.stopPropagation();
      const wasActive=m.classList.contains('active');
      menus.forEach(x=>x.classList.remove('active'));
      if(!wasActive)m.classList.add('active');
    };
  });
  document.addEventListener('click',()=>menus.forEach(x=>x.classList.remove('active')));
  document.querySelectorAll('.dd-item').forEach(item=>{
    item.onclick=e=>{
      e.stopPropagation();
      menus.forEach(x=>x.classList.remove('active'));
      doAction(item.dataset.act);
    };
  });
}
function doAction(act){
  switch(act){
    case 'prime':case 'alpha':case 'beta':case 'gamma':case 'delta':case 'omega':
      switchUni(act,true);break;
    case 'tracks':setView('list');break;
    case 'compare':setView('compare');break;
    case 'monitor':setView('wave');break;
    case 'spec':openAbout();break;
    case 'nuevo':openModal('Nuevo Universo','<p>Crear una bifurcación desde el universo actual (<b>'+uni().label+'</b>).</p><p>Se generará una línea de tiempo nueva con variación aleatoria en tempo, afinación y mezcla.</p>',[{t:'CREAR BIFURCACIÓN',a:()=>{forkUniverse();closeModal()}},{t:'CANCELAR',a:closeModal}]);break;
    case 'fork':forkUniverse();break;
    case 'cargar':openModal('Cargar Timeline','<p>Selecciona un universo del panel izquierdo o del desplegable de configuración.</p>',[{t:'OK',a:closeModal}]);break;
    case 'guardar':openModal('Guardar Estado','<p>Estado guardado en RAM: 640 KB disponibles.</p><p style="color:var(--dos-green)">✓ OK</p>',[{t:'OK',a:closeModal}]);break;
    case 'salir':openModal('Salir a DOS','<p>Cerrar sesión en FICTICIA_OS y volver al prompt de DOS.</p><p style="color:var(--dos-highlight)">C:\\FICTICIA&gt;_</p>',[{t:'SALIR',a:closeModal},{t:'NO',a:closeModal}]);break;
    case 'merge':mergeUniverses();break;
    case 'reset':switchUni('prime',false);openAbout();break;
    case 'diff':openDiff();break;
    case 'about':openAbout();break;
    case 'keys':openKeys();break;
    case 'lore':openLore();break;
    case 'purge':openModal('Purgar Timeline','<p>¿Eliminar <b>todos los universos</b> excepto Prime?</p><p style="color:var(--dos-red)">⚠ Esta acción no se puede deshacer.</p>',[{t:'PURGAR',a:()=>{purgeUniverses();closeModal()}},{t:'CANCELAR',a:closeModal}]);break;
  }
}
function forkUniverse(){
  const keys=Object.keys(UNIVERSES).filter(k=>!ORDER.includes(k));
  const id='fork_'+Date.now().toString(36);
  const u=JSON.parse(JSON.stringify(uni()));
  const letters='ABCDEFGHJKLMNPRSTVWXYZ';
  u.label='FORK-'+letters[Math.floor(Math.random()*letters.length)];
  u.icon='⑂';u.badge='BIFURCACIÓN';u.year=2026;u.era='GENERADO EN VIVO';
  u.desc='Bifurcación generada desde '+uni().label+' con variación pseudoaleatoria.';
  u.tracks.forEach(t=>{
    const p=t.d.split(':');
    const d=Math.max(45,+p[0]*60+ +p[1]+Math.floor(Math.random()*40-20));
    t.d=fmt(d);
    t.diff='MUTACIÓN';
  });
  UNIVERSES[id]=u;ORDER.push(id);
  const root=document.createElement('div');
  root.className='tree-root';root.dataset.path=id;
  root.innerHTML=`<span class="tree-toggle">▶</span><span class="tree-icon">${u.icon}</span><span class="tree-label">Universo ${u.label} <span class="tree-badge">BIFURCACIÓN</span></span><div class="tree-children hidden"></div>`;
  $('timelineTree').appendChild(root);
  initTreeRoots();
  const opt=document.createElement('option');
  opt.value=id;opt.textContent=`⑂ ${u.label} — Bifurcación`;
  $('selUniverse').appendChild(opt);
  switchUni(id,true);
}
function mergeUniverses(){
  openModal('Fusionar Timelines','<p>Combinar el universo actual con otro para generar una mezcla de ambas líneas de tiempo.</p>',[
    ...ORDER.filter(k=>k!==curUni).map(k=>({t:'FUSIONAR CON '+UNIVERSES[k].label,a:()=>{doMerge(k);closeModal()}})),
    {t:'CANCELAR',a:closeModal}
  ]);
}
function doMerge(other){
  const a=uni(),b=UNIVERSES[other];
  const id='merge_'+Date.now().toString(36);
  const u={icon:'⧉',label:a.label.slice(0,3)+b.label.slice(0,3),badge:'FUSIONADO',year:2026,era:'A+B TIMELINE',color:'#ffffff',
    desc:`Fusión de ${a.label} y ${b.label}. Todos los tracks existen en las dos líneas.`,
    tracks:a.tracks.map((t,i)=>({...t,d:t.d>b.tracks[i].d?t.d:b.tracks[i].d,diff:'A+B'}))};
  UNIVERSES[id]=u;ORDER.push(id);
  const root=document.createElement('div');
  root.className='tree-root';root.dataset.path=id;
  root.innerHTML=`<span class="tree-toggle">▶</span><span class="tree-icon">${u.icon}</span><span class="tree-label">Universo ${u.label} <span class="tree-badge">FUSIONADO</span></span><div class="tree-children hidden"></div>`;
  $('timelineTree').appendChild(root);
  initTreeRoots();
  const opt=document.createElement('option');
  opt.value=id;opt.textContent=`⧉ ${u.label} — Fusión`;
  $('selUniverse').appendChild(opt);
  switchUni(id,true);
}
function purgeUniverses(){
  ORDER.slice().forEach(k=>{
    if(k!=='prime'){
      delete UNIVERSES[k];
      const el=$('timelineTree').querySelector(`.tree-root[data-path="${k}"]`);
      if(el)el.remove();
    }
  });
  ORDER.splice(1);
  $('selUniverse').innerHTML=ORDER.map(k=>`<option value="${k}">${UNIVERSES[k].icon} ${UNIVERSES[k].label} — ${UNIVERSES[k].badge}</option>`).join('');
  switchUni('prime',false);
}
function initTreeRoots(){
  $('timelineTree').querySelectorAll('.tree-root>div:first-child').forEach(h=>{
    h.onclick=()=>{
      const root=h.parentElement;
      const tog=root.querySelector('.tree-toggle'),kids=root.querySelector('.tree-children');
      const exp=root.classList.toggle('expanded');
      tog.textContent=exp?'▼':'▶';
      kids.classList.toggle('hidden',!exp);
      if(exp&&!kids.children.length){
        const k=root.dataset.path;
        if(UNIVERSES[k]&&k!==curUni)switchUni(k,false);
      }
    };
  });
}

/* modals */
function openModal(title,body,buttons){
  $('modalTitle').textContent=title;
  $('modalBody').innerHTML=body;
  $('modalFooter').innerHTML='';
  (buttons||[{t:'OK',a:closeModal}]).forEach(b=>{
    const btn=document.createElement('button');
    btn.className='btn';btn.textContent=b.t;btn.onclick=b.a;
    $('modalFooter').appendChild(btn);
  });
  $('modalOverlay').hidden=false;
}
function closeModal(){$('modalOverlay').hidden=true}
function openCompare(idx){
  curTrack=idx;
  setView('compare');
  openModal('VERSIONES DEL TEMA '+pad(idx+1),
    `<p style="color:var(--dos-highlight);margin-bottom:12px">${uni().tracks[idx].t}</p>
     <p>${ORDER.map(k=>`<div class="compare-track ${k===curUni?'current':''}" data-uni="${k}" style="padding:6px;border-bottom:1px dotted var(--dos-darkgray)">
       <span class="compare-track-num">${UNIVERSES[k].tracks[idx].side}</span>
       <span class="compare-track-title">${UNIVERSES[k].icon} ${UNIVERSES[k].label} — ${UNIVERSES[k].badge}</span>
       <span class="compare-track-diff">${UNIVERSES[k].tracks[idx].d}</span>
     </div><div style="padding:2px 6px 6px;font-size:10px;color:var(--dos-gray)">${UNIVERSES[k].tracks[idx].note}</div>`).join('')}</p>
     <p style="color:var(--dos-green);margin-top:12px">Hacé click en una versión para saltar a ese universo.</p>`,
    [{t:'CERRAR',a:closeModal}]);
  $('modalBody').querySelectorAll('.compare-track').forEach(el=>el.onclick=()=>{
    switchUni(el.dataset.uni,false);loadTrack(idx,true);closeModal();setView('compare');
  });
}
function openDiff(){
  const i=curTrack;
  const rows=ORDER.map(k=>{
    const t=UNIVERSES[k].tracks[i];
    return `<tr><td>${UNIVERSES[k].icon} ${UNIVERSES[k].label}</td><td>${t.d}</td><td>${t.side}</td><td style="color:var(--dos-gray);font-size:10px">${t.note}</td></tr>`;
  }).join('');
  openModal('DIFFERENCIAS — TEMA '+pad(i+1)+': '+uni().tracks[i].t,
    `<table style="width:100%;border-collapse:collapse;font-size:11px">
      <thead><tr style="background:var(--dos-title-bg);color:var(--dos-title-fg)">
        <th style="padding:4px;text-align:left">Universo</th><th style="padding:4px;text-align:left">Duración</th>
        <th style="padding:4px;text-align:left">Lado</th><th style="padding:4px;text-align:left">Notas</th>
      </tr></thead><tbody>${rows}</tbody></table>`,
    [{t:'CERRAR',a:closeModal}]);
}
function openAbout(){
  openModal('ACERCA DE FICTICIA_OS v2.0',
    `<p style="text-align:center;margin-bottom:16px"><span style="font-family:'Press Start 2P',monospace;font-size:12px;color:var(--dos-highlight)">FICTICIA_OS<br>PARALLEL UNIVERSE MODULE</span></p>
     <p style="line-height:1.8">Este es el <b>multiverso</b> del disco "Ya está pasando!". Cada universo es una versión diferente de los mismos 10 temas: remixes, acústicos, instrumentales, grabaciones en vivo, mezclas finales.</p>
     <p style="line-height:1.8;margin-top:12px">Usá el <b>panel izquierdo</b> o el desplegable <b>Configuración</b> para saltar entre universos. Presioná <b>⑂</b> en un track para ver todas sus versiones lado a lado. Creá bifurcaciones con <b>Ctrl+F</b>.</p>
     <div style="margin-top:16px;padding:8px;background:rgba(255,255,255,0.05);border:1px solid var(--dos-border);font-family:'VT323',monospace;font-size:14px;color:var(--dos-cyan)">
       ▓ FICTICIA © 2026 · NO HAY DERECHOS<br>COPIÁ Y DESTRUÍ · press START
     </div>`,
    [{t:'ENTENDIDO',a:closeModal}]);
}
function openKeys(){
  openModal('TECLAS RÁPIDAS',
    `<div class="meta-row"><span class="meta-label">F1</span><span class="meta-value">Abrir ayuda</span></div>
     <div class="meta-row"><span class="meta-label">F2</span><span class="meta-value">Vista de comparación</span></div>
     <div class="meta-row"><span class="meta-label">F3</span><span class="meta-value">Ver diferencias del tema</span></div>
     <div class="meta-row"><span class="meta-label">F4</span><span class="meta-value">Monitor de onda</span></div>
     <div class="meta-row"><span class="meta-label">Ctrl+N</span><span class="meta-value">Nuevo universo (bifurcación)</span></div>
     <div class="meta-row"><span class="meta-label">Ctrl+M</span><span class="meta-value">Fusionar universos</span></div>
     <div class="meta-row"><span class="meta-label">Ctrl+R</span><span class="meta-value">Restaurar Prime</span></div>
     <div class="meta-row"><span class="meta-label">↑↓</span><span class="meta-value">Cambiar de track</span></div>
     <div class="meta-row"><span class="meta-label">Espacio</span><span class="meta-value">Play / Pause</span></div>
     <div class="meta-row"><span class="meta-label">←→</span><span class="meta-value">Cambiar de universo</span></div>`,
    [{t:'CERRAR',a:closeModal}]);
}
function openLore(){
  openModal('LORE DEL MULTIVERSO',
    `<p style="line-height:1.8">En 1994, <b>ficticia.</b> grabó "Ya está pasando!" en un galpón con una cinta de 1/4". Eso fue <b>Prime</b>: el universo raíz, el que existe.</p>
     <p style="line-height:1.8;margin-top:12px">Pero cada banda que hace ruido genera <b>ramificaciones</b>. Lo que se pudo remixear se remixeó (<b>Alpha</b>). Lo que se pudo desarmar se desarmó (<b>Beta</b>). Lo que nunca tuvo letra se volvió instrumental (<b>Gamma</b>). Lo que se tocó frente a 300 personas existe en otra línea (<b>Delta</b>).</p>
     <p style="line-height:1.8;margin-top:12px">Y al final, todas convergen (<b>Omega</b>) — no porque sea mejor, sino porque sobrevivió al paso del tiempo.</p>
     <p style="line-height:1.8;margin-top:16px;color:var(--dos-cyan)">Podés crear tus propias ramas con <b>Ctrl+F</b>. Cada bifurcación genera una nueva línea de tiempo mutable.</p>`,
    [{t:'CERRAR',a:closeModal}]);
}

/* wave */
let wavePhase=0;
function drawWave(){
  const c=$('waveCanvas');
  const ctx=c.getContext('2d');
  const W=c.width=c.clientWidth,H=c.height=c.clientHeight;
  const u=uni(),t=u.tracks[curTrack];
  ctx.clearRect(0,0,W,H);
  const mid=H/2;
  ctx.strokeStyle=playing?'#00ff00':'#ffff00';
  ctx.lineWidth=1;
  ctx.beginPath();
  for(let x=0;x<W;x++){
    const env=Math.sin(x/W*Math.PI);
    const y=mid+Math.sin(x*0.08+wavePhase)*env*(playing?mid*0.7:mid*0.08);
    x===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
  }
  ctx.stroke();
  if(playing)wavePhase+=0.4;
  $('waveInfo').innerHTML=`
    <div class="wave-info-item"><span class="wave-info-label">Universo</span><span class="wave-info-value">${u.label}</span></div>
    <div class="wave-info-item"><span class="wave-info-label">Tema</span><span class="wave-info-value">${pad(curTrack+1)} · ${t.t}</span></div>
    <div class="wave-info-item"><span class="wave-info-label">Duración</span><span class="wave-info-value">${t.d}</span></div>
    <div class="wave-info-item"><span class="wave-info-label">Estado</span><span class="wave-info-value">${playing?'PLAY':'STOP'}</span></div>`;
}
setInterval(()=>{if(view==='wave')drawWave()},50);
setInterval(()=>{$('statCPU').textContent=Math.floor(Math.random()*20+5)+'%'},2000);

/* splitters */
function initSplitters(){
  const sp=$('splitterV'),pl=$('panelLeft');
  sp.onmousedown=e=>{
    e.preventDefault();
    const startX=e.clientX,startW=pl.offsetWidth;
    const move=ev=>{pl.style.width=Math.max(180,Math.min(400,startW+ev.clientX-startX))+'px'};
    const up=()=>{document.removeEventListener('mousemove',move);document.removeEventListener('mouseup',up)};
    document.addEventListener('mousemove',move);document.addEventListener('mouseup',up);
  };
  const sh=$('splitterH'),pr=$('panelRight');
  sh.onmousedown=e=>{
    e.preventDefault();
    const startX=e.clientX,startW=pr.offsetWidth;
    const move=ev=>{pr.style.width=Math.max(220,Math.min(420,startW+startX-ev.clientX))+'px'};
    const up=()=>{document.removeEventListener('mousemove',move);document.removeEventListener('mouseup',up)};
    document.addEventListener('mousemove',move);document.addEventListener('mouseup',up);
  };
}
function initCollapse(){
  $('btnCollapseLeft').onclick=()=>{
    collapsed.left=!collapsed.left;
    $('panelLeft').style.display=collapsed.left?'none':'';
    $('splitterV').style.display=collapsed.left?'none':'';
    $('btnCollapseLeft').textContent=collapsed.left?'▶':'◀';
  };
  $('btnCollapseRight').onclick=()=>{
    collapsed.right=!collapsed.right;
    $('panelRight').style.display=collapsed.right?'none':'';
    $('splitterH').style.display=collapsed.right?'none':'';
    $('btnCollapseRight').textContent=collapsed.right?'◀':'▶';
  };
}

/* sliders */
function initSliders(){
  ['Entropy','Divergence','Stability','Quantum'].forEach(n=>{
    const s=$('sl'+n),v=$('v'+n);
    s.oninput=()=>{v.textContent=s.value+'%'};
  });
}
function initButtons(){
  $('btnApply').onclick=()=>{
    switchUni($('selUniverse').value,false);
    openModal('Aplicado','<p style="color:var(--dos-green)">✓ Cambios aplicados al universo '+uni().label+'</p>',[{t:'OK',a:closeModal}]);
  };
  $('btnReset').onclick=()=>{
    ['Entropy','Divergence','Stability','Quantum'].forEach(n=>{
      const s=$('sl'+n),v=$('v'+n);
      s.value=({Entropy:15,Divergence:30,Stability:85,Quantum:5})[n];
      v.textContent=s.value+'%';
    });
    ['chkShowDeleted','chkShowAlternate','chkShowUnreleased','chkAutoSync'].forEach(id=>{
      const c=$(id);if(c)c.checked=['chkShowDeleted','chkShowAlternate'].includes(id);
    });
    switchUni('prime',false);
    openModal('Restaurado','<p style="color:var(--dos-green)">✓ Defaults restaurados. Universo Prime activo.</p>',[{t:'OK',a:closeModal}]);
  };
  $('btnPurge').onclick=()=>doAction('purge');
}
function initTabs(){
  $('centerTabs').querySelectorAll('.tab').forEach(t=>t.onclick=()=>setView(t.dataset.view));
}

/* audio */
audio.addEventListener('timeupdate',()=>{sec=Math.floor(audio.currentTime||0);renderPlayer()});
audio.addEventListener('play',()=>{playing=true;renderAll()});
audio.addEventListener('pause',()=>{playing=false;renderAll()});
audio.addEventListener('ended',()=>loadTrack(curTrack+1,true));
audio.addEventListener('loadedmetadata',()=>renderPlayer());

/* keyboard */
document.addEventListener('keydown',e=>{
  if(!$('modalOverlay').hidden){
    if(e.key==='Escape')closeModal();
    return;
  }
  const k=e.key;
  if(k==='F1'){e.preventDefault();openKeys()}
  else if(k==='F2'){e.preventDefault();setView('compare')}
  else if(k==='F3'){e.preventDefault();openDiff()}
  else if(k==='F4'){e.preventDefault();setView('wave')}
  else if(k==='F5'){e.preventDefault();setView('meta')}
  else if(k==='ArrowUp'){e.preventDefault();loadTrack(curTrack-1,true)}
  else if(k==='ArrowDown'){e.preventDefault();loadTrack(curTrack+1,true)}
  else if(k==='ArrowLeft'){e.preventDefault();switchUni(ORDER[(ORDER.indexOf(curUni)+ORDER.length-1)%ORDER.length],true)}
  else if(k==='ArrowRight'){e.preventDefault();switchUni(ORDER[(ORDER.indexOf(curUni)+1)%ORDER.length],true)}
  else if(k===' '){e.preventDefault();if(playing){audio.pause()}else{audio.play().catch(()=>{})}}
  else if(e.ctrlKey&&(k==='f'||k==='F')){e.preventDefault();forkUniverse()}
  else if(e.ctrlKey&&(k==='m'||k==='M')){e.preventDefault();mergeUniverses()}
  else if(e.ctrlKey&&(k==='r'||k==='R')){e.preventDefault();switchUni('prime',false)}
  else if(e.ctrlKey&&(k==='n'||k==='N')){e.preventDefault();forkUniverse()}
});

/* init */
initMenus();
initTreeRoots();
initSplitters();
initCollapse();
initSliders();
initButtons();
initTabs();
$('selUniverse').onchange=e=>switchUni(e.target.value,false);
$('modalClose').onclick=closeModal;
$('modalOverlay').onclick=e=>{if(e.target===$('modalOverlay'))closeModal()};
switchUni('prime',false);
loadTrack(0,false);
setView('list');
setInterval(()=>{renderPlayer()},1000);