
describe('Тестируем форму логина', function () {

   it('Позитивный тест на верный голин и пароль', function () {
      cy.visit('https://login.qa.studio/');
      cy.get('#mail').type('german@dolnikov.ru');
      cy.get('#pass').type('iLoveqastudio1');
      cy.get('#loginButton').click();
      cy.get('#messageHeader').contains('Авторизация прошла успешно');
      cy.get('#exitMessageButton > .exitIcon');
      cy.get('#exitMessageButton > .exitIcon').click();
      cy.contains('Форма логина');
    })

   it('Тест на проверку логики восстановления пароля', function () {
      cy.visit('https://login.qa.studio/');
      cy.get('#forgotEmailButton').click();
      cy.get('#mailForgot').type('german@dolnikov.ru');
      cy.get('#restoreEmailButton').click();
      cy.get('#messageHeader').contains ('Успешно отправили пароль на e-mail');
      cy.get('#exitMessageButton > .exitIcon');
    })

   it('Негативный тест на голин и пароль', function () {
      cy.visit('https://login.qa.studio/');
      cy.get('#mail').type('german@dolnikov.ru');
      cy.get('#pass').type('iLoveqastudio2');
      cy.get('#loginButton').click();
      cy.contains('Такого логина или пароля нет');
      cy.get('#exitMessageButton > .exitIcon');
      cy.get('#exitMessageButton > .exitIcon').click();
    })

      it('Негативный тест на голин и пароль', function () {
      cy.visit('https://login.qa.studio/');
      cy.get('#mail').type('german1@dolnikov.ru');
      cy.get('#pass').type('iLoveqastudio1');
      cy.get('#loginButton').click();
      cy.contains('Такого логина или пароля нет');
      cy.get('#exitMessageButton > .exitIcon');
      cy.get('#exitMessageButton > .exitIcon').click();
    })

      it('Негативный кейс валидации', function () {
      cy.visit('https://login.qa.studio/');
      cy.get('#mail').type('germandolnikov.ru');
      cy.get('#pass').type('iLoveqastudio1');
      cy.get('#loginButton').click();
      cy.get('#messageHeader').contains('Нужно исправить проблему валидации')
      cy.get('#exitMessageButton > .exitIcon');
      cy.get('#exitMessageButton > .exitIcon').click();
    })

      it('Привидение к строчным буквам в логине', function () {
      cy.visit('https://login.qa.studio/');
      cy.get('#mail').type('GerMan@Dolnikov.ru');
      cy.get('#pass').type('iLoveqastudio1');
      cy.get('#loginButton').click();
      cy.contains('Такого логина или пароля нет');
      cy.get('#exitMessageButton > .exitIcon');
      cy.get('#exitMessageButton > .exitIcon').click();
    })

})




