$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
    $('[data-toggle="tab"]').tooltip({
        trigger: 'hover',
        placement: 'bottom',
        animate: true,
        container: 'body'
    });
  });