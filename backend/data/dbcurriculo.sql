BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "pessoa" (
	"id_pessoa"	INTEGER,
	"nome"	char(225) NOT NULL,
	"idade"	INTEGER NOT NULL,
	"cargo"	char(225) NOT NULL,
	"foto"	char(225) NOT NULL,
	FOREIGN KEY("id_pessoa") REFERENCES "pessoa"("id_pessoa"),
	PRIMARY KEY("id_pessoa" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "formacao" (
	"id_curso"	INTEGER,
	"id_pessoa"	INTEGER,
	"nome_curso"	char(225) NOT NULL,
	"ano_inicio"	date NOT NULL,
	"ano_fim"	date NOT NULL,
	"descricao"	char(225) NOT NULL,
	FOREIGN KEY("id_curso") REFERENCES "pessoa"("id_pessoa"),
	FOREIGN KEY("id_pessoa") REFERENCES "pessoa"("id_pessoa"),
	PRIMARY KEY("id_curso" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "experiencia" (
	"id_expec"	INTEGER,
	"id_pessoa"	INTEGER,
	"nome_empresa"	char(225) NOT NULL,
	"ano"	date NOT NULL,
	"cargo"	char(20) NOT NULL,
	"descricao"	char(225) NOT NULL,
	FOREIGN KEY("id_pessoa") REFERENCES "pessoa"("id_pessoa"),
	FOREIGN KEY("id_expec") REFERENCES "pessoa"("id_pessoa"),
	PRIMARY KEY("id_expec" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "idioma" (
	"id_formacao"	INTEGER,
	"id_pessoa"	INTEGER,
	"nome_idioma"	char(225) NOT NULL,
	"nivel_idioma"	char(225) NOT NULL,
	FOREIGN KEY("id_pessoa") REFERENCES "pessoa"("id_pessoa"),
	FOREIGN KEY("id_formacao") REFERENCES "pessoa"("id_pessoa"),
	PRIMARY KEY("id_formacao" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "sobre_mim" (
	"id_info"	INTEGER,
	"id_pessoa"	INTEGER,
	"rua"	char(225) NOT NULL,
	"estado"	char(225) NOT NULL,
	"telefone"	INTEGER(225) NOT NULL,
	"email"	char(225) NOT NULL,
	"objetivos"	char(225) NOT NULL,
	FOREIGN KEY("id_info") REFERENCES "pessoa"("id_pessoa"),
	FOREIGN KEY("id_pessoa") REFERENCES "pessoa"("id_pessoa"),
	PRIMARY KEY("id_info" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "habilidade" (
	"id_skill"	INTEGER,
	"id_pessoa"	INTEGER,
	"nome"	char(225) NOT NULL,
	"nivel"	char(225) NOT NULL,
	FOREIGN KEY("id_skill") REFERENCES "pessoa"("id_pessoa"),
	FOREIGN KEY("id_pessoa") REFERENCES "pessoa"("id_pessoa"),
	PRIMARY KEY("id_skill" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "recomendacao" (
	"id_reco"	INTEGER,
	"id_pessoa"	INTEGER,
	"nome_pessoa"	char(225) NOT NULL,
	FOREIGN KEY("id_reco") REFERENCES "pessoa"("id_pessoa"),
	FOREIGN KEY("id_pessoa") REFERENCES "pessoa"("id_pessoa"),
	PRIMARY KEY("id_reco" AUTOINCREMENT)
);
COMMIT;
