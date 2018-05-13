
var tmp = []
module.exports = {
   Add: function listStorage(data){
    tmp.push(data)
    return tmp;
  },
    organize: function sort(){
      tmp.sort(function(a, b){
        return a - b;
      });
      return tmp;
    }
}



// console.log(module.exports.Add())
// console.log(module.exports.organize())




