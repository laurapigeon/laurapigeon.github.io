function historyBackWFallback() {
    var prevPage = window.location.href;

    window.history.go(-1);

    setTimeout(function(){ 
        if (window.location.href == prevPage) {
            window.location.href = "/404?redir=back"; 
        }
    }, 500);
}

function historyForwardWFallback() {
    var prevPage = window.location.href;

    window.history.go(1);

    setTimeout(function(){ 
        if (window.location.href == prevPage) {
            window.location.href = "/404?redir=forward"; 
        }
    }, 500);
}
