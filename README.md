# 🌍 Global Introduction #

Bookmarklets are tiny programs saved as browser bookmarks. They may look scary because they start with a long line of javascript:..., but there’s nothing to fear — they’re just small snippets of code you run directly in your browser.

They’re extremely simple to use: you drag the link into your bookmarks bar, click it, and the tool appears. No installation, no plugins, no admin rights. It works on any browser (Chrome, Edge, Firefox, Safari…) and always uses the font and style of your computer — one of the advantages of this lightweight approach.

For recruiters and sourcers, bookmarklets are a practical way to save time and bypass unnecessary friction. In fact, they can sometimes even help you work around internal IT or DSI restrictions, since you don’t need to install anything on your machine.

---
# 🔍 Googlizer_LinkedINazer

A simple bookmarklet to quickly generate Google or LinkedIn profile searches from a list of names (or selected text) — and open them in bulk.


## 🚀 Features
- Copy-paste a list of names (or select text on a page before running it).
- Generate **Google search URLs** for all names.
- Generate **LinkedIn People Search URLs** for all names.
- Open all generated links in new tabs (with a delay to avoid browser blocking).
- Close the tool when finished.

## 🛠️ How to Install

1. **Make sure your browser’s bookmarks bar is visible.**  
   - Chrome / Edge: press `Ctrl+Shift+B` (Windows) or `Cmd+Shift+B` (Mac).  
   - Firefox: go to `View > Toolbars` and enable **Bookmarks Toolbar**.  
   - Safari: go to `View > Show Favorites Bar`.  

2. **Create a new bookmark.**  
   - Right-click on your bookmarks bar → **Add Page** / **Add Bookmark**.  
   - Name it: `Googlizer_LinkedINazer`.  

3. **Edit the bookmark.**  
   - In the **URL field**, delete everything.  
   - Copy-paste the code below (it starts with `javascript:`).  

4. **Save the bookmark.**  

5. **Done!**  
   - Click the bookmarklet from your bookmarks bar whenever you want to use it.  

```javascript
javascript:(function(){const e=document.createElement("div");e.style.cssText="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#f4f4f4;border:1px solid #ccc;box-shadow:0 2px 8px rgba(0,0,0,.1);padding:20px;font-family:Arial;color:#333;z-index:9999;";const selectedText=window.getSelection().toString();const t=document.createElement("textarea");t.style.cssText="width:100%;height:120px;padding:8px;border:1px solid #ccc;resize:none;margin-bottom:10px;";t.placeholder="Paste data here...";if(selectedText){t.value=selectedText;}e.appendChild(t);const transformations=[{text:"Googlization",transform:"https://www.google.com/search?q="},{text:"LinkedInation",transform:"https://www.linkedin.com/search/results/people/?keywords="}];transformations.forEach(transformation=>{const button=document.createElement("button");button.style.cssText="background-color:#007bff;color:#fff;border-radius:5px;padding:8px 12px;cursor:pointer;margin-right:10px;margin-bottom:5px;";button.textContent=transformation.text;button.addEventListener("click",()=>{const transformedText=t.value.split("\n").map(line=>{return transformation.transform+encodeURIComponent(line.replace(/ /g," "));});t.value=transformedText.join("\n");});e.appendChild(button);});const bulkOpenButton=document.createElement("button");bulkOpenButton.style.cssText="background-color:#007bff;color:#fff;border-radius:5px;padding:8px 12px;cursor:pointer;margin-right:10px;margin-bottom:5px;";bulkOpenButton.textContent="Bulk Open Links in Tabs";bulkOpenButton.addEventListener("click",()=>{const urls=t.value.split("\n");urls.forEach((url,index)=>{setTimeout(()=>window.open(url),index*2500);});});e.appendChild(bulkOpenButton);const closeButton=document.createElement("button");closeButton.style.cssText="background-color:#007bff;color:#fff;border-radius:5px;padding:8px 12px;cursor:pointer;margin-right:10px;margin-bottom:5px;";closeButton.textContent="Close";closeButton.addEventListener("click",()=>{document.body.removeChild(e);});e.appendChild(closeButton);document.body.appendChild(e);})();
```

---
# 🏢 LinkedIN_SN_Companies&Titles

A bookmarklet to accelerate LinkedIn Sales Navigator searches by combining **companies** and **job titles** in bulk.


## 🚀 Features
- Paste a list of company names.  
- Add one or multiple job titles.  
- Generates LinkedIn Sales Navigator search URLs with those filters applied.  
- Opens the search results in new tabs.  

## 🛠️ How to Install

1. **Make sure your browser’s bookmarks bar is visible.**  
   - Chrome / Edge: press `Ctrl+Shift+B` (Windows) or `Cmd+Shift+B` (Mac).  
   - Firefox: go to `View > Toolbars` and enable **Bookmarks Toolbar**.  
   - Safari: go to `View > Show Favorites Bar`.  

2. **Create a new bookmark.**  
   - Right-click on your bookmarks bar → **Add Page** / **Add Bookmark**.  
   - Name it: `Cies&Tiles`.  

3. **Edit the bookmark.**  
   - In the **URL field**, delete everything.  
   - Copy-paste the code below (it starts with `javascript:`).  

4. **Save the bookmark.**  

5. **Done!**  
   - Click the bookmarklet from your bookmarks bar whenever you want to use it.  

```javascript
javascript:(function(){var w=window.open("","SalesNavigatorAccelerator","width=500,height=370,scrollbars=1,resizable=1");w.document.title="Sales Navigator Accelerator by Anara";var styles=`body{font-family:Arial,sans-serif;background-color:#f4f4f4;padding:20px;color:#333;}textarea{width:100%;height:200px;padding:10px;font-size:14px;border-radius:4px;border:1px solid #ccc;}button{display:block;width:100%;padding:10px 15px;margin-top:20px;background-color:#1b3a51;color:#fff;border:none;border-radius:4px;cursor:pointer;}button:hover{background-color:#2980b9;}`;w.document.write(`<html><head><title>Sales Navigator Accelerator by Anara</title><style>${styles}</style></head><body><textarea id='inputArea' placeholder='Paste your companies list here...'></textarea><button id='submitButton'>Play</button></body></html>`);w.document.getElementById('submitButton').addEventListener('click',function(){var companies=w.document.getElementById('inputArea').value.split("\n");w.document.body.innerHTML=`<textarea id='inputArea' placeholder='Enter Position Title...'></textarea><button id='submitTitles'>Let the music play!</button>`;w.document.getElementById('submitTitles').addEventListener('click',function(){var titles=w.document.getElementById('inputArea').value.split("\n");var o_url="https://www.linkedin.com/sales/search/people?query=(recentSearchParam%3A(id%3A2590758754%2CdoLogHistory%3Atrue)%2Cfilters%3AList((type%3ACURRENT_COMPANY%2Cvalues%3AList((text%3AAAAAA%2CselectionType%3AINCLUDED)%2C(text%3ABBBBB%2520CCCCC%2CselectionType%3AINCLUDED)))%2C(type%3AREGION%2Cvalues%3AList((id%3A105015875%2Ctext%3AFrance%2CselectionType%3AINCLUDED)))%2C(type%3ACURRENT_TITLE%2Cvalues%3AList((text%3AFFFFF%2CselectionType%3AINCLUDED)%2C(text%3AGGGGG%2520HHHHH%2CselectionType%3AINCLUDED)))))&sessionId=Ny6jUkTdQ0qh2HciS%2Fq36A%3D%3D&viewAllFilters=true";for(var i=0;i<Math.ceil(companies.length/50);i++){var cC=companies.slice(i*50,(i+1)*50);var cUP=cC.map(function(c){return `(text%3A${encodeURIComponent(c.trim())}%2CselectionType%3AINCLUDED)`;}).join(",");var uWC=o_url.replace("(type%3ACURRENT_COMPANY%2Cvalues%3AList((text%3AAAAAA%2CselectionType%3AINCLUDED)%2C(text%3ABBBBB%2520CCCCC%2CselectionType%3AINCLUDED)))",`(type%3ACURRENT_COMPANY%2Cvalues%3AList(${cUP}))`);var tUP=titles.map(function(t){return `(text%3A${encodeURIComponent(t.trim())}%2CselectionType%3AINCLUDED)`;}).join(",");var fU=uWC.replace("(type%3ACURRENT_TITLE%2Cvalues%3AList((text%3AFFFFF%2CselectionType%3AINCLUDED)%2C(text%3AGGGGG%2520HHHHH%2CselectionType%3AINCLUDED)))",`(type%3ACURRENT_TITLE%2Cvalues%3AList(${tUP}))`);window.open(fU,'_blank');}w.close();});});})();
```


# 🧩 OR Builder

A bookmarklet to quickly transform lists of keywords into Boolean strings.  
Perfect for building search queries for LinkedIn, Google, or ATS systems.


## 🚀 Features
- Paste a list of keywords.  
- Replace line breaks with commas.  
- Replace line breaks with `" OR "` automatically (each keyword quoted).  
- Copy the transformed string with one click.  
- Close the tool when done.  

## 🛠️ How to Install

1. **Make sure your browser’s bookmarks bar is visible.**  
   - Chrome / Edge: press `Ctrl+Shift+B` (Windows) or `Cmd+Shift+B` (Mac).  
   - Firefox: go to `View > Toolbars` and enable **Bookmarks Toolbar**.  
   - Safari: go to `View > Show Favorites Bar`.  

2. **Create a new bookmark.**  
   - Right-click on your bookmarks bar → **Add Page** / **Add Bookmark**.  
   - Name it: `OR Builder`.  

3. **Edit the bookmark.**  
   - In the **URL field**, delete everything.  
   - Copy-paste the code below (it starts with `javascript:`).  

4. **Save the bookmark.**  

5. **Done!**  
   - Click the bookmarklet from your bookmarks bar whenever you want to use it.  

```javascript
javascript:(function(){const container=document.createElement("div");container.style.cssText="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);padding:20px;background-color:#f4f4f4;border:1px solid #ccc;box-shadow:0 2px 8px rgba(0,0,0,.1);z-index:9999;font-family:Arial,sans-serif;color:#333;";const textarea=document.createElement("textarea");textarea.style.cssText="width:100%;height:120px;padding:8px;border:1px solid #ccc;margin-bottom:10px;resize:none;";textarea.placeholder="Paste data here...";container.appendChild(textarea);const buttonStyles="padding:8px 16px;margin-right:10px;font-size:14px;background-color:#007bff;border:none;border-radius:4px;color:white;cursor:pointer;";const commaButton=document.createElement("button");commaButton.style.cssText=buttonStyles;commaButton.textContent="Replace with Comma";commaButton.addEventListener("click",()=>{textarea.value=textarea.value.replace(/\n/g,",");});container.appendChild(commaButton);const orButton=document.createElement("button");orButton.style.cssText=buttonStyles;orButton.textContent='Replace with \" OR \"';orButton.addEventListener("click",()=>{const lines=textarea.value.split("\n").map(line=>`\"${line}\"`);textarea.value=lines.join(" OR ");});container.appendChild(orButton);const copyCloseWrapper=document.createElement("div");copyCloseWrapper.style.cssText="display:flex;justify-content:space-between;align-items:center;margin-top:10px;";const copyButton=document.createElement("button");copyButton.style.cssText=buttonStyles;copyButton.textContent="Copy Transformation";copyButton.addEventListener("click",()=>{textarea.select();document.execCommand("copy");});copyCloseWrapper.appendChild(copyButton);const closeButton=document.createElement("button");closeButton.style.cssText=buttonStyles;closeButton.textContent="Close";closeButton.addEventListener("click",()=>{document.body.removeChild(container);});copyCloseWrapper.appendChild(closeButton);container.appendChild(copyCloseWrapper);document.body.appendChild(container);})();
```


---
# 📌 Meetup Attendees Scraper (Bookmarklet)

This bookmarklet automatically exports the list of **attendees** from a group’s past Meetup events into a **CSV file**.  

It is designed to be launched directly from the **“Past Events”** page of a Meetup group.  


## 🎯 Why use this scraper?

The main goal is not just to collect names, but to enable **behavioral sourcing**.  

By aggregating attendees across multiple events, you can:  

- **Measure the frequency of participation** of the same person across different meetups.  
- **Identify the active members of a community** (beyond one-time sign-ups).  
- **Spot opinion leaders, enthusiasts, or experts** who are highly involved in a given technology, topic, or community.  

In practice, once the data is exported, you can analyze it in a spreadsheet (e.g., with a **pivot table**) or in a data visualization tool to reveal patterns of involvement and target the right profiles.  

👉 It’s a powerful complement to traditional sourcing, as it qualifies candidates by their **real behavior in the ecosystem**.  



## 🚀 How it works

1. Go to the **Past Events page** of a Meetup group, e.g.:

```https://www.meetup.com/<GROUP_NAME>/events/past/```

2. **Manually load the full list of events** by scrolling down and clicking *See more events / Voir plus d’événements*.  

3. **Launch the bookmarklet** from your browser’s bookmarks bar.  

- A small floating window appears with a progress bar.  
- The script detects all visible events on the page.  
- For each event, it calls the Meetup GraphQL API and retrieves the list of attendees.  

4. **CSV Export**: once finished, a file named  
```meetup_attendees.csv```

is automatically generated and downloaded.  



## 📦 Data extracted

Each line of the CSV corresponds to one attendee, with the following columns:  

- `eventId` → event identifier  
- `memberName` → member’s name  
- `memberId` → member’s identifier  
- `status` → RSVP status (`YES`, `ATTENDED`, …)  
- `guests` → number of guests accompanying  



## ⚠️ Limitations

- The bookmarklet does **not auto-scroll indefinitely**:  
👉 you must first manually load more events by clicking *See more events*.  
- Extraction only works on **Past Events** pages.  
- The Meetup API may limit requests if used too intensively.  



## 🛠️ Installation

1. **Show your bookmarks bar**  
- Chrome / Edge: `Ctrl+Shift+B` (Windows) or `Cmd+Shift+B` (Mac)  
- Firefox: menu `View > Toolbars` → enable **Bookmarks Toolbar**  
- Safari: menu `View > Show Favorites Bar`  

2. **Create a new bookmark**  
- Right-click on the bookmarks bar → **Add Page / Add Bookmark**  
- Name it for example `Meetup Scraper`  

3. **Paste the code**  
- In the **URL field**, delete everything  
- Copy-paste the bookmarklet code (it starts with `javascript:(async()=>{...})();`)  

4. **Save**  
- Click **Save**  
- ✅ The bookmarklet is now installed and ready to use  


```javascript
javascript:(async()=>{const SLEEP=t=>new Promise(r=>setTimeout(r,t));/* ==== Silencer Sentry + Backoff 429 ==== */const SENTRY_PATTERNS=[/sentry\.io/i,/ingest\./i];(()=>{const of=window.fetch?window.fetch.bind(window):null;if(of){window.fetch=async(...a)=>{try{const u=String((a[0]&&a[0].url)||a[0]||"");if(SENTRY_PATTERNS.some(rx=>rx.test(u)))return new Response(null,{status:204,statusText:"No Content"})}catch{}return of(...a)}}const ob=navigator.sendBeacon?navigator.sendBeacon.bind(navigator):null;if(ob){navigator.sendBeacon=(u,d)=>SENTRY_PATTERNS.some(rx=>rx.test(String(u)))?true:ob(u,d)}const oo=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=function(m,u){try{if(SENTRY_PATTERNS.some(rx=>rx.test(String(u)))){this.abort();return}}catch{}return oo.apply(this,arguments)}})();async function fetchWithBackoff(input,init,{retries=5,baseDelay=600}={}){let attempt=0;for(;;){const res=await fetch(input,init);if(res.status!==429)return res;attempt++;if(attempt>retries)return res;const retryAfter=parseInt(res.headers.get("Retry-After")||"",10);const delay=Number.isFinite(retryAfter)?retryAfter*1000:baseDelay*Math.pow(2,attempt-1);await SLEEP(delay)}} /* ==== UI: Progress Bar ==== */function makeUI(){const w=document.createElement("div");w.id="meetupPB";w.style.cssText="position:fixed;top:12px;right:12px;z-index:999999;background:#111;color:#fff;padding:12px 14px;border-radius:10px;box-shadow:0 4px 16px rgba(0,0,0,.35);font:14px/1.3 system-ui,sans-serif;min-width:260px";const h=document.createElement("div");h.style="display:flex;align-items:center;gap:10px;margin-bottom:8px";const t=document.createElement("div");t.textContent="Meetup Scraper";t.style="font-weight:600";const c=document.createElement("button");c.textContent="×";c.style="margin-left:auto;background:#222;border:none;color:#aaa;width:26px;height:26px;border-radius:6px;cursor:pointer";c.onclick=()=>w.remove();h.append(t,c);const st=document.createElement("div");st.id="pbStage";st.textContent="Préparation…";st.style="margin:4px 0 8px 0;color:#bbb";const bw=document.createElement("div");bw.style="height:10px;background:#2a2a2a;border-radius:8px;overflow:hidden";const b=document.createElement("div");b.id="pbBar";b.style="height:100%;width:0%;background:linear-gradient(90deg,#6fa8ff,#8e7bff);transition:width .2s";bw.append(b);const sm=document.createElement("div");sm.id="pbSmall";sm.style="margin-top:6px;color:#9aa";w.append(h,st,bw,sm);document.body.appendChild(w)}function setStage(x){const e=document.getElementById("pbStage");if(e)e.textContent=x}function setSmall(x){const e=document.getElementById("pbSmall");if(e)e.textContent=x}function setProgress(p){const e=document.getElementById("pbBar");if(e)e.style.width=Math.min(100,Math.max(0,p))+"%"}/* ==== Scroll pour charger tous les events ==== */async function autoLoadAllPastEvents(max=40){setStage("Chargement des événements…");let h=0,s=0;for(let r=1;r<=max;r++){const btn=[...document.querySelectorAll("button")].find(b=>/show more|voir plus|load more|see more|plus/i.test((b.textContent||"").trim()));if(btn&&!btn.disabled)btn.click();window.scrollTo(0,document.body.scrollHeight);await SLEEP(900);const nh=document.body.scrollHeight;if(nh<=h)s++;else s=0;h=nh;setSmall(%60Scroll ${r}/${max}%60);setProgress(Math.min(30,(r/max)*30));if(s>=3)break}setSmall("Fin du scroll.")}/* ==== Extraction des IDs ==== */function extractEventIds(){const ids=new Set();document.querySelectorAll('a[href*="/events/"]').forEach(a=>{const m=(a.getAttribute("href")||"").match(/\/events\/(\d+)/);if(m)ids.add(m[1])});return[...ids]}/* ==== Appels GraphQL ==== */const GQL="https://www.meetup.com/gql2",OP="getEventByIdForAttendees",HASH="06e14c0b9938b3f0cbd5f0ef3a4cf910d01285c8bcc6ebf76b0f0aafbf19b076",PAGE=100;async function fetchPage(eventId,after){const body={operationName:OP,variables:Object.assign({eventId,filter:{rsvpStatus:["YES","ATTENDED"]},sort:{sortField:"RSVP_ID",sortOrder:"ASC"},first:PAGE},after?{after}:{}),extensions:{persistedQuery:{version:1,sha256Hash:HASH}}};const r=await fetchWithBackoff(GQL,{method:"POST",credentials:"include",headers:{"content-type":"application/json"},body:JSON.stringify(body)});return r.json()}async function fetchAttendees(eventId){const out=[];let after;for(;;){const d=await fetchPage(eventId,after),ev=d?.data?.event;if(!ev)break;(ev.rsvps?.edges||[]).forEach(e=>{const n=e.node||{},m=n.member||{};out.push({eventId,memberName:m.name||"",memberId:m.id||"",status:n.status||"",guests:n.guestsCount??0})});if(!(ev.rsvps?.pageInfo?.hasNextPage))break;after=ev.rsvps.pageInfo.endCursor;await SLEEP(100)}return out}/* ==== Run ==== */async function run(){makeUI();setStage("Init…");setProgress(5);await autoLoadAllPastEvents();const IDS=extractEventIds();if(!IDS.length){setStage("Aucun event trouvé.");setProgress(100);return}setStage(%60${IDS.length} events détectés%60);const start=35,end=95,span=end-start;let done=0;const all=[];for(const id of IDS){done++;setStage(%60Event ${done}/${IDS.length}%60);setSmall(%60id=${id}%60);setProgress(start+Math.round(done/IDS.length*span));const a=await fetchAttendees(id);all.push(...a)}setStage("Export…");setProgress(97);console.table(all);const csv=[Object.keys(all[0]||{}).join(",")].concat(all.map(r=>Object.values(r).map(v=>%60"${String(v).replace(/"/g,'""')}"%60).join(","))).join("\n");const blob=new Blob([csv],{type:"text/csv"});const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download="meetup_attendees.csv";a.click();URL.revokeObjectURL(url);setStage("Terminé");setProgress(100);setSmall(%60${all.length} lignes extraites.%60)}run()})();
```
