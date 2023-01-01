 
technologies=['Android','Apache Spark','App Development','Artificial Intelligence','ASP.NET MVC','Automation Anywhere',
'AWS','Big Data','Blockchain','Blue Prism','CCNA','CCNP','Cloud Computing','Cyber Security','Data Science','Data Structure','Deep Learning','DevOps',
'Digital Marketing','Full Stack Web Development','Gaming','Hadoop','Hibernate','IoT','Linux Admin','Machine Learning',
'Microsoft Admin','MySQL','Networking','Oracle','RPA','Salesforce','SAP','Selenium','SQL Server','Struts','Testing',
'Ui Technologies','UI UX','Unix/Linux','Web Development','Web Services','Word Press'];
LanguagesData=['C',
'C++',
'Java',
'Python',
'Php',
'Java Script',
'C#',
'Matlab',
'R',
'Kotlin',
'Flutter',
'HTML5,CSS',
'React JS',
'Angular',
'Groovy',
'Ruby',
'Type Scripiting',
'SQL',
'GOlang',
'Swift',
'Scala',
'Rust']

 var fullnameError=true;
 var emailError=true;
 var addressError=true;
 var phoneError=true;
 var genderError=true;
 var multipletechnologies;
 var multiplelanguages;

$(document).ready(function(){
    
var current_fs, next_fs, previous_fs; //fieldsets
var opacity;

// $(".next").click(function(){
    
//     current_fs = $(this).parent();
//     next_fs = $(this).parent().next();
    
//     //Add Class Active
//     $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
    
//     //show the next fieldset
//     next_fs.show(); 
//     //hide the current fieldset with style
//     current_fs.animate({opacity: 0}, {
//         step: function(now) {
//             // for making fielset appear animation
//             opacity = 1 - now;

//             current_fs.css({
//                 'display': 'none',
//                 'position': 'relative'
//             });
//             next_fs.css({'opacity': opacity});
//         }, 
//         duration: 600
//     });
// });

$(".previous").click(function(){
    
    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();
    
    //Remove class active
    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
    
    //show the previous fieldset
    previous_fs.show();

    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
        step: function(now) {
            // for making fielset appear animation
            opacity = 1 - now;

            current_fs.css({
                'display': 'none',
                'position': 'relative'
            });
            previous_fs.css({'opacity': opacity});
        }, 
        duration: 600
    });
});

$('.radio-group .radio').click(function(){
    $(this).parent().find('.radio').removeClass('selected');
    $(this).addClass('selected');
});

$(".submit").click(function(){
    return false;
})


//add here

$.each(technologies, function (index,value) {
                        $("[id$='technlogiesList']").append($("<option></option>").val(value).html(value));
            });


            $.each(LanguagesData, function (index,value) {
                        $("[id$='LanguagesList']").append($("<option></option>").val(value).html(value));
            });


            // Denotes total number of rows
            var rowIdx = 0;

            // jQuery button click event to add a row
            $('#addBtn').on('click', function () {

                // Adding a row inside the tbody.
                $('#Educationtbody').append(`<tr id="R${++rowIdx}">
			
            <td class="text-center">
               
                <select name="educationLevel" id="educationLevel${++rowIdx}" required class="form-control" onchange="EducationLevelChane(this);" >
                                        <option value="" selected>Choose Education Level</option>
                                        <option value="10th">10th Level</option>
                                        <option value="12th">12th Level</option>
                                        <option value="Bachelors">Bachelors</option>
                                        <option value="Others">Others</option>                                     
                                    </select>
				</td>
                <td class="text-center">
                    <input type="text" name="institutionName" id="institutionName${++rowIdx}" placeholder="Institution Name"/>
				</td>
                <td class="text-center">
                    <input type="number" name="yearofpassout" id="yearofpassout${++rowIdx}" min=1960  placeholder="Year Of Pass out"/>
				</td>
			<td class="text-center">
				<button class="btn btn-danger remove"
				type="button">Remove</button>
				</td>
			</tr>`);
            });

            // jQuery button click event to remove a row.
            $('#Educationtbody').on('click', '.remove', function () {

                // Removing the current row.
                $(this).closest('tr').remove();

            });

            //Employee Details
			 flag=0;

            $('#addEmployeeBtn').on('click', function () {
				// <<<<<<<<<<updated something here
				flag=1;

                // Adding a row inside the tbody.
                $('#Employeetbody').append(`<tr id="R${++rowIdx}">
    
    <td class="text-center">
        <input type="text" name="JobRole" placeholder="Ex: Analyst/Tester"/>
        </td>
        <td class="text-center">
            <input type="text" name="CompanyName" placeholder="Company Name"/>
        </td>
        <td class="text-center">
            <input type="text" name="experience" placeholder="Ex : 2 Years / 3.5 Years" />
        </td>
    <td class="text-center">
        <button class="btn btn-danger remove"
        type="button">Remove</button>
        </td>
    </tr>`);
            });

            $('#Employeetbody').on('click', '.remove', function () {

                // Removing the current row.
				// <<<<<<<<<<<updated something here
				// flag--
                $(this).closest('tr').remove();

            });

            multipletechnologies = new Choices('#technlogiesList', {
                removeItemButton: true,
                maxItemCount: 5,
				placeholder: true,
				placeholderValue:'Select upto 5 skills',
				classNames: {
					placeholder: 'choices__placeholder',
				},
                fuseOptions: {
                    includeScore:true,
                    ignoreLocation: true,                    
                    threshold: 0.0
                }

            });

            multiplelanguages = new Choices('#LanguagesList', {
                removeItemButton: true,

                maxItemCount: 5,

            });

            $("#LanguagesList").on('change', function () {
                $(".data").hide();
                let count = 0;
                jQuery.each($(this).val(), function (i, val) {

                    if (document.getElementById(val) == null) {
                        $("#rate").append(`
                <div class="row">
                <div class="col-md-2"><label style="float:left;">${val}</label></div>
                <div class="col-md-6"><div id="${val}" class="starrating risingstar d-flex justify-content-center flex-row-reverse">  
    <input type="radio" id="${val}5" name="${val}" value="5" /><label for="${val}5" title="5 star"></label>
    <input type="radio" id="${val}4" name="${val}" value="4" /><label for="${val}4" title="4 star"></label>
    <input type="radio" id="${val}3" name="${val}" value="3" /><label for="${val}3" title="3 star"></label>
    <input type="radio" id="${val}2" name="${val}" value="2" /><label for="${val}2" title="2 star"></label>
    <input type="radio" id="${val}1" name="${val}" value="1" /><label for="${val}1" title="1 star"></label>
</div></div>
</div>

`)
                    }

                })

            }).change;


 multiplelanguages.passedElement.element.addEventListener(
  'removeItem',
  function(event) {
      $("#rate").find(document.getElementById(event.detail.value)).parent().parent().remove();   
  },
  false,
);

//Save details

// Process contact form
$('#msform').submit(function(event) {
  event.preventDefault();

  var technologies=multipletechnologies.getValue(true);
  var languages=multiplelanguages.getValue(true);

  if(technologies==''){
	$("#technologycheck").show();
  }
  else
  $("#technologycheck").hide();

  if(languages==''){
	$("#languagecheck").show();
  }
else
$("#languagecheck").hide();

   var role=$("#Role").val();
   if(role.trim()==""){
	$("#rolecheck").show();
   }
   else
   $("#rolecheck").hide();

   var rating="";
   //starrating
   var uncheckedRecords=0;
   $("#rate .starrating").each(function(index){
	
	var checkedCount=$(this).find("input[type='radio']:checked").val();
	if(checkedCount==undefined){
		uncheckedRecords++;	
	}
	
});

if(uncheckedRecords>0)
$("#roleratingcheck").show();
else
$("#roleratingcheck").hide();

   if(technologies=="" || languages=="" ||role.trim()=="" || uncheckedRecords>0)
   return false;

  var educationalDetails="";
  var employeeDetails=""
    $("#Educationtbody tr").each(function(index){
        var currentRow=$(this);
   
    var t=currentRow.find("td:eq(1) input[type='text']")
        educationalDetails+=currentRow.find("td:eq(0) option:selected").text()=="Others"?currentRow.find("td:eq(0) input[type='text']").val():currentRow.find("td:eq(0) option:selected").text();
        educationalDetails+="  "+currentRow.find("td:eq(1) input[type='text']").val();
        educationalDetails+="  "+currentRow.find("td:eq(2) input[type='number']").val();
        educationalDetails+="\n";
       
   });

   $("#Employeetbody tr").each(function(index){
        var currentRow=$(this);
   
    var t=currentRow.find("td:eq(1) input[type='text']")

	// employeeDetails+=currentRow.find("td:eq(0) option:selected").text()=="Others"?currentRow.find("td:eq(0) input[type='text']").val():currentRow.find("td:eq(0) option:selected").text();
    employeeDetails+=currentRow.find("td:eq(0) input[type='text']").val();
    employeeDetails+="  "+currentRow.find("td:eq(1) input[type='text']").val();
    employeeDetails+="  "+currentRow.find("td:eq(2) input[type='text']").val();
    // employeeDetails+="  "+currentRow.find("td:eq(3) input[type='text']").val();
    employeeDetails+="\n";
       
   });


var rating="";
    $("#rate input[type='radio']:checked").each(function(index){
        var languageRating=$(this)[0].name+" {"+$(this).val()+"}, ";
        rating+=languageRating;
       
   });


 // $('#feedback').html('');
  setTimeout(function() {

    var data = {
		'entry.1977071454': $('#fullname').val(),
		'entry.91569215': $('#email').val(),
		'entry.1566467656': $("#gender option:selected").text(),
		'entry.1912693301': $("#address").val(),  
		'entry.978165539': $("#resumelink").val(), 
		'entry.907633042': $("#linkedinlink").val(), 
		'entry.359969347': $("#worksamples").val(), 
		'entry.106677360': $("#availabilitytime").val(), 
		'entry.126753539': $("#comments").val(), 
		'entry.458787144': educationalDetails, 
		'entry.21899404': employeeDetails, 
		'entry.56390345': technologies.join(', '), 
		'entry.1636364140': languages.join(', '), 
		'entry.2040337194': rating,
		'entry.692136958': $('#Role').val(),
		'entry.981456896': $('#phoneNumber').val(),
	  };

    // Validate form
    var formSuccess = true;
     if (formSuccess) {
      // Send request
      $.ajax({    
        url: 'https://docs.google.com/forms/d/e/1FAIpQLSfozZzlFbI4_qDqkFVo2RiWkAihyj0nkl1PHG1AJ3GZVefLkg/formResponse',
        type: 'POST',       
        dataType: "jsonp",
        data: data,
        success: function(jqXHR, textStatus, errorThrown) {
          console.log('Enter on success');
		 // shownextTab($(this));
         // $('#feedback').html('<label class="text-success">Message sent!</label>');
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.log('Enter on error');
         // $('#feedback').html('<label class="text-success">Message sent!</label>');
        }
      });
	  shownextTab($("#submit"));
    }
	

  }, 300);
});

ValidatePersonalInfo();
    
});

function EducationLevelChane(event) 
{
 if (event.value == 'Others') {
  $(event).closest("td").append('<input type="text" name="OtherEducation" placeholder="EducationLevel"/>');
            }
 else {
  $(event).closest("td").find('input').remove();
     }
 }

 function ValidatePersonalInfo(){
	
	//Validate fullname
	$("#fullname").blur(function () {
		let fullnameValue = $("#fullname").val();
    // let fullnameValue = "hello world";
		if (fullnameValue.trim().length == "") {
		 
		  fullnameError = true;
		 // return false;
		} else if (fullnameValue.trim().length < 3) {
		 
		  $("#namecheck").html("**Minimum length of name must be 3");		
		  fullnameError = true;
		  //return false;
		} else {
			$("#namecheck").hide();
		  fullnameError = false;
		}
	  });

	    // Validate Email

		$("#email").blur(function () {
			if ($("#email").val() == '') {
				emailError = true;					
			}			
			else{
				let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
				if (regex.test($("#email").val())) {				
					emailError = false;
					$("#emailcheck").hide();
				  } else {				
					$("#emailcheck").html("Invalid email id");
					emailError = true;
				  }				
			}
		  });

	 //Validate gender

	 $("#gender").change(function () {
		if ($("#gender option:selected").text() == '') {
			genderError = true;
			}
		else{
			$("#gendercheck").hide();
			genderError=false;
		}
	  });

	  //validate phone number

	  $('#phoneNumber').blur(function(e) {

		var a = $('#phoneNumber').val();
		// var filter = /^[0-9-+]+$/;
    var filter = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
		if (filter.test(a)) {
			$("#phnocheck").hide();
			phoneError = false;
		}
		else {
			
			$("#phnocheck").html("*Phone number is invalid");
			phoneError = true;
		}	
	 });

	
	 //validate address

	 $("#address").blur(function () {
		let addressValue = $("#address").val();
		if (addressValue.trim().length < 8) {
		  addressError = true;
		} else {
		  $("#addresscheck").hide();		
		  addressError = false;		 
		} 
	  });

	  //validate resumelink

	  $("#resumelink").blur(function () {
		let resumelinkValue = $("#resumelink").val();
		if (resumelinkValue.trim().length == "") {
		    $("#resumecheck").show();	
		} else {
		  $("#resumecheck").hide();		 	 
		} 
	  });

	  	  //validate role

			$("#Role").blur(function () {
				let roleValue = $("#Role").val();
				if (roleValue.trim().length == "") {
					$("#rolecheck").show();	
				} else {
				  $("#rolecheck").hide();		 	 
				} 
			  });

	  
	  $("#btnEmployeeDetails").click(function () {
		$("#emperrorcheck").hide();
		$("#educatioerrorcheck").hide();
       var iseducationDetailsvalid=false;
	   var isemployeeDetailsvalid=false;
	   var empErrCount=0;
	   var educationErrCount=0;
	   var educationrowCount = $('#Educationtbody tr').length;
	  

	    $("#Educationtbody tr").each(function(index){
			var currentRow=$(this);   
		    if(currentRow.find("td:eq(0) option:selected").val()==''){
				currentRow.find("td:eq(0)").find('select').css("border", "1px solid red");
				educationErrCount++;
			}
			else if(currentRow.find("td:eq(0) option:selected").val()=='Others'){
				if(currentRow.find("td:eq(0) input[type='text']").val()==''){
					currentRow.find("td:eq(0) input[type='text']").css("border", "1px solid red");
					educationErrCount++;
				}				
				else
				currentRow.find("td:eq(0) input[type='text']").removeAttr("style");
			}
			else{
				currentRow.find("td:eq(0)").find('select').removeAttr("style");
			}

			if(currentRow.find("td:eq(1) input[type='text']").val()==''){
				currentRow.find("td:eq(1) input[type='text']").css("border", "1px solid red");
				educationErrCount++;
			}
			else{
				currentRow.find("td:eq(1) input[type='text']").removeAttr("style");
			}

			if(currentRow.find("td:eq(2) input[type='number']").val()==''){
				currentRow.find("td:eq(2) input[type='number']").css("border", "1px solid red");
				educationErrCount++;
			}
			else{
				currentRow.find("td:eq(2) input[type='number']").removeAttr("style");
			}		
		   
	   });

	   if(educationrowCount==0 || educationErrCount>0)
	   {
         $("#educatioerrorcheck").show();
		 iseducationDetailsvalid=false;

	   }
	   else
	   iseducationDetailsvalid=true;

	   var emprowCount = $('#Employeetbody tr').length;

	   $("#Employeetbody tr").each(function(index){
        var currentRow=$(this);
   
	if(currentRow.find("td:eq(0) input[type='text']").val()==''){
		currentRow.find("td:eq(0) input[type='text']").css("border", "1px solid red");
		empErrCount++;
	}
	else{
		currentRow.find("td:eq(0) input[type='text']").removeAttr("style");
	}

	if(currentRow.find("td:eq(1) input[type='text']").val()==''){
		currentRow.find("td:eq(1) input[type='text']").css("border", "1px solid red");
		empErrCount++;
	}
	else{
		currentRow.find("td:eq(1) input[type='text']").removeAttr("style");
	}

	if(currentRow.find("td:eq(2) input[type='date']").val()==''){
		currentRow.find("td:eq(2) input[type='date']").css("border", "1px solid red");
		empErrCount++;
	}
	else{
		currentRow.find("td:eq(2) input[type='date']").removeAttr("style");
	}

	if(currentRow.find("td:eq(3) input[type='date']").val()==''){
		currentRow.find("td:eq(3) input[type='date']").css("border", "1px solid red");
		empErrCount++;
	}
	else{
		currentRow.find("td:eq(3) input[type='date']").removeAttr("style");
	}
       
   });

   if(empErrCount>0)
   {
	 $("#emperrorcheck").show();
	 isemployeeDetailsvalid=false;
   }
  //  else
//    if(flag==1 )
//    {
// 	$("#emperrorcheck").show();
// 	isemployeeDetailsvalid=false;
// 	flag=!flag;
//    }
   else{
	isemployeeDetailsvalid=true;

   }
   

   var resumelink=$("#resumelink").val().trim();
   if(resumelink==''){
    $("#resumecheck").show();
   }

if(iseducationDetailsvalid && isemployeeDetailsvalid && resumelink!='')
		shownextTab($(this));

	  });

	  $("#btnPersonalInfo").click(function () {
		
		$("#namecheck")[fullnameError ? 'show' : 'hide']();

		$("#gendercheck")[genderError ? 'show' : 'hide']();

		$("#emailcheck")[emailError ? 'show' : 'hide']();

		$("#phnocheck")[phoneError ? 'show' : 'hide']();

		$("#addresscheck")[addressError ? 'show' : 'hide']();

		
	
if(fullnameError || genderError || emailError||phoneError||addressError)
return false;
else {
	shownextTab($(this));
}
			
	  });

 }

 function shownextTab(event) {
	current_fs = $(event).parent();
    next_fs = $(event).parent().next();
    
    //Add Class Active
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
    
    //show the next fieldset
    next_fs.show(); 
	  //hide the current fieldset with style
	  current_fs.animate({opacity: 0}, {
        step: function(now) {
            // for making fielset appear animation
            opacity = 1 - now;

            current_fs.css({
                'display': 'none',
                'position': 'relative'
            });
            next_fs.css({'opacity': opacity});
        }, 
        duration: 600
    });
  }

function validateEmail(){
	
}