(function(){
var V=window.VK=window.VK||{},L='en',N=0,
C={b:'var(--series-1,#2a78d6)',o:'var(--series-2,#eb6834)',g:'var(--text-success,#3b6d11)',r:'var(--text-danger,#a32d2d)',y:'var(--series-4,#eda100)',m:'var(--text-muted,#888780)',p:'var(--series-7,#6250d6)',k:'var(--text-primary,#141413)'},
S='.vk{line-height:1.4;font-size:13px;color:var(--text-primary)}.vk *{box-sizing:border-box}.vk b{font-weight:500}'+
'.vg{display:grid;gap:12px 24px;align-items:start}.vp{min-width:0;margin-bottom:12px}.vg>.vp,.vg>div{margin-bottom:0}.vk>.vg{margin-bottom:12px}'+
'.vl{display:flex;justify-content:space-between;gap:8px;font-size:12px;color:var(--text-secondary);margin:0 0 6px}.vl b{color:var(--text-primary)}'+
'.vt{width:100%;border-collapse:collapse;font-variant-numeric:tabular-nums}.vt th{font-size:12px;font-weight:400;color:var(--text-muted);text-align:left;vertical-align:bottom;line-height:1.25;padding:0 0 6px}'+
'.vt td{padding:6px 0;border-bottom:0.5px solid var(--border);vertical-align:middle}.vt th+th,.vt td+td{padding-left:14px}.vt .n{text-align:right}.vt td.n{white-space:nowrap}.vt td:first-child{font-weight:500;white-space:nowrap}'+
'.vt tr.h td{background:color-mix(in srgb,'+C.o+' 9%,transparent)}.vt tr.t td{border-top:1px solid var(--border-strong);border-bottom:0;font-weight:500}'+
'.vb{display:flex;align-items:center;gap:8px}.vb b{white-space:nowrap;min-width:3.2em;text-align:right}.vk .vr{position:relative;flex:1;min-width:60px;height:10px;border-radius:3px;background:color-mix(in srgb,var(--text-muted,#888780) 16%,transparent)}'+
'.vr i{position:absolute;left:0;top:0;bottom:0;width:0;border-radius:3px;transition:width .8s cubic-bezier(.2,.7,.2,1)}.vr em{position:absolute;top:-4px;bottom:-4px;width:2px;margin-left:-1px;background:var(--text-primary)}'+
'.vc{display:inline-block;font-size:11px;font-weight:500;border-radius:var(--radius,6px);padding:2px 8px;margin-left:8px;white-space:nowrap}'+
'.vh{display:grid;grid-template-columns:auto minmax(0,1fr) auto;gap:8px 12px;align-items:center}.vh .vr{height:16px}.vh b{text-align:right;white-space:nowrap;font-variant-numeric:tabular-nums}'+
'.vi>div{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:12px;align-items:baseline;padding:6px 0;border-bottom:0.5px solid var(--border)}.vi>div>span{white-space:nowrap;color:var(--text-secondary);font-variant-numeric:tabular-nums}.vi>div>b{min-width:0}'+
'.vi.f>div{grid-template-columns:auto minmax(0,1fr);gap:8px;color:var(--text-secondary)}.vi.f b{color:var(--text-primary)}'+
'.vj{display:grid;gap:8px}.vj>div{background:var(--surface-1);border-radius:var(--radius,8px);padding:8px 10px}.vj>div>b{display:flex;gap:6px;align-items:baseline}.vj>div>span{font-size:12px;color:var(--text-secondary)}'+
'.vk .vn{display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:50%;background:var(--text-primary);color:var(--surface-2,#fff);font-size:11px;font-weight:500;flex:none}'+
'.vo{font-size:12px;color:var(--text-secondary);background:var(--surface-1);border-radius:var(--radius,8px);padding:7px 11px}.vo b{color:var(--text-primary)}'+
'.vx{display:flex;flex-wrap:wrap;gap:4px 16px;font-size:12px;color:var(--text-secondary);margin:4px 0 0}.vx i{display:inline-block;width:10px;height:10px;border-radius:2px;margin-right:5px;vertical-align:-1px}'+
'.vs{font-size:12px;color:var(--text-muted);margin-top:4px}.vk svg{display:block;overflow:visible}.vk svg text{font-size:11px;fill:var(--text-muted)}.vk svg .vw{font-size:12px;font-weight:500;fill:var(--text-primary)}'+
'.vk svg .vz{font-size:11px;font-weight:500;fill:var(--text-secondary)}.vk svg circle.d{transition:opacity .5s}';
function nb(s){return String(s==null?'':s).replace(/(\d) (?=\d{3}(?!\d))/g,'$1 ').replace(/(\d) (%|€)/g,'$1 $2')}
function e(s){return nb(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
function h(s){return e(s).replace(/(\S) -(?=\S)/g,'$1\u00a0-\u2060').replace(/\*\*(.+?)\*\*/g,'<b>$1</b>')}
function fx(v,d){return v.toLocaleString(L,{minimumFractionDigits:d,maximumFractionDigits:d})}
function lab(d){return d.l||d.lr?'<div class="vl"><span>'+h(d.l||'')+'</span>'+(d.lr?'<b>'+h(d.lr)+'</b>':'')+'</div>':''}
function leg(a){return a?'<div class="vx">'+a.map(function(q){if(!q[1])return'<span>'+h(q[0])+'</span>';var c=C[q[1]],s=q[2]=='c'?'background:'+c+';border-radius:50%':q[2]=='l'||q[2]=='d'?'height:0;width:16px;border-radius:0;border-top:2px '+(q[2]=='d'?'dashed ':'solid ')+c:'background:'+c;return'<span><i style="'+s+'"></i>'+h(q[0])+'</span>'}).join('')+'</div>':''}
function tint(t){return'color:'+C[t]+';background:color-mix(in srgb,'+C[t]+' 14%,transparent)'}
function later(f){requestAnimationFrame(function(){requestAnimationFrame(f)})}
function grow(el){later(function(){el.querySelectorAll('[data-w]').forEach(function(i){i.style.width=i.dataset.w+'%'})})}
function bar(v,t,m,k){return'<span class="vr"><i style="background:'+C[t||'b']+'" data-w="'+Math.max(0,Math.min(100,v/m*100))+'"></i>'+(k!=null?'<em style="left:'+k/m*100+'%"></em>':'')+'</span>'}
function cell(c,k){var a=Array.isArray(c),v=a?c[0]:c,t=a?c[1]:0,n=k[1]&&k[1]!='b'?' class="n"':'';
if(k[1]=='b'&&a&&typeof v=='number')return'<td><div class="vb">'+bar(v,t,k[2]||100,k[3])+'<b>'+h(c[2])+'</b></div></td>';
if(a&&c[2]!=null)return'<td'+n+'>'+h(v)+'<span class="vc" style="'+tint(t)+'">'+h(c[2])+'</span></td>';
return'<td'+n+(t?' style="color:'+C[t]+';font-weight:500"':'')+'>'+h(v)+'</td>'}
V.table=function(el,d){var H=d.h.map(function(c){return typeof c=='string'?[c]:c}),x=d.x||[],s='<table class="vt"><tr>'+H.map(function(c){return'<th'+(c[1]&&c[1]!='b'?' class="n"':'')+(c[1]=='b'&&c[4]?' style="width:'+c[4]+'px"':'')+'>'+h(c[0])+'</th>'}).join('')+'</tr>';
d.r.forEach(function(r,i){s+='<tr class="'+(x.indexOf(i)>-1?'h':'')+(d.T&&i==d.r.length-1?' t':'')+'">'+r.map(function(c,j){return cell(c,H[j]||[])}).join('')+'</tr>'});
el.innerHTML=lab(d)+s+'</table>'+leg(d.lg);grow(el)};
V.bars=function(el,d){el.innerHTML=lab(d)+'<div class="vh">'+d.r.map(function(r){return'<span>'+h(r[0])+'</span>'+bar(r[1],r[2],d.m)+'<b>'+h(r[3])+'</b>'}).join('')+'</div>'+leg(d.lg);grow(el)};
V.list=function(el,d){var k=d.k||1,s=d.r.map(function(r,i){var n=d.n?'<span class="vn">'+(i+1)+'</span>':'';
if(k>1)return'<div><b>'+n+'<span>'+h(r[0])+'</span></b><span>'+h(r[1])+'</span></div>';
if(r.length<2)return'<div>'+n+'<span>'+h(r[0])+'</span></div>';
return'<div><b style="display:flex;gap:8px;align-items:baseline">'+n+'<span>'+h(r[0])+'</span></b><span'+(r[2]?' style="color:'+C[r[2]]+'"':'')+'>'+h(r[1])+'</span></div>'}).join('');
el.innerHTML=lab(d)+(k>1?'<div class="vj" style="grid-template-columns:repeat('+k+',minmax(0,1fr))">':'<div class="vi'+(d.r[0].length<2?' f':'')+'">')+s+'</div>'};
V.note=function(el,d){el.innerHTML='<div class="vo">'+h(d.t||d)+'</div>'};
function frame(el,d){var W=Math.max(240,el.clientWidth||600),H=d.h||170,X=d.x,Y=d.y,ml=d.ml||40,mr=d.mr||12,mt=d.mt||12,mb=d.xl?34:22,
x=function(v){return ml+(v-X[0])/(X[1]-X[0])*(W-ml-mr)},y=function(v){return H-mb-(v-Y[0])/(Y[1]-Y[0])*(H-mb-mt)},g='';
(Y[2]||[]).forEach(function(t){g+='<line x1="'+ml+'" x2="'+(W-mr)+'" y1="'+y(t[0])+'" y2="'+y(t[0])+'" stroke="var(--border)"/>'+(t[1]!=null?'<text x="'+(ml-6)+'" y="'+(y(t[0])+4)+'" text-anchor="end">'+e(t[1])+'</text>':'')});
g+='<line x1="'+ml+'" x2="'+(W-mr)+'" y1="'+(H-mb)+'" y2="'+(H-mb)+'" stroke="var(--border-strong)"/>';
(X[2]||[]).forEach(function(t){var a=t[0]<=X[0]?'start':t[0]>=X[1]?'end':'middle';g+='<text x="'+x(t[0])+'" y="'+(H-mb+15)+'" text-anchor="'+a+'">'+e(t[1])+'</text>'});
if(d.xl)g+='<text x="'+(ml+(W-ml-mr)/2)+'" y="'+(H-3)+'" text-anchor="middle" class="vz">'+e(d.xl)+'</text>';
if(d.yl)g+='<text x="'+(ml-6)+'" y="'+(mt-2)+'" text-anchor="end" class="vz">'+e(d.yl)+'</text>';
return{W:W,H:H,x:x,y:y,g:g,t:mt,b:H-mb,l:ml,r:W-mr}}
function dash(F,v,c){return'<line x1="'+F.l+'" x2="'+F.r+'" y1="'+F.y(v)+'" y2="'+F.y(v)+'" stroke="'+(C[c]||C.m)+'" stroke-dasharray="4 3"/>'}
function vdash(F,v,c){return'<line x1="'+F.x(v)+'" x2="'+F.x(v)+'" y1="'+F.t+'" y2="'+F.b+'" stroke="'+(C[c]||C.m)+'" stroke-dasharray="4 3"/>'}
V.lines=function(el,d){el.innerHTML=lab(d)+'<svg></svg>'+leg(d.lg);var sv=el.querySelector('svg'),F=frame(sv.parentNode,d),x=F.x,y=F.y,id='vk'+(++N),g=F.g,
pts=function(s){return typeof s[0]=='number'?s[1].map(function(v,i){return[s[0]+i,v]}):s},
P=function(p){return'M'+p.map(function(q){return x(q[0]).toFixed(1)+','+y(q[1]).toFixed(1)}).join('L')};
(d.hr||[]).forEach(function(t){g+=dash(F,t[0],t[2])+(t[1]!=null?'<text x="'+(F.l-6)+'" y="'+(y(t[0])+4)+'" text-anchor="end">'+e(t[1])+'</text>':'')});
var c='<g clip-path="url(#'+id+')">';
if(d.b){var s=pts(d.s[d.b[0]][0]),f=d.b[1];c+='<path d="'+P(s.map(function(q){return[q[0],q[1]*(1+f)]}))+'L'+s.slice().reverse().map(function(q){return x(q[0]).toFixed(1)+','+y(q[1]*(1-f)).toFixed(1)}).join('L')+'Z" fill="'+C[d.s[d.b[0]][1]]+'" fill-opacity=".13"/>'}
d.s.forEach(function(s){c+='<path d="'+P(pts(s[0]))+'" fill="none" stroke="'+C[s[1]]+'" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"'+(s[2]?' stroke-dasharray="5 4"':'')+'/>'});
(d.v||[]).forEach(function(t){g+=vdash(F,t[0])+'<text x="'+(x(t[0])-5)+'" y="'+(F.t+9)+'" text-anchor="end" class="vz">'+e(t[1])+'</text>'});
(d.a||[]).forEach(function(t){c+='<circle cx="'+x(t[0])+'" cy="'+y(t[1])+'" r="4.5" fill="'+C[t[3]||'k']+'" stroke="var(--surface-2,#fff)" stroke-width="2"/><text x="'+(x(t[0])+(t[4]||7))+'" y="'+(y(t[1])+(t[5]||4))+'" text-anchor="'+(t[6]||'start')+'" class="vw">'+e(t[2])+'</text>'});
sv.setAttribute('viewBox','0 0 '+F.W+' '+F.H);sv.setAttribute('width','100%');
sv.innerHTML='<defs><clipPath id="'+id+'"><rect x="0" y="-20" width="0" height="'+(F.H+40)+'"/></clipPath></defs>'+g+c+'</g>';
var r=sv.querySelector('rect'),t0;requestAnimationFrame(function a(t){t0=t0||t;var q=Math.min(1,(t-t0)/1100);r.setAttribute('width',F.W*(1-Math.pow(1-q,3))+20);if(q<1)requestAnimationFrame(a)})};
function gen(G){var s=G[0]*7919+13,o=[],R=function(){s=(Math.imul(s,1103515245)+12345)&2147483647;return s/2147483648};
for(var i=0;i<G[1];i++){var p=R()*100,b=G[2]+(G[3]-G[2])*Math.pow(Math.max(0,(p-G[5])/(100-G[5])),G[6]);o.push([p,b+(R()-.5)*G[4]])}return o}
function rr(p){var n=p.length,a=0,b=0,c=0,e=0,f=0;p.forEach(function(q){a+=q[0];b+=q[1]});a/=n;b/=n;p.forEach(function(q){c+=(q[0]-a)*(q[1]-b);e+=(q[0]-a)*(q[0]-a);f+=(q[1]-b)*(q[1]-b)});return c/Math.sqrt(e*f)}
V.scatter=function(el,d){var p=d.p||gen(d.G),D=Object.assign({},d);if(d.rl)D.lr=d.rl.replace('$1',fx(Math.round(rr(p)*100)/100,2));
el.innerHTML=lab(D)+'<svg></svg>'+leg(d.lg);var sv=el.querySelector('svg'),F=frame(sv.parentNode,d),x=F.x,y=F.y,z='',c='',n='';
(d.z||[]).forEach(function(q){var a=x(q[0]),b=y(q[3]);z+='<rect x="'+a+'" y="'+b+'" width="'+(x(q[1])-a)+'" height="'+(y(q[2])-b)+'" fill="'+C[q[4]]+'" fill-opacity=".1"/>'+(q[5]?'<text x="'+(q[6]?x(q[1])-6:a+6)+'" y="'+(q[7]?b-6:b+13)+'" text-anchor="'+(q[6]?'end':'start')+'" class="vz">'+e(q[5])+'</text>':'')});
(d.hr||[]).forEach(function(q){z+=dash(F,q[0],q[1])});(d.vr||[]).forEach(function(q){z+=vdash(F,q[0],q[1])});
p.forEach(function(q,i){var t=q[2]||'b',r=d.r||4;if(d.c){t=q[0]>d.c[0]?d.c[1]:d.c[2];r=q[0]>d.c[0]?5:4}
c+='<circle class="d" style="opacity:0;transition-delay:'+Math.round(i*12)+'ms" cx="'+x(q[0]).toFixed(1)+'" cy="'+y(q[1]).toFixed(1)+'" r="'+r+'" fill="'+C[t]+'" fill-opacity="'+(t=='m'?.55:.8)+'"/>';
if(q[3])n+='<text x="'+(x(q[0])+(q[4]||8))+'" y="'+(y(q[1])+(q[5]||-6))+'" text-anchor="'+(q[6]||'start')+'" class="vw" style="paint-order:stroke;stroke:var(--surface-2,#fff);stroke-width:3px">'+e(q[3])+'</text>'});
sv.setAttribute('viewBox','0 0 '+F.W+' '+F.H);sv.setAttribute('width','100%');sv.innerHTML=z+F.g+c+n;
later(function(){sv.querySelectorAll('circle.d').forEach(function(e){e.style.opacity=1})})};
var T=['table','bars','lines','scatter','list','note'];
function put(w,p){var e=document.createElement('div');w.appendChild(e);
if(p[0]=='row'){e.className='vg';e.style.gridTemplateColumns=p[1];p.slice(2).forEach(function(q){put(e,q)})}
else if(Array.isArray(p[0]))p.forEach(function(q){put(e,q)});
else if(T.indexOf(p[0])>-1){e.className='vp';V[p[0]](e,p[1])}}
V.card=function(el,D){L=D.L||L;el.innerHTML='<style>'+S+'</style><div class="vk">'+(D.t?'<h2 class="sr-only">'+h(D.t)+'</h2>':'')+'</div>';var w=el.querySelector('.vk');
D.p.forEach(function(p){put(w,p)});w.insertAdjacentHTML('beforeend',leg(D.lg)+(D.s?'<div class="vs">'+h(D.s)+'</div>':''))};
})();
