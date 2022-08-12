"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
import os
import requests
api = Blueprint('api', __name__)



#API_KEY = os.environ['API_KEY']
#HEADERS = {'Authorization': 'Bearer %s' % API_KEY}


#@api.route('/details/<name>', methods=['GET'])
#def handle_FullDetails(name):
#    r =requests.get('https://api.yelp.com/v3/businesses/'+ str(name), headers=HEADERS)
#    run = r.json()
#    return jsonify(run), 200

API_KEY = 'fDbN1HAP_TkPbEzV5e-04ldTDzSz0rPhMRR9r0EnUSDgLbriYq7RQO-BqATkYPkn1PCUgCWk64cJIDJkOd489Qjw8OmNjRd61c1Ri9PdFB2F0gIulKiFzVWbD-jVYnYx'

# Using the yelp business search API: https://www.yelp.com/developers/documentation/v3/business_search

# headers contain the api key.
headers = {'Authorization': 'Bearer {}'.format(api_key)}
search_api_url = 'https://api.yelp.com/v3/businesses/search'
params = {'term': 'coffee', 
          'location': 'Toronto, Ontario',
          'limit': 50}
response = requests.get(search_api_url, headers=headers, params=params, timeout=5)

print(response.url)
print(response.status_code)
print(response.headers)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

