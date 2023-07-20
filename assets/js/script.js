var schedules = $('#schedules');
for(var i = 9; i < 18; i++) {
    var schedule = $('<div>');
    schedule.attr('class','schedule');

    var time = $('<p>');
    time.text(i+'am');
    time.attr('class','time');
    schedule.append(time);

    var input = $('<input>');
    input.attr('class','text-box');
    schedule.append(input);
    
    var button = $('<button>');
    button.attr('class','save-button');
    button.text('save');

    schedule.append(button);

    schedules.append(schedule);
}