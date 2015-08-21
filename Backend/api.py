from flask import Flask, request
from flask_restful import Resource, Api

from monitor import Monitor
from posts_manager import PostsManager

app = Flask(__name__)
api = Api(app)

class Posts_Meta(Resource):
    def get(self):
        try:
            return PostsManager.get_all_posts()
        except Exception, e:
            return {'ERROR': str(e)}

class Post_Data(Resource):
    def get(self, post_id):
        try:
            return PostsManager.get_post(post_id)
        except Exception, e:
            return {'ERROR': str(e)}

 
api.add_resource(Post_Data, '/post/<string:post_id>')
api.add_resource(Posts_Meta, '/posts')

if __name__ == '__main__':
    PostsManager.init()
    Monitor.update()
    app.run()