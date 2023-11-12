$(document).ready(function(){
    $(".kurczak").hide()
    $(".legia-png").click(function(){
        $("body").addClass("colorAnimation")
        $(".legia-png").hide()
        $(".kurczak").show()
    })
})