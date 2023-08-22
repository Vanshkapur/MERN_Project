import axios from 'axios';

export const apiClient={
    async get(URL){
        try{
            const response= await axios.get(URL).then((response) => {
                console.log(response.data);
              });

            return response.data;
        }
        catch(err){
            console.log('Error during integration', err);
        }
    },

    async post(URL, data){
        try{
            const response= await axios.post(URL, data);
            return response.data;
        }
        catch(err){
            console.log('Error during integration', err);
        }
    }
}

