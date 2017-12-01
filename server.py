# Stephen Parsons
# Assignment Dissapearing Ninja BUT WITH AJAX
# 12/1/17

from flask import Flask, render_template, request, redirect, jsonify

app = Flask(__name__)
@app.route('/')
def index():
	return render_template('index.html')

@app.route('/post/<ninja>')
def which_color(ninja):
	if ninja == 'red':
		return jsonify(name='raphael')
	elif ninja == 'blue':
		return jsonify(name='leonardo')
	elif ninja == 'purple':
		return jsonify(name='donatello')
	elif ninja == 'orange':
		return jsonify(name='michelangelo')			

app.run(debug=True)		