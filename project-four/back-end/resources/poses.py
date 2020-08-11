import models

from flask import Blueprint, jsonify, request

from playhouse.shortcuts import model_to_dict

pose = Blueprint('poses', 'pose')


#create pose
@pose.route('/', methods=["POST"])
def create_poses():
    body = request.get_json()
    print(body)
    new_pose = models.Pose.create(name=body['name'], yoga=body['yoga'] , description = body['description'] ,benefits = body['benefits'], video = body['video'])
    pose_data = model_to_dict(new_pose)
    return jsonify(data=pose_data, status={'code': 200, 'message': 'Success'})

@pose.route('/', methods=["GET"])
def get_all_poses():
    try:
        poses = [model_to_dict(pose) for pose in models.Pose.select()]

        return jsonify(data=poses, status={'code': 200, 'message': 'Success'})
    except:
        return jsonify(data={}, status={'code': 500, 'message': 'Error getting resources'})

#delete route 
@pose.route('/<id>' ,  methods=['DELETE'])
def delete_pose(id):
    delete_query = models.Pose.delete().where(models.Pose.id == id)
    delete_query.execute()
    return jsonify( data={},message='Successfully delete pose with id {}'.format(id) , status={'code': 200 , 'message' : 'Success'})


#update route 
@pose.route('/<id>',methods=['PUT'])
def update_pose(id):
    payload= request.get_json()
    update_query = models.Pose.update(**payload).where(models.Pose.id == id)
    update_query.execute()

    update_pose= models.Pose.get_by_id(id)

    return jsonify(data=model_to_dict(update_pose), message='Successfully update pose with id {}'.format(id) , status={'code': 200 , 'message' : 'Success'} )

