import{D as e,T as t,h as n,i as r,j as i,x as a,z as o}from"./index-CRizG5jz.js";import{t as s}from"./printHtmlPdf-DU-4yf06.js";function c(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}function l(e){if(!e)return!1;let t=e.trim();return t.startsWith(`data:image/`)||t.startsWith(`blob:`)||t.startsWith(`/`)||t.startsWith(`./`)||t.startsWith(`https://`)||t.startsWith(`http://`)}function u(e){let t=e.lower.trim(),n=e.upper.trim();return t&&n?`${t} ~ ${n}`:n?`≤ ${n}`:t?`≥ ${t}`:`未設`}function d(e){let t=(e.customAxis??``).trim().toUpperCase();return t===`TL`||t===`BL`||t===`WL`?t:``}function f(e){return[e.gapCount,e.flushCount,e.gapSpec.lower.trim(),e.gapSpec.upper.trim(),(e.gapSpec.parallelUpper??``).trim(),e.flushSpec.lower.trim(),e.flushSpec.upper.trim(),(e.customAxis??``).trim().toUpperCase()].join(`|`)}function p(e,t){let n=[],r=t?`<span class="spec-side-tag">${c(t)}</span>`:``;e.gapCount>0&&n.push(`<div class="spec-line">${r}<span class="spec-k">間隙</span><strong>${c(u(e.gapSpec))}</strong></div>`),e.flushCount>0&&n.push(`<div class="spec-line">${r}<span class="spec-k">段差</span><strong>${c(u(e.flushSpec))}</strong></div>`);let i=(e.gapSpec.parallelUpper??``).trim();e.gapCount>=2&&i&&n.push(`<div class="spec-line">${r}<span class="spec-k">平行度</span><strong>Δ ≤ ${c(i)}</strong></div>`);let a=d(e);return a&&n.push(`<div class="spec-line spec-axis"><span class="spec-k">軸向</span><span>${c(a)}</span></div>`),n.length===0?`<div class="spec-muted">未設公差</div>`:n.join(``)}function m(e){let t=e.config,n=[];if(t.gapCount>0){let e=[];for(let n=0;n<t.gapCount;n+=1)e.push(`<div class="write-box"><div class="write-box-head">G${n+1}</div><div class="write-box-cell"></div></div>`);n.push(`<div class="metric-write-row"><span class="metric-label">間隙</span><div class="write-box-strip">${e.join(``)}</div></div>`)}if(t.flushCount>0){let e=[];for(let n=0;n<t.flushCount;n+=1)e.push(`<div class="write-box"><div class="write-box-head">F${n+1}</div><div class="write-box-cell"></div></div>`);n.push(`<div class="metric-write-row"><span class="metric-label">段差</span><div class="write-box-strip">${e.join(``)}</div></div>`)}return n.length===0?`<div class="empty-side-slot">未設定量測點</div>`:`<div class="side-write-stack">${n.join(``)}</div>`}function h(e,t){return l(e)?`<div class="diagram-frame"><img class="diagram-img" src="${c(e)}" alt="${c(t)} 示意圖" /></div>`:`<div class="diagram-placeholder">尚無示意圖</div>`}function g(e){if(e.kind===`paired`){let{left:t,right:n,diagramSource:r}=e,i=f(t.config)===f(n.config)?p(t.config):`<div class="spec-split">${p(t.config,`L`)}<div class="spec-divider"></div>${p(n.config,`R`)}</div>`;return`
      <tr>
        <td class="col-item">
          <div class="item-head">
            <strong class="item-code">${c(e.baseCode)}</strong>
            <span class="lr-pill"><span class="is-l">L</span>/<span class="is-r">R</span></span>
          </div>
          <div class="item-parts">
            <div class="part-line"><span class="part-badge is-a">A</span><span>${c(e.displayPartA||`—`)}</span></div>
            <div class="part-line"><span class="part-badge is-b">B</span><span>${c(e.displayPartB||`—`)}</span></div>
          </div>
          <div class="item-area">
            <span class="area-main">${c(e.areaLabel||`未分區`)}</span>
            ${e.subAreaLabel?`<span class="area-sub">└ ${c(e.subAreaLabel)}</span>`:``}
          </div>
        </td>
        <td class="col-diagram">${h(r.config.diagramDataUrl,e.baseCode)}</td>
        <td class="col-spec">${i}</td>
        <td class="col-side is-lh">${m(t)}</td>
        <td class="col-side is-rh">${m(n)}</td>
      </tr>
    `}let t=e.result,n=(t.gf.side||`NA`).toUpperCase(),r=n===`LH`?`左側 L`:n===`RH`?`右側 R`:n===`CTR`?`中央`:`全區`,i=n===`LH`?`is-lh`:n===`RH`?`is-rh`:n===`CTR`?`is-ctr`:`is-na`,a=n===`LH`?`<td class="col-side is-lh">${m(t)}</td><td class="col-side is-empty"><div class="empty-side-slot">— 無右側對應</div></td>`:n===`RH`?`<td class="col-side is-empty"><div class="empty-side-slot">— 無左側對應</div></td><td class="col-side is-rh">${m(t)}</td>`:`<td class="col-side is-center" colspan="2">${m(t)}</td>`;return`
    <tr>
      <td class="col-item">
        <div class="item-head">
          <strong class="item-code">${c(t.displayCode)}</strong>
          <span class="side-pill ${i}">${c(r)}</span>
        </div>
        <div class="item-parts">
          <div class="part-line"><span class="part-badge is-a">A</span><span>${c(t.gf.partA||`—`)}</span></div>
          <div class="part-line"><span class="part-badge is-b">B</span><span>${c(t.gf.partB||`—`)}</span></div>
        </div>
        <div class="item-area">
          <span class="area-main">${c(t.gf.areaLabel||`未分區`)}</span>
          ${t.gf.subAreaLabel?`<span class="area-sub">└ ${c(t.gf.subAreaLabel)}</span>`:``}
        </div>
      </td>
      <td class="col-diagram">${h(t.config.diagramDataUrl,t.displayCode)}</td>
      <td class="col-spec">${p(t.config)}</td>
      ${a}
    </tr>
  `}function _(){let e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`}function v(s,u={}){let d=(u.vehicleModel??``).trim(),f=d||`預設通用`,p=t(s,d),m=e(p),h=[];for(let e of m){let t=p[e.code]??a();i(t)&&h.push(n(e,t,{gap:[],flush:[]},s.partContacts))}let v=o(h,`code_asc`),y=r(v,v),b=0;for(let e of v)b+=e.config.gapCount+e.config.flushCount;let x=0;for(let e of y)l(e.kind===`paired`?e.diagramSource.config.diagramDataUrl:e.result.config.diagramDataUrl)&&(x+=1);let S=(u.measuredDate??``).trim()||_(),C=`前圍建付手填量測表_${[f,(u.trialStage??``).trim(),(u.vehicleNo??``).trim(),S].filter(Boolean).join(`_`).replace(/[\\/:*?"<>|]/g,`_`)}`,w=l(u.brandLogoUrl)?`<img class="sheet-logo" src="${c(u.brandLogoUrl)}" alt="CMC" />`:`<span class="sheet-brand-badge">CMC</span>`,T=y.length>0?y.map(g).join(``):`<tr><td colspan="5" class="empty-sheet-msg">目前車型「${c(f)}」尚無啟用中的檢查項目，請先於後台設定新增項目。</td></tr>`;return{html:`<!doctype html>
<html lang="zh-Hant">
<head>
  <meta charset="utf-8" />
  <title>${c(C)}</title>
  <style>
    @page {
      size: A3 landscape;
      margin: 8mm 9mm;
    }
    * {
      box-sizing: border-box;
    }
    html, body {
      margin: 0;
      padding: 0;
      background: #FFFFFF;
      color: #0F172A;
      font-family: "Microsoft JhengHei UI", "Microsoft JhengHei", "PingFang TC", "Noto Sans TC", -apple-system, sans-serif;
      font-size: 9.5pt;
      line-height: 1.35;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .sheet-wrap {
      width: 100%;
    }
    .sheet-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding-bottom: 4mm;
      border-bottom: 0.7mm solid #17232A;
      margin-bottom: 3mm;
    }
    .sheet-title-group {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .sheet-logo {
      height: 11mm;
      width: auto;
      object-fit: contain;
    }
    .sheet-brand-badge {
      display: inline-flex;
      align-items: center;
      padding: 2px 8px;
      border-radius: 4px;
      background: #17232A;
      color: #FFFFFF;
      font-weight: 800;
      font-size: 11pt;
      letter-spacing: 0.06em;
    }
    .sheet-title-group h1 {
      margin: 0;
      font-size: 15.5pt;
      font-weight: 800;
      color: #17232A;
      letter-spacing: 0.02em;
    }
    .sheet-subtitle {
      margin: 1px 0 0;
      font-size: 8.5pt;
      color: #475569;
    }
    .sheet-meta-grid {
      display: grid;
      grid-template-columns: repeat(5, minmax(30mm, auto));
      gap: 2.5mm 4mm;
      align-items: end;
    }
    .meta-field {
      display: flex;
      align-items: baseline;
      gap: 4px;
      font-size: 9pt;
      white-space: nowrap;
    }
    .meta-field label {
      font-weight: 700;
      color: #334155;
    }
    .meta-field span {
      display: inline-block;
      min-width: 24mm;
      padding: 0 3px 1px;
      border-bottom: 0.35mm solid #475569;
      font-weight: 600;
      color: #0F172A;
    }
    .sheet-table {
      width: 100%;
      border-collapse: collapse;
      table-layout: fixed;
    }
    .sheet-table thead {
      display: table-header-group;
    }
    .sheet-table tr {
      break-inside: avoid;
      page-break-inside: avoid;
    }
    .sheet-table th {
      padding: 2.2mm 2mm;
      border: 0.35mm solid #334155;
      background: #EEF2F6;
      color: #17232A;
      font-size: 9pt;
      font-weight: 800;
      text-align: center;
      vertical-align: middle;
    }
    .sheet-table th.th-side-l {
      background: #E0F2FE;
      color: #0369A1;
    }
    .sheet-table th.th-side-r {
      background: #F3E8FF;
      color: #6D28D9;
    }
    .sheet-table td {
      padding: 2mm 2.2mm;
      border: 0.35mm solid #64748B;
      vertical-align: middle;
    }
    .col-item {
      width: 16%;
      vertical-align: top !important;
    }
    .col-diagram {
      width: 22%;
      text-align: center;
    }
    .col-spec {
      width: 13%;
      vertical-align: middle !important;
    }
    .col-side {
      width: 24.5%;
      vertical-align: middle !important;
    }

    .item-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 4px;
      margin-bottom: 1.4mm;
    }
    .item-code {
      font-size: 11.5pt;
      font-weight: 800;
      color: #0F172A;
      font-variant-numeric: tabular-nums;
    }
    .lr-pill, .side-pill {
      display: inline-flex;
      align-items: center;
      gap: 1px;
      padding: 0.5mm 1.8mm;
      border-radius: 999px;
      border: 0.25mm solid #94A3B8;
      background: #FFFFFF;
      font-size: 7.5pt;
      font-weight: 800;
      white-space: nowrap;
    }
    .lr-pill .is-l { color: #0369A1; }
    .lr-pill .is-r { color: #6D28D9; }
    .side-pill.is-lh { background: #E0F2FE; color: #0369A1; border-color: #7DD3FC; }
    .side-pill.is-rh { background: #F3E8FF; color: #6D28D9; border-color: #D8B4FE; }
    .side-pill.is-ctr { background: #CCFBF1; color: #0F766E; border-color: #5EEAD4; }
    .side-pill.is-na { background: #F1F5F9; color: #475569; border-color: #CBD5E1; }

    .item-parts {
      display: grid;
      gap: 0.9mm;
      font-size: 8.5pt;
      font-weight: 600;
      color: #0F172A;
    }
    .part-line {
      display: flex;
      align-items: flex-start;
      gap: 1.5mm;
      line-height: 1.3;
    }
    .part-badge {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 4mm;
      height: 4mm;
      flex: 0 0 4mm;
      border-radius: 0.8mm;
      font-size: 7pt;
      font-weight: 800;
      margin-top: 0.3mm;
    }
    .part-badge.is-a { background: #E0F2FE; color: #0369A1; }
    .part-badge.is-b { background: #E2E8F0; color: #334155; }
    .item-area {
      margin-top: 1.6mm;
      padding-top: 1.2mm;
      border-top: 0.25mm dashed #CBD5E1;
      display: grid;
      gap: 0.4mm;
      font-size: 7.8pt;
      color: #475569;
    }
    .area-main { font-weight: 700; color: #334155; }
    .area-sub { color: #64748B; }

    .diagram-frame {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 36mm;
      background: #FFFFFF;
    }
    .diagram-img {
      max-width: 100%;
      max-height: 36mm;
      width: auto;
      height: auto;
      object-fit: contain;
      display: block;
    }
    .diagram-placeholder {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 24mm;
      border: 0.3mm dashed #CBD5E1;
      border-radius: 1.5mm;
      color: #94A3B8;
      font-size: 8pt;
    }

    .spec-line {
      display: flex;
      align-items: baseline;
      gap: 3px;
      font-size: 8.5pt;
      line-height: 1.45;
      font-variant-numeric: tabular-nums;
      white-space: nowrap;
    }
    .spec-k {
      color: #475569;
      font-weight: 600;
      min-width: 10mm;
    }
    .spec-side-tag {
      display: inline-block;
      padding: 0 3px;
      border-radius: 2px;
      background: #E2E8F0;
      color: #1E293B;
      font-size: 7pt;
      font-weight: 800;
    }
    .spec-divider {
      border-top: 0.25mm dashed #CBD5E1;
      margin: 1mm 0;
    }
    .spec-axis {
      color: #475569;
      font-size: 8pt;
    }
    .spec-muted {
      color: #94A3B8;
      font-size: 8pt;
      text-align: center;
    }

    .col-side.is-lh { background: #FAFDFF; }
    .col-side.is-rh { background: #FDFBFF; }
    .col-side.is-empty { background: #F8FAFC; }

    .side-write-stack {
      display: grid;
      gap: 2mm;
    }
    .metric-write-row {
      display: flex;
      align-items: flex-end;
      gap: 1.6mm;
    }
    .metric-label {
      flex: 0 0 7.5mm;
      font-size: 8pt;
      font-weight: 700;
      color: #334155;
      padding-bottom: 2.5mm;
      white-space: nowrap;
    }
    .write-box-strip {
      display: flex;
      flex-wrap: wrap;
      gap: 1.4mm;
      flex: 1 1 auto;
    }
    .write-box {
      display: grid;
      gap: 0.5mm;
      width: 16mm;
      text-align: center;
    }
    .write-box-head {
      font-size: 7.5pt;
      font-weight: 700;
      color: #475569;
      line-height: 1.1;
    }
    .write-box-cell {
      height: 9.5mm;
      border: 0.38mm solid #334155;
      border-radius: 1mm;
      background: #FFFFFF;
    }
    .empty-side-slot {
      text-align: center;
      color: #94A3B8;
      font-size: 8pt;
      padding: 4mm 1mm;
    }
    .empty-sheet-msg {
      text-align: center;
      padding: 12mm;
      color: #64748B;
      font-size: 10pt;
    }
    .sheet-footer {
      margin-top: 3mm;
      display: flex;
      justify-content: space-between;
      font-size: 8pt;
      color: #64748B;
    }
  </style>
</head>
<body>
  <div class="sheet-wrap">
    <header class="sheet-header">
      <div class="sheet-title-group">
        ${w}
        <div>
          <h1>前圍建付手填量測表（${c(f)}）</h1>
          <p class="sheet-subtitle">A3 橫式現場手填版 ｜ 啟用 ${v.length} 處（${y.length} 列）｜ 總計 ${b} 測點 ｜ 含示意圖 ${x} 張 ｜ 單位：mm</p>
        </div>
      </div>
      <div class="sheet-meta-grid">
        <div class="meta-field"><label>車型：</label><span>${c(d)}</span></div>
        <div class="meta-field"><label>階段：</label><span>${c((u.trialStage??``).trim())}</span></div>
        <div class="meta-field"><label>車號：</label><span>${c((u.vehicleNo??``).trim())}</span></div>
        <div class="meta-field"><label>日期：</label><span>${c((u.measuredDate??``).trim())}</span></div>
        <div class="meta-field"><label>量測員：</label><span></span></div>
      </div>
    </header>

    <table class="sheet-table">
      <thead>
        <tr>
          <th class="col-item">編號 / 量測項目 / 分區</th>
          <th class="col-diagram">量測示意圖</th>
          <th class="col-spec">公差規格 (mm)</th>
          <th class="col-side th-side-l">左側 (L)（駕駛側）實測值</th>
          <th class="col-side th-side-r">右側 (R)（副駕側）實測值</th>
        </tr>
      </thead>
      <tbody>
        ${T}
      </tbody>
    </table>

    <footer class="sheet-footer">
      <span>說明：請於對應格內填入實測數值（mm）。</span>
      <span>產出日期：${c(S)} ｜ 前圍建付分析工具</span>
    </footer>
  </div>
</body>
</html>`,fileTitle:C,modelLabel:f,rowCount:y.length,itemCount:v.length,totalPoints:b,diagramCount:x}}async function y(e,t={}){let n=v(e,t);if(n.itemCount===0)return{ok:!1,reason:`車型「${n.modelLabel}」目前沒有啟用中的檢查項目，請先到後台新增項目後再匯出。`};let r=await s(n.html,n.fileTitle);return r.ok?{ok:!0,result:n}:r}export{y as openHandFillA3PdfPrint};