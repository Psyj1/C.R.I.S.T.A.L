create database cristalbd;
use cristalbd;

create table Unidades(
ID_Unidade int auto_increment primary key,
Nome_Unidade varchar(100) not null,
Rua varchar(100) not null,
Bairro varchar(50) not null,
Numero int not null check (Numero > 0),
Cidade varchar(100) not null,
Estado varchar (100) not null,
CNPJ_Unidade varchar(20) not null unique,
Area_Atuacao varchar(100) not null,
Ativacao_Unidade boolean not null
);

create table Telefones_Unidades(
ID_Telefone_Unidade int auto_increment primary key,
ID_Unidade int,
constraint fk_telefone_unidade foreign key (ID_Unidade) references Unidades(ID_Unidade) on delete cascade,
Telefone_Unidade varchar(30) not null
);

create table Emails_Unidades(
ID_Email_Unidade int auto_increment primary key,
ID_Unidade int,
constraint fk_email_unidade foreign key (ID_Unidade) references Unidades(ID_Unidade) on delete cascade,
Email_Unidade varchar(150) not null check (Email_Unidade LIKE '%_@__%.__%')
);

create table Usuarios(
ID_Usuario int auto_increment primary key,
Nome_Usuario varchar(100) not null,
Idade_Usuario int,
Data_Nascimento_Usuario date not null CHECK (Data_Nascimento_Usuario >= '1900-01-01'),
Perfil_Acesso varchar(100) not null,
Ativacao_Usuario boolean not null
);

create table Telefones_Usuarios(
ID_Telefone_Usuario int auto_increment primary key,
ID_Usuario int,
constraint fk_telefone_usuario foreign key (ID_Usuario) references Usuarios(ID_Usuario) on delete cascade,
Telefone_Usuario varchar(30) not null 
);

create table Emails_Usuarios(
ID_Email_Usuario int auto_increment primary key,
ID_Usuario int,
constraint fk_email_usuario foreign key (ID_Usuario) references Usuarios(ID_Usuario) on delete cascade,
Email_Usuario varchar(150) not null check (Email_Usuario LIKE '%_@__%.__%')
);

create table Alunos(
ID_Aluno int auto_increment primary key,
Nome_Aluno varchar(100) not null,
Data_Nascimento_Aluno date not null CHECK (Data_Nascimento_Aluno >= '1900-01-01'),
CPF_Aluno varchar(30) not null unique,
Tipo_Deficiencia varchar(100),
Renda_Familiar decimal (10,2) not null check (Renda_Familiar >= 0),
Tipo_Escolaridade varchar(50) not null,
Rua varchar(100) not null,
Bairro varchar(50) not null,
Numero int not null check (Numero > 0),
Cidade varchar(100) not null,
Estado varchar(100) not null,
Ativacao_Aluno boolean not null
);

create table Emails_Alunos(
ID_Email_Aluno int auto_increment primary key,
ID_Aluno int,
constraint fk_email_aluno foreign key (ID_Aluno) references Alunos(ID_Aluno) on delete cascade,
Email_Aluno varchar(150) not null check (Email_Aluno LIKE '%_@__%.__%')
);

create table Telefones_Alunos(
ID_Telefone_Aluno int auto_increment primary key,
ID_Aluno int,
constraint fk_telefone_aluno foreign key (ID_Aluno) references Alunos(ID_Aluno) on delete cascade,
Telefone_Aluno varchar(30) not null
);

create table Cursos(
ID_Curso int auto_increment primary key,
Nome_Curso varchar(100) not null,
Turma_Curso varchar(20) not null,
Tempo_Duracao time not null,
Mensalidade_Curso decimal(10,2) check (Mensalidade_Curso >= 0),
Area_Curso varchar(100) not null,
Data_Comeco date not null,
Data_Final date not null,
Horario_Curso time not null,
Ativacao_Curso boolean not null
);

create table Matriculas(
ID_Matricula int auto_increment primary key,
ID_Aluno int,
ID_Curso int,
constraint fk_matricula_curso foreign key (ID_Curso) references Cursos(ID_Curso),
constraint fk_matricula_aluno foreign key (ID_Aluno) references Alunos(ID_Aluno),
Data_Matricula date not null,
Situacao_Matricula varchar(50) not null
);

create table Historicos_Alunos(
ID_Historico int auto_increment primary key,
Frequencia float not null check (Frequencia >= 0),
Notas float not null check (Notas >= 0),
Disciplinas varchar(100) not null,
Situacao varchar(50) not null,
ID_Aluno int,
constraint fk_historico_aluno foreign key (ID_Aluno) references Alunos(ID_Aluno),
Ativacao_Historico boolean not null
);

create table Relatorios(
ID_Relatorio int auto_increment primary key,
Descricao_Relatorio varchar(1000) not null,
Situacao_Relatorio varchar(500) not null,
ID_Aluno int,
ID_Historico int,
ID_Curso int,
ID_Matricula int,
constraint fk_aluno_relatorio foreign key (ID_Aluno) references Alunos(ID_Aluno),
constraint fk_historico_relatorio foreign key (ID_Historico) references Historicos_Alunos(ID_Historico),
constraint fk_curso_relatorio foreign key (ID_Curso) references Cursos(ID_Curso),
constraint fk_matricula_relatorio foreign key (ID_Matricula) references Matriculas(ID_Matricula),
Ativacao_Relatorio boolean not null
);

create table Formularios(
ID_Formulario int auto_increment primary key,
Titulo_Formulario varchar(100) not null,
Descricao_Formulario varchar(1000) not null,
Observacao_Formulario varchar(500) not null,
Tipo_Formulario varchar(50) not null,
Ativacao_Formulario boolean not null
);

create table Recomendacoes(
ID_Recomendacao int auto_increment primary key,
Tipo_Recomendacao varchar(50) not null,
Descricao_Recomendacao varchar(500) not null,
Observacao_Venda varchar(100) not null
);

create table Usuarios_Unidades(
ID_Usuario_Unidade int auto_increment primary key,
Funcao varchar(50) not null,
Nivel_Acesso varchar(50) not null,
ID_Usuario int,
ID_Unidade int,
constraint fk_usuario_unidade foreign key (ID_Usuario) references Usuarios(ID_Usuario),
constraint fk_unidade_usuario foreign key (ID_Unidade) references Unidades(ID_Unidade)
);

create table Usuarios_Recomendacoes(
ID_Usuario_Recomendacao int auto_increment primary key,
ID_Usuario int,
ID_Recomendacao int,
constraint fk_usuario_recomendacao foreign key (ID_Usuario) references Usuarios(ID_Usuario),
constraint fk_recomendacao_usuario foreign key (ID_Recomendacao) references Recomendacoes(ID_Recomendacao),
Data_Visualizacao date not null,
Situacao_Atual varchar(50) not null,
Permissao_Visualizacao varchar(50) not null
);

create table Usuarios_Relatorios(
ID_Usuario_Relatorio int auto_increment primary key,
ID_Usuario int,
ID_Relatorio int,
constraint fk_usuario_relatorio foreign key (ID_Usuario) references Usuarios(ID_Usuario),
constraint fk_relatorio_usuario foreign key (ID_Relatorio) references Relatorios(ID_Relatorio),
Data_Criacao date not null,
Permissao_Acesso varchar(50) not null
);

create table Usuarios_Formularios(
ID_Usuario_Formulario int auto_increment primary key,
ID_Usuario int,
ID_Formulario int,
constraint fk_usuario_formulario foreign key (ID_Usuario) references Usuarios(ID_Usuario),
constraint fk_formulario_usuario foreign key (ID_Formulario) references Formularios(ID_Formulario),
Data_Acesso date not null,
Data_Lancamento date not null,
Permissao_Entrada varchar(50) not null,
Situacao varchar(50) not null
);

create table Alunos_Formularios(
ID_Aluno_Formulario int auto_increment primary key,
ID_Aluno int,
ID_Formulario int,
constraint fk_aluno_formulario foreign key (ID_Aluno) references Alunos(ID_Aluno),
constraint fk_formulario_aluno foreign key (ID_Formulario) references Formularios(ID_Formulario),
Data_Envio date not null,
Resultado_Obtido varchar(500) not null
);

create table Formularios_Relatorios(
ID_Formulario_Relatorio int auto_increment primary key,
ID_Formulario int,
ID_Relatorio int,
constraint fk_formulario_relatorio foreign key (ID_Formulario) references Formularios(ID_Formulario),
constraint fk_relatorio_formulario foreign key (ID_Relatorio) references Relatorios(ID_Relatorio),
Data_Recebimento date not null,
Observacao_Dado varchar(100) not null
);

create table Relatorios_Recomendacoes(
ID_Relatorio_Recomendacao int auto_increment primary key,
ID_Relatorio int,
ID_Recomendacao int,
constraint fk_relatorio_recomendacao foreign key (ID_Relatorio) references Relatorios(ID_Relatorio),
constraint fk_recomendacao_relatorio foreign key (ID_Recomendacao) references Recomendacoes(ID_Recomendacao),
Data_Emissao date not null,
Observacao varchar(100) not null
);

DELIMITER $$

CREATE TRIGGER trg_calcula_idade_insert
BEFORE INSERT ON Usuarios
FOR EACH ROW
BEGIN
  SET NEW.Idade_Usuario = TIMESTAMPDIFF(YEAR, NEW.Data_Nascimento_Usuario, CURDATE());
END $$

DELIMITER ;

INSERT INTO Alunos(Nome_Aluno, Data_Nascimento_Aluno, CPF_Aluno, Tipo_Deficiencia, Renda_Familiar, Tipo_Escolaridade, Rua, Bairro, Numero, Cidade, Estado, Ativacao_Aluno) VALUES
('João da Silva', '2004-05-20', '123.456.789-00', 'Nenhuma', 1200.00, 'Ensino Médio Completo', 'Rua das Flores', 'Centro', 123, 'Registro', 'SP', TRUE),
('Maria Oliveira', '2002-11-15', '987.654.321-11', 'Visual', 800.00, 'Ensino Médio Incompleto', 'Av. Brasil', 'Vila Nova', 456, 'Iguape', 'SP', TRUE),
('Carlos Pereira', '2000-02-28', '111.222.333-44', 'Auditiva', 1500.00, 'Superior Incompleto', 'Rua da Paz', 'Jardim América', 789, 'Cananéia', 'SP', TRUE);

INSERT INTO Telefones_Alunos (ID_Aluno, Telefone_Aluno) VALUES
(1, '(13) 99999-1234'),
(2, '(13) 98888-5678'),
(3, '(13) 97777-9101');

INSERT INTO Emails_Alunos (ID_Aluno, Email_Aluno) VALUES
(1, 'joao.silva@email.com'),
(2, 'maria.oliveira@email.com'),
(3, 'carlos.pereira@email.com');

INSERT INTO Cursos(Nome_Curso, Turma_Curso, Tempo_Duracao, Mensalidade_Curso, Area_Curso, Data_Comeco, Data_Final, Horario_Curso, Ativacao_Curso) VALUES
('Informática Básica', 'T1', '01:30:00', 200.00, 'Tecnologia', '2025-06-01', '2025-12-01', '14:00:00', TRUE),
('Administração Geral', 'T2', '02:00:00', 250.00, 'Gestão', '2025-07-01', '2025-12-15', '09:00:00', TRUE),
('Design Gráfico', 'T3', '01:45:00', 300.00, 'Artes Visuais', '2025-06-15', '2025-11-30', '16:00:00', TRUE);

INSERT INTO Matriculas (ID_Aluno, ID_Curso, Data_Matricula, Situacao_Matricula) VALUES
(1, 1, '2025-05-10', 'Ativa'),
(2, 2, '2025-05-11', 'Ativa'),
(3, 3, '2025-05-12', 'Ativa');

INSERT INTO Historicos_Alunos(Frequencia, Notas, Disciplinas, Situacao, ID_Aluno, Ativacao_Historico) VALUES
(95.0, 8.5, 'Lógica de Programação', 'Aprovado', 1, TRUE),
(87.5, 7.0, 'Empreendedorismo', 'Aprovado', 2, TRUE),
(60.0, 6.0, 'Fundamentos de Design', 'Recuperação', 3, TRUE);

ALTER TABLE Telefones_Unidades ADD Ativacao_Telefone BOOLEAN NOT NULL DEFAULT TRUE;
ALTER TABLE Emails_Unidades ADD Ativacao_Email BOOLEAN NOT NULL DEFAULT TRUE;

ALTER TABLE Telefones_Unidades DROP FOREIGN KEY fk_telefone_unidade;
ALTER TABLE Telefones_Unidades
ADD CONSTRAINT fk_telefone_unidade FOREIGN KEY (ID_Unidade) REFERENCES Unidades(ID_Unidade);

ALTER TABLE Emails_Unidades DROP FOREIGN KEY fk_email_unidade;
ALTER TABLE Emails_Unidades
ADD CONSTRAINT fk_email_unidade FOREIGN KEY (ID_Unidade) REFERENCES Unidades(ID_Unidade);

DELIMITER $$

CREATE TRIGGER trg_unidade_inativada
AFTER UPDATE ON Unidades
FOR EACH ROW
BEGIN
  IF NEW.Ativacao_Unidade = FALSE THEN
    UPDATE Telefones_Unidades SET Ativacao_Telefone = FALSE WHERE ID_Unidade = NEW.ID_Unidade;
    UPDATE Emails_Unidades SET Ativacao_Email = FALSE WHERE ID_Unidade = NEW.ID_Unidade;
  END IF;
END $$

DELIMITER ;

ALTER TABLE Telefones_Usuarios ADD Ativacao_Telefone BOOLEAN NOT NULL DEFAULT TRUE;
ALTER TABLE Emails_Usuarios ADD Ativacao_Email BOOLEAN NOT NULL DEFAULT TRUE;

ALTER TABLE Telefones_Usuarios DROP FOREIGN KEY fk_telefone_usuario;
ALTER TABLE Telefones_Usuarios
ADD CONSTRAINT fk_telefone_usuario FOREIGN KEY (ID_Usuario) REFERENCES Usuarios(ID_Usuario);

ALTER TABLE Emails_Usuarios DROP FOREIGN KEY fk_email_usuario;
ALTER TABLE Emails_Usuarios
ADD CONSTRAINT fk_email_usuario FOREIGN KEY (ID_Usuario) REFERENCES Usuarios(ID_Usuario);

DELIMITER $$

CREATE TRIGGER trg_usuario_inativado
AFTER UPDATE ON Usuarios
FOR EACH ROW
BEGIN
  IF NEW.Ativacao_Usuario = FALSE THEN
    UPDATE Telefones_Usuarios SET Ativacao_Telefone = FALSE WHERE ID_Usuario = NEW.ID_Usuario;
    UPDATE Emails_Usuarios SET Ativacao_Email = FALSE WHERE ID_Usuario = NEW.ID_Usuario;
  END IF;
END $$

DELIMITER ;

select * from Emails_Usuarios;
select * from Telefones_Usuarios;
select * from Usuarios;

alter table Usuarios
add Senha_Usuario varchar(100) not null;

