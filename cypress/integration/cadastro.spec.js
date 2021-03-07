define('Cadastro', () => {
  if('Sucesso',() => {
    cy.visit('http://localhost:4200/');
    cy.get('app-article-preview:nth-child(2) > .article-preview').click();
    cy.get('.navbar-nav > .nav-item:nth-child(3) > .nav-link').click();
    cy.get('html').click();
    cy.get('.ng-valid').click();
    cy.get('.ng-valid').type('Janeth');
    cy.get('.form-group:nth-child(2) > .form-control').click();
    cy.get('.form-group:nth-child(2) > .form-control').type('m.janeth@aluno.ifsp.edu.br');
    cy.get('.ng-untouched').click();
    cy.get('.ng-untouched').type('2506-mega');
    cy.get('.btn').click();
    cy.get('.ng-dirty:nth-child(4)').submit();

  })
})
