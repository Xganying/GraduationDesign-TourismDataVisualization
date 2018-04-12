//创建各浏览器兼容的XMLHttpRequest对象
  function createXHR(){
      if(typeof XMLHttpRequest != "undefined" ){
          return new XMLHttpRequest();
      }else if(typeof ActiveXObject != "undefined"){
          if (typeof arguments.callee.activeXString != "string"){
              var versions = ["MSXML2.XMLHttp.6.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp" ];
              var len;
              for( var i=0; versions.length; i++){
                  try{
                      new ActiveXObject(versions[i]);
                      arguments.callee.activeXString=versions[i];
                      break;
                  }catch(e){
                      //跳过
                  }
              }
          }
          return new ActiveXObject(arguments.callee.activeXString);
      }else{
          throw new Error("No XHR object avablied！");
      }
  }
  //解决乱码问题
  function paramas(data){
      var arr = [];
      for(var i in arr){
          arr.push(encodeURIComponent(i) + '=' + encodeURIComponent(data[i]));
      }
      return arr.join('&');
  }
  //封装ajax
  function ajax(obj){
      var xhr = createXHR();
      obj.url = obj.url + '?rand' + Math.random();
      obj.data = paramas(obj.data);
      if(obj.method === 'get'){
          obj.url += obj.url.indexOf('?') == -1 ? '?' + obj.data : '&' + obj.data;
      }
      if(obj.async === true){
          xhr.onreadystatechange = function(){
              if (xhr.readyState == 4) {
                  callBack();
              }
          }
      }
      xhr.open(obj.method,obj.url,obj.async);
      if (obj.method === 'post') {
          xhr.setRequestHeader("Content-Type","application/x-wwww-form-urlencoded");
          xhr.send(obj.data);
      }else{
          xhr.send(null);
      }
      if(obj.async === false){
          callBack();
      }
      function callBack(){
          if (xhr.status == 200) {
              obj.success(xhr.responseText);
          }else{
              alert("Sorry,获取信息失败，错误代码为： "+xhr.status+"， 错误信息： "+xhr.statusText);
          }
      }
  }
