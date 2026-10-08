/* Shared model-specific top profile, derived from vehicle.html (October 2026). */
(()=>{const script=document.currentScript,expected=script?.dataset?.profileModel;
const p=new URLSearchParams(location.search),brand=p.get("brand")||"",model=p.get("model")||"";
if(expected&&model!==expected)return;
const profiles={"Mercedes-Benz|C Class (W204)":["MERCEDES-BENZ","C-Class <b>(W204)</b>","2007 – 2014","Compact executive car<br>Sedan / Coupé / Estate","assets/9401FD42-F1A1-4A9F-8C92-451296F694B2.png?v=1"],"BMW|3 Series (E90 / E91 / E92 / E93)":["BMW","3 Series <b>(E90 / E91 / E92 / E93)</b>","2005 – 2013","Sedan / Touring / Coupé / Convertible<br>Premium compact executive range","assets/173E336A-CFF1-4041-AD70-CEB136273CA4.png?v=1"],"Audi|A4 (B8 / 8K)":["Audi","A4 <b>(B8 / 8K)</b>","2007 – 2015","Premium compact executive car<br>Sedan / Avant","assets/BD8D2D49-3754-49A4-8DE6-C71F60C5DD13.png?v=1"],"Audi|Q5 (8R)":["Audi","Q5 <b>(8R)</b>","2008 – 2017","Premium mid-size SUV<br>quattro available","assets/A719A695-7F64-4BF8-A2EA-EBA4A37D1AF7.png?v=1"],"BMW|3 Series (F30 / F31 / F34)":["BMW","3 Series <b>(F30 / F31 / F34)</b>","2011 – 2020","Sedan / Touring / Gran Turismo<br>Premium compact executive range","assets/132202B7-7873-4F43-B003-F1F67366AA96.png?v=3"],"BMW|2 Series (F45 / F46)":["BMW","2 Series <b>(F45 / F46)</b>","2014 – 2021","Active Tourer / Gran Tourer<br>Compact premium MPV","assets/A8BB3108-5CD6-4B98-8E99-F162804733B7.png?v=1"],"BMW|2 Series (U06 Active Tourer)":["BMW","2 Series <b>(U06)</b>","2021 – PRESENT","Active Tourer<br>Compact premium MPV","assets/F9BADB29-7D0A-4912-92E2-B8B28A83639B.png?v=1"],"BMW|4 Series (F32 / F33 / F36)":["BMW","4 Series <b>(F32 / F33 / F36)</b>","2013 – 2020","Coupé / Convertible / Gran Coupé<br>Premium sports range","assets/054D2A85-B617-4C55-B535-FB212DEA5B37.png?v=1"],"BMW|X2 (F39)":["BMW","X2 <b>(F39)</b>","2017 – 2023","Sports Activity Coupé<br>Compact premium crossover","assets/6B710A97-7A6A-4D46-B70A-6F9AF6C555F4.png?v=1"],"BMW|X3 (G01)":["BMW","X3 <b>(G01)</b>","2017 – 2024","Sports Activity Vehicle<br>Premium mid-size SUV","assets/9501AF3E-54FF-4CA7-855D-661D57CB5D43.png?v=1"],"BMW|X4 (G02)":["BMW","X4 <b>(G02)</b>","2018 – 2025","Sports Activity Coupé<br>Premium mid-size crossover","assets/9A0E7C80-9A14-40E8-92D2-44EBD9491AF9.png?v=1"],"Toyota|RAV4 (XA50)":["Toyota","RAV4 <b>(XA50)</b>","2018 – PRESENT","Compact crossover SUV<br>Petrol / Hybrid / Plug-in Hybrid","assets/68B937E9-EBB8-4D51-A8DA-89738DBC534A.png?v=1"],"Lexus|NX (AZ10)":["Lexus","NX <b>(AZ10)</b>","2014 – 2021","Premium compact crossover<br>Petrol / Hybrid","assets/27ACD191-B456-45E1-B4F3-FED7B4643E94.png?v=2"]};
const data=profiles[brand+"|"+model];if(!data)return;
const existing=document.querySelectorAll('[class*="shared-profile"],[id$="-profile"]');
for(const el of existing){if(getComputedStyle(el).display!=="none"&&el.getBoundingClientRect().height>0)return;}
const main=document.querySelector("main"),heading=main?.querySelector("h1");if(!heading)return;
if(!document.getElementById("scw-unified-profile-style")){
 const style=document.createElement("style");style.id="scw-unified-profile-style";
 style.textContent=`.scw-unified-profile{display:grid;grid-template-columns:minmax(0,1fr) 300px;align-items:center;gap:38px;max-width:760px;margin:32px 0 28px}
 .scw-unified-profile-copy span{display:block;color:#8e959a;font-size:12px;letter-spacing:3px;margin-bottom:8px}
 .scw-unified-profile-copy strong{display:block;font-size:42px;line-height:1.02;letter-spacing:-1px}
 .scw-unified-profile-copy strong b{font-weight:500;color:#aeb4b8}
 .scw-unified-profile-copy small{display:block;margin-top:10px;color:#a8adb1;font-size:13px;letter-spacing:.08em}
 .scw-unified-profile-copy p{margin:12px 0 0;color:#8e959a;font-size:13px;line-height:1.5}
 .scw-unified-car-photo{height:170px;display:flex;align-items:center;justify-content:center;overflow:visible;position:relative;background:radial-gradient(ellipse at 52% 62%,rgba(240,24,39,.10),transparent 62%)}
 .scw-unified-car-photo:after{content:"";position:absolute;left:8%;right:8%;bottom:18px;height:18px;background:radial-gradient(ellipse,rgba(0,0,0,.8),transparent 68%);filter:blur(5px)}
 .scw-unified-car-photo img{position:relative;z-index:1;width:100%;height:100%;object-fit:contain;object-position:center;transform:scale(1.06)}
 @media(max-width:900px){.scw-unified-profile{grid-template-columns:46% 54%!important;width:100%!important;max-width:none!important;min-height:190px!important;gap:0!important;margin:28px 0 32px!important}
 .scw-unified-profile-copy{padding-right:4px;position:relative;z-index:2}
 .scw-unified-profile-copy span{font-size:11px;letter-spacing:4px;margin-bottom:10px}
 .scw-unified-profile-copy strong{font-size:29px;line-height:1.05;letter-spacing:-.7px}
 .scw-unified-profile-copy strong b{display:block;margin-top:3px}
 .scw-unified-profile-copy small{font-size:12px;margin-top:11px}
 .scw-unified-profile-copy p{font-size:10.5px;line-height:1.4;margin-top:12px}
 .scw-unified-car-photo{width:100%;height:180px}
 .scw-unified-car-photo img{height:170px;transform:scale(1.05)}}`;
 document.head.append(style);
}
const root=document.createElement("div");root.className="scw-unified-profile";
const copy=document.createElement("div");copy.className="scw-unified-profile-copy";copy.innerHTML="<span>"+data[0].toUpperCase()+"</span><strong>"+data[1]+"</strong><small>"+data[2]+"</small><p>"+data[3]+"</p>";
const photo=document.createElement("div");photo.className="scw-unified-car-photo";const img=document.createElement("img");img.src=data[4];img.alt=brand+" "+model;photo.append(img);root.append(copy,photo);
heading.before(root);heading.style.display="none";
})();