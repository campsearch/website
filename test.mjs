import {readFile, writeFile} from 'fs/promises';

let originData = JSON.parse(await readFile(
    //new URL('./assets/camp_data/111summer.json', import.meta.url),
    new URL('./test.json', import.meta.url)
));

//originData = originData.sort(() => Math.random() - 0.5)
//await writeFile(new URL('./test.json', import.meta.url), JSON.stringify(originData))

originData = originData.slice(0,50)

let text = originData.reduce(function(o, n){
    return o + `
營隊名稱☞ ${n.name}
舉辦單位☞ ${n.school}
報名截止時間☞ ${n.apply}
舉辦地點☞ ${n.location}
價格☞ ${n.price}
營隊時間☞ ${n.start} ~ ${n.end}
提醒☞ ${n.comment}
網頁☞ ${n.website}
類別☞ ${n.tags.join('、')}

`
},'')

await writeFile(new URL('./test.txt', import.meta.url), text)
