let params = {
    register: {},
    changeToEditable: ()=>{

    }
}
const showMathOlympiadRegisterPage = ()=>{
    $( "#root" ).load( "/html/math-olympiad-form.html div#content" );
    setTimeout(()=>{
        console.log("clicked");
        $.find("#math-submit-register")[0].onclick = ()=>{
            $.post('/math-olympiad/create',params.register);
        }
    },1000)
}


const showMathOlympiadViewPage = ()=>{
    console.log("Showing view page");
    $( "#root" ).load( "/math-olympiad/view div#content" );
}


$.find("#math-register")[0].onclick = showMathOlympiadRegisterPage;
$.find("#math-view")[0].onclick = showMathOlympiadViewPage;


const deleteMathOlympiadUser =(id)=>{
    $.get(`/math-olympiad/delete/${id}`,(res)=>{
        if(res.success) showMathOlympiadViewPage();
    });

}

