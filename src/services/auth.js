import api from '../services/api';

export function signIn(email, senha) {
    return new Promise(resolve => {
        console.log("passou service");

    //     const data = {
    //         email,
    //         senha
    //     }

    //     // data.email = email;
    //     // data.senha = senha

    //     console.log(data.email);

    
    //     api.post('/auth/authenticate', data)
    //         .then(resp => resp.data)
    //         .then(resp => {
                
    //         console.log("passou service2");
    //             resolve({
    //                 token: resp.token,
    //                 user: resp.user,
    //             })

    //         })
    //         .catch(error => {
    //             console.error(error);
    //         })
    //     }
    // )




        setTimeout(() => {
            resolve({
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYjA0MDkzY2ZlZjRlM2I2MGRlMTYzZSIsImlhdCI6MTYyMjE2MzYwMywiZXhwIjoxNjIyMjUwMDAzfQ.rBrKh8Bq2uXBQqoeBKcIzRSkOfm4iE_HAsRincaDPps',
                user:{
                    name: 'Diego',
                    email: 'diego@rocketseat.com.br',
                }
            })
        }, 2000);
    });
}