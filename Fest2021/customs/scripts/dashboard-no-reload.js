let params = {register: {}}
const showMathOlympiadRegisterPage = ()=>{
    $( "#root" ).load( "/html/math-olympiad-form.html div#content" );
    setTimeout(()=>{
        $.find("#math-submit-register")[0].onclick = ()=>{
            console.log("submitting");
        }
    },1000)
}

K
const showMathOlympiadViewPage = ()=>{
    $( "#root" ).load( "/html/math-olympiad-form.html div#content" );
    setTimeout(()=>{
        $.find("#math-submit-register")[0].onclick = ()=>{
            console.log("submitting");
        }
    },1000)
}


$.find("#math-register")[0].onclick = showMathOlympiadRegisterPage;
$.find("#math-view")[0].onclick = showMathOlympiadViewPage;




