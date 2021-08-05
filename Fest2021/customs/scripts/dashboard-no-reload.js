let params = {
    register: {},
    edit:{}
}


const resetParams = ()=>{
    params = {
        register: {},
        edit:{}
    }
}

/**
 * Math Olympiad*/
const showMathOlympiadRegisterPage = ()=>{
    $( "#root" ).load( "/html/math-olympiad-form.html div#content" );
    setTimeout(()=>{
        $.find("#math-submit-register")[0].onclick = ()=>{
            $.post('/math-olympiad/create',params.register,function (res){
                if(res.success) {
                    window.alert("Success!");
                    resetParams();
                }
                else window.alert("Failed");
            });
        }
    },1000)
}


const showMathOlympiadViewPage = ()=>{
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
    $("#math-olympiad-user-edit").load(`/math-olympiad/edit/${id} div#content`,()=>{
        params.edit = JSON.parse($.find("#script_math_user_edit")[0].innerText);
    });

}

const editMathUser=()=>{

    $.post("/math-olympiad/edit",params.edit,(res)=>{
        showMathOlympiadViewPage();
    });

}

/**
 * Programming Contest
 * */

let programmingParams = {
    register:{
        coach:{},
        teamLeader:{},
        teamMember1:{},
        teamMember2:{}
    },
    edit:{
        coach:{},
        teamLeader:{},
        teamMember1:{},
        teamMember2:{}
    }
}

const showProgrammingContestRegisterPage = ()=>{

    $( "#root" ).load( "/html/programming-contest-form.html div#content" );
    setTimeout(()=>{
        $.find("#programming-submit-register")[0].onclick = ()=>{
            const data = JSON.stringify(programmingParams.register);
            $.post('/programming-contest/create', {data}, function (res){
                if(res.success) {
                    window.alert("Success!");
                    resetParams();
                }
                else window.alert("Failed");
            });
        }
    },1000)

}

const showProgrammingContestViewPage = () =>{
    $( "#root" ).load( "/programming-contest/view div#content" );

}

$.find("#programming-register")[0].onclick = showProgrammingContestRegisterPage;
$.find("#programming-view")[0].onclick = showProgrammingContestViewPage;

const deleteProgrammingContestTeam =(id)=>{
    $.get(`/programming-contest/delete/${id}`,(res)=>{
        if(res.success) showProgrammingContestViewPage();
    });

}

const viewProgrammingContestCurrentEditUser =(id)=> {
    $("#programming-contest-team-edit").load(`/programming-contest/edit/${id} div#content`,()=>{
        programmingParams.edit = JSON.parse($.find("#script_programming_team_edit")[0].innerText);
    });

}


const editProgrammingTeam=()=>{
    const data =JSON.stringify(programmingParams.edit);
    $.post("/programming-contest/edit", {data},(res)=>{
        showProgrammingContestViewPage();
    });

}



