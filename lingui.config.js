module.exports = {
    locales: ["EN", "ES"],
    catalogs: [
        {
            path: "src/i18n/locales/{locale}",
            include: ["src"],
        },
    ],
    format: "po",
    sourceLocale: "EN",
}
