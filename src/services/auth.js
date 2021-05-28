import api from '../services/api';

export function signIn(email, senha) {
    return new Promise(resolve => {
        console.log("passou service");



        const data = {
            email,
            senha
        }

        // data.email = email;
        // data.senha = senha

        console.log(data.email);

    
        api.post('/auth/authenticate', data)
            .then(resp => resp.data)
            .then(resp => {
                
            console.log("passou service2");
                resolve({
                    token: resp.token,
                    user: resp.user,
                })

            })
            .catch(error => {
                console.error(error);
            })
        }
    )




    //     setTimeout(() => {
    //         resolve({
    //             token: 'fsef5sf65se1f56e8fs5efSd3td',
    //             user:{
    //                 name: 'Diego',
    //                 email: 'diego@rocketseat.com.br',
    //             }
    //         })
    //     }, 2000);
    // });
}