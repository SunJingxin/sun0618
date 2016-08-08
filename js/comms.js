//ajax
function  createXHR(){
   	if( typeof XMLHttpRequest!="undefined"){
   	 return new XMLHttpRequest();  	
   	}   
   	//IE
   else if(typeof arguments.callee.activeXString!="string"){
   		//MSXML2是微软
   		var versions = ["MSXML2.XMLHttp.6.0","MSXML2.XMLHttp.3.0",
   		     "MSXML2.XMLHttp"],i,len;
   		for(i=0;len=versions.length;i++){
   			
   			try{
   				new ActiveXObject(versions[i]);
   			    arguments.callee.activeXString=versions[i]
   			    break;
   			}catch(ex){
   				
   			}	
   		}	
   		return new ActiveXObject(arguments.callee.activeXString)
   	}else {
   		throw new Error("没有异步对象");
   	}
}
//事件
//事件工具对象
			var EventUtil={
				addHanlder:function(element,type,handle){//添加监听事件
					if(element.addEventListener){
					element.addEventListener(type,handle,false);}else if(element.attachEvent){
						element.attachEvent("on"+type,handle);
					}else{
						element["on"+type]=handle;
					}
				},
				removeHandler:function(element,type,handle){//移除监听事件
					if(element.removeEventListener){
					element.removeEventListener(type,handle,false);
					}else if(element.detachEvent){
						element.detachEvent("on"+type,handle);
					}else{
						element["on"+type]=null;
					}
				},
				getEvent:function(event){//取到事件对象
				return event ?event:window.event;//当值不是空或者undefined时直接使用event可以进行
				},
				getTarget:function(event){//拿到事件源
					return event.target||event.srcElement;
				},
				stopPropagation:function(event){//关闭冒泡
					if(event.stopPropagation){
						event.stopPropagation();
					}else{
						event.cancelBubble=true;
					}
				}
			}