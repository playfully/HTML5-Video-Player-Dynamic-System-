var spotVid = {};

spotVid.queryString = {
	//Start with defaults
	params: {
		debug:'off',
		vType:'Auto',
		dl:'off',
		AutoPlay:'on',
		flash: 'false'
	},
	
	//Possibly override defaults
	parse: function() {
		var query = window.location.search.substring(1),
			params = query.split('&'),
			$this = spotVid.queryString,
			i;
		
		for (i=0; i < params.length; i += 1) {
			var kv = params[i].split('=');			
			$this.params[kv[0]] = kv[1];
		}
	}
	
};

spotVid.debug = {
	
	printSettings: function() {
		var statusBox = document.getElementById('statusBox'),
			params = spotVid.queryString.params,
			status = [];

		status.push('Debug: '+params.debug);
		status.push('Video Type: '+params.vType);
		status.push('Download: '+params.dl);
		status.push('AutoPlay: '+params.AutoPlay);
		status.push('Flash: '+params.flash);
		
		statusBox.innerHTML = status.join('<br />');
	}
};

spotVid.source = {

	//Hard-coding video ref for now, but we could make this dynamic
	//and pass the video as a parameter if need be
	base: 'http://centralconnect.me/Spotify-Video/Immortals_H264',

	supportedTypes: {
		mp4: "video/mp4; 'avc1.42E01E, mp4a.40.2'",
		m4v: "video/m4v;",
		ogv: "video/ogg; 'theora, vorbis'",
		webm: "video/webm; 'vp8, vorbis'",
		avi: "video/avi;",
		wmv: "video/wmv;",
		mov: "video/mov;"
	},
	
	generateSourceElement: function(vType) {
		var $this = spotVid.source,
			source = document.createElement('source'),
			src = document.createAttribute('src'),
			type = document.createAttribute('type');
	
		src.nodeValue = $this.base+'.'+vType;
		type.nodeValue = $this.supportedTypes[vType];
	
		source.attributes.setNamedItem(src);
		source.attributes.setNamedItem(type);
	
		return source;
	},
	
	printDownloads: function() {
		var $this = spotVid.source,
			downloadsHolder = document.getElementById('downloads'),
			introP = document.createElement('p'),
			introText = document.createTextNode('Download links: '),
			downloadsLinks = document.createElement('ul'),
			types = $this.supportedTypes;
	
		introP.appendChild(introText);
		downloadsHolder.appendChild(introP);
		for (var i in types) {
			var link = document.createElement('a'),
				href = document.createAttribute('href'),
				desc = document.createTextNode(i),
				li = document.createElement('li');
			
			href.nodeValue = $this.base+'.'+i;
			link.attributes.setNamedItem(href);
			link.appendChild(desc);
			
			li.appendChild(link);
			downloadsLinks.appendChild(li);
		}
		downloadsHolder.appendChild(downloadsLinks);
		
	},
		
	set: function(vType) {
		var $this = spotVid.source,
			vidHolder = document.getElementById('videos');
		
		if (typeof vType === 'undefined' || vType === 'Auto') {
			for (var i in $this.supportedTypes) {
				vidHolder.appendChild($this.generateSourceElement(i));
			}
		} else {
			vidHolder.appendChild($this.generateSourceElement(vType));
		}
	}
};

spotVid.flashFallback = function(){
	var flashVars = {
			image:'Spotify-Poster.jpg',
			autostart:true,
			file:escape('http://centralconnect.me/Spotify-Video/Immortals_H264.flv')
		},
		params = {
			allowfullscreen:true,
			allowscriptaccess:'always'
		};
	//Note that we would need our own flash player fallback here. Using the Video for everybody stock one for now.
	//Won't actually play since I'm not passing it a video to play, but this is just a stub anyway...
	swfobject.embedSWF(
		'player.swf', 
		'mediaPlayer', 
		'650', 
		'300', 
		'9.0.0',
		null,
		flashVars,
		params
	);

};
