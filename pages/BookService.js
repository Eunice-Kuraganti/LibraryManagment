import axios from 'axios';

const BOOK_API_BASE_URL = "http://localhost:5002/books";

class BookService {

    createBook(addbook){
        return axios.post(BOOK_API_BASE_URL,addbook);
    }
    getBookById(bookById){
        return axios.get(BOOK_API_BASE_URL+'/' + bookById);
    }

   // updateEmployee(employee, employeeId){
     //   return axios.put(EMPLOYEE_API_BASE_URL +'/'+ employeeId, employee);
    //}
}
export default new BookService()