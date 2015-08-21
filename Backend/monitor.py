import os
from time import sleep
from parser import Parser
from posts_manager import PostsManager

class Monitor(object):

	path = r'/Users/OzTamir/Desktop/Blog/Backend/Posts'
	files = []

	@staticmethod
	def update():
		''' Go over the files in the directory and check for changes '''
		for filename in os.listdir(Monitor.path):
			if filename in Monitor.files:
				continue
			else:
				Monitor.new_file(filename)
		print Monitor.files

	@staticmethod
	def new_file(filename):
		if filename[0] == '.':
			return
		Monitor.files.append(filename)
		path = os.sep.join([Monitor.path, filename])
		parsed = Parser.parse(path)
		PostsManager.new_post(parsed)
		PostsManager.save_to_file()


def main():
	PostsManager.init()
	for i in xrange(1):
		Monitor.update()
		#sleep(5)

if __name__ == '__main__':
	main()