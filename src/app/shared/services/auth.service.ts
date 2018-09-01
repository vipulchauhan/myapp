export class AuthService {
    isLoggedIn = false;
    userName: string;
    login(userName: string) {
        localStorage.setItem('isLoggedin', 'true');
        this.isLoggedIn = true;
        this.userName = userName;
    }
    logoff() {
        localStorage.removeItem('isLoggedin');
        this.isLoggedIn = false;
        this.userName = '';
    }
    isAuthenticated() {
        console.log('authenticating...');
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('login status : ' + this.isLoggedIn);
                resolve(this.isLoggedIn);
            }, 900);
        });
        console.log('authentication completed');
        return promise;
    }
}
