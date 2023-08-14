describe('All_Hockey', function () {
    it('Позитивный кейс, валидные логин и пароль', function () {
         cy.visit('https://allhockey.ru/profile/login');
         cy.get('#userName').type("KhotkoNe");
         cy.get('#userPass').type("gq3pd6bfk");
         cy.get('.form > .red').click();
         cy.get('.container > .right > .user-profile');
     })
 })