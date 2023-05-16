create table aluno (
    aluno_id int auto_increment primary key not null,
    nome varchar(256) not null,
    sobrenome varchar(256) not null,
    email varchar(256) not null,
    rg varchar(12) not null
);

insert into aluno (nome, sobrenome, email, rg) values ('vitor', 'gouveia', 'vitor@etec.com', '11.111.111-1');
insert into aluno (nome, sobrenome, email, rg) values ('rodrigo', 'andrade', 'rodrigo@etec.com', '22.222.222-2');
insert into aluno (nome, sobrenome, email, rg) values ('thiago', 'lisboa', 'thiago@etec.com', '33.333.333-3');
insert into aluno (nome, sobrenome, email, rg) values ('vinicius', 'aquino', 'vinicius@etec.com', '44.444.444-4');