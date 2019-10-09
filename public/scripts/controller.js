// var broker = true;
// var dt = new Date();
// var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();

// $(document).ready(function(){
// 		$("#btnConnect").click(function(event){
//       event.preventDefault();
// 				client = mqtt.connect($("#address").val())
// 				client.on("connect", function(){
// 						$("#status").text("Successfully connected!");
// 				}) 
// 				client.on("message", function (topic, payload) {
// 					$("table").append("<tr id='tr'><td>" + topic + "</td><td>" + payload +'</td><td>' + time + "</td></tr>")
// 				})
// 		})
// })

// $(document).ready(function(){
// 	$("#btnDisconnect").click(function(event){
// 	event.preventDefault();
// 		client.end();
// 		$("#status").text("Successfully Disconnected!");
// 		$("table").find("tr:gt(0)").remove();
// 	})
// })

// $(document).ready(function(){
// 	$("#btnSubscribe").click(function(event){
//     event.preventDefault();
// 			client.subscribe($("#Subscribe-topic").val());
// 			$("#span").text("subscribed!");
// 			client.on("message", function (topic, payload) {
// 				(topic , payload)
// 			broker = true;
			
// 	})
// })
// })
// $(document).ready(function(){
// 		$("#btnPublish").click(function(event){
//       event.preventDefault();
// 			client.publish($("#Publish-topic").val(),$("#Publish-payload").val());
// 			console.log( $("Publish-topic").val()+ " : " + $("#Publish-payload").val() + " " + time);
// 		})
// })


// $(document).ready(function(){
// 	$("#btnUnsubscribe").click(function(event){
//     event.preventDefault();
// 		messaged = false;
// 		broker = false;
// 		client.unsubscribe($("#Subscribe-topic").val());
// 		$("#status").text("unsubscribed!");
// 	})
// })

$(document).ready(function () {
	var text = "The fan is turned ";
	var date = new Date();
	var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
	client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt");
	client.on("connect", function () {console.log("Connected Successfully.")})
	$('button').on('click', function (e) {
		$('p').html(text + $(this).val())
		event.preventDefault();
		client.publish("lalaine/fan/status", $('p').html() + time);
		console.log("Topic: lalaine/fan/status", "Payload: " + $('p').html() +" "+ time);
	})
})