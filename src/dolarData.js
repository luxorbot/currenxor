const fetch = require('cross-fetch');
const { JSDOM } = require('jsdom');

const url = 'https://uzmanpara.milliyet.com.tr/doviz-kurlari/';

const fetchData = async (selector) => {
    try {
        const response = await fetch(url);
        const html = await response.text();
        const dom = new JSDOM(html);
        const document = dom.window.document;

        const valueElement = document.querySelector(selector);

        if (valueElement) {
            return valueElement.textContent.trim();
        } else {
            console.log('Veri bulunamadı.');
            return null;
        }
    } catch (error) {
        console.error('Veri çekme hatası:', error);
        return null;
    }
}

const getDolarSalesData = async () => {
    return await fetchData('.realTimeBoxR');
}

const getDolarBuyData = async () => {
    return await fetchData('.realTimeBoxL');
}

module.exports = {
    getDolarSalesData,
    getDolarBuyData
};
