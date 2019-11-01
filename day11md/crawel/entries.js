const https = require('https')
const {
    insert
} = require('./db')
https.get('https://h5.ele.me/restapi/shopping/v2/entries?latitude=23.12908&longitude=113.264359&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5', (res) => {
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => {
        rawData += chunk;
    });
    res.on('end', () => {
        let entries = JSON.parse(rawData)[0].entries
        console.log(entries)
        entries.forEach(element => {
            insert('element', [{
                name: element.name
            }])
        });
    });
}).on('error', (e) => {
    console.error(`出现错误: ${e.message}`);
});