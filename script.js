$(document).ready(function(){
    $(".legia-png").click(function(){
        $("body").addClass("colorAnimation")
        $(".legia-png").hide()
        $(".legia").append(`
        <div class="kurczak">
            <img class="legiakurczak" src="res/kurczepieczone.gif" alt="">
            <img class="legianapis" src="res/legia.gif" alt="">
        </div>
        `)
    })
})