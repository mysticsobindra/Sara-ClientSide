import axios from 'axios';

interface RegisterParams {
    email: string;
    password: string;
    referralCode?: string;
}

export const register = async ({ email, password, referralCode }: RegisterParams) => {
    try {
        const response = await axios.post(
            `http://localhost:3000/register${referralCode ? `?referralCode=${referralCode}` : ''}`,
            {
                email,
                password,
            }
        );
        console.log('Registration successful:', response.data);
        return response.data;
    } catch (error) {
        console.error('There was an error registering:', error);
        throw error;
    }
};