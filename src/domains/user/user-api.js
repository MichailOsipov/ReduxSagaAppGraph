const loadUser = () =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                firstname: 'Mikhail',
                lastname: 'Osipov',
                age: 23
            });
        }, 3000);
    });

export const UserApi = {
    loadUser
};
