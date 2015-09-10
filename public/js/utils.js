String.prototype.hashCode = function(){

    hash = 0;

    if (this.length == 0) return hash;
    for (var i = 0; i < this.length; i++) {
        char = this.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
};

function currency(amount) {
    return( "£" + amount.toFixed(2));
}