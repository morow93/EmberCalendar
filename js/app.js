Application = Ember.Application.create({
    ready: function(){
        //alert('Вы сделали это!');
    }
});

Application.Router.map(function () {
    this.resource('application/index', { path: '/' }, function () {   
        this.route('datecalendar');
  });
});