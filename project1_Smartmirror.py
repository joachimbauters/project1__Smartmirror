from flask import Flask
from flask import render_template
from temperatuur_meten import read_temp
from dbconn import DbClass
import os

app = Flask(__name__)


@app.route('/')
def homepage():
    temperatuur = read_temp()
    return render_template('homepage.html', temperatuur=temperatuur)

@app.route('/news')
def news():
    temperatuur2 = read_temp()
    return render_template('news.html',temperatuur=temperatuur2)

@app.route('/calendar')
def calendar():
    temperatuur3 = read_temp()
    return render_template('calendar.html', temperatuur=temperatuur3)


@app.route('/fotoslider')
def fotoslider():
    temperatuur4 = read_temp()
    return render_template('fotoslider.html', temperatuur=temperatuur4)

@app.route('/dbTest')
def dbTest():

    DB_layer = DbClass()
    boodschap = DB_layer.getDataFromDatabase()
    return render_template('dbTest.html', boodschappen=boodschap)

@app.errorhandler(404)
def pageNotFound(error):
    return render_template('errors/404.html', error=error)

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 8080))
    host = "0.0.0.0"
    app.run(port=port, host=host, debug=True)
