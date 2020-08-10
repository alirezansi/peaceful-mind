import models

from flask import Blueprint, jsonify, request

from playhouse.shortcuts import model_to_dict

pose = Blueprint('poses', 'pose')


#create pose
@pose.route('/', methods=["POST"])
def create_poses():
    body = request.get_json()
    print(body)
    new_pose = models.Pose.create(name=['name'], yoga_id=body['yoga_id'] , description = ['description'] ,benefits = ['benefits'], video = ['video'])
    pose_data = model_to_dict(new_pose)
    return jsonify(data=pose_data, status={'code': 200, 'message': 'Success'})

