checkHeights = function(){
this.value = 0;
this.count = 0;
};   
checkHeights.prototype.checkHeight = function(v1,v2){
    if(v1 < v2){
        this.value = v2;
    }
    
    else{
        this.value = v1;
    }
};

lettersplit = function(){
    var array = [];
    this.string = 'abcdefghijklmnopqrstuvwxyz';
};
lettersplit.prototype.stringsplit = function(string){
    this.array = string.split('');

}
lettersplit.prototype.findlength = function(string){
    this.array = string.split('');
    this.count = this.array.length;

}
