import markdown

class Parser(object):

	@staticmethod
	def parse(filename):
		result = Parser.__parse(filename)
		return result

	@staticmethod
	def __parse(filename):
		''' Parse the post '''
		with open(filename, 'r') as file:
			data = file.read()

		data_parts = data.split('***')
		meta, body = data_parts[0], '\n'.join(data_parts[1:])
		result = dict()
		Parser.parse_meta(result, meta)
		result['body'] = markdown.markdown(body)
		return result

	@staticmethod
	def parse_meta(result, meta):
		''' Parse the meta tags at the start of each post '''
		for metadata in meta.split('\n'):
			metadata = metadata.split(': ')
			metatag, metacontent = metadata[0], ': '.join(metadata[1:])
			if metatag == '':
				continue
			result[metatag] = metacontent
