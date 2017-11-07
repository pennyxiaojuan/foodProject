require.config({
  baseUrl:'/food-project/js/',
  paths: {
    $: 'plugins/jquery.min',
    bootstrap: 'plugins/bootstrap/bootstrap.min',
    ejs: 'plugins/ejs/ejs',
    text: 'plugins/text',
    rejs: 'plugins/rejs',
  },
  waitSeconds: 0,
  shim: {
    $: {
      exports : '$'
    },
    bootstrap : {
      deps: ['$','css!../css/plugins/bootstrap/bootstrap.min.css']
    },
    ejs: {
      exports: 'ejs'
    }
  },
  map: {
    '*' : {
      'css': 'plugins/require-css/css'
    }
  }
})