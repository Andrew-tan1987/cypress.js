describe('Тестируем форму логина', function () {

   it('Позитивный тест на верный голин и пароль', function () {
      cy.visit('https://testqastudio.me/');
      cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
      cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
      cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
      cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
      cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click();
      cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
      cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
      cy.get('.header-right-items > .header-cart').click();
      cy.get('.checkout').click();
      cy.get('#billing_first_name').type('Андрей');
      cy.get('#billing_last_name').type('Тан');
      cy.get('#billing_address_1').type('Правды 1');
      cy.get('#billing_city').type('Москва');
      cy.get('#billing_state').type('Москва');
      cy.get('#billing_postcode').type ('105000');
      cy.get('#billing_phone').type('+79875554433');
      cy.get('#billing_email').type('andy@gmail.com');
      cy.get('#place_order').click();
      cy.get('.woocommerce-notice').contains('Ваш заказ принят. Благодарим вас.')
  })

})

