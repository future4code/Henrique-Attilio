CREATE TABLE IF NOT EXISTS endereco(
    cep VARCHAR(50) NOT NULL
    logradouro VARCHAR(50) NOT NULL
    complemento VARCHAR(50)
    bairro VARCHAR(50) NOT NULL
    localidade VARCHAR(50) NOT NULL
    cidade VARCHAR(50)
    uf VARCHAR(50)
    ibge VARCHAR(50)
    gia VARCHAR(50)
    ddd VARCHAR(50)
    siafi VARCHAR(50)
    PRIMARY KEY(cep)
);