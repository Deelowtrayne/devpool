let devPool = new Vue({
  el: '.devPool'
   data : {     
    // add this
    email: '',
    password: ''
  },
  methods : {
    details : function() {
      alert('Lets calculate!');
    }
  }
});