module.exports = function () {

    function jobsList() {
        var data = JSON.parse(body);
        var responseJson = JSON.stringify(data.response);

        var query = connection.query('INSERT INTO table SET column=?', responseJson, function (err, result) {
            if (err) throw err;
            console.log('data inserted');
        });
        return query;
    }

    async function storeData() {
        
    }

    console.log(jobsList)
    return {

        jobsList
    }

}