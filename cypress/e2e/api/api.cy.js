const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

describe('Api тесты', () => {
  describe('GET запросы', () => {
    it('Проверка GET запроса c query параметром', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}`,
      }).then((response) => {
        expect(response.status).to.be.eq(200);
        expect(response.body).to.be.an('array');
        expect(response.body).to.have.length(100);
      });
    });

    it('Проверка GET запроса', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}?userId=1`,
      }).then((response) => {
        expect(response.status).to.be.eq(200);
        expect(response.body).to.be.an('array');
        expect(response.body).to.have.length(10);
      });
    });

    it('Проверка GET запроса с существующим ID', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}/1`,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.keys(['userId', 'id', 'title', 'body']);

        expect(response.body.userId).to.be.a('number');
        expect(response.body.id).to.be.a('number');
        expect(response.body.title).to.be.a('string');
        expect(response.body.body).to.be.a('string');

        expect(response.body.userId).to.eq(1);
        expect(response.body.id).to.eq(1);

        expect(response.duration).to.be.below(1000);
      });
    });

    it('Проверка GET запроса с несуществующим ID', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}/999`,
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.be.eq(404);
      });
    });
  });
  describe('POST запросы', () => {
    it('Cоздание нового поста', () => {
      const newPost = {
        userId: 1,
        title: 'Test Post',
        body: 'This is test post',
      };
      cy.request({
        method: 'POST',
        url: `${baseUrl}`,
        body: newPost,
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.id).to.be.a('number');
        expect(response.body.id).to.eq(101);
      });
    });
  });
  describe('PUT запросы', () => {
    it('Полное обновление поста', () => {
      const updatePost = {
        userId: 1,
        title: 'Update title',
        body: 'Update body',
      };
      cy.request({
        method: 'PUT',
        url: `${baseUrl}/1`,
        body: updatePost,
      }).then((response) => {
        expect(response.status).to.be.eq(200);
        expect(response.body.id).to.be.eq(1);
      });
    });
  });
  describe('PATCH запросы', () => {
    it('Частичное обновление поста', () => {
      const updatePost = {
        title: 'Update title',
      };
      cy.request({
        method: 'PATCH',
        url: `${baseUrl}/1`,
        body: updatePost,
      }).then((response) => {
        expect(response.status).to.be.eq(200);
        expect(response.body.id).to.be.eq(1);
      });
    });
  });
  describe('DELETE запросы', () => {
    it('Удаление поста', () => {
      cy.request({
        method: 'DELETE',
        url: `${baseUrl}/1`,
      }).then((response) => {
        expect(response.status).to.be.eq(200);
        expect(response.body).to.be.empty;
      });
    });
  });
});
