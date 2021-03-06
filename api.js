// API Calls
function easyHTTP(){
    this.http = new XMLHttpRequest;
 }
 
 const URL = 'https://api-2adx9.ondigitalocean.app'
 
 // HTTP GET request
 easyHTTP.prototype.get = function(url, callback){
 
    this.http.open('GET', url, true);
 
    let self = this;
    this.http.onload = function() {
       if(self.http.status === 200){
          callback(JSON.parse(self.http.responseText));
       }
    }
 
    this.http.send();
 }
 
 // HTTP POST request
 easyHTTP.prototype.post = function(url, data, callback){
 
    this.http.open('POST', url, true)
 
    this.http.setRequestHeader('Content-type', 'application/json');
 
    let self = this;
    this.http.onload = function() {
       if(self.http.status === 200){
          callback(self.http.responseText);
       }
    }
       
    this.http.send(JSON.stringify(data))
 }
 
 // HTTP PUT request
 easyHTTP.prototype.put = function(url, data, callback){
 
    this.http.open('PUT', url, true)
 
    this.http.setRequestHeader('Content-type', 'application/json');
 
    let self = this;
    this.http.onload = function() {
       if(self.http.status === 200){
          callback(JSON.parse(self.http.responseText));
       }
    }
       
    this.http.send(JSON.stringify(data))
 }
 
 // HTTP DELETE request
 easyHTTP.prototype.delete = function(url, callback){
 
    this.http.open('DELETE', url, true);
 
    let self = this;
    this.http.onload = function() {
       if(self.http.status === 200){
          callback(JSON.parse(self.http.responseText));
       }
    }
 
    this.http.send();
 }
