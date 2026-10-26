const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const {pathToFileURL}=require('node:url');
const path=require('node:path');
(async()=>{
 const browser=await chromium.launch({headless:true});
 try{
  const page=await browser.newPage({acceptDownloads:true});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto(pathToFileURL(path.resolve('index.html')).href);
  const valid={format:'codeweel-history',version:1,records:[{category:'SQL',question:'JOIN nedir?',status:'Öğrendim',date:'26.10.2026',explanation:'Birleştirme',answer:'INNER JOIN'}]};
  page.on('dialog',dialog=>dialog.accept());
  const upload=async backup=>page.locator('input[type=file][accept*="json"]').setInputFiles({name:'backup.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify(backup))});
  await upload(valid);
  await assert.doesNotReject(()=>page.getByText('1 çalışma kaydı geri yüklendi.').waitFor());
  assert.match(await page.locator('#stats').innerText(),/Toplam 1 çalışma/);
  await page.reload();
  assert.match(await page.locator('#history').innerText(),/JOIN nedir/);
  const downloadPromise=page.waitForEvent('download');
  await page.locator('#exportHistory').click();
  const download=await downloadPromise;
  assert.match(download.suggestedFilename(),/codeweel-calisma-gecmisi/);
  const bad=structuredClone(valid);bad.records[0].question=' ';
  await upload(bad);
  await page.getByText(/Yedek geri yüklenemedi/).waitFor({timeout:1000}).catch(()=>{}); // error is shown as a browser alert
  assert.match(await page.locator('#history').innerText(),/JOIN nedir/);
  assert.equal(errors.length,0,'Browser errors: '+errors.join('; '));
  console.log('PASS: restore, persistence, export, invalid backup leaves records intact');
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});
