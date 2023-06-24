// profile-pic js👇👇
$(document).ready(function () {
  $('#upload_btn').click(function () {
    $('input[name="fileToUpload"]').click();
  });
  $('input[name="fileToUpload"]').change(function () {
    $('#profilePic_form').submit();
  }); 
  // case_form modal js
  $('#case_form_btn').click(function () {
    $('#Case_Managementt').modal('hide');
  });
});



// Calender JS 👇👇
var eventsArray = [
  {
      title: 'event1',
      start: '2019-07-20'
  }
];
document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
      height: 300,
      plugins: ['dayGrid', 'interaction'],

      dateClick: function (info) {
          $('#event_date').val(info.dateStr);
          $('#event_name').val('');
          $('#addEvent').modal('show');
      },

      eventClick: function (info) {
          alert(info.event.title)
      },

      events: function (info, successCallback, failureCallback) {
          successCallback(eventsArray);
      }
  });

  calendar.render();
});

function saveEvent() {

  let event_name = $('#event_name').val();
  if (event_name != '') {
      let event_date = $('#event_date').val();
      $('#list_event_tb').append('<tr><td><P>' + event_name + '</P></td><td>' + event_date + '</td> <td><i class="fa fa-trash document-icon" aria-hidden="true"></i> </td></tr>');
      $('#addEvent').modal('hide');
  }

  /* eventsArray.push({
         date:event_date,
         title:event_name
       });
      */
}
// chat JS👇👇
$(document).ready(function () {
  let element = document.getElementById("textField");
  element.addEventListener("input", textFieldFunc);
  element.addEventListener("keydown", textFieldFunc);
  function textFieldFunc(event) {
    if (event.keyCode == 13 && !event.shiftKey) {
      event.preventDefault();
      submitForm(event);
      console.log("if");
      return;
    } else {
      this.style.height = "58px";
      this.style.height = this.scrollHeight + "px";
      console.log("else");
    }
  }
  function submitForm(event) {
    event.preventDefault();
    console.log("Form Submitted");
  }
});
// file-upload JS👇👇
$(document).ready(function () {
  $("#demo").FancyFileUpload({
    'accept' :['pdf','jpg','png','jpeg','doc','docx','mp4','AVI',''],
    params: {
      action: "fileuploader",
    },'added' :function(e, data) {
      
        },
        'startupload' :function(SubmitUpload, e, data){
             },
          
      
    maxfilesize: -1,
  });
  
});

  // Document Edit JS
  function editIt(id) {
    $('.edit_input').prop('readonly', true);
    $('.edit_input').css('border', "none");
    $('#edit_input_' + id).prop('readonly', false);

    $('#edit_input_' + id).css('border', "1px purple solid");
}