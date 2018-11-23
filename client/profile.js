// let devPool = new Vue({
//     el: '.profile',
//      data : {     
//       // add this
//       username:'',
//       fullname: '',
//       email: '',
//       avatar:'',
//       city:'',
//       active_since: '',
//       public_repos:0,
//       users:''

//     },
//     mounted() {
//       var self = this;
//       axios.get('/api/user/Deelowtrayne')
//         .then(res => {
//           self.username = res.username;
//           self.fullname = res.full_name;
//           self.email = res.email;
//           self.avatar =res.avatar;
//           self.city = res.city;
//           self.active_since = res.active_since;
//           self.public_repos = res.public_repos;
//         });
//     },
//     methods: {
//       details: function() {
//         alert('Lets calculate!');
//       }
//     }
//   });