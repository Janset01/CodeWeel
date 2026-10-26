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
let selected=null,selectedLabel='',angle=0;let records=[];try{const saved=JSON.parse(localStorage.getItem('cw-records')||'[]');records=Array.isArray(saved)?saved:[]}catch(e){console.warn('Geçersiz çalışma geçmişi:',e)}let timer=null,seconds=0,timerId=null;function pool(){
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
const rowHeight=86;
function paintWheel(choices){
 const track=$('topicTrack');track.replaceChildren();
 $('wheel').disabled=!choices.length;const spinButton=$('spin');if(spinButton)spinButton.disabled=!choices.length;
 if(!choices.length){track.textContent='Bu filtrelere uygun konu bulunamadı.';return}
 const items=[...choices,...choices,...choices,...choices,...choices];
 items.forEach((item,i)=>{const row=document.createElement('span');row.className='topic-entry';const title=document.createElement('span');title.textContent=item.label;const badge=document.createElement('small');badge.textContent=String((i%choices.length)+1).padStart(2,'0');row.append(title,badge);track.appendChild(row)});
 track.style.transition='none';track.style.transform='translateY(0px)';
 requestAnimationFrame(()=>positionTrack(0,false));
}
function positionTrack(index,animate){
 const track=$('topicTrack'),viewport=$('wheel');
 const item=track.children[index];if(!item)return;
 const offset=viewport.clientHeight/2-(item.offsetTop+item.offsetHeight/2);
 track.style.transition=animate?'transform 3s cubic-bezier(.12,.72,.12,1)':'none';
 track.style.transform='translateY('+offset+'px)';
 track.querySelectorAll('.topic-entry').forEach((row,i)=>row.classList.toggle('active',i===index));
}
function refreshWheel(){
 if(spinning)return;
 selected=null;selectedLabel='';currentExercise=null;
 $('topic').textContent='Konu seçmek için kartlara dokun.';
 $('question').textContent='';
 $('task').textContent='Bir konu seçerek alıştırmaya başla.';
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
 const index=choices.indexOf(picked),targetIndex=choices.length*3+index;
 spinning=true;selected=null;
 ['category','subtopic','level'].forEach(id=>$(id).disabled=true);
 $('wheel').disabled=true;$('spin').disabled=true;
 positionTrack(targetIndex,true);
 spinTimeout=setTimeout(()=>{
  spinning=false;selected=picked.base;selectedLabel=picked.label;currentExercise=exerciseFor(picked);
  $('topic').textContent=selected[0]+' · '+picked.label+' · '+selected[1];
  $('question').textContent='Araştır: '+picked.label+' kavramını kendi cümlelerinle açıkla.';
  $('task').textContent=currentExercise[0];
  $('answer').value='';$('explanation').value='';$('feedback').textContent='';
  ['category','subtopic','level'].forEach(id=>$(id).disabled=false);
  $('wheel').disabled=false;$('spin').disabled=false;
 },3050);
}
refreshWheel();$('spin').onclick=spin;
function fmt(n){return `${String(Math.floor(n/60)).padStart(2,'0')}:${String(n%60).padStart(2,'0')}`}function updateClock(){if(timerId)$(timerId).textContent=fmt(seconds)}function stopTimer(){clearInterval(timer);timer=null}
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
 stopTimer();timerId=clockId;seconds=Number($(id).value);updateClock();
 const notice=document.getElementById('timerNotice');if(notice)notice.textContent='';
 // Sesin mobil tarayıcılarda çalışabilmesi için kullanıcı tıklamasında ses motorunu hazırla.
 try{const Ctx=window.AudioContext||window.webkitAudioContext;if(Ctx){audioContext=audioContext||new Ctx();if(audioContext.state==='suspended')audioContext.resume().catch(()=>{})}}catch(e){}
 timer=setInterval(()=>{seconds=Math.max(0,seconds-1);updateClock();if(seconds===0){stopTimer();playTimerChime();showTimerMessage(clockId)}},1000);
});['researchTime','speechTime'].forEach(id=>$(id).onchange=()=>{if(!timer){$(id==='researchTime'?'researchClock':'speechClock').textContent=fmt(Number($(id).value))}});$('hint').onclick=()=>{$('feedback').textContent=selected?'İpucu: '+currentExercise[1]:'Önce çarkı çevir.'};$('check').onclick=()=>{if(!selected)return;$('feedback').textContent='Örnek çözüm: '+currentExercise[2]+' — Kendi çözümünle karşılaştır. Bu sürüm kodu çalıştırmaz veya otomatik doğrulamaz.'};function render(){let count=records.length;$('stats').textContent=`Toplam ${count} çalışma · ${records.filter(r=>r.status==='Öğrendim').length} öğrenildi · ${records.filter(r=>r.status==='Tekrar etmeliyim').length} tekrar bekliyor`;$('history').innerHTML=records.slice(-15).reverse().map(r=>`<div><strong>${r.category}</strong> — ${r.question} · ${r.status} <small>(${r.date})</small></div>`).join('')||'Henüz çalışma kaydı yok.'}document.querySelectorAll('.status').forEach(b=>b.onclick=()=>{if(!selected){alert('Önce bir konu seç.');return}records.push({category:selected[0],question:selectedLabel||selected[2],status:b.dataset.status,date:new Date().toLocaleDateString('tr-TR'),explanation:$('explanation').value,answer:$('answer').value});localStorage.setItem('cw-records',JSON.stringify(records));render();$('feedback').textContent='Çalışman kaydedildi.'});$('clear').onclick=()=>{if(confirm('Tüm çalışma geçmişi silinsin mi?')){records=[];localStorage.removeItem('cw-records');render()}};let recognition=null;const Speech=window.SpeechRecognition||window.webkitSpeechRecognition;if(Speech){recognition=new Speech();recognition.lang='tr-TR';recognition.continuous=true;recognition.interimResults=false;recognition.onresult=e=>{for(let i=e.resultIndex;i<e.results.length;i++)if(e.results[i].isFinal)$('explanation').value+=e.results[i][0].transcript+' '};recognition.onerror=e=>{$('mic').textContent='🎙️ Sesle yazmayı başlat';alert('Mikrofon kullanılamadı: '+e.error)};recognition.onend=()=>{$('mic').textContent='🎙️ Sesle yazmayı başlat'};let listening=false;$('mic').onclick=()=>{try{if(listening){recognition.stop();listening=false}else{recognition.start();listening=true;$('mic').textContent='⏹️ Kaydı durdur'}}catch(e){alert(e.message)}};recognition.onend=()=>{listening=false;$('mic').textContent='🎙️ Sesle yazmayı başlat'}}else{$('mic').disabled=true;$('mic').textContent='Ses tanıma bu tarayıcıda desteklenmiyor'}render();