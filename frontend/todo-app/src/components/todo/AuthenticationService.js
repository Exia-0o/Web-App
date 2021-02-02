class AuthenticationService {
    registerSuccessfulLogin(username, password) {
        // Once the user has successfully logged, put the username and password
        // into storage
        console.log('registerSuccessfulLogin');
        sessionStorage.setItem('authenticatedUser', username);
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')
        if (user === null) return false
        return true
    }

    getLoggedInUsername() {
        let user = sessionStorage.getItem('authenticatedUser')
        if (user === null) return ''
        return user
    }
}

export default new AuthenticationService()