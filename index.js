process.title = 'MyWebServer';
var args = process.argv,
	port = args[2] || 8000,
	webServer = require('./server');

webServer.listen(port, function() {
  console.log('Server started at port ' + port);
  console.log('http://localhost:' + port);
  if (process.send) { process.send('online'); }
});





