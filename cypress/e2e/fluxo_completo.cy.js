describe('API + Frontend', () => {
    
    it('Deve criar um usuário via API e logar com ele no Frontend', () => {

        // usar o Date.now() para o email nunca repetir
        const emailDinamico = `usuario.teste${Date.now()}@qa.com.br`;
        const senhaFixa = 'teste321';

        // back
        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/usuarios', 
            body: {
                "nome": "Usuario Hibrido",
                "email": emailDinamico,
                "password": senhaFixa,
                "administrador": "true"
            }
        }).then((response) => {
            expect(response.status).to.equal(201);
        });

        // front
        
        cy.visit('https://front.serverest.dev/login');
        cy.get('[data-testid="email"]').type(emailDinamico);
        cy.get('[data-testid="senha"]').type(senhaFixa);
        cy.get('[data-testid="entrar"]').click();

        // Verificar se foi para a Home e se o botão Logout apareceu
        cy.url().should('include', '/home');
        cy.get('[data-testid="logout"]').should('be.visible');
        
    
    });
});