(function(win, document){
	// 绑定事件兼容写法
	var addEvent = function(obj, type, fn) {
		if (obj.addEventListener)
			obj.addEventListener(type, fn, false);
		else if (obj.attachEvent) {
			obj["e" + type + fn] = fn;
			obj.attachEvent("on" + type, function() {
				obj["e" + type + fn]();
			});
		}
	};

	window.onload = function() {
		var doms = document.getElementsByClassName('itext');
		// 输入框获取焦点和失去焦点边框样式处理
		for (var i = 0; i < doms.length; i++) {
			var dom = doms[i];
			addEvent(dom, 'focus', function(e){
				var input = e.target;
				var itemBox = input.parentNode;
				itemBox.className = 'item item-bd mb20 item-focus';
			});
			addEvent(dom, 'blur', function(e){
				var input = e.target;
				var itemBox = input.parentNode;
				itemBox.className = 'item item-bd mb20';
			});
		};

		// 登录表单tab切换处理
		var tabs = document.getElementsByClassName('tab-item');
		var qrcodeBox = document.getElementsByClassName('qrcode-box')[0];
		var formBox = document.getElementsByClassName('form-box')[0];
		addEvent(tabs[0], 'click', function(e){
			tabs[0].className = 'tab-item active';
			tabs[1].className = 'tab-item';
			formBox.style.display = 'none';
			qrcodeBox.style.display = 'block';
		});
		addEvent(tabs[1], 'click', function(e){
			tabs[1].className = 'tab-item active';
			tabs[0].className = 'tab-item';
			formBox.style.display = 'block';
			qrcodeBox.style.display = 'none';
		});
	}
})(window, document);
