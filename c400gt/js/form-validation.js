
$('#btnSubmit').click(function() {
    var Contact_Name = $('input[name="Contact_Name"]');
    var Contact_Name_val = $.trim(Contact_Name.val());
    if (Contact_Name_val == '') {
        alert('Vui lòng nhập Họ và tên');
        Contact_Name.val(Contact_Name_val);
        Contact_Name.focus();
        return false;
    }
    
    var Contact_Mobile = $('input[name="Contact_Mobile"]');
    var Contact_Mobile_val = $.trim(Contact_Mobile.val());
    if (!Contact_Mobile_val) {
        alert('Vui lòng  nhập số điện thoại');
        Contact_Mobile.val(Contact_Mobile_val);
        Contact_Mobile.focus();
        return false;
    } else if (!$.isNumeric(Contact_Mobile_val)) {
        alert('Điện thoại chỉ được phép nhập số');
        Contact_Mobile.val(Contact_Mobile_val);
        Contact_Mobile.focus();
        return false;
    }
    
    
    
    var e = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var Contact_Email = $('input[name="Contact_Email"]');
    var Contact_Email_val = $.trim(Contact_Email.val());
    if (!Contact_Email_val) {
        alert('Vui lòng  nhập email');
        Contact_Email.val(Contact_Email_val);
        Contact_Email.focus();
        return false;
    } else if (!e.test(Contact_Email_val)) {
        alert('Email không đúng định dạng');
        Contact_Email.val(Contact_Email_val);
        Contact_Email.focus();
        return false
    }
    
	
	
   
    
    var Contact_CarRide = $('select[name="Contact_CarRide"]');
    var Contact_CarRide_val = $.trim(Contact_CarRide.val());
    
    var Contact_Location = $('select[name="Contact_Location"]');
    var Contact_Location_val = $.trim(Contact_Location.val());
    
	
	// var Contact_A2 = $('input[name=Contact_A2]').is(":checked");
	// if (!Contact_A2) {
		// alert('Bạn phải có bằng lái A2 hợp lệ');
		// return false;
	// } 
	var Contact_A2_val = 1;
	
	var Contact_IF = $('input[name=Contact_IF]').is(":checked");
	if (!Contact_IF) {
		alert('Bạn phải đồng ý với điều kiện lái thử');
		return false;
	} 
	var Contact_IF_val = 1;
    
    var Contact_Source_val = 'Landing Page BMW C 400 X & C 400 GT';
    
    $('.loading-screen').addClass('active');
   
    
  
    
    $.post("index.php", {
        'Contact_Name_val': Contact_Name_val,
        'Contact_Email_val': Contact_Email_val,
        'Contact_Mobile_val': Contact_Mobile_val,
        'Contact_Location_val': Contact_Location_val,
        'Contact_CarRide_val': Contact_CarRide_val,
        'Contact_Source_val': Contact_Source_val,
        'Contact_IF_val': Contact_IF_val,
        'Contact_A2_val': Contact_A2_val,
        }, 
        function(data) {
            //alert(data);exit;
            if (data == 1) {
				
                //alert('Chúc mừng bạn đã đăng ký lái thử thành công. BMW Motorrad Việt Nam sẽ liên hệ với bạn trong thời gian sớm nhất !');
				document.location.href = 'dang-ky-thanh-cong.html';
                $('.loading-screen').removeClass('active');
                $('input[name="Contact_Name"]').val('');
                $('input[name="Contact_Email"]').val('');
                $('input[name="Contact_Mobile"]').val('');
                $('select[name="Contact_Location"]').val('');
                $('select[name="Contact_CarRide"]').val('');
                $("#btnSubmit").attr("disabled", "disabled");
                $("#btnSubmit").css('background','#939598');
				 $('input:checkbox').each(function () {
					$(this).prop('checked', false);
				});
				var Contact_A2_val = '';
				var Contact_IF_val = '';
                return false;
            }else if (data == 0) {
                alert('Có lỗi xảy ra vui lòng kiểm tra lại !');
                return false;
            }
        });
    return false;
});



