from flask import Flask
from flask_mysqldb import MySQL
from flask import jsonify 
from flask_cors import CORS

app = Flask(__name__)

# Configurações do MySQL
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '12345678'
app.config['MYSQL_DB'] = 'trabalho'

# Inicializa a extensão do MySQL
mysql = MySQL(app)

@app.route('/')
def index():
    return 'Bem-vindo à página principal!'

# http://127.0.0.1:5000/estados
@app.route('/qtd-animais-em-risco', methods=['GET']) #querry 3
# Exibe o estado e a quantidade de animais nativos desse estado
def get_qtd_animais():
    cur = mysql.connection.cursor()
    cur.execute("""select situacao, count(nome_cientifico) as total
from categoria_de_ameaca 
join especie on id_categoria=fk_categoria_de_ameaca_id_categoria group by id_categoria order by total desc;""")
    data = cur.fetchall()
    cur.close()
    
    # Retorna os estados como JSON
    estados = [{'situacao': row[0], 'total': row[1]} for row in data]
    return jsonify(estados)


# http://127.0.0.1:5000/tipos-taxonimicos
@app.route('/tipos-taxonomicos', methods=['GET']) #querry 1
def get_especie_tipo():
    cur = mysql.connection.cursor()

    # analisando a quantidade de especies por grupo taxonomico
    cur.execute("""SELECT grupo_taxonomico.nome_taxonomico, COUNT(especie.nome_cientifico) AS total_especies
FROM grupo_taxonomico
JOIN especie ON grupo_taxonomico.id_grupo = especie.fk_grupo_taxonomico_id_grupo
GROUP BY grupo_taxonomico.nome_taxonomico;""")
    
    data = cur.fetchall()
    cur.close()
    
    # Retorna os estados como JSON
    especie = [{'nome_taxonomico': row[0], 'total_especies': row[1]} for row in data]
    return jsonify(especie)

# http://127.0.0.1:5000/qtd-unidades-por-estado
@app.route('/qtd-unidades-por-estado', methods=['GET']) #query 4
def get_unidades_estados():
    cur = mysql.connection.cursor()
    cur.execute("""SELECT estado.nome_estado, COUNT(unidade_de_conservacao.id_unidade) AS quantidade
FROM estado
INNER JOIN pertence ON estado.sigla = pertence.fk_estado_sigla
INNER JOIN unidade_de_conservacao ON pertence.fk_unidade_de_conservacao_id_unidade = unidade_de_conservacao.id_unidade
GROUP BY estado.nome_estado;""")
    data = cur.fetchall()
    cur.close()
    
    # Retorna os estados como JSON
    unidades = [{'nome_estado': row[0], 'quantidade': row[1]} for row in data]
    return jsonify(unidades)

# http://127.0.0.1:5000/qtd-especie-por-familia
@app.route('/qtd-especie-por-familia', methods=['GET']) #querry 5
def get_especie_familia():
    cur = mysql.connection.cursor()

    # Exibe a familia e a quantidade de especies associadas essa familia, apenas quando essa quantidade superar 10 unidades
    cur.execute("""SELECT familia.nome_familia, (
    SELECT COUNT(*) 
    FROM especie 
    WHERE especie.fk_familia_id_familia = familia.id_familia
) AS quantidade_especies
FROM familia
HAVING quantidade_especies > 10;""")
    
    data = cur.fetchall()
    cur.close()
    
    # Retorna os estados como JSON
    familia = [{'nome_familia': row[0], 'quantidade_especies': row[1]} for row in data]
    return jsonify(familia)

# http://127.0.0.1:5000/qtd-unidades-por-bioma
@app.route('/qtd-unidades-por-bioma', methods=['GET']) # querry 6
def get_unidade_bioma():
    cur = mysql.connection.cursor()

    # analisando a quantidade de unidades de conservação por bioma
    cur.execute("""SELECT bioma.nome_bioma, (
  SELECT COUNT(*)
  FROM possui
  INNER JOIN unidade_de_conservacao ON possui.fk_unidade_de_conservacao_id_unidade = unidade_de_conservacao.id_unidade
  WHERE possui.fk_bioma_id_bioma = bioma.id_bioma
) AS quantidade
FROM bioma;""")
    
    data = cur.fetchall()
    cur.close()
    
    # Retorna os estados como JSON
    unidades_bioma = [{'nome_bioma': row[0], 'quantidade': row[1]} for row in data]
    return jsonify(unidades_bioma)

@app.route('/qtd-unidades-por-estado', methods=['GET']) # querry 6
def get_unidade_estado():
    cur = mysql.connection.cursor()

  # QUERY 4 - Exibe o estado e a quantidade de unidades de conservação desse estado
    cur.execute("""SELECT estado.nome_estado, COUNT(unidade_de_conservacao.id_unidade) AS quantidade
FROM estado
INNER JOIN pertence ON estado.sigla = pertence.fk_estado_sigla
INNER JOIN unidade_de_conservacao ON pertence.fk_unidade_de_conservacao_id_unidade = unidade_de_conservacao.id_unidade
GROUP BY estado.nome_estado;""")
    
    data = cur.fetchall()
    cur.close()
    
    # Retorna os estados como JSON
    unidades_estado = [{'nome_estado': row[0], 'quantidade': row[1]} for row in data]
    return jsonify(unidades_estado)

# http://127.0.0.1:5000/qtd_especie_nativa
@app.route('/qtd_especie_nativa', methods=['GET']) #querry 7
def get_especie_nativa():
    cur = mysql.connection.cursor()

    # mostra a quantidade de especies nativas de cada estado, ordenando em ordem decrescente, mostrando apenas o top 10 estados com maior quantidade de especies
    cur.execute("""SELECT sigla,count(fk_especie_nome_cientifico) as tot_especie_estado
FROM estado inner join eh_nativa_de on fk_estado_sigla=sigla group by sigla having tot_especie_estado > 93 order by tot_especie_estado desc;""")
    
    data = cur.fetchall()
    cur.close()
    
    # Retorna os estados como JSON
    especie_nativa_estado = [{'sigla': row[0], 'tot_especie_estado': row[1]} for row in data]
    return jsonify(especie_nativa_estado)


# http://127.0.0.1:5000/qtd_especie_nativa
@app.route('/qtd_especies_nativas', methods=['GET']) #querry 7
def get_especies_nativas():
    cur = mysql.connection.cursor()

    # mostra a quantidade de especies nativas de cada estado, ordenando em ordem decrescente, mostrando apenas o top 10 estados com maior quantidade de especies
    cur.execute("""SELECT estado.nome_estado, COUNT(eh_nativa_de.fk_especie_nome_cientifico) AS total_animais_nativos
FROM estado
LEFT JOIN eh_nativa_de ON estado.sigla = eh_nativa_de.fk_estado_sigla
GROUP BY estado.sigla;""")
    
    data = cur.fetchall()
    cur.close()
    
    # Retorna os estados como JSON
    especies_nativas_estado = [{'nome_estado': row[0], 'tot_especie_estado': row[1]} for row in data]
    return jsonify(especies_nativas_estado)

# http://127.0.0.1:5000/risco-grupo-taxonomico
@app.route('/risco-grupo-taxonomico', methods=['GET']) #querry 2
def get_grupo_taxonomico():
    cur = mysql.connection.cursor()

    # mostra o nome taxomico, sua situação de risco e a quantidade de especies que estão nesse grupo taxonomico e nessa categoria de risco
    cur.execute("""SELECT grupo_taxonomico.nome_taxonomico, categoria_de_ameaca.situacao, COUNT(*) AS quantidade
FROM grupo_taxonomico
JOIN especie ON grupo_taxonomico.id_grupo = especie.fk_grupo_taxonomico_id_grupo
JOIN categoria_de_ameaca ON especie.fk_categoria_de_ameaca_id_categoria = categoria_de_ameaca.id_categoria
WHERE categoria_de_ameaca.situacao IN ('EX', 'EW', 'CR')
GROUP BY grupo_taxonomico.nome_taxonomico, categoria_de_ameaca.situacao;""")
    
    data = cur.fetchall()
    cur.close()
    
    # Retorna os estados como JSON
    grupo_taxonomico = [{'nome_taxonomico': row[0], 'categoria_de_ameaça': row[1], 'quantidade':row[2]} for row in data]
    return jsonify(grupo_taxonomico)

# http://127.0.0.1:5000/sem-nome-popular
@app.route('/sem-nome-popular', methods=['GET']) #querry 2
def get_especie_sem_nome():
    cur = mysql.connection.cursor()

    cur.execute("""select count(nome_cientifico) from especie left join apelidada_por on nome_cientifico=fk_especie_nome_cientifico
where fk_especie_nome_cientifico is null;""")
    
    data = cur.fetchall()
    cur.close()
    
    # Retorna os estados como JSON
    especie_sem_nome = [{'nome_cientifico': row[0]} for row in data]
    return jsonify(especie_sem_nome)

if __name__ == '__main__':
    app.run()
