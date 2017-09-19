export function doLogin({dispatch, state}) {
    this.$http.get("/login.json").then(
        (response) => {
            dispatch("SETLOGIN", response.data)
        },
        (error) => {
            console.error(error.statusText)
        }
    )
}

export function doLogout({dispatch, state}) {
    let login = {
        username : "",
        email : "",
        token : ""
    }

    dispatch("SETLOGIN", login)
}