 
 /*****************  这里面的库是需要修改的   *********************/
 /**  1
   * mouseSlide(e,num) e event 
   * 鼠标滑动事件
   * 包括滑动离开进入等等
   */
  var div=document.getElementById('div1');//时间发生的载体
  //---------------3----------------------//
  function mouseSlide(e,num){//鼠标滑动时间
	var ev=e||window.event; //event 事件
	var target=ev.getTarget||ev.srcElement; //事件的目标
	var $div=target.nodeName.toLowerCase(); //时间目标的节点名转化为小写
	if($div=="div"&&num==0){
		div.style.width="0px";
		div.style.height="0px";
		div.style.transition="all 5s";
		};
	if($div=="div"&&num==1){
		div.style.width="200px";
		div.style.height="200px";
		div.style.transition="all 5s";
//		alert('动画完成');
		}
	//------------2------------------//
	};
	function over(){
		mouseSlide(event,0);
	};
	function out(){
		mouseSlide(event,1);
	};
	//-------------1----------------//
	EventUtil.addHanlder(div,'mouseover',over);
	EventUtil.addHanlder(div,'mouseout',out);
/*************************************************************/	
 /** 2
  * 编写程序实现去除数组重复元素
  * arr1 = [1,2,2,2,3,4]
  * 处理后是
  * arr2 = [1,2,3,4]
  */
	Array.prototype.strip=function(){
		if(this.length<2)return [this[0]];
		var arr=[];
		for(var i=0;i<this.length;i++){			
			arr.push(this.splice(i--,1));
			for(var j=0;j<this.length;j++){
				if(this[j]==arr[arr.length-1]){
					this.splice(j--,1);
				}
			}
		}
		return arr;
	}
	var arr1=[1,2,3,4,5,6,7,1,2,2,1,1,3,4,5];
	var arr2=arr1.strip();
	console.log(arr2);
/*************************************************************/

