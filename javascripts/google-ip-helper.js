function ping(jq){
  var img = new Image();
  var ip = jq.text(); 
  //img.src = "http://"+ip+"/textinputassistant/tia.png"; 
  img.src='http://'+ip+"/images/srpr/logo11w.png";
  img.onload = function(){  
    jq.addClass('green');
  }
}

$(function(){
    $('#ping_btn').click(function(){
        $('#ping_btn').attr('value','Processing');
        $('td > a').each(function(i){
            var $this = $(this);
            var text = $this.text();
            var array = text.split("."); 
            if(array && array.length==4){
                ping($this);
            }
        });
    });
});