describe('Cadastro de usuarios', () => {
    it('Deve fazer o cadastro de um novo usuario', () => {

        const emailDinamico = `joao.pxe${Date.now()}.sntos@gmail.com`; //email único usando a hora exata {data.now()}, nunca mais recebe o erro de "Email já cadastrado"
       cy.request({
        method: 'POST', //criando algo
        url: 'https://serverest.dev/usuarios',
        body: {
            "nome": "Joao Peixe ALemao",
            "email": emailDinamico,  
            "password": "Teste@321",
            "administrador": "true"
        }
        }).then((response) => {
            
            expect(response.status).to.equal(201);

            expect(response.body.message).to.equal('Cadastro realizado com sucesso');

            cy.log('ID do Usuário Criado: ' + response.body._id);

        }

    )}
)})