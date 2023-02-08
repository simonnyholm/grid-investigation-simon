import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    da: {
        translation: {
            transactionstate: {
                WAITING_FOR_EXPORT: "Venter på export",
                IN_ERROR: "Fejlet",
            },
            button: {
                switchLanguage: "Skift sprog"
            },
        }
    },
    en: {
        translation: {
            transactionstate: {
                WAITING_FOR_EXPORT: "Waiting for export",
                IN_ERROR: "In error",
            },
            button: {
                switchLanguage: "Change language"
            },
        }
    }
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "da"
    });