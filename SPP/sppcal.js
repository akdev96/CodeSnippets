$(document).ready(function () { 
     $('#popUpWindow').on('shown.bs.modal', function (e) {
            var items = "<option value='0'>Select</option>";  
            $('#myRange').html(items); 
      });
});

//<script>
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var calculated = document.getElementById("calculated");
  
output.innerHTML = slider.value;
slider.oninput = function(){
  output.innerHTML = this.value;
  calculated.innerHTML = bill(slider.value);
  changeColor(slider.value);
  changeFont(slider.value);
//$("input").css({"background-color": "yellow", "font-size": "200%"});
  }
function changeColor(slidr){
  $('input[type="range"]').change(function () {
    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
    if(slidr<500){
    $(this).css('background-image',
                '-webkit-gradient(linear, left top, right top, '
                + 'color-stop(' + val + ', #1fdd00), '
                + 'color-stop(' + val + ', #C5C5C5)'
                + ')'
                );
    $('span[id="demo"]').css({"color":"1fdd00"});
    $('span[id="calculated"]').css({"color":"1fdd00"});
    }
    else if(slidr<1000){
      $(this).css('background-image',
                '-webkit-gradient(linear, left top, right top, '
                + 'color-stop(' + val + ', #13d2a4), '
                + 'color-stop(' + val + ', #C5C5C5)'
                + ')'
                );
      $('span[id="demo"]').css({"color":"#13d2a4"});
    $('span[id="calculated"]').css({"color":"#13d2a4"});
    }
    else if(slidr<1500){
      $(this).css('background-image',
                '-webkit-gradient(linear, left top, right top, '
                + 'color-stop(' + val + ', #f50c52), '
                + 'color-stop(' + val + ', #C5C5C5)'
                + ')'
                );
      $('span[id="demo"]').css({"color":"#f50c52"});
    $('span[id="calculated"]').css({"color":"#f50c52"});
    }
});
}

function bill(units) {
		var unitCharge = [7.85,10,27.75,32,45];
		var fixCharge = [0,90,480,480,540];

		var unitChargePrice = 0;
		var total = 0;

		switch(true) {
			case(units < 60):
				unitChargePrice = unitCharge[0]*units;
				total = unitChargePrice + fixCharge[0];
				break;

			case (units < 90):
				unitChargePrice = unitCharge[0]*60;
				unitChargePrice = unitChargePrice + unitCharge[1]*(units - 60);
				total = unitChargePrice + fixCharge[1];
				break;

			case (units < 120):
				unitChargePrice = unitCharge[0]*60;
				unitChargePrice = unitChargePrice+unitCharge[1]*30;
				unitChargePrice = unitChargePrice + unitCharge[2]*(units - 90);
				total = unitChargePrice + fixCharge[2];
				break;

			case (units < 180):
				unitChargePrice = unitCharge[0]*60;
				unitChargePrice = unitChargePrice+unitCharge[1]*30;
				unitChargePrice = unitChargePrice+unitCharge[2]*30;
				unitChargePrice = unitChargePrice + unitCharge[3]*(units - 120);
				total = unitChargePrice + fixCharge[3];
				break;

			case (units >= 180):
				unitChargePrice = unitCharge[0]*60;
				unitChargePrice = unitChargePrice+unitCharge[1]*30;
				unitChargePrice = unitChargePrice+unitCharge[2]*30;
				unitChargePrice = unitChargePrice+unitCharge[3]*60;
				unitChargePrice = unitChargePrice + unitCharge[4]*(units - 180);
				total = unitChargePrice + fixCharge[4];
				break;

			default:
				break;	
		}
    return total.toFixed(2);
	}
//</script>
