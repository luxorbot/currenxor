
# currenxor

Uzmanpara üzerinden döviz kurlarını çeken bir modül.


## 🛠 Kurulum

- İlk olarak modülü indirin.
``npm i & pnpm i currenxor``
- İkinci olarak projenize tanımlayın.
```js
const currenxor = require('currenxor');

// Dolar verilerini çekmek için aşağıda ki yöntemleri izleyebilirsiniz.
currenxor.dolarData.salesData().then((data) => {
    console.log('Dolar satış:', data);
});

currenxor.dolarData.buyData().then((data) => {
    console.log('Dolar alış:', data);
});

// Euro verilerini çekmek için aşağıda ki yöntemleri izleyebilirsiniz.
currenxor.euroData.salesData().then((data) => {
    console.log('Euro satış:', data);
});

currenxor.euroData.buyData().then((data) => {
    console.log('Euro alış:', data);
});
```
- Başarıyla projenize eklediniz. Dilediğiniz gibi modülü kullanabilirsiniz.
## ❕ Bilgi
Bu modül [Luxor Bot](https://github.com/luxorbot) için [UnoxDevs](https://github.com/unoxdevs) ekibi tarafından yapılmıştır. Bu modül Github üzerinde açık kaynaklıdır, kimse izin almadan kişisel Github hesabında paylaşamaz.