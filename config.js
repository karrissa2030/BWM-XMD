const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;BWM-XMD;;;H4sIAAAAAAAAA61V6Y6ySBR9lUn91Z6WVTDpZFhEW0VAxG0yP1gKLNmLQsQvPsT3BPOK8wgT2u50J9/WkwwJSQFV555777mHLyDLUQXnsAWjL6DA6OwS2C1JW0AwAnIdhhCDPghc4oIRyKf5Stg+rqyhN2SuW7mS0sPkyl6FAsJzE+MCtfvefGkEO/8J3PqgqL0E+T8BPF2kNt2tDXvFnQ5KxVxVGJkRs10ttyyb1RL0TGe/s9iAiZ/ArUN0EUZZNC6OMIXYTeawNV2EP0e/0nOuCQ96fEiWG8IcsWjpW6c4GitLtWOt5Wcuz85T1U+az9E/THoxv4Bp6pnTjUljY6nqqhxxLknG+WpC04PsMjx47l6x7vQrFGUweA5gRhBpP133wfLRbua0hfLj3i5dvSdHj7HTs6pZubL0bbRXnXTuXdrzLvoc8WfiGk6zHI/Nq2V527IOTllssoadzE/FbqX1itl6DifMmtI/Ejfxm1bi/1J3WprVBVJIYq176lQr8oDGz1SWzi96hUxU7xdpZWnlwR5/UjZiBXk6YjhrPK3p+eFRz+D0GU82tAXzqoeaAYpnj9SyJ8T+O32X1PhnLKeanWdh3qunj9NyJR4dhQn5WXpyBjIlhHWFxRLjnm9PkzZivYWhLrflNeg9857mPG6GId+YynI3MYvSblals6HqjEXN00tGMWyfAzCibn2AYYQqgl2C8uzlHcf3gRucbehjSF7KC2RDKo8eJ4htQK5mXlWqSNljlYqvWyfEKJumtBFfShNNnp9AHxQ492FVwWCKKpLjVodV5UawAqM/XzrVJY1hmhM4Q0HXD44dsoMBL7KD4R/V783RJZVbFL9nkIA+CHGe6hCMCK5hH7wcYEVN03iZEyl5rKoszXMCxUiaSo8ZUWEltksxvQddoxRWxE0LMKKGLC/Q9FAY3vr/Dw+KUzSG4TRV5iVOGI9ZmVU4mVVkgR0qKjf+BQ/x9lcfZPBC7jruqs9QfRAiXBEnq4skd4M3kb99dH0/rzNit5mvdAuIwejDa0gIyqKqy6zOXOwf0RkqXR533rc+COAZ+bCDA9sSMpVJy9bJ4JflRDf3gpJaXQOPeXbf4oquxwUU8yB6nvjAsnz4INCU+MDw9FBgQo/mGQ501bg7SHfmh4Je4p1XSsI+UZxLuD0Zu56fcYOSs5j7mN2VCDEM3orsuX5cF+s8htlPcP26xmfB9SRqck2WJ55BkMLKbK4l7Afcu8LB6Mu7ayt50OHNrQ0zY/Y86JrVxflGDCOe/1YPmdvtBv/8/fVrd8+l1bMt/fb22AV+bUoHGUDioqQCI6Do25hdVOOxOdV7vjSZSE0kKZEE3pv4Zg734ZM2w6lzoUtriI2KqyYnWwnKwLJ71ia6qs1Fp/E2KT1/mcZP3wHpEK6e7JheiRsxE4actT75xoE7mHoj+LrQKpSraWkxLDNjuNltSue6luK5c1yFWiwOcKBmjNASHrXqHCnL8tQsDlwkSU9dtLuaPgbTJ0rBBjPnaO2os2OQTZzYqM5idoXS2XKL1wnmTufssilnZCtx0cXIVNFCzuIwSfRmEeJmNcn5db4NpIWuqyGSI3KS7rb1YpvJ6+8KvRrKXXshgi/u/9qVX3bvfQwGt/4HjNf/yQ+kJlsavFB6UMYGf8WGJ+eDKHMzZ3yOtb3eCPp6WVKFmzLqoQC3bryLxCVhjtNulrIA5ygAfZC4FZHeB/l73sD0QdpKRWETl7zNP5C6a3yA4PYvsHIxoSoJAAA=
module.exports = { session: process.env.SESSION_ID || ''BWM-XMD;;;H4sIAAAAAAAAA61V246qSBT9lUm9ah+ruAiYdDJcRBQvrSJeJvNQQIEIcilQwRM/4nzB/OJ8wgTtTncy59KTDAlJAVVrr7332ouvIEnDgpikBr2vIKPhGZekWZZ1RkAPKCffJxS0gYdLDHpgaTp6tjf9yF3mVOcrqNupcPSVoKVvL5TVtMV+b2utME0mz+DWBtnJiUP3J4AZ0ViELuoGDxW+9KhCUctOFkJHlGJ5knKzZOUYY9w/1PAZ3BpEHNIwCfrZnhwJxbFJ6hcc0s/R5xQlGFvV4kzzA8+KkWryCc+HBeyaXN4fVudxC8oSX/Bs/3P0Xd/cTvonbmytdtjCp12Q7ucjVjoxw3Or1Z2PZ0sRh/PtbD980C/CICHe0CNJGZb1p+tOpjPG715T/pDuRup+WyveMT9wA/7MGGcYTw4MG4gDbp2u0s8RNxdklllRwq09X9hmA3M0EeWVi67CHtZiP1Wzs04qX2Ig95H4C33TSvRf6n5STgiNl9BA3QWl/YnWHQdSiQfWhUlhpyMFqZ+qg1B3jeHn6FebNDYPA02a5kq0XjomZ7hDbqaxY2e6WeyQoq93VJ4PYhu+08flif6Mpe5sEdQqPtumYq5ZBh0H19VcEfcjW1a8uDBPSi21zmQ64/uDlcMpiTEXPH5g+znqqHw8QXGl5xbS+PxS2vol51acOn++ZxSReuiBHrq1ASVBWJQUl2Ga3N+JXBtg77wkLiXlvbzgUAVdws29GppBNOs4ujeBbD0vSWgYjIO61fpgdC7GtDVYPYM2yGjqkqIgnhEWZUrrCSkKHJAC9P64d6pJmpJjWpJR6IEeYHhO4CDsShwUfi++XPa4LHCWfUlICdrAp+lxQkCvpCfSBvcDMq/LuqTpHGJlAWmcpEoyo/AMK3V5VeszTYrHR1ArPJKixMcM9JDAdUWe6YrMrf3/8GBVXuGQoCGxD5GCOAlqiqaIqK9wooZ4/Zc8/myDhFTlQ8dN9VnUBn5Ii3KVnLI4xd6byN8+YtdNT0m5rBNXbRaEgt6H16QswyQomsxOCabuPjwTtcnjwfvWBh45hy5p4EAqMybt2ltruzaDaYZ29mgL500D92ny2OKJkidh7D6xrCg+cSIRnxxeIE8sxp7rIMJ4vgOaajwcpDnzQ0FfrZFpnHYCNF9G1/HGXizZqQ2ZGbsV76J8KJFQ4r0V2cFudMqsNCLJT3DP0/WuwH4mxZq65APtCBPOH3F1NS8+4D4UDnpf311bTb0GbzHWJZ6xFqBpVhPnX2Lodb+jhwQ3u8Hff3371tymvBgu5d/eHpvAr01pID1S4jAuQA+ok3XEjYt+f0yYligPBjIMZDWQwXsT38zhMXyyLRirisnnAp0VfDE4LFUv9+bL1twOrtqlmjB0HeeOOz1Gz98BAT1g5TVVrWjQp8V23VkaAq2nWnGJZrY+KxI6R1DAYVwy9Li/aPUKmeyZO/PVyB1HlacZ+7DKlGsraEEMbaETbHdSbqmX5ybaQ00fg+1fHIsIg5mdFmirbvJxGhUZN94sExd1W3HtO/sNm3dLAjcx9Q1YnJYyXNMZTDlRY5kKXewwf8E7ZnQZwG2yOATKVb48bOtum/Hr7yp8NZSH9vyQ3N3/tSu/7N77GMBb+wPG6//kB1JT5jqp0MTLo1n3SmeOksIgwcmqf4707eQiTqxpjjJ8ZLVdBm7NeGcxLv2UHkEP4MSjaeiBNohxUcrvg/wdbxCENjjWcpYtS1y+zT+Qm6u/I+D2D33fa9gqCQAA,
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

