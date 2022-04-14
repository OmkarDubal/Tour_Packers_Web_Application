
const reducer = (logindata, action) => {
    switch(action.type) {
        case 'LOGGEDIN' :
            return {...logindata, loggedin: true};

        case 'LOGGEDOUT' :
            return {...logindata, loggedin: false};
    }
}

export default reducer;