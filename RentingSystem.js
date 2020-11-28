var http = require('http');
var express = require('express');
var cors = require('cors');
var app = express();


app.use(cors());

http.createServer(function(request, response) {
	response.writeHead(200, {"Content-type": "text/plain"});
	response.end("Hello World\n");
}).listen(8081);

console.log("Server is running on localhost");

var listOfItems = [
	{
		itemId: 1,
		itemName: "Chair",
		rentingPrice: "5",
		manufacturingDate: "28/11/2020",
	}
]

function deleteItem(id) {
	let index = -1;
	for(var i = 0; i < listOfItems.length(); i++)
	{
		if(listOfItems.itemId == id)
		{
			index = i;
		}	
	}
	listOfItems.delete(index);
}

function adddItem(item)
{
	listOfItems.push({
		itemId: listOfItems.length + 1;
		itemName: item.itemName,
		rentingPrice: item.rentingPrice,
		manufacturingDate: item.manufacturingDate
	})
}

app.get('/getItems', function (req, res) {
   res.send(JSON.stringify(listOfItems));
})

app.post('/delteItem', function (req, res) {
   deleteItem(req.body.id);
   res.send();
})

app.post('/delteItem', function (req, res) {
   addItem(req.body);
   res.send();
})
