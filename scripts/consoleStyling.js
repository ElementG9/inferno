module.exports = {
  style: function() {
    console.info = function(text) {
      console.log(`[Info] ${text}`.white);
    };
    console.warn = function(text) {
      console.log(`[Warn] ${text}`.yellow);
    };
    console.error = function(text) {
      console.log(`[Error] ${text}`.red);
    };
  }
};
