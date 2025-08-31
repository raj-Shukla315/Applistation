import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export const handleSuccess = (message) => {
  toast.success(message,{
    position:'top-right'
  });
};

export const handleError = (message) => {
  toast.error(message,{
    position:'top-right'
  });
};
