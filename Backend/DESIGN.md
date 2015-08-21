1) Write a parser - takes a file with markdown, title and so on -CONVERT-> JSON file per the format
2)Monitor A Dropbox folder for changes, once a new file is found try to parse it
	- Option One: the parser detects that the file isn't finished and quits
3)the parsing is sucsessful. The monitor will read the json file and add it's data to a DATA STRUCTURE
4)The API will serve the DATA STRUCTURE content
5)Upon a request for a specific post, the API will get the filename from the DATA STRUCTURE and will return the JSON file