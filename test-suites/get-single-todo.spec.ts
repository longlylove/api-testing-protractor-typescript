var request = require('request');

describe('Get single TODO: ', function () {

    it('As a user I can get a TODO item via API', function (done) {

        request.get({
            'headers': { 'content-type': 'application/json; charset=utf-8' },
            'uri': 'https://jsonplaceholder.typicode.com/todos/99'
        }, (error, response, body) => {
            if (error) {
                return console.dir(error);
            }

            console.log('\nResponse Code: ' + response.statusCode);
            expect(response.statusCode).toBe(200);

            console.log('\nResponse Headers: ' + response.headers['content-type']);
            expect(response.headers['content-type']).toBe('application/json; charset=utf-8');

            let obj = JSON.parse(body);
            console.dir('----------------Body--------------------:');
            console.dir(obj);
            console.dir('-------------------------------------------');
            expect(obj.userId).toEqual(5);
            expect(obj.id).toEqual(99);
            expect(obj.title).toEqual("neque voluptates ratione");
            expect(obj.completed).toBeFalse;

            done();
        });
    });
});