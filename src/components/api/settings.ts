import axiosInstance from "./axios";

export const GetSettingsApi = async () => {
    try {
        const response = await axiosInstance.get(
            `/cms/settings`,
        );
        return response.data;
    } catch (error) {
        console.error('There was an issue', error);
        throw error;
    }
};

export const UpdateSettingsApi = async (data: any) => {
    try {
        const response = await axiosInstance.put(
            `/cms/newSettings`,
            data
        );
        return response.data;
    } catch (error) {
        console.error('There was an issue', error);
        throw error;
    }
};