function Phone (phoneNumber) {
  this._phoneNumber = phoneNumber;

}

Phone.prototype.callPhone = function(phoneNumber) {
  return this._phoneNumber + " calls " + phoneNumber;


}

module.exports = Phone;






