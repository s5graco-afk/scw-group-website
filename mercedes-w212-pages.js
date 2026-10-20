/* Isolated Mercedes-Benz E-Class W212 presentation and multimedia selection. */
(()=>{const p=new URLSearchParams(location.search);if(p.get("brand")!=="Mercedes-Benz"||p.get("model")!=="E Class (W212)")return;
const style=document.createElement("style");style.textContent=`
.scw-w212-hero{display:grid!important;grid-template-columns:minmax(0,1fr) 300px;align-items:center;gap:38px;max-width:760px;width:100%;margin:32px 0 28px}
.scw-w212-copy span{display:block;color:#8e959a;font-size:12px;letter-spacing:3px;margin-bottom:8px}
.scw-w212-copy strong{display:block;font-size:42px;line-height:1.02;letter-spacing:-1px}
.scw-w212-copy strong b{font-weight:500;color:#aeb4b8}
.scw-w212-copy small{display:block;margin-top:10px;color:#a8adb1;font-size:13px;letter-spacing:.08em}
.scw-w212-copy p{margin:12px 0 0;color:#8e959a;font-size:13px;line-height:1.5}
.scw-w212-car{height:170px;display:flex;align-items:center;justify-content:center;position:relative;background:radial-gradient(ellipse at center,rgba(240,24,39,.09),transparent 65%)}
.scw-w212-car img{display:block;width:100%;height:100%;object-fit:contain;position:relative;z-index:1}
@media(max-width:900px){.scw-w212-hero{grid-template-columns:46% 54%!important;gap:0!important;min-height:190px!important;margin:28px 0 32px!important}.scw-w212-copy{padding-right:4px}.scw-w212-copy span{font-size:11px;letter-spacing:3px}.scw-w212-copy strong{font-size:29px;line-height:1.05}.scw-w212-copy strong b{display:block}.scw-w212-copy small{font-size:12px}.scw-w212-copy p{font-size:10.5px}.scw-w212-car{height:180px}}
body.scw-w212-only #multimedia-cards{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:20px!important}
body.scw-w212-only #multimedia-cards article{min-width:0;height:auto!important;padding:0!important;overflow:hidden;border:1px solid #30363a;border-radius:12px;background:#101417}
body.scw-w212-only #multimedia-cards .multimedia-card-link{display:block;text-decoration:none}
body.scw-w212-only #multimedia-cards .multimedia-photo{display:flex!important;align-items:center;justify-content:center;aspect-ratio:16/10;height:auto!important;background:#fff!important;padding:12px!important;box-sizing:border-box}
body.scw-w212-only #multimedia-cards .multimedia-photo img{display:block;width:100%!important;height:100%!important;object-fit:contain!important;transform:none!important}
body.scw-w212-only #multimedia-cards .multimedia-caption{display:block;padding:15px 17px!important;color:#fff;background:#101417}
body.scw-w212-only #multimedia-cards .multimedia-caption strong{font-size:15px}
body.scw-w212-only #multimedia-cards .multimedia-caption-meta{display:flex;justify-content:space-between;gap:8px;margin-top:9px;color:#b8bec3;font-size:12px}
body.scw-w212-only #multimedia-cards .multimedia-select{color:#ff4653;font-weight:700}
@media(max-width:650px){body.scw-w212-only #multimedia-cards{grid-template-columns:1fr!important}}

/* W212-only card sizing override: eliminate inherited fixed-height spacer and align cards to content. */
body.scw-w212-only #multimedia-cards{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:20px!important;align-items:start!important;grid-auto-rows:min-content!important}
body.scw-w212-only #multimedia-cards article{display:block!important;box-sizing:border-box!important;width:100%!important;height:auto!important;min-height:0!important;max-height:none!important;align-self:start!important;margin:0!important;padding:0!important;border:1px solid #30363a!important;border-radius:12px!important;overflow:hidden!important;background:#101417!important}
body.scw-w212-only #multimedia-cards article .multimedia-card-link{display:block!important;box-sizing:border-box!important;width:100%!important;height:auto!important;min-height:0!important;max-height:none!important;margin:0!important;padding:0!important;line-height:normal!important;text-decoration:none!important}
body.scw-w212-only #multimedia-cards article .multimedia-photo{display:flex!important;box-sizing:border-box!important;width:100%!important;height:auto!important;min-height:0!important;max-height:none!important;aspect-ratio:16/10!important;align-items:flex-end!important;justify-content:center!important;margin:0!important;padding:0!important;overflow:hidden!important;background:#fff!important}
body.scw-w212-only #multimedia-cards article .multimedia-photo img{display:block!important;width:100%!important;height:100%!important;min-height:0!important;max-height:100%!important;object-fit:contain!important;object-position:center bottom!important;align-self:flex-end!important;transform:none!important;background:#fff!important}
body.scw-w212-only #multimedia-cards article .multimedia-caption{display:block!important;box-sizing:border-box!important;width:100%!important;height:auto!important;min-height:0!important;max-height:none!important;margin:0!important;padding:16px 18px 14px!important;background:#101417!important;border-top:1px solid #252a2e!important;color:#fff!important}
body.scw-w212-only #multimedia-cards article .multimedia-caption strong{display:block!important;margin:0!important;font-size:16px!important;font-weight:700!important;line-height:1.35!important}
body.scw-w212-only #multimedia-cards article .multimedia-caption-meta{display:flex!important;align-items:center!important;justify-content:space-between!important;gap:10px!important;margin-top:8px!important;color:#b8bec3!important;font-size:12px!important;line-height:1.4!important}
body.scw-w212-only #multimedia-cards article .multimedia-select{color:#ff4653!important;font-weight:700!important;white-space:nowrap!important}
@media(max-width:650px){body.scw-w212-only #multimedia-cards{grid-template-columns:minmax(0,1fr)!important;max-width:540px!important;margin-left:auto!important;margin-right:auto!important;gap:18px!important}}
`;document.head.append(style);
const heading=document.querySelector("main h1#car")||document.querySelector("main h1");
if(heading){document.querySelectorAll(".scw-unified-profile,.scw-w212-hero").forEach(x=>x.remove());const box=document.createElement("div");box.className="scw-w212-hero";box.innerHTML='<div class="scw-w212-copy"><span>MERCEDES-BENZ</span><strong>E Class <b>(W212)</b></strong><small>2009 – 2016</small><p>Premium executive car<br>Sedan / Estate</p></div><div class="scw-w212-car"><img src="assets/3BD913AA-8E00-40E5-9AF3-A81325235405.png?v=1" alt="Mercedes-Benz E Class W212"></div>';heading.before(box);heading.style.display="none";}
const cards=document.getElementById("multimedia-cards");if(!cards)return;document.body.classList.add("scw-w212-only");
const opts=[["ntg4","Mercedes-Benz Multimedia NTG 4.7","Factory multimedia system","assets/B64970BE-FA51-4D21-849D-5C088466527D.png?v=20261020"],["ntg45","Mercedes-Benz Multimedia NTG 4.5","Factory multimedia system","assets/02356FA9-F057-465F-868F-F9D3A3EC6CC2.png?v=20261020"],["upgrade","Mercedes-Benz Multimedia NTG 5s1","New screen with Apple CarPlay and Android Auto","assets/5F047D34-3660-4817-A3BD-158DA0A129CD.png?v=20261020"]];
[opts[0],opts[1]]=[opts[1],opts[0]];
cards.innerHTML=opts.map(([id,name,description,photo])=>'<article><a class="multimedia-card-link" href="mercedes-w212-multimedia.html?brand=Mercedes-Benz&model=E%20Class%20(W212)&system='+id+'"><div class="multimedia-photo"><img src="'+photo+'" alt="'+name+'" loading="lazy" onerror="this.onerror=null;this.src=\'assets/9FCDCFEA-9141-4F75-82FD-122777B2451A.jpeg\'"></div><span class="multimedia-caption"><strong>'+name+'</strong><span class="multimedia-caption-meta"><span>'+description+'</span><span class="multimedia-select">Select →</span></span></span></a></article>').join("");
})();