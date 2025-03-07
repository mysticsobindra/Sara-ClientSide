import axiosInstance from './axios';

const login = async (email:string, password:string) => {
    try {
        const response = await axiosInstance.post(
            '/login',
            {
                email: email,
                password: password,
            },
        );
        console.log('Login successful:', response.data);
        return response.data;
    } catch (error) {
        console.error('There was an error logging in:', error);
        throw error;
    }
};

export default login;