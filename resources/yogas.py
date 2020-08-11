import models

from flask import Blueprint, jsonify, request

from playhouse.shortcuts import model_to_dict

yoga = Blueprint('yogas', 'yoga')

#index route
@yoga.route('/', methods=["GET"])
def get_all_yogas():
    try:
        yogas = [model_to_dict(yoga) for yoga in models.Yoga.select()]

        return jsonify(data=yogas, status={'code': 200, 'message': 'Success'})
    except:
        return jsonify(data={}, status={'code': 500, 'message': 'Error getting resources'})

#create route
@yoga.route('/', methods=["POST"])
def create_yogas():
    body = request.get_json()
    print(body)
    new_yoga = models.Yoga.create(name=body['name'], img=body['img'])
    yoga_data = model_to_dict(new_yoga)
    return jsonify(data=yoga_data, status={'code': 200, 'message': 'Success'})


#show route
@yoga.route('/<id>', methods=['GET'])
def get_one_yoga(id):
    print('heyyyyyyy')
    yoga = models.Yoga.get_by_id(id)
    yoga_dict = model_to_dict(yoga)
    return jsonify(data=yoga_dict , status={'code': 200 , 'message' : 'Success'})