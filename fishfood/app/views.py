from flask import render_template, request
from app import app
from fishdata.group import getStock
import json

@app.route('/')
@app.route('/index')

def index():


	return render_template('index.html',
							title='Home')


@app.route('/api/searchbyfish', methods=["POST"])
# api route - receives a stockID
def searchbyfish():
	print("searching by fish ...")
	# extract the stockID from the request
	
	data = request.json["item"]

	value = data["value"]
	print("value",value)
	# look up the values in parsed data

	fishData = getStock(value)

	print(fishData)
	# send back those values (and probably some other stuff)
	response = fishData.to_json()
	print("response", response)

	return response