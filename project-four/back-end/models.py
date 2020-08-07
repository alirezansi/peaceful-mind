from peewee import *
import datetime



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
    description = CharField()
    benefits = CharField()
    video = CharField()

    class Meta:
        database = DATABASE






def initialize():
    DATABASE.connect()
    DATABASE.create_tables([Yoga , Pose], safe=True)
    print("TABLES created")
    DATABASE.close()