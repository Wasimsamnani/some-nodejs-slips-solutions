const http=require('http');
const fs=require('fs');
var server=http.createServer(function(req,res)
{
	fs.readFile("website.html","utf-8",(err,data)=>{
	if(err)throw err;
	res.write(data);
	res.end();
	});
	
}).listen(5000,()=>console.log("server sreated sucessfully"))