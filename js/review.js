$(document).ready(function(){
	/*Start NAvBar*/
	$(".item").mouseenter(function(){
		$(this).css({
			"background":"#007bff",
			"borderRadius":"20px",
			"paddingRight":"5px",
			"paddingLeft":"5px",
			"color":"white",
		});
	});
	$(".item a").mouseenter(function(){
		$(this).css("color","#fff")
	});
	$(".item a").mouseleave(function(){
		$(this).css("color","#000")
	});
	$(".item").mouseleave(function(){
		$(this).css({
			"background":"transparent",
			"borderRadius":"0px",
			"paddingRight":"0px",
			"paddingLeft":"0px",
			"color":"black",
		});
	});
	/*End Navbar*/
	/*Start Experience the fredoom of cloud*/
	$(".img img").hover(function(){
		$(this).css("filter","grayscale(0%)")
	},function(){
		$(this).css("filter","grayscale(100%)")
	});
	/*End Experience the fredoom of cloud*/
	/*Start Thousands of business use Aliphia each day*/
	$('.Thousands div:nth-child(2)').hover(function(){
		$('Thousands div:nth-child(2) span').animate({
			"width" : "100%",
			"height" : "5px" ,
			"background" : "black"
			// "border-width":" 2px",
			// "border-bottom-color":"#053a76",
			// "border-bottom-style":"solid" ,
		},500);
	});
	/*End Thousands of business use Aliphia each day*/
});





























































/*Vue Code*/
/*Start The Software as a Service meant for Freelancers*/
// Vue.component('card-item',{
// 	template:`
// 			<div class="col-sm-12 col-md-3 bg-primary">
// 				<div class="card text-center pt-3" style="">
// 				  <div class="pt-3 mx-auto"><i :class="cardData.i"></i></div>
// 				  <div class="card-body">
// 				    <p class="card-text">{{cardData.p}}</p>
// 				  </div>
// 				</div>
// 			</div>`,
// 	props:{
// 		cardData:{type:Object,required:true}
// 	},
// });
// new Vue({
// 	el:'.app',
// 	data:{
// 		firstCard:{
// 			i: "fas fa-box-open" ,
// 			p:"Send SMS to your customers offering news,products and discounts in matter of clicks",
// 		},
// 	},
// });
/*Start The Software as a Service meant for Freelancers*/