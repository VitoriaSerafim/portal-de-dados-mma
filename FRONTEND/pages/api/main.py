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
@app.route('/estados', methods=['GET'])
def get_estados():
    cur = mysql.connection.cursor()
    cur.execute("""SELECT estado.sigla, COUNT(eh_nativo_de.fk_especie_nome_cientifico) AS total_animais_nativos 
FROM estado
LEFT JOIN eh_nativo_de ON estado.sigla = eh_nativo_de.fk_estado_sigla
GROUP BY estado.sigla""")
    data = cur.fetchall()
    cur.close()
    
    # Retorna os estados como JSON
    estados = [{'sigla': row[0], 'total_animais_nativos': row[1]} for row in data]
    return jsonify(estados)


# http://127.0.0.1:5000/tipos-taxonimicos
@app.route('/tipos-taxonimicos', methods=['GET'])
def get_especie():
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

if __name__ == '__main__':
    app.run()
