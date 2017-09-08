function doFunction() {
 var string = document.getElementById('name').value;
var shuffle = '';
string = string.split('');
while (string.length > 0) {
 shuffle += string.splice(string.length * Math.random() << 0, 1);
}
 document.getElementById('name').value = shuffle;
}
