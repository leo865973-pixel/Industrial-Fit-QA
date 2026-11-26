import{T as e,U as t,a as n,i as r,o as i,s as a}from"./index-BxdH-QI-.js";import{t as o}from"./printHtmlPdf-DU-4yf06.js";function s(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}function c(e){if(!e)return!1;let t=e.trim();return t.startsWith(`data:image/`)||t.startsWith(`blob:`)||t.startsWith(`/`)||t.startsWith(`./`)||t.startsWith(`https://`)||t.startsWith(`http://`)}function l(e){let t=e.lower.trim(),n=e.upper.trim();return t&&n?`${t} ~ ${n}`:n?`≤ ${n}`:t?`≥ ${t}`:`未設`}function u(e){let t=(e.customAxis??``).trim().toUpperCase();return t===`TL`||t===`BL`||t===`WL`?t:``}function d(e){return[e.gapCount,e.flushCount,e.gapSpec.lower.trim(),e.gapSpec.upper.trim(),(e.gapSpec.parallelUpper??``).trim(),e.flushSpec.lower.trim(),e.flushSpec.upper.trim(),(e.customAxis??``).trim().toUpperCase()].join(`|`)}function f(e,t){let n=[],r=t?`<span class="spec-side-tag">${s(t)}</span>`:``;e.gapCount>0&&n.push(`<div class="spec-line">${r}<span class="spec-k">間隙</span><strong>${s(l(e.gapSpec))}</strong></div>`),e.flushCount>0&&n.push(`<div class="spec-line">${r}<span class="spec-k">段差</span><strong>${s(l(e.flushSpec))}</strong></div>`);let i=(e.gapSpec.parallelUpper??``).trim();e.gapCount>=2&&i&&n.push(`<div class="spec-line">${r}<span class="spec-k">平行度</span><strong>Δ ≤ ${s(i)}</strong></div>`);let a=u(e);return a&&n.push(`<div class="spec-line spec-axis"><span class="spec-k">軸向</span><span>${s(a)}</span></div>`),n.length===0?`<div class="spec-muted">未設公差</div>`:n.join(``)}function p(e){return e===`ng`||e===`invalid`?`is-ng`:e===`warning`?`is-warning`:e===`ok`?`is-ok`:e===`incomplete`?`is-incomplete`:`is-neutral`}function m(e){let t=e.config,n=[],r=e.deltaG===null?t.gapCount>=2?`<div class="val-box is-delta"><div class="val-box-head">平行度</div><div class="val-box-cell is-neutral">—</div></div>`:``:`<div class="val-box is-delta"><div class="val-box-head">平行度</div><div class="val-box-cell ${p(e.deltaGStatus)}">Δ${s(String(e.deltaG))}</div></div>`,i=!!r&&t.flushCount===0,a=!!r&&t.flushCount>0;if(t.gapCount>0){let t=e.gapPoints.map(e=>{let t=e.rawValue.trim()||`—`;return`<div class="val-box"><div class="val-box-head">${s(e.code)}</div><div class="val-box-cell ${p(e.status)}">${s(t)}</div></div>`});n.push(`<div class="metric-val-row"><span class="metric-label">間隙</span><div class="val-box-strip">${t.join(``)}</div>${i?r:``}</div>`)}if(t.flushCount>0){let t=e.flushPoints.map(e=>{let t=e.rawValue.trim()||`—`;return`<div class="val-box"><div class="val-box-head">${s(e.code)}</div><div class="val-box-cell ${p(e.status)}">${s(t)}</div></div>`});n.push(`<div class="metric-val-row"><span class="metric-label">段差</span><div class="val-box-strip">${t.join(``)}</div>${a?r:``}</div>`)}return n.length===0?`<div class="empty-side-slot">未設定量測點</div>`:`<div class="side-val-stack">${n.join(``)}</div>`}function h(e,t){return c(e)?`<div class="diagram-frame"><img class="diagram-img" src="${s(e)}" alt="${s(t)} 示意圖" /></div>`:`<div class="diagram-placeholder">尚無示意圖</div>`}function g(t){let n=e(t.contacts.partA.productionDesign,t.contacts.partA.productionDesignExt),r=e(t.contacts.partA.development,t.contacts.partA.developmentExt),i=e(t.contacts.partB.productionDesign,t.contacts.partB.productionDesignExt),a=e(t.contacts.partB.development,t.contacts.partB.developmentExt),o=[n?`設:${n}`:``,r?`開:${r}`:``].filter(Boolean).join(` / `),c=[i?`設:${i}`:``,a?`開:${a}`:``].filter(Boolean).join(` / `);return!o&&!c?``:`<div class="contact-line"><div class="contact-row"><b>A：</b>${s(o||`待補`)}</div><div class="contact-row"><b>B：</b>${s(c||`待補`)}</div></div>`}function _(e,t){let n=a(e);return`<span class="status-pill ${p(e)}">${t?`<b>${s(t)}</b> `:``}${s(n.fullText)}</span>`}function v(e){if(e.kind===`paired`){let{left:t,right:n,diagramSource:r}=e,i=d(t.config)===d(n.config)?f(t.config):`<div class="spec-split">${f(t.config,`L`)}<div class="spec-divider"></div>${f(n.config,`R`)}</div>`,a=t.overallStatus===`ng`||t.overallStatus===`invalid`||n.overallStatus===`ng`||n.overallStatus===`invalid`,o=t.overallStatus===`warning`||n.overallStatus===`warning`,c=a?`row-ng`:o?`row-warn`:``,l=[];t.hasAnyInput&&l.push(`<div class="diag-line ${p(t.overallStatus)}"><span class="mini-side is-l">L</span> ${s(t.diagnosisSummary)}</div>`),n.hasAnyInput&&l.push(`<div class="diag-line ${p(n.overallStatus)}"><span class="mini-side is-r">R</span> ${s(n.diagnosisSummary)}</div>`);let u=g(t)||g(n);return`
      <tr class="${c}">
        <td class="col-item">
          <div class="item-head">
            <strong class="item-code">${s(e.baseCode)}</strong>
            <span class="lr-pill"><span class="is-l">L</span>/<span class="is-r">R</span></span>
          </div>
          <div class="item-parts">
            <div class="part-line"><span class="part-badge is-a">A</span><span>${s(e.displayPartA||`—`)}</span></div>
            <div class="part-line"><span class="part-badge is-b">B</span><span>${s(e.displayPartB||`—`)}</span></div>
          </div>
          <div class="item-area">
            <span class="area-main">${s(e.areaLabel||`未分區`)}</span>
            ${e.subAreaLabel?`<span class="area-sub">└ ${s(e.subAreaLabel)}</span>`:``}
          </div>
        </td>
        <td class="col-diagram">${h(r.config.diagramDataUrl,e.baseCode)}</td>
        <td class="col-spec">${i}</td>
        <td class="col-side is-lh">${m(t)}</td>
        <td class="col-side is-rh">${m(n)}</td>
        <td class="col-judge">
          <div class="judge-badges">
            ${_(t.overallStatus,`L`)}
            ${_(n.overallStatus,`R`)}
          </div>
          ${l.length>0?`<div class="diag-stack">${l.join(``)}</div>`:`<div class="diag-muted">尚無實測數據</div>`}
          ${u}
          <div class="judge-note-line"></div>
        </td>
      </tr>
    `}let t=e.result,n=(t.gf.side||`NA`).toUpperCase(),r=n===`LH`?`左側 L`:n===`RH`?`右側 R`:n===`CTR`?`中央`:`全區`,i=n===`LH`?`is-lh`:n===`RH`?`is-rh`:n===`CTR`?`is-ctr`:`is-na`,a=t.overallStatus===`ng`||t.overallStatus===`invalid`?`row-ng`:t.overallStatus===`warning`?`row-warn`:``,o=n===`LH`?`<td class="col-side is-lh">${m(t)}</td><td class="col-side is-empty"><div class="empty-side-slot">— 無右側對應</div></td>`:n===`RH`?`<td class="col-side is-empty"><div class="empty-side-slot">— 無左側對應</div></td><td class="col-side is-rh">${m(t)}</td>`:`<td class="col-side is-center" colspan="2">${m(t)}</td>`,c=g(t);return`
    <tr class="${a}">
      <td class="col-item">
        <div class="item-head">
          <strong class="item-code">${s(t.displayCode)}</strong>
          <span class="side-pill ${i}">${s(r)}</span>
        </div>
        <div class="item-parts">
          <div class="part-line"><span class="part-badge is-a">A</span><span>${s(t.gf.partA||`—`)}</span></div>
          <div class="part-line"><span class="part-badge is-b">B</span><span>${s(t.gf.partB||`—`)}</span></div>
        </div>
        <div class="item-area">
          <span class="area-main">${s(t.gf.areaLabel||`未分區`)}</span>
          ${t.gf.subAreaLabel?`<span class="area-sub">└ ${s(t.gf.subAreaLabel)}</span>`:``}
        </div>
      </td>
      <td class="col-diagram">${h(t.config.diagramDataUrl,t.displayCode)}</td>
      <td class="col-spec">${f(t.config)}</td>
      ${o}
      <td class="col-judge">
        <div class="judge-badges">${_(t.overallStatus)}</div>
        ${t.hasAnyInput?`<div class="diag-stack"><div class="diag-line ${p(t.overallStatus)}">${s(t.diagnosisSummary)}</div></div>`:`<div class="diag-muted">尚無實測數據</div>`}
        ${c}
        <div class="judge-note-line"></div>
      </td>
    </tr>
  `}function y(){let e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`}function b(a,o={}){let l=a.batch,u=l.vehicleModel.trim()||`預設通用`,d=t(a.results,`code_asc`),f=r(d,d),p=n(a),m=i(p),h=0;for(let e of f)c(e.kind===`paired`?e.diagramSource.config.diagramDataUrl:e.result.config.diagramDataUrl)&&(h+=1);let g=l.measuredDate.trim()||y(),_=`前圍建付分析報告_${[u,l.trialStage.trim(),l.vehicleNo.trim(),g].filter(Boolean).join(`_`).replace(/[\\/:*?"<>|]/g,`_`)}`,b=o.appVersion?`v${o.appVersion}`:``,x=c(o.brandLogoUrl)?`<img class="sheet-logo" src="${s(o.brandLogoUrl)}" alt="CMC" />`:`<span class="sheet-brand-badge">CMC</span>`,S=(o.includeSuspectParts??!0)&&a.sharedPartAnomalies.length>0?`
    <section class="suspect-box">
      <div class="suspect-title">優先排查零件（同零件多處同時異常，建議優先會同檢討）</div>
      <div class="suspect-grid">
        ${a.sharedPartAnomalies.slice(0,8).map(t=>{let n=e(t.contact.productionDesign,t.contact.productionDesignExt)||`待補`,r=e(t.contact.development,t.contact.developmentExt)||`待補`,i=t.abnormalGfs.map(e=>e.displayCode).join(`、`);return`
              <div class="suspect-chip ${t.ngCount>=2?`is-high`:``}">
                <div class="suspect-chip-head">
                  <strong>${s(t.partName)}</strong>
                  <span>超規 ${t.ngCount} · 警戒 ${t.warningCount}</span>
                </div>
                <div class="suspect-chip-meta">部位：${s(i)}</div>
                <div class="suspect-chip-meta">設計：${s(n)} ｜ 開發：${s(r)}</div>
              </div>
            `}).join(``)}
      </div>
    </section>
  `:``,C=f.length>0?f.map(v).join(``):`<tr><td colspan="6" class="empty-sheet-msg">目前車型「${s(u)}」尚無可列印的量測項目。</td></tr>`;return{html:`<!doctype html>
<html lang="zh-Hant">
<head>
  <meta charset="utf-8" />
  <title>${s(_)}</title>
  <style>
    @page {
      size: A3 landscape;
      margin: 8mm 9mm;
    }
    * { box-sizing: border-box; }
    html, body {
      margin: 0;
      padding: 0;
      background: #FFFFFF;
      color: #0F172A;
      font-family: "Microsoft JhengHei UI", "Microsoft JhengHei", "PingFang TC", "Noto Sans TC", -apple-system, sans-serif;
      font-size: 9pt;
      line-height: 1.35;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .sheet-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      padding-bottom: 3mm;
      border-bottom: 0.7mm solid #17232A;
      margin-bottom: 2.5mm;
    }
    .sheet-title-group {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .sheet-logo {
      height: 10.5mm;
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
      font-size: 15pt;
      font-weight: 800;
      color: #17232A;
    }
    .sheet-subtitle {
      margin: 1px 0 0;
      font-size: 8.2pt;
      color: #475569;
    }
    .meta-strip {
      display: flex;
      flex-wrap: wrap;
      gap: 2mm 4.5mm;
      font-size: 8.8pt;
      color: #1E293B;
    }
    .meta-strip span b {
      color: #475569;
      font-weight: 700;
    }

    .kpi-grid {
      display: grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      gap: 2.5mm;
      margin-bottom: 2.5mm;
    }
    .kpi-card {
      padding: 2mm 3mm;
      border: 0.35mm solid #CBD5E1;
      border-top: 0.9mm solid #2874A6;
      border-radius: 1.5mm;
      background: #F8FAFC;
    }
    .kpi-card.is-ok { border-top-color: #15803D; }
    .kpi-card.is-ng { border-top-color: #B91C1C; }
    .kpi-card.is-accent { border-top-color: #F08A4C; }
    .kpi-label {
      font-size: 7.8pt;
      font-weight: 700;
      color: #475569;
    }
    .kpi-val {
      font-size: 12.5pt;
      font-weight: 800;
      color: #0F172A;
      font-variant-numeric: tabular-nums;
      line-height: 1.25;
    }
    .kpi-val.is-ok { color: #15803D; }
    .kpi-val.is-ng { color: #B91C1C; }
    .kpi-sub {
      font-size: 7.4pt;
      color: #64748B;
    }

    .suspect-box {
      margin-bottom: 2.5mm;
      padding: 2mm 2.8mm;
      border: 0.35mm solid #FCA5A5;
      border-left: 1mm solid #B91C1C;
      border-radius: 1.5mm;
      background: #FFF7F7;
      break-inside: avoid;
      page-break-inside: avoid;
    }
    .suspect-title {
      font-size: 8.5pt;
      font-weight: 800;
      color: #991B1B;
      margin-bottom: 1.5mm;
    }
    .suspect-grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 2mm;
    }
    .suspect-chip {
      padding: 1.5mm 2mm;
      border: 0.3mm solid #FECACA;
      border-radius: 1.2mm;
      background: #FFFFFF;
      font-size: 7.5pt;
      line-height: 1.35;
    }
    .suspect-chip.is-high {
      border-color: #EF4444;
      background: #FEF2F2;
    }
    .suspect-chip-head {
      display: flex;
      justify-content: space-between;
      gap: 4px;
      color: #0F172A;
      margin-bottom: 0.6mm;
    }
    .suspect-chip-head span {
      color: #B91C1C;
      font-weight: 700;
      white-space: nowrap;
    }
    .suspect-chip-meta {
      color: #475569;
    }

    .sheet-table {
      width: 100%;
      border-collapse: collapse;
      table-layout: fixed;
    }
    .sheet-table thead { display: table-header-group; }
    .sheet-table tr {
      break-inside: avoid;
      page-break-inside: avoid;
    }
    .sheet-table th {
      padding: 2mm 1.8mm;
      border: 0.35mm solid #334155;
      background: #EEF2F6;
      color: #17232A;
      font-size: 8.6pt;
      font-weight: 800;
      text-align: center;
      vertical-align: middle;
    }
    .sheet-table th.th-side-l { background: #E0F2FE; color: #0369A1; }
    .sheet-table th.th-side-r { background: #F3E8FF; color: #6D28D9; }
    .sheet-table td {
      padding: 1.8mm 2mm;
      border: 0.35mm solid #64748B;
      vertical-align: middle;
    }
    .sheet-table tr.row-ng > td.col-item,
    .sheet-table tr.row-ng > td.col-judge {
      background: #FFF5F5;
    }
    .sheet-table tr.row-warn > td.col-item,
    .sheet-table tr.row-warn > td.col-judge {
      background: #FFFBEB;
    }

    .col-item { width: 13.5%; vertical-align: top !important; }
    .col-diagram { width: 17.5%; text-align: center; }
    .col-spec { width: 11.5%; }
    .col-side { width: 20.5%; }
    .col-judge { width: 16.5%; vertical-align: top !important; }

    .item-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 4px;
      margin-bottom: 1.2mm;
    }
    .item-code {
      font-size: 11pt;
      font-weight: 800;
      color: #0F172A;
      font-variant-numeric: tabular-nums;
    }
    .lr-pill, .side-pill {
      display: inline-flex;
      align-items: center;
      gap: 1px;
      padding: 0.4mm 1.6mm;
      border-radius: 999px;
      border: 0.25mm solid #94A3B8;
      background: #FFFFFF;
      font-size: 7.2pt;
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
      gap: 0.8mm;
      font-size: 8.2pt;
      font-weight: 600;
      color: #0F172A;
    }
    .part-line {
      display: flex;
      align-items: flex-start;
      gap: 1.3mm;
      line-height: 1.25;
    }
    .part-badge {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 3.8mm;
      height: 3.8mm;
      flex: 0 0 3.8mm;
      border-radius: 0.8mm;
      font-size: 6.8pt;
      font-weight: 800;
      margin-top: 0.2mm;
    }
    .part-badge.is-a { background: #E0F2FE; color: #0369A1; }
    .part-badge.is-b { background: #E2E8F0; color: #334155; }
    .item-area {
      margin-top: 1.4mm;
      padding-top: 1mm;
      border-top: 0.25mm dashed #CBD5E1;
      display: grid;
      gap: 0.3mm;
      font-size: 7.5pt;
      color: #475569;
    }
    .area-main { font-weight: 700; color: #334155; }
    .area-sub { color: #64748B; }

    .diagram-frame {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 33mm;
      background: #FFFFFF;
    }
    .diagram-img {
      max-width: 100%;
      max-height: 33mm;
      width: auto;
      height: auto;
      object-fit: contain;
      display: block;
    }
    .diagram-placeholder {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 22mm;
      border: 0.3mm dashed #CBD5E1;
      border-radius: 1.5mm;
      color: #94A3B8;
      font-size: 7.8pt;
    }

    .spec-line {
      display: flex;
      align-items: baseline;
      gap: 3px;
      font-size: 8.1pt;
      line-height: 1.4;
      font-variant-numeric: tabular-nums;
      white-space: nowrap;
    }
    .spec-k { color: #475569; font-weight: 600; min-width: 9.5mm; }
    .spec-side-tag {
      display: inline-block;
      padding: 0 3px;
      border-radius: 2px;
      background: #E2E8F0;
      color: #1E293B;
      font-size: 6.8pt;
      font-weight: 800;
    }
    .spec-divider { border-top: 0.25mm dashed #CBD5E1; margin: 0.8mm 0; }
    .spec-axis { color: #475569; font-size: 7.6pt; }
    .spec-muted { color: #94A3B8; font-size: 7.8pt; text-align: center; }

    .col-side.is-lh { background: #FAFDFF; }
    .col-side.is-rh { background: #FDFBFF; }
    .col-side.is-empty { background: #F8FAFC; }

    .side-val-stack { display: grid; gap: 1.8mm; }
    .metric-val-row {
      display: flex;
      flex-wrap: nowrap;
      align-items: flex-end;
      gap: 1.4mm;
    }
    .metric-label {
      flex: 0 0 7mm;
      font-size: 7.6pt;
      font-weight: 700;
      color: #334155;
      padding-bottom: 1.8mm;
      white-space: nowrap;
    }
    .val-box-strip {
      display: flex;
      flex-wrap: wrap;
      gap: 1.2mm;
      flex: 1 1 auto;
      min-width: 0;
    }
    .val-box {
      display: grid;
      gap: 0.4mm;
      width: 12.2mm;
      text-align: center;
    }
    .val-box.is-delta {
      flex: 0 0 auto;
      margin-left: auto;
      width: 13.5mm;
    }
    .val-box-head {
      font-size: 7pt;
      font-weight: 700;
      color: #475569;
      line-height: 1.1;
      white-space: nowrap;
    }
    .val-box-cell {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 7.4mm;
      border: 0.35mm solid #94A3B8;
      border-radius: 1mm;
      background: #FFFFFF;
      font-size: 8.6pt;
      font-weight: 700;
      font-variant-numeric: tabular-nums;
      color: #0F172A;
    }
    .val-box-cell.is-ok {
      border-color: #22C55E;
      background: #DCFCE7;
      color: #15803D;
    }
    .val-box-cell.is-warning {
      border-color: #D97706;
      background: #FEF3C7;
      color: #92400E;
    }
    .val-box-cell.is-ng {
      border-color: #B91C1C;
      background: #FEE2E2;
      color: #991B1B;
      font-weight: 800;
    }
    .val-box-cell.is-neutral {
      border-color: #CBD5E1;
      background: #F8FAFC;
      color: #64748B;
      font-weight: 600;
    }
    .empty-side-slot {
      text-align: center;
      color: #94A3B8;
      font-size: 7.8pt;
      padding: 4mm 1mm;
    }

    .judge-badges {
      display: flex;
      flex-wrap: wrap;
      gap: 1.2mm;
      margin-bottom: 1.2mm;
    }
    .status-pill {
      display: inline-flex;
      align-items: center;
      gap: 2px;
      padding: 0.4mm 1.6mm;
      border-radius: 999px;
      font-size: 7.2pt;
      font-weight: 700;
      border: 0.25mm solid #CBD5E1;
      background: #F1F5F9;
      color: #475569;
      white-space: nowrap;
    }
    .status-pill.is-ok { background: #DCFCE7; border-color: #86EFAC; color: #15803D; }
    .status-pill.is-warning { background: #FEF3C7; border-color: #FCD34D; color: #92400E; }
    .status-pill.is-ng { background: #FEE2E2; border-color: #FCA5A5; color: #991B1B; }
    .status-pill.is-incomplete { background: #E0F2FE; border-color: #7DD3FC; color: #0369A1; }

    .diag-stack {
      display: grid;
      gap: 0.8mm;
      font-size: 7.4pt;
      line-height: 1.3;
      color: #1E293B;
    }
    .diag-line.is-ng { color: #991B1B; font-weight: 600; }
    .diag-line.is-warning { color: #92400E; font-weight: 600; }
    .mini-side {
      display: inline-block;
      padding: 0 3px;
      border-radius: 2px;
      font-size: 6.8pt;
      font-weight: 800;
    }
    .mini-side.is-l { background: #E0F2FE; color: #0369A1; }
    .mini-side.is-r { background: #F3E8FF; color: #6D28D9; }
    .diag-muted {
      font-size: 7.4pt;
      color: #94A3B8;
    }
    .contact-line {
      margin-top: 1mm;
      padding-top: 0.8mm;
      border-top: 0.2mm dashed #CBD5E1;
      display: grid;
      gap: 0.5mm;
      font-size: 7pt;
      color: #475569;
      line-height: 1.3;
    }
    .contact-row b {
      color: #1E293B;
    }
    .judge-note-line {
      height: 4.5mm;
      border-bottom: 0.25mm dotted #94A3B8;
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
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      font-size: 7.8pt;
      color: #475569;
    }
    .sign-strip {
      display: flex;
      gap: 8mm;
      font-weight: 700;
    }
    .sign-strip span {
      display: inline-block;
      min-width: 24mm;
      border-bottom: 0.3mm solid #64748B;
    }
  </style>
</head>
<body>
  <header class="sheet-header">
    <div class="sheet-title-group">
      ${x}
      <div>
        <h1>前圍建付量測異常分析報告（${s(u)}）</h1>
        <p class="sheet-subtitle">A3 橫式完整分析報告 ｜ 共 ${d.length} 處（${f.length} 列）｜ 含示意圖 ${h} 張 ｜ 單位：mm</p>
      </div>
    </div>
    <div class="meta-strip">
      <span><b>車次：</b>${s(l.name)}</span>
      <span><b>車型：</b>${s(u)}</span>
      <span><b>階段：</b>${s(l.trialStage.trim()||`未填`)}</span>
      <span><b>車號：</b>${s(l.vehicleNo.trim()||`未填`)}</span>
      <span><b>量測日期：</b>${s(g)}</span>
    </div>
  </header>

  <section class="kpi-grid">
    <div class="kpi-card">
      <div class="kpi-label">檢驗測點進度</div>
      <div class="kpi-val">${m.inspectedPoints} / ${m.totalPoints}</div>
      <div class="kpi-sub">已完測 ${a.counts.measured} / ${a.counts.total} 處</div>
    </div>
    <div class="kpi-card is-ok">
      <div class="kpi-label">整體合格率</div>
      <div class="kpi-val ${m.passRatePct===null?``:`is-ok`}">${m.passRatePct===null?`—`:`${m.passRatePct.toFixed(1)}%`}</div>
      <div class="kpi-sub">正常 ${m.okPoints} · 警戒 ${m.warnPoints}</div>
    </div>
    <div class="kpi-card is-ng">
      <div class="kpi-label">超差筆數</div>
      <div class="kpi-val ${m.ngPoints>0?`is-ng`:`is-ok`}">${m.ngPoints}</div>
      <div class="kpi-sub">超規 ${a.counts.ng} 處 · 警戒 ${a.counts.warning} 處</div>
    </div>
    <div class="kpi-card is-accent">
      <div class="kpi-label">最大正偏差</div>
      <div class="kpi-val">${m.maxPositive?`${s(m.maxPositive.formatted)} mm`:`—`}</div>
      <div class="kpi-sub">${m.maxPositive?`${s(m.maxPositive.displayCode)} · ${s(m.maxPositive.pointCode)}`:`尚無數據`}</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-label">最大負偏差</div>
      <div class="kpi-val">${m.maxNegative?`${s(m.maxNegative.formatted)} mm`:`—`}</div>
      <div class="kpi-sub">${m.maxNegative?`${s(m.maxNegative.displayCode)} · ${s(m.maxNegative.pointCode)}`:`尚無數據`}</div>
    </div>
  </section>

  ${S}

  <table class="sheet-table">
    <thead>
      <tr>
        <th class="col-item">編號 / 量測項目 / 分區</th>
        <th class="col-diagram">量測示意圖</th>
        <th class="col-spec">公差規格 (mm)</th>
        <th class="col-side th-side-l">左側 (L)（駕駛側）實測值 / 平行度</th>
        <th class="col-side th-side-r">右側 (R)（副駕側）實測值 / 平行度</th>
        <th class="col-judge">判定 / 備註（異常診斷與承辦）</th>
      </tr>
    </thead>
    <tbody>
      ${C}
    </tbody>
  </table>

  <footer class="sheet-footer">
    <span>圖例：綠底＝正常、黃底＝警戒、紅底＝超差 ｜ Δ＝該側間隙最大值與最小值落差（平行度）</span>
    <div class="sign-strip">
      <div>量測：<span></span></div>
      <div>複核：<span></span></div>
      <div>主管：<span></span></div>
    </div>
    <span>產出：${s(y())}${b?` ｜ ${s(b)}`:``}</span>
  </footer>
</body>
</html>`,fileTitle:_,modelLabel:u,rowCount:f.length,itemCount:d.length,abnormalCount:a.abnormalResults.length,diagramCount:h}}async function x(e,t={}){let n=b(e,t);if(n.itemCount===0)return{ok:!1,reason:`車型「${n.modelLabel}」目前沒有可匯出的量測項目。`};let r=await o(n.html,n.fileTitle);return r.ok?{ok:!0,result:n}:r}export{x as openAnalysisReportA3PdfPrint};