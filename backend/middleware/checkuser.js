const fs = require('fs');
const csv = require('csv-parser');
const checkUsers = {
    checkUser: (roll) => {
        let userExists = false;
        fs.createReadStream('./csv/allstudents.csv')
            .pipe(csv())
            .on('data', (row) => {
                if (row.rollNo === roll) {
                    userExists = true;
                }
            })
            .on('end', () => {
                console.log('CSV file processed.');
                console.log('User exists:', userExists);
                return userExists;
            });
    },


    checkDues: (data) => {
        if (data) {
            return true;
        } else {
            return false;
        }
    }
};

module.exports = { checkUsers };
