(() => {
 const clock=document.getElementById('clock');
 if(clock){const tick=()=>{const d=new Date();clock.textContent=[d.getHours(),d.getMinutes(),d.getSeconds()].map(n=>String(n).padStart(2,'0')).join(':')};tick();setInterval(tick,1000)}
 const search=document.getElementById('archiveSearch');
 if(search){const cards=[...document.querySelectorAll('[data-searchable]')];const status=document.getElementById('searchStatus');const run=()=>{const q=search.value.trim().toLocaleLowerCase('pt-BR');let n=0;cards.forEach(c=>{const ok=c.innerText.toLocaleLowerCase('pt-BR').includes(q);c.classList.toggle('hidden',!ok);if(ok)n++});status.textContent=`${n} registro(s) encontrado(s)${q?' para “'+search.value+'”':''}.`};search.addEventListener('input',run);run()}
 const form=document.getElementById('terminalForm');
 if(form){const input=document.getElementById('terminalInput'),out=document.getElementById('terminalOutput');const history=[];
 const print=(s,cls='')=>{const div=document.createElement('div');div.className=cls;div.textContent=s;out.appendChild(div);out.scrollTop=out.scrollHeight};
 const run=(raw)=>{const cmd=raw.trim();if(!cmd)return;print('> '+cmd);const key=cmd.toLowerCase();
 const responses={
 'help':'COMANDOS: HELP / LIST / STATUS / SEARCH [termo] / OPEN [código] / DECRYPT [código] / CLEAR',
 'list':'ÍNDICE LOCAL:\\nL-09   corredor sem planta\\n17-04  transcrição do Canal 7\\n98-C   cidade apagada\\nM-00   memorando da diretoria\\nP-0    protocolo selado [BLOQUEADO]',
 'status':'ARQUIVO: dessincronizado\\nCANAL 7: portadora ativa\\nMEMÓRIA CIVIL: divergência 3/3\\nAVISO: não confie apenas em datas.',
 'open l-09':'ABRINDO L-09… referência cruzada: 17-04. A planta termina na sala 08; a gravação começa na sala 09.',
 'open 17-04':'ABRINDO 17-04… trecho ausente: “a pessoa que respondeu ainda não tinha entrado na sala”.',
 'open 98-c':'ABRINDO 98-C… três mapas têm a mesma margem rasurada. Verifique o memorando M-00.',
 'open m-00':'M-00: “A ordem cronológica é uma camada de contenção. Procure a sequência, não a data.”',
 'decrypt canal7':'CHAVE ACEITA. FRAGMENTO: A PORTA NÃO ESTÁ NO CORREDOR. O CORREDOR ESTÁ NA LEMBRANÇA.',
 'decrypt 0317':'CHAVE ACEITA. FRAGMENTO: 03:17 é o horário registrado quando o índice tenta se corrigir.',
 'decrypt l0917':'CHAVE ACEITA. FRAGMENTO: L-09 / 17-04 / 98-C. Três ocorrências. Uma origem.',
 'open p-0':'ACESSO NEGADO. O Protocolo 0 exige três referências cruzadas. Consulte L-09, 17-04 e 98-C.',
 'clear':'__CLEAR__'
 };
 if(key==='clear'){out.innerHTML='';return}
 if(key.startsWith('search ')){const q=key.slice(7);const map={'porta':'L-09, 17-04, 98-C — a palavra aparece nos três registros.','0317':'L-09 e M-00 — horário de correção do índice.','memória':'98-C e M-00 — testemunhos e nota da diretoria.','canal':'17-04 — transcrição de áudio.'};print(map[q]||'Nenhum resultado exato. Tente PORTA, 0317, MEMÓRIA ou CANAL.');return}
 if(key==='open l-09'||key==='open 17-04'||key==='open 98-c'||key==='open m-00'||key==='open p-0'||key==='decrypt canal7'||key==='decrypt 0317'||key==='decrypt l0917'||responses[key]){print(responses[key]);return}
 print('COMANDO NÃO RECONHECIDO. Digite HELP para ver os comandos.','err')
 };
 form.addEventListener('submit',e=>{e.preventDefault();run(input.value);input.value='';input.focus()});print('NÚCLEO LAZARO // TERMINAL LOCAL v.3.17\\nSessão recuperada. Digite HELP.');}
 const reveal=document.querySelectorAll('[data-reveal]');
 reveal.forEach(el=>el.addEventListener('click',()=>{const target=document.getElementById(el.dataset.reveal);if(target)target.classList.toggle('hidden')}));
})();