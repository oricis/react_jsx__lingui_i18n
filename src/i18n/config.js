import { i18n } from "@lingui/core"
import { en, es } from "make-plural/plurals" // node_modules


i18n.loadLocaleData('EN', { plurals: en })
i18n.loadLocaleData('ES', { plurals: es })

export async function activate(locale)
{
    console.log('activate() ---> ' + locale); // HACK:

    const { messages } = await import(
        /* webpackChunkName: "i18n-[index]" */
        `@lingui/loader!./locales/${locale}.po`
    )

    i18n.load(locale, messages)
    i18n.activate(locale)
}

export const defaultLangCode = 'EN';
activate(defaultLangCode)
