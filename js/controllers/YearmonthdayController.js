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
      
    didChange: function() {
        this.transitionToRoute('yearmonthday',this.get('year'), this.get('month'), this.get('day'));
    }.observes('year', 'month', 'day'),
   
   getMonth: function() {
          
        var quantityOfDayInEachMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (this.get('year') % 4 === 0) ++quantityOfDayInEachMonth[1];        
        
        var totalDays = quantityOfDayInEachMonth[this.get('month') - 1];
        var eachDay = 1;
          
        var dayOfWeek = new Date(this.get('year'), (Number)(this.get('month')) - 1, 1).getDay();
        dayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

        var mas = [];
        mas[0] = [];
        for (var k = 0; k < 7; ++k){
            if (k >= (dayOfWeek - 1)){
                mas[0][k] = eachDay++;
                
            }
//            else{
//                mas[0][k]="*";
//            }
        }    
        var quantityOfArrays = Math.ceil((totalDays - eachDay)/7);
        for(var i = 1; i < quantityOfArrays + 1; ++i){
            mas[i] = [];
            for(var j = 0; j < 7; ++j){
                if (eachDay <= totalDays){
                    mas[i][j] = eachDay++;
                }
//                else
//                    mas[i][j] = "*";
            }
        }
          
        return mas;
      }.property('month', 'year'),
                       
    actions: {
          
      prevYear: function () {
        if (this.get('year') > 0)
            this.set('year', (Number)(this.get('year')) - 1);
      },
      
      nextYear: function () {
        this.set('year', (Number)(this.get('year')) + 1);
      },
          
      nextMonth: function() {
        if (this.get('month') >= 12){
            this.set('month', 1);
            this.send('nextYear');
        }
        else{
            this.set('month', (Number)(this.get('month')) + 1);        
        }
      },
          
      prevMonth: function() {
        if (this.get('month') <= 1){
            this.set('month', 12);
            this.send('prevYear');
        }
        else{
            this.set('month', (Number)(this.get('month')) - 1);
        }
      },
    }
});