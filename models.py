import os
from peewee import *
import datetime
from playhouse.db_url import connect




if 'ON_HEROKU' in os.environ: 
    DATABASE = connect(os.environ.get('DATABASE_URL')) 
else:
    DATABASE = SqliteDatabase('yoga.sqlite')


class Yoga(Model):
    name = CharField()
    img = CharField()
    created_at = DateTimeField(default=datetime.datetime.now)

    class Meta:
        database = DATABASE

class Pose(Model):
    yoga= ForeignKeyField(Yoga , backref='Poses')
    name = CharField()
    description = CharField(max_length= 2000)
    benefits = CharField(max_length=2000)
    video = CharField(max_length=600)

    class Meta:
        database = DATABASE



def initialize():
    DATABASE.connect()
    DATABASE.create_tables([Yoga , Pose], safe=True)
    print("TABLES created")
    DATABASE.close()