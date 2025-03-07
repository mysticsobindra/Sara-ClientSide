import axiosInstance from './axios';

export const YourReferralApi = async (userId:string) => {
    try {
        const response = await axiosInstance.get(
            `/referral/yourReferrals/${userId}`,
        );
        return response.data;
    } catch (error) {
        console.error('There was an issue', error);
        throw error;
    }
};

export const TopReferralsApi = async () => {
    try {
        const response = await axiosInstance.get(
            `/referral/topReferrals`,
        )
        return response.data;
    } catch (error) {
        console.error('There was an issue', error);
        throw error;
    }
};

export const ReferralEarningApi = async (userId : string , filter?:string , days?:number) => {
    try {
        let url = `/referral/history/${userId}`;
        if (filter || days) {
            url += `?`;
            if (filter) {
            url += `filter=${filter.toLowerCase().split(' ').join('_')}`;
            }
            if (filter && days) {
            url += `&&`;
            }
            if (days) {
            url += `days=${days}`;
            }
        }
        const response = await axiosInstance.get(url);
        return response.data;
    } catch (error) {
        console.error('There was an issue', error);
        throw error;
    }
};