let params = {
    register: {},
    edit:{},
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

const viewMathOlympiadCurrentEditUser =(id)=> {
    console.log("Showing...");
    $("#math-olympiad-user-edit").load(`/math-olympiad/edit/${id} div#content`,()=>{
        params.edit = JSON.parse($.find("#script_math_user_edit")[0].innerText);
    });

}

const editMathUser=()=>{

    $.post("/math-olympiad/edit",params.edit,(res)=>{
        showMathOlympiadViewPage();
    });

}




