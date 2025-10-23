String.prototype.camelCase=function(){
  return this.split(' ')
             .filter(word => word.length > 0)
             .map(word => word[0].toUpperCase() + word.slice(1))
             .join('')
};