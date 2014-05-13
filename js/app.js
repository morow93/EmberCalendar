Application = Ember.Application.create({
    ready: function(){
        //alert('Проверка...');
    }
});

Application.Router.map(function () {
    this.route('yearmonthday', { path:
    "year/:year/month/:month/day/:day"});
});

Application.IndexRoute = Em.Route.extend({
    redirect: function (model) {
        
        var current = Ember.Object.create({
            year: new Date().getFullYear(),
            month: new Date().getMonth() + 1,
            day: new Date().getDate()
        });

        this.transitionTo('yearmonthday', current);
    }
});