# 🌍 Global Introduction

Bookmarklets are tiny programs saved as browser bookmarks. They may look scary because they start with a long line of javascript:..., but there’s nothing to fear — they’re just small snippets of code you run directly in your browser.

They’re extremely simple to use: you drag the link into your bookmarks bar, click it, and the tool appears. No installation, no plugins, no admin rights. It works on any browser (Chrome, Edge, Firefox, Safari…) and always uses the font and style of your computer — one of the advantages of this lightweight approach.

For recruiters and sourcers, bookmarklets are a practical way to save time and bypass unnecessary friction. In fact, they can sometimes even help you work around internal IT or DSI restrictions, since you don’t need to install anything on your machine.


# 🔍 Googlizer_LinkedINazer

A simple bookmarklet to quickly generate Google or LinkedIn profile searches from a list of names (or selected text) — and open them in bulk.

---

## 🚀 Features
- Copy-paste a list of names (or select text on a page before running it).
- Generate **Google search URLs** for all names.
- Generate **LinkedIn People Search URLs** for all names.
- Open all generated links in new tabs (with a delay to avoid browser blocking).
- Close the tool when finished.

---
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

# 🏢 LinkedIN_SN_Companies&Titles

A bookmarklet to accelerate LinkedIn Sales Navigator searches by combining **companies** and **job titles** in bulk.

---

## 🚀 Features
- Paste a list of company names.  
- Add one or multiple job titles.  
- Generates LinkedIn Sales Navigator search URLs with those filters applied.  
- Opens the search results in new tabs.  

---
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

---

## 🚀 Features
- Paste a list of keywords.  
- Replace line breaks with commas.  
- Replace line breaks with `" OR "` automatically (each keyword quoted).  
- Copy the transformed string with one click.  
- Close the tool when done.  

---

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
