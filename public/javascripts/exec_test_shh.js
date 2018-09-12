//box-logs
var box_logs_shh = document.querySelector("#box_logs_shh");

//topics
var btn_topics = document.querySelector("#btn_topics");

//push
var btn_push = document.querySelector("#btn_push");

let input_topics;
let input_payload;


set_topics.innerText = "[topics]: ";

//topicsを設定
btn_topics.onclick = function() {
	input_topics = document.querySelector("#input_topics").value;
	set_topics.innerText = "[topics]: " + input_topics;

	//filter開始
	exec_filter();
}

//メッセージを送信
btn_push.onclick = function() {

	input_payload = document.querySelector("#input_payload").value;

	//push(メッセージ送信）
	var shh_post = web3.shh.post(
	{topics: [input_topics],
	payload: web3.fromAscii(input_payload),
	ttl: web3.fromDecimal("100")});
}



/* イベント監視　*/

function exec_filter() {
	var shh_message;
	var filter_shh = web3.shh.filter({topics: [input_topics]});

	filter_shh.watch(function(error,result){
		if (!error) {

			var shh_topics = filter_shh.options.topics;

			//shh_message = web3.toAscii(result.payload);

			//shh_message = change_code(result.payload);

			box_logs_shh.innerHTML += 
							"[timestamp]:" + new Date(result.sent * 1000) + "<br>"
							+ "[topics]: " + web3.toAscii(parseInt(shh_topics).toString(16)) + "<br>"
							+ "[payload]: " + web3.toAscii(result.payload) + "<br>"
							+ "[payload2]: " + result.payload + "<br>"
							+ "[payload3]: " + String.fromCharCode(result.payload) + "<br><br>";
		}
	});
}






	














