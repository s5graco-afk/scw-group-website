/* Model-specific standard header for Mercedes-Benz A-Class W176. */
(()=>{const q=new URLSearchParams(location.search);if(q.get("brand")!=="Mercedes-Benz"||q.get("model")!=="A Class (W176)")return;
if(document.querySelector(".scw-w176-hero"))return;
const style=document.createElement("style");style.textContent=`
.scw-w176-hero{display:grid!important;grid-template-columns:minmax(0,1fr) 300px;align-items:center;gap:38px;max-width:760px;width:100%;box-sizing:border-box;margin:32px 0 28px}
.scw-w176-copy{min-width:0;position:relative;z-index:2}
.scw-w176-copy span{display:block;color:#8e959a;font-size:12px;letter-spacing:3px;margin-bottom:8px}
.scw-w176-copy strong{display:block;font-size:42px;line-height:1.02;letter-spacing:-1px}
.scw-w176-copy strong b{font-weight:500;color:#aeb4b8}
.scw-w176-copy small{display:block;margin-top:10px;color:#a8adb1;font-size:13px;letter-spacing:.08em}
.scw-w176-copy p{margin:12px 0 0;color:#8e959a;font-size:13px;line-height:1.5}
.scw-w176-car{height:170px;min-width:0;display:flex;align-items:center;justify-content:center;position:relative;background:radial-gradient(ellipse at 52% 62%,rgba(240,24,39,.10),transparent 62%)}
.scw-w176-car:after{content:"";position:absolute;left:8%;right:8%;bottom:18px;height:18px;background:radial-gradient(ellipse,rgba(0,0,0,.7),transparent 68%);filter:blur(5px)}
.scw-w176-car img{position:relative;z-index:1;display:block;width:100%;height:100%;object-fit:contain;object-position:center;transform:scale(1.06)}
@media(max-width:900px){.scw-w176-hero{grid-template-columns:46% 54%!important;gap:0!important;max-width:none!important;min-height:190px!important;margin:28px 0 32px!important}.scw-w176-copy{padding-right:4px}.scw-w176-copy span{font-size:11px;letter-spacing:3px}.scw-w176-copy strong{font-size:29px;line-height:1.05}.scw-w176-copy strong b{display:block;margin-top:3px}.scw-w176-copy small{font-size:12px;margin-top:11px}.scw-w176-copy p{font-size:10.5px;line-height:1.4}.scw-w176-car{height:180px}.scw-w176-car img{height:170px;transform:scale(1.05)}}
`;document.head.append(style);
const main=document.querySelector("main");const heading=main?.querySelector("h1#car")||main?.querySelector("h1");if(!heading)return;
main.querySelectorAll(".scw-unified-profile").forEach(el=>el.remove());
const hero=document.createElement("div");hero.className="scw-w176-hero";hero.innerHTML='<div class="scw-w176-copy"><span>MERCEDES-BENZ</span><strong>A Class <b>(W176)</b></strong><small>2012 – 2018</small><p>Premium compact hatchback<br>Mercedes-Benz A-Class</p></div><div class="scw-w176-car"><img src="assets/737AD78A-807E-47C3-BE6B-B130897E94CD.png?v=1" alt="Mercedes-Benz A-Class W176"></div>';heading.before(hero);heading.style.display="none";
})();