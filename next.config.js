/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['en', 'pt'],
        defaultLocale: 'pt',
    },
    loadLocaleFrom: (lang, ns) =>
        import(`./src/locales/${lang}/${ns}.json`).then((m) => m.default),
}
module.exports = nextConfig;
