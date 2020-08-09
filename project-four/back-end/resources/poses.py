import models

from flask import Blueprint, jsonify, request

from playhouse.shortcuts import model_to_dict

pose = Blueprint('poses', 'pose')


#create pose
@pose.route('/<id>', methods=["POST"])
def create_poses():
    body = request.get_json()
    print(body)
    new_pose = models.Pose.create(name=body['name'], yoga= yoga.id , description = ['description'] ,benefits = ['benefits'], video = ['video'])
    pose_data = model_to_dict(new_pose)
    return jsonify(data=pose_data, status={'code': 200, 'message': 'Success'})

