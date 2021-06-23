var request = require('request');

describe('Post TODOs: ', function () {

    it('As a user I can create a new TODO via API', function (done) {

        request({
            method: 'POST',
            uri: 'https://jsonplaceholder.typicode.com/todos',
            body: JSON.stringify({
                "title": "foo",
                "userId": 99999999999,
                "completed": "Not Sure"
            }),
            headers: { 'content-type': 'application/json; charset=utf-8' }
        }, (error, response, body) => {
            if (error) {
                return console.dir(error);
            }

            console.log('\nResponse Code: ' + response.statusCode);
            expect(response.statusCode).toBe(201);

            console.log('\nResponse Headers: ' + response.headers['content-type']);
            expect(response.headers['content-type']).toBe('application/json; charset=utf-8');

            let obj = JSON.parse(body);
            console.dir('----------------Body--------------------:');
            console.dir(obj);
            console.dir('-------------------------------------------');
            expect(obj.title).toEqual("foo");
            expect(obj.userId).toEqual(99999999999);
            expect(obj.completed).toEqual("Not Sure");

            done();
        });
    });
});