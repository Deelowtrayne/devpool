let devPool = new Vue({
  el: '.devPool',
  data: {
    // add this
    username: '',
    password: '',
    checked: ''
  },
  methods: {
    error: function () {
      // let password = /^[A-Z]\[a-z]\d{1,3}$/
      if (this.username === '') {
        console.log('you need a name')
      } else if (this.password === '') {
        console.log('plz enter password')
      }
      return '';
    
    submit: function (e) {
      e.preventDefault();
      alert('It happenning!!!')
      axios.post('/api/user/register', {
        username: this.username, password: this.password
      })
      .then(result => {
       
      }
    }
  }
})
