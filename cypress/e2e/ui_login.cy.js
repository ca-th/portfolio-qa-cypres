//testes relacionados ao Login
describe('Funcionalidade de Login', () => {

    //antes de abrir qualquer pasta
    beforeEach(() => {
        cy.visit('https://front.serverest.dev/login')
    })

    it('Login com sucesso', () => {
        cy.get('[data-testid="email"]').type('fulano@qa.com')
        cy.get('[data-testid="senha"]').type('teste')
        cy.get('[data-testid="entrar"]').click()
        

        
        cy.url().should('include', '/admin/home')
       
        cy.contains('Bem Vindo').should('be.visible');
    })
})