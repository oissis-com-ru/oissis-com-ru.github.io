jQuery(document).ready(function($) {
  // Flip a Coin
  function flipCoin(e) {
    e.preventDefault();
  
    
    // Set up variables
    var flipTime = 1500; // Flip the coin for 1.5 seconds.
    var $theCoin = $('#coin');
    var $flipTrigger = $('.js-flip-coin');
    var heads = 'орел';
    var tails = 'решка';
    var flipping = 'is-flipping';
    
    // Result Text
    function theResult(string) {
      var $result = $('.result');
      $result.text(string);
    }
    
    // Button Text
    function btnText(string) {
      $flipTrigger.text(string);
    }
    
    theResult('Крутимся...');
    btnText('Крутимся...');
    
    // Do this if the coin isn't currently flipping
    if(!$flipTrigger.hasClass(flipping)) {
      
      // The coin has landed
      function coinLanded(result) {
        $theCoin.addClass(result);
        $theCoin.removeClass(flipping);
        $flipTrigger.removeClass(flipping);
      }
      
      // The coin is flipping, change the button
      $flipTrigger.addClass(flipping);
      
      // The results are in...
      function coinResult() {
        
        // 50:50 chance
        if(Math.random() >= 0.5) {
          // Heads
          coinLanded(heads);
          theResult('Выпал Орел!');
          btnText('Флип коин');
        } else {
          // Tails
          coinLanded(tails);
          theResult('Выпала Решка!');
          btnText('Флип коин');
        }
      }
      
      // Start Over
      if($theCoin.hasClass(heads) || $theCoin.hasClass(tails)) {
        $theCoin.removeClass(heads).removeClass(tails);
      }
      
      // Flipping the Coin...
      $theCoin.addClass(flipping);
      setTimeout(coinResult, flipTime);
    }
  }
    
  // Let's flip it!
  $('.js-flip-coin').on('click', flipCoin);
  $('#coin').on('click', flipCoin);
}(jQuery));
