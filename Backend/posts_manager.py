import os
import json

class PostsManager(object):

	path = r'/Users/OzTamir/Desktop/Blog/Backend/storage'
	post_count = 0
	posts = {}

	@staticmethod
	def init():
		index_path = os.sep.join([PostsManager.path, 'index.json'])
		try:
			with open(index_path, 'r') as index_file:
				PostsManager.posts = json.loads(index_file.read())
		except:
			PostsManager.posts = {}
			PostsManager.save_to_file()

	@staticmethod
	def save_to_file():
		index_path = os.sep.join([PostsManager.path, 'index.json'])
		new_data = json.dumps(PostsManager.posts)
		with open(index_path, 'w') as index_file:
			index_file.write(new_data)

	@staticmethod
	def new_post(json_file):
		body = json_file.pop('body', 'ERROR. PLEASE REPORT TO THE ADMIN.')
		new_file = os.sep.join([PostsManager.path, str(PostsManager.post_count)])
		with open(new_file, 'w') as file:
			file.write(body)
		json_file['id'] = str(PostsManager.post_count)
		PostsManager.posts[str(PostsManager.post_count)] = json_file
		PostsManager.post_count += 1

	@staticmethod
	def get_post(post_id):
		json_file = PostsManager.posts[str(post_id)]
		body_path = os.sep.join([PostsManager.path, json_file['id']])
		with open(body_path, 'r') as file:
			json_file['body'] = file.read()
		return json_file

	@staticmethod
	def get_all_posts():
		return PostsManager.posts.values()



