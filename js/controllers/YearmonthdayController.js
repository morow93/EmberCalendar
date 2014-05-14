Application.YearmonthdayController = Ember.ObjectController.extend({
    
    getStringMonth: function() {
        var twelveMonths = ["ничего",
                            "январь",
                            "февраль",
                            "март",
                            "апрель",
                            "май",
                            "июнь",
                            "июль",
                            "август",
                            "сентябрь",
                            "октябрь",
                            "ноябрь",
                            "декабрь"
                           ];
        return twelveMonths[(Number)(this.get('month'))];
    }.property('month'),
    
    transitionModel: function(){
            var model = Ember.Object.create({
                year: this.get('year'),
                month: this.get('month'),
                day: this.get('day')
            });
            return model;
    }.property('year','month','day'),
      
    didChange: function() {
        //console.log('change properties');
    }.observes('year', 'month', 'day'),
                       
    actions: {
          
      prevYear: function () {
        if (this.get('year') > 0)
            this.set('year', (Number)(this.get('year')) - 1);
    
        this.transitionToRoute('yearmonthday', this.get('transitionModel'));
      },
      
      nextYear: function () {
        this.set('year', (Number)(this.get('year')) + 1);
          
        this.transitionToRoute('yearmonthday', this.get('transitionModel'));
      },
          
      nextMonth: function() {
        if (this.get('month') >= 12){
            this.set('month', 1);
            this.send('nextYear');
        }
        else{
            this.set('month', (Number)(this.get('month')) + 1);        
            this.transitionToRoute('yearmonthday', this.get('transitionModel'));
        }
      },
      prevMonth: function() {
        if (this.get('month') <= 1){
            this.set('month', 12);
            this.send('prevYear');
        }
        else{
            this.set('month', (Number)(this.get('month')) - 1);        
            this.transitionToRoute('yearmonthday', this.get('transitionModel'));
        }
      }
    }
});