var request = require('request');

describe('Put TODOs: ', function () {

    it('As a user I can update a TODO item via API', function (done) {

        request({
            method: 'PUT',
            uri: 'https://jsonplaceholder.typicode.com/todos/95',
            body: JSON.stringify({
                "title": "foo2",
                "body": "bar2",
                "userId": 99,
                "id": 201,
                "test1": "test1",
                "text2": "ABCD_1234"
            }),
            headers: { 'content-type': 'application/json; charset=utf-8' }
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
            expect(obj.title).toEqual("foo2");
            expect(obj.body).toEqual("bar2");
            expect(obj.id).toEqual(201);
            expect(obj.userId).toEqual(99);
            expect(obj.test1).toEqual("test1");
            expect(obj.text2).toEqual("ABCD_1234");

            done();
        });
    });
});