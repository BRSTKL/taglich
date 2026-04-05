// Vercel Edge Function — Google Neural TTS proxy
// /api/tts?q=TEXT&lang=de
// Same-origin olduğu için CORS + mobil uyumluluk sorunu olmaz.

export const config = { runtime: 'edge' };

export default async function handler(request) {
    const url = new URL(request.url);
    const text = url.searchParams.get('q');
    const lang = url.searchParams.get('lang') || 'de';

    if (!text || text.length > 500) {
        return new Response('Missing or too long q param', { status: 400 });
    }

    const googleUrl =
        'https://translate.google.com/translate_tts' +
        '?ie=UTF-8' +
        '&q=' + encodeURIComponent(text) +
        '&tl=' + encodeURIComponent(lang) +
        '&client=tw-ob' +
        '&ttsspeed=0.87';

    try {
        const response = await fetch(googleUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Referer': 'https://translate.google.com/',
                'Accept': 'audio/webm,audio/ogg,audio/wav,audio/*;q=0.9,*/*;q=0.5',
            }
        });

        if (!response.ok) {
            return new Response('TTS upstream error', { status: 502 });
        }

        return new Response(response.body, {
            status: 200,
            headers: {
                'Content-Type': 'audio/mpeg',
                'Cache-Control': 'public, max-age=86400', // 1 gün cache — aynı cümle tekrar istek atmaz
                'Access-Control-Allow-Origin': '*',
            },
        });
    } catch (err) {
        return new Response('TTS fetch failed', { status: 502 });
    }
}
