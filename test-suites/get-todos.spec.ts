var request = require('request');

describe('Get TODOs: ', function () {

    it('As a user I can get all TODOs via API', function (done) {

        request.get({
            'headers': { 'content-type': 'application/json; charset=utf-8' },
            'uri': 'https://jsonplaceholder.typicode.com/todos'
        }, (error, response, body) => {
            if (error) {
                return console.dir(error);
            }

            console.log('\nResponse Code: ' + response.statusCode);
            expect(response.statusCode).toBe(200);

            console.log('\nResponse Headers: ' + response.headers['content-type']);
            expect(response.headers['content-type']).toBe('application/json; charset=utf-8');

            let obj = JSON.parse(body);
            expect(obj.length).toBeGreaterThanOrEqual(200);
            console.log('\nNumber of ToDos is ' + obj.length);
            console.dir('----------------Body--------------------:');
            console.dir(obj);
            console.dir('-------------------------------------------');

            done();
        });
    });
});