README.txt

HTML5-Video-Player-Dynamic-System for ADS - [Video Advertising Player]
----------------------------------------------------------------------------
Version 1.0 Alpha

---
Alpha NOTES  
Version 1 is based upon and an extension of VideoJS. 

Main features include:

	- CSS styling for centering video in page
	- Separation of .js files for easy access
	- Query String passing
	- Debug [ on | off] : Default - off
	- flash [ true | false ] : Default - false
	- vType [ Auto | (mp4, m4v, avi, ogv, etc) ] : Default - Auto
	- AutoPlay [ on | off ] Default - on

----------------------------------------------------------------------------

View [Spotify-Video.html] for the demo.  

This is an HTML5 video advertising player that is based upon the html5 <video> tag. The system allows for input from the query string to access a number of features. This also extends the standard <video> Tag to allow the passing of a specific video types into the query string to access a specific video.

	1. http://localhost/Spotify-Video.html?debug=on
	2. http://localhost/Spotify-Video.html?vType=m4v
	3. http://localhost/Spotify-Video.html?flash=true
	4. http://localhost/Spotify-Video.html?AutoPlay=off

Or any combination of the above values…

	5. http://localhost/Spotify-Video.html?debug=on&flash=true
	6. http://localhost/Spotify-Video.html?debug=on&vType=ogv&AutoPlay=off


Coming Next 
-----------
- Vide passing (pass in thru query string the video to be executed).

Changelog
---------

1.0.1

- Added README.txt

1.0.0 (2011-11-23)

- First released