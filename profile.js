let devPool = new Vue({
    el: '.profile'
     data : {     
      // add this
      username:'',
      fullname: '',
      email: ''
    },
    methods : {
      details : function() {
        alert('Lets calculate!');
      }
    }