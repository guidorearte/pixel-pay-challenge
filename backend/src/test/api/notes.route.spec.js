const request = require('supertest');
const app = require('../../app');

describe('Pruebas sobre la API de notes', () => {

describe('GET /api/notes', () => {

    it('LA ruta funciona', async () => {

        const response = await request(app).get('/api/notes').send();

        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toContain('json');
    }, 500);
});

});