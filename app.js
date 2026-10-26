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
const wheelColors=['#7296eb','#a8bff6','#74c5bd','#a3e0d6','#f2c27c','#f8d8a4','#bda7ed','#d8c8f7'];
function paintWheel(choices){
 const wheel=$('wheel');wheel.querySelectorAll('.wheel-label').forEach(el=>el.remove());
 const count=choices.length;
 if(!count){wheel.style.background='#e5eaf1';wheel.title='Bu filtrelerde konu yok';$('spin').disabled=true;return}
 $('spin').disabled=false;
 const slice=360/count;
 wheel.style.background='conic-gradient('+choices.map((item,i)=>wheelColors[i%wheelColors.length]+' '+(i*slice)+'deg '+((i+1)*slice)+'deg').join(',')+')';
 choices.forEach((item,i)=>{const label=document.createElement('span');label.className='wheel-label';label.textContent=item.label;label.title=item.label;const degrees=(i+.5)*slice;label.style.transform='translate(-50%,-50%) rotate('+degrees+'deg) translateY(-105px) rotate('+(-degrees)+'deg)';wheel.appendChild(label)});
 wheel.title=choices.map((item,i)=>(i+1)+'. '+item.label).join('\\n');
}
function refreshWheel(){if($('spin').dataset.spinning==='1')return;selected=null;selectedLabel='';angle=0;$('wheel').style.transition='none';$('wheel').style.transform='rotate(0deg)';void $('wheel').offsetWidth;$('wheel').style.transition='';$('topic').textContent='Bir konu seçmek için çarkı çevir.';$('question').textContent='';$('task').textContent='Çarkı çevirerek bir alıştırma seç.';$('answer').value='';$('explanation').value='';$('feedback').textContent='';paintWheel(pool())}
['subtopic','level'].forEach(id=>$(id).addEventListener('change',refreshWheel));
function spin(){
 const choices=pool();if(!choices.length)return;
 const unseen=choices.filter(x=>!records.some(r=>r.question===x.label));
 const candidates=unseen.length?unseen:choices;
 const picked=candidates[Math.floor(Math.random()*candidates.length)];
 const index=choices.indexOf(picked),slice=360/choices.length;
 const target=(360-((index+.5)*slice)%360)%360;
 const current=((angle%360)+360)%360;
 angle+=1440+((target-current+360)%360);
 selected=null;
 $('spin').dataset.spinning='1';$('spin').disabled=true;
 ['category','subtopic','level'].forEach(id=>$(id).disabled=true);
 $('wheel').style.transform='rotate('+angle+'deg)';
 setTimeout(()=>{
  selected=picked.base;selectedLabel=picked.label;
  $('topic').textContent=selected[0]+' · '+picked.label+' · '+selected[1];
  $('question').textContent=picked.detail?'Konu: '+picked.label+' — Bu kavramı araştırıp kendi cümlelerinle açıkla.':selected[2];$('task').textContent=picked.detail?'“'+picked.label+'” konusuyla ilgili küçük bir kod örneği yaz veya nasıl çalıştığını açıkla.':selected[3];
  $('answer').value='';$('explanation').value='';$('feedback').textContent='';
  $('spin').dataset.spinning='0';$('spin').disabled=false;
  ['category','subtopic','level'].forEach(id=>$(id).disabled=false);
 },3000);
}
refreshWheel();$('spin').onclick=spin;function fmt(n){return `${String(Math.floor(n/60)).padStart(2,'0')}:${String(n%60).padStart(2,'0')}`}function updateClock(){if(timerId)$(timerId).textContent=fmt(seconds)}function stopTimer(){clearInterval(timer);timer=null}document.querySelectorAll('[data-timer]').forEach(b=>b.onclick=()=>{let id=b.dataset.timer;if(timer&&timerId=== (id==='researchTime'?'researchClock':'speechClock')){stopTimer();return}stopTimer();timerId=id==='researchTime'?'researchClock':'speechClock';seconds=Number($(id).value);updateClock();timer=setInterval(()=>{seconds--;updateClock();if(seconds<=0){stopTimer();alert('Süre doldu!')}},1000)});['researchTime','speechTime'].forEach(id=>$(id).onchange=()=>{if(!timer){$(id==='researchTime'?'researchClock':'speechClock').textContent=fmt(Number($(id).value))}});$('hint').onclick=()=>{$('feedback').textContent=selected?'İpucu: '+selected[4]:'Önce çarkı çevir.'};$('check').onclick=()=>{if(!selected)return;$('feedback').textContent='Örnek çözüm: '+selected[5]+' — Kendi çözümünle karşılaştır. Bu sürüm kodu çalıştırmaz veya otomatik doğrulamaz.'};function render(){let count=records.length;$('stats').textContent=`Toplam ${count} çalışma · ${records.filter(r=>r.status==='Öğrendim').length} öğrenildi · ${records.filter(r=>r.status==='Tekrar etmeliyim').length} tekrar bekliyor`;$('history').innerHTML=records.slice(-15).reverse().map(r=>`<div><strong>${r.category}</strong> — ${r.question} · ${r.status} <small>(${r.date})</small></div>`).join('')||'Henüz çalışma kaydı yok.'}document.querySelectorAll('.status').forEach(b=>b.onclick=()=>{if(!selected){alert('Önce bir konu seç.');return}records.push({category:selected[0],question:selectedLabel||selected[2],status:b.dataset.status,date:new Date().toLocaleDateString('tr-TR'),explanation:$('explanation').value,answer:$('answer').value});localStorage.setItem('cw-records',JSON.stringify(records));render();$('feedback').textContent='Çalışman kaydedildi.'});$('clear').onclick=()=>{if(confirm('Tüm çalışma geçmişi silinsin mi?')){records=[];localStorage.removeItem('cw-records');render()}};let recognition=null;const Speech=window.SpeechRecognition||window.webkitSpeechRecognition;if(Speech){recognition=new Speech();recognition.lang='tr-TR';recognition.continuous=true;recognition.interimResults=false;recognition.onresult=e=>{for(let i=e.resultIndex;i<e.results.length;i++)if(e.results[i].isFinal)$('explanation').value+=e.results[i][0].transcript+' '};recognition.onerror=e=>{$('mic').textContent='🎙️ Sesle yazmayı başlat';alert('Mikrofon kullanılamadı: '+e.error)};recognition.onend=()=>{$('mic').textContent='🎙️ Sesle yazmayı başlat'};let listening=false;$('mic').onclick=()=>{try{if(listening){recognition.stop();listening=false}else{recognition.start();listening=true;$('mic').textContent='⏹️ Kaydı durdur'}}catch(e){alert(e.message)}};recognition.onend=()=>{listening=false;$('mic').textContent='🎙️ Sesle yazmayı başlat'}}else{$('mic').disabled=true;$('mic').textContent='Ses tanıma bu tarayıcıda desteklenmiyor'}render();