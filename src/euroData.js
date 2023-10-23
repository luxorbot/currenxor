const fetch = require('cross-fetch');
const { JSDOM } = require('jsdom');
const url = 'https://uzmanpara.milliyet.com.tr/doviz-kurlari/';

const fetchData = async (selector, label) => {
    try {
        const response = await fetch(url);
        const html = await response.text();
        const dom = new JSDOM(html);
        const document = dom.window.document;
        const realTimeBoxes = document.querySelectorAll('.realTimeBox');

        if (realTimeBoxes.length >= 2) {
            const secondRealTimeBox = realTimeBoxes[1];
            const realTimeBoxValue = secondRealTimeBox.querySelector(selector);

            if (realTimeBoxValue) {
                const value = realTimeBoxValue.textContent.trim().replace(label, '').trim();
                return value;
            } else {
                console.log('Veri bulunamadı.');
            }
        } else {
            console.log('Euro ile ilgili bir veri bulunamadı.');
        }
    } catch (error) {
        console.error('Veri çekme hatası:', error);
    }
}

const getEuroSalesData = async () => {
    return await fetchData('.realTimeBoxR', 'SATIŞ (TL)');
}

const getEuroBuyData = async () => {
    return await fetchData('.realTimeBoxL', 'ALIŞ (TL)');
}

module.exports = {
    getEuroSalesData,
    getEuroBuyData
};
