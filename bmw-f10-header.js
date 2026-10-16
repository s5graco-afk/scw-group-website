/* BMW F10/F11 page header: isolated from other models. */
(()=>{const model="5 Series (F10 / F11)",q=new URLSearchParams(location.search);
const standalone=/\/bmw-f10-(cic|nbt)\.html$/i.test(location.pathname);
if(!standalone&&(q.get("brand")!=="BMW"||q.get("model")!==model))return;
if(document.getElementById("scw-f10-hero-style"))return;
const style=document.createElement("style");style.id="scw-f10-hero-style";
style.textContent=`
.scw-f10-hero{display:grid!important;grid-template-columns:minmax(0,1fr) 300px!important;align-items:center!important;gap:38px!important;max-width:760px!important;width:100%!important;box-sizing:border-box!important;margin:32px 0 28px!important}
.scw-f10-hero-copy{min-width:0;position:relative;z-index:2}
.scw-f10-hero-copy span{display:block;color:#8e959a;font-size:12px;letter-spacing:3px;margin-bottom:8px}
.scw-f10-hero-copy strong{display:block;font-size:42px;line-height:1.02;letter-spacing:-1px}
.scw-f10-hero-copy strong b{font-weight:500;color:#aeb4b8}
.scw-f10-hero-copy small{display:block;margin-top:10px;color:#a8adb1;font-size:13px;letter-spacing:.08em}
.scw-f10-hero-copy p{margin:12px 0 0;color:#8e959a;font-size:13px;line-height:1.5}
.scw-f10-hero-car{min-width:0;height:170px;position:relative;display:flex;align-items:center;justify-content:center;background:radial-gradient(ellipse at 52% 62%,rgba(240,24,39,.10),transparent 62%)}
.scw-f10-hero-car:after{content:"";position:absolute;left:8%;right:8%;bottom:18px;height:18px;background:radial-gradient(ellipse,rgba(0,0,0,.8),transparent 68%);filter:blur(5px)}
.scw-f10-hero-car img{position:relative;z-index:1;display:block;width:100%!important;height:100%!important;object-fit:contain!important;object-position:center!important;max-width:none!important;clip-path:none!important;transform:scale(1.06)!important}
@media(max-width:900px){
.scw-f10-hero{grid-template-columns:minmax(0,46%) minmax(0,54%)!important;gap:0!important;max-width:none!important;min-height:190px!important;margin:28px 0 32px!important}
.scw-f10-hero-copy{padding-right:4px}
.scw-f10-hero-copy span{font-size:11px;letter-spacing:4px;margin-bottom:10px}
.scw-f10-hero-copy strong{font-size:29px;line-height:1.05;letter-spacing:-.7px}
.scw-f10-hero-copy strong b{display:block;margin-top:3px}
.scw-f10-hero-copy small{font-size:12px;margin-top:11px}
.scw-f10-hero-copy p{font-size:10.5px;line-height:1.4;margin-top:12px}
.scw-f10-hero-car{height:180px!important}
.scw-f10-hero-car img{height:170px!important;transform:scale(1.05)!important}}
`;
document.head.append(style);
const main=document.querySelector("main");if(!main)return;
const heading=main.querySelector("h1#car")||main.querySelector("h1");if(!heading)return;
main.querySelectorAll(".scw-unified-profile,.scw-f10-profile").forEach(el=>el.remove());
const hero=document.createElement("div");hero.className="scw-f10-hero";
hero.innerHTML='<div class="scw-f10-hero-copy"><span>BMW</span><strong>5 Series <b>(F10 / F11)</b></strong><small>2010 – 2017</small><p>Sedan / Touring<br>Premium executive range</p></div><div class="scw-f10-hero-car"><img src="assets/DDDC9795-90CF-4CC3-9184-3D591ACBF59D.png?v=2" alt="BMW 5 Series F10 / F11"></div>';
heading.before(hero);heading.style.display="none";
})();