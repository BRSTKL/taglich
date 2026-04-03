// =============================================
// Täglich — Almanca Kalıp Cümle Veritabanı
// 150 gün × 5 kalıp = 750 cümle
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
    { id: 250, day: 50, german: "Ich bleibe dran!", pronunciation: "ih blaybe dran", turkish: "Devam edeceğim!", example: "Egal was passiert — ich bleibe dran!", exampleTr: "Ne olursa olsun — devam edeceğim!", category: "sosyal" },

    // === GÜN 51–55: Yeni içerikler ===
    // GÜN 51: Evde Tamir
    { id: 251, day: 51, german: "Die Heizung funktioniert nicht.", pronunciation: "di haytsung funktioniert niht", turkish: "Kalorifer çalışmıyor.", example: "Seit heute Morgen funktioniert die Heizung nicht.", exampleTr: "Bu sabahtan beri kalorifer çalışmıyor.", category: "günlük" },
    { id: 252, day: 51, german: "Könnten Sie einen Techniker schicken?", pronunciation: "könten zi aynen tehniker şiken", turkish: "Bir teknisyen gönderebilir misiniz?", example: "Könnten Sie bitte einen Techniker schicken?", exampleTr: "Lütfen bir teknisyen gönderebilir misiniz?", category: "resmi" },
    { id: 253, day: 51, german: "Im Bad gibt es ein Problem.", pronunciation: "im bad gibt es ayn problem", turkish: "Banyoda bir sorun var.", example: "Im Bad gibt es ein Problem mit dem Wasserhahn.", exampleTr: "Banyoda muslukla ilgili bir sorun var.", category: "günlük" },
    { id: 254, day: 51, german: "Seit gestern haben wir kein warmes Wasser.", pronunciation: "zayt gesten haben vir kayn varmes vaser", turkish: "Dünden beri sıcak suyumuz yok.", example: "Seit gestern haben wir kein warmes Wasser im Haus.", exampleTr: "Dünden beri evde sıcak suyumuz yok.", category: "günlük" },
    { id: 255, day: 51, german: "Wann kann das repariert werden?", pronunciation: "van kan das reparirt verden", turkish: "Bu ne zaman tamir edilebilir?", example: "Wissen Sie, wann das repariert werden kann?", exampleTr: "Bunun ne zaman tamir edilebileceğini biliyor musunuz?", category: "resmi" },

    // GÜN 52: Komşuluk
    { id: 256, day: 52, german: "Die Musik ist ein bisschen zu laut.", pronunciation: "di muzik ist ayn bishın tsu laut", turkish: "Müzik biraz fazla yüksek.", example: "Entschuldigung, die Musik ist ein bisschen zu laut.", exampleTr: "Affedersiniz, müzik biraz fazla yüksek.", category: "sosyal" },
    { id: 257, day: 52, german: "Könnten Sie bitte etwas leiser sein?", pronunciation: "könten zi bite etvas layzer zayn", turkish: "Biraz daha sessiz olabilir misiniz lütfen?", example: "Es ist schon spät. Könnten Sie etwas leiser sein?", exampleTr: "Artık geç oldu. Biraz daha sessiz olabilir misiniz?", category: "sosyal" },
    { id: 258, day: 52, german: "Ich wollte mich kurz vorstellen.", pronunciation: "ih volte mih kurz forştelen", turkish: "Kendimi kısaca tanıtmak istedim.", example: "Hallo, ich bin neu hier und wollte mich kurz vorstellen.", exampleTr: "Merhaba, burada yeniyim ve kendimi kısaca tanıtmak istedim.", category: "sosyal" },
    { id: 259, day: 52, german: "Wir wohnen seit letzter Woche hier.", pronunciation: "vir vonen zayt letster vohe hir", turkish: "Geçen haftadan beri burada oturuyoruz.", example: "Wir wohnen seit letzter Woche im dritten Stock.", exampleTr: "Geçen haftadan beri üçüncü katta oturuyoruz.", category: "sosyal" },
    { id: 260, day: 52, german: "Falls etwas ist, sagen Sie mir bitte Bescheid.", pronunciation: "falls etvas ist, zagen zi mir bite beşayd", turkish: "Bir şey olursa lütfen bana haber verin.", example: "Falls etwas ist, sagen Sie mir bitte Bescheid.", exampleTr: "Bir şey olursa lütfen bana haber verin.", category: "sosyal" },

    // GÜN 53: Kargo ve Posta
    { id: 261, day: 53, german: "Ich erwarte heute ein Paket.", pronunciation: "ih ervarte hoyte ayn paket", turkish: "Bugün bir paket bekliyorum.", example: "Ich bleibe zu Hause, weil ich heute ein Paket erwarte.", exampleTr: "Bugün bir paket beklediğim için evde kalıyorum.", category: "günlük" },
    { id: 262, day: 53, german: "Wo kann ich das Paket abholen?", pronunciation: "vo kan ih das paket apholen", turkish: "Paketi nereden teslim alabilirim?", example: "Wo kann ich das Paket morgen abholen?", exampleTr: "Paketi yarın nereden teslim alabilirim?", category: "günlük" },
    { id: 263, day: 53, german: "Der Zusteller hat niemanden angetroffen.", pronunciation: "der tzusteler hat nimanden angetrofen", turkish: "Dağıtıcı kimseyi bulamamış.", example: "In der Nachricht steht, dass der Zusteller niemanden angetroffen hat.", exampleTr: "Mesajda dağıtıcının kimseyi bulamadığı yazıyor.", category: "resmi" },
    { id: 264, day: 53, german: "Könnten Sie die Sendungsnummer wiederholen?", pronunciation: "könten zi di zendungsnumer viderholen", turkish: "Takip numarasını tekrar eder misiniz?", example: "Könnten Sie bitte die Sendungsnummer wiederholen?", exampleTr: "Lütfen takip numarasını tekrar eder misiniz?", category: "resmi" },
    { id: 265, day: 53, german: "Ich möchte dieses Formular per Post schicken.", pronunciation: "ih möşte dizes formular per post şiken", turkish: "Bu formu posta ile göndermek istiyorum.", example: "Ich möchte das Formular heute per Post schicken.", exampleTr: "Bu formu bugün posta ile göndermek istiyorum.", category: "resmi" },

    // GÜN 54: Randevu Planlama
    { id: 266, day: 54, german: "Passt Ihnen Dienstag um zehn Uhr?", pronunciation: "past inen dinstag um tsehn ur", turkish: "Salı saat onda size uyar mı?", example: "Passt Ihnen Dienstag um zehn Uhr für ein Treffen?", exampleTr: "Bir görüşme için Salı saat onda size uyar mı?", category: "resmi" },
    { id: 267, day: 54, german: "Ich muss den Termin verschieben.", pronunciation: "ih mus den termin ferşiben", turkish: "Randevuyu ertelemem gerekiyor.", example: "Leider muss ich den Termin verschieben.", exampleTr: "Maalesef randevuyu ertelemem gerekiyor.", category: "günlük" },
    { id: 268, day: 54, german: "Haben Sie nächste Woche noch etwas frei?", pronunciation: "haben zi nehste vohe noh etvas fray", turkish: "Gelecek hafta hâlâ boş yeriniz var mı?", example: "Haben Sie nächste Woche noch etwas frei?", exampleTr: "Gelecek hafta hâlâ boş yeriniz var mı?", category: "resmi" },
    { id: 269, day: 54, german: "Bitte bestätigen Sie den Termin per E-Mail.", pronunciation: "bite beştetigen zi den termin per i-mayl", turkish: "Lütfen randevuyu e-posta ile onaylayın.", example: "Bitte bestätigen Sie den Termin kurz per E-Mail.", exampleTr: "Lütfen randevuyu kısaca e-posta ile onaylayın.", category: "resmi" },
    { id: 270, day: 54, german: "Ich komme pünktlich.", pronunciation: "ih kome pünktlih", turkish: "Tam vaktinde geleceğim.", example: "Keine Sorge, ich komme pünktlich zum Termin.", exampleTr: "Merak etmeyin, randevuya tam vaktinde geleceğim.", category: "günlük" },

    // GÜN 55: Market ve Yemek
    { id: 271, day: 55, german: "Ich brauche noch ein paar Zutaten.", pronunciation: "ih brauhe noh ayn par tsutaten", turkish: "Birkaç malzemeye daha ihtiyacım var.", example: "Für das Rezept brauche ich noch ein paar Zutaten.", exampleTr: "Tarif için birkaç malzemeye daha ihtiyacım var.", category: "günlük" },
    { id: 272, day: 55, german: "Haben Sie frisches Gemüse?", pronunciation: "haben zi frişes gemüze", turkish: "Taze sebzeniz var mı?", example: "Haben Sie heute frisches Gemüse?", exampleTr: "Bugün taze sebzeniz var mı?", category: "günlük" },
    { id: 273, day: 55, german: "Was empfehlen Sie für das Abendessen?", pronunciation: "vas empfehlen zi für das abentesen", turkish: "Akşam yemeği için ne önerirsiniz?", example: "Was empfehlen Sie für das Abendessen heute?", exampleTr: "Bugün akşam yemeği için ne önerirsiniz?", category: "günlük" },
    { id: 274, day: 55, german: "Ich koche heute für Freunde.", pronunciation: "ih kohe hoyte für froynde", turkish: "Bugün arkadaşlar için yemek yapıyorum.", example: "Ich koche heute Abend für Freunde.", exampleTr: "Bu akşam arkadaşlar için yemek yapıyorum.", category: "sosyal" },
    { id: 275, day: 55, german: "Das riecht wirklich lecker.", pronunciation: "das riht virklih leka", turkish: "Bu gerçekten çok güzel kokuyor.", example: "Wow, das riecht wirklich lecker.", exampleTr: "Vay, bu gerçekten çok güzel kokuyor.", category: "sosyal" },

    // GÜN 56–60
    // GÜN 56: Spor ve Egzersiz
    { id: 276, day: 56, german: "Ich gehe dreimal pro Woche ins Fitnessstudio.", pronunciation: "ih geye draymal pro vohe ins fitnesştudyo", turkish: "Haftada üç kez spor salonuna gidiyorum.", example: "Ich gehe dreimal pro Woche ins Fitnessstudio.", exampleTr: "Haftada üç kez spor salonuna gidiyorum.", category: "günlük" },
    { id: 277, day: 56, german: "Heute trainiere ich nur leicht.", pronunciation: "hoyte trenire ih nur layht", turkish: "Bugün sadece hafif antrenman yapıyorum.", example: "Heute trainiere ich nur leicht, weil ich müde bin.", exampleTr: "Bugün yorgun olduğum için sadece hafif antrenman yapıyorum.", category: "günlük" },
    { id: 278, day: 56, german: "Haben Sie einen Kurs für Anfänger?", pronunciation: "haben zi aynen kurs für anfenker", turkish: "Başlangıç seviyesine uygun bir kursunuz var mı?", example: "Haben Sie hier einen Kurs für Anfänger?", exampleTr: "Burada başlangıç seviyesine uygun bir kursunuz var mı?", category: "günlük" },
    { id: 279, day: 56, german: "Nach dem Sport fühle ich mich besser.", pronunciation: "nah dem şport füle ih mih beser", turkish: "Spordan sonra kendimi daha iyi hissediyorum.", example: "Nach dem Sport fühle ich mich immer besser.", exampleTr: "Spordan sonra kendimi her zaman daha iyi hissediyorum.", category: "günlük" },
    { id: 280, day: 56, german: "Ich möchte meine Kondition verbessern.", pronunciation: "ih möşte mayne kondisyon ferbesern", turkish: "Kondisyonumu geliştirmek istiyorum.", example: "Dieses Jahr möchte ich meine Kondition verbessern.", exampleTr: "Bu yıl kondisyonumu geliştirmek istiyorum.", category: "günlük" },

    // GÜN 57: Hafta Sonu Planları
    { id: 281, day: 57, german: "Hast du am Wochenende schon etwas vor?", pronunciation: "hast du am vohenende şon etvas for", turkish: "Hafta sonu için bir planın var mı?", example: "Hast du am Wochenende schon etwas vor?", exampleTr: "Hafta sonu için bir planın var mı?", category: "sosyal" },
    { id: 282, day: 57, german: "Wir könnten einen Tagesausflug machen.", pronunciation: "vir könten aynen tagesausflug mahen", turkish: "Günübirlik bir gezi yapabiliriz.", example: "Wir könnten am Samstag einen Tagesausflug machen.", exampleTr: "Cumartesi günübirlik bir gezi yapabiliriz.", category: "sosyal" },
    { id: 283, day: 57, german: "Ich hätte Lust auf etwas Ruhiges.", pronunciation: "ih hete lust auf etvas ruhiges", turkish: "Daha sakin bir şey yapmak isterim.", example: "Nach der Woche hätte ich Lust auf etwas Ruhiges.", exampleTr: "Bu haftadan sonra daha sakin bir şey yapmak isterim.", category: "sosyal" },
    { id: 284, day: 57, german: "Lass uns das Wetter erst abwarten.", pronunciation: "las uns das veter erst abvarten", turkish: "Önce hava durumunu bekleyelim.", example: "Lass uns das Wetter erst abwarten und dann planen.", exampleTr: "Önce hava durumunu bekleyelim, sonra plan yaparız.", category: "sosyal" },
    { id: 285, day: 57, german: "Das klingt nach einem guten Plan.", pronunciation: "das klingt nah aynem guten plan", turkish: "Kulağa iyi bir plan gibi geliyor.", example: "Spazieren und Kaffee? Das klingt nach einem guten Plan.", exampleTr: "Yürüyüş ve kahve mi? Kulağa iyi bir plan gibi geliyor.", category: "sosyal" },

    // GÜN 58: Kültürel Etkinlikler
    { id: 286, day: 58, german: "Gibt es heute Abend eine Ausstellung?", pronunciation: "gibt es hoyte abent ayne austelung", turkish: "Bu akşam bir sergi var mı?", example: "Weißt du, ob es heute Abend eine Ausstellung gibt?", exampleTr: "Bu akşam bir sergi olup olmadığını biliyor musun?", category: "sosyal" },
    { id: 287, day: 58, german: "Ich würde gern ins Theater gehen.", pronunciation: "ih vürde gern ins teater geyn", turkish: "Tiyatroya gitmek isterim.", example: "Am Freitag würde ich gern ins Theater gehen.", exampleTr: "Cuma günü tiyatroya gitmek isterim.", category: "sosyal" },
    { id: 288, day: 58, german: "Wo kann man Tickets online kaufen?", pronunciation: "vo kan man tikets onlayn kaufen", turkish: "Biletleri internetten nereden alabiliriz?", example: "Wo kann man die Tickets online kaufen?", exampleTr: "Biletleri internetten nereden alabiliriz?", category: "günlük" },
    { id: 289, day: 58, german: "Das Stück wurde sehr empfohlen.", pronunciation: "das ştük vurde zeyr empfolen", turkish: "Bu oyun çok tavsiye edildi.", example: "Das Stück wurde mir von vielen Leuten empfohlen.", exampleTr: "Bu oyun bana birçok kişi tarafından tavsiye edildi.", category: "sosyal" },
    { id: 290, day: 58, german: "Wollen wir vorher etwas essen gehen?", pronunciation: "volen vir forher etvas esen geyn", turkish: "Öncesinde bir şeyler yemeye gidelim mi?", example: "Wollen wir vorher noch etwas essen gehen?", exampleTr: "Öncesinde bir şeyler yemeye gidelim mi?", category: "sosyal" },

    // GÜN 59: Kütüphane
    { id: 291, day: 59, german: "Ich möchte einen Bibliotheksausweis beantragen.", pronunciation: "ih möşte aynen biblioteks-ausvays beantragen", turkish: "Kütüphane kartı başvurusu yapmak istiyorum.", example: "Ich möchte einen Bibliotheksausweis beantragen.", exampleTr: "Kütüphane kartı başvurusu yapmak istiyorum.", category: "resmi" },
    { id: 292, day: 59, german: "Wie lange darf ich das Buch behalten?", pronunciation: "vi lange darf ih das buh behaltn", turkish: "Bu kitabı ne kadar süre tutabilirim?", example: "Wie lange darf ich das Buch behalten?", exampleTr: "Bu kitabı ne kadar süre tutabilirim?", category: "günlük" },
    { id: 293, day: 59, german: "Gibt es hier auch E-Books?", pronunciation: "gibt es hir auh i-buks", turkish: "Burada e-kitap da var mı?", example: "Ich lese digital. Gibt es hier auch E-Books?", exampleTr: "Dijital okuyorum. Burada e-kitap da var mı?", category: "günlük" },
    { id: 294, day: 59, german: "Ich suche etwas über deutsche Geschichte.", pronunciation: "ih zuhe etvas über doyşe geşihtə", turkish: "Alman tarihi hakkında bir şey arıyorum.", example: "Für meinen Kurs suche ich etwas über deutsche Geschichte.", exampleTr: "Dersim için Alman tarihi hakkında bir şey arıyorum.", category: "günlük" },
    { id: 295, day: 59, german: "Können Sie mir ein gutes Buch empfehlen?", pronunciation: "könen zi mir ayn gutes buh empfelen", turkish: "Bana iyi bir kitap önerebilir misiniz?", example: "Können Sie mir ein gutes Buch empfehlen?", exampleTr: "Bana iyi bir kitap önerebilir misiniz?", category: "günlük" },

    // GÜN 60: Fatura ve Bankacılık
    { id: 296, day: 60, german: "Die Rechnung ist heute angekommen.", pronunciation: "di rehhnung ist hoyte angekommen", turkish: "Fatura bugün geldi.", example: "Die Rechnung ist heute per E-Mail angekommen.", exampleTr: "Fatura bugün e-posta ile geldi.", category: "günlük" },
    { id: 297, day: 60, german: "Ich habe die Überweisung schon gemacht.", pronunciation: "ih habe di übervayzung şon gemaht", turkish: "Havale işlemini zaten yaptım.", example: "Ich habe die Überweisung schon gestern gemacht.", exampleTr: "Havale işlemini zaten dün yaptım.", category: "günlük" },
    { id: 298, day: 60, german: "Könnten Sie mir die IBAN schicken?", pronunciation: "könten zi mir di iban şiken", turkish: "Bana IBAN'ı gönderebilir misiniz?", example: "Könnten Sie mir bitte die IBAN schicken?", exampleTr: "Lütfen bana IBAN'ı gönderebilir misiniz?", category: "resmi" },
    { id: 299, day: 60, german: "Warum wurde der Betrag doppelt abgebucht?", pronunciation: "varum vurde der betrag dopelt abgebuht", turkish: "Tutar neden iki kez çekildi?", example: "Warum wurde der Betrag doppelt abgebucht?", exampleTr: "Tutar neden iki kez çekildi?", category: "resmi" },
    { id: 300, day: 60, german: "Ich brauche eine Bestätigung für die Zahlung.", pronunciation: "ih brauhe ayne beştetigung für di tsalung", turkish: "Ödeme için bir onaya ihtiyacım var.", example: "Ich brauche eine Bestätigung für die Zahlung.", exampleTr: "Ödeme için bir onaya ihtiyacım var.", category: "resmi" },

    // GÜN 61–65
    // GÜN 61: İş Görüşmesi
    { id: 301, day: 61, german: "Ich habe mich intensiv auf das Gespräch vorbereitet.", pronunciation: "ih habe mih intenziv auf das geşpreh forberaytet", turkish: "Görüşmeye yoğun şekilde hazırlandım.", example: "Ich habe mich gut auf das Gespräch vorbereitet.", exampleTr: "Görüşmeye iyi hazırlandım.", category: "iş" },
    { id: 302, day: 61, german: "Welche Aufgaben gehören zu dieser Position?", pronunciation: "velhe aufgaben gehören tsu dizeer pozitsyon", turkish: "Bu pozisyona hangi görevler dahil?", example: "Welche Aufgaben gehören genau zu dieser Position?", exampleTr: "Bu pozisyona tam olarak hangi görevler dahil?", category: "iş" },
    { id: 303, day: 61, german: "Ich arbeite gern selbstständig und im Team.", pronunciation: "ih arbayte gern zelbstştendig unt im tim", turkish: "Bağımsız da ekip içinde de çalışmayı severim.", example: "Ich arbeite gern selbstständig und auch im Team.", exampleTr: "Bağımsız da ekip içinde de çalışmayı severim.", category: "iş" },
    { id: 304, day: 61, german: "Ab wann wäre der Einstieg möglich?", pronunciation: "ab van vere der aynştig möglih", turkish: "Başlangıç ne zamandan itibaren mümkün olurdu?", example: "Ab wann wäre der Einstieg möglich?", exampleTr: "Başlangıç ne zamandan itibaren mümkün olurdu?", category: "iş" },
    { id: 305, day: 61, german: "Vielen Dank für das informative Gespräch.", pronunciation: "filen dank für das informative geşpreh", turkish: "Bilgilendirici görüşme için çok teşekkür ederim.", example: "Vielen Dank für das informative Gespräch.", exampleTr: "Bilgilendirici görüşme için çok teşekkür ederim.", category: "iş" },

    // GÜN 62: Toplantı Yönetimi
    { id: 306, day: 62, german: "Können wir die Agenda kurz durchgehen?", pronunciation: "könen vir di agenda kurz durhgeyn", turkish: "Gündemi kısaca gözden geçirebilir miyiz?", example: "Können wir zuerst die Agenda kurz durchgehen?", exampleTr: "Önce gündemi kısaca gözden geçirebilir miyiz?", category: "iş" },
    { id: 307, day: 62, german: "Ich habe dazu noch einen Punkt.", pronunciation: "ih habe datsu noh aynen punkt", turkish: "Bununla ilgili ek bir maddem daha var.", example: "Ich habe dazu noch einen wichtigen Punkt.", exampleTr: "Bununla ilgili önemli bir maddem daha var.", category: "iş" },
    { id: 308, day: 62, german: "Lassen Sie uns die nächsten Schritte festhalten.", pronunciation: "lasen zi uns di nehsten şrite festhalten", turkish: "Sonraki adımları netleştirelim.", example: "Lassen Sie uns die nächsten Schritte festhalten.", exampleTr: "Sonraki adımları netleştirelim.", category: "iş" },
    { id: 309, day: 62, german: "Wer übernimmt welchen Teil?", pronunciation: "ver übernimmt velhen tayl", turkish: "Hangi kısmı kim üstleniyor?", example: "Wer übernimmt welchen Teil des Projekts?", exampleTr: "Projenin hangi kısmını kim üstleniyor?", category: "iş" },
    { id: 310, day: 62, german: "Ich schicke nachher das Protokoll herum.", pronunciation: "ih şike nahher das protokol herum", turkish: "Toplantı tutanağını birazdan göndereceğim.", example: "Ich schicke nachher das Protokoll an alle.", exampleTr: "Toplantı tutanağını birazdan herkese göndereceğim.", category: "iş" },

    // GÜN 63: Proje Yönetimi
    { id: 311, day: 63, german: "Wir liegen leicht hinter dem Zeitplan.", pronunciation: "vir ligen layht hinter dem tsaytplan", turkish: "Takvimin biraz gerisindeyiz.", example: "Wir liegen im Moment leicht hinter dem Zeitplan.", exampleTr: "Şu anda takvimin biraz gerisindeyiz.", category: "iş" },
    { id: 312, day: 63, german: "Dafür brauchen wir mehr Ressourcen.", pronunciation: "dafür brauhen vir mer resursen", turkish: "Bunun için daha fazla kaynağa ihtiyacımız var.", example: "Dafür brauchen wir mehr Ressourcen im Team.", exampleTr: "Bunun için ekipte daha fazla kaynağa ihtiyacımız var.", category: "iş" },
    { id: 313, day: 63, german: "Das Risiko sollten wir früh ansprechen.", pronunciation: "das riziko zolten vir frü anşprehen", turkish: "Bu riski erkenden gündeme getirmeliyiz.", example: "Das Risiko sollten wir früh ansprechen.", exampleTr: "Bu riski erkenden gündeme getirmeliyiz.", category: "iş" },
    { id: 314, day: 63, german: "Die Prioritäten haben sich geändert.", pronunciation: "di prioriteten haben zih geendert", turkish: "Öncelikler değişti.", example: "Seit gestern haben sich die Prioritäten geändert.", exampleTr: "Dünden beri öncelikler değişti.", category: "iş" },
    { id: 315, day: 63, german: "Trotzdem ist das Ziel noch erreichbar.", pronunciation: "trotsdem ist das tsil noh erayhbar", turkish: "Buna rağmen hedef hâlâ ulaşılabilir.", example: "Trotzdem ist das Ziel noch erreichbar.", exampleTr: "Buna rağmen hedef hâlâ ulaşılabilir.", category: "iş" },

    // GÜN 64: E-posta Takibi
    { id: 316, day: 64, german: "Ich wollte höflich nach dem aktuellen Stand fragen.", pronunciation: "ih volte höflih nah dem aktualen ştand fragen", turkish: "Güncel durumu nazikçe sormak istedim.", example: "Ich wollte höflich nach dem Stand fragen.", exampleTr: "Durumu nazikçe sormak istedim.", category: "resmi" },
    { id: 317, day: 64, german: "Haben Sie meine letzte E-Mail erhalten?", pronunciation: "haben zi mayne letste i-mayl erhalten", turkish: "Son e-postamı aldınız mı?", example: "Haben Sie meine letzte E-Mail erhalten?", exampleTr: "Son e-postamı aldınız mı?", category: "resmi" },
    { id: 318, day: 64, german: "Anbei sende ich die aktualisierte Datei.", pronunciation: "anbay zende ih di aktualizirte dayi", turkish: "Güncellenmiş dosyayı ekte gönderiyorum.", example: "Anbei sende ich die aktualisierte Datei.", exampleTr: "Güncellenmiş dosyayı ekte gönderiyorum.", category: "iş" },
    { id: 319, day: 64, german: "Für Rückfragen bin ich jederzeit erreichbar.", pronunciation: "für rükfragen bin ih yeder tsayt erayhbar", turkish: "Sorularınız için her zaman ulaşılabilirim.", example: "Für Rückfragen bin ich jederzeit erreichbar.", exampleTr: "Sorularınız için her zaman ulaşılabilirim.", category: "resmi" },
    { id: 320, day: 64, german: "Ich freue mich auf Ihre Rückmeldung.", pronunciation: "ih froye mih auf ire rükmeldung", turkish: "Geri dönüşünüzü bekliyorum.", example: "Ich freue mich auf Ihre Rückmeldung.", exampleTr: "Geri dönüşünüzü bekliyorum.", category: "resmi" },

    // GÜN 65: Sorun Çözme
    { id: 321, day: 65, german: "Wir müssen die Ursache zuerst verstehen.", pronunciation: "vir müsen di urzahe tsuerst ferşteyen", turkish: "Önce sebebi anlamamız gerekiyor.", example: "Wir müssen zuerst die Ursache verstehen.", exampleTr: "Önce sebebi anlamamız gerekiyor.", category: "iş" },
    { id: 322, day: 65, german: "Gibt es schon eine Übergangslösung?", pronunciation: "gibt es şon ayne übergangslözıng", turkish: "Geçici bir çözüm var mı?", example: "Gibt es schon eine Übergangslösung?", exampleTr: "Geçici bir çözüm var mı?", category: "iş" },
    { id: 323, day: 65, german: "Der Fehler tritt nur selten auf.", pronunciation: "der feyler trit nur zelten auf", turkish: "Hata sadece nadiren ortaya çıkıyor.", example: "Der Fehler tritt nur selten auf.", exampleTr: "Hata sadece nadiren ortaya çıkıyor.", category: "iş" },
    { id: 324, day: 65, german: "Ich dokumentiere alles Schritt für Schritt.", pronunciation: "ih dokumentire ales şrit für şrit", turkish: "Her şeyi adım adım belgeliyorum.", example: "Ich dokumentiere alles Schritt für Schritt.", exampleTr: "Her şeyi adım adım belgeliyorum.", category: "iş" },
    { id: 325, day: 65, german: "Sobald wir mehr wissen, informiere ich das Team.", pronunciation: "zobald vir mer visen, informire ih das tim", turkish: "Daha fazla bilgi edinir edinmez ekibi bilgilendireceğim.", example: "Sobald wir mehr wissen, informiere ich das Team.", exampleTr: "Daha fazla bilgi edinir edinmez ekibi bilgilendireceğim.", category: "iş" },

    // GÜN 66–70
    // GÜN 66: Müşteri Hizmetleri
    { id: 326, day: 66, german: "Wie kann ich Ihnen weiterhelfen?", pronunciation: "vi kan ih inen vayterhelfen", turkish: "Size nasıl yardımcı olabilirim?", example: "Guten Tag, wie kann ich Ihnen weiterhelfen?", exampleTr: "İyi günler, size nasıl yardımcı olabilirim?", category: "iş" },
    { id: 327, day: 66, german: "Es tut mir leid für die Unannehmlichkeiten.", pronunciation: "es tut mir layt für di unanehmlihkayten", turkish: "Yaşanan rahatsızlık için üzgünüm.", example: "Es tut mir leid für die Unannehmlichkeiten.", exampleTr: "Yaşanan rahatsızlık için üzgünüm.", category: "iş" },
    { id: 328, day: 66, german: "Ich prüfe das sofort für Sie.", pronunciation: "ih prüfe das zofort für zi", turkish: "Bunu sizin için hemen kontrol ediyorum.", example: "Einen Moment, ich prüfe das sofort für Sie.", exampleTr: "Bir dakika, bunu sizin için hemen kontrol ediyorum.", category: "iş" },
    { id: 329, day: 66, german: "Darf ich kurz Ihre Kundennummer haben?", pronunciation: "darf ih kurz ire kundenumer haben", turkish: "Müşteri numaranızı kısaca alabilir miyim?", example: "Darf ich kurz Ihre Kundennummer haben?", exampleTr: "Müşteri numaranızı kısaca alabilir miyim?", category: "iş" },
    { id: 330, day: 66, german: "Vielen Dank für Ihre Geduld.", pronunciation: "filen dank für ire gedult", turkish: "Sabrınız için çok teşekkür ederim.", example: "Vielen Dank für Ihre Geduld.", exampleTr: "Sabrınız için çok teşekkür ederim.", category: "iş" },

    // GÜN 67: Uzaktan Çalışma
    { id: 331, day: 67, german: "Ich arbeite heute im Homeoffice.", pronunciation: "ih arbayte hoyte im homofis", turkish: "Bugün evden çalışıyorum.", example: "Ich arbeite heute im Homeoffice.", exampleTr: "Bugün evden çalışıyorum.", category: "iş" },
    { id: 332, day: 67, german: "Können Sie mich im Videoanruf hören?", pronunciation: "könen zi mih im videoanruf hören", turkish: "Beni görüntülü aramada duyabiliyor musunuz?", example: "Können Sie mich im Videoanruf gut hören?", exampleTr: "Beni görüntülü aramada iyi duyabiliyor musunuz?", category: "iş" },
    { id: 333, day: 67, german: "Die Verbindung ist gerade instabil.", pronunciation: "di ferbindung ist grade instabil", turkish: "Bağlantı şu anda kararsız.", example: "Entschuldigung, die Verbindung ist gerade instabil.", exampleTr: "Affedersiniz, bağlantı şu anda kararsız.", category: "iş" },
    { id: 334, day: 67, german: "Ich teile gleich meinen Bildschirm.", pronunciation: "ih tayle glayh maynen bildşirm", turkish: "Birazdan ekranımı paylaşacağım.", example: "Ich teile gleich meinen Bildschirm.", exampleTr: "Birazdan ekranımı paylaşacağım.", category: "iş" },
    { id: 335, day: 67, german: "Lassen Sie uns das Meeting aufnehmen.", pronunciation: "lasen zi uns das miting aufnemen", turkish: "Toplantıyı kaydedelim.", example: "Lassen Sie uns das Meeting aufnehmen.", exampleTr: "Toplantıyı kaydedelim.", category: "iş" },

    // GÜN 68: Ağ Kurma
    { id: 336, day: 68, german: "Darf ich Ihnen meine Karte geben?", pronunciation: "darf ih inen mayne karte geben", turkish: "Size kartvizitimi verebilir miyim?", example: "Darf ich Ihnen meine Karte geben?", exampleTr: "Size kartvizitimi verebilir miyim?", category: "iş" },
    { id: 337, day: 68, german: "In welchem Bereich arbeiten Sie genau?", pronunciation: "in velhem berayh arbayten zi genou", turkish: "Tam olarak hangi alanda çalışıyorsunuz?", example: "In welchem Bereich arbeiten Sie genau?", exampleTr: "Tam olarak hangi alanda çalışıyorsunuz?", category: "iş" },
    { id: 338, day: 68, german: "Ihr Vortrag war sehr inspirierend.", pronunciation: "ir fortrag var zeyr inspirirend", turkish: "Sunumunuz çok ilham vericiydi.", example: "Ihr Vortrag war sehr inspirierend.", exampleTr: "Sunumunuz çok ilham vericiydi.", category: "iş" },
    { id: 339, day: 68, german: "Wir sollten in Kontakt bleiben.", pronunciation: "vir zolten in kontakt blayben", turkish: "İletişimde kalmalıyız.", example: "Wir sollten in Kontakt bleiben.", exampleTr: "İletişimde kalmalıyız.", category: "sosyal" },
    { id: 340, day: 68, german: "Ich melde mich nächste Woche bei Ihnen.", pronunciation: "ih melde mih nehste vohe bay inen", turkish: "Gelecek hafta sizinle iletişime geçeceğim.", example: "Ich melde mich nächste Woche bei Ihnen.", exampleTr: "Gelecek hafta sizinle iletişime geçeceğim.", category: "iş" },

    // GÜN 69: Müzakere
    { id: 341, day: 69, german: "Unter diesen Bedingungen ist das schwer umzusetzen.", pronunciation: "unter dizen bedingungen ist das şver umtsetsen", turkish: "Bu şartlar altında bunu uygulamak zor.", example: "Unter diesen Bedingungen ist das schwer umzusetzen.", exampleTr: "Bu şartlar altında bunu uygulamak zor.", category: "iş" },
    { id: 342, day: 69, german: "Können wir einen fairen Mittelweg finden?", pronunciation: "könen vir aynen feren mitelveg finden", turkish: "Adil bir orta yol bulabilir miyiz?", example: "Können wir einen fairen Mittelweg finden?", exampleTr: "Adil bir orta yol bulabilir miyiz?", category: "iş" },
    { id: 343, day: 69, german: "Das Angebot klingt grundsätzlich interessant.", pronunciation: "das angebot klingt grundzetzlih interesant", turkish: "Teklif temel olarak ilginç görünüyor.", example: "Das Angebot klingt grundsätzlich interessant.", exampleTr: "Teklif temel olarak ilginç görünüyor.", category: "iş" },
    { id: 344, day: 69, german: "Ich brauche noch etwas Bedenkzeit.", pronunciation: "ih brauhe noh etvas bedenktsayt", turkish: "Biraz daha düşünme süresine ihtiyacım var.", example: "Ich brauche noch etwas Bedenkzeit.", exampleTr: "Biraz daha düşünme süresine ihtiyacım var.", category: "iş" },
    { id: 345, day: 69, german: "Dann halten wir das so fest.", pronunciation: "dan halten vir das zo fest", turkish: "O zaman bunu böyle netleştirelim.", example: "Dann halten wir das so fest.", exampleTr: "O zaman bunu böyle netleştirelim.", category: "iş" },

    // GÜN 70: Kariyer Gelişimi
    { id: 346, day: 70, german: "Ich möchte mich beruflich weiterentwickeln.", pronunciation: "ih möşte mih beruflih vayterentvikeln", turkish: "Mesleki olarak kendimi geliştirmek istiyorum.", example: "Ich möchte mich beruflich weiterentwickeln.", exampleTr: "Mesleki olarak kendimi geliştirmek istiyorum.", category: "iş" },
    { id: 347, day: 70, german: "Welche Weiterbildung würden Sie empfehlen?", pronunciation: "velhe vayterbildung vürden zi empfelen", turkish: "Hangi eğitimi önerirsiniz?", example: "Welche Weiterbildung würden Sie empfehlen?", exampleTr: "Hangi eğitimi önerirsiniz?", category: "iş" },
    { id: 348, day: 70, german: "Mir ist langfristige Perspektive wichtig.", pronunciation: "mir ist langfristiğe perspektive vihtig", turkish: "Uzun vadeli bir perspektif benim için önemli.", example: "Mir ist langfristige Perspektive wichtig.", exampleTr: "Uzun vadeli bir perspektif benim için önemli.", category: "iş" },
    { id: 349, day: 70, german: "Ich übernehme gern mehr Verantwortung.", pronunciation: "ih überneme gern mer ferantvortung", turkish: "Daha fazla sorumluluk almayı severim.", example: "Ich übernehme gern mehr Verantwortung.", exampleTr: "Daha fazla sorumluluk almayı severim.", category: "iş" },
    { id: 350, day: 70, german: "Dieses Projekt ist eine gute Lernchance.", pronunciation: "dizes proyekt ist ayne gute lernşanse", turkish: "Bu proje iyi bir öğrenme fırsatı.", example: "Dieses Projekt ist eine gute Lernchance.", exampleTr: "Bu proje iyi bir öğrenme fırsatı.", category: "iş" },

    // GÜN 71–75
    // GÜN 71: Doktor Randevusu
    { id: 351, day: 71, german: "Ich habe seit zwei Tagen starke Kopfschmerzen.", pronunciation: "ih habe zayt tsvay tagen ştarke kopfşmertsen", turkish: "İki gündür şiddetli baş ağrım var.", example: "Ich habe seit zwei Tagen starke Kopfschmerzen.", exampleTr: "İki gündür şiddetli baş ağrım var.", category: "günlük" },
    { id: 352, day: 71, german: "Brauche ich dafür einen Termin?", pronunciation: "brauhe ih dafür aynen termin", turkish: "Bunun için randevu almam gerekiyor mu?", example: "Brauche ich dafür einen Termin?", exampleTr: "Bunun için randevu almam gerekiyor mu?", category: "günlük" },
    { id: 353, day: 71, german: "Könnten Sie mir etwas dagegen verschreiben?", pronunciation: "könten zi mir etvas dagegən ferşrayben", turkish: "Bunun için bana bir şey yazabilir misiniz?", example: "Könnten Sie mir etwas dagegen verschreiben?", exampleTr: "Bunun için bana bir şey yazabilir misiniz?", category: "günlük" },
    { id: 354, day: 71, german: "Soll ich mich schonen oder arbeiten?", pronunciation: "zol ih mih şonen oder arbayten", turkish: "Dinlenmeli miyim yoksa çalışabilir miyim?", example: "Soll ich mich schonen oder arbeiten?", exampleTr: "Dinlenmeli miyim yoksa çalışabilir miyim?", category: "günlük" },
    { id: 355, day: 71, german: "Wann soll ich zur Kontrolle wiederkommen?", pronunciation: "van zol ih tsur kontrolə viderkomen", turkish: "Kontrol için ne zaman tekrar gelmeliyim?", example: "Wann soll ich zur Kontrolle wiederkommen?", exampleTr: "Kontrol için ne zaman tekrar gelmeliyim?", category: "günlük" },

    // GÜN 72: Eczane
    { id: 356, day: 72, german: "Ich brauche etwas gegen Halsschmerzen.", pronunciation: "ih brauhe etvas gegen halsşmertsen", turkish: "Boğaz ağrısına karşı bir şeye ihtiyacım var.", example: "Ich brauche etwas gegen Halsschmerzen.", exampleTr: "Boğaz ağrısına karşı bir şeye ihtiyacım var.", category: "günlük" },
    { id: 357, day: 72, german: "Gibt es das auch ohne Rezept?", pronunciation: "gibt es das auh one retsept", turkish: "Bu reçetesiz de var mı?", example: "Gibt es das auch ohne Rezept?", exampleTr: "Bu reçetesiz de var mı?", category: "günlük" },
    { id: 358, day: 72, german: "Wie oft soll ich das einnehmen?", pronunciation: "vi oft zol ih das aynnemen", turkish: "Bunu ne sıklıkla kullanmalıyım?", example: "Wie oft soll ich das einnehmen?", exampleTr: "Bunu ne sıklıkla kullanmalıyım?", category: "günlük" },
    { id: 359, day: 72, german: "Hat dieses Medikament Nebenwirkungen?", pronunciation: "hat dizes medikament nebenvirkungen", turkish: "Bu ilacın yan etkileri var mı?", example: "Hat dieses Medikament Nebenwirkungen?", exampleTr: "Bu ilacın yan etkileri var mı?", category: "günlük" },
    { id: 360, day: 72, german: "Vielen Dank für die Beratung.", pronunciation: "filen dank für di beratung", turkish: "Danışmanlığınız için çok teşekkür ederim.", example: "Vielen Dank für die Beratung.", exampleTr: "Danışmanlığınız için çok teşekkür ederim.", category: "sosyal" },

    // GÜN 73: Sigorta İşlemleri
    { id: 361, day: 73, german: "Ich möchte einen Schaden melden.", pronunciation: "ih möşte aynen şaden melden", turkish: "Bir hasar bildirmek istiyorum.", example: "Ich möchte einen Schaden melden.", exampleTr: "Bir hasar bildirmek istiyorum.", category: "resmi" },
    { id: 362, day: 73, german: "Welche Unterlagen brauchen Sie dafür?", pronunciation: "velhe unterlagen brauhen zi dafür", turkish: "Bunun için hangi belgelere ihtiyacınız var?", example: "Welche Unterlagen brauchen Sie dafür?", exampleTr: "Bunun için hangi belgelere ihtiyacınız var?", category: "resmi" },
    { id: 363, day: 73, german: "Der Vorfall ist gestern passiert.", pronunciation: "der forfal ist gesten pasirt", turkish: "Olay dün gerçekleşti.", example: "Der Vorfall ist gestern passiert.", exampleTr: "Olay dün gerçekleşti.", category: "resmi" },
    { id: 364, day: 73, german: "Ich habe schon Fotos gemacht.", pronunciation: "ih habe şon fotos gemaht", turkish: "Zaten fotoğrafları çektim.", example: "Ich habe schon Fotos gemacht.", exampleTr: "Zaten fotoğrafları çektim.", category: "resmi" },
    { id: 365, day: 73, german: "Wie lange dauert die Bearbeitung ungefähr?", pronunciation: "vi lange dauert di bearbaytung ungefer", turkish: "İşlem yaklaşık ne kadar sürer?", example: "Wie lange dauert die Bearbeitung ungefähr?", exampleTr: "İşlem yaklaşık ne kadar sürer?", category: "resmi" },

    // GÜN 74: Acil Durum
    { id: 366, day: 74, german: "Ich brauche dringend Hilfe.", pronunciation: "ih brauhe dringent hilfe", turkish: "Acil yardıma ihtiyacım var.", example: "Ich brauche dringend Hilfe.", exampleTr: "Acil yardıma ihtiyacım var.", category: "günlük" },
    { id: 367, day: 74, german: "Wo ist die nächste Polizeistation?", pronunciation: "vo ist di nehste politsayshtatsyon", turkish: "En yakın polis karakolu nerede?", example: "Wo ist die nächste Polizeistation?", exampleTr: "En yakın polis karakolu nerede?", category: "günlük" },
    { id: 368, day: 74, german: "Mein Portemonnaie wurde gestohlen.", pronunciation: "mayn portmonay vurde geştolen", turkish: "Cüzdanım çalındı.", example: "Mein Portemonnaie wurde gestohlen.", exampleTr: "Cüzdanım çalındı.", category: "günlük" },
    { id: 369, day: 74, german: "Können Sie das bitte aufnehmen?", pronunciation: "könen zi das bite aufnemen", turkish: "Bunu kayda alabilir misiniz lütfen?", example: "Können Sie das bitte aufnehmen?", exampleTr: "Bunu kayda alabilir misiniz lütfen?", category: "resmi" },
    { id: 370, day: 74, german: "Ich brauche eine schriftliche Bestätigung.", pronunciation: "ih brauhe ayne şriftlihe beştetigung", turkish: "Yazılı bir belgeye ihtiyacım var.", example: "Ich brauche eine schriftliche Bestätigung.", exampleTr: "Yazılı bir belgeye ihtiyacım var.", category: "resmi" },

    // GÜN 75: Çocuk ve Aile Düzeni
    { id: 371, day: 75, german: "Wer kann heute auf die Kinder aufpassen?", pronunciation: "ver kan hoyte auf di kinder aufpasen", turkish: "Bugün çocuklara kim bakabilir?", example: "Wer kann heute auf die Kinder aufpassen?", exampleTr: "Bugün çocuklara kim bakabilir?", category: "günlük" },
    { id: 372, day: 75, german: "Die Kita ist morgen geschlossen.", pronunciation: "di kita ist morgen geşlosen", turkish: "Yuva yarın kapalı.", example: "Die Kita ist morgen geschlossen.", exampleTr: "Yuva yarın kapalı.", category: "günlük" },
    { id: 373, day: 75, german: "Ich hole sie um vier Uhr ab.", pronunciation: "ih hole zi um fir ur ab", turkish: "Onları saat dörtte alacağım.", example: "Ich hole sie um vier Uhr ab.", exampleTr: "Onları saat dörtte alacağım.", category: "günlük" },
    { id: 374, day: 75, german: "Bitte geben Sie mir kurz Bescheid.", pronunciation: "bite geben zi mir kurz beşayd", turkish: "Lütfen bana kısaca haber verin.", example: "Bitte geben Sie mir kurz Bescheid.", exampleTr: "Lütfen bana kısaca haber verin.", category: "günlük" },
    { id: 375, day: 75, german: "Alles ist gut organisiert.", pronunciation: "ales ist gut organiziert", turkish: "Her şey iyi organize edildi.", example: "Jetzt ist alles gut organisiert.", exampleTr: "Şimdi her şey iyi organize edildi.", category: "sosyal" },

    // GÜN 76–80
    // GÜN 76: Okul ve Evrak
    { id: 376, day: 76, german: "Ich muss ein Formular für die Schule ausfüllen.", pronunciation: "ih mus ayn formular für di şule ausfülen", turkish: "Okul için bir form doldurmam gerekiyor.", example: "Ich muss heute noch ein Formular für die Schule ausfüllen.", exampleTr: "Bugün okul için bir form doldurmam gerekiyor.", category: "günlük" },
    { id: 377, day: 76, german: "Wann ist der Elternabend?", pronunciation: "van ist der elternabent", turkish: "Veli toplantısı ne zaman?", example: "Können Sie mir sagen, wann der Elternabend ist?", exampleTr: "Veli toplantısının ne zaman olduğunu söyleyebilir misiniz?", category: "günlük" },
    { id: 378, day: 76, german: "Könnten Sie mir die Unterlagen per E-Mail schicken?", pronunciation: "könten zi mir di unterlagen per i-mayl şiken", turkish: "Belgeleri bana e-posta ile gönderebilir misiniz?", example: "Könnten Sie mir die Unterlagen bitte per E-Mail schicken?", exampleTr: "Belgeleri lütfen bana e-posta ile gönderebilir misiniz?", category: "resmi" },
    { id: 379, day: 76, german: "Mein Kind ist heute krank.", pronunciation: "mayn kind ist hoyte krank", turkish: "Çocuğum bugün hasta.", example: "Mein Kind ist heute krank und kommt nicht in die Schule.", exampleTr: "Çocuğum bugün hasta ve okula gelemeyecek.", category: "günlük" },
    { id: 380, day: 76, german: "Vielen Dank für die Information.", pronunciation: "filen dank für di information", turkish: "Bilgi için çok teşekkür ederim.", example: "Vielen Dank für die Information und Ihre Hilfe.", exampleTr: "Bilgi ve yardımınız için çok teşekkür ederim.", category: "sosyal" },

    // GÜN 77: Trafik ve Yol
    { id: 381, day: 77, german: "Gibt es hier in der Nähe einen Parkplatz?", pronunciation: "gibt es hir in der nehe aynen parkplats", turkish: "Buraya yakın bir otopark var mı?", example: "Entschuldigung, gibt es hier in der Nähe einen Parkplatz?", exampleTr: "Affedersiniz, burada yakınlarda bir otopark var mı?", category: "seyahat" },
    { id: 382, day: 77, german: "Ich stehe im Stau.", pronunciation: "ih ştehe im ştau", turkish: "Trafikte kaldım.", example: "Ich komme später, weil ich im Stau stehe.", exampleTr: "Trafikte kaldığım için daha geç geleceğim.", category: "günlük" },
    { id: 383, day: 77, german: "Wo kann ich ein Ticket kaufen?", pronunciation: "vo kan ih ayn tiket kaufen", turkish: "Bilet nereden alabilirim?", example: "Wo kann ich hier ein Ticket kaufen?", exampleTr: "Burada bileti nereden alabilirim?", category: "seyahat" },
    { id: 384, day: 77, german: "Ist diese Straße gesperrt?", pronunciation: "ist dize ştrase geşpert", turkish: "Bu yol kapalı mı?", example: "Ist diese Straße heute gesperrt?", exampleTr: "Bu yol bugün kapalı mı?", category: "seyahat" },
    { id: 385, day: 77, german: "Wie lange dauert die Umleitung?", pronunciation: "vi lange dauert di umlaytung", turkish: "Alternatif yol ne kadar sürer?", example: "Wissen Sie, wie lange die Umleitung dauert?", exampleTr: "Alternatif yolun ne kadar sürdüğünü biliyor musunuz?", category: "seyahat" },

    // GÜN 78: Araç Servisi
    { id: 386, day: 78, german: "Mein Auto macht ein seltsames Geräusch.", pronunciation: "mayn auto maht ayn zeltzames geroyş", turkish: "Arabam garip bir ses çıkarıyor.", example: "Seit gestern macht mein Auto ein seltsames Geräusch.", exampleTr: "Dünden beri arabam garip bir ses çıkarıyor.", category: "günlük" },
    { id: 387, day: 78, german: "Könnten Sie das bitte überprüfen?", pronunciation: "könten zi das bite überprüfen", turkish: "Bunu kontrol edebilir misiniz lütfen?", example: "Könnten Sie das Auto bitte überprüfen?", exampleTr: "Arabayı kontrol edebilir misiniz lütfen?", category: "resmi" },
    { id: 388, day: 78, german: "Wann wäre ein Termin in der Werkstatt frei?", pronunciation: "van vere ayn termin in der verkştat fray", turkish: "Serviste ne zaman boş randevu var?", example: "Wann wäre ein Termin in der Werkstatt frei?", exampleTr: "Serviste ne zaman boş randevu var?", category: "resmi" },
    { id: 389, day: 78, german: "Wie teuer wird die Reparatur ungefähr?", pronunciation: "vi toyır virt di reparatur ungefer", turkish: "Tamir yaklaşık ne kadar tutar?", example: "Wie teuer wird die Reparatur ungefähr?", exampleTr: "Tamir yaklaşık ne kadar tutar?", category: "günlük" },
    { id: 390, day: 78, german: "Ich brauche das Auto spätestens morgen.", pronunciation: "ih brauhe das auto şpetestens morgen", turkish: "Arabaya en geç yarın ihtiyacım var.", example: "Ich brauche das Auto spätestens morgen früh.", exampleTr: "Arabaya en geç yarın sabah ihtiyacım var.", category: "günlük" },

    // GÜN 79: Bisiklet ve Toplu Taşıma
    { id: 391, day: 79, german: "Ich fahre meistens mit dem Fahrrad.", pronunciation: "ih fare maystens mit dem farrat", turkish: "Genelde bisikletle gidiyorum.", example: "Im Sommer fahre ich meistens mit dem Fahrrad.", exampleTr: "Yazın genelde bisikletle gidiyorum.", category: "günlük" },
    { id: 392, day: 79, german: "Gibt es hier einen Radweg?", pronunciation: "gibt es hir aynen ratveg", turkish: "Burada bisiklet yolu var mı?", example: "Gibt es hier einen sicheren Radweg?", exampleTr: "Burada güvenli bir bisiklet yolu var mı?", category: "seyahat" },
    { id: 393, day: 79, german: "Die U-Bahn hat heute Verspätung.", pronunciation: "di u-ban hat hoyte ferşpetung", turkish: "Metro bugün gecikiyor.", example: "Die U-Bahn hat heute wieder Verspätung.", exampleTr: "Metro bugün yine gecikiyor.", category: "seyahat" },
    { id: 394, day: 79, german: "Muss ich hier umsteigen?", pronunciation: "mus ih hir umştaygen", turkish: "Burada aktarma yapmam gerekiyor mu?", example: "Muss ich hier umsteigen oder weiterfahren?", exampleTr: "Burada aktarma yapmam gerekiyor mu yoksa devam mı etmeliyim?", category: "seyahat" },
    { id: 395, day: 79, german: "Welches Ticket ist am günstigsten?", pronunciation: "velhes tiket ist am günstigsten", turkish: "En uygun bilet hangisi?", example: "Welches Ticket ist für heute am günstigsten?", exampleTr: "Bugün için en uygun bilet hangisi?", category: "seyahat" },

    // GÜN 80: Havalimanı
    { id: 396, day: 80, german: "Wo ist der Check-in Schalter?", pronunciation: "vo ist der çek-in şalter", turkish: "Check-in bankosu nerede?", example: "Entschuldigung, wo ist der Check-in Schalter?", exampleTr: "Affedersiniz, check-in bankosu nerede?", category: "seyahat" },
    { id: 397, day: 80, german: "Ich reise nur mit Handgepäck.", pronunciation: "ih rayze nur mit hantgepäk", turkish: "Sadece el bagajıyla seyahat ediyorum.", example: "Ich reise diesmal nur mit Handgepäck.", exampleTr: "Bu kez sadece el bagajıyla seyahat ediyorum.", category: "seyahat" },
    { id: 398, day: 80, german: "Wann beginnt das Boarding?", pronunciation: "van begint das bording", turkish: "Boarding ne zaman başlıyor?", example: "Wissen Sie, wann das Boarding beginnt?", exampleTr: "Boarding'in ne zaman başladığını biliyor musunuz?", category: "seyahat" },
    { id: 399, day: 80, german: "Mein Flug wurde verschoben.", pronunciation: "mayn flug vurde ferşoben", turkish: "Uçuşum ertelendi.", example: "Mein Flug wurde um zwei Stunden verschoben.", exampleTr: "Uçuşum iki saat ertelendi.", category: "seyahat" },
    { id: 400, day: 80, german: "Wo kann ich meinen Koffer abholen?", pronunciation: "vo kan ih maynen kofer apholen", turkish: "Valizimi nereden alabilirim?", example: "Wo kann ich meinen Koffer nach der Landung abholen?", exampleTr: "İnişten sonra valizimi nereden alabilirim?", category: "seyahat" },

    // GÜN 81–85
    // GÜN 81: Otel Sorunları
    { id: 401, day: 81, german: "Mein Zimmer wurde noch nicht gereinigt.", pronunciation: "mayn tsimır vurde noh niht geraynigt", turkish: "Odam henüz temizlenmedi.", example: "Mein Zimmer wurde heute noch nicht gereinigt.", exampleTr: "Odam bugün henüz temizlenmedi.", category: "seyahat" },
    { id: 402, day: 81, german: "Die Klimaanlage funktioniert nicht richtig.", pronunciation: "di klimaanlage funktioniert niht rihtig", turkish: "Klima düzgün çalışmıyor.", example: "Die Klimaanlage funktioniert nicht richtig.", exampleTr: "Klima düzgün çalışmıyor.", category: "seyahat" },
    { id: 403, day: 81, german: "Könnten wir das Zimmer wechseln?", pronunciation: "könten vir das tsimır vehseln", turkish: "Odayı değiştirebilir miyiz?", example: "Könnten wir bitte das Zimmer wechseln?", exampleTr: "Odayı değiştirebilir miyiz lütfen?", category: "seyahat" },
    { id: 404, day: 81, german: "Das WLAN ist im Zimmer sehr langsam.", pronunciation: "das ve-lan ist im tsimır zeyr langzam", turkish: "Odada internet çok yavaş.", example: "Das WLAN ist in meinem Zimmer sehr langsam.", exampleTr: "Benim odamda internet çok yavaş.", category: "seyahat" },
    { id: 405, day: 81, german: "Vielen Dank für Ihre schnelle Hilfe.", pronunciation: "filen dank für ire şnele hilfe", turkish: "Hızlı yardımınız için çok teşekkür ederim.", example: "Vielen Dank für Ihre schnelle Hilfe.", exampleTr: "Hızlı yardımınız için çok teşekkür ederim.", category: "sosyal" },

    // GÜN 82: Restoran Rezervasyonu
    { id: 406, day: 82, german: "Ich möchte einen Tisch für heute Abend reservieren.", pronunciation: "ih möşte aynen tiş für hoyte abent rezerviren", turkish: "Bu akşam için masa ayırtmak istiyorum.", example: "Ich möchte einen Tisch für heute Abend reservieren.", exampleTr: "Bu akşam için masa ayırtmak istiyorum.", category: "günlük" },
    { id: 407, day: 82, german: "Haben Sie noch einen Platz für zwei Personen?", pronunciation: "haben zi noh aynen plats für tsvay personen", turkish: "İki kişi için boş yeriniz var mı?", example: "Haben Sie heute noch einen Platz für zwei Personen?", exampleTr: "Bugün iki kişi için boş yeriniz var mı?", category: "günlük" },
    { id: 408, day: 82, german: "Könnten wir am Fenster sitzen?", pronunciation: "könten vir am fenster zitsen", turkish: "Cam kenarında oturabilir miyiz?", example: "Wenn möglich, könnten wir am Fenster sitzen?", exampleTr: "Mümkünse cam kenarında oturabilir miyiz?", category: "günlük" },
    { id: 409, day: 82, german: "Gibt es auch vegetarische Gerichte?", pronunciation: "gibt es auh vejetarişe gerihte", turkish: "Vejetaryen yemekler de var mı?", example: "Gibt es auf der Karte auch vegetarische Gerichte?", exampleTr: "Menüde vejetaryen yemekler de var mı?", category: "günlük" },
    { id: 410, day: 82, german: "Die Reservierung läuft auf meinen Namen.", pronunciation: "di rezervirung loyft auf maynen namen", turkish: "Rezervasyon benim adıma.", example: "Die Reservierung läuft auf meinen Namen.", exampleTr: "Rezervasyon benim adıma.", category: "günlük" },

    // GÜN 83: Seyahat Planlama
    { id: 411, day: 83, german: "Ich suche eine günstige Verbindung nach München.", pronunciation: "ih zuhe ayne günstige ferbindung nah münhen", turkish: "Münih'e uygun fiyatlı bir bağlantı arıyorum.", example: "Ich suche eine günstige Verbindung nach München.", exampleTr: "Münih'e uygun fiyatlı bir bağlantı arıyorum.", category: "seyahat" },
    { id: 412, day: 83, german: "Sollten wir die Tickets im Voraus buchen?", pronunciation: "zolten vir di tikets im foraus buhen", turkish: "Biletleri önceden ayırtmalı mıyız?", example: "Sollten wir die Tickets lieber im Voraus buchen?", exampleTr: "Biletleri önceden ayırtmamız daha mı iyi olur?", category: "seyahat" },
    { id: 413, day: 83, german: "Wie lange dauert die Fahrt insgesamt?", pronunciation: "vi lange dauert di fart insgezamt", turkish: "Yolculuk toplamda ne kadar sürüyor?", example: "Wie lange dauert die Fahrt insgesamt?", exampleTr: "Yolculuk toplamda ne kadar sürüyor?", category: "seyahat" },
    { id: 414, day: 83, german: "Gibt es unterwegs einen Umstieg?", pronunciation: "gibt es untervegs aynen umştig", turkish: "Yolda aktarma var mı?", example: "Gibt es unterwegs einen Umstieg?", exampleTr: "Yolda aktarma var mı?", category: "seyahat" },
    { id: 415, day: 83, german: "Wir sollten früh genug losfahren.", pronunciation: "vir zolten frü genuk losfaren", turkish: "Yeterince erken çıkmalıyız.", example: "Wir sollten früh genug losfahren, um Stress zu vermeiden.", exampleTr: "Stresten kaçınmak için yeterince erken çıkmalıyız.", category: "seyahat" },

    // GÜN 84: Hava Kaynaklı Gecikmeler
    { id: 416, day: 84, german: "Wegen des Wetters kommt es zu Verspätungen.", pronunciation: "vegen des veters komt es tsu ferşpetungen", turkish: "Hava nedeniyle gecikmeler yaşanıyor.", example: "Wegen des Wetters kommt es heute zu Verspätungen.", exampleTr: "Bugün hava nedeniyle gecikmeler yaşanıyor.", category: "seyahat" },
    { id: 417, day: 84, german: "Der Zug fällt leider aus.", pronunciation: "der tsug felt layder aus", turkish: "Tren maalesef iptal oldu.", example: "Der Zug fällt heute leider aus.", exampleTr: "Tren bugün maalesef iptal oldu.", category: "seyahat" },
    { id: 418, day: 84, german: "Gibt es eine alternative Route?", pronunciation: "gibt es ayne alternative rutə", turkish: "Alternatif bir rota var mı?", example: "Gibt es eine alternative Route nach Berlin?", exampleTr: "Berlin'e alternatif bir rota var mı?", category: "seyahat" },
    { id: 419, day: 84, german: "Ich komme wahrscheinlich später an.", pronunciation: "ih kome varşaynlih şpeter an", turkish: "Muhtemelen daha geç varacağım.", example: "Ich komme wahrscheinlich später an als geplant.", exampleTr: "Muhtemelen planlanandan daha geç varacağım.", category: "günlük" },
    { id: 420, day: 84, german: "Bitte informieren Sie mich über Änderungen.", pronunciation: "bite informiren zi mih über enderungen", turkish: "Lütfen değişiklikler hakkında beni bilgilendirin.", example: "Bitte informieren Sie mich über alle Änderungen.", exampleTr: "Lütfen tüm değişiklikler hakkında beni bilgilendirin.", category: "resmi" },

    // GÜN 85: Doğa ve Gezi
    { id: 421, day: 85, german: "Die Aussicht von hier ist wunderschön.", pronunciation: "di ausziht fon hir ist vundırşön", turkish: "Buradan manzara çok güzel.", example: "Die Aussicht von hier ist wirklich wunderschön.", exampleTr: "Buradan manzara gerçekten çok güzel.", category: "sosyal" },
    { id: 422, day: 85, german: "Wollen wir noch ein Stück weitergehen?", pronunciation: "volen vir noh ayn ştük vaytergeyn", turkish: "Biraz daha devam edelim mi?", example: "Wollen wir noch ein Stück weitergehen?", exampleTr: "Biraz daha devam edelim mi?", category: "sosyal" },
    { id: 423, day: 85, german: "Ich brauche kurz eine Pause.", pronunciation: "ih brauhe kurz ayne pauze", turkish: "Kısa bir molaya ihtiyacım var.", example: "Ich brauche kurz eine Pause zum Ausruhen.", exampleTr: "Dinlenmek için kısa bir molaya ihtiyacım var.", category: "günlük" },
    { id: 424, day: 85, german: "Hast du genug Wasser dabei?", pronunciation: "hast du genuk vaser dabay", turkish: "Yanında yeterince su var mı?", example: "Hast du genug Wasser dabei für die Wanderung?", exampleTr: "Yürüyüş için yanında yeterince su var mı?", category: "sosyal" },
    { id: 425, day: 85, german: "Das war ein wirklich schöner Tag.", pronunciation: "das var ayn virklih şöner tag", turkish: "Gerçekten çok güzel bir gündü.", example: "Das war ein wirklich schöner Tag in der Natur.", exampleTr: "Doğada gerçekten çok güzel bir gündü.", category: "sosyal" },

    // GÜN 86–90
    // GÜN 86: Arkadaşlık
    { id: 426, day: 86, german: "Es ist schön, Zeit mit dir zu verbringen.", pronunciation: "es ist şön, tsayt mit dir tsu ferbringen", turkish: "Seninle vakit geçirmek güzel.", example: "Es ist immer schön, Zeit mit dir zu verbringen.", exampleTr: "Seninle vakit geçirmek her zaman güzel.", category: "sosyal" },
    { id: 427, day: 86, german: "Danke, dass du mir zugehört hast.", pronunciation: "danke, das du mir tsugehört hast", turkish: "Beni dinlediğin için teşekkür ederim.", example: "Danke, dass du mir zugehört hast.", exampleTr: "Beni dinlediğin için teşekkür ederim.", category: "sosyal" },
    { id: 428, day: 86, german: "Ich kann mich auf dich verlassen.", pronunciation: "ih kan mih auf dih ferlasen", turkish: "Sana güvenebilirim.", example: "Ich kann mich immer auf dich verlassen.", exampleTr: "Her zaman sana güvenebilirim.", category: "sosyal" },
    { id: 429, day: 86, german: "Melde dich, wenn du etwas brauchst.", pronunciation: "melde dih, ven du etvas brauhst", turkish: "Bir şeye ihtiyacın olursa haber ver.", example: "Melde dich jederzeit, wenn du etwas brauchst.", exampleTr: "Bir şeye ihtiyacın olursa her zaman haber ver.", category: "sosyal" },
    { id: 430, day: 86, german: "Freunde machen das Leben leichter.", pronunciation: "froynde mahen das leben layhter", turkish: "Arkadaşlar hayatı kolaylaştırır.", example: "Gute Freunde machen das Leben leichter.", exampleTr: "İyi arkadaşlar hayatı kolaylaştırır.", category: "sosyal" },

    // GÜN 87: Davetler
    { id: 431, day: 87, german: "Möchtest du am Freitag vorbeikommen?", pronunciation: "möhtest du am fraytag forbaykomen", turkish: "Cuma günü uğramak ister misin?", example: "Möchtest du am Freitagabend vorbeikommen?", exampleTr: "Cuma akşamı uğramak ister misin?", category: "sosyal" },
    { id: 432, day: 87, german: "Ich lade ein paar Leute zu mir nach Hause ein.", pronunciation: "ih lade ayn par loyte tsu mir nah hauze ayn", turkish: "Birkaç kişiyi eve davet ediyorum.", example: "Ich lade am Wochenende ein paar Leute zu mir nach Hause ein.", exampleTr: "Hafta sonu birkaç kişiyi eve davet ediyorum.", category: "sosyal" },
    { id: 433, day: 87, german: "Sag mir bitte Bescheid, ob du kommen kannst.", pronunciation: "zag mir bite beşayd, ob du komen kanst", turkish: "Gelebilirsen lütfen bana haber ver.", example: "Sag mir bitte Bescheid, ob du kommen kannst.", exampleTr: "Gelebilirsen lütfen bana haber ver.", category: "sosyal" },
    { id: 434, day: 87, german: "Soll ich etwas mitbringen?", pronunciation: "zol ih etvas mitbringen", turkish: "Bir şey getireyim mi?", example: "Soll ich etwas zu essen oder trinken mitbringen?", exampleTr: "Yiyecek ya da içecek bir şey getireyim mi?", category: "sosyal" },
    { id: 435, day: 87, german: "Das wird bestimmt ein schöner Abend.", pronunciation: "das virt beştimt ayn şöner abent", turkish: "Kesinlikle güzel bir akşam olacak.", example: "Mit allen zusammen wird das bestimmt ein schöner Abend.", exampleTr: "Hep birlikte kesinlikle güzel bir akşam olacak.", category: "sosyal" },

    // GÜN 88: Anlaşmazlıkları Çözme
    { id: 436, day: 88, german: "Lass uns ruhig darüber sprechen.", pronunciation: "las uns ruhiğ darüber şprehen", turkish: "Bunu sakin bir şekilde konuşalım.", example: "Lass uns ruhig darüber sprechen.", exampleTr: "Bunu sakin bir şekilde konuşalım.", category: "sosyal" },
    { id: 437, day: 88, german: "Ich glaube, wir haben uns missverstanden.", pronunciation: "ih glaube, vir haben uns misferştanden", turkish: "Sanırım birbirimizi yanlış anladık.", example: "Ich glaube, wir haben uns gestern missverstanden.", exampleTr: "Sanırım dün birbirimizi yanlış anladık.", category: "sosyal" },
    { id: 438, day: 88, german: "Das war nicht so gemeint.", pronunciation: "das var niht zo gemaynt", turkish: "Ben öyle demek istemedim.", example: "Entschuldigung, das war nicht so gemeint.", exampleTr: "Özür dilerim, ben öyle demek istemedim.", category: "sosyal" },
    { id: 439, day: 88, german: "Wir finden sicher eine Lösung.", pronunciation: "vir finden ziher ayne lözung", turkish: "Mutlaka bir çözüm buluruz.", example: "Keine Sorge, wir finden sicher eine Lösung.", exampleTr: "Merak etme, mutlaka bir çözüm buluruz.", category: "sosyal" },
    { id: 440, day: 88, german: "Danke, dass du offen darüber gesprochen hast.", pronunciation: "danke, das du ofen darüber geşprohen hast", turkish: "Bunu açıkça konuştuğun için teşekkür ederim.", example: "Danke, dass du offen darüber gesprochen hast.", exampleTr: "Bunu açıkça konuştuğun için teşekkür ederim.", category: "sosyal" },

    // GÜN 89: Takdir ve Teşekkür
    { id: 441, day: 89, german: "Ich weiß deine Unterstützung sehr zu schätzen.", pronunciation: "ih vays dayne unterştütsung zeyr tsu şetsen", turkish: "Desteğine gerçekten çok değer veriyorum.", example: "Ich weiß deine Unterstützung sehr zu schätzen.", exampleTr: "Desteğine gerçekten çok değer veriyorum.", category: "sosyal" },
    { id: 442, day: 89, german: "Das war wirklich aufmerksam von dir.", pronunciation: "das var virklih aufmerkszam fon dir", turkish: "Bu gerçekten çok düşünceliydi.", example: "Das war wirklich aufmerksam von dir.", exampleTr: "Bu gerçekten çok düşünceliydi.", category: "sosyal" },
    { id: 443, day: 89, german: "Ohne deine Hilfe wäre das schwierig gewesen.", pronunciation: "one dayne hilfe vere das şvirig gevezn", turkish: "Senin yardımın olmadan bu zor olurdu.", example: "Ohne deine Hilfe wäre das schwierig gewesen.", exampleTr: "Senin yardımın olmadan bu zor olurdu.", category: "sosyal" },
    { id: 444, day: 89, german: "Du hast mir wirklich sehr geholfen.", pronunciation: "du hast mir virklih zeyr geholfen", turkish: "Bana gerçekten çok yardım ettin.", example: "Du hast mir in dieser Woche wirklich sehr geholfen.", exampleTr: "Bu hafta bana gerçekten çok yardım ettin.", category: "sosyal" },
    { id: 445, day: 89, german: "Ich bin dir dafür sehr dankbar.", pronunciation: "ih bin dir dafür zeyr dankbar", turkish: "Bunun için sana çok minnettarım.", example: "Ich bin dir dafür sehr dankbar.", exampleTr: "Bunun için sana çok minnettarım.", category: "sosyal" },

    // GÜN 90: Kutlamalar
    { id: 446, day: 90, german: "Herzlichen Glückwunsch zu deinem Erfolg!", pronunciation: "hertslihen glükvunş tsu daynem erfolg", turkish: "Başarın için tebrikler!", example: "Herzlichen Glückwunsch zu deinem Erfolg!", exampleTr: "Başarın için tebrikler!", category: "sosyal" },
    { id: 447, day: 90, german: "Das musst du heute unbedingt feiern.", pronunciation: "das must du hoyte unbedingt fayern", turkish: "Bunu bugün mutlaka kutlamalısın.", example: "Das musst du heute unbedingt feiern.", exampleTr: "Bunu bugün mutlaka kutlamalısın.", category: "sosyal" },
    { id: 448, day: 90, german: "Ich freue mich ehrlich für dich.", pronunciation: "ih froye mih erlih für dih", turkish: "Senin adına içtenlikle seviniyorum.", example: "Ich freue mich ehrlich für dich.", exampleTr: "Senin adına içtenlikle seviniyorum.", category: "sosyal" },
    { id: 449, day: 90, german: "Darauf kannst du wirklich stolz sein.", pronunciation: "darauf kanst du virklih ştolts zayn", turkish: "Bununla gerçekten gurur duyabilirsin.", example: "Darauf kannst du wirklich stolz sein.", exampleTr: "Bununla gerçekten gurur duyabilirsin.", category: "sosyal" },
    { id: 450, day: 90, german: "Auf viele weitere schöne Momente!", pronunciation: "auf file vaytere şöne momente", turkish: "Daha nice güzel anlara!", example: "Auf viele weitere schöne Momente zusammen!", exampleTr: "Birlikte daha nice güzel anlara!", category: "sosyal" },

    // GÜN 91–95
    // GÜN 91: Ders ve Sınav
    { id: 451, day: 91, german: "Ich muss mich auf die Prüfung konzentrieren.", pronunciation: "ih mus mih auf di prüfung konzentriıren", turkish: "Sınava odaklanmam gerekiyor.", example: "Diese Woche muss ich mich auf die Prüfung konzentrieren.", exampleTr: "Bu hafta sınava odaklanmam gerekiyor.", category: "günlük" },
    { id: 452, day: 91, german: "Hast du schon mit dem Lernen angefangen?", pronunciation: "hast du şon mit dem lernen angefangen", turkish: "Çalışmaya başladın mı?", example: "Hast du schon mit dem Lernen angefangen?", exampleTr: "Çalışmaya başladın mı?", category: "sosyal" },
    { id: 453, day: 91, german: "Ich wiederhole gerade die wichtigsten Themen.", pronunciation: "ih viderhole grade di vihtigsten temen", turkish: "Şu an en önemli konuları tekrar ediyorum.", example: "Ich wiederhole gerade die wichtigsten Themen.", exampleTr: "Şu an en önemli konuları tekrar ediyorum.", category: "günlük" },
    { id: 454, day: 91, german: "Können wir später zusammen lernen?", pronunciation: "könen vir şpeter tsuzamen lernen", turkish: "Daha sonra birlikte çalışabilir miyiz?", example: "Können wir heute Abend zusammen lernen?", exampleTr: "Bu akşam birlikte çalışabilir miyiz?", category: "sosyal" },
    { id: 455, day: 91, german: "Ich hoffe, dass die Prüfung gut läuft.", pronunciation: "ih hofe, das di prüfung gut loyft", turkish: "Umarım sınav iyi geçer.", example: "Ich hoffe, dass die Prüfung morgen gut läuft.", exampleTr: "Umarım sınav yarın iyi geçer.", category: "günlük" },

    // GÜN 92: Araştırma ve Laboratuvar
    { id: 456, day: 92, german: "Wir müssen die Probe sorgfältig vorbereiten.", pronunciation: "vir müsen di probe zorgfeltig forberayten", turkish: "Numuneyi dikkatle hazırlamamız gerekiyor.", example: "Wir müssen die Probe sorgfältig vorbereiten.", exampleTr: "Numuneyi dikkatle hazırlamamız gerekiyor.", category: "iş" },
    { id: 457, day: 92, german: "Bitte notieren Sie alle Beobachtungen.", pronunciation: "bite notiren zi ale beobahtungen", turkish: "Lütfen tüm gözlemleri not edin.", example: "Bitte notieren Sie alle Beobachtungen im Protokoll.", exampleTr: "Lütfen tüm gözlemleri protokole not edin.", category: "iş" },
    { id: 458, day: 92, german: "Das Ergebnis muss noch überprüft werden.", pronunciation: "das ergebnis mus noh überprüft verden", turkish: "Sonuç hâlâ kontrol edilmeli.", example: "Das Ergebnis muss noch einmal überprüft werden.", exampleTr: "Sonuç bir kez daha kontrol edilmeli.", category: "iş" },
    { id: 459, day: 92, german: "Haben wir genug Material für den Versuch?", pronunciation: "haben vir genuk material für den ferzuh", turkish: "Deney için yeterli malzememiz var mı?", example: "Haben wir genug Material für den Versuch?", exampleTr: "Deney için yeterli malzememiz var mı?", category: "iş" },
    { id: 460, day: 92, german: "Sicherheit hat im Labor oberste Priorität.", pronunciation: "ziherhayt hat im labor oberste prioritet", turkish: "Laboratuvarda güvenlik en önemli önceliktir.", example: "Sicherheit hat im Labor oberste Priorität.", exampleTr: "Laboratuvarda güvenlik en önemli önceliktir.", category: "iş" },

    // GÜN 93: Sunumlar
    { id: 461, day: 93, german: "Ich beginne mit einer kurzen Einführung.", pronunciation: "ih beginə mit ayner kurzen aynfürung", turkish: "Kısa bir girişle başlıyorum.", example: "Ich beginne mit einer kurzen Einführung.", exampleTr: "Kısa bir girişle başlıyorum.", category: "iş" },
    { id: 462, day: 93, german: "Auf der nächsten Folie sehen Sie die Ergebnisse.", pronunciation: "auf der nehsten folye zeyen zi di ergebnisse", turkish: "Sonraki slaytta sonuçları göreceksiniz.", example: "Auf der nächsten Folie sehen Sie die Ergebnisse.", exampleTr: "Sonraki slaytta sonuçları göreceksiniz.", category: "iş" },
    { id: 463, day: 93, german: "Ich möchte drei Punkte besonders betonen.", pronunciation: "ih möşte dray punkte bezonders betonən", turkish: "Özellikle üç noktayı vurgulamak istiyorum.", example: "Ich möchte drei Punkte besonders betonen.", exampleTr: "Özellikle üç noktayı vurgulamak istiyorum.", category: "iş" },
    { id: 464, day: 93, german: "Gerne beantworte ich Ihre Fragen am Ende.", pronunciation: "gerne beantvorte ih ire fragen am ende", turkish: "Sorularınızı sonunda memnuniyetle yanıtlarım.", example: "Gerne beantworte ich Ihre Fragen am Ende.", exampleTr: "Sorularınızı sonunda memnuniyetle yanıtlarım.", category: "iş" },
    { id: 465, day: 93, german: "Vielen Dank für Ihre Aufmerksamkeit.", pronunciation: "filen dank für ire aufmerksamkayt", turkish: "İlginiz için teşekkür ederim.", example: "Vielen Dank für Ihre Aufmerksamkeit.", exampleTr: "İlginiz için teşekkür ederim.", category: "iş" },

    // GÜN 94: Tartışma ve Görüş Bildirme
    { id: 466, day: 94, german: "Ich sehe das aus einer anderen Perspektive.", pronunciation: "ih zeye das aus ayner andren perspektive", turkish: "Ben buna başka bir açıdan bakıyorum.", example: "Ich sehe das aus einer anderen Perspektive.", exampleTr: "Ben buna başka bir açıdan bakıyorum.", category: "iş" },
    { id: 467, day: 94, german: "Dafür gibt es gute Argumente.", pronunciation: "dafür gibt es gute argumente", turkish: "Bunun için iyi argümanlar var.", example: "Dafür gibt es durchaus gute Argumente.", exampleTr: "Bunun için gerçekten iyi argümanlar var.", category: "iş" },
    { id: 468, day: 94, german: "Trotzdem bin ich nicht ganz überzeugt.", pronunciation: "trotsdem bin ih niht gants überzeugt", turkish: "Yine de tam olarak ikna olmuş değilim.", example: "Trotzdem bin ich nicht ganz überzeugt.", exampleTr: "Yine de tam olarak ikna olmuş değilim.", category: "iş" },
    { id: 469, day: 94, german: "Können Sie das genauer erklären?", pronunciation: "könen zi das genoyer erkleren", turkish: "Bunu daha ayrıntılı açıklayabilir misiniz?", example: "Können Sie das genauer erklären?", exampleTr: "Bunu daha ayrıntılı açıklayabilir misiniz?", category: "iş" },
    { id: 470, day: 94, german: "Ich finde den Vorschlag grundsätzlich sinnvoll.", pronunciation: "ih finde den forşlag grundzetzlih zinvol", turkish: "Öneriyi temelde mantıklı buluyorum.", example: "Ich finde den Vorschlag grundsätzlich sinnvoll.", exampleTr: "Öneriyi temelde mantıklı buluyorum.", category: "iş" },

    // GÜN 95: Yazılı Raporlama
    { id: 471, day: 95, german: "Ich arbeite gerade an dem Bericht.", pronunciation: "ih arbayte grade an dem beriht", turkish: "Şu anda rapor üzerinde çalışıyorum.", example: "Ich arbeite gerade an dem Bericht für morgen.", exampleTr: "Şu anda yarınki rapor üzerinde çalışıyorum.", category: "iş" },
    { id: 472, day: 95, german: "Der erste Entwurf ist fast fertig.", pronunciation: "der erste entvurf ist fast fertih", turkish: "İlk taslak neredeyse hazır.", example: "Der erste Entwurf ist fast fertig.", exampleTr: "İlk taslak neredeyse hazır.", category: "iş" },
    { id: 473, day: 95, german: "Ich schicke Ihnen die finale Version später zu.", pronunciation: "ih şike inen di finale version şpeter tsu", turkish: "Nihai sürümü size daha sonra göndereceğim.", example: "Ich schicke Ihnen die finale Version später zu.", exampleTr: "Nihai sürümü size daha sonra göndereceğim.", category: "iş" },
    { id: 474, day: 95, german: "Bitte prüfen Sie den Text auf Fehler.", pronunciation: "bite prüfen zi den tekst auf feyler", turkish: "Lütfen metni hatalar açısından kontrol edin.", example: "Bitte prüfen Sie den Text auf Fehler.", exampleTr: "Lütfen metni hatalar açısından kontrol edin.", category: "iş" },
    { id: 475, day: 95, german: "Die wichtigsten Daten habe ich bereits eingefügt.", pronunciation: "di vihtigsten daten habe ih berayts ayngefügt", turkish: "En önemli verileri zaten ekledim.", example: "Die wichtigsten Daten habe ich bereits eingefügt.", exampleTr: "En önemli verileri zaten ekledim.", category: "iş" },

    // GÜN 96–100
    // GÜN 96: Resmî İşler
    { id: 476, day: 96, german: "Ich brauche einen Termin beim Bürgeramt.", pronunciation: "ih brauhe aynen termin baym bürgeramt", turkish: "Belediye ofisinden bir randevu almam gerekiyor.", example: "Ich brauche einen Termin beim Bürgeramt.", exampleTr: "Belediye ofisinden bir randevu almam gerekiyor.", category: "resmi" },
    { id: 477, day: 96, german: "Welche Dokumente muss ich mitbringen?", pronunciation: "velhe dokumente mus ih mitbringen", turkish: "Hangi belgeleri getirmem gerekiyor?", example: "Welche Dokumente muss ich zum Termin mitbringen?", exampleTr: "Randevuya hangi belgeleri getirmem gerekiyor?", category: "resmi" },
    { id: 478, day: 96, german: "Mein Ausweis ist noch gültig.", pronunciation: "mayn ausvays ist noh gültig", turkish: "Kimliğim hâlâ geçerli.", example: "Mein Ausweis ist noch ein Jahr gültig.", exampleTr: "Kimliğim hâlâ bir yıl geçerli.", category: "resmi" },
    { id: 479, day: 96, german: "Könnten Sie mir den Ablauf erklären?", pronunciation: "könten zi mir den ablauff erkleren", turkish: "Süreci bana açıklayabilir misiniz?", example: "Könnten Sie mir den Ablauf kurz erklären?", exampleTr: "Süreci bana kısaca açıklayabilir misiniz?", category: "resmi" },
    { id: 480, day: 96, german: "Vielen Dank, jetzt ist alles klar.", pronunciation: "filen dank, yets ist ales klar", turkish: "Çok teşekkür ederim, şimdi her şey net.", example: "Vielen Dank, jetzt ist alles klar.", exampleTr: "Çok teşekkür ederim, şimdi her şey net.", category: "sosyal" },

    // GÜN 97: Vergi ve Resmî Finans
    { id: 481, day: 97, german: "Ich habe eine Frage zu meiner Steuererklärung.", pronunciation: "ih habe ayne frage tsu mayner ştoyererklerung", turkish: "Vergi beyanımla ilgili bir sorum var.", example: "Ich habe eine Frage zu meiner Steuererklärung.", exampleTr: "Vergi beyanımla ilgili bir sorum var.", category: "resmi" },
    { id: 482, day: 97, german: "Bis wann muss ich das einreichen?", pronunciation: "bis van mus ih das aynrayhen", turkish: "Bunu en geç ne zamana kadar teslim etmem gerekiyor?", example: "Bis wann muss ich das Formular einreichen?", exampleTr: "Bu formu en geç ne zamana kadar teslim etmem gerekiyor?", category: "resmi" },
    { id: 483, day: 97, german: "Ich habe die Unterlagen vollständig vorbereitet.", pronunciation: "ih habe di unterlagen folştendig forberaytet", turkish: "Belgeleri eksiksiz hazırladım.", example: "Ich habe die Unterlagen vollständig vorbereitet.", exampleTr: "Belgeleri eksiksiz hazırladım.", category: "resmi" },
    { id: 484, day: 97, german: "Können Sie mir eine Eingangsbestätigung geben?", pronunciation: "könen zi mir ayne ayngangsbeştetigung geben", turkish: "Bana teslim alındı belgesi verebilir misiniz?", example: "Können Sie mir eine Eingangsbestätigung geben?", exampleTr: "Bana teslim alındı belgesi verebilir misiniz?", category: "resmi" },
    { id: 485, day: 97, german: "Falls etwas fehlt, melden Sie sich bitte.", pronunciation: "falls etvas felt, melden zi zih bite", turkish: "Bir eksik varsa lütfen bana ulaşın.", example: "Falls etwas fehlt, melden Sie sich bitte bei mir.", exampleTr: "Bir eksik varsa lütfen bana ulaşın.", category: "resmi" },

    // GÜN 98: Kira Sözleşmesi
    { id: 486, day: 98, german: "Ich möchte den Vertrag in Ruhe durchlesen.", pronunciation: "ih möşte den fertrag in ruhe durhleyzen", turkish: "Sözleşmeyi sakin bir şekilde okumak istiyorum.", example: "Ich möchte den Vertrag erst in Ruhe durchlesen.", exampleTr: "Sözleşmeyi önce sakin bir şekilde okumak istiyorum.", category: "resmi" },
    { id: 487, day: 98, german: "Was ist in den Nebenkosten enthalten?", pronunciation: "vas ist in den nebənkosten enthaltn", turkish: "Yan giderlere neler dahil?", example: "Was ist in den Nebenkosten enthalten?", exampleTr: "Yan giderlere neler dahil?", category: "günlük" },
    { id: 488, day: 98, german: "Gibt es eine Mindestmietdauer?", pronunciation: "gibt es ayne mindestmitdauer", turkish: "Asgari kira süresi var mı?", example: "Gibt es eine Mindestmietdauer für die Wohnung?", exampleTr: "Daire için asgari kira süresi var mı?", category: "resmi" },
    { id: 489, day: 98, german: "Wann muss die Kaution bezahlt werden?", pronunciation: "van mus di kautsyon bezalt verden", turkish: "Depozito ne zaman ödenmeli?", example: "Wann muss die Kaution bezahlt werden?", exampleTr: "Depozito ne zaman ödenmeli?", category: "resmi" },
    { id: 490, day: 98, german: "Ich hätte gern eine Kopie des Vertrags.", pronunciation: "ih hete gern ayne kopi des fertrags", turkish: "Sözleşmenin bir kopyasını istiyorum.", example: "Ich hätte gern eine Kopie des Vertrags für meine Unterlagen.", exampleTr: "Evraklarım için sözleşmenin bir kopyasını istiyorum.", category: "resmi" },

    // GÜN 99: İade ve Değişim
    { id: 491, day: 99, german: "Ich möchte diesen Artikel zurückgeben.", pronunciation: "ih möşte dizen artikel tsurükgeben", turkish: "Bu ürünü iade etmek istiyorum.", example: "Ich möchte diesen Artikel zurückgeben.", exampleTr: "Bu ürünü iade etmek istiyorum.", category: "günlük" },
    { id: 492, day: 99, german: "Haben Sie den Kassenbon noch?", pronunciation: "haben zi den kasenbon noh", turkish: "Fişiniz hâlâ yanınızda mı?", example: "Für die Rückgabe: Haben Sie den Kassenbon noch?", exampleTr: "İade için fişiniz hâlâ yanınızda mı?", category: "günlük" },
    { id: 493, day: 99, german: "Der Artikel war leider beschädigt.", pronunciation: "der artikel var layder beşedigt", turkish: "Ürün maalesef hasarlıydı.", example: "Der Artikel war leider schon beim Kauf beschädigt.", exampleTr: "Ürün maalesef satın alırken zaten hasarlıydı.", category: "günlük" },
    { id: 494, day: 99, german: "Kann ich das gegen etwas anderes umtauschen?", pronunciation: "kan ih das gegen etvas anderes umtauşen", turkish: "Bunu başka bir şeyle değiştirebilir miyim?", example: "Kann ich das gegen eine andere Größe umtauschen?", exampleTr: "Bunu başka bir bedenle değiştirebilir miyim?", category: "günlük" },
    { id: 495, day: 99, german: "Wie lange dauert die Rückerstattung?", pronunciation: "vi lange dauert di rükerştatung", turkish: "Geri ödemenin gelmesi ne kadar sürer?", example: "Wie lange dauert die Rückerstattung?", exampleTr: "Geri ödemenin gelmesi ne kadar sürer?", category: "günlük" },

    // GÜN 100: Ev Hizmetleri
    { id: 496, day: 100, german: "Ich brauche jemanden für eine kleine Reparatur.", pronunciation: "ih brauhe yemenden für ayne klayne reparatur", turkish: "Küçük bir tamir için birine ihtiyacım var.", example: "Ich brauche jemanden für eine kleine Reparatur in der Küche.", exampleTr: "Mutfakta küçük bir tamir için birine ihtiyacım var.", category: "günlük" },
    { id: 497, day: 100, german: "Können Sie morgen vorbeikommen?", pronunciation: "könen zi morgen forbaykomen", turkish: "Yarın uğrayabilir misiniz?", example: "Können Sie morgen am Nachmittag vorbeikommen?", exampleTr: "Yarın öğleden sonra uğrayabilir misiniz?", category: "resmi" },
    { id: 498, day: 100, german: "Wie lange wird das ungefähr dauern?", pronunciation: "vi lange virt das ungefer dauern", turkish: "Bu yaklaşık ne kadar sürer?", example: "Wie lange wird das ungefähr dauern?", exampleTr: "Bu yaklaşık ne kadar sürer?", category: "günlük" },
    { id: 499, day: 100, german: "Bitte rufen Sie mich vorher an.", pronunciation: "bite rufen zi mih forher an", turkish: "Lütfen gelmeden önce beni arayın.", example: "Bitte rufen Sie mich vorher an, bevor Sie kommen.", exampleTr: "Gelmeden önce lütfen beni arayın.", category: "resmi" },
    { id: 500, day: 100, german: "Dann bin ich sicher zu Hause.", pronunciation: "dan bin ih ziher tsu hauze", turkish: "O zaman kesinlikle evde olurum.", example: "Dann bin ich sicher zu Hause und kann warten.", exampleTr: "O zaman kesinlikle evde olurum ve bekleyebilirim.", category: "günlük" },

    // GÜN 101–105
    // GÜN 101: Telefon ve İnternet
    { id: 501, day: 101, german: "Mein Internet funktioniert seit heute Morgen nicht.", pronunciation: "mayn internet funktioniert zayt hoyte morgen niht", turkish: "İnternetim bu sabahtan beri çalışmıyor.", example: "Mein Internet funktioniert seit heute Morgen nicht.", exampleTr: "İnternetim bu sabahtan beri çalışmıyor.", category: "günlük" },
    { id: 502, day: 101, german: "Könnten Sie die Leitung bitte prüfen?", pronunciation: "könten zi di laytung bite prüfen", turkish: "Hattı kontrol edebilir misiniz lütfen?", example: "Könnten Sie die Leitung bitte prüfen?", exampleTr: "Hattı kontrol edebilir misiniz lütfen?", category: "resmi" },
    { id: 503, day: 101, german: "Ich habe schon den Router neu gestartet.", pronunciation: "ih habe şon den router noy geştartet", turkish: "Modemi zaten yeniden başlattım.", example: "Ich habe den Router schon neu gestartet.", exampleTr: "Modemi zaten yeniden başlattım.", category: "günlük" },
    { id: 504, day: 101, german: "Wie lange dauert die Störung noch?", pronunciation: "vi lange dauert di ştörung noh", turkish: "Arıza daha ne kadar sürecek?", example: "Wie lange dauert die Störung noch?", exampleTr: "Arıza daha ne kadar sürecek?", category: "resmi" },
    { id: 505, day: 101, german: "Bitte halten Sie mich auf dem Laufenden.", pronunciation: "bite halten zi mih auf dem laufenden", turkish: "Lütfen beni bilgilendirmeye devam edin.", example: "Bitte halten Sie mich auf dem Laufenden.", exampleTr: "Lütfen beni bilgilendirmeye devam edin.", category: "resmi" },

    // GÜN 102: Sağlıklı Yaşam
    { id: 506, day: 102, german: "Ich versuche, mich gesünder zu ernähren.", pronunciation: "ih ferzuhe, mih gezünder tsu erneren", turkish: "Daha sağlıklı beslenmeye çalışıyorum.", example: "In letzter Zeit versuche ich, mich gesünder zu ernähren.", exampleTr: "Son zamanlarda daha sağlıklı beslenmeye çalışıyorum.", category: "günlük" },
    { id: 507, day: 102, german: "Ich trinke jetzt mehr Wasser als früher.", pronunciation: "ih trinke yets mer vaser als früyır", turkish: "Artık eskisinden daha fazla su içiyorum.", example: "Ich trinke jetzt mehr Wasser als früher.", exampleTr: "Artık eskisinden daha fazla su içiyorum.", category: "günlük" },
    { id: 508, day: 102, german: "Schlaf ist genauso wichtig wie Bewegung.", pronunciation: "şlaf ist genazo vihtig vi bevegung", turkish: "Uyku, hareket kadar önemlidir.", example: "Schlaf ist genauso wichtig wie Bewegung.", exampleTr: "Uyku, hareket kadar önemlidir.", category: "günlük" },
    { id: 509, day: 102, german: "Ich möchte wieder regelmäßig spazieren gehen.", pronunciation: "ih möşte vider regelmezig şpatsiren geyn", turkish: "Yeniden düzenli yürüyüş yapmak istiyorum.", example: "Ich möchte wieder regelmäßig spazieren gehen.", exampleTr: "Yeniden düzenli yürüyüş yapmak istiyorum.", category: "günlük" },
    { id: 510, day: 102, german: "Kleine Gewohnheiten machen einen großen Unterschied.", pronunciation: "klayne gevohnhayten mahen aynen grozen unteşid", turkish: "Küçük alışkanlıklar büyük fark yaratır.", example: "Kleine Gewohnheiten machen einen großen Unterschied.", exampleTr: "Küçük alışkanlıklar büyük fark yaratır.", category: "sosyal" },

    // GÜN 103: Zihinsel Denge
    { id: 511, day: 103, german: "Ich brauche heute etwas Ruhe.", pronunciation: "ih brauhe hoyte etvas ruhe", turkish: "Bugün biraz sakinliğe ihtiyacım var.", example: "Nach dem Stress brauche ich heute etwas Ruhe.", exampleTr: "Stresten sonra bugün biraz sakinliğe ihtiyacım var.", category: "günlük" },
    { id: 512, day: 103, german: "Manchmal hilft es, kurz Abstand zu nehmen.", pronunciation: "manhmal hilft es, kurz abştand tsu nemen", turkish: "Bazen kısa bir ara vermek iyi gelir.", example: "Manchmal hilft es, kurz Abstand zu nehmen.", exampleTr: "Bazen kısa bir ara vermek iyi gelir.", category: "sosyal" },
    { id: 513, day: 103, german: "Ich möchte mich nicht ständig unter Druck setzen.", pronunciation: "ih möşte mih niht ştendig unter druk zetsen", turkish: "Kendimi sürekli baskı altına sokmak istemiyorum.", example: "Ich möchte mich nicht ständig unter Druck setzen.", exampleTr: "Kendimi sürekli baskı altına sokmak istemiyorum.", category: "günlük" },
    { id: 514, day: 103, german: "Ein Spaziergang bringt mich oft wieder ins Gleichgewicht.", pronunciation: "ayn şpatsirgang bringt mih oft vider ins glayhgeviht", turkish: "Bir yürüyüş beni çoğu zaman yeniden dengeler.", example: "Ein Spaziergang bringt mich oft wieder ins Gleichgewicht.", exampleTr: "Bir yürüyüş beni çoğu zaman yeniden dengeler.", category: "günlük" },
    { id: 515, day: 103, german: "Es ist in Ordnung, nicht alles perfekt zu machen.", pronunciation: "es ist in ordnung, niht ales perfekt tsu mahen", turkish: "Her şeyi mükemmel yapmamak sorun değil.", example: "Es ist in Ordnung, nicht alles perfekt zu machen.", exampleTr: "Her şeyi mükemmel yapmamak sorun değil.", category: "sosyal" },

    // GÜN 104: Zaman Yönetimi
    { id: 516, day: 104, german: "Ich plane meinen Tag jetzt genauer.", pronunciation: "ih plane maynen tag yets genoyer", turkish: "Günümü artık daha ayrıntılı planlıyorum.", example: "Ich plane meinen Tag jetzt genauer.", exampleTr: "Günümü artık daha ayrıntılı planlıyorum.", category: "günlük" },
    { id: 517, day: 104, german: "Diese Aufgabe hat heute Priorität.", pronunciation: "dize aufgabe hat hoyte prioritet", turkish: "Bu görev bugün öncelikli.", example: "Diese Aufgabe hat heute Priorität.", exampleTr: "Bu görev bugün öncelikli.", category: "iş" },
    { id: 518, day: 104, german: "Ich verschiebe das lieber auf morgen.", pronunciation: "ih ferşibe das liber auf morgen", turkish: "Bunu yarına ertelemeyi tercih ederim.", example: "Ich verschiebe das lieber auf morgen.", exampleTr: "Bunu yarına ertelemeyi tercih ederim.", category: "günlük" },
    { id: 519, day: 104, german: "Ohne Plan verliere ich schnell den Überblick.", pronunciation: "one plan ferliere ih şnel den überblik", turkish: "Plansız olunca çabuk dağılıyorum.", example: "Ohne Plan verliere ich schnell den Überblick.", exampleTr: "Plansız olunca çabuk dağılıyorum.", category: "günlük" },
    { id: 520, day: 104, german: "Schritt für Schritt geht es leichter.", pronunciation: "şrit für şrit geyt es layhter", turkish: "Adım adım daha kolay oluyor.", example: "Schritt für Schritt geht es leichter.", exampleTr: "Adım adım daha kolay oluyor.", category: "sosyal" },

    // GÜN 105: Karar Verme
    { id: 521, day: 105, german: "Ich möchte nichts überstürzen.", pronunciation: "ih möşte nihts überştürtsen", turkish: "Hiçbir şeyi aceleye getirmek istemiyorum.", example: "Ich möchte diese Entscheidung nicht überstürzen.", exampleTr: "Bu kararı aceleye getirmek istemiyorum.", category: "günlük" },
    { id: 522, day: 105, german: "Lass mich noch eine Nacht darüber schlafen.", pronunciation: "las mih noh ayne naht darüber şlafen", turkish: "Bunun üzerine bir gece daha düşüneyim.", example: "Lass mich noch eine Nacht darüber schlafen.", exampleTr: "Bunun üzerine bir gece daha düşüneyim.", category: "sosyal" },
    { id: 523, day: 105, german: "Welche Option ist langfristig besser?", pronunciation: "velhe optsion ist langfristiğ beser", turkish: "Uzun vadede hangi seçenek daha iyi?", example: "Welche Option ist langfristig besser?", exampleTr: "Uzun vadede hangi seçenek daha iyi?", category: "günlük" },
    { id: 524, day: 105, german: "Mein Bauchgefühl sagt etwas anderes.", pronunciation: "mayn bauhgefül zagt etvas anderes", turkish: "İçgüdüm bana başka bir şey söylüyor.", example: "Mein Bauchgefühl sagt etwas anderes.", exampleTr: "İçgüdüm bana başka bir şey söylüyor.", category: "sosyal" },
    { id: 525, day: 105, german: "Am Ende muss die Entscheidung zu mir passen.", pronunciation: "am ende mus di entşaydung tsu mir pasen", turkish: "Sonunda karar bana uygun olmalı.", example: "Am Ende muss die Entscheidung zu mir passen.", exampleTr: "Sonunda karar bana uygun olmalı.", category: "sosyal" },

    // GÜN 106–110
    // GÜN 106: Gelecek Planları
    { id: 526, day: 106, german: "Ich habe klare Ziele für die nächsten Monate.", pronunciation: "ih habe klere tsile für di nehsten monate", turkish: "Önümüzdeki aylar için net hedeflerim var.", example: "Ich habe klare Ziele für die nächsten Monate.", exampleTr: "Önümüzdeki aylar için net hedeflerim var.", category: "günlük" },
    { id: 527, day: 106, german: "Nächstes Jahr möchte ich einen großen Schritt machen.", pronunciation: "nehstes yar möşte ih aynen grozen şrit mahen", turkish: "Gelecek yıl büyük bir adım atmak istiyorum.", example: "Nächstes Jahr möchte ich einen großen Schritt machen.", exampleTr: "Gelecek yıl büyük bir adım atmak istiyorum.", category: "günlük" },
    { id: 528, day: 106, german: "Dafür muss ich mich jetzt gut vorbereiten.", pronunciation: "dafür mus ih mih yets gut forberayten", turkish: "Bunun için şimdi iyi hazırlanmam gerekiyor.", example: "Dafür muss ich mich jetzt gut vorbereiten.", exampleTr: "Bunun için şimdi iyi hazırlanmam gerekiyor.", category: "günlük" },
    { id: 529, day: 106, german: "Ich möchte mutige Entscheidungen treffen.", pronunciation: "ih möşte mutige entşaydungen trefen", turkish: "Cesur kararlar almak istiyorum.", example: "Ich möchte mutige Entscheidungen treffen.", exampleTr: "Cesur kararlar almak istiyorum.", category: "sosyal" },
    { id: 530, day: 106, german: "Es fühlt sich nach dem richtigen Zeitpunkt an.", pronunciation: "es fült zih nah dem rihtigen tsaytpunkt an", turkish: "Doğru zaman gibi hissettiriyor.", example: "Es fühlt sich nach dem richtigen Zeitpunkt an.", exampleTr: "Doğru zaman gibi hissettiriyor.", category: "sosyal" },

    // GÜN 107: Motivasyon
    { id: 531, day: 107, german: "Ich möchte konsequent dranbleiben.", pronunciation: "ih möşte konzekvent dranblayben", turkish: "Kararlı şekilde devam etmek istiyorum.", example: "Diesmal möchte ich konsequent dranbleiben.", exampleTr: "Bu kez kararlı şekilde devam etmek istiyorum.", category: "günlük" },
    { id: 532, day: 107, german: "Auch kleine Fortschritte zählen.", pronunciation: "auh klayne fortşrite tselen", turkish: "Küçük ilerlemeler de önemlidir.", example: "Auch kleine Fortschritte zählen.", exampleTr: "Küçük ilerlemeler de önemlidir.", category: "sosyal" },
    { id: 533, day: 107, german: "Ich lasse mich von Rückschlägen nicht entmutigen.", pronunciation: "ih lase mih fon rükşlegen niht entmutigen", turkish: "Geri düşüşler beni yıldırmıyor.", example: "Ich lasse mich von Rückschlägen nicht entmutigen.", exampleTr: "Geri düşüşler beni yıldırmıyor.", category: "sosyal" },
    { id: 534, day: 107, german: "Heute mache ich wenigstens einen kleinen Schritt.", pronunciation: "hoyte mahe ih venihstens aynen klaynen şrit", turkish: "Bugün en azından küçük bir adım atacağım.", example: "Heute mache ich wenigstens einen kleinen Schritt.", exampleTr: "Bugün en azından küçük bir adım atacağım.", category: "günlük" },
    { id: 535, day: 107, german: "Das Wichtigste ist, nicht aufzugeben.", pronunciation: "das vihtigste ist, niht auftsugeben", turkish: "En önemlisi pes etmemek.", example: "Das Wichtigste ist, nicht aufzugeben.", exampleTr: "En önemlisi pes etmemek.", category: "sosyal" },

    // GÜN 108: Medya ve Haberler
    { id: 536, day: 108, german: "Ich habe heute Morgen die Nachrichten gelesen.", pronunciation: "ih habe hoyte morgen di nahrihten geleyzen", turkish: "Bu sabah haberleri okudum.", example: "Ich habe heute Morgen die Nachrichten gelesen.", exampleTr: "Bu sabah haberleri okudum.", category: "günlük" },
    { id: 537, day: 108, german: "Darüber wird gerade viel diskutiert.", pronunciation: "darüber virt grade fil diskutirt", turkish: "Bunun hakkında şu anda çok tartışılıyor.", example: "Darüber wird gerade viel diskutiert.", exampleTr: "Bunun hakkında şu anda çok tartışılıyor.", category: "sosyal" },
    { id: 538, day: 108, german: "Ich versuche, verschiedene Quellen zu vergleichen.", pronunciation: "ih ferzuhe, ferşidene kvellen tsu ferglayhen", turkish: "Farklı kaynakları karşılaştırmaya çalışıyorum.", example: "Ich versuche, verschiedene Quellen zu vergleichen.", exampleTr: "Farklı kaynakları karşılaştırmaya çalışıyorum.", category: "günlük" },
    { id: 539, day: 108, german: "Nicht alles im Internet ist zuverlässig.", pronunciation: "niht ales im internet ist tsuferlesig", turkish: "İnternetteki her şey güvenilir değildir.", example: "Nicht alles im Internet ist zuverlässig.", exampleTr: "İnternetteki her şey güvenilir değildir.", category: "sosyal" },
    { id: 540, day: 108, german: "Was hältst du von dieser Meldung?", pronunciation: "vas heltst du fon dizeer meldung", turkish: "Bu haber hakkında ne düşünüyorsun?", example: "Was hältst du von dieser Meldung?", exampleTr: "Bu haber hakkında ne düşünüyorsun?", category: "sosyal" },

    // GÜN 109: Teknoloji
    { id: 541, day: 109, german: "Diese App spart mir viel Zeit.", pronunciation: "dize ep şpart mir fil tsayt", turkish: "Bu uygulama bana çok zaman kazandırıyor.", example: "Diese App spart mir im Alltag viel Zeit.", exampleTr: "Bu uygulama günlük hayatta bana çok zaman kazandırıyor.", category: "günlük" },
    { id: 542, day: 109, german: "Ich muss zuerst die Einstellungen anpassen.", pronunciation: "ih mus tsuerst di aynştelungen anpasen", turkish: "Önce ayarları değiştirmem gerekiyor.", example: "Ich muss zuerst die Einstellungen anpassen.", exampleTr: "Önce ayarları değiştirmem gerekiyor.", category: "günlük" },
    { id: 543, day: 109, german: "Kannst du mir kurz zeigen, wie das funktioniert?", pronunciation: "kanst du mir kurz tsaygen, vi das funktioniert", turkish: "Bunun nasıl çalıştığını bana kısaca gösterebilir misin?", example: "Kannst du mir kurz zeigen, wie das funktioniert?", exampleTr: "Bunun nasıl çalıştığını bana kısaca gösterebilir misin?", category: "sosyal" },
    { id: 544, day: 109, german: "Die neue Funktion ist wirklich praktisch.", pronunciation: "di noye funktion ist virklih praktiş", turkish: "Yeni özellik gerçekten kullanışlı.", example: "Die neue Funktion ist wirklich praktisch.", exampleTr: "Yeni özellik gerçekten kullanışlı.", category: "günlük" },
    { id: 545, day: 109, german: "Ich probiere gerade ein neues Tool aus.", pronunciation: "ih probire grade ayn noyes tul aus", turkish: "Şu anda yeni bir araç deniyorum.", example: "Ich probiere gerade ein neues Tool aus.", exampleTr: "Şu anda yeni bir araç deniyorum.", category: "günlük" },

    // GÜN 110: Sürdürülebilirlik
    { id: 546, day: 110, german: "Ich versuche, im Alltag weniger Plastik zu benutzen.", pronunciation: "ih ferzuhe, im altag veniger plastik tsu benutsen", turkish: "Günlük hayatta daha az plastik kullanmaya çalışıyorum.", example: "Ich versuche, weniger Plastik zu benutzen.", exampleTr: "Daha az plastik kullanmaya çalışıyorum.", category: "günlük" },
    { id: 547, day: 110, german: "Recycling ist hier gut organisiert.", pronunciation: "resaykling ist hir gut organizirt", turkish: "Geri dönüşüm burada iyi organize edilmiş.", example: "Recycling ist in diesem Viertel gut organisiert.", exampleTr: "Geri dönüşüm bu mahallede iyi organize edilmiş.", category: "günlük" },
    { id: 548, day: 110, german: "Wir sollten bewusster konsumieren.", pronunciation: "vir zolten bevuster konsumiren", turkish: "Daha bilinçli tüketmeliyiz.", example: "Wir sollten bewusster konsumieren.", exampleTr: "Daha bilinçli tüketmeliyiz.", category: "sosyal" },
    { id: 549, day: 110, german: "Kleine Veränderungen können viel bewirken.", pronunciation: "klayne ferenderungen könen fil bevirken", turkish: "Küçük değişiklikler çok şey değiştirebilir.", example: "Kleine Veränderungen können viel bewirken.", exampleTr: "Küçük değişiklikler çok şey değiştirebilir.", category: "sosyal" },
    { id: 550, day: 110, german: "Ich nehme meistens meine eigene Tasche mit.", pronunciation: "ih neme maystens mayne aygene taşe mit", turkish: "Genelde kendi çantamı yanıma alıyorum.", example: "Beim Einkaufen nehme ich meistens meine eigene Tasche mit.", exampleTr: "Alışverişe giderken genelde kendi çantamı yanıma alıyorum.", category: "günlük" },

    // GÜN 111–115
    // GÜN 111: Geri Bildirim
    { id: 551, day: 111, german: "Ich würde gern Ihr ehrliches Feedback hören.", pronunciation: "ih vürde gern ir erlihes fidbek hören", turkish: "Dürüst geri bildiriminizi duymak isterim.", example: "Ich würde gern Ihr ehrliches Feedback hören.", exampleTr: "Dürüst geri bildiriminizi duymak isterim.", category: "iş" },
    { id: 552, day: 111, german: "Was hat Ihrer Meinung nach gut funktioniert?", pronunciation: "vas hat irer maynung nah gut funktioniert", turkish: "Size göre ne iyi çalıştı?", example: "Was hat Ihrer Meinung nach gut funktioniert?", exampleTr: "Size göre ne iyi çalıştı?", category: "iş" },
    { id: 553, day: 111, german: "Wo sehen Sie noch Verbesserungspotenzial?", pronunciation: "vo zeyen zi noh ferbeserungspotentsial", turkish: "Hâlâ nerede gelişim potansiyeli görüyorsunuz?", example: "Wo sehen Sie noch Verbesserungspotenzial?", exampleTr: "Hâlâ nerede gelişim potansiyeli görüyorsunuz?", category: "iş" },
    { id: 554, day: 111, german: "Ich nehme konstruktive Kritik sehr ernst.", pronunciation: "ih neme konstruktive kritik zeyr ernst", turkish: "Yapıcı eleştiriyi ciddiye alırım.", example: "Ich nehme konstruktive Kritik sehr ernst.", exampleTr: "Yapıcı eleştiriyi ciddiye alırım.", category: "iş" },
    { id: 555, day: 111, german: "Danke, das hilft mir sehr weiter.", pronunciation: "danke, das hilft mir zeyr vayter", turkish: "Teşekkür ederim, bu bana çok yardımcı oluyor.", example: "Danke, das hilft mir sehr weiter.", exampleTr: "Teşekkür ederim, bu bana çok yardımcı oluyor.", category: "iş" },

    // GÜN 112: Liderlik
    { id: 556, day: 112, german: "Wir sollten als Team an einem Strang ziehen.", pronunciation: "vir zolten als tim an aynem ştrang tsien", turkish: "Ekip olarak aynı hedefe yönelmeliyiz.", example: "Wir sollten als Team an einem Strang ziehen.", exampleTr: "Ekip olarak aynı hedefe yönelmeliyiz.", category: "iş" },
    { id: 557, day: 112, german: "Klare Kommunikation ist in stressigen Phasen entscheidend.", pronunciation: "klare komunikation ist in ştresigen fazen entşaydent", turkish: "Stresli dönemlerde net iletişim çok önemlidir.", example: "Klare Kommunikation ist entscheidend.", exampleTr: "Net iletişim çok önemlidir.", category: "iş" },
    { id: 558, day: 112, german: "Ich möchte Verantwortung übernehmen, aber nicht alles allein machen.", pronunciation: "ih möşte ferantvortung übernemen, aber niht ales alayn mahen", turkish: "Sorumluluk almak istiyorum ama her şeyi tek başıma yapmak istemiyorum.", example: "Ich möchte Verantwortung übernehmen, aber nicht alles allein machen.", exampleTr: "Sorumluluk almak istiyorum ama her şeyi tek başıma yapmak istemiyorum.", category: "iş" },
    { id: 559, day: 112, german: "Jede gute Idee sollte gehört werden.", pronunciation: "yede gute idee zolte gehört verden", turkish: "Her iyi fikir duyulmalı.", example: "Jede gute Idee sollte gehört werden.", exampleTr: "Her iyi fikir duyulmalı.", category: "iş" },
    { id: 560, day: 112, german: "Am Ende zählt das gemeinsame Ergebnis.", pronunciation: "am ende tselt das gemaynsame ergebnis", turkish: "Sonunda önemli olan ortak sonuçtur.", example: "Am Ende zählt das gemeinsame Ergebnis.", exampleTr: "Sonunda önemli olan ortak sonuçtur.", category: "iş" },

    // GÜN 113: Eğitim ve Mentorluk
    { id: 561, day: 113, german: "Ich erkläre dir den Ablauf Schritt für Schritt.", pronunciation: "ih erklerə dir den ablauff şrit für şrit", turkish: "Süreci sana adım adım açıklayayım.", example: "Ich erkläre dir den Ablauf Schritt für Schritt.", exampleTr: "Süreci sana adım adım açıklayayım.", category: "iş" },
    { id: 562, day: 113, german: "Frag bitte jederzeit nach, wenn etwas unklar ist.", pronunciation: "frag bite yeder tsayt nah, ven etvas unklar ist", turkish: "Bir şey net değilse lütfen her zaman sor.", example: "Frag bitte jederzeit nach, wenn etwas unklar ist.", exampleTr: "Bir şey net değilse lütfen her zaman sor.", category: "iş" },
    { id: 563, day: 113, german: "Am Anfang braucht alles etwas Übung.", pronunciation: "am anfang brauht ales etvas übung", turkish: "Başlangıçta her şey biraz pratik ister.", example: "Am Anfang braucht alles etwas Übung.", exampleTr: "Başlangıçta her şey biraz pratik ister.", category: "sosyal" },
    { id: 564, day: 113, german: "Du machst schon deutliche Fortschritte.", pronunciation: "du mahst şon doytlihe fortşrite", turkish: "Şimdiden belirgin ilerleme kaydediyorsun.", example: "Du machst schon deutliche Fortschritte.", exampleTr: "Şimdiden belirgin ilerleme kaydediyorsun.", category: "sosyal" },
    { id: 565, day: 113, german: "Mit der Zeit wird dir das leichter fallen.", pronunciation: "mit der tsayt virt dir das layhter falen", turkish: "Zamanla bu sana daha kolay gelecek.", example: "Mit der Zeit wird dir das leichter fallen.", exampleTr: "Zamanla bu sana daha kolay gelecek.", category: "sosyal" },

    // GÜN 114: Sorun Yükseltme
    { id: 566, day: 114, german: "Dieses Problem kann ich nicht allein lösen.", pronunciation: "dizes problem kan ih niht alayn lözen", turkish: "Bu sorunu tek başıma çözemem.", example: "Dieses Problem kann ich nicht allein lösen.", exampleTr: "Bu sorunu tek başıma çözemem.", category: "iş" },
    { id: 567, day: 114, german: "Wir sollten das frühzeitig eskalieren.", pronunciation: "vir zolten das frütsaytig eskaliren", turkish: "Bunu erkenden üst seviyeye taşımamız gerekir.", example: "Wir sollten das Problem frühzeitig eskalieren.", exampleTr: "Bu sorunu erkenden üst seviyeye taşımamız gerekir.", category: "iş" },
    { id: 568, day: 114, german: "Die Auswirkungen könnten größer werden als erwartet.", pronunciation: "di ausvirkungen könten grözer verden als ervartet", turkish: "Etkileri beklenenden daha büyük olabilir.", example: "Die Auswirkungen könnten größer werden als erwartet.", exampleTr: "Etkileri beklenenden daha büyük olabilir.", category: "iş" },
    { id: 569, day: 114, german: "Ich möchte das offen ansprechen, bevor es kritisch wird.", pronunciation: "ih möşte das ofen anşprehen, befor es kritiş virt", turkish: "Kritik hâle gelmeden önce bunu açıkça dile getirmek istiyorum.", example: "Ich möchte das offen ansprechen.", exampleTr: "Bunu açıkça dile getirmek istiyorum.", category: "iş" },
    { id: 570, day: 114, german: "Gemeinsam finden wir die beste Lösung.", pronunciation: "gemaynsam finden vir di beste lözung", turkish: "Birlikte en iyi çözümü buluruz.", example: "Gemeinsam finden wir die beste Lösung.", exampleTr: "Birlikte en iyi çözümü buluruz.", category: "iş" },

    // GÜN 115: Öncelik ve Teslim Tarihi
    { id: 571, day: 115, german: "Wir müssen die dringendsten Aufgaben zuerst erledigen.", pronunciation: "vir müsen di dringendsten aufgaben tsuerst erledigen", turkish: "En acil işleri önce tamamlamamız gerekiyor.", example: "Wir müssen die dringendsten Aufgaben zuerst erledigen.", exampleTr: "En acil işleri önce tamamlamamız gerekiyor.", category: "iş" },
    { id: 572, day: 115, german: "Diese Frist ist leider nicht verhandelbar.", pronunciation: "dize frist ist layder niht ferhandelbar", turkish: "Bu son tarih maalesef esnetilemez.", example: "Diese Frist ist leider nicht verhandelbar.", exampleTr: "Bu son tarih maalesef esnetilemez.", category: "iş" },
    { id: 573, day: 115, german: "Was können wir realistisch bis Freitag schaffen?", pronunciation: "vas könen vir realistiç bis fraytag şafen", turkish: "Cuma gününe kadar gerçekçi olarak neyi bitirebiliriz?", example: "Was können wir realistisch bis Freitag schaffen?", exampleTr: "Cuma gününe kadar gerçekçi olarak neyi bitirebiliriz?", category: "iş" },
    { id: 574, day: 115, german: "Ich brauche dafür heute noch eine Rückmeldung.", pronunciation: "ih brauhe dafür hoyte noh ayne rükmeldung", turkish: "Bunun için bugün hâlâ bir geri dönüşe ihtiyacım var.", example: "Ich brauche dafür heute noch eine Rückmeldung.", exampleTr: "Bunun için bugün hâlâ bir geri dönüşe ihtiyacım var.", category: "iş" },
    { id: 575, day: 115, german: "Wenn wir uns jetzt fokussieren, schaffen wir das.", pronunciation: "ven vir uns yets fokusiren, şafen vir das", turkish: "Şimdi odaklanırsak bunu başarırız.", example: "Wenn wir uns jetzt fokussieren, schaffen wir das.", exampleTr: "Şimdi odaklanırsak bunu başarırız.", category: "iş" },

    // GÜN 116–120
    // GÜN 116: Hukuk ve Resmiyet
    { id: 576, day: 116, german: "Ich möchte den Sachverhalt genau verstehen.", pronunciation: "ih möşte den zahferhalt genou ferşteyen", turkish: "Durumu tam olarak anlamak istiyorum.", example: "Ich möchte den Sachverhalt genau verstehen.", exampleTr: "Durumu tam olarak anlamak istiyorum.", category: "resmi" },
    { id: 577, day: 116, german: "Können Sie mir die rechtliche Grundlage nennen?", pronunciation: "könen zi mir di rehtlihe grundlage nenen", turkish: "Bana yasal dayanağı söyleyebilir misiniz?", example: "Können Sie mir die rechtliche Grundlage nennen?", exampleTr: "Bana yasal dayanağı söyleyebilir misiniz?", category: "resmi" },
    { id: 578, day: 116, german: "Ich brauche dafür eine schriftliche Auskunft.", pronunciation: "ih brauhe dafür ayne şriftlihe auskunft", turkish: "Bunun için yazılı bilgiye ihtiyacım var.", example: "Ich brauche dafür eine schriftliche Auskunft.", exampleTr: "Bunun için yazılı bilgiye ihtiyacım var.", category: "resmi" },
    { id: 579, day: 116, german: "Bitte senden Sie mir die Unterlagen fristgerecht zu.", pronunciation: "bite zenden zi mir di unterlagen fristgereht tsu", turkish: "Lütfen belgeleri süresi içinde bana gönderin.", example: "Bitte senden Sie mir die Unterlagen fristgerecht zu.", exampleTr: "Lütfen belgeleri süresi içinde bana gönderin.", category: "resmi" },
    { id: 580, day: 116, german: "Ich werde den Bescheid sorgfältig prüfen.", pronunciation: "ih verde den beşayd zorgfeltig prüfen", turkish: "Kararı dikkatlice inceleyeceğim.", example: "Ich werde den Bescheid sorgfältig prüfen.", exampleTr: "Kararı dikkatlice inceleyeceğim.", category: "resmi" },

    // GÜN 117: Kamu Daireleri
    { id: 581, day: 117, german: "Wo muss ich die Nummer ziehen?", pronunciation: "vo mus ih di numer tsien", turkish: "Sıra numarasını nereden almalıyım?", example: "Wo muss ich die Nummer ziehen?", exampleTr: "Sıra numarasını nereden almalıyım?", category: "resmi" },
    { id: 582, day: 117, german: "An welchem Schalter bin ich richtig?", pronunciation: "an velhem şalter bin ih rihtig", turkish: "Hangi bankoya gitmeliyim?", example: "An welchem Schalter bin ich richtig?", exampleTr: "Hangi bankoya gitmeliyim?", category: "resmi" },
    { id: 583, day: 117, german: "Ich warte schon seit einer Stunde.", pronunciation: "ih varte şon zayt ayner ştunde", turkish: "Bir saattir bekliyorum.", example: "Ich warte schon seit einer Stunde hier.", exampleTr: "Burada bir saattir bekliyorum.", category: "günlük" },
    { id: 584, day: 117, german: "Könnten Sie mir sagen, wie lange es noch dauert?", pronunciation: "könten zi mir zagen, vi lange es noh dauert", turkish: "Daha ne kadar süreceğini söyleyebilir misiniz?", example: "Könnten Sie mir sagen, wie lange es noch dauert?", exampleTr: "Daha ne kadar süreceğini söyleyebilir misiniz?", category: "resmi" },
    { id: 585, day: 117, german: "Danke für Ihre Geduld und Erklärung.", pronunciation: "danke für ire gedult und erklerung", turkish: "Sabrınız ve açıklamanız için teşekkür ederim.", example: "Danke für Ihre Geduld und Erklärung.", exampleTr: "Sabrınız ve açıklamanız için teşekkür ederim.", category: "sosyal" },

    // GÜN 118: Üniversite İşleri
    { id: 586, day: 118, german: "Ich muss meine Immatrikulation verlängern.", pronunciation: "ih mus mayne imatrikulatsyon ferlengern", turkish: "Kaydımı uzatmam gerekiyor.", example: "Ich muss meine Immatrikulation verlängern.", exampleTr: "Kaydımı uzatmam gerekiyor.", category: "resmi" },
    { id: 587, day: 118, german: "Welche Fristen gelten für das nächste Semester?", pronunciation: "velhe fristen gelten für das nehste zemeşter", turkish: "Gelecek dönem için hangi tarihler geçerli?", example: "Welche Fristen gelten für das nächste Semester?", exampleTr: "Gelecek dönem için hangi tarihler geçerli?", category: "resmi" },
    { id: 588, day: 118, german: "Ich habe noch eine Frage zu meinen Leistungspunkten.", pronunciation: "ih habe noh ayne frage tsu maynen laystungspunkten", turkish: "Kredilerimle ilgili bir sorum daha var.", example: "Ich habe noch eine Frage zu meinen Leistungspunkten.", exampleTr: "Kredilerimle ilgili bir sorum daha var.", category: "resmi" },
    { id: 589, day: 118, german: "Können Sie den Kurs noch für mich freischalten?", pronunciation: "könen zi den kurs noh für mih frayşalten", turkish: "Dersi benim için hâlâ açabilir misiniz?", example: "Können Sie den Kurs noch für mich freischalten?", exampleTr: "Dersi benim için hâlâ açabilir misiniz?", category: "resmi" },
    { id: 590, day: 118, german: "Ich möchte sicher sein, dass alles korrekt eingetragen ist.", pronunciation: "ih möşte ziher zayn, das ales korekt ayngetragn ist", turkish: "Her şeyin doğru işlendiğinden emin olmak istiyorum.", example: "Ich möchte sicher sein, dass alles korrekt eingetragen ist.", exampleTr: "Her şeyin doğru işlendiğinden emin olmak istiyorum.", category: "resmi" },

    // GÜN 119: Burs ve Başvurular
    { id: 591, day: 119, german: "Ich interessiere mich für das Stipendienprogramm.", pronunciation: "ih intereseere mih für das ştipendienprogram", turkish: "Burs programıyla ilgileniyorum.", example: "Ich interessiere mich für das Stipendienprogramm.", exampleTr: "Burs programıyla ilgileniyorum.", category: "resmi" },
    { id: 592, day: 119, german: "Welche Voraussetzungen muss ich erfüllen?", pronunciation: "velhe forauszetsungen mus ih erfüllen", turkish: "Hangi şartları sağlamam gerekiyor?", example: "Welche Voraussetzungen muss ich erfüllen?", exampleTr: "Hangi şartları sağlamam gerekiyor?", category: "resmi" },
    { id: 593, day: 119, german: "Mein Motivationsschreiben ist fast fertig.", pronunciation: "mayn motivatsyonşrayben ist fast fertih", turkish: "Niyet mektubum neredeyse hazır.", example: "Mein Motivationsschreiben ist fast fertig.", exampleTr: "Niyet mektubum neredeyse hazır.", category: "günlük" },
    { id: 594, day: 119, german: "Fehlt noch ein Empfehlungsschreiben?", pronunciation: "felt noh ayn empfehlungşrayben", turkish: "Bir tavsiye mektubu daha gerekiyor mu?", example: "Fehlt noch ein Empfehlungsschreiben?", exampleTr: "Bir tavsiye mektubu daha gerekiyor mu?", category: "resmi" },
    { id: 595, day: 119, german: "Ich hoffe auf eine positive Rückmeldung.", pronunciation: "ih hofe auf ayne pozitivə rükmeldung", turkish: "Olumlu bir geri dönüş umuyorum.", example: "Ich hoffe auf eine positive Rückmeldung.", exampleTr: "Olumlu bir geri dönüş umuyorum.", category: "günlük" },

    // GÜN 120: Mezuniyet ve Kariyer Günleri
    { id: 596, day: 120, german: "Die Messe ist eine gute Gelegenheit zum Netzwerken.", pronunciation: "di meze ist ayne gute gelegənhayt tsum netsverken", turkish: "Fuar, bağlantı kurmak için iyi bir fırsat.", example: "Die Messe ist eine gute Gelegenheit zum Netzwerken.", exampleTr: "Fuar, bağlantı kurmak için iyi bir fırsat.", category: "iş" },
    { id: 597, day: 120, german: "Ich habe meinen Lebenslauf schon ausgedruckt.", pronunciation: "ih habe maynen lebenslauf şon ausgedrukt", turkish: "Özgeçmişimi zaten yazdırdım.", example: "Ich habe meinen Lebenslauf schon ausgedruckt.", exampleTr: "Özgeçmişimi zaten yazdırdım.", category: "iş" },
    { id: 598, day: 120, german: "Welche Firmen sind heute vertreten?", pronunciation: "velhe firmen zint hoyte fertreten", turkish: "Bugün hangi şirketler katılıyor?", example: "Welche Firmen sind heute vertreten?", exampleTr: "Bugün hangi şirketler katılıyor?", category: "iş" },
    { id: 599, day: 120, german: "Ich möchte mehr über Ihre Praktikumsangebote erfahren.", pronunciation: "ih möşte mer über ire praktikumsangebote erfarən", turkish: "Staj olanaklarınız hakkında daha fazla bilgi almak istiyorum.", example: "Ich möchte mehr über Ihre Praktikumsangebote erfahren.", exampleTr: "Staj olanaklarınız hakkında daha fazla bilgi almak istiyorum.", category: "iş" },
    { id: 600, day: 120, german: "Das Gespräch war kurz, aber sehr hilfreich.", pronunciation: "das geşpreh var kurz, aber zeyr hilfrayh", turkish: "Görüşme kısaydı ama çok faydalıydı.", example: "Das Gespräch war kurz, aber sehr hilfreich.", exampleTr: "Görüşme kısaydı ama çok faydalıydı.", category: "iş" },

    // GÜN 121–125
    // GÜN 121: Dil Öğrenimi
    { id: 601, day: 121, german: "Ich verstehe schon viel mehr als früher.", pronunciation: "ih ferşteye şon fil mer als früyır", turkish: "Eskisine göre çok daha fazlasını anlıyorum.", example: "Ich verstehe schon viel mehr als früher.", exampleTr: "Eskisine göre çok daha fazlasını anlıyorum.", category: "günlük" },
    { id: 602, day: 121, german: "Beim Sprechen fehlt mir manchmal noch das richtige Wort.", pronunciation: "baym şprehen felt mir manhmal noh das rihtige vort", turkish: "Konuşurken bazen doğru kelimeyi bulamıyorum.", example: "Beim Sprechen fehlt mir manchmal noch das richtige Wort.", exampleTr: "Konuşurken bazen doğru kelimeyi bulamıyorum.", category: "günlük" },
    { id: 603, day: 121, german: "Ich möchte flüssiger und spontaner sprechen.", pronunciation: "ih möşte flüsiger und şpontaner şprehen", turkish: "Daha akıcı ve daha spontane konuşmak istiyorum.", example: "Ich möchte flüssiger und spontaner sprechen.", exampleTr: "Daha akıcı ve daha spontane konuşmak istiyorum.", category: "günlük" },
    { id: 604, day: 121, german: "Jeder Fehler hilft mir beim Lernen.", pronunciation: "yeder feyler hilft mir baym lernen", turkish: "Her hata öğrenmeme yardımcı oluyor.", example: "Jeder Fehler hilft mir beim Lernen.", exampleTr: "Her hata öğrenmeme yardımcı oluyor.", category: "sosyal" },
    { id: 605, day: 121, german: "Mit regelmäßiger Übung wird es immer leichter.", pronunciation: "mit regelmeziger übung virt es imer layhter", turkish: "Düzenli pratikle gittikçe kolaylaşıyor.", example: "Mit regelmäßiger Übung wird es immer leichter.", exampleTr: "Düzenli pratikle gittikçe kolaylaşıyor.", category: "sosyal" },

    // GÜN 122: Telaffuz ve Düzeltme
    { id: 606, day: 122, german: "Könnten Sie meine Aussprache kurz korrigieren?", pronunciation: "könten zi mayne ausşprahe kurz korrigiren", turkish: "Telaffuzumu kısaca düzeltebilir misiniz?", example: "Könnten Sie meine Aussprache kurz korrigieren?", exampleTr: "Telaffuzumu kısaca düzeltebilir misiniz?", category: "günlük" },
    { id: 607, day: 122, german: "Dieses Wort fällt mir noch schwer.", pronunciation: "dizes vort felt mir noh şver", turkish: "Bu kelimeyi söylemek hâlâ zor geliyor.", example: "Dieses Wort fällt mir noch schwer.", exampleTr: "Bu kelimeyi söylemek hâlâ zor geliyor.", category: "günlük" },
    { id: 608, day: 122, german: "Bitte sprechen Sie es noch einmal langsam aus.", pronunciation: "bite şprehen zi es noh aynmal langzam aus", turkish: "Lütfen onu bir kez daha yavaş söyleyin.", example: "Bitte sprechen Sie es noch einmal langsam aus.", exampleTr: "Lütfen onu bir kez daha yavaş söyleyin.", category: "günlük" },
    { id: 609, day: 122, german: "Ich höre den Unterschied noch nicht deutlich.", pronunciation: "ih höre den unteşid noh niht doytlih", turkish: "Farkı hâlâ net duyamıyorum.", example: "Ich höre den Unterschied noch nicht deutlich.", exampleTr: "Farkı hâlâ net duyamıyorum.", category: "günlük" },
    { id: 610, day: 122, german: "Mit Geduld wird meine Aussprache besser.", pronunciation: "mit gedult virt mayne ausşprahe beser", turkish: "Sabırla telaffuzum daha iyi olacak.", example: "Mit Geduld wird meine Aussprache besser.", exampleTr: "Sabırla telaffuzum daha iyi olacak.", category: "sosyal" },

    // GÜN 123: Sosyal Nezaket
    { id: 611, day: 123, german: "Es war sehr freundlich von Ihnen.", pronunciation: "es var zeyr froyndlih fon inen", turkish: "Bu çok nazikçeydi.", example: "Es war sehr freundlich von Ihnen.", exampleTr: "Bu çok nazikçeydi.", category: "sosyal" },
    { id: 612, day: 123, german: "Entschuldigen Sie bitte die Verspätung.", pronunciation: "entşuldigen zi bite di ferşpetung", turkish: "Gecikme için lütfen kusura bakmayın.", example: "Entschuldigen Sie bitte die Verspätung.", exampleTr: "Gecikme için lütfen kusura bakmayın.", category: "resmi" },
    { id: 613, day: 123, german: "Darf ich Ihnen dabei helfen?", pronunciation: "darf ih inen dabay helfen", turkish: "Size bu konuda yardım edebilir miyim?", example: "Darf ich Ihnen dabei helfen?", exampleTr: "Size bu konuda yardım edebilir miyim?", category: "sosyal" },
    { id: 614, day: 123, german: "Vielen Dank für Ihre Einladung.", pronunciation: "filen dank für ire aynladung", turkish: "Davetiniz için çok teşekkür ederim.", example: "Vielen Dank für Ihre Einladung.", exampleTr: "Davetiniz için çok teşekkür ederim.", category: "sosyal" },
    { id: 615, day: 123, german: "Ich habe mich sehr über das Gespräch gefreut.", pronunciation: "ih habe mih zeyr über das geşpreh gefroyt", turkish: "Bu sohbet beni çok mutlu etti.", example: "Ich habe mich sehr über das Gespräch gefreut.", exampleTr: "Bu sohbet beni çok mutlu etti.", category: "sosyal" },

    // GÜN 124: Uyum ve Kültür
    { id: 616, day: 124, german: "Ich lerne jeden Tag etwas Neues über das Leben hier.", pronunciation: "ih lerne yeden tag etvas noyes über das leben hir", turkish: "Buradaki yaşam hakkında her gün yeni bir şey öğreniyorum.", example: "Ich lerne jeden Tag etwas Neues über das Leben hier.", exampleTr: "Buradaki yaşam hakkında her gün yeni bir şey öğreniyorum.", category: "günlük" },
    { id: 617, day: 124, german: "Viele Gewohnheiten sind anders, aber interessant.", pronunciation: "file gevohnhayten zint anders, aber interesant", turkish: "Birçok alışkanlık farklı ama ilginç.", example: "Viele Gewohnheiten sind anders, aber interessant.", exampleTr: "Birçok alışkanlık farklı ama ilginç.", category: "sosyal" },
    { id: 618, day: 124, german: "Mit der Zeit fühlt man sich immer sicherer.", pronunciation: "mit der tsayt fült man zih imer ziherer", turkish: "Zamanla insan kendini daha güvende hissediyor.", example: "Mit der Zeit fühlt man sich immer sicherer.", exampleTr: "Zamanla insan kendini daha güvende hissediyor.", category: "sosyal" },
    { id: 619, day: 124, german: "Es hilft sehr, offen und neugierig zu bleiben.", pronunciation: "es hilft zeyr, ofen und noygirig tsu blayben", turkish: "Açık ve meraklı kalmak çok yardımcı oluyor.", example: "Es hilft sehr, offen und neugierig zu bleiben.", exampleTr: "Açık ve meraklı kalmak çok yardımcı oluyor.", category: "sosyal" },
    { id: 620, day: 124, german: "Ich bin dankbar für jede neue Erfahrung.", pronunciation: "ih bin dankbar für yede noye erfarung", turkish: "Her yeni deneyim için minnettarım.", example: "Ich bin dankbar für jede neue Erfahrung.", exampleTr: "Her yeni deneyim için minnettarım.", category: "sosyal" },

    // GÜN 125: Ev Arama
    { id: 621, day: 125, german: "Die Lage der Wohnung ist für mich sehr wichtig.", pronunciation: "di lage der vonung ist für mih zeyr vihtig", turkish: "Dairenin konumu benim için çok önemli.", example: "Die Lage der Wohnung ist für mich sehr wichtig.", exampleTr: "Dairenin konumu benim için çok önemli.", category: "günlük" },
    { id: 622, day: 125, german: "Gibt es in der Nähe gute Verkehrsanbindungen?", pronunciation: "gibt es in der nehe gute ferkersanbindungen", turkish: "Yakınlarda iyi ulaşım bağlantıları var mı?", example: "Gibt es in der Nähe gute Verkehrsanbindungen?", exampleTr: "Yakınlarda iyi ulaşım bağlantıları var mı?", category: "günlük" },
    { id: 623, day: 125, german: "Wie hoch ist die Warmmiete insgesamt?", pronunciation: "vi hoh ist di varmmitə insgezamt", turkish: "Toplam sıcak kira ne kadar?", example: "Wie hoch ist die Warmmiete insgesamt?", exampleTr: "Toplam sıcak kira ne kadar?", category: "günlük" },
    { id: 624, day: 125, german: "Ich interessiere mich für eine Besichtigung.", pronunciation: "ih intereseere mih für ayne bezihtiğung", turkish: "Evi görmekle ilgileniyorum.", example: "Ich interessiere mich für eine Besichtigung der Wohnung.", exampleTr: "Daireyi görmekle ilgileniyorum.", category: "resmi" },
    { id: 625, day: 125, german: "Die Wohnung macht auf den ersten Blick einen guten Eindruck.", pronunciation: "di vonung maht auf den ersten blik aynen guten ayndruk", turkish: "Daire ilk bakışta iyi bir izlenim bırakıyor.", example: "Die Wohnung macht auf den ersten Blick einen guten Eindruck.", exampleTr: "Daire ilk bakışta iyi bir izlenim bırakıyor.", category: "günlük" },

    // GÜN 126–130
    // GÜN 126: Taşınma
    { id: 626, day: 126, german: "Der Umzug ist anstrengender als gedacht.", pronunciation: "der umtsug ist anştrengender als gedaht", turkish: "Taşınma düşündüğümden daha yorucu.", example: "Der Umzug ist anstrengender als gedacht.", exampleTr: "Taşınma düşündüğümden daha yorucu.", category: "günlük" },
    { id: 627, day: 126, german: "Wir müssen noch einige Kisten packen.", pronunciation: "vir müsen noh aynige kisten pakən", turkish: "Hâlâ birkaç koli toplamamız gerekiyor.", example: "Wir müssen heute noch einige Kisten packen.", exampleTr: "Bugün hâlâ birkaç koli toplamamız gerekiyor.", category: "günlük" },
    { id: 628, day: 126, german: "Kannst du mir beim Tragen helfen?", pronunciation: "kanst du mir baym tragen helfen", turkish: "Taşımada bana yardım edebilir misin?", example: "Kannst du mir beim Tragen helfen?", exampleTr: "Taşımada bana yardım edebilir misin?", category: "sosyal" },
    { id: 629, day: 126, german: "Die neue Adresse muss ich überall ändern.", pronunciation: "di noye adrese mus ih überall endern", turkish: "Yeni adresi her yerde değiştirmem gerekiyor.", example: "Die neue Adresse muss ich überall ändern.", exampleTr: "Yeni adresi her yerde değiştirmem gerekiyor.", category: "günlük" },
    { id: 630, day: 126, german: "Wenn alles vorbei ist, werde ich erleichtert sein.", pronunciation: "ven ales forbay ist, verde ih erlayhtert zayn", turkish: "Her şey bitince rahatlamış olacağım.", example: "Wenn alles vorbei ist, werde ich erleichtert sein.", exampleTr: "Her şey bitince rahatlamış olacağım.", category: "sosyal" },

    // GÜN 127: Ev Düzeni
    { id: 631, day: 127, german: "Dieses Möbelstück passt perfekt in die Ecke.", pronunciation: "dizes möbelştük past perfekt in di eke", turkish: "Bu mobilya tam köşeye uyuyor.", example: "Dieses Möbelstück passt perfekt in die Ecke.", exampleTr: "Bu mobilya tam köşeye uyuyor.", category: "günlük" },
    { id: 632, day: 127, german: "Ich suche noch nach einer Lampe fürs Wohnzimmer.", pronunciation: "ih zuhe noh nah ayner lampe fürs vontsimer", turkish: "Salon için hâlâ bir lamba arıyorum.", example: "Ich suche noch nach einer Lampe fürs Wohnzimmer.", exampleTr: "Salon için hâlâ bir lamba arıyorum.", category: "günlük" },
    { id: 633, day: 127, german: "Die Wohnung fühlt sich langsam wie ein Zuhause an.", pronunciation: "di vonung fült zih langzam vi ayn tsuhauze an", turkish: "Ev yavaş yavaş yuva gibi hissettirmeye başladı.", example: "Die Wohnung fühlt sich langsam wie ein Zuhause an.", exampleTr: "Ev yavaş yavaş yuva gibi hissettirmeye başladı.", category: "sosyal" },
    { id: 634, day: 127, german: "Ich möchte es lieber schlicht und praktisch halten.", pronunciation: "ih möşte es liber şliht und praktiş halten", turkish: "Bunu daha sade ve kullanışlı tutmak istiyorum.", example: "Ich möchte es lieber schlicht und praktisch halten.", exampleTr: "Bunu daha sade ve kullanışlı tutmak istiyorum.", category: "günlük" },
    { id: 635, day: 127, german: "Mit kleinen Details wirkt der Raum viel wärmer.", pronunciation: "mit klaynen detayls virkt der raum fil vermer", turkish: "Küçük detaylarla oda çok daha sıcak görünüyor.", example: "Mit kleinen Details wirkt der Raum viel wärmer.", exampleTr: "Küçük detaylarla oda çok daha sıcak görünüyor.", category: "sosyal" },

    // GÜN 128: Abonelikler ve Faturalar
    { id: 636, day: 128, german: "Ich muss noch Strom und Internet anmelden.", pronunciation: "ih mus noh ştrom und internet anmelden", turkish: "Elektrik ve internet aboneliğini hâlâ yaptırmam gerekiyor.", example: "Ich muss noch Strom und Internet anmelden.", exampleTr: "Elektrik ve internet aboneliğini hâlâ yaptırmam gerekiyor.", category: "resmi" },
    { id: 637, day: 128, german: "Welcher Tarif passt am besten zu meinem Verbrauch?", pronunciation: "velher tarif past am besten tsu maynem ferbrauh", turkish: "Kullanımıma en uygun tarife hangisi?", example: "Welcher Tarif passt am besten zu meinem Verbrauch?", exampleTr: "Kullanımıma en uygun tarife hangisi?", category: "günlük" },
    { id: 638, day: 128, german: "Gibt es eine monatliche Grundgebühr?", pronunciation: "gibt es ayne monatlihe grundgebür", turkish: "Aylık sabit bir ücret var mı?", example: "Gibt es eine monatliche Grundgebühr?", exampleTr: "Aylık sabit bir ücret var mı?", category: "günlük" },
    { id: 639, day: 128, german: "Bitte schicken Sie mir den Vertrag digital zu.", pronunciation: "bite şiken zi mir den fertrag digital tsu", turkish: "Lütfen sözleşmeyi bana dijital olarak gönderin.", example: "Bitte schicken Sie mir den Vertrag digital zu.", exampleTr: "Lütfen sözleşmeyi bana dijital olarak gönderin.", category: "resmi" },
    { id: 640, day: 128, german: "Ich möchte alles an einem Ort übersichtlich haben.", pronunciation: "ih möşte ales an aynem ort überzihtlih haben", turkish: "Her şeyi tek bir yerde düzenli görmek istiyorum.", example: "Ich möchte alles an einem Ort übersichtlich haben.", exampleTr: "Her şeyi tek bir yerde düzenli görmek istiyorum.", category: "günlük" },

    // GÜN 129: Birikim ve Bütçe
    { id: 641, day: 129, german: "Ich möchte meine Ausgaben besser kontrollieren.", pronunciation: "ih möşte mayne ausgaben beser kontroliren", turkish: "Harcamalarımı daha iyi kontrol etmek istiyorum.", example: "Ich möchte meine Ausgaben besser kontrollieren.", exampleTr: "Harcamalarımı daha iyi kontrol etmek istiyorum.", category: "günlük" },
    { id: 642, day: 129, german: "Dafür brauche ich einen realistischen Plan.", pronunciation: "dafür brauhe ih aynen realistişen plan", turkish: "Bunun için gerçekçi bir plana ihtiyacım var.", example: "Dafür brauche ich einen realistischen Plan.", exampleTr: "Bunun için gerçekçi bir plana ihtiyacım var.", category: "günlük" },
    { id: 643, day: 129, german: "Jeder kleine Betrag summiert sich mit der Zeit.", pronunciation: "yeder klayne betrag zummirt zih mit der tsayt", turkish: "Her küçük miktar zamanla birikir.", example: "Jeder kleine Betrag summiert sich mit der Zeit.", exampleTr: "Her küçük miktar zamanla birikir.", category: "sosyal" },
    { id: 644, day: 129, german: "Ich vergleiche jetzt bewusster Preise.", pronunciation: "ih ferglayhe yets bevuster prayze", turkish: "Artık fiyatları daha bilinçli karşılaştırıyorum.", example: "Ich vergleiche jetzt bewusster Preise.", exampleTr: "Artık fiyatları daha bilinçli karşılaştırıyorum.", category: "günlük" },
    { id: 645, day: 129, german: "Sparen gibt mir ein gutes Gefühl.", pronunciation: "şparən gibt mir ayn gutes gefül", turkish: "Tasarruf etmek bana iyi hissettiriyor.", example: "Sparen gibt mir ein gutes Gefühl.", exampleTr: "Tasarruf etmek bana iyi hissettiriyor.", category: "sosyal" },

    // GÜN 130: Yurtdışı Yolculuğu
    { id: 646, day: 130, german: "Ich reise nächste Woche ins Ausland.", pronunciation: "ih rayze nehste vohe ins auslant", turkish: "Gelecek hafta yurtdışına gidiyorum.", example: "Ich reise nächste Woche ins Ausland.", exampleTr: "Gelecek hafta yurtdışına gidiyorum.", category: "seyahat" },
    { id: 647, day: 130, german: "Habe ich alle wichtigen Unterlagen dabei?", pronunciation: "habe ih ale vihtigen unterlagen dabay", turkish: "Gerekli tüm belgeler yanımda mı?", example: "Habe ich alle wichtigen Unterlagen dabei?", exampleTr: "Gerekli tüm belgeler yanımda mı?", category: "seyahat" },
    { id: 648, day: 130, german: "Ich muss noch die Reservierung bestätigen.", pronunciation: "ih mus noh di rezervirung beştetigen", turkish: "Rezervasyonu hâlâ onaylamam gerekiyor.", example: "Ich muss noch die Reservierung bestätigen.", exampleTr: "Rezervasyonu hâlâ onaylamam gerekiyor.", category: "seyahat" },
    { id: 649, day: 130, german: "Zum Glück habe ich früh genug gepackt.", pronunciation: "tsum glük habe ih frü genuk gepakt", turkish: "Neyse ki valizimi yeterince erken hazırladım.", example: "Zum Glück habe ich früh genug gepackt.", exampleTr: "Neyse ki valizimi yeterince erken hazırladım.", category: "seyahat" },
    { id: 650, day: 130, german: "Ich freue mich schon auf neue Eindrücke.", pronunciation: "ih froye mih şon auf noye ayndrüke", turkish: "Yeni deneyimler için şimdiden heyecanlıyım.", example: "Ich freue mich schon auf neue Eindrücke.", exampleTr: "Yeni deneyimler için şimdiden heyecanlıyım.", category: "seyahat" },

    // GÜN 131–135
    // GÜN 131: Kayıp Bagaj
    { id: 651, day: 131, german: "Mein Koffer ist leider nicht angekommen.", pronunciation: "mayn kofer ist layder niht angekommen", turkish: "Valizim maalesef gelmedi.", example: "Mein Koffer ist leider nicht angekommen.", exampleTr: "Valizim maalesef gelmedi.", category: "seyahat" },
    { id: 652, day: 131, german: "Wo kann ich den Verlust melden?", pronunciation: "vo kan ih den ferlust melden", turkish: "Kayıp bildirimini nerede yapabilirim?", example: "Wo kann ich den Verlust melden?", exampleTr: "Kayıp bildirimini nerede yapabilirim?", category: "seyahat" },
    { id: 653, day: 131, german: "Hier ist mein Gepäckschein.", pronunciation: "hir ist mayn gepəkşayn", turkish: "İşte bagaj fişim.", example: "Hier ist mein Gepäckschein und mein Ausweis.", exampleTr: "İşte bagaj fişim ve kimliğim.", category: "seyahat" },
    { id: 654, day: 131, german: "Wann bekomme ich eine Rückmeldung?", pronunciation: "van bekomə ih ayne rükmeldung", turkish: "Ne zaman geri dönüş alırım?", example: "Wann bekomme ich eine Rückmeldung?", exampleTr: "Ne zaman geri dönüş alırım?", category: "seyahat" },
    { id: 655, day: 131, german: "Ich hoffe, dass der Koffer bald gefunden wird.", pronunciation: "ih hofe, das der kofer bald gefunden virt", turkish: "Valizin yakında bulunacağını umuyorum.", example: "Ich hoffe, dass der Koffer bald gefunden wird.", exampleTr: "Valizin yakında bulunacağını umuyorum.", category: "seyahat" },

    // GÜN 132: Konaklama Sorunları
    { id: 656, day: 132, german: "Die Reservierung ist anscheinend nicht im System.", pronunciation: "di rezervirung ist anşaynənt niht im zistem", turkish: "Rezervasyon sistemde görünmüyor gibi.", example: "Die Reservierung ist anscheinend nicht im System.", exampleTr: "Rezervasyon sistemde görünmüyor gibi.", category: "seyahat" },
    { id: 657, day: 132, german: "Ich habe eine Bestätigung per E-Mail bekommen.", pronunciation: "ih habe ayne beştetigung per i-mayl bekomen", turkish: "E-posta ile onay almıştım.", example: "Ich habe eine Bestätigung per E-Mail bekommen.", exampleTr: "E-posta ile onay almıştım.", category: "seyahat" },
    { id: 658, day: 132, german: "Könnten Sie das bitte noch einmal prüfen?", pronunciation: "könten zi das bite noh aynmal prüfen", turkish: "Bunu bir kez daha kontrol eder misiniz lütfen?", example: "Könnten Sie das bitte noch einmal prüfen?", exampleTr: "Bunu bir kez daha kontrol eder misiniz lütfen?", category: "seyahat" },
    { id: 659, day: 132, german: "Ich brauche heute dringend ein Zimmer.", pronunciation: "ih brauhe hoyte dringent ayn tsimır", turkish: "Bugün acilen bir odaya ihtiyacım var.", example: "Ich brauche heute dringend ein Zimmer.", exampleTr: "Bugün acilen bir odaya ihtiyacım var.", category: "seyahat" },
    { id: 660, day: 132, german: "Vielen Dank, dass Sie eine Lösung gefunden haben.", pronunciation: "filen dank, das zi ayne lözung gefunden haben", turkish: "Çözüm bulduğunuz için çok teşekkür ederim.", example: "Vielen Dank, dass Sie eine Lösung gefunden haben.", exampleTr: "Çözüm bulduğunuz için çok teşekkür ederim.", category: "sosyal" },

    // GÜN 133: İş Seyahati
    { id: 661, day: 133, german: "Ich bin morgen auf einer Geschäftsreise.", pronunciation: "ih bin morgen auf ayner geşeftsrayze", turkish: "Yarın iş seyahatine çıkıyorum.", example: "Ich bin morgen auf einer Geschäftsreise.", exampleTr: "Yarın iş seyahatine çıkıyorum.", category: "iş" },
    { id: 662, day: 133, german: "Der Termin vor Ort beginnt um neun Uhr.", pronunciation: "der termin for ort begint um noyn ur", turkish: "Yerindeki toplantı saat dokuzda başlıyor.", example: "Der Termin vor Ort beginnt um neun Uhr.", exampleTr: "Yerindeki toplantı saat dokuzda başlıyor.", category: "iş" },
    { id: 663, day: 133, german: "Ich habe alle Unterlagen im Handgepäck.", pronunciation: "ih habe ale unterlagen im hantgepək", turkish: "Tüm belgeler el bagajımda.", example: "Ich habe alle Unterlagen im Handgepäck.", exampleTr: "Tüm belgeler el bagajımda.", category: "iş" },
    { id: 664, day: 133, german: "Nach der Ankunft fahre ich direkt zum Hotel.", pronunciation: "nah der ankunft fare ih direkt tsum hotel", turkish: "Varıştan sonra doğrudan otele gideceğim.", example: "Nach der Ankunft fahre ich direkt zum Hotel.", exampleTr: "Varıştan sonra doğrudan otele gideceğim.", category: "seyahat" },
    { id: 665, day: 133, german: "Ich hoffe, dass alles reibungslos läuft.", pronunciation: "ih hofe, das ales raybungslos loyft", turkish: "Umarım her şey sorunsuz ilerler.", example: "Ich hoffe, dass alles reibungslos läuft.", exampleTr: "Umarım her şey sorunsuz ilerler.", category: "iş" },

    // GÜN 134: Uluslararası İşbirliği
    { id: 666, day: 134, german: "Wir arbeiten mit mehreren Teams aus verschiedenen Ländern zusammen.", pronunciation: "vir arbayten mit mereren tims aus ferşidenen lendern tsuzamen", turkish: "Farklı ülkelerden birkaç ekiple birlikte çalışıyoruz.", example: "Wir arbeiten mit mehreren Teams aus verschiedenen Ländern zusammen.", exampleTr: "Farklı ülkelerden birkaç ekiple birlikte çalışıyoruz.", category: "iş" },
    { id: 667, day: 134, german: "Zeitverschiebung macht die Planung manchmal schwierig.", pronunciation: "tsaytferşibung maht di planung manhmal şvirig", turkish: "Saat farkı planlamayı bazen zorlaştırıyor.", example: "Zeitverschiebung macht die Planung manchmal schwierig.", exampleTr: "Saat farkı planlamayı bazen zorlaştırıyor.", category: "iş" },
    { id: 668, day: 134, german: "Trotzdem lernen wir viel voneinander.", pronunciation: "trotsdem lernen vir fil fonaynander", turkish: "Buna rağmen birbirimizden çok şey öğreniyoruz.", example: "Trotzdem lernen wir viel voneinander.", exampleTr: "Buna rağmen birbirimizden çok şey öğreniyoruz.", category: "iş" },
    { id: 669, day: 134, german: "Klare Absprachen sind hier besonders wichtig.", pronunciation: "klare apşprahen zint hir bezonders vihtig", turkish: "Burada net anlaşmalar özellikle önemli.", example: "Klare Absprachen sind hier besonders wichtig.", exampleTr: "Burada net anlaşmalar özellikle önemli.", category: "iş" },
    { id: 670, day: 134, german: "Ich schätze diese internationale Erfahrung sehr.", pronunciation: "ih şetse dize internatsyonale erfarung zeyr", turkish: "Bu uluslararası deneyimi çok değerli buluyorum.", example: "Ich schätze diese internationale Erfahrung sehr.", exampleTr: "Bu uluslararası deneyimi çok değerli buluyorum.", category: "iş" },

    // GÜN 135: Yayın Hazırlığı
    { id: 671, day: 135, german: "Wir arbeiten gerade an einem wissenschaftlichen Artikel.", pronunciation: "vir arbayten grade an aynem visenşaftlihen artikel", turkish: "Şu anda bilimsel bir makale üzerinde çalışıyoruz.", example: "Wir arbeiten gerade an einem wissenschaftlichen Artikel.", exampleTr: "Şu anda bilimsel bir makale üzerinde çalışıyoruz.", category: "iş" },
    { id: 672, day: 135, german: "Die Ergebnisse müssen noch sauber dargestellt werden.", pronunciation: "di ergebnisse müsen noh zauber dargestellt verden", turkish: "Sonuçların hâlâ düzgün şekilde sunulması gerekiyor.", example: "Die Ergebnisse müssen noch sauber dargestellt werden.", exampleTr: "Sonuçların hâlâ düzgün şekilde sunulması gerekiyor.", category: "iş" },
    { id: 673, day: 135, german: "Könnten Sie den Entwurf noch einmal gegenlesen?", pronunciation: "könten zi den entvurf noh aynmal gegənleyzen", turkish: "Taslağı bir kez daha gözden geçirir misiniz?", example: "Könnten Sie den Entwurf noch einmal gegenlesen?", exampleTr: "Taslağı bir kez daha gözden geçirir misiniz?", category: "iş" },
    { id: 674, day: 135, german: "Die Einleitung muss noch präziser formuliert werden.", pronunciation: "di aynlaytung mus noh pretsizer formulirt verden", turkish: "Giriş kısmı daha net yazılmalı.", example: "Die Einleitung muss noch präziser formuliert werden.", exampleTr: "Giriş kısmı daha net yazılmalı.", category: "iş" },
    { id: 675, day: 135, german: "Wenn alles gut läuft, reichen wir nächste Woche ein.", pronunciation: "ven ales gut loyft, rayhen vir nehste vohe ayn", turkish: "Her şey iyi giderse gelecek hafta göndereceğiz.", example: "Wenn alles gut läuft, reichen wir nächste Woche ein.", exampleTr: "Her şey iyi giderse gelecek hafta göndereceğiz.", category: "iş" },

    // GÜN 136–140
    // GÜN 136: Laboratuvar Güvenliği
    { id: 676, day: 136, german: "Bitte tragen Sie immer die Schutzbrille.", pronunciation: "bite tragen zi imer di şutsbrile", turkish: "Lütfen koruyucu gözlüğü her zaman takın.", example: "Bitte tragen Sie immer die Schutzbrille.", exampleTr: "Lütfen koruyucu gözlüğü her zaman takın.", category: "iş" },
    { id: 677, day: 136, german: "Chemikalien müssen richtig beschriftet sein.", pronunciation: "hemikalien müsen rihtig beşriftet zayn", turkish: "Kimyasallar doğru şekilde etiketlenmelidir.", example: "Chemikalien müssen richtig beschriftet sein.", exampleTr: "Kimyasallar doğru şekilde etiketlenmelidir.", category: "iş" },
    { id: 678, day: 136, german: "Vor dem Versuch kontrollieren wir alle Geräte.", pronunciation: "for dem ferzuh kontroliren vir ale gerete", turkish: "Deneyden önce tüm cihazları kontrol ediyoruz.", example: "Vor dem Versuch kontrollieren wir alle Geräte.", exampleTr: "Deneyden önce tüm cihazları kontrol ediyoruz.", category: "iş" },
    { id: 679, day: 136, german: "Sicherheit geht immer vor Geschwindigkeit.", pronunciation: "ziherhayt geyt imer for geşvindigkayt", turkish: "Güvenlik her zaman hızdan önce gelir.", example: "Sicherheit geht immer vor Geschwindigkeit.", exampleTr: "Güvenlik her zaman hızdan önce gelir.", category: "iş" },
    { id: 680, day: 136, german: "Ein sauberer Arbeitsplatz verhindert viele Fehler.", pronunciation: "ayn zauberer arbaytsplats ferhindert file feyler", turkish: "Düzenli bir çalışma alanı birçok hatayı önler.", example: "Ein sauberer Arbeitsplatz verhindert viele Fehler.", exampleTr: "Düzenli bir çalışma alanı birçok hatayı önler.", category: "iş" },

    // GÜN 137: Veri Analizi
    { id: 681, day: 137, german: "Die Daten sehen auf den ersten Blick vielversprechend aus.", pronunciation: "di daten zeyen auf den ersten blik filferşprehent aus", turkish: "Veriler ilk bakışta umut verici görünüyor.", example: "Die Daten sehen auf den ersten Blick vielversprechend aus.", exampleTr: "Veriler ilk bakışta umut verici görünüyor.", category: "iş" },
    { id: 682, day: 137, german: "Wir sollten die Ergebnisse statistisch absichern.", pronunciation: "vir zolten di ergebnisse statistik absihırn", turkish: "Sonuçları istatistiksel olarak doğrulamalıyız.", example: "Wir sollten die Ergebnisse statistisch absichern.", exampleTr: "Sonuçları istatistiksel olarak doğrulamalıyız.", category: "iş" },
    { id: 683, day: 137, german: "Hier gibt es einen auffälligen Ausreißer.", pronunciation: "hir gibt es aynen aufeligen ausrayzer", turkish: "Burada dikkat çeken bir aykırı değer var.", example: "Hier gibt es einen auffälligen Ausreißer.", exampleTr: "Burada dikkat çeken bir aykırı değer var.", category: "iş" },
    { id: 684, day: 137, german: "Ohne gute Visualisierung versteht man die Zahlen kaum.", pronunciation: "one gute vizualizirung ferşteyt man di tsalen kaum", turkish: "İyi bir görselleştirme olmadan sayıları anlamak zor.", example: "Ohne gute Visualisierung versteht man die Zahlen kaum.", exampleTr: "İyi bir görselleştirme olmadan sayıları anlamak zor.", category: "iş" },
    { id: 685, day: 137, german: "Lassen Sie uns die wichtigsten Trends zusammenfassen.", pronunciation: "lasen zi uns di vihtigsten trends tsuzamenfasen", turkish: "En önemli eğilimleri özetleyelim.", example: "Lassen Sie uns die wichtigsten Trends zusammenfassen.", exampleTr: "En önemli eğilimleri özetleyelim.", category: "iş" },

    // GÜN 138: Toplantılar ve Kararlar
    { id: 686, day: 138, german: "Heute müssen wir eine endgültige Entscheidung treffen.", pronunciation: "hoyte müsen vir ayne endgültiğe entşaydung trefen", turkish: "Bugün kesin bir karar vermemiz gerekiyor.", example: "Heute müssen wir eine endgültige Entscheidung treffen.", exampleTr: "Bugün kesin bir karar vermemiz gerekiyor.", category: "iş" },
    { id: 687, day: 138, german: "Dafür brauchen wir die Zustimmung aller Beteiligten.", pronunciation: "dafür brauhen vir di tsuştimum aleer betaligten", turkish: "Bunun için tüm ilgili kişilerin onayına ihtiyacımız var.", example: "Dafür brauchen wir die Zustimmung aller Beteiligten.", exampleTr: "Bunun için tüm ilgili kişilerin onayına ihtiyacımız var.", category: "iş" },
    { id: 688, day: 138, german: "Ich sehe im Moment keinen besseren Vorschlag.", pronunciation: "ih zeye im moment kaynen beseren forşlag", turkish: "Şu anda daha iyi bir öneri görmüyorum.", example: "Ich sehe im Moment keinen besseren Vorschlag.", exampleTr: "Şu anda daha iyi bir öneri görmüyorum.", category: "iş" },
    { id: 689, day: 138, german: "Dann sollten wir das heute abschließen.", pronunciation: "dan zolten vir das hoyte apşlisen", turkish: "O zaman bunu bugün sonuçlandıralım.", example: "Dann sollten wir das heute abschließen.", exampleTr: "O zaman bunu bugün sonuçlandıralım.", category: "iş" },
    { id: 690, day: 138, german: "Ich dokumentiere den Beschluss direkt im Anschluss.", pronunciation: "ih dokumentire den beşlus direkt im anşlus", turkish: "Kararı hemen ardından belgeleyeceğim.", example: "Ich dokumentiere den Beschluss direkt im Anschluss.", exampleTr: "Kararı hemen ardından belgeleyeceğim.", category: "iş" },

    // GÜN 139: Girişimcilik
    { id: 691, day: 139, german: "Die Idee hat Potenzial, aber wir müssen sie testen.", pronunciation: "di idee hat potentsial, aber vir müsen zi testen", turkish: "Fikrin potansiyeli var ama onu test etmemiz gerekiyor.", example: "Die Idee hat Potenzial, aber wir müssen sie testen.", exampleTr: "Fikrin potansiyeli var ama onu test etmemiz gerekiyor.", category: "iş" },
    { id: 692, day: 139, german: "Wer gehört eigentlich zur Zielgruppe?", pronunciation: "ver gehört aynentlih tsur tsilgruppe", turkish: "Hedef kitle aslında kim?", example: "Wer gehört eigentlich zur Zielgruppe?", exampleTr: "Hedef kitle aslında kim?", category: "iş" },
    { id: 693, day: 139, german: "Ohne klares Konzept wird es schwer.", pronunciation: "one klares konzept virt es şver", turkish: "Net bir konsept olmadan zor olur.", example: "Ohne klares Konzept wird es schwer.", exampleTr: "Net bir konsept olmadan zor olur.", category: "iş" },
    { id: 694, day: 139, german: "Wir sollten klein anfangen und schnell lernen.", pronunciation: "vir zolten klayn anfangen und şnel lernen", turkish: "Küçük başlayıp hızlı öğrenmeliyiz.", example: "Wir sollten klein anfangen und schnell lernen.", exampleTr: "Küçük başlayıp hızlı öğrenmeliyiz.", category: "iş" },
    { id: 695, day: 139, german: "Mich motiviert es, etwas Eigenes aufzubauen.", pronunciation: "mih motivirt es, etvas aygenes auftsubauen", turkish: "Kendi işimi kurma fikri beni motive ediyor.", example: "Mich motiviert es, etwas Eigenes aufzubauen.", exampleTr: "Kendi işimi kurma fikri beni motive ediyor.", category: "iş" },

    // GÜN 140: Serbest Çalışma
    { id: 696, day: 140, german: "Ich arbeite gerade als Freelancer an mehreren Projekten.", pronunciation: "ih arbayte grade als freelanser an mereren proyekten", turkish: "Şu anda serbest çalışan olarak birkaç projede çalışıyorum.", example: "Ich arbeite gerade als Freelancer an mehreren Projekten.", exampleTr: "Şu anda serbest çalışan olarak birkaç projede çalışıyorum.", category: "iş" },
    { id: 697, day: 140, german: "Ich muss die Rechnung heute noch schreiben.", pronunciation: "ih mus di rehhnung hoyte noh şrayben", turkish: "Faturayı bugün yazmam gerekiyor.", example: "Ich muss die Rechnung heute noch schreiben.", exampleTr: "Faturayı bugün yazmam gerekiyor.", category: "iş" },
    { id: 698, day: 140, german: "Das Zahlungsziel beträgt vierzehn Tage.", pronunciation: "das tsalungszil betregt firtseyn tage", turkish: "Ödeme vadesi on dört gün.", example: "Das Zahlungsziel beträgt vierzehn Tage.", exampleTr: "Ödeme vadesi on dört gün.", category: "iş" },
    { id: 699, day: 140, german: "Ich dokumentiere meine Arbeitszeit sehr genau.", pronunciation: "ih dokumentire mayne arbaytszayt zeyr genou", turkish: "Çalışma saatlerimi çok dikkatli kaydediyorum.", example: "Ich dokumentiere meine Arbeitszeit sehr genau.", exampleTr: "Çalışma saatlerimi çok dikkatli kaydediyorum.", category: "iş" },
    { id: 700, day: 140, german: "Selbstständigkeit bringt Freiheit und Verantwortung zugleich.", pronunciation: "zelbstştendigkayt bringt frayhayt und ferantvortung tsuglayh", turkish: "Serbest çalışma hem özgürlük hem sorumluluk getirir.", example: "Selbstständigkeit bringt Freiheit und Verantwortung zugleich.", exampleTr: "Serbest çalışma hem özgürlük hem sorumluluk getirir.", category: "iş" },

    // GÜN 141–145
    // GÜN 141: Müşteri İlişkileri
    { id: 701, day: 141, german: "Ein gutes Gespräch schafft Vertrauen.", pronunciation: "ayn gutes geşpreh şaft fertrauen", turkish: "İyi bir görüşme güven yaratır.", example: "Ein gutes Gespräch schafft Vertrauen.", exampleTr: "İyi bir görüşme güven yaratır.", category: "iş" },
    { id: 702, day: 141, german: "Ich möchte Ihre Erwartungen besser verstehen.", pronunciation: "ih möşte ire ervartungen beser ferşteyen", turkish: "Beklentilerinizi daha iyi anlamak istiyorum.", example: "Ich möchte Ihre Erwartungen besser verstehen.", exampleTr: "Beklentilerinizi daha iyi anlamak istiyorum.", category: "iş" },
    { id: 703, day: 141, german: "Transparenz ist in der Zusammenarbeit besonders wichtig.", pronunciation: "transparenz ist in der tsuzamenarbayt bezonders vihtig", turkish: "İşbirliğinde şeffaflık özellikle önemlidir.", example: "Transparenz ist in der Zusammenarbeit besonders wichtig.", exampleTr: "İşbirliğinde şeffaflık özellikle önemlidir.", category: "iş" },
    { id: 704, day: 141, german: "Wir melden uns, sobald es Neuigkeiten gibt.", pronunciation: "vir melden uns, zobald es noyigkayten gibt", turkish: "Yeni gelişme olur olmaz size döneceğiz.", example: "Wir melden uns, sobald es Neuigkeiten gibt.", exampleTr: "Yeni gelişme olur olmaz size döneceğiz.", category: "iş" },
    { id: 705, day: 141, german: "Vielen Dank für Ihr Vertrauen.", pronunciation: "filen dank für ir fertrauen", turkish: "Güveniniz için çok teşekkür ederiz.", example: "Vielen Dank für Ihr Vertrauen.", exampleTr: "Güveniniz için çok teşekkür ederiz.", category: "iş" },

    // GÜN 142: Zor Konuşmalar
    { id: 706, day: 142, german: "Ich möchte ein sensibles Thema ansprechen.", pronunciation: "ih möşte ayn zenzibles tema anşprehen", turkish: "Hassas bir konuyu konuşmak istiyorum.", example: "Ich möchte ein sensibles Thema ansprechen.", exampleTr: "Hassas bir konuyu konuşmak istiyorum.", category: "sosyal" },
    { id: 707, day: 142, german: "Mir ist wichtig, dass wir respektvoll bleiben.", pronunciation: "mir ist vihtig, das vir respektfol blayben", turkish: "Saygılı kalmamız benim için önemli.", example: "Mir ist wichtig, dass wir respektvoll bleiben.", exampleTr: "Saygılı kalmamız benim için önemli.", category: "sosyal" },
    { id: 708, day: 142, german: "Ich sage das nicht, um dich zu kritisieren.", pronunciation: "ih zage das niht, um dih tsu kritiziren", turkish: "Bunu seni eleştirmek için söylemiyorum.", example: "Ich sage das nicht, um dich zu kritisieren.", exampleTr: "Bunu seni eleştirmek için söylemiyorum.", category: "sosyal" },
    { id: 709, day: 142, german: "Lass uns versuchen, einander zuzuhören.", pronunciation: "las uns ferzuhen, aynander tsutsuhören", turkish: "Birbirimizi dinlemeye çalışalım.", example: "Lass uns versuchen, einander zuzuhören.", exampleTr: "Birbirimizi dinlemeye çalışalım.", category: "sosyal" },
    { id: 710, day: 142, german: "Ich glaube, Ehrlichkeit ist hier der beste Weg.", pronunciation: "ih glaube, erlihkayt ist hir der beste veg", turkish: "Bence burada en iyi yol dürüstlük.", example: "Ich glaube, Ehrlichkeit ist hier der beste Weg.", exampleTr: "Bence burada en iyi yol dürüstlük.", category: "sosyal" },

    // GÜN 143: Hata Sonrası İyileştirme
    { id: 711, day: 143, german: "Ich möchte den Fehler wiedergutmachen.", pronunciation: "ih möşte den feyler vidergutmahen", turkish: "Hatamı telafi etmek istiyorum.", example: "Ich möchte den Fehler wiedergutmachen.", exampleTr: "Hatamı telafi etmek istiyorum.", category: "sosyal" },
    { id: 712, day: 143, german: "Ich habe aus der Situation viel gelernt.", pronunciation: "ih habe aus der zituatsyon fil gelernt", turkish: "Bu durumdan çok şey öğrendim.", example: "Ich habe aus der Situation viel gelernt.", exampleTr: "Bu durumdan çok şey öğrendim.", category: "sosyal" },
    { id: 713, day: 143, german: "Nächstes Mal werde ich vorsichtiger sein.", pronunciation: "nehstes mal verde ih forzihtiğer zayn", turkish: "Bir dahaki sefere daha dikkatli olacağım.", example: "Nächstes Mal werde ich vorsichtiger sein.", exampleTr: "Bir dahaki sefere daha dikkatli olacağım.", category: "günlük" },
    { id: 714, day: 143, german: "Danke, dass Sie mir noch eine Chance geben.", pronunciation: "danke, das zi mir noh ayne şanse geben", turkish: "Bana bir şans daha verdiğiniz için teşekkür ederim.", example: "Danke, dass Sie mir noch eine Chance geben.", exampleTr: "Bana bir şans daha verdiğiniz için teşekkür ederim.", category: "sosyal" },
    { id: 715, day: 143, german: "Ich werde zeigen, dass ich es besser machen kann.", pronunciation: "ih verde tsaygen, das ih es beser mahen kan", turkish: "Bunu daha iyi yapabileceğimi göstereceğim.", example: "Ich werde zeigen, dass ich es besser machen kann.", exampleTr: "Bunu daha iyi yapabileceğimi göstereceğim.", category: "sosyal" },

    // GÜN 144: Gelecekteki Kariyer
    { id: 716, day: 144, german: "Ich möchte in einem Umfeld arbeiten, in dem ich wachsen kann.", pronunciation: "ih möşte in aynem umfelt arbayten, in dem ih vahsen kan", turkish: "Gelişebileceğim bir ortamda çalışmak istiyorum.", example: "Ich möchte in einem Umfeld arbeiten, in dem ich wachsen kann.", exampleTr: "Gelişebileceğim bir ortamda çalışmak istiyorum.", category: "iş" },
    { id: 717, day: 144, german: "Für mich sind Sinn und Entwicklung wichtig.", pronunciation: "für mih zint zin und entviklung vihtig", turkish: "Benim için anlam ve gelişim önemli.", example: "Für mich sind Sinn und Entwicklung wichtig.", exampleTr: "Benim için anlam ve gelişim önemli.", category: "iş" },
    { id: 718, day: 144, german: "Ich kann mir vorstellen, international zu arbeiten.", pronunciation: "ih kan mir forştelen, internatsyonal tsu arbayten", turkish: "Uluslararası çalışmayı düşünebilirim.", example: "Ich kann mir vorstellen, international zu arbeiten.", exampleTr: "Uluslararası çalışmayı düşünebilirim.", category: "iş" },
    { id: 719, day: 144, german: "Langfristig möchte ich Verantwortung für eigene Projekte tragen.", pronunciation: "langfristiğ möşte ih ferantvortung für aygene projekte tragen", turkish: "Uzun vadede kendi projelerim için sorumluluk almak istiyorum.", example: "Langfristig möchte ich Verantwortung für eigene Projekte tragen.", exampleTr: "Uzun vadede kendi projelerim için sorumluluk almak istiyorum.", category: "iş" },
    { id: 720, day: 144, german: "Ich bin gespannt, wohin mich dieser Weg führt.", pronunciation: "ih bin geşpant, vohin mih dizeer veg füht", turkish: "Bu yolun beni nereye götüreceğini merak ediyorum.", example: "Ich bin gespannt, wohin mich dieser Weg führt.", exampleTr: "Bu yolun beni nereye götüreceğini merak ediyorum.", category: "sosyal" },

    // GÜN 145: Geriye Bakış
    { id: 721, day: 145, german: "Wenn ich zurückblicke, habe ich viel erreicht.", pronunciation: "ven ih tsurükblike, habe ih fil erayht", turkish: "Geriye baktığımda çok şey başardığımı görüyorum.", example: "Wenn ich zurückblicke, habe ich viel erreicht.", exampleTr: "Geriye baktığımda çok şey başardığımı görüyorum.", category: "sosyal" },
    { id: 722, day: 145, german: "Nicht jeder Tag war leicht, aber jeder Tag war wichtig.", pronunciation: "niht yeder tag var layht, aber yeder tag var vihtig", turkish: "Her gün kolay değildi ama her gün önemliydi.", example: "Nicht jeder Tag war leicht, aber jeder Tag war wichtig.", exampleTr: "Her gün kolay değildi ama her gün önemliydi.", category: "sosyal" },
    { id: 723, day: 145, german: "Ich bin stolz darauf, drangeblieben zu sein.", pronunciation: "ih bin ştolts darauf, drangebliben tsu zayn", turkish: "Devam etmiş olmaktan gurur duyuyorum.", example: "Ich bin stolz darauf, drangeblieben zu sein.", exampleTr: "Devam etmiş olmaktan gurur duyuyorum.", category: "sosyal" },
    { id: 724, day: 145, german: "Jeder Schritt hat mich weitergebracht.", pronunciation: "yeder şrit hat mih vaytergebraht", turkish: "Her adım beni ileri taşıdı.", example: "Jeder Schritt hat mich weitergebracht.", exampleTr: "Her adım beni ileri taşıdı.", category: "sosyal" },
    { id: 725, day: 145, german: "Das motiviert mich, weiterzumachen.", pronunciation: "das motivirt mih, vaytertsumahen", turkish: "Bu, devam etmek için beni motive ediyor.", example: "Das motiviert mich, weiterzumachen.", exampleTr: "Bu, devam etmek için beni motive ediyor.", category: "sosyal" },

    // GÜN 146–150
    // GÜN 146: Topluluk ve Gönüllülük
    { id: 726, day: 146, german: "Ich möchte mich ehrenamtlich engagieren.", pronunciation: "ih möşte mih ehrenamtlih angaşiren", turkish: "Gönüllü olarak katkıda bulunmak istiyorum.", example: "Ich möchte mich ehrenamtlich engagieren.", exampleTr: "Gönüllü olarak katkıda bulunmak istiyorum.", category: "sosyal" },
    { id: 727, day: 146, german: "Gibt es hier lokale Projekte, bei denen ich helfen kann?", pronunciation: "gibt es hir lokale projekte, bay denen ih helfen kan", turkish: "Burada yardım edebileceğim yerel projeler var mı?", example: "Gibt es hier lokale Projekte, bei denen ich helfen kann?", exampleTr: "Burada yardım edebileceğim yerel projeler var mı?", category: "sosyal" },
    { id: 728, day: 146, german: "Es ist schön, etwas an die Gemeinschaft zurückzugeben.", pronunciation: "es ist şön, etvas an di gemaynşaft tsurüktsugebən", turkish: "Topluma bir şey geri verebilmek güzel.", example: "Es ist schön, etwas an die Gemeinschaft zurückzugeben.", exampleTr: "Topluma bir şey geri verebilmek güzel.", category: "sosyal" },
    { id: 729, day: 146, german: "Schon ein paar Stunden können viel bewirken.", pronunciation: "şon ayn par ştunden könen fil bevirken", turkish: "Birkaç saat bile çok şey değiştirebilir.", example: "Schon ein paar Stunden können viel bewirken.", exampleTr: "Birkaç saat bile çok şey değiştirebilir.", category: "sosyal" },
    { id: 730, day: 146, german: "Ich freue mich darauf, neue Menschen kennenzulernen.", pronunciation: "ih froye mih darauf, noye menşen kenen-tsu-lernen", turkish: "Yeni insanlarla tanışmayı dört gözle bekliyorum.", example: "Ich freue mich darauf, neue Menschen kennenzulernen.", exampleTr: "Yeni insanlarla tanışmayı dört gözle bekliyorum.", category: "sosyal" },

    // GÜN 147: Mahalle ve Şehir Yaşamı
    { id: 731, day: 147, german: "Ich kenne mich in meinem Viertel inzwischen gut aus.", pronunciation: "ih kene mih in maynem firtel intsvişen gut aus", turkish: "Artık mahallemde oldukça iyi yolumu buluyorum.", example: "Ich kenne mich in meinem Viertel inzwischen gut aus.", exampleTr: "Artık mahallemde oldukça iyi yolumu buluyorum.", category: "günlük" },
    { id: 732, day: 147, german: "Der Wochenmarkt findet jeden Samstag statt.", pronunciation: "der vohenmarkt findet yeden zamstag ştat", turkish: "Semt pazarı her cumartesi kuruluyor.", example: "Der Wochenmarkt findet jeden Samstag statt.", exampleTr: "Semt pazarı her cumartesi kuruluyor.", category: "günlük" },
    { id: 733, day: 147, german: "Im Rathaus kann man viele Dinge online erledigen.", pronunciation: "im rathaus kan man file dinge onlayn erledigen", turkish: "Belediyedeki birçok iş çevrim içi yapılabiliyor.", example: "Im Rathaus kann man viele Dinge online erledigen.", exampleTr: "Belediyedeki birçok iş çevrim içi yapılabiliyor.", category: "resmi" },
    { id: 734, day: 147, german: "Die Nachbarschaft wirkt offen und freundlich.", pronunciation: "di nahbarşaft virkt ofen und froyndlih", turkish: "Mahalle açık ve samimi görünüyor.", example: "Die Nachbarschaft wirkt offen und freundlich.", exampleTr: "Mahalle açık ve samimi görünüyor.", category: "sosyal" },
    { id: 735, day: 147, german: "Langsam fühle ich mich hier wirklich angekommen.", pronunciation: "langzam füle ih mih hir virklih angekommen", turkish: "Yavaş yavaş burada gerçekten yerleşmiş gibi hissediyorum.", example: "Langsam fühle ich mich hier wirklich angekommen.", exampleTr: "Yavaş yavaş burada gerçekten yerleşmiş gibi hissediyorum.", category: "sosyal" },

    // GÜN 148: Spor ve Hobiler
    { id: 736, day: 148, german: "In meiner Freizeit probiere ich gern neue Aktivitäten aus.", pronunciation: "in mayner fraytsayt probire ih gern noye aktivitaten aus", turkish: "Boş zamanımda yeni aktiviteler denemeyi seviyorum.", example: "In meiner Freizeit probiere ich gern neue Aktivitäten aus.", exampleTr: "Boş zamanımda yeni aktiviteler denemeyi seviyorum.", category: "sosyal" },
    { id: 737, day: 148, german: "Man bleibt motiviert, wenn man Spaß daran hat.", pronunciation: "man blaybt motivirt, ven man şpas daran hat", turkish: "İnsan keyif alınca motive kalıyor.", example: "Man bleibt motiviert, wenn man Spaß daran hat.", exampleTr: "İnsan keyif alınca motive kalıyor.", category: "sosyal" },
    { id: 738, day: 148, german: "Ich würde dieses Hobby gern regelmäßiger machen.", pronunciation: "ih vürde dizes hobi gern regelmeziger mahen", turkish: "Bu hobiyi daha düzenli yapmak isterim.", example: "Ich würde dieses Hobby gern regelmäßiger machen.", exampleTr: "Bu hobiyi daha düzenli yapmak isterim.", category: "günlük" },
    { id: 739, day: 148, german: "Dabei kann man gut abschalten.", pronunciation: "dabay kan man gut apşalten", turkish: "Bunu yaparken insan güzelce rahatlıyor.", example: "Beim Sport kann man gut abschalten.", exampleTr: "Spor yaparken insan güzelce rahatlıyor.", category: "günlük" },
    { id: 740, day: 148, german: "Gemeinsame Interessen verbinden Menschen schnell.", pronunciation: "gemaynsame interesen ferbinden menşen şnel", turkish: "Ortak ilgi alanları insanları çabuk yakınlaştırır.", example: "Gemeinsame Interessen verbinden Menschen schnell.", exampleTr: "Ortak ilgi alanları insanları çabuk yakınlaştırır.", category: "sosyal" },

    // GÜN 149: Kutlama ve Tebrik
    { id: 741, day: 149, german: "Das ist ein besonderer Moment, den man nicht vergisst.", pronunciation: "das ist ayn bezonderer moment, den man niht fergist", turkish: "Bu, insanın unutamayacağı özel bir an.", example: "Das ist ein besonderer Moment, den man nicht vergisst.", exampleTr: "Bu, insanın unutamayacağı özel bir an.", category: "sosyal" },
    { id: 742, day: 149, german: "Ich wünsche dir weiterhin viel Erfolg.", pronunciation: "ih vünşe dir vayterhin fil erfolg", turkish: "Sana bundan sonra da çok başarı diliyorum.", example: "Ich wünsche dir weiterhin viel Erfolg.", exampleTr: "Sana bundan sonra da çok başarı diliyorum.", category: "sosyal" },
    { id: 743, day: 149, german: "Du hast dir das wirklich verdient.", pronunciation: "du hast dir das virklih ferdint", turkish: "Bunu gerçekten hak ettin.", example: "Du hast dir das wirklich verdient.", exampleTr: "Bunu gerçekten hak ettin.", category: "sosyal" },
    { id: 744, day: 149, german: "Lass uns auf diesen Erfolg anstoßen.", pronunciation: "las uns auf dizen erfolg anştosen", turkish: "Bu başarı için kadeh kaldıralım.", example: "Lass uns auf diesen Erfolg anstoßen.", exampleTr: "Bu başarı için kadeh kaldıralım.", category: "sosyal" },
    { id: 745, day: 149, german: "Solche Momente geben neue Energie.", pronunciation: "zolhe momente geben noye enerji", turkish: "Böyle anlar insana yeni enerji veriyor.", example: "Solche Momente geben neue Energie.", exampleTr: "Böyle anlar insana yeni enerji veriyor.", category: "sosyal" },

    // GÜN 150: Yeni Başlangıç
    { id: 746, day: 150, german: "Ich habe viel mehr Selbstvertrauen beim Sprechen.", pronunciation: "ih habe fil mer zelbstfertrauen baym şprehen", turkish: "Konuşurken çok daha fazla özgüvenim var.", example: "Ich habe viel mehr Selbstvertrauen beim Sprechen.", exampleTr: "Konuşurken çok daha fazla özgüvenim var.", category: "sosyal" },
    { id: 747, day: 150, german: "Deutsch ist ein Teil meines Alltags geworden.", pronunciation: "doyç ist ayn tayl maynes altags gevoren", turkish: "Almanca günlük hayatımın bir parçası oldu.", example: "Deutsch ist ein Teil meines Alltags geworden.", exampleTr: "Almanca günlük hayatımın bir parçası oldu.", category: "günlük" },
    { id: 748, day: 150, german: "Ich möchte auch nach diesen Tagen weiterlernen.", pronunciation: "ih möşte auh nah dizen tagen vayterlernen", turkish: "Bu günlerden sonra da öğrenmeye devam etmek istiyorum.", example: "Ich möchte auch nach diesen Tagen weiterlernen.", exampleTr: "Bu günlerden sonra da öğrenmeye devam etmek istiyorum.", category: "günlük" },
    { id: 749, day: 150, german: "Das Ende ist eigentlich ein neuer Anfang.", pronunciation: "das ende ist aygentlih ayn noyer anfang", turkish: "Son aslında yeni bir başlangıçtır.", example: "Das Ende ist eigentlich ein neuer Anfang.", exampleTr: "Son aslında yeni bir başlangıçtır.", category: "sosyal" },
    { id: 750, day: 150, german: "Ich freue mich auf alles, was noch kommt.", pronunciation: "ih froye mih auf ales, vas noh komt", turkish: "Daha gelecek her şey için heyecanlıyım.", example: "Ich freue mich auf alles, was noch kommt.", exampleTr: "Daha gelecek her şey için heyecanlıyım.", category: "sosyal" }
];

// Toplam gün sayısı
const TOTAL_DAYS = 150;

// Günlük açılma saati (09:00)
const UNLOCK_HOUR = 9;
