var schedules = $('#schedules');
var startTime = 9;
var endTime = 17;
var currentHour = dayjs().hour(14);

for(var i = startTime; i <= endTime; i++) {
    var schedule = $('<div>');
    schedule.attr('class','schedule');

    var time = $('<p>');
    var hour = dayjs().hour(i);
    time.text(hour.format('hha'));
    time.attr('class','time');
    schedule.append(time);

    var input = $('<input>');
    input.attr('class','text-box');
    input.attr('id','text-box' + i);
    
    if(currentHour.hour() > hour.hour())
        input.css('background-color','#bbb');
    else if(currentHour.hour() == hour.hour())
        input.css('background-color','#f66');
    else 
        input.css('background-color','#6f6');
    
    var lastWork = JSON.parse(localStorage.getItem(i));
    input.val(lastWork.work);

    schedule.append(input); 
    
    var button = $('<button>');
    button.attr('class','save-button');
    button.attr('id','save-button');
    button.text('save');
    button.on("click",saveSchedule);
    schedule.append(button);

    schedules.append(schedule);
}

function saveSchedule(event) {
    event.preventDefault();
    for(var i = startTime; i <= endTime; i++) {
        var hour = dayjs().hour(i).format('hha');
        var schedule = {
            time: hour,
            work: $('#text-box' + i).val()
          };
        localStorage.setItem(i, JSON.stringify(schedule));
        console.log($('#text-box' + i).val());
    }
  }
  
  