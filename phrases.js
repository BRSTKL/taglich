// =============================================
// Täglich — Almanca Kalıp Cümle Veritabanı
// 50 gün × 5 kalıp = 250 cümle
// Kategoriler: Günlük, İş, Seyahat, Resmi, Sosyal
// =============================================

const PHRASES_DB = [
    // === GÜN 1: Selamlaşma & Tanışma ===
    {
        id: 1, day: 1,
        german: "Freut mich, Sie kennenzulernen.",
        pronunciation: "froyt mih, zi kenen-tsu-lernen",
        turkish: "Tanıştığımıza memnun oldum.",
        example: "Hallo, ich bin Anna. Freut mich, Sie kennenzulernen.",
        exampleTr: "Merhaba, ben Anna. Tanıştığımıza memnun oldum.",
        category: "günlük"
    },
    {
        id: 2, day: 1,
        german: "Wie geht es Ihnen?",
        pronunciation: "vi geyt es inen",
        turkish: "Nasılsınız? (resmi)",
        example: "Guten Morgen, Herr Müller. Wie geht es Ihnen?",
        exampleTr: "Günaydın Bay Müller. Nasılsınız?",
        category: "günlük"
    },
    {
        id: 3, day: 1,
        german: "Ich komme aus der Türkei.",
        pronunciation: "ih kome aus der tür-kay",
        turkish: "Türkiye'den geliyorum.",
        example: "Woher kommen Sie? — Ich komme aus der Türkei.",
        exampleTr: "Nereden geliyorsunuz? — Türkiye'den geliyorum.",
        category: "günlük"
    },
    {
        id: 4, day: 1,
        german: "Könnten Sie das bitte wiederholen?",
        pronunciation: "könten zi das bite vider-holen",
        turkish: "Bunu tekrar eder misiniz lütfen?",
        example: "Entschuldigung, könnten Sie das bitte wiederholen?",
        exampleTr: "Affedersiniz, bunu tekrar eder misiniz lütfen?",
        category: "günlük"
    },
    {
        id: 5, day: 1,
        german: "Ich spreche ein bisschen Deutsch.",
        pronunciation: "ih şpreşe ayn bishen doyç",
        turkish: "Biraz Almanca konuşuyorum.",
        example: "Sprechen Sie Deutsch? — Ja, ich spreche ein bisschen Deutsch.",
        exampleTr: "Almanca konuşuyor musunuz? — Evet, biraz Almanca konuşuyorum.",
        category: "günlük"
    },

    // === GÜN 2: Günlük İhtiyaçlar ===
    {
        id: 6, day: 2,
        german: "Wo ist die nächste U-Bahn-Station?",
        pronunciation: "vo ist di neşste u-ban-ştatsyon",
        turkish: "En yakın metro istasyonu nerede?",
        example: "Entschuldigung, wo ist die nächste U-Bahn-Station?",
        exampleTr: "Affedersiniz, en yakın metro istasyonu nerede?",
        category: "seyahat"
    },
    {
        id: 7, day: 2,
        german: "Ich hätte gerne einen Kaffee.",
        pronunciation: "ih hete gerne aynen kafe",
        turkish: "Bir kahve istiyorum lütfen.",
        example: "Ich hätte gerne einen Kaffee mit Milch, bitte.",
        exampleTr: "Sütlü bir kahve istiyorum lütfen.",
        category: "günlük"
    },
    {
        id: 8, day: 2,
        german: "Was kostet das?",
        pronunciation: "vas kostet das",
        turkish: "Bu ne kadar?",
        example: "Entschuldigung, was kostet das T-Shirt?",
        exampleTr: "Affedersiniz, bu tişört ne kadar?",
        category: "günlük"
    },
    {
        id: 9, day: 2,
        german: "Können Sie mir helfen?",
        pronunciation: "könen zi mir helfen",
        turkish: "Bana yardım edebilir misiniz?",
        example: "Entschuldigung, können Sie mir bitte helfen?",
        exampleTr: "Affedersiniz, bana yardım edebilir misiniz lütfen?",
        category: "günlük"
    },
    {
        id: 10, day: 2,
        german: "Ich suche den Ausgang.",
        pronunciation: "ih zuhe den aus-gang",
        turkish: "Çıkışı arıyorum.",
        example: "Entschuldigung, ich suche den Ausgang. Wo ist er?",
        exampleTr: "Affedersiniz, çıkışı arıyorum. Nerede?",
        category: "seyahat"
    },

    // === GÜN 3: Restoran & Yemek ===
    {
        id: 11, day: 3,
        german: "Einen Tisch für zwei Personen, bitte.",
        pronunciation: "aynen tiş für tsvay per-zonen bite",
        turkish: "İki kişilik bir masa lütfen.",
        example: "Guten Abend. Einen Tisch für zwei Personen, bitte.",
        exampleTr: "İyi akşamlar. İki kişilik bir masa lütfen.",
        category: "günlük"
    },
    {
        id: 12, day: 3,
        german: "Die Rechnung, bitte.",
        pronunciation: "di reşnung bite",
        turkish: "Hesap lütfen.",
        example: "Wir sind fertig. Die Rechnung, bitte.",
        exampleTr: "Biz bittik. Hesap lütfen.",
        category: "günlük"
    },
    {
        id: 13, day: 3,
        german: "Ich bin allergisch gegen Nüsse.",
        pronunciation: "ih bin alergiş gegen nüse",
        turkish: "Fındık/ceviz alerjim var.",
        example: "Vorsicht, ich bin allergisch gegen Nüsse.",
        exampleTr: "Dikkat, fındık/ceviz alerjim var.",
        category: "günlük"
    },
    {
        id: 14, day: 3,
        german: "Was empfehlen Sie?",
        pronunciation: "vas empfelen zi",
        turkish: "Ne önerirsiniz?",
        example: "Das Menü sieht toll aus. Was empfehlen Sie?",
        exampleTr: "Menü harika görünüyor. Ne önerirsiniz?",
        category: "günlük"
    },
    {
        id: 15, day: 3,
        german: "Das Essen war ausgezeichnet.",
        pronunciation: "das esen var aus-ge-tsayşnet",
        turkish: "Yemek mükemmeldi.",
        example: "Vielen Dank, das Essen war ausgezeichnet!",
        exampleTr: "Çok teşekkürler, yemek mükemmeldi!",
        category: "günlük"
    },

    // === GÜN 4: Yön Tarifi ===
    {
        id: 16, day: 4,
        german: "Gehen Sie geradeaus und dann links.",
        pronunciation: "geyen zi gerade-aus unt dan links",
        turkish: "Düz gidin sonra sola dönün.",
        example: "Gehen Sie geradeaus und dann links. Das Gebäude ist rechts.",
        exampleTr: "Düz gidin sonra sola dönün. Bina sağda.",
        category: "seyahat"
    },
    {
        id: 17, day: 4,
        german: "Wie weit ist es von hier?",
        pronunciation: "vi vayt ist es fon hir",
        turkish: "Buradan ne kadar uzak?",
        example: "Wie weit ist es von hier zum Bahnhof?",
        exampleTr: "Buradan tren istasyonuna ne kadar uzak?",
        category: "seyahat"
    },
    {
        id: 18, day: 4,
        german: "Es ist ungefähr zehn Minuten zu Fuß.",
        pronunciation: "es ist ungefeer tseyn minuten tsu fus",
        turkish: "Yürüyerek yaklaşık on dakika.",
        example: "Keine Sorge, es ist ungefähr zehn Minuten zu Fuß.",
        exampleTr: "Merak etmeyin, yürüyerek yaklaşık on dakika.",
        category: "seyahat"
    },
    {
        id: 19, day: 4,
        german: "Ich habe mich verlaufen.",
        pronunciation: "ih habe mih fer-laufen",
        turkish: "Kayboldum.",
        example: "Entschuldigung, ich habe mich verlaufen. Wo bin ich?",
        exampleTr: "Affedersiniz, kayboldum. Neredeyim?",
        category: "seyahat"
    },
    {
        id: 20, day: 4,
        german: "Können Sie mir den Weg zeigen?",
        pronunciation: "könen zi mir den veg tsaygen",
        turkish: "Bana yolu gösterebilir misiniz?",
        example: "Können Sie mir bitte den Weg zum Museum zeigen?",
        exampleTr: "Bana müzeye giden yolu gösterebilir misiniz?",
        category: "seyahat"
    },

    // === GÜN 5: Alışveriş ===
    {
        id: 21, day: 5,
        german: "Kann ich das anprobieren?",
        pronunciation: "kan ih das an-probiren",
        turkish: "Bunu deneyebilir miyim?",
        example: "Das Kleid gefällt mir. Kann ich das anprobieren?",
        exampleTr: "Bu elbiseyi beğendim. Deneyebilir miyim?",
        category: "günlük"
    },
    {
        id: 22, day: 5,
        german: "Haben Sie das in einer anderen Größe?",
        pronunciation: "haben zi das in ayner anderen grö-se",
        turkish: "Bunun başka bir bedeni var mı?",
        example: "Das ist zu klein. Haben Sie das in einer anderen Größe?",
        exampleTr: "Bu çok küçük. Bunun başka bir bedeni var mı?",
        category: "günlük"
    },
    {
        id: 23, day: 5,
        german: "Ich schaue mich nur um.",
        pronunciation: "ih şaue mih nur um",
        turkish: "Sadece bakıyorum.",
        example: "Kann ich Ihnen helfen? — Danke, ich schaue mich nur um.",
        exampleTr: "Size yardımcı olabilir miyim? — Teşekkürler, sadece bakıyorum.",
        category: "günlük"
    },
    {
        id: 24, day: 5,
        german: "Kann ich mit Karte bezahlen?",
        pronunciation: "kan ih mit karte be-tsalen",
        turkish: "Kartla ödeyebilir miyim?",
        example: "Kann ich mit Karte bezahlen oder nur bar?",
        exampleTr: "Kartla mı ödeyebilirim yoksa sadece nakit mi?",
        category: "günlük"
    },
    {
        id: 25, day: 5,
        german: "Gibt es einen Rabatt?",
        pronunciation: "gipt es aynen rabat",
        turkish: "İndirim var mı?",
        example: "Das ist teuer. Gibt es einen Rabatt?",
        exampleTr: "Bu pahalı. İndirim var mı?",
        category: "günlük"
    },

    // === GÜN 6: İş & Ofis ===
    {
        id: 26, day: 6,
        german: "Ich habe einen Termin um zehn Uhr.",
        pronunciation: "ih habe aynen termin um tseyn ur",
        turkish: "Saat onda randevum var.",
        example: "Guten Morgen, ich habe einen Termin um zehn Uhr mit Frau Schmidt.",
        exampleTr: "Günaydın, saat onda Bayan Schmidt ile randevum var.",
        category: "iş"
    },
    {
        id: 27, day: 6,
        german: "Könnten wir einen Termin vereinbaren?",
        pronunciation: "könten vir aynen termin fer-ayn-baren",
        turkish: "Bir randevu ayarlayabilir miyiz?",
        example: "Könnten wir nächste Woche einen Termin vereinbaren?",
        exampleTr: "Gelecek hafta bir randevu ayarlayabilir miyiz?",
        category: "iş"
    },
    {
        id: 28, day: 6,
        german: "Ich schicke Ihnen die Unterlagen per E-Mail.",
        pronunciation: "ih şike inen di unter-lagen per i-meyl",
        turkish: "Size belgeleri e-posta ile göndereceğim.",
        example: "Kein Problem, ich schicke Ihnen die Unterlagen per E-Mail.",
        exampleTr: "Sorun değil, size belgeleri e-posta ile göndereceğim.",
        category: "iş"
    },
    {
        id: 29, day: 6,
        german: "Wann ist die Deadline?",
        pronunciation: "van ist di dedlayn",
        turkish: "Son teslim tarihi ne zaman?",
        example: "Das Projekt ist wichtig. Wann ist die Deadline?",
        exampleTr: "Proje önemli. Son teslim tarihi ne zaman?",
        category: "iş"
    },
    {
        id: 30, day: 6,
        german: "Ich bin für das Projekt verantwortlich.",
        pronunciation: "ih bin für das proyekt fer-ant-vortlih",
        turkish: "Bu projeden ben sorumluyum.",
        example: "Wer leitet das? — Ich bin für das Projekt verantwortlich.",
        exampleTr: "Bunu kim yönetiyor? — Bu projeden ben sorumluyum.",
        category: "iş"
    },

    // === GÜN 7: Duygular & Fikirler ===
    {
        id: 31, day: 7,
        german: "Das finde ich sehr interessant.",
        pronunciation: "das finde ih zeyr intere-sant",
        turkish: "Bunu çok ilginç buluyorum.",
        example: "Ihr Vorschlag — das finde ich sehr interessant.",
        exampleTr: "Öneriniz — bunu çok ilginç buluyorum.",
        category: "sosyal"
    },
    {
        id: 32, day: 7,
        german: "Ich bin total begeistert!",
        pronunciation: "ih bin total be-gaystert",
        turkish: "Çok heyecanlıyım!",
        example: "Die Nachricht ist toll, ich bin total begeistert!",
        exampleTr: "Haber harika, çok heyecanlıyım!",
        category: "sosyal"
    },
    {
        id: 33, day: 7,
        german: "Das macht mir Sorgen.",
        pronunciation: "das maht mir zorgen",
        turkish: "Bu beni endişelendiriyor.",
        example: "Die Situation — das macht mir Sorgen.",
        exampleTr: "Bu durum — beni endişelendiriyor.",
        category: "sosyal"
    },
    {
        id: 34, day: 7,
        german: "Ich bin damit einverstanden.",
        pronunciation: "ih bin damit ayn-fer-ştanden",
        turkish: "Buna katılıyorum / Onaylıyorum.",
        example: "Ihr Plan klingt gut. Ich bin damit einverstanden.",
        exampleTr: "Planınız iyi görünüyor. Buna katılıyorum.",
        category: "sosyal"
    },
    {
        id: 35, day: 7,
        german: "Ich habe eine andere Meinung.",
        pronunciation: "ih habe ayne andere maynung",
        turkish: "Farklı bir görüşüm var.",
        example: "Respektvoll gesagt, ich habe eine andere Meinung dazu.",
        exampleTr: "Saygıyla söylemek gerekirse, bu konuda farklı bir görüşüm var.",
        category: "sosyal"
    },

    // === GÜN 8: Sağlık & Acil Durumlar ===
    {
        id: 36, day: 8,
        german: "Ich brauche einen Arzt.",
        pronunciation: "ih brauhe aynen artst",
        turkish: "Bir doktora ihtiyacım var.",
        example: "Es ist dringend. Ich brauche einen Arzt.",
        exampleTr: "Acil. Bir doktora ihtiyacım var.",
        category: "günlük"
    },
    {
        id: 37, day: 8,
        german: "Mir ist schlecht.",
        pronunciation: "mir ist şleşt",
        turkish: "Midem bulanıyor / Kötü hissediyorum.",
        example: "Ich kann nicht essen. Mir ist schlecht.",
        exampleTr: "Yiyemiyorum. Midem bulanıyor.",
        category: "günlük"
    },
    {
        id: 38, day: 8,
        german: "Ich habe Kopfschmerzen.",
        pronunciation: "ih habe kopf-şmertsen",
        turkish: "Başım ağrıyor.",
        example: "Ich nehme eine Tablette. Ich habe Kopfschmerzen.",
        exampleTr: "Bir hap alacağım. Başım ağrıyor.",
        category: "günlük"
    },
    {
        id: 39, day: 8,
        german: "Rufen Sie bitte einen Krankenwagen!",
        pronunciation: "rufen zi bite aynen kranken-vagen",
        turkish: "Lütfen bir ambulans çağırın!",
        example: "Es ist ein Notfall! Rufen Sie bitte einen Krankenwagen!",
        exampleTr: "Bu bir acil durum! Lütfen bir ambulans çağırın!",
        category: "günlük"
    },
    {
        id: 40, day: 8,
        german: "Wo ist die nächste Apotheke?",
        pronunciation: "vo ist di neşste apo-teke",
        turkish: "En yakın eczane nerede?",
        example: "Ich brauche Medikamente. Wo ist die nächste Apotheke?",
        exampleTr: "İlaca ihtiyacım var. En yakın eczane nerede?",
        category: "günlük"
    },

    // === GÜN 9: Telefon & İletişim ===
    {
        id: 41, day: 9,
        german: "Kann ich Ihre Telefonnummer haben?",
        pronunciation: "kan ih ire telefon-numer haben",
        turkish: "Telefon numaranızı alabilir miyim?",
        example: "Für Rückfragen — kann ich Ihre Telefonnummer haben?",
        exampleTr: "Geri dönüş için — telefon numaranızı alabilir miyim?",
        category: "iş"
    },
    {
        id: 42, day: 9,
        german: "Ich rufe Sie morgen zurück.",
        pronunciation: "ih rufe zi morgen tsurük",
        turkish: "Sizi yarın geri ararım.",
        example: "Ich bin gerade beschäftigt. Ich rufe Sie morgen zurück.",
        exampleTr: "Şu an meşgulüm. Sizi yarın geri ararım.",
        category: "iş"
    },
    {
        id: 43, day: 9,
        german: "Haben Sie meine Nachricht bekommen?",
        pronunciation: "haben zi mayne nahrişt bekomen",
        turkish: "Mesajımı aldınız mı?",
        example: "Ich habe Ihnen gestern geschrieben. Haben Sie meine Nachricht bekommen?",
        exampleTr: "Size dün yazdım. Mesajımı aldınız mı?",
        category: "iş"
    },
    {
        id: 44, day: 9,
        german: "Wie lautet Ihre E-Mail-Adresse?",
        pronunciation: "vi lautet ire i-meyl adrese",
        turkish: "E-posta adresiniz nedir?",
        example: "Ich möchte Ihnen die Datei schicken. Wie lautet Ihre E-Mail-Adresse?",
        exampleTr: "Size dosyayı göndermek istiyorum. E-posta adresiniz nedir?",
        category: "iş"
    },
    {
        id: 45, day: 9,
        german: "Es tut mir leid, ich habe Sie nicht verstanden.",
        pronunciation: "es tut mir layt, ih habe zi niht fer-ştanden",
        turkish: "Üzgünüm, sizi anlamadım.",
        example: "Es tut mir leid, ich habe Sie nicht verstanden. Können Sie langsamer sprechen?",
        exampleTr: "Üzgünüm, sizi anlamadım. Daha yavaş konuşabilir misiniz?",
        category: "günlük"
    },

    // === GÜN 10: Konaklama ===
    {
        id: 46, day: 10,
        german: "Ich möchte ein Zimmer reservieren.",
        pronunciation: "ih möşte ayn tsimer rezer-viren",
        turkish: "Bir oda rezerve etmek istiyorum.",
        example: "Guten Tag, ich möchte ein Doppelzimmer reservieren.",
        exampleTr: "İyi günler, bir çift kişilik oda rezerve etmek istiyorum.",
        category: "seyahat"
    },
    {
        id: 47, day: 10,
        german: "Wann ist der Check-in?",
        pronunciation: "van ist der çek-in",
        turkish: "Giriş saati ne zaman?",
        example: "Wir kommen morgen an. Wann ist der Check-in?",
        exampleTr: "Yarın varıyoruz. Giriş saati ne zaman?",
        category: "seyahat"
    },
    {
        id: 48, day: 10,
        german: "Ist das Frühstück inbegriffen?",
        pronunciation: "ist das frü-ştük in-begrifen",
        turkish: "Kahvaltı dahil mi?",
        example: "Was kostet das Zimmer? Ist das Frühstück inbegriffen?",
        exampleTr: "Oda ne kadar? Kahvaltı dahil mi?",
        category: "seyahat"
    },
    {
        id: 49, day: 10,
        german: "Gibt es WLAN im Zimmer?",
        pronunciation: "gipt es ve-lan im tsimer",
        turkish: "Odada Wi-Fi var mı?",
        example: "Eine Frage noch — gibt es WLAN im Zimmer?",
        exampleTr: "Bir sorum daha var — odada Wi-Fi var mı?",
        category: "seyahat"
    },
    {
        id: 50, day: 10,
        german: "Kann ich den Aufenthalt verlängern?",
        pronunciation: "kan ih den auf-ent-halt fer-lengern",
        turkish: "Kalışımı uzatabilir miyim?",
        example: "Es gefällt mir hier. Kann ich den Aufenthalt um zwei Nächte verlängern?",
        exampleTr: "Burayı sevdim. Kalışımı iki gece uzatabilir miyim?",
        category: "seyahat"
    },

    // === GÜN 11: Ulaşım ===
    {
        id: 51, day: 11,
        german: "Wann fährt der nächste Zug nach Berlin?",
        pronunciation: "van fert der neşste tsug nah berlin",
        turkish: "Berlin'e bir sonraki tren ne zaman?",
        example: "Wann fährt der nächste Zug nach Berlin ab?",
        exampleTr: "Berlin'e bir sonraki tren ne zaman kalkıyor?",
        category: "seyahat"
    },
    {
        id: 52, day: 11,
        german: "Muss ich umsteigen?",
        pronunciation: "mus ih um-ştaygen",
        turkish: "Aktarma yapmam gerekiyor mu?",
        example: "Fährt der Zug direkt oder muss ich umsteigen?",
        exampleTr: "Tren direkt mi gidiyor yoksa aktarma yapmam gerekiyor mu?",
        category: "seyahat"
    },
    {
        id: 53, day: 11,
        german: "Eine Fahrkarte nach München, bitte.",
        pronunciation: "ayne far-karte nah münhen bite",
        turkish: "Münih'e bir bilet lütfen.",
        example: "Eine einfache Fahrkarte nach München, bitte.",
        exampleTr: "Münih'e tek yön bilet lütfen.",
        category: "seyahat"
    },
    {
        id: 54, day: 11,
        german: "Welches Gleis fährt der Zug ab?",
        pronunciation: "velşes glays fert der tsug ap",
        turkish: "Tren hangi perondan kalkıyor?",
        example: "Welches Gleis fährt der ICE nach Hamburg ab?",
        exampleTr: "Hamburg ICE'si hangi perondan kalkıyor?",
        category: "seyahat"
    },
    {
        id: 55, day: 11,
        german: "Ist dieser Platz noch frei?",
        pronunciation: "ist dizer plats noh fray",
        turkish: "Bu yer boş mu?",
        example: "Entschuldigung, ist dieser Platz noch frei?",
        exampleTr: "Affedersiniz, bu yer boş mu?",
        category: "günlük"
    },

    // === GÜN 12: Sosyal Hayat ===
    {
        id: 56, day: 12,
        german: "Hast du Lust, heute Abend auszugehen?",
        pronunciation: "hast du lust, hoyte abent aus-tsu-geyen",
        turkish: "Bu akşam dışarı çıkmak ister misin?",
        example: "Hast du Lust, heute Abend ins Kino auszugehen?",
        exampleTr: "Bu akşam sinemaya çıkmak ister misin?",
        category: "sosyal"
    },
    {
        id: 57, day: 12,
        german: "Wollen wir zusammen etwas essen?",
        pronunciation: "volen vir tsu-zamen etvas esen",
        turkish: "Birlikte bir şeyler yiyelim mi?",
        example: "Ich habe Hunger. Wollen wir zusammen etwas essen?",
        exampleTr: "Acıktım. Birlikte bir şeyler yiyelim mi?",
        category: "sosyal"
    },
    {
        id: 58, day: 12,
        german: "Es war ein schöner Abend.",
        pronunciation: "es var ayn şöner abent",
        turkish: "Güzel bir akşamdı.",
        example: "Vielen Dank für die Einladung. Es war ein schöner Abend.",
        exampleTr: "Davet için çok teşekkürler. Güzel bir akşamdı.",
        category: "sosyal"
    },
    {
        id: 59, day: 12,
        german: "Wir sollten das öfter machen!",
        pronunciation: "vir zolten das öfter mahen",
        turkish: "Bunu daha sık yapmalıyız!",
        example: "Das hat Spaß gemacht! Wir sollten das öfter machen!",
        exampleTr: "Çok eğlenceliydi! Bunu daha sık yapmalıyız!",
        category: "sosyal"
    },
    {
        id: 60, day: 12,
        german: "Ich lade dich ein, das geht auf mich.",
        pronunciation: "ih lade dih ayn, das geyt auf mih",
        turkish: "Seni davet ediyorum, benden.",
        example: "Nein nein, ich lade dich ein, das geht auf mich.",
        exampleTr: "Yok yok, seni davet ediyorum, benden.",
        category: "sosyal"
    },

    // === GÜN 13: Üniversite & Eğitim ===
    {
        id: 61, day: 13,
        german: "Ich studiere Chemieingenieurwesen.",
        pronunciation: "ih ştudire şemi-injenyör-vezen",
        turkish: "Kimya mühendisliği okuyorum.",
        example: "Was studierst du? — Ich studiere Chemieingenieurwesen an der METU.",
        exampleTr: "Ne okuyorsun? — ODTÜ'de kimya mühendisliği okuyorum.",
        category: "iş"
    },
    {
        id: 62, day: 13,
        german: "Wann beginnt die Vorlesung?",
        pronunciation: "van beginnt di for-lezung",
        turkish: "Ders ne zaman başlıyor?",
        example: "Wann beginnt die Vorlesung für Organische Chemie?",
        exampleTr: "Organik Kimya dersi ne zaman başlıyor?",
        category: "iş"
    },
    {
        id: 63, day: 13,
        german: "Ich muss noch für die Prüfung lernen.",
        pronunciation: "ih mus noh für di prüfung lernen",
        turkish: "Sınava hâlâ çalışmam lazım.",
        example: "Ich kann heute nicht kommen. Ich muss noch für die Prüfung lernen.",
        exampleTr: "Bugün gelemem. Sınava hâlâ çalışmam lazım.",
        category: "iş"
    },
    {
        id: 64, day: 13,
        german: "Können wir eine Lerngruppe bilden?",
        pronunciation: "könen vir ayne lern-grupe bilden",
        turkish: "Çalışma grubu oluşturabilir miyiz?",
        example: "Die Prüfung ist schwer. Können wir eine Lerngruppe bilden?",
        exampleTr: "Sınav zor. Çalışma grubu oluşturabilir miyiz?",
        category: "iş"
    },
    {
        id: 65, day: 13,
        german: "Ich schreibe gerade meine Abschlussarbeit.",
        pronunciation: "ih şraybe gerade mayne ap-şlus-arbayt",
        turkish: "Şu an bitirme tezimi yazıyorum.",
        example: "Ich bin sehr beschäftigt. Ich schreibe gerade meine Abschlussarbeit.",
        exampleTr: "Çok meşgulüm. Şu an bitirme tezimi yazıyorum.",
        category: "iş"
    },

    // === GÜN 14: Hava Durumu & Doğa ===
    {
        id: 66, day: 14,
        german: "Wie wird das Wetter morgen?",
        pronunciation: "vi virt das veter morgen",
        turkish: "Yarın hava nasıl olacak?",
        example: "Wir wollen wandern. Wie wird das Wetter morgen?",
        exampleTr: "Yürüyüşe çıkacağız. Yarın hava nasıl olacak?",
        category: "günlük"
    },
    {
        id: 67, day: 14,
        german: "Es regnet den ganzen Tag.",
        pronunciation: "es regnet den gantsen tag",
        turkish: "Bütün gün yağmur yağıyor.",
        example: "Bleib lieber drinnen. Es regnet den ganzen Tag.",
        exampleTr: "İçeride kal bence. Bütün gün yağmur yağıyor.",
        category: "günlük"
    },
    {
        id: 68, day: 14,
        german: "Heute ist es besonders kalt.",
        pronunciation: "hoyte ist es bezonders kalt",
        turkish: "Bugün hava özellikle soğuk.",
        example: "Zieh dich warm an. Heute ist es besonders kalt.",
        exampleTr: "Kalın giyin. Bugün hava özellikle soğuk.",
        category: "günlük"
    },
    {
        id: 69, day: 14,
        german: "Die Sonne scheint endlich wieder!",
        pronunciation: "di zone şaynt entlih vider",
        turkish: "Güneş sonunda tekrar çıktı!",
        example: "Was für ein schöner Tag! Die Sonne scheint endlich wieder!",
        exampleTr: "Ne güzel bir gün! Güneş sonunda tekrar çıktı!",
        category: "günlük"
    },
    {
        id: 70, day: 14,
        german: "Sollen wir im Park spazieren gehen?",
        pronunciation: "zolen vir im park şpatsiren geyen",
        turkish: "Parkta yürüyüşe çıkalım mı?",
        example: "Das Wetter ist toll. Sollen wir im Park spazieren gehen?",
        exampleTr: "Hava harika. Parkta yürüyüşe çıkalım mı?",
        category: "sosyal"
    },

    // === GÜN 15–50: Devamı ===
    // GÜN 15: Ev & Yaşam
    { id: 71, day: 15, german: "Ich suche eine Wohnung zur Miete.", pronunciation: "ih zuhe ayne vonung tsur mite", turkish: "Kiralık bir daire arıyorum.", example: "Ich bin neu in Berlin. Ich suche eine Wohnung zur Miete.", exampleTr: "Berlin'de yeniyim. Kiralık bir daire arıyorum.", category: "günlük" },
    { id: 72, day: 15, german: "Wie hoch ist die Miete?", pronunciation: "vi hoh ist di mite", turkish: "Kira ne kadar?", example: "Die Wohnung gefällt mir. Wie hoch ist die Miete?", exampleTr: "Daireyi beğendim. Kira ne kadar?", category: "günlük" },
    { id: 73, day: 15, german: "Sind die Nebenkosten inbegriffen?", pronunciation: "zint di neben-kosten in-begrifen", turkish: "Yan giderler dahil mi?", example: "Sind die Nebenkosten in der Miete inbegriffen?", exampleTr: "Yan giderler kiraya dahil mi?", category: "günlük" },
    { id: 74, day: 15, german: "Ab wann ist die Wohnung frei?", pronunciation: "ap van ist di vonung fray", turkish: "Daire ne zamandan itibaren müsait?", example: "Ab wann ist die Wohnung frei? Ich möchte sofort einziehen.", exampleTr: "Daire ne zamandan itibaren müsait? Hemen taşınmak istiyorum.", category: "günlük" },
    { id: 75, day: 15, german: "Darf ich die Wohnung besichtigen?", pronunciation: "darf ih di vonung be-zıhtigen", turkish: "Daireyi gezebilir miyim?", example: "Darf ich die Wohnung morgen besichtigen?", exampleTr: "Daireyi yarın gezebilir miyim?", category: "günlük" },

    // GÜN 16: Zaman İfadeleri
    { id: 76, day: 16, german: "Ich bin gleich fertig.", pronunciation: "ih bin glayh fertig", turkish: "Hemen bitiriyorum.", example: "Warte kurz, ich bin gleich fertig.", exampleTr: "Biraz bekle, hemen bitiriyorum.", category: "günlük" },
    { id: 77, day: 16, german: "Wir haben noch genug Zeit.", pronunciation: "vir haben noh genug tsayt", turkish: "Hâlâ yeterli zamanımız var.", example: "Keine Eile, wir haben noch genug Zeit.", exampleTr: "Acele yok, hâlâ yeterli zamanımız var.", category: "günlük" },
    { id: 78, day: 16, german: "Es dauert ungefähr eine Stunde.", pronunciation: "es dauert ungefeer ayne ştunde", turkish: "Yaklaşık bir saat sürer.", example: "Die Fahrt dauert ungefähr eine Stunde.", exampleTr: "Yolculuk yaklaşık bir saat sürer.", category: "günlük" },
    { id: 79, day: 16, german: "Ich komme ein bisschen später.", pronunciation: "ih kome ayn bishen şpeter", turkish: "Biraz geç geleceğim.", example: "Sorry, ich komme heute ein bisschen später.", exampleTr: "Kusura bakma, bugün biraz geç geleceğim.", category: "günlük" },
    { id: 80, day: 16, german: "Seit wann wohnen Sie hier?", pronunciation: "zayt van vonen zi hir", turkish: "Ne zamandan beri burada oturuyorsunuz?", example: "Die Gegend ist schön. Seit wann wohnen Sie hier?", exampleTr: "Bölge güzel. Ne zamandan beri burada oturuyorsunuz?", category: "sosyal" },

    // GÜN 17: Resmi Yazışma
    { id: 81, day: 17, german: "Sehr geehrte Damen und Herren,", pronunciation: "zeyr ge-erte damen unt heren", turkish: "Sayın Bayanlar ve Baylar, (resmi hitap)", example: "Sehr geehrte Damen und Herren, hiermit bewerbe ich mich...", exampleTr: "Sayın Bayanlar ve Baylar, bu yazıyla başvurumu sunuyorum...", category: "resmi" },
    { id: 82, day: 17, german: "Ich beziehe mich auf Ihr Schreiben.", pronunciation: "ih be-tsie mih auf ir şrayben", turkish: "Yazınıza atıfta bulunuyorum.", example: "Ich beziehe mich auf Ihr Schreiben vom 15. März.", exampleTr: "15 Mart tarihli yazınıza atıfta bulunuyorum.", category: "resmi" },
    { id: 83, day: 17, german: "Mit freundlichen Grüßen", pronunciation: "mit froynt-lihen grüsen", turkish: "Saygılarımla (kapanış)", example: "Ich freue mich auf Ihre Antwort. Mit freundlichen Grüßen, Özgül", exampleTr: "Cevabınızı bekliyorum. Saygılarımla, Özgül", category: "resmi" },
    { id: 84, day: 17, german: "Anbei finden Sie meinen Lebenslauf.", pronunciation: "an-bay finden zi maynen lebens-lauf", turkish: "Ekte özgeçmişimi bulabilirsiniz.", example: "Anbei finden Sie meinen Lebenslauf und mein Anschreiben.", exampleTr: "Ekte özgeçmişimi ve ön yazımı bulabilirsiniz.", category: "resmi" },
    { id: 85, day: 17, german: "Ich würde mich über eine Rückmeldung freuen.", pronunciation: "ih vürde mih über ayne rük-meldung froyen", turkish: "Geri dönüş yapılırsa sevinirim.", example: "Ich würde mich über eine baldige Rückmeldung freuen.", exampleTr: "Yakın zamanda geri dönüş yapılırsa sevinirim.", category: "resmi" },

    // GÜN 18: Staj & Kariyer
    { id: 86, day: 18, german: "Ich suche ein Praktikum im Bereich Chemie.", pronunciation: "ih zuhe ayn praktikum im berayh şemi", turkish: "Kimya alanında staj arıyorum.", example: "Ich suche ein Praktikum im Bereich Chemie für den Sommer.", exampleTr: "Yaz dönemi için kimya alanında staj arıyorum.", category: "iş" },
    { id: 87, day: 18, german: "Welche Erfahrungen bringen Sie mit?", pronunciation: "velşe er-farungen bringen zi mit", turkish: "Hangi deneyimlere sahipsiniz?", example: "Welche Erfahrungen bringen Sie für diese Stelle mit?", exampleTr: "Bu pozisyon için hangi deneyimlere sahipsiniz?", category: "iş" },
    { id: 88, day: 18, german: "Ich habe Erfahrung im Labor.", pronunciation: "ih habe er-farung im labor", turkish: "Laboratuvar deneyimim var.", example: "Ich habe Erfahrung im Labor, besonders in der Analytik.", exampleTr: "Laboratuvar deneyimim var, özellikle analitik alanında.", category: "iş" },
    { id: 89, day: 18, german: "Was sind Ihre Stärken?", pronunciation: "vas zint ire ştärken", turkish: "Güçlü yönleriniz neler?", example: "Was sind Ihre Stärken und Schwächen?", exampleTr: "Güçlü ve zayıf yönleriniz neler?", category: "iş" },
    { id: 90, day: 18, german: "Ich bin teamfähig und belastbar.", pronunciation: "ih bin tim-feyig unt be-last-bar", turkish: "Takım çalışmasına uygunum ve strese dayanıklıyım.", example: "Ich bin teamfähig, belastbar und lerne schnell.", exampleTr: "Takım çalışmasına uygunum, strese dayanıklıyım ve çabuk öğreniyorum.", category: "iş" },

    // GÜN 19: Boş Zaman
    { id: 91, day: 19, german: "In meiner Freizeit lese ich gerne.", pronunciation: "in mayner fray-tsayt leze ih gerne", turkish: "Boş zamanımda okumayı seviyorum.", example: "In meiner Freizeit lese ich gerne Romane.", exampleTr: "Boş zamanımda roman okumayı seviyorum.", category: "sosyal" },
    { id: 92, day: 19, german: "Ich interessiere mich für Wissenschaft.", pronunciation: "ih intere-sire mih für visen-şaft", turkish: "Bilimle ilgileniyorum.", example: "Ich interessiere mich besonders für Biotechnologie.", exampleTr: "Özellikle biyoteknolojiyle ilgileniyorum.", category: "sosyal" },
    { id: 93, day: 19, german: "Hast du ein Hobby?", pronunciation: "hast du ayn hobi", turkish: "Bir hobin var mı?", example: "Was machst du so in deiner Freizeit? Hast du ein Hobby?", exampleTr: "Boş zamanında ne yapıyorsun? Bir hobin var mı?", category: "sosyal" },
    { id: 94, day: 19, german: "Ich gehe gerne ins Museum.", pronunciation: "ih geye gerne ins muzeum", turkish: "Müzeye gitmeyi seviyorum.", example: "Am Wochenende gehe ich gerne ins Museum.", exampleTr: "Hafta sonları müzeye gitmeyi seviyorum.", category: "sosyal" },
    { id: 95, day: 19, german: "Sport hilft mir, mich zu entspannen.", pronunciation: "şport hilft mir, mih tsu ent-şpanen", turkish: "Spor rahatlamama yardımcı oluyor.", example: "Nach der Arbeit — Sport hilft mir, mich zu entspannen.", exampleTr: "İşten sonra — spor rahatlamama yardımcı oluyor.", category: "sosyal" },

    // GÜN 20: Banka & Finans
    { id: 96, day: 20, german: "Ich möchte ein Konto eröffnen.", pronunciation: "ih möşte ayn konto er-öfnen", turkish: "Bir hesap açmak istiyorum.", example: "Ich bin neu hier. Ich möchte ein Girokonto eröffnen.", exampleTr: "Burada yeniyim. Bir vadesiz hesap açmak istiyorum.", category: "günlük" },
    { id: 97, day: 20, german: "Wie hoch sind die Kontoführungsgebühren?", pronunciation: "vi hoh zint di konto-führungs-gebüren", turkish: "Hesap yönetim ücreti ne kadar?", example: "Bevor ich eröffne — wie hoch sind die Kontoführungsgebühren?", exampleTr: "Açmadan önce — hesap yönetim ücreti ne kadar?", category: "günlük" },
    { id: 98, day: 20, german: "Ich möchte Geld überweisen.", pronunciation: "ih möşte gelt über-vayzen", turkish: "Para transfer etmek istiyorum.", example: "Ich möchte 500 Euro auf ein anderes Konto überweisen.", exampleTr: "Başka bir hesaba 500 Euro transfer etmek istiyorum.", category: "günlük" },
    { id: 99, day: 20, german: "Wo ist der nächste Geldautomat?", pronunciation: "vo ist der neşste gelt-automat", turkish: "En yakın ATM nerede?", example: "Ich brauche Bargeld. Wo ist der nächste Geldautomat?", exampleTr: "Nakite ihtiyacım var. En yakın ATM nerede?", category: "günlük" },
    { id: 100, day: 20, german: "Kann ich die Rechnung in Raten zahlen?", pronunciation: "kan ih di reşnung in raten tsalen", turkish: "Hesabı taksitle ödeyebilir miyim?", example: "Das ist viel. Kann ich die Rechnung in Raten zahlen?", exampleTr: "Bu çok fazla. Hesabı taksitle ödeyebilir miyim?", category: "günlük" },

    // GÜN 21–30: İleri seviye kalıplar
    { id: 101, day: 21, german: "Ich bin auf der Suche nach einem Nebenjob.", pronunciation: "ih bin auf der zuhe nah aynem neben-yop", turkish: "Yarı zamanlı iş arıyorum.", example: "Ich bin Student und auf der Suche nach einem Nebenjob.", exampleTr: "Öğrenciyim ve yarı zamanlı iş arıyorum.", category: "iş" },
    { id: 102, day: 21, german: "Wie sind die Arbeitszeiten?", pronunciation: "vi zint di arbayts-tsayten", turkish: "Çalışma saatleri nasıl?", example: "Die Stelle klingt gut. Wie sind die Arbeitszeiten?", exampleTr: "İş ilanı iyi görünüyor. Çalışma saatleri nasıl?", category: "iş" },
    { id: 103, day: 21, german: "Ich habe bereits Berufserfahrung.", pronunciation: "ih habe berayts beruf-er-farung", turkish: "Zaten iş deneyimim var.", example: "Ich habe bereits Berufserfahrung bei Henkel gesammelt.", exampleTr: "Henkel'de iş deneyimi edindim.", category: "iş" },
    { id: 104, day: 21, german: "Gibt es Aufstiegsmöglichkeiten?", pronunciation: "gipt es auf-ştiygs-möglih-kayten", turkish: "Yükselme imkânı var mı?", example: "Gibt es in dieser Firma Aufstiegsmöglichkeiten?", exampleTr: "Bu firmada yükselme imkânı var mı?", category: "iş" },
    { id: 105, day: 21, german: "Ich bin motiviert und engagiert.", pronunciation: "ih bin moti-virt unt anga-jirt", turkish: "Motiveyim ve kendimi işe adıyorum.", example: "Ich bin motiviert, engagiert und bringe viel Energie mit.", exampleTr: "Motiveyim, kendimi işe adıyorum ve çok enerjik biriyim.", category: "iş" },

    { id: 106, day: 22, german: "Entschuldigung, das war ein Missverständnis.", pronunciation: "ent-şuldigung das var ayn mis-fer-ştendnis", turkish: "Özür dilerim, bu bir yanlış anlaşılmaydı.", example: "Entschuldigung, das war ein Missverständnis meinerseits.", exampleTr: "Özür dilerim, bu benim tarafımdan bir yanlış anlaşılmaydı.", category: "sosyal" },
    { id: 107, day: 22, german: "Ich wollte Sie nicht beleidigen.", pronunciation: "ih volte zi niht be-laydi-gen", turkish: "Sizi gücendirmek istemedim.", example: "Es tut mir leid, ich wollte Sie nicht beleidigen.", exampleTr: "Üzgünüm, sizi gücendirmek istemedim.", category: "sosyal" },
    { id: 108, day: 22, german: "Lassen Sie uns einen Kompromiss finden.", pronunciation: "lasen zi uns aynen kompromis finden", turkish: "Bir uzlaşma bulalım.", example: "Lassen Sie uns einen Kompromiss finden, der für alle passt.", exampleTr: "Herkese uyan bir uzlaşma bulalım.", category: "sosyal" },
    { id: 109, day: 22, german: "Ich verstehe Ihren Standpunkt.", pronunciation: "ih fer-şteye iren ştant-punkt", turkish: "Bakış açınızı anlıyorum.", example: "Ich verstehe Ihren Standpunkt, aber ich sehe das anders.", exampleTr: "Bakış açınızı anlıyorum ama ben farklı düşünüyorum.", category: "sosyal" },
    { id: 110, day: 22, german: "Können wir das klären?", pronunciation: "könen vir das kleren", turkish: "Bunu açıklığa kavuşturabilir miyiz?", example: "Es gibt ein Problem. Können wir das bitte klären?", exampleTr: "Bir sorun var. Bunu lütfen açıklığa kavuşturabilir miyiz?", category: "sosyal" },

    { id: 111, day: 23, german: "Darf ich Ihnen eine Frage stellen?", pronunciation: "darf ih inen ayne frage ştelen", turkish: "Size bir soru sorabilir miyim?", example: "Darf ich Ihnen eine persönliche Frage stellen?", exampleTr: "Size kişisel bir soru sorabilir miyim?", category: "günlük" },
    { id: 112, day: 23, german: "Das hängt davon ab.", pronunciation: "das hengt davon ap", turkish: "O duruma bağlı.", example: "Kommst du morgen? — Das hängt davon ab, wie das Wetter wird.", exampleTr: "Yarın gelecek misin? — O hava durumuna bağlı.", category: "günlük" },
    { id: 113, day: 23, german: "Ich habe leider keine Zeit.", pronunciation: "ih habe layder kayne tsayt", turkish: "Maalesef zamanım yok.", example: "Ich würde gerne, aber ich habe leider keine Zeit.", exampleTr: "Çok isterdim ama maalesef zamanım yok.", category: "günlük" },
    { id: 114, day: 23, german: "Kein Problem, das macht nichts.", pronunciation: "kayn problem das maht nihts", turkish: "Sorun yok, önemli değil.", example: "Oh, Entschuldigung! — Kein Problem, das macht nichts.", exampleTr: "Oh, pardon! — Sorun yok, önemli değil.", category: "günlük" },
    { id: 115, day: 23, german: "Ich freue mich darauf!", pronunciation: "ih froye mih darauf", turkish: "Dört gözle bekliyorum!", example: "Das Konzert ist morgen. Ich freue mich darauf!", exampleTr: "Konser yarın. Dört gözle bekliyorum!", category: "sosyal" },

    { id: 116, day: 24, german: "Wie sagt man das auf Deutsch?", pronunciation: "vi zagt man das auf doyç", turkish: "Bunu Almanca nasıl söylenir?", example: "Wie sagt man 'teşekkür ederim' auf Deutsch?", exampleTr: "Almanca 'teşekkür ederim' nasıl söylenir?", category: "günlük" },
    { id: 117, day: 24, german: "Können Sie bitte langsamer sprechen?", pronunciation: "könen zi bite lang-zamer şpreşen", turkish: "Daha yavaş konuşabilir misiniz lütfen?", example: "Können Sie bitte langsamer sprechen? Ich bin Anfänger.", exampleTr: "Daha yavaş konuşabilir misiniz lütfen? Yeni başlıyorum.", category: "günlük" },
    { id: 118, day: 24, german: "Was bedeutet dieses Wort?", pronunciation: "vas be-doytet dizes vort", turkish: "Bu kelime ne anlama geliyor?", example: "Was bedeutet dieses Wort? Ich kenne es nicht.", exampleTr: "Bu kelime ne anlama geliyor? Bilmiyorum.", category: "günlük" },
    { id: 119, day: 24, german: "Ich lerne seit drei Monaten Deutsch.", pronunciation: "ih lerne zayt dray monaten doyç", turkish: "Üç aydır Almanca öğreniyorum.", example: "Mein Deutsch ist nicht perfekt. Ich lerne seit drei Monaten.", exampleTr: "Almancam mükemmel değil. Üç aydır öğreniyorum.", category: "günlük" },
    { id: 120, day: 24, german: "Können Sie das bitte aufschreiben?", pronunciation: "könen zi das bite auf-şrayben", turkish: "Bunu yazabilir misiniz lütfen?", example: "Können Sie die Adresse bitte aufschreiben?", exampleTr: "Adresi yazabilir misiniz lütfen?", category: "günlük" },

    { id: 121, day: 25, german: "Ich bin mit dem Ergebnis zufrieden.", pronunciation: "ih bin mit dem er-gebnis tsu-friden", turkish: "Sonuçtan memnunum.", example: "Die Prüfung lief gut. Ich bin mit dem Ergebnis zufrieden.", exampleTr: "Sınav iyi geçti. Sonuçtan memnunum.", category: "iş" },
    { id: 122, day: 25, german: "Wir müssen die Frist einhalten.", pronunciation: "vir müsen di frist ayn-halten", turkish: "Son tarihe uymamız lazım.", example: "Es ist dringend. Wir müssen die Frist einhalten.", exampleTr: "Acil. Son tarihe uymamız lazım.", category: "iş" },
    { id: 123, day: 25, german: "Ich schlage vor, dass wir...", pronunciation: "ih şlage for das vir", turkish: "Önerim şu ki biz...", example: "Ich schlage vor, dass wir nächste Woche ein Meeting machen.", exampleTr: "Önerim şu ki gelecek hafta bir toplantı yapalım.", category: "iş" },
    { id: 124, day: 25, german: "Könnten Sie mir ein Feedback geben?", pronunciation: "könten zi mir ayn fidbek geben", turkish: "Bana geri bildirim verebilir misiniz?", example: "Ich habe den Bericht fertig. Könnten Sie mir ein Feedback geben?", exampleTr: "Raporu bitirdim. Bana geri bildirim verebilir misiniz?", category: "iş" },
    { id: 125, day: 25, german: "Das Projekt läuft nach Plan.", pronunciation: "das proyekt loyft nah plan", turkish: "Proje plana göre ilerliyor.", example: "Keine Sorge, das Projekt läuft nach Plan.", exampleTr: "Merak etmeyin, proje plana göre ilerliyor.", category: "iş" },

    // GÜN 26–30
    { id: 126, day: 26, german: "Ich fühle mich heute nicht wohl.", pronunciation: "ih füle mih hoyte niht vol", turkish: "Bugün kendimi iyi hissetmiyorum.", example: "Ich kann nicht kommen. Ich fühle mich heute nicht wohl.", exampleTr: "Gelemiyorum. Bugün kendimi iyi hissetmiyorum.", category: "günlük" },
    { id: 127, day: 26, german: "Gute Besserung!", pronunciation: "gute beserung", turkish: "Geçmiş olsun!", example: "Du bist krank? Gute Besserung, ruh dich aus!", exampleTr: "Hasta mısın? Geçmiş olsun, dinlen!", category: "sosyal" },
    { id: 128, day: 26, german: "Ich brauche ein Rezept vom Arzt.", pronunciation: "ih brauhe ayn retsept fom artst", turkish: "Doktordan reçete lazım.", example: "Für dieses Medikament brauche ich ein Rezept vom Arzt.", exampleTr: "Bu ilaç için doktordan reçete lazım.", category: "günlük" },
    { id: 129, day: 26, german: "Haben Sie etwas gegen Erkältung?", pronunciation: "haben zi etvas gegen er-keltung", turkish: "Soğuk algınlığına karşı bir şeyiniz var mı?", example: "Haben Sie etwas gegen Erkältung? Ich habe Husten.", exampleTr: "Soğuk algınlığına karşı bir şeyiniz var mı? Öksürüğüm var.", category: "günlük" },
    { id: 130, day: 26, german: "Ich muss mich ausruhen.", pronunciation: "ih mus mih aus-ruen", turkish: "Dinlenmem lazım.", example: "Ich bin erschöpft. Ich muss mich ausruhen.", exampleTr: "Bitkinim. Dinlenmem lazım.", category: "günlük" },

    { id: 131, day: 27, german: "Herzlichen Glückwunsch!", pronunciation: "hertslihen glük-vunş", turkish: "Tebrikler!", example: "Du hast bestanden? Herzlichen Glückwunsch!", exampleTr: "Geçtin mi? Tebrikler!", category: "sosyal" },
    { id: 132, day: 27, german: "Alles Gute zum Geburtstag!", pronunciation: "ales gute tsum ge-burts-tag", turkish: "Doğum günün kutlu olsun!", example: "Hey! Alles Gute zum Geburtstag! Feierst du?", exampleTr: "Hey! Doğum günün kutlu olsun! Kutlayacak mısın?", category: "sosyal" },
    { id: 133, day: 27, german: "Ich wünsche Ihnen viel Erfolg!", pronunciation: "ih vünşe inen fil er-folk", turkish: "Size başarılar diliyorum!", example: "Für Ihre Prüfung — ich wünsche Ihnen viel Erfolg!", exampleTr: "Sınavınız için — başarılar diliyorum!", category: "sosyal" },
    { id: 134, day: 27, german: "Das hast du toll gemacht!", pronunciation: "das hast du tol ge-maht", turkish: "Harika yapmışsın!", example: "Deine Präsentation — das hast du toll gemacht!", exampleTr: "Sunumun — harika yapmışsın!", category: "sosyal" },
    { id: 135, day: 27, german: "Ich bin stolz auf dich!", pronunciation: "ih bin ştolts auf dih", turkish: "Seninle gurur duyuyorum!", example: "Du hast es geschafft! Ich bin stolz auf dich!", exampleTr: "Başardın! Seninle gurur duyuyorum!", category: "sosyal" },

    { id: 136, day: 28, german: "Können wir das Meeting verschieben?", pronunciation: "könen vir das miting fer-şiben", turkish: "Toplantıyı erteleyebilir miyiz?", example: "Mir ist etwas dazwischengekommen. Können wir das Meeting verschieben?", exampleTr: "Araya bir şey girdi. Toplantıyı erteleyebilir miyiz?", category: "iş" },
    { id: 137, day: 28, german: "Ich arbeite gerade im Homeoffice.", pronunciation: "ih arbayte gerade im hom-ofis", turkish: "Şu an evden çalışıyorum.", example: "Ich bin nicht im Büro. Ich arbeite gerade im Homeoffice.", exampleTr: "Ofiste değilim. Şu an evden çalışıyorum.", category: "iş" },
    { id: 138, day: 28, german: "Die Besprechung beginnt in fünf Minuten.", pronunciation: "di be-şpreşung beginnt in fünf minuten", turkish: "Toplantı beş dakikaya başlıyor.", example: "Beeilt euch! Die Besprechung beginnt in fünf Minuten.", exampleTr: "Acele edin! Toplantı beş dakikaya başlıyor.", category: "iş" },
    { id: 139, day: 28, german: "Ich habe eine Idee für das Projekt.", pronunciation: "ih habe ayne ide für das proyekt", turkish: "Proje için bir fikrim var.", example: "Moment mal — ich habe eine Idee für das Projekt.", exampleTr: "Bir dakika — proje için bir fikrim var.", category: "iş" },
    { id: 140, day: 28, german: "Wer ist für diese Aufgabe zuständig?", pronunciation: "ver ist für dize auf-gabe tsu-ştändig", turkish: "Bu görevden kim sorumlu?", example: "Wer ist für diese Aufgabe zuständig? Ich brauche Infos.", exampleTr: "Bu görevden kim sorumlu? Bilgiye ihtiyacım var.", category: "iş" },

    { id: 141, day: 29, german: "Ich hätte eine Bitte.", pronunciation: "ih hete ayne bite", turkish: "Bir ricam var.", example: "Ich hätte eine Bitte — könnten Sie mir dabei helfen?", exampleTr: "Bir ricam var — bana bununla yardım edebilir misiniz?", category: "günlük" },
    { id: 142, day: 29, german: "Es wäre nett, wenn Sie...", pronunciation: "es vere net ven zi", turkish: "...yaparsanız çok iyi olur.", example: "Es wäre nett, wenn Sie mir Bescheid geben könnten.", exampleTr: "Bana haber verirseniz çok iyi olur.", category: "günlük" },
    { id: 143, day: 29, german: "Dürfte ich Sie kurz stören?", pronunciation: "dürfte ih zi kurts ştören", turkish: "Sizi kısa bir an rahatsız edebilir miyim?", example: "Dürfte ich Sie kurz stören? Ich habe eine Frage.", exampleTr: "Sizi kısa bir an rahatsız edebilir miyim? Bir sorum var.", category: "günlük" },
    { id: 144, day: 29, german: "Vielen Dank für Ihre Hilfe!", pronunciation: "filen dank für ire hilfe", turkish: "Yardımınız için çok teşekkürler!", example: "Vielen Dank für Ihre Hilfe! Das war sehr nett.", exampleTr: "Yardımınız için çok teşekkürler! Çok naziksiniz.", category: "günlük" },
    { id: 145, day: 29, german: "Ich stehe Ihnen jederzeit zur Verfügung.", pronunciation: "ih şteye inen yeder-tsayt tsur fer-fügung", turkish: "Her zaman emrinizdeyim.", example: "Bei Fragen — ich stehe Ihnen jederzeit zur Verfügung.", exampleTr: "Sorularınız için — her zaman emrinizdeyim.", category: "resmi" },

    { id: 146, day: 30, german: "Ich melde mich bei Ihnen.", pronunciation: "ih melde mih bay inen", turkish: "Size dönüş yapacağım.", example: "Ich prüfe das und melde mich bei Ihnen.", exampleTr: "Kontrol edip size dönüş yapacağım.", category: "iş" },
    { id: 147, day: 30, german: "Könnten Sie das noch einmal erklären?", pronunciation: "könten zi das noh ayn-mal er-kleren", turkish: "Bunu bir daha açıklayabilir misiniz?", example: "Das war komplex. Könnten Sie das noch einmal erklären?", exampleTr: "Karmaşıktı. Bunu bir daha açıklayabilir misiniz?", category: "günlük" },
    { id: 148, day: 30, german: "Ich bin ganz Ihrer Meinung.", pronunciation: "ih bin gants irer maynung", turkish: "Tamamen sizin fikrinizde.", example: "Sie haben Recht. Ich bin ganz Ihrer Meinung.", exampleTr: "Haklısınız. Tamamen sizin fikrinizde.", category: "sosyal" },
    { id: 149, day: 30, german: "Das ist mir leider nicht möglich.", pronunciation: "das ist mir layder niht möglih", turkish: "Bu maalesef benim için mümkün değil.", example: "Das ist mir leider nicht möglich, aber ich kann helfen.", exampleTr: "Bu maalesef benim için mümkün değil ama yardımcı olabilirim.", category: "günlük" },
    { id: 150, day: 30, german: "Ich nehme mir das zu Herzen.", pronunciation: "ih neme mir das tsu hertsen", turkish: "Bunu ciddiye alıyorum / Kalbime alıyorum.", example: "Ihr Feedback — ich nehme mir das zu Herzen.", exampleTr: "Geri bildiriminiz — bunu ciddiye alıyorum.", category: "sosyal" },

    // GÜN 31–40
    { id: 151, day: 31, german: "Das klingt nach einem guten Plan.", pronunciation: "das klingt nah aynem guten plan", turkish: "Bu iyi bir plan gibi görünüyor.", example: "Das klingt nach einem guten Plan. Fangen wir an!", exampleTr: "Bu iyi bir plan gibi görünüyor. Başlayalım!", category: "iş" },
    { id: 152, day: 31, german: "Wir sollten das noch mal überdenken.", pronunciation: "vir zolten das noh mal über-denken", turkish: "Bunu bir daha düşünmeliyiz.", example: "Wir sollten das noch mal überdenken, bevor wir entscheiden.", exampleTr: "Karar vermeden önce bunu bir daha düşünmeliyiz.", category: "iş" },
    { id: 153, day: 31, german: "Ich brauche mehr Informationen.", pronunciation: "ih brauhe mer informatsyonen", turkish: "Daha fazla bilgiye ihtiyacım var.", example: "Ich brauche mehr Informationen, bevor ich zusagen kann.", exampleTr: "Kabul etmeden önce daha fazla bilgiye ihtiyacım var.", category: "iş" },
    { id: 154, day: 31, german: "Lassen Sie uns die Vor- und Nachteile abwägen.", pronunciation: "lasen zi uns di for unt nah-tayle ap-vegen", turkish: "Avantaj ve dezavantajları tartışalım.", example: "Lassen Sie uns die Vor- und Nachteile abwägen.", exampleTr: "Avantaj ve dezavantajları tartışalım.", category: "iş" },
    { id: 155, day: 31, german: "Ich bin offen für Vorschläge.", pronunciation: "ih bin ofen für for-şlege", turkish: "Önerilere açığım.", example: "Ich weiß noch nicht genau wie. Ich bin offen für Vorschläge.", exampleTr: "Tam olarak nasıl olacağını bilmiyorum. Önerilere açığım.", category: "iş" },

    { id: 156, day: 32, german: "Das Wochenende war sehr erholsam.", pronunciation: "das vohen-ende var zeyr er-holzam", turkish: "Hafta sonu çok dinlendirici geçti.", example: "Das Wochenende war sehr erholsam. Ich bin ausgeruht.", exampleTr: "Hafta sonu çok dinlendirici geçti. Dinlendim.", category: "sosyal" },
    { id: 157, day: 32, german: "Was hast du am Wochenende gemacht?", pronunciation: "vas hast du am vohen-ende ge-maht", turkish: "Hafta sonu ne yaptın?", example: "Hey! Was hast du am Wochenende gemacht?", exampleTr: "Hey! Hafta sonu ne yaptın?", category: "sosyal" },
    { id: 158, day: 32, german: "Wir haben einen Ausflug gemacht.", pronunciation: "vir haben aynen aus-flug ge-maht", turkish: "Bir gezi yaptık.", example: "Am Samstag haben wir einen Ausflug nach Potsdam gemacht.", exampleTr: "Cumartesi Potsdam'a bir gezi yaptık.", category: "sosyal" },
    { id: 159, day: 32, german: "Es war total langweilig.", pronunciation: "es var total lang-vaylig", turkish: "Çok sıkıcıydı.", example: "Der Film? Es war total langweilig.", exampleTr: "Film mi? Çok sıkıcıydı.", category: "sosyal" },
    { id: 160, day: 32, german: "Ich habe mich köstlich amüsiert.", pronunciation: "ih habe mih köstlih amü-zirt", turkish: "Çok eğlendim.", example: "Die Party war super. Ich habe mich köstlich amüsiert.", exampleTr: "Parti süperdi. Çok eğlendim.", category: "sosyal" },

    { id: 161, day: 33, german: "Ich muss meine Aufenthaltsgenehmigung verlängern.", pronunciation: "ih mus mayne auf-ent-halts-ge-ne-migung fer-lengern", turkish: "Oturma iznimi uzatmam lazım.", example: "Mein Visum läuft ab. Ich muss meine Aufenthaltsgenehmigung verlängern.", exampleTr: "Vizem bitiyor. Oturma iznimi uzatmam lazım.", category: "resmi" },
    { id: 162, day: 33, german: "Wo muss ich mich anmelden?", pronunciation: "vo mus ih mih an-melden", turkish: "Nereye kayıt yaptırmam gerekiyor?", example: "Ich bin neu in der Stadt. Wo muss ich mich anmelden?", exampleTr: "Şehirde yeniyim. Nereye kayıt yaptırmam gerekiyor?", category: "resmi" },
    { id: 163, day: 33, german: "Welche Unterlagen brauche ich?", pronunciation: "velşe unter-lagen brauhe ih", turkish: "Hangi belgelere ihtiyacım var?", example: "Für die Anmeldung — welche Unterlagen brauche ich?", exampleTr: "Kayıt için — hangi belgelere ihtiyacım var?", category: "resmi" },
    { id: 164, day: 33, german: "Ich habe einen Antrag gestellt.", pronunciation: "ih habe aynen an-trag ge-ştelt", turkish: "Başvuru yaptım.", example: "Ich habe letzte Woche einen Antrag auf eine Arbeitserlaubnis gestellt.", exampleTr: "Geçen hafta çalışma izni için başvuru yaptım.", category: "resmi" },
    { id: 165, day: 33, german: "Wann bekomme ich eine Antwort?", pronunciation: "van bekome ih ayne ant-vort", turkish: "Ne zaman cevap alacağım?", example: "Ich warte schon lange. Wann bekomme ich eine Antwort?", exampleTr: "Uzun süredir bekliyorum. Ne zaman cevap alacağım?", category: "resmi" },

    { id: 166, day: 34, german: "Ich trinke meinen Kaffee am liebsten schwarz.", pronunciation: "ih trinke maynen kafe am lipsten şvarts", turkish: "Kahvemi en çok sade içmeyi seviyorum.", example: "Milch? Nein danke, ich trinke meinen Kaffee am liebsten schwarz.", exampleTr: "Süt? Hayır teşekkürler, kahvemi en çok sade içmeyi seviyorum.", category: "günlük" },
    { id: 167, day: 34, german: "Hast du Lust auf ein Bier?", pronunciation: "hast du lust auf ayn bir", turkish: "Bira içmeye ne dersin?", example: "Nach der Arbeit — hast du Lust auf ein Bier?", exampleTr: "İşten sonra — bira içmeye ne dersin?", category: "sosyal" },
    { id: 168, day: 34, german: "Ich bin Vegetarier/Vegetarierin.", pronunciation: "ih bin vege-tarier/vege-tari-erin", turkish: "Ben vejetaryenim.", example: "Haben Sie vegetarische Gerichte? Ich bin Vegetarierin.", exampleTr: "Vejetaryen yemekleriniz var mı? Ben vejetaryenim.", category: "günlük" },
    { id: 169, day: 34, german: "Das schmeckt hervorragend!", pronunciation: "das şmekt her-for-ragent", turkish: "Tadı muhteşem!", example: "Wow, das schmeckt hervorragend! Was ist das Rezept?", exampleTr: "Vay, tadı muhteşem! Tarifi nedir?", category: "günlük" },
    { id: 170, day: 34, german: "Prost! Auf unsere Freundschaft!", pronunciation: "prost auf unzere froynt-şaft", turkish: "Şerefe! Arkadaşlığımıza!", example: "Prost! Auf unsere Freundschaft und gute Zeiten!", exampleTr: "Şerefe! Arkadaşlığımıza ve güzel zamanlara!", category: "sosyal" },

    { id: 171, day: 35, german: "Ich muss zum Ausländeramt.", pronunciation: "ih mus tsum aus-lender-amt", turkish: "Yabancılar dairesine gitmem lazım.", example: "Morgen muss ich zum Ausländeramt für meinen Termin.", exampleTr: "Yarın randevum için yabancılar dairesine gitmem lazım.", category: "resmi" },
    { id: 172, day: 35, german: "Mein Visum läuft bald ab.", pronunciation: "ih mayn vizum loyft balt ap", turkish: "Vizem yakında bitiyor.", example: "Mein Visum läuft nächste Woche ab. Ich muss es verlängern.", exampleTr: "Vizem gelecek hafta bitiyor. Uzatmam lazım.", category: "resmi" },
    { id: 173, day: 35, german: "Ich brauche eine Bescheinigung.", pronunciation: "ih brauhe ayne be-şaynigung", turkish: "Bir belge/onay yazısı lazım.", example: "Für die Uni brauche ich eine Bescheinigung von der Krankenkasse.", exampleTr: "Üniversite için sağlık sigortasından bir belge lazım.", category: "resmi" },
    { id: 174, day: 35, german: "Wo kann ich das Formular abgeben?", pronunciation: "vo kan ih das formular ap-geben", turkish: "Formu nereye teslim edebilirim?", example: "Ich habe das Formular ausgefüllt. Wo kann ich es abgeben?", exampleTr: "Formu doldurdum. Nereye teslim edebilirim?", category: "resmi" },
    { id: 175, day: 35, german: "Haben Sie einen Termin frei?", pronunciation: "haben zi aynen termin fray", turkish: "Boş randevunuz var mı?", example: "Haben Sie diese Woche einen Termin frei?", exampleTr: "Bu hafta boş randevunuz var mı?", category: "resmi" },

    { id: 176, day: 36, german: "Die Aussicht ist atemberaubend!", pronunciation: "di aus-ziht ist atem-beraubent", turkish: "Manzara nefes kesici!", example: "Schau mal! Die Aussicht ist atemberaubend!", exampleTr: "Baksana! Manzara nefes kesici!", category: "seyahat" },
    { id: 177, day: 36, german: "Gibt es hier eine Stadtführung?", pronunciation: "gipt es hir ayne ştat-fürung", turkish: "Burada şehir turu var mı?", example: "Wir sind Touristen. Gibt es hier eine Stadtführung?", exampleTr: "Biz turistiz. Burada şehir turu var mı?", category: "seyahat" },
    { id: 178, day: 36, german: "Wo kann man hier gut fotografieren?", pronunciation: "vo kan man hir gut foto-grafiren", turkish: "Burada nerede güzel fotoğraf çekilir?", example: "Wo kann man hier gut fotografieren? Ich liebe Fotografie.", exampleTr: "Burada nerede güzel fotoğraf çekilir? Fotoğrafçılığı seviyorum.", category: "seyahat" },
    { id: 179, day: 36, german: "Das ist ein historisches Gebäude.", pronunciation: "das ist ayn his-torişes ge-boyde", turkish: "Bu tarihi bir bina.", example: "Das ist ein historisches Gebäude aus dem 18. Jahrhundert.", exampleTr: "Bu 18. yüzyıldan kalma tarihi bir bina.", category: "seyahat" },
    { id: 180, day: 36, german: "Ich liebe die Architektur hier.", pronunciation: "ih libe di arhi-tektur hir", turkish: "Buradaki mimariyi çok seviyorum.", example: "Berlin ist toll! Ich liebe die Architektur hier.", exampleTr: "Berlin harika! Buradaki mimariyi çok seviyorum.", category: "seyahat" },

    { id: 181, day: 37, german: "Ich möchte mich beschweren.", pronunciation: "ih möşte mih be-şveren", turkish: "Şikâyette bulunmak istiyorum.", example: "Das Zimmer ist nicht sauber. Ich möchte mich beschweren.", exampleTr: "Oda temiz değil. Şikâyette bulunmak istiyorum.", category: "günlük" },
    { id: 182, day: 37, german: "Das ist nicht das, was ich bestellt habe.", pronunciation: "das ist niht das vas ih be-ştelt habe", turkish: "Bu sipariş ettiğim şey değil.", example: "Entschuldigung, das ist nicht das, was ich bestellt habe.", exampleTr: "Affedersiniz, bu sipariş ettiğim şey değil.", category: "günlük" },
    { id: 183, day: 37, german: "Ich möchte mein Geld zurück.", pronunciation: "ih möşte mayn gelt tsurük", turkish: "Paramı geri istiyorum.", example: "Das Produkt ist defekt. Ich möchte mein Geld zurück.", exampleTr: "Ürün bozuk. Paramı geri istiyorum.", category: "günlük" },
    { id: 184, day: 37, german: "Können Sie den Manager rufen?", pronunciation: "könen zi den me-necer rufen", turkish: "Müdürü çağırabilir misiniz?", example: "Können Sie bitte den Manager rufen? Es gibt ein Problem.", exampleTr: "Lütfen müdürü çağırabilir misiniz? Bir sorun var.", category: "günlük" },
    { id: 185, day: 37, german: "Das ist inakzeptabel.", pronunciation: "das ist in-ak-tsep-tabel", turkish: "Bu kabul edilemez.", example: "Drei Stunden warten? Das ist inakzeptabel.", exampleTr: "Üç saat beklemek mi? Bu kabul edilemez.", category: "günlük" },

    { id: 186, day: 38, german: "Ich bin beeindruckt von Ihrer Arbeit.", pronunciation: "ih bin be-ayn-drukt fon irer arbayt", turkish: "İşinizden çok etkilendim.", example: "Ich bin beeindruckt von Ihrer Arbeit. Weiter so!", exampleTr: "İşinizden çok etkilendim. Böyle devam edin!", category: "iş" },
    { id: 187, day: 38, german: "Wir haben viel erreicht.", pronunciation: "vir haben fil er-rayht", turkish: "Çok şey başardık.", example: "Dieses Quartal — wir haben wirklich viel erreicht.", exampleTr: "Bu çeyrekte — gerçekten çok şey başardık.", category: "iş" },
    { id: 188, day: 38, german: "Der Fortschritt ist deutlich sichtbar.", pronunciation: "der fort-şrit ist doytlih ziht-bar", turkish: "İlerleme açıkça görülüyor.", example: "Der Fortschritt ist deutlich sichtbar. Gute Arbeit!", exampleTr: "İlerleme açıkça görülüyor. İyi iş!", category: "iş" },
    { id: 189, day: 38, german: "Ich schätze Ihre Zusammenarbeit.", pronunciation: "ih şetse ire tsu-zamen-arbayt", turkish: "İşbirliğinize değer veriyorum.", example: "Vielen Dank, ich schätze Ihre Zusammenarbeit sehr.", exampleTr: "Çok teşekkürler, işbirliğinize çok değer veriyorum.", category: "iş" },
    { id: 190, day: 38, german: "Auf gute Zusammenarbeit!", pronunciation: "auf gute tsu-zamen-arbayt", turkish: "İyi bir işbirliğine!", example: "Willkommen im Team! Auf gute Zusammenarbeit!", exampleTr: "Takıma hoş geldiniz! İyi bir işbirliğine!", category: "iş" },

    { id: 191, day: 39, german: "Ich bin auf dem Weg.", pronunciation: "ih bin auf dem veg", turkish: "Yoldayım.", example: "Ich komme gleich. Ich bin schon auf dem Weg.", exampleTr: "Hemen geliyorum. Zaten yoldayım.", category: "günlük" },
    { id: 192, day: 39, german: "Wir sind fast da.", pronunciation: "vir zint fast da", turkish: "Neredeyse vardık.", example: "Noch fünf Minuten. Wir sind fast da.", exampleTr: "Beş dakika daha. Neredeyse vardık.", category: "günlük" },
    { id: 193, day: 39, german: "Ich habe den Bus verpasst.", pronunciation: "ih habe den bus fer-past", turkish: "Otobüsü kaçırdım.", example: "Ich komme zu spät. Ich habe den Bus verpasst.", exampleTr: "Geç kalacağım. Otobüsü kaçırdım.", category: "günlük" },
    { id: 194, day: 39, german: "Gibt es hier einen Taxistand?", pronunciation: "gipt es hir aynen taksi-ştant", turkish: "Burada taksi durağı var mı?", example: "Es ist spät. Gibt es hier in der Nähe einen Taxistand?", exampleTr: "Geç oldu. Yakınlarda taksi durağı var mı?", category: "seyahat" },
    { id: 195, day: 39, german: "Wie lange dauert die Fahrt?", pronunciation: "vi lange dauert di fart", turkish: "Yolculuk ne kadar sürer?", example: "Zum Flughafen — wie lange dauert die Fahrt?", exampleTr: "Havalimanına — yolculuk ne kadar sürer?", category: "seyahat" },

    { id: 196, day: 40, german: "Ich möchte mich vorstellen.", pronunciation: "ih möşte mih for-ştelen", turkish: "Kendimi tanıtmak istiyorum.", example: "Guten Tag, ich möchte mich kurz vorstellen.", exampleTr: "İyi günler, kendimi kısaca tanıtmak istiyorum.", category: "iş" },
    { id: 197, day: 40, german: "Was machen Sie beruflich?", pronunciation: "vas mahen zi beruf-lih", turkish: "Mesleğiniz nedir?", example: "Freut mich! Was machen Sie beruflich?", exampleTr: "Tanıştığıma memnun oldum! Mesleğiniz nedir?", category: "sosyal" },
    { id: 198, day: 40, german: "Ich arbeite in der Forschung.", pronunciation: "ih arbayte in der forşung", turkish: "Araştırma alanında çalışıyorum.", example: "Was machen Sie? — Ich arbeite in der Forschung, im Bereich Chemie.", exampleTr: "Ne yapıyorsunuz? — Araştırma alanında, kimya bölümünde çalışıyorum.", category: "iş" },
    { id: 199, day: 40, german: "Sind Sie zum ersten Mal hier?", pronunciation: "zint zi tsum ersten mal hir", turkish: "Burada ilk kez misiniz?", example: "Willkommen! Sind Sie zum ersten Mal hier in Deutschland?", exampleTr: "Hoş geldiniz! Almanya'da ilk kez misiniz?", category: "sosyal" },
    { id: 200, day: 40, german: "Es ist mir eine Ehre.", pronunciation: "es ist mir ayne ere", turkish: "Onur duyarım.", example: "Vielen Dank für die Einladung. Es ist mir eine Ehre.", exampleTr: "Davet için çok teşekkürler. Onur duyarım.", category: "resmi" },

    // GÜN 41–50
    { id: 201, day: 41, german: "Ich bin davon überzeugt.", pronunciation: "ih bin davon über-tsoykt", turkish: "Bundan eminim.", example: "Ich bin davon überzeugt, dass es funktionieren wird.", exampleTr: "Bunun işe yarayacağından eminim.", category: "iş" },
    { id: 202, day: 41, german: "Meiner Meinung nach ist das richtig.", pronunciation: "mayner maynung nah ist das rihtig", turkish: "Bana göre bu doğru.", example: "Meiner Meinung nach ist das die beste Lösung.", exampleTr: "Bana göre bu en iyi çözüm.", category: "iş" },
    { id: 203, day: 41, german: "Es gibt verschiedene Möglichkeiten.", pronunciation: "es gipt fer-şidene möglih-kayten", turkish: "Çeşitli imkânlar var.", example: "Es gibt verschiedene Möglichkeiten, das Problem zu lösen.", exampleTr: "Sorunu çözmek için çeşitli imkânlar var.", category: "iş" },
    { id: 204, day: 41, german: "Ich sehe das genauso.", pronunciation: "ih zeye das genau-zo", turkish: "Ben de aynı şekilde düşünüyorum.", example: "Da haben Sie Recht. Ich sehe das genauso.", exampleTr: "Haklısınız. Ben de aynı şekilde düşünüyorum.", category: "sosyal" },
    { id: 205, day: 41, german: "Darüber müssen wir noch diskutieren.", pronunciation: "darüber müsen vir noh dis-kutiren", turkish: "Bunu daha tartışmamız lazım.", example: "Das ist wichtig. Darüber müssen wir noch diskutieren.", exampleTr: "Bu önemli. Bunu daha tartışmamız lazım.", category: "iş" },

    { id: 206, day: 42, german: "Ich bin sehr dankbar dafür.", pronunciation: "ih bin zeyr dank-bar dafür", turkish: "Bunun için çok müteşekkirim.", example: "Ich bin sehr dankbar für Ihre Unterstützung.", exampleTr: "Desteğiniz için çok müteşekkirim.", category: "sosyal" },
    { id: 207, day: 42, german: "Das bedeutet mir sehr viel.", pronunciation: "das be-doytet mir zeyr fil", turkish: "Bu benim için çok önemli.", example: "Ihre Worte — das bedeutet mir sehr viel.", exampleTr: "Sözleriniz — bu benim için çok önemli.", category: "sosyal" },
    { id: 208, day: 42, german: "Sie sind sehr großzügig.", pronunciation: "zi zint zeyr gros-tsügig", turkish: "Çok cömertsiniz.", example: "Vielen Dank! Sie sind sehr großzügig.", exampleTr: "Çok teşekkürler! Çok cömertsiniz.", category: "sosyal" },
    { id: 209, day: 42, german: "Ich weiß das wirklich zu schätzen.", pronunciation: "ih vays das virklih tsu şetsen", turkish: "Buna gerçekten değer veriyorum.", example: "Ihre Hilfe — ich weiß das wirklich zu schätzen.", exampleTr: "Yardımınız — buna gerçekten değer veriyorum.", category: "sosyal" },
    { id: 210, day: 42, german: "Von Herzen danke!", pronunciation: "fon hertsen danke", turkish: "Kalpten teşekkürler!", example: "Von Herzen danke für alles, was Sie getan haben!", exampleTr: "Yaptığınız her şey için kalpten teşekkürler!", category: "sosyal" },

    { id: 211, day: 43, german: "Ich habe eine Versicherungsfrage.", pronunciation: "ih habe ayne fer-ziherungs-frage", turkish: "Sigortayla ilgili bir sorum var.", example: "Ich habe eine Versicherungsfrage. An wen kann ich mich wenden?", exampleTr: "Sigortayla ilgili bir sorum var. Kime başvurabilirim?", category: "resmi" },
    { id: 212, day: 43, german: "Ist das in meiner Versicherung enthalten?", pronunciation: "ist das in mayner fer-ziherung ent-halten", turkish: "Bu sigortama dahil mi?", example: "Ist diese Behandlung in meiner Versicherung enthalten?", exampleTr: "Bu tedavi sigortama dahil mi?", category: "resmi" },
    { id: 213, day: 43, german: "Ich muss meinen Vertrag kündigen.", pronunciation: "ih mus maynen fer-trag kündigen", turkish: "Sözleşmemi iptal etmem gerekiyor.", example: "Ich muss meinen Handyvertrag kündigen. Wie geht das?", exampleTr: "Telefon sözleşmemi iptal etmem gerekiyor. Nasıl yapılır?", category: "resmi" },
    { id: 214, day: 43, german: "Wann endet die Kündigungsfrist?", pronunciation: "van endet di kündigungs-frist", turkish: "İptal süresi ne zaman bitiyor?", example: "Wann endet die Kündigungsfrist für meinen Mietvertrag?", exampleTr: "Kira sözleşmemin iptal süresi ne zaman bitiyor?", category: "resmi" },
    { id: 215, day: 43, german: "Ich möchte einen Termin beim Amt vereinbaren.", pronunciation: "ih möşte aynen termin baym amt fer-ayn-baren", turkish: "Resmi dairede randevu almak istiyorum.", example: "Ich möchte einen Termin beim Bürgeramt vereinbaren.", exampleTr: "Nüfus müdürlüğünde randevu almak istiyorum.", category: "resmi" },

    { id: 216, day: 44, german: "Das ist eine gute Gelegenheit.", pronunciation: "das ist ayne gute ge-legen-hayt", turkish: "Bu iyi bir fırsat.", example: "Das Jobangebot? Das ist eine gute Gelegenheit!", exampleTr: "İş teklifi mi? Bu iyi bir fırsat!", category: "iş" },
    { id: 217, day: 44, german: "Ich habe eine Zusage bekommen!", pronunciation: "ih habe ayne tsu-zage bekomen", turkish: "Kabul aldım!", example: "Tolle Neuigkeiten! Ich habe eine Zusage für das Praktikum bekommen!", exampleTr: "Harika haber! Staj için kabul aldım!", category: "iş" },
    { id: 218, day: 44, german: "Ich muss darüber nachdenken.", pronunciation: "ih mus darüber nah-denken", turkish: "Bu konuyu düşünmem lazım.", example: "Das ist ein tolles Angebot, aber ich muss darüber nachdenken.", exampleTr: "Harika bir teklif ama bu konuyu düşünmem lazım.", category: "günlük" },
    { id: 219, day: 44, german: "Können wir darüber morgen sprechen?", pronunciation: "könen vir darüber morgen şpreşen", turkish: "Bunu yarın konuşabilir miyiz?", example: "Es ist spät. Können wir darüber morgen sprechen?", exampleTr: "Geç oldu. Bunu yarın konuşabilir miyiz?", category: "günlük" },
    { id: 220, day: 44, german: "Ich halte Sie auf dem Laufenden.", pronunciation: "ih halte zi auf dem laufenden", turkish: "Sizi bilgilendirmeye devam edeceğim.", example: "Ich halte Sie über den Stand der Dinge auf dem Laufenden.", exampleTr: "Gelişmeler hakkında sizi bilgilendirmeye devam edeceğim.", category: "iş" },

    { id: 221, day: 45, german: "Es tut mir leid, dass ich zu spät komme.", pronunciation: "es tut mir layt das ih tsu şpet kome", turkish: "Geç kaldığım için özür dilerim.", example: "Es tut mir wirklich leid, dass ich zu spät komme.", exampleTr: "Geç kaldığım için gerçekten özür dilerim.", category: "günlük" },
    { id: 222, day: 45, german: "Das wird nicht wieder vorkommen.", pronunciation: "das virt niht vider for-komen", turkish: "Bu bir daha olmayacak.", example: "Es tut mir leid. Das wird nicht wieder vorkommen.", exampleTr: "Özür dilerim. Bu bir daha olmayacak.", category: "günlük" },
    { id: 223, day: 45, german: "Ich übernehme die volle Verantwortung.", pronunciation: "ih über-neme di fole fer-ant-vortung", turkish: "Tüm sorumluluğu üstleniyorum.", example: "Das war mein Fehler. Ich übernehme die volle Verantwortung.", exampleTr: "Bu benim hatamdı. Tüm sorumluluğu üstleniyorum.", category: "iş" },
    { id: 224, day: 45, german: "Ich entschuldige mich für die Unannehmlichkeiten.", pronunciation: "ih ent-şuldige mih für di un-annem-lih-kayten", turkish: "Rahatsızlık için özür dilerim.", example: "Ich entschuldige mich für die Unannehmlichkeiten.", exampleTr: "Yaşanan rahatsızlık için özür dilerim.", category: "resmi" },
    { id: 225, day: 45, german: "Wie kann ich das wiedergutmachen?", pronunciation: "ih vi kan ih das vider-gut-mahen", turkish: "Bunu nasıl telafi edebilirim?", example: "Wie kann ich das wiedergutmachen? Sagen Sie mir, was ich tun kann.", exampleTr: "Bunu nasıl telafi edebilirim? Ne yapabileceğimi söyleyin.", category: "sosyal" },

    { id: 226, day: 46, german: "Ich bin fest entschlossen.", pronunciation: "ih bin fest ent-şlosen", turkish: "Kararlıyım.", example: "Ich bin fest entschlossen, Deutsch fließend zu lernen.", exampleTr: "Almancayı akıcı öğrenmeye kararlıyım.", category: "sosyal" },
    { id: 227, day: 46, german: "Schritt für Schritt komme ich weiter.", pronunciation: "şrit für şrit kome ih vayter", turkish: "Adım adım ilerliyorum.", example: "Es ist schwer, aber Schritt für Schritt komme ich weiter.", exampleTr: "Zor ama adım adım ilerliyorum.", category: "sosyal" },
    { id: 228, day: 46, german: "Aufgeben ist keine Option.", pronunciation: "auf-geben ist kayne optsyon", turkish: "Pes etmek bir seçenek değil.", example: "Es ist hart, aber Aufgeben ist keine Option.", exampleTr: "Zor ama pes etmek bir seçenek değil.", category: "sosyal" },
    { id: 229, day: 46, german: "Ich glaube an mich selbst.", pronunciation: "ih glaube an mih zelpst", turkish: "Kendime inanıyorum.", example: "Egal was passiert — ich glaube an mich selbst.", exampleTr: "Ne olursa olsun — kendime inanıyorum.", category: "sosyal" },
    { id: 230, day: 46, german: "Jeder Tag ist eine neue Chance.", pronunciation: "yeder tag ist ayne noye şanse", turkish: "Her gün yeni bir şans.", example: "Kopf hoch! Jeder Tag ist eine neue Chance.", exampleTr: "Kafanı dik tut! Her gün yeni bir şans.", category: "sosyal" },

    { id: 231, day: 47, german: "Ich bereite eine Präsentation vor.", pronunciation: "ih be-rayte ayne presen-tatsyon for", turkish: "Bir sunum hazırlıyorum.", example: "Ich bin beschäftigt. Ich bereite eine Präsentation für morgen vor.", exampleTr: "Meşgulüm. Yarın için bir sunum hazırlıyorum.", category: "iş" },
    { id: 232, day: 47, german: "Können Sie mir Ihre Folien schicken?", pronunciation: "könen zi mir ire folyen şiken", turkish: "Slaytlarınızı gönderebilir misiniz?", example: "Tolle Präsentation! Können Sie mir Ihre Folien schicken?", exampleTr: "Harika sunum! Slaytlarınızı gönderebilir misiniz?", category: "iş" },
    { id: 233, day: 47, german: "Ich fasse die Ergebnisse zusammen.", pronunciation: "ih fase di er-gebnise tsu-zamen", turkish: "Sonuçları özetliyorum.", example: "Zum Abschluss — ich fasse die Ergebnisse kurz zusammen.", exampleTr: "Sonuç olarak — sonuçları kısaca özetliyorum.", category: "iş" },
    { id: 234, day: 47, german: "Haben Sie dazu noch Fragen?", pronunciation: "haben zi datsu noh fragen", turkish: "Bu konuda başka sorularınız var mı?", example: "Das war meine Präsentation. Haben Sie dazu noch Fragen?", exampleTr: "Sunumum bu kadardı. Bu konuda başka sorularınız var mı?", category: "iş" },
    { id: 235, day: 47, german: "Ich würde gerne Ihre Meinung dazu hören.", pronunciation: "ih vürde gerne ire maynung datsu hören", turkish: "Bu konuda görüşünüzü duymak isterim.", example: "Ich würde gerne Ihre ehrliche Meinung dazu hören.", exampleTr: "Bu konuda dürüst görüşünüzü duymak isterim.", category: "iş" },

    { id: 236, day: 48, german: "Ich lerne jeden Tag etwas Neues.", pronunciation: "ih lerne yeden tag etvas noyes", turkish: "Her gün yeni bir şey öğreniyorum.", example: "Das Studium ist toll. Ich lerne jeden Tag etwas Neues.", exampleTr: "Eğitim harika. Her gün yeni bir şey öğreniyorum.", category: "sosyal" },
    { id: 237, day: 48, german: "Übung macht den Meister!", pronunciation: "übung maht den mayster", turkish: "Pratik yapmak ustalaştırır!", example: "Keine Angst vor Fehlern — Übung macht den Meister!", exampleTr: "Hatalardan korkma — pratik yapmak ustalaştırır!", category: "sosyal" },
    { id: 238, day: 48, german: "Wissen ist Macht.", pronunciation: "visen ist maht", turkish: "Bilgi güçtür.", example: "Deshalb lese ich so viel. Wissen ist Macht.", exampleTr: "Bu yüzden çok okuyorum. Bilgi güçtür.", category: "sosyal" },
    { id: 239, day: 48, german: "Man lernt nie aus.", pronunciation: "man lernt ni aus", turkish: "İnsan asla öğrenmeyi bırakmaz.", example: "Auch mit 80 — man lernt nie aus.", exampleTr: "80 yaşında bile — insan asla öğrenmeyi bırakmaz.", category: "sosyal" },
    { id: 240, day: 48, german: "Der Weg ist das Ziel.", pronunciation: "der veg ist das tsil", turkish: "Yol, hedefin ta kendisidir.", example: "Genieß den Prozess. Der Weg ist das Ziel.", exampleTr: "Sürecin tadını çıkar. Yol, hedefin ta kendisidir.", category: "sosyal" },

    { id: 241, day: 49, german: "Es war mir eine Freude!", pronunciation: "es var mir ayne froyde", turkish: "Benim için bir zevkti!", example: "Vielen Dank für alles. Es war mir eine Freude!", exampleTr: "Her şey için çok teşekkürler. Benim için bir zevkti!", category: "sosyal" },
    { id: 242, day: 49, german: "Ich wünsche Ihnen alles Gute.", pronunciation: "ih vünşe inen ales gute", turkish: "Size her şeyin en iyisini diliyorum.", example: "Auf Wiedersehen! Ich wünsche Ihnen alles Gute.", exampleTr: "Hoşça kalın! Size her şeyin en iyisini diliyorum.", category: "sosyal" },
    { id: 243, day: 49, german: "Wir bleiben in Kontakt.", pronunciation: "vir blyben in kontakt", turkish: "İletişimde kalalım.", example: "Es war toll! Wir bleiben auf jeden Fall in Kontakt.", exampleTr: "Harikaydı! Kesinlikle iletişimde kalalım.", category: "sosyal" },
    { id: 244, day: 49, german: "Passen Sie auf sich auf!", pronunciation: "pasen zi auf zih auf", turkish: "Kendinize iyi bakın!", example: "Bis bald! Passen Sie auf sich auf!", exampleTr: "Yakında görüşürüz! Kendinize iyi bakın!", category: "sosyal" },
    { id: 245, day: 49, german: "Bis zum nächsten Mal!", pronunciation: "bis tsum neşsten mal", turkish: "Bir dahaki sefere kadar!", example: "Das war super! Bis zum nächsten Mal!", exampleTr: "Süperdi! Bir dahaki sefere kadar!", category: "sosyal" },

    { id: 246, day: 50, german: "Ich habe so viel gelernt.", pronunciation: "ih habe zo fil gelernt", turkish: "Çok şey öğrendim.", example: "Diese 50 Tage — ich habe so viel gelernt.", exampleTr: "Bu 50 gün — çok şey öğrendim.", category: "sosyal" },
    { id: 247, day: 50, german: "Deutsch macht mir jetzt Spaß!", pronunciation: "doyç maht mir yetst şpas", turkish: "Almanca artık eğlenceli!", example: "Am Anfang war es schwer, aber Deutsch macht mir jetzt Spaß!", exampleTr: "Başta zordu ama Almanca artık eğlenceli!", category: "sosyal" },
    { id: 248, day: 50, german: "Ich kann mich jetzt auf Deutsch verständigen.", pronunciation: "ih kan mih yetst auf doyç fer-ştendigen", turkish: "Artık Almanca anlaşabiliyorum.", example: "50 Tage Täglich — ich kann mich jetzt auf Deutsch verständigen.", exampleTr: "50 gün Täglich — artık Almanca anlaşabiliyorum.", category: "günlük" },
    { id: 249, day: 50, german: "Das ist erst der Anfang.", pronunciation: "das ist erst der anfang", turkish: "Bu daha başlangıç.", example: "50 Tage geschafft? Das ist erst der Anfang!", exampleTr: "50 günü tamamladın mı? Bu daha başlangıç!", category: "sosyal" },
    { id: 250, day: 50, german: "Ich bleibe dran!", pronunciation: "ih blaybe dran", turkish: "Devam edeceğim!", example: "Egal was passiert — ich bleibe dran!", exampleTr: "Ne olursa olsun — devam edeceğim!", category: "sosyal" }
];

// Toplam gün sayısı
const TOTAL_DAYS = 50;

// Günlük açılma saati (09:00)
const UNLOCK_HOUR = 9;
