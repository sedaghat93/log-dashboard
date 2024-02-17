import { useQuery } from 'react-query';
import axios from 'axios';

const useListOfErrors = (url, token) => {
  return useQuery('listOfErrors', async () => {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    return response.data;
  });
};

export default useListOfErrors;