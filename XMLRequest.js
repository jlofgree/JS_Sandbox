// Used for users of IE 6 and under
var xmlHttp = createXmlHttpRequestObject();

function createXmlHttpRequestObject() {
	var xmlHttp;

	if(window.ActiveXObject) {
		try{
			xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
		} catch(e) {
			xmlHttp = false;
		}
	}else{
		try{
			xmlHttp = new HMLHttpRequest();
		} catch(e){
			xmlHttp = false;
		}
	}

	if(!xmlHttp)
		alert("Something is wrong... try downloading Google Chrome.");
	else
		return xmlHttp;
}

function process() {
	if(xmlHttp.readyState == 0 || xmlHttp.readyState == 4) {
		stuff = encodeURIComponent(document.getElementById("userInput").value);
		xmlHttp.open("GET", "XMLHttpRequest.php?stuff=" + stuff, true);
		xmlHttp.onreadystatechange = handleServerResponse;
		xmlHttp.send(null);
	} else {
		setTimeout('process()', 1000);
	}
}

function handleServerResponse(){
	if(xmlHttp.readyState==4){
		if(xmlHttp.status==200){
			xmlResponse = xmlHttp.responseXML;
			xmlDocumentElement = xmlResponse.documentElement;
			message = xmlDocumentElement.firstChild.data;
			document.getElementById("underInput").innerHTML = '<span style="color:blue">' + message + '</span>';
			setTimeout('process()', 1000);
		}else {
			alert("Something went wrong!");
		}
	}
}