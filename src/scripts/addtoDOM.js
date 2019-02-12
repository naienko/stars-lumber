import API from "./APImanager";
import codeEmployee from "./factories";

const printToDom = () => {
    const printLocation = document.querySelector("#displayEmployees");
    API.get().then(
        employeeArray => {
            employeeArray.forEach(element => {
                printLocation.innerHTML += codeEmployee(element);
            });
        }
    )
};

export default printToDom;