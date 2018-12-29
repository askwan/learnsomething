(function(){
  function Tool(){

  }
  Tool.prototype = {
    calcDistance:function(from,to){
      let formateFrom = {};
      formateFrom.lat = Rad(form.lat);
      formateFrom.lng = Rad(from.lng);
      let formateTo = {};
      formateTo.lat = Rad(to.lat);
      formateTo.lng = Rad(to.lng);
      let a = formateFrom.lat - formateTo.lat;
      let b = formateFrom.lng - formateTo.lng;
      let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a/2),2) + Math.cos(radLat1)*Math.cos(radLat2)*Math.pow(Math.sin(b/2),2)));
      s = s*6378.137
    }
  };

  function Rad(d){
    return d*Math.PI/180.0
  }

  window._tool = new Tool();
})()