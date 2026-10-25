/* SCW visitor analytics: consent-first GA4 configuration. */
(()=>{'use strict';
const ID='G-ELV2KS33JZ',KEY='scw-analytics-consent-v1';
let choice=null;try{choice=localStorage.getItem(KEY)}catch(e){}
function start(){
 if(window.__scwAnalyticsLoaded)return;window.__scwAnalyticsLoaded=true;
 window.dataLayer=window.dataLayer||[];window.gtag=function(){window.dataLayer.push(arguments)};
 window.gtag('js',new Date());window.gtag('config',ID,{send_page_view:true});
 const script=document.createElement('script');script.async=true;script.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(ID);document.head.appendChild(script);
 document.addEventListener('click',function(e){
 const a=e.target.closest('a');if(!a)return;
 const url=a.href||'';
 if(/wa\.me\/|api\.whatsapp\.com\//i.test(url))window.gtag('event','contact_whatsapp',{link_url:url});
 else if(a.classList.contains('quote')||/get a quote/i.test(a.textContent||''))window.gtag('event','get_a_quote_click',{link_url:url});
 });
}
function save(value){try{localStorage.setItem(KEY,value)}catch(e){}document.getElementById('scw-consent-box')?.remove();if(value==='accepted')start()}
function banner(){
 if(document.getElementById('scw-consent-box'))return;
 const style=document.createElement('style');style.textContent='#scw-consent-box{position:fixed;bottom:16px;left:16px;right:16px;z-index:99999;max-width:640px;margin:auto;background:#101417;color:#f5f5f5;padding:20px 22px;border:1px solid #464b4f;border-left:4px solid #f01827;border-radius:10px;box-shadow:0 10px 36px #0009;font:14px/1.55 Arial,sans-serif}#scw-consent-box strong{display:block;margin-bottom:7px;font-size:16px}#scw-consent-box p{margin:0 0 14px;color:#cbd0d4}#scw-consent-box .scw-consent-actions{display:flex;gap:10px;flex-wrap:wrap}#scw-consent-box button{cursor:pointer;border:1px solid #777;border-radius:5px;background:#202428;color:#fff;padding:10px 16px;font-weight:700}#scw-consent-box button.scw-accept{background:#f01827;border-color:#f01827}';document.head.appendChild(style);
 const wrap=document.createElement('aside');wrap.id='scw-consent-box';wrap.setAttribute('aria-label','Analytics cookies');wrap.innerHTML='<strong>Website analytics</strong><p>We use optional analytics cookies to understand website visits and improve SCW Group. You can accept or reject analytics tracking.</p><div class="scw-consent-actions"><button type="button" class="scw-accept">Accept analytics</button><button type="button" class="scw-reject">Reject</button></div>';
 wrap.querySelector('.scw-accept').onclick=()=>save('accepted');wrap.querySelector('.scw-reject').onclick=()=>save('rejected');document.body.appendChild(wrap);
}
if(choice==='accepted')start();else if(choice!=='rejected'){if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',banner,{once:true});else banner()}
})();
