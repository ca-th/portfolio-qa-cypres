describe('Fluxo de Autenticação', () => {
    it('Deve receber um token ao fazer login', () => {
        
        cy.request({
            method: 'POST', 
            url: 'https://serverest.dev/login',
            body: {
                "email": "beltrano@qa.com.br", 
                "password": "teste"
            }
    
        }).then((response) => {
            
        
            expect(response.status).to.equal(200);

     
            expect(response.body.message).to.equal('Login realizado com sucesso');

           cy.log(response.body.authorization); 
         
            // response.body.authorization = O valor que veio do servidor
            // .to.not.be.empty = A regra que estamos aplicando
           expect(response.body.authorization).to.not.be.empty; 
        })
    })
})