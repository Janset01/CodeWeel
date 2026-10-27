const bank=[
['Algoritmalar','Başlangıç','Değişken nedir?','Bir değişkenin değerini 3’ten 5’e çıkaran sözde kod yaz.','atama ve artırma işlemini düşün','x ← 3\nx ← 5'],
['Algoritmalar','Orta','Döngüler nasıl çalışır?','1’den 5’e kadar sayıları yazdıran sözde kod yaz.','for veya while kullan','for i ← 1 to 5: print(i)'],
['Algoritmalar','İleri','İkili arama nedir?','Sıralı dizide ikili aramanın sözde kodunu yaz.','orta indeksi hesapla','low high mid'],
['Programlama Temelleri','Başlangıç','Koşul ifadeleri ne işe yarar?','Bir sayının pozitif olup olmadığını kontrol eden kod yaz.','if kullan','if x > 0'],
['Programlama Temelleri','Orta','Fonksiyon nedir?','İki sayıyı toplayan fonksiyon yaz.','parametre ve return kullan','return a + b'],
['Programlama Temelleri','İleri','Özyineleme nedir?','Faktöriyel hesaplayan özyinelemeli fonksiyon yaz.','temel durum 0 veya 1','factorial'],
['OOP','Başlangıç','Sınıf ve nesne farkı nedir?','Öğrenci adlı sınıf ve bir nesne örneği yaz.','class anahtar sözcüğünü düşün','class Ogrenci'],
['OOP','Orta','Kalıtım nedir?','Hayvan sınıfından Kedi sınıfı türet.','extends veya : kullan','class Kedi'],
['OOP','İleri','Polimorfizm nedir?','Aynı metodu farklı davranışla kullanan iki sınıf tasarla.','override kullan','override'],
['SQL','Başlangıç','SELECT ve WHERE ne işe yarar?','Ogrenciler tablosundan notu 80 üzerinde olanları listele.','SELECT * FROM ... WHERE ...','SELECT * FROM Ogrenciler WHERE not > 80;'],
['SQL','Orta','UPDATE komutu ne yapar?','Ogrenciler tablosunda notu 80 altındaki öğrencilerin notunu 10 artır.','SET not = not + 10 ve WHERE kullan','UPDATE Ogrenciler SET not = not + 10 WHERE not < 80;'],
['SQL','İleri','JOIN ne işe yarar?','Ogrenciler ve Siniflar tablolarını sinif_id üzerinden birleştir.','INNER JOIN ... ON ...','SELECT * FROM Ogrenciler INNER JOIN Siniflar ON Ogrenciler.sinif_id = Siniflar.id;'],
['Git ve GitHub','Başlangıç','Git ile GitHub farkı nedir?','Değişen dosyaları gösteren Git komutunu yaz.','status kelimesini hatırla','git status'],
['Git ve GitHub','Orta','Commit nedir?','Değişiklikleri sahneleyip açıklamalı commit oluştur.','add ve commit komutları','git add .\ngit commit -m "Güncelleme"'],
['Git ve GitHub','İleri','Merge conflict nedir?','Bir çatışmayı çözdükten sonra hangi Git adımlarını izlersin?','dosyayı düzelt, add, commit','git add .\ngit commit'],
['Bilgisayar Ağları','Başlangıç','IP adresi ne işe yarar?','Yerel IP adresini görmek için Windows komutunu yaz.','ipconfig','ipconfig'],
['Bilgisayar Ağları','Orta','DNS nedir?','Bir alan adının IP adresini sorgulayan komut yaz.','nslookup','nslookup example.com'],
['Bilgisayar Ağları','İleri','TCP ve UDP farkı nedir?','TCP bağlantısını test etmek için bir yöntem açıkla.','telnet veya nc','telnet'],
['Web Geliştirme','Başlangıç','HTML ne işe yarar?','Bir başlık ve paragraf içeren HTML yaz.','h1 ve p etiketleri','<h1>Başlık</h1><p>Metin</p>'],
['Web Geliştirme','Orta','DOM nedir?','id değeri mesaj olan elemanın metnini JavaScript ile değiştir.','getElementById kullan','document.getElementById("mesaj").textContent = "Merhaba"'],
['Web Geliştirme','İleri','Asenkron işlem nedir?','fetch ile JSON verisi okuyan kod yaz.','await response.json()','await fetch'],
['Mobil Geliştirme','Başlangıç','Activity nedir?','Android’de bir Activity sınıfının adını yaz.','MainActivity','MainActivity'],
['Mobil Geliştirme','Orta','Jetpack Compose nedir?','Kotlin Compose ile bir Text bileşeni yaz.','Text("...")','Text("Merhaba")'],
['Mobil Geliştirme','İleri','State yönetimi nedir?','Compose’da değişebilir bir sayaç state’i tanımla.','remember ve mutableIntStateOf','remember { mutableIntStateOf(0) }'],
['Linux','Başlangıç','Terminal ne işe yarar?','Bulunduğun dizini gösteren komutu yaz.','pwd','pwd'],
['Linux','Orta','Dosya izinleri nedir?','Bir dosyaya çalıştırma izni ekleyen komutu yaz.','chmod +x','chmod +x script.sh'],
['Linux','İleri','Pipe nedir?','Bir dosyada hata kelimesini grep ile filtrele.','| veya grep','grep "hata" dosya.txt']
];const subtopics={
'Algoritmalar':['Değişkenler','Döngüler','Arama algoritmaları'],
'Programlama Temelleri':['Koşullar','Fonksiyonlar','Özyineleme'],
'OOP':['Sınıflar ve nesneler','Kalıtım','Polimorfizm'],
'SQL':['SELECT ve WHERE','UPDATE','JOIN'],
'Git ve GitHub':['Git durumu','Commit','Merge conflict'],
'Bilgisayar Ağları':['IP adresleri','DNS','TCP ve UDP'],
'Web Geliştirme':['HTML','DOM','Asenkron işlemler'],
'Mobil Geliştirme':['Activity','Jetpack Compose','State yönetimi'],
'Linux':['Terminal','Dosya izinleri','Pipe']
};
const details={
'Koşullar':['if ifadeleri','else ve else if','switch-case','İç içe koşullar','Mantıksal operatörler'],
'Fonksiyonlar':['Fonksiyon tanımlama','Parametreler','return ve dönüş değeri','Kapsam (scope)','Fonksiyon çağırma'],
'Özyineleme':['Temel durum','Özyinelemeli çağrı','Faktöriyel','Fibonacci','Çağrı yığını'],
'Değişkenler':['Değişken tanımlama','Veri tipleri','Atama','Tür dönüşümü'],
'Döngüler':['for döngüsü','while döngüsü','break ve continue','İç içe döngüler'],
'Arama algoritmaları':['Doğrusal arama','İkili arama','Arama karmaşıklığı'],
'Sınıflar ve nesneler':['Sınıf tanımlama','Nesne oluşturma','Özellikler','Metotlar'],
'Kalıtım':['Üst sınıf','Alt sınıf','super','Metot ezme'],
'Polimorfizm':['Metot ezme','Çok biçimlilik örnekleri','Arayüzler'],
'SELECT ve WHERE':['SELECT','WHERE','ORDER BY','LIMIT','AND ve OR'],
'UPDATE':['SET','WHERE ile güncelleme','Güvenli UPDATE'],
'JOIN':['INNER JOIN','LEFT JOIN','RIGHT JOIN','JOIN koşulları'],
'Git durumu':['git status','git diff','git log'],
'Commit':['git add','git commit','Commit mesajları'],
'Merge conflict':['Branch birleştirme','Çakışma çözme','Merge sonrası kontrol'],
'IP adresleri':['IPv4','IPv6','Yerel IP','Alt ağ maskesi'],
'DNS':['DNS sorgusu','DNS kayıtları','Alan adı çözümleme'],
'TCP ve UDP':['TCP bağlantısı','UDP paketleri','Portlar'],
'HTML':['HTML iskeleti','Başlık ve paragraf','Formlar','Semantik etiketler'],
'DOM':['Eleman seçme','Metin değiştirme','Olay dinleyicileri'],
'Asenkron işlemler':['Promise','async/await','fetch','Hata yakalama'],
'Activity':['Activity yaşam döngüsü','Intent','Ekran geçişleri'],
'Jetpack Compose':['Composable','Text ve Button','Column ve Row'],
'State yönetimi':['remember','mutableStateOf','State hoisting'],
'Terminal':['pwd ve ls','cd','Dosya oluşturma'],
'Dosya izinleri':['chmod','chown','İzinleri okuma'],
'Pipe':['Pipe operatörü','grep','Yönlendirme']
};
const $=id=>document.getElementById(id);
const cats=['Hepsi',...new Set(bank.map(x=>x[0]))];
$('category').innerHTML=cats.map(x=>'<option>'+x+'</option>').join('');
function subtopicFor(item){const items=bank.filter(x=>x[0]===item[0]);return (subtopics[item[0]]||[])[items.indexOf(item)]||item[2]}
function updateSubtopics(){const category=$('category').value;const options=category==='Hepsi'?[...new Set(bank.map(subtopicFor))]:subtopics[category]||[];const sel=$('subtopic');sel.replaceChildren();['Hepsi',...options].forEach(name=>{const o=document.createElement('option');o.value=name;o.textContent=name;sel.appendChild(o)})}
$('category').addEventListener('change',()=>{updateSubtopics();refreshWheel()});
updateSubtopics();
let selected=null,selectedLabel='',angle=0;let records=[];try{const saved=JSON.parse(localStorage.getItem('cw-records')||'[]');records=Array.isArray(saved)?saved.filter(r=>r&&typeof r==='object'&&!Array.isArray(r)&&['category','question','status','date'].every(k=>typeof r[k]==='string')):[]}catch(e){console.warn('Geçersiz çalışma geçmişi:',e)}let timer=null,seconds=0,timerId=null;function pool(){
 const cat=$('category').value,sub=$('subtopic').value,level=$('level').value;
 const base=bank.filter(x=>(cat==='Hepsi'||x[0]===cat)&&(level==='Hepsi'||x[1]===level));
 if(sub==='Hepsi'){const seen=new Set();return base.filter(x=>{const key=x[0]+'|'+subtopicFor(x);if(seen.has(key))return false;seen.add(key);return true}).map(x=>({base:x,label:subtopicFor(x),detail:false}))}
 const matched=base.filter(x=>subtopicFor(x)===sub);
 if(!matched.length)return [];
 return (details[sub]||[sub]).map(name=>({base:matched[0],label:name,detail:true}))
}
const practice={
'ORDER BY':['Ogrenciler tablosunda ad, soyad ve not sütunları var. Öğrencileri notlarına göre en yüksekten en düşüğe sıralayan SQL sorgusunu yaz.','ORDER BY not DESC kullan.','SELECT ad, soyad, not FROM Ogrenciler ORDER BY not DESC;'],
'LIMIT':['Urunler tablosundan fiyatı en yüksek ilk 5 ürünü getiren SQL sorgusunu yaz.','ORDER BY fiyat DESC ile LIMIT 5 kullan.','SELECT * FROM Urunler ORDER BY fiyat DESC LIMIT 5;'],
'AND ve OR':['Ogrenciler tablosunda notu 70 üstünde olan ve bolumu Yazılım olan öğrencileri seçen SQL sorgusunu yaz.','WHERE koşullarını AND ile birleştir.','SELECT * FROM Ogrenciler WHERE not > 70 AND bolum = \'Yazılım\';'],
'SELECT':['Ogrenciler tablosundan yalnızca ad ve soyad alanlarını getiren sorguyu yaz.','SELECT ad, soyad kullan.','SELECT ad, soyad FROM Ogrenciler;'],
'WHERE':['Urunler tablosunda fiyatı 500 üzerinde olan ürünleri listeleyen SQL sorgusunu yaz.','WHERE fiyat > 500 kullan.','SELECT * FROM Urunler WHERE fiyat > 500;'],
'INNER JOIN':['Ogrenciler ve Siniflar tablolarını sinif_id üzerinden birleştirip öğrenci adını ve sınıf adını getiren sorguyu yaz.','INNER JOIN ve ON kullan.','SELECT o.ad, s.sinif_adi FROM Ogrenciler o INNER JOIN Siniflar s ON o.sinif_id = s.id;'],
'LEFT JOIN':['Hiç siparişi olmayanlar dahil tüm müşterileri listelemek için Musteriler ve Siparisler tablolarını birleştiren sorguyu yaz.','LEFT JOIN kullan.','SELECT * FROM Musteriler m LEFT JOIN Siparisler s ON m.id = s.musteri_id;'],
'if ifadeleri':['Bir sayının çift olup olmadığını kontrol eden bir if örneği yaz.','Kalan operatörünü (%) kullan.','if (sayi % 2 === 0) { console.log("Çift"); }'],
'Mantıksal operatörler':['Yaşı 18 veya üstünde olan VE üyeliği aktif olan kişiye erişim izni veren koşulu JavaScript ile yaz.','&& operatörünü kullan.','if (yas >= 18 && uyelikAktif) { console.log("İzin verildi"); }'],
'for döngüsü':['1 ile 10 arasındaki çift sayıları ekrana yazdıran bir for döngüsü yaz.','i değerini 2 artırabilirsin.','for (let i = 2; i <= 10; i += 2) console.log(i);'],
'while döngüsü':['1’den 5’e kadar sayıları while döngüsü ile yazdır.','Sayaç tanımla ve artır.','let i = 1; while (i <= 5) { console.log(i); i++; }'],
'git status':['Çalışma klasöründe değiştirilen dosyaları gösteren Git komutunu yaz.','status komutu.','git status'],
'DOM':['id değeri mesaj olan HTML elemanının metnini Merhaba olarak değiştir.','textContent kullan.','document.getElementById("mesaj").textContent = "Merhaba";']
};
function exerciseFor(picked){
 if(practice[picked.label])return practice[picked.label];
 if(!picked.detail)return [picked.base[3],picked.base[4],picked.base[5]];
 const label=picked.label,cat=picked.base[0];
 if(cat==='SQL')return ['SQL konusunda “'+label+'” özelliğini kullanan örnek bir sorgu yaz. Kullanacağın tablo ve sütunları da belirt.','Sorgunun sözdizimini ve WHERE/JOIN gibi gerekli bölümleri düşün.','Örnek çözümler seçilen SQL özelliğine ve tablo yapısına göre değişir.'];
 if(['Programlama Temelleri','Algoritmalar','OOP','Web Geliştirme','Mobil Geliştirme'].includes(cat))return ['“'+label+'” kavramını kullanan küçük bir kod örneği oluştur. Kodun ne yaptığını bir cümleyle açıkla.','En basit çalışan örnekle başla.','Bu konu için tek bir doğru kod yok; sözdizimi ve davranışı kontrol et.'];
 return ['“'+label+'” konusunda gerçek bir senaryo düşün ve ilgili komutları veya çözüm adımlarını yaz.','Kavramın temel kullanım amacını hatırla.','Çözüm seçtiğin senaryoya göre değişir.'];
}
let currentExercise=null,spinning=false,spinTimeout=null;
let spinAudio=null;
function spinTick(strength=0.06){
 try{
  const Ctx=window.AudioContext||window.webkitAudioContext;if(!Ctx)return;
  spinAudio=spinAudio||new Ctx();if(spinAudio.state==='suspended')spinAudio.resume().catch(()=>{});
  const o=spinAudio.createOscillator(),g=spinAudio.createGain(),t=spinAudio.currentTime;
  o.type='triangle';o.frequency.setValueAtTime(460,t);o.frequency.exponentialRampToValueAtTime(180,t+0.045);
  g.gain.setValueAtTime(Math.max(0.0001,strength),t);g.gain.exponentialRampToValueAtTime(0.0001,t+0.055);
  o.connect(g);g.connect(spinAudio.destination);o.start(t);o.stop(t+0.06);
 }catch(e){console.warn('Çark sesi kullanılamadı:',e)}
}
function wheelItems(labels,selectedIndex){
 const track=$('topicTrack');track.replaceChildren();
 labels.forEach((label,i)=>{const el=document.createElement('span');el.className='spin-item'+(i===selectedIndex?' is-selected':'');el.textContent=label;track.appendChild(el)});
}
function paintWheel(choices){
 wheelItems([choices.length?'Hazır mısın?':'Bu filtrelerde konu yok'],0);
 $('spin').disabled=!choices.length;
}
function refreshWheel(){
 if(spinning)return;
 selected=null;selectedLabel='';currentExercise=null;
 $('topic').textContent='Bir konu seçmek için çarkı çevir.';
 $('question').textContent='';$('task').textContent='Bir konu seçerek alıştırmaya başla.';
 $('answer').value='';$('explanation').value='';$('feedback').textContent='';
 paintWheel(pool());
}
['subtopic','level'].forEach(id=>$(id).addEventListener('change',refreshWheel));
function spin(){
 if(spinning)return;
 const choices=pool();if(!choices.length)return;
 const unseen=choices.filter(x=>!records.some(r=>r.question===x.label));
 const candidates=unseen.length?unseen:choices;
 const picked=candidates[Math.floor(Math.random()*candidates.length)];
 spinning=true;selected=null;
 ['category','subtopic','level'].forEach(id=>$(id).disabled=true);$('spin').disabled=true;
 try{const Ctx=window.AudioContext||window.webkitAudioContext;if(Ctx){spinAudio=spinAudio||new Ctx();spinAudio.resume().catch(()=>{})}}catch(e){}
 const selector=$('wheel'),track=$('topicTrack');
 const itemHeight=window.matchMedia('(max-width:700px)').matches?90:120;
 const total=32;
 // Never show duplicate topic names in the three visible slots.
 const uniqueLabels=[...new Set(choices.map(x=>x.label))];
 const labels=[];
 for(let i=0;i<total;i++){
  if(i===total-2){labels.push(picked.label);continue}
  const forbidden=new Set(labels.slice(-2).filter(Boolean));
  if(i===total-3||i===total-1)forbidden.add(picked.label);
  const available=uniqueLabels.filter(label=>!forbidden.has(label));
  labels.push(available.length?available[Math.floor(Math.random()*available.length)]:'');
 }
 wheelItems(labels,total-2);
 const finalOffset=selector.clientHeight/2-(total-2+0.5)*itemHeight;
 const startOffset=selector.clientHeight/2-itemHeight/2;
 track.style.transition='none';track.style.transform='translateY('+startOffset+'px)';
 void track.offsetHeight;
 const start=performance.now(),duration=3400;
 let lastTick=-1;
 function frame(now){
  const p=Math.min(1,(now-start)/duration);
  const eased=1-Math.pow(1-p,3);
  const offset=startOffset+(finalOffset-startOffset)*eased;
  track.style.transform='translateY('+offset+'px)';
  const index=Math.max(0,Math.floor((startOffset-offset)/itemHeight));
  if(index!==lastTick){lastTick=index;spinTick(0.035)}
  if(p<1){spinTimeout=requestAnimationFrame(frame);return}
  spinTimeout=null;track.style.transform='translateY('+finalOffset+'px)';
  spinning=false;selected=picked.base;selectedLabel=picked.label;currentExercise=exerciseFor(picked);
  $('topic').textContent=selected[0]+' · '+picked.label+' · '+selected[1];
  $('question').textContent='Araştır: '+picked.label+' kavramını kendi cümlelerinle açıkla.';
  $('task').textContent=currentExercise[0];$('answer').value='';$('explanation').value='';$('feedback').textContent='';
  ['category','subtopic','level'].forEach(id=>$(id).disabled=false);$('spin').disabled=false;
 }
 spinTimeout=requestAnimationFrame(frame);
}
refreshWheel();$('spin').onclick=spin;
function fmt(n){return `${String(Math.floor(n/60)).padStart(2,'0')}:${String(n%60).padStart(2,'0')}`}let timerDeadline=0;function updateClock(){if(timerId)$(timerId).textContent=fmt(seconds)}function stopTimer(){clearInterval(timer);timer=null;timerDeadline=0}function tickTimer(){if(!timer||!timerDeadline)return;seconds=Math.max(0,Math.ceil((timerDeadline-Date.now())/1000));updateClock();if(seconds===0){const finishedId=timerId;stopTimer();playTimerChime();showTimerMessage(finishedId)}}document.addEventListener('visibilitychange',()=>{if(!document.hidden)tickTimer()});
let audioContext=null;
function playTimerChime(){
 try{
  const AudioCtx=window.AudioContext||window.webkitAudioContext;
  if(!AudioCtx)return;
  audioContext=audioContext||new AudioCtx();
  if(audioContext.state==='suspended')audioContext.resume().catch(()=>{});
  const start=audioContext.currentTime+0.05;
  [659.25,783.99,1046.5].forEach((freq,i)=>{
   const oscillator=audioContext.createOscillator(),gain=audioContext.createGain();
   oscillator.type='sine';oscillator.frequency.value=freq;
   const t=start+i*0.32;
   gain.gain.setValueAtTime(0.0001,t);
   gain.gain.exponentialRampToValueAtTime(0.13,t+0.025);
   gain.gain.exponentialRampToValueAtTime(0.0001,t+0.55);
   oscillator.connect(gain);gain.connect(audioContext.destination);
   oscillator.start(t);oscillator.stop(t+0.56);
  });
 }catch(e){console.warn('Bildirim sesi çalınamadı:',e)}
}
function showTimerMessage(id){
 const message=id==='researchClock'?'Araştırma süren doldu! Şimdi anlatma zamanı.':'Konuşma süren doldu! Şimdi uygulama zamanı.';
 let notice=document.getElementById('timerNotice');
 if(!notice){notice=document.createElement('p');notice.id='timerNotice';notice.setAttribute('role','status');notice.setAttribute('aria-live','polite');notice.style.cssText='padding:12px 16px;border-radius:12px;background:#f0dfdc;color:#53212d;font-weight:700;margin:12px 0';document.getElementById('calisma').appendChild(notice)}
 notice.textContent=message;
}
document.querySelectorAll('[data-timer]').forEach(b=>b.onclick=()=>{
 const id=b.dataset.timer,clockId=id==='researchTime'?'researchClock':'speechClock';
 if(timer&&timerId===clockId){stopTimer();return}
 stopTimer();timerId=clockId;seconds=Number($(id).value);if(!Number.isFinite(seconds)||seconds<=0){$('feedback').textContent='Lütfen sıfırdan büyük geçerli bir süre seç.';return}seconds=Math.ceil(seconds);updateClock();
 const notice=document.getElementById('timerNotice');if(notice)notice.textContent='';
 // Sesin mobil tarayıcılarda çalışabilmesi için kullanıcı tıklamasında ses motorunu hazırla.
 try{const Ctx=window.AudioContext||window.webkitAudioContext;if(Ctx){audioContext=audioContext||new Ctx();if(audioContext.state==='suspended')audioContext.resume().catch(()=>{})}}catch(e){}
 timerDeadline=Date.now()+seconds*1000;timer=setInterval(tickTimer,250);
});['researchTime','speechTime'].forEach(id=>$(id).onchange=()=>{if(!timer){const duration=Number($(id).value);$(id==='researchTime'?'researchClock':'speechClock').textContent=fmt(Number.isFinite(duration)&&duration>0?Math.ceil(duration):0)}});$('hint').onclick=()=>{$('feedback').textContent=selected?'İpucu: '+currentExercise[1]:'Önce çarkı çevir.'};$('check').onclick=()=>{if(!selected)return;$('feedback').textContent='Örnek çözüm: '+currentExercise[2]+' — Kendi çözümünle karşılaştır. Bu sürüm kodu çalıştırmaz veya otomatik doğrulamaz.'};function escapeHTML(value){return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}function render(){let count=records.length;$('stats').textContent=`Toplam ${count} çalışma · ${records.filter(r=>r.status==='Öğrendim').length} öğrenildi · ${records.filter(r=>r.status==='Tekrar etmeliyim').length} tekrar bekliyor`;$('history').innerHTML=records.slice(-15).reverse().map(r=>`<div><strong>${escapeHTML(r.category)}</strong> — ${escapeHTML(r.question)} · ${escapeHTML(r.status)} <small>(${escapeHTML(r.date)})</small></div>`).join('')||'Henüz çalışma kaydı yok.'}document.querySelectorAll('.status').forEach(b=>b.onclick=()=>{if(!selected){alert('Önce bir konu seç.');return}records.push({category:selected[0],question:selectedLabel||selected[2],status:b.dataset.status,date:new Date().toLocaleDateString('tr-TR'),explanation:$('explanation').value,answer:$('answer').value});try{localStorage.setItem('cw-records',JSON.stringify(records));render();$('feedback').textContent='Çalışman kaydedildi.'}catch(e){records.pop();$('feedback').textContent='Kayıt saklanamadı. Tarayıcı depolama alanını kontrol et ve mevcut geçmişini yedekle.';console.warn('CodeWeel geçmişi kaydedilemedi:',e)}});// Allow users to back up their locally stored study history without a server.
const exportButton=document.createElement('button');
exportButton.type='button';
exportButton.id='exportHistory';
exportButton.textContent='📥 Çalışma geçmişini yedekle';
exportButton.style.margin='8px';
$('clear').insertAdjacentElement('beforebegin',exportButton);
exportButton.onclick=()=>{
 if(!records.length){alert('Yedeklenecek çalışma kaydı bulunmuyor.');return}
 const backup={format:'codeweel-history',version:1,exportedAt:new Date().toISOString(),records:records.map(r=>({category:r.category,question:r.question,status:r.status,date:r.date,explanation:typeof r.explanation==='string'?r.explanation:'',answer:typeof r.answer==='string'?r.answer:''}))};
 const blob=new Blob([JSON.stringify(backup,null,2)],{type:'application/json;charset=utf-8'});
 const url=URL.createObjectURL(blob);
 const link=document.createElement('a');
 link.href=url;
 link.download='codeweel-calisma-gecmisi-'+new Date().toISOString().slice(0,10)+'.json';
 document.body.appendChild(link);
 link.click();
 link.remove();
 setTimeout(()=>URL.revokeObjectURL(url),1000);
};
// Restore a previously downloaded CodeWeel history backup.
const importButton=document.createElement('button');
importButton.type='button';
importButton.id='importHistory';
importButton.textContent='📤 Çalışma geçmişini geri yükle';
importButton.style.margin='8px';
const importInput=document.createElement('input');
importInput.type='file';
importInput.accept='.json,application/json';
importInput.hidden=true;
$('clear').insertAdjacentElement('beforebegin',importButton);
importButton.insertAdjacentElement('afterend',importInput);
importButton.onclick=()=>importInput.click();
importInput.onchange=async()=>{
 const file=importInput.files&&importInput.files[0];
 if(!file)return;
 try{
  if(file.size>5*1024*1024)throw new Error('Dosya 5 MB sınırını aşıyor.');
  const backup=JSON.parse(await file.text());
  if(!backup||backup.format!=='codeweel-history'||backup.version!==1||!Array.isArray(backup.records))throw new Error('Bu dosya geçerli bir CodeWeel yedeği değil.');
  if(backup.records.length>10000)throw new Error('Yedekte çok fazla kayıt var.');
  const keys=['category','question','status','date','explanation','answer'];
  const clean=backup.records.map(row=>{
   if(!row||typeof row!=='object'||Array.isArray(row))throw new Error('Yedekte geçersiz kayıt var.');
   const result={};
   for(const key of keys){
    const value=row[key]??'';
    if(typeof value!=='string'||value.length>50000)throw new Error('Yedekte geçersiz alan var: '+key);
    result[key]=value;
   }
   for(const key of ['category','question','status','date']){
    if(!result[key].trim())throw new Error('Yedekte zorunlu alan boş: '+key);
   }
   if(!['Öğrendim','Tekrar etmeliyim'].includes(result.status))throw new Error('Yedekte geçersiz çalışma durumu.');
   return result;
  });
  if(!confirm(clean.length+' kayıt geri yüklenecek. Mevcut '+records.length+' kayıt değiştirilecek. Devam edilsin mi?'))return;
  localStorage.setItem('cw-records',JSON.stringify(clean));
  records=clean;
  render();
  $('feedback').textContent=clean.length+' çalışma kaydı geri yüklendi.';
 }catch(error){alert('Yedek geri yüklenemedi: '+error.message)}
 finally{importInput.value=''}
};
$('clear').onclick=()=>{if(confirm('Tüm çalışma geçmişi silinsin mi?')){try{localStorage.removeItem('cw-records');records=[];render()}catch(e){alert('Çalışma geçmişi silinemedi. Tarayıcı depolama izinlerini kontrol et.');console.warn('Geçmiş silinemedi:',e)}}};let recognition=null;const Speech=window.SpeechRecognition||window.webkitSpeechRecognition;if(Speech){recognition=new Speech();recognition.lang='tr-TR';recognition.continuous=true;recognition.interimResults=false;recognition.onresult=e=>{for(let i=e.resultIndex;i<e.results.length;i++)if(e.results[i].isFinal)$('explanation').value+=e.results[i][0].transcript+' '};recognition.onerror=e=>{$('mic').textContent='🎙️ Sesle yazmayı başlat';alert('Mikrofon kullanılamadı: '+e.error)};recognition.onend=()=>{$('mic').textContent='🎙️ Sesle yazmayı başlat'};let listening=false;$('mic').onclick=()=>{try{if(listening){recognition.stop();listening=false}else{recognition.start();listening=true;$('mic').textContent='⏹️ Kaydı durdur'}}catch(e){alert(e.message)}};recognition.onend=()=>{listening=false;$('mic').textContent='🎙️ Sesle yazmayı başlat'}}else{$('mic').disabled=true;$('mic').textContent='Ses tanıma bu tarayıcıda desteklenmiyor'}render();