# Täglich 🇩🇪

**Bilimsel temelli günlük Almanca kalıp cümle öğrenme uygulaması.**

Her gün 5 yeni kalıp. 50 günde 250 cümle. Spaced Repetition ile kalıcı öğrenme.

---

## Özellikler

- 🧠 **Spaced Repetition** — Zorlandığın kalıplar daha sık tekrar edilir (1, 3, 7 gün aralıkları)
- 💡 **Active Recall** — İlk 2 kart öğrenme, sonraki 3 kart test modunda
- 📅 **Günlük Kilit Sistemi** — Her gün yeni 5 kalıp açılır
- 🔥 **Streak Takibi** — Arka arkaya günleri takip et
- 📊 **İlerleme Ekranı** — Ring chart + gün grid ile görsel takip
- 🔄 **Tekrar Sistemi** — Tekrar bekleyen kalıpları ayrı ekrandan gör
- 📱 **PWA Desteği** — Telefona ana ekrana ekle, offline çalış
- 🔔 **Bildirim** — Her sabah 09:00'da hatırlatma

## Bilimsel Altyapı

| Yöntem | Kaynak |
|--------|--------|
| Spaced Repetition | Ebbinghaus'un Forgetting Curve |
| Active Recall | Roediger & Karpicke (2006) |
| Encoding Variability | Frontiers in Psychology |
| Adaptive Scheduling | PNAS — Duolingo verisi |

## Kalıp Kategorileri

- 🗣 Günlük Konuşma
- 💼 İş & Kariyer
- ✈️ Seyahat
- 📝 Resmi Yazışma
- 👥 Sosyal Hayat

## Kurulum

Statik dosyalar — herhangi bir web sunucusunda çalışır:

```bash
# Basit sunucu ile
npx serve .

# veya Python ile
python -m http.server 8000
```

## Deploy

GitHub Pages, Vercel veya Netlify ile tek tıkla deploy edilebilir.

### Vercel
```bash
npx vercel
```

### GitHub Pages
Settings → Pages → Source: main branch → Save

## Teknoloji

- Vanilla JS (framework yok)
- CSS Custom Properties
- PWA (Service Worker + Manifest)
- LocalStorage (veri saklama)
- Google Fonts (DM Serif Display + DM Sans)

## de-DE TTS

- Telaffuz artik once tarayici icinde calisan Piper TTS ile uretilir.
- Varsayilan model: `de_DE-thorsten-high`
- Ilk `Dinle` tiklamasinda model Hugging Face uzerinden indirilir ve tarayici cache'ine kaydedilir (yaklasik 114 MB).
- Sonraki oynatmalar ayni tarayicida yerel cache'den calisir.
- Piper kullanilamazsa uygulama son care olarak Web Speech API fallback'ine doner.

### TTS runtime guncelleme

```bash
npm install
npm run vendor:tts
```

Bu komut, `piper-tts-web` ve `onnxruntime-web` runtime dosyalarini `tts/runtime/` altina kopyalar.

## Dosya Yapısı

```
taglich/
├── index.html      # Ana HTML
├── styles.css      # Tüm stiller
├── app.js          # Uygulama mantığı
├── phrases.js      # 250 kalıp veritabanı
├── manifest.json   # PWA manifest
├── sw.js           # Service Worker
├── icons/          # PWA ikonları
└── README.md       # Bu dosya
```

---

*Made with ❤️ for daily German learning*
