$(".button-group button").on("click", function (elem) {
    const copyUrl = $(".button-group span")[0].innerText
    navigator.clipboard.writeText(copyUrl)
    $(this).removeClass("blue")
    $(this).addClass("dark-violette")
    $(this)[0].innerText = "Copied!"

})

$(".validation").on("submit", function (event) {
    const url = $(".form-control")[0].value

    const r = new RegExp(/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i);

    if (!r.test(url)) {
        $(".invalid").css("display", "block")
        event.preventDefault()
        event.stopPropagation()
    }


})