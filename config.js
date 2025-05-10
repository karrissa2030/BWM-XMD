const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;BWM-XMD;;;H4sIAAAAAAAAA61V6Y6ySBR9lUn91Z6WVTDpZFhEW0VAxG0yP1gKLNmLQsQvPsT3BPOK8wgT2u50J9/WkwwJSQFV555777mHLyDLUQXnsAWjL6DA6OwS2C1JW0AwAnIdhhCDPghc4oIRyKf5Stg+rqyhN2SuW7mS0sPkyl6FAsJzE+MCtfvefGkEO/8J3PqgqL0E+T8BPF2kNt2tDXvFnQ5KxVxVGJkRs10ttyyb1RL0TGe/s9iAiZ/ArUN0EUZZNC6OMIXYTeawNV2EP0e/0nOuCQ96fEiWG8IcsWjpW6c4GitLtWOt5Wcuz85T1U+az9E/THoxv4Bp6pnTjUljY6nqqhxxLknG+WpC04PsMjx47l6x7vQrFGUweA5gRhBpP133wfLRbua0hfLj3i5dvSdHj7HTs6pZubL0bbRXnXTuXdrzLvoc8WfiGk6zHI/Nq2V527IOTllssoadzE/FbqX1itl6DifMmtI/Ejfxm1bi/1J3WprVBVJIYq176lQr8oDGz1SWzi96hUxU7xdpZWnlwR5/UjZiBXk6YjhrPK3p+eFRz+D0GU82tAXzqoeaAYpnj9SyJ8T+O32X1PhnLKeanWdh3qunj9NyJR4dhQn5WXpyBjIlhHWFxRLjnm9PkzZivYWhLrflNeg9857mPG6GId+YynI3MYvSblals6HqjEXN00tGMWyfAzCibn2AYYQqgl2C8uzlHcf3gRucbehjSF7KC2RDKo8eJ4htQK5mXlWqSNljlYqvWyfEKJumtBFfShNNnp9AHxQ492FVwWCKKpLjVodV5UawAqM/XzrVJY1hmhM4Q0HXD44dsoMBL7KD4R/V783RJZVbFL9nkIA+CHGe6hCMCK5hH7wcYEVN03iZEyl5rKoszXMCxUiaSo8ZUWEltksxvQddoxRWxE0LMKKGLC/Q9FAY3vr/Dw+KUzSG4TRV5iVOGI9ZmVU4mVVkgR0qKjf+BQ/x9lcfZPBC7jruqs9QfRAiXBEnq4skd4M3kb99dH0/rzNit5mvdAuIwejDa0gIyqKqy6zOXOwf0RkqXR533rc+COAZ+bCDA9sSMpVJy9bJ4JflRDf3gpJaXQOPeXbf4oquxwUU8yB6nvjAsnz4INCU+MDw9FBgQo/mGQ501bg7SHfmh4Je4p1XSsI+UZxLuD0Zu56fcYOSs5j7mN2VCDEM3orsuX5cF+s8htlPcP26xmfB9SRqck2WJ55BkMLKbK4l7Afcu8LB6Mu7ayt50OHNrQ0zY/Y86JrVxflGDCOe/1YPmdvtBv/8/fVrd8+l1bMt/fb22AV+bUoHGUDioqQCI6Do25hdVOOxOdV7vjSZSE0kKZEE3pv4Zg734ZM2w6lzoUtriI2KqyYnWwnKwLJ71ia6qs1Fp/E2KT1/mcZP3wHpEK6e7JheiRsxE4actT75xoE7mHoj+LrQKpSraWkxLDNjuNltSue6luK5c1yFWiwOcKBmjNASHrXqHCnL8tQsDlwkSU9dtLuaPgbTJ0rBBjPnaO2os2OQTZzYqM5idoXS2XKL1wnmTufssilnZCtx0cXIVNFCzuIwSfRmEeJmNcn5db4NpIWuqyGSI3KS7rb1YpvJ6+8KvRrKXXshgi/u/9qVX3bvfQwGt/4HjNf/yQ+kJlsavFB6UMYGf8WGJ+eDKHMzZ3yOtb3eCPp6WVKFmzLqoQC3bryLxCVhjtNulrIA5ygAfZC4FZHeB/l73sD0QdpKRWETl7zNP5C6a3yA4PYvsHIxoSoJAAA=
module.exports = { session: process.env.SESSION_ID || '',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

