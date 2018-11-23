let devPool = new Vue({
  el: '.devPool',
  data: {
    // add this
    username:'',
    fullname: '',
    email: '',
    avatar:'',
    city:'',
    active_since: '',
    public_repos:0,
    users: [],
    error: ''
  },
  mounted: function() {
    axios.get('/api/users/all')
      .then(res => res.json())
      .then(data => {
        this.users = data;
        console.log(data)
      })
      .catch(err => this.error = err.stack);
  },
  methods: {
    submit: function (e) {
      e.preventDefault();
      alert('It happenning!!!')
      axios.post('/api/user/register', {
        username: this.username, password: this.password
      })
      .then(result => {
       this.error = result.message;
      });
    }
  }
})
