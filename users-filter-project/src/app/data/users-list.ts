import { IUser } from "../interfaces/user/user.interface";

export const usersList : IUser[]= [
    {
        nome: "João Silva",
        email: "joao.silva@example.com",
        senha: "senha-segura-123",
        idade: 30,
        endereco: {
            rua: "Rua das Flores",
            numero: 42,
            cidade: "São Paulo",
            estado: "SP",
            pais: "Brasil"
        },
        telefone: "11912345678",
        ativo: true,
        funcao: "Desenvolvedor",
        dataCadastro: "2023-08-01T09:00:00.000Z",
        status: {
            online: true,
            verificado: true,
            assinaturaAtiva: true,
            ultimoAcesso: "2023-08-02T09:00:00.000Z"
        }
    },
    {
        nome: "Maria Fernandes",
        email: "maria.fernandes@example.com",
        senha: "Maria123",
        idade: 25,
        endereco: {
            rua: "Avenida do Sol",
            numero: 100,
            cidade: "Rio de Janeiro",
            estado: "RJ",
            pais: "Brasil"
        },
        telefone: "21956789101",
        ativo: false,
        funcao: "Designer",
        dataCadastro: "2023-08-05T09:00:00.000Z",
        status: {
            online: false,
            verificado: false,
            assinaturaAtiva: false,
            ultimoAcesso: "2023-08-06T09:00:00.000Z"
        }
    },
    {
        nome: "Carlos Pereira",
        email: "carlos.pereira@example.com",
        senha: "Carlos456",
        idade: 40,
        endereco: {
            rua: "Praça da Liberdade",
            numero: 5,
            cidade: "Belo Horizonte",
            estado: "MG",
            pais: "Brasil"
        },
        telefone: "31911121314",
        ativo: true,
        funcao: "Gerente",
        dataCadastro: "2023-08-10T09:00:00.000Z",
        status: {
            online: false,
            verificado: true,
            assinaturaAtiva: false,
            ultimoAcesso: "2023-08-12T09:00:00.000Z"
        }
    },
    {
        nome: "Ana Sousa",
        email: "ana.sousa@example.com",
        senha: "Ana789",
        idade: 22,
        endereco: {
            rua: "Rua das Pedras",
            numero: 80,
            cidade: "Porto Alegre",
            estado: "RS",
            pais: "Brasil"
        },
        telefone: "51915161718",
        ativo: false,
        funcao: "Analista",
        dataCadastro: "2023-08-15T09:00:00.000Z",
        status: {
            online: true,
            verificado: false,
            assinaturaAtiva: true,
            ultimoAcesso: "2023-08-18T09:00:00.000Z"
        }
    },
    {
        nome: "Pedro Mendes",
        email: "pedro.mendes@example.com",
        senha: "Pedro012",
        idade: 35,
        endereco: {
            rua: "Boulevard Central",
            numero: 60,
            cidade: "Recife",
            estado: "PE",
            pais: "Brasil"
        },
        telefone: "81919202122",
        ativo: true,
        funcao: "Diretor",
        dataCadastro: "2023-08-20T09:00:00.000Z",
        status: {
            online: false,
            verificado: true,
            assinaturaAtiva: false,
            ultimoAcesso: "2023-08-25T09:00:00.000Z"
        }
    },
    {
        nome: "Maria Clara",
        email: "maria.clara@example.com",
        senha: "Maria456",
        idade: 28,
        endereco: {
            rua: "Rua do Sol",
            numero: 55,
            cidade: "Fortaleza",
            estado: "CE",
            pais: "Brasil"
        },
        telefone: "85912345678",
        ativo: true,
        funcao: "Engenheira",
        dataCadastro: "2023-09-01T09:00:00.000Z",
        status: {
            online: false,
            verificado: true,
            assinaturaAtiva: true,
            ultimoAcesso: "2023-09-02T09:00:00.000Z"
        }
    },
    {
        nome: "Joana Almeida",
        email: "joana.almeida@example.com",
        senha: "Joana789",
        idade: 32,
        endereco: {
            rua: "Avenida Brasil",
            numero: 90,
            cidade: "Salvador",
            estado: "BA",
            pais: "Brasil"
        },
        telefone: "71987654321",
        ativo: false,
        funcao: "Consultora",
        dataCadastro: "2023-09-05T09:00:00.000Z",
        status: {
            online: true,
            verificado: false,
            assinaturaAtiva: false,
            ultimoAcesso: "2023-09-06T09:00:00.000Z"
        }
    },
    {
        nome: "José Santos",
        email: "jose.santos@example.com",
        senha: "Jose123",
        idade: 45,
        endereco: {
            rua: "Rua da Paz",
            numero: 70,
            cidade: "Curitiba",
            estado: "PR",
            pais: "Brasil"
        },
        telefone: "41912345678",
        ativo: true,
        funcao: "Administrador",
        dataCadastro: "2023-09-10T09:00:00.000Z",
        status: {
            online: true,
            verificado: true,
            assinaturaAtiva: true,
            ultimoAcesso: "2023-09-12T09:00:00.000Z"
        }
    },
    {
        nome: "Mariana Lima",
        email: "mariana.lima@example.com",
        senha: "Mariana123",
        idade: 27,
        endereco: {
            rua: "Rua das Palmeiras",
            numero: 88,
            cidade: "Manaus",
            estado: "AM",
            pais: "Brasil"
        },
        telefone: "92987654321",
        ativo: false,
        funcao: "Marketing",
        dataCadastro: "2023-09-15T09:00:00.000Z",
        status: {
            online: false,
            verificado: false,
            assinaturaAtiva: true,
            ultimoAcesso: "2023-09-16T09:00:00.000Z"
        }
    },
    // {
    //     nome: "Lucas Rodrigues",
    //     email: "lucas.rodrigues@example.com",
    //     senha: "Lucas123",
    //     idade: 29,
    //     endereco: {
    //         rua: "Rua das Laranjeiras",
    //         numero: 40,
    //         cidade: "Florianópolis",
    //         estado: "SC",
    //         pais: "Brasil"
    //     },
    //     telefone: "48912345678",
    //     ativo: true,
    //     funcao: "Desenvolvedor",
    //     dataCadastro: "2023-09-20T09:00:00.000Z",
    //     status: {
    //         online: false,
    //         verificado: true,
    //         assinaturaAtiva: false,
    //         ultimoAcesso: "2023-09-22T09:00:00.000Z"
    //     }
    // },
    // {
    //     nome: "Fernanda Oliveira",
    //     email: "fernanda.oliveira@example.com",
    //     senha: "Fernanda456",
    //     idade: 31,
    //     endereco: {
    //         rua: "Avenida Principal",
    //         numero: 10,
    //         cidade: "Belém",
    //         estado: "PA",
    //         pais: "Brasil"
    //     },
    //     telefone: "91987654321",
    //     ativo: true,
    //     funcao: "Analista",
    //     dataCadastro: "2023-09-25T09:00:00.000Z",
    //     status: {
    //         online: true,
    //         verificado: true,
    //         assinaturaAtiva: true,
    //         ultimoAcesso: "2023-09-26T09:00:00.000Z"
    //     }
    // },
    // {
    //     nome: "Rafael Souza",
    //     email: "rafael.souza@example.com",
    //     senha: "Rafael789",
    //     idade: 33,
    //     endereco: {
    //         rua: "Rua das Acácias",
    //         numero: 15,
    //         cidade: "Goiânia",
    //         estado: "GO",
    //         pais: "Brasil"
    //     },
    //     telefone: "62912345678",
    //     ativo: false,
    //     funcao: "Gerente",
    //     dataCadastro: "2023-09-30T09:00:00.000Z",
    //     status: {
    //         online: true,
    //         verificado: false,
    //         assinaturaAtiva: true,
    //         ultimoAcesso: "2023-10-01T09:00:00.000Z"
    //     }
    // },
    ];