  const fs = require('fs');
  const csv = require('csv-parser');


function Readcsv(filePath) {
    return new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => resolve(results))
            .on('error', (error) => reject(error));
    });
}

module.exports = { Readcsv };

// const fs = require('fs');

// function readCSV(filePath) {
//   const content = fs.readFileSync(filePath, 'utf8').trim();
//   if (!content) return [];

//   const [headerLine, ...rows] = content.split(/\r?\n/);  // split the content into lines, handling both \n and \r\n
/*
[
headerLine: "username,password",
rows: [ 
"student,student123
guest,guest123
admin1,admin123
admin2,admin123
admin3,admin123"
]
]


*/
//   const headers = headerLine.split(',').map(h => h.trim());

//   return rows.map(row => {
//     const values = row.split(',').map(v => v.trim());
//     return headers.reduce((obj, header, index) => {
//       obj[header] = values[index] ?? '';
//       return obj;
//     }, {});
//   });
// }

// module.exports = { readCSV };