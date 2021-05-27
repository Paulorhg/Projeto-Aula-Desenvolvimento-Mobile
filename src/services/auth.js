export function signIn() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'fsef5sf65se1f56e8fs5efSd3td',
                user:{
                    name: 'Diego',
                    email: 'diego@rocketseat.com.br',
                }
            })
        }, 2000);
    });
}