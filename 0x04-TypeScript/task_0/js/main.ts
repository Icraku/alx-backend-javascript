/** 
    * Write an interface named Student that accepts the following elements: 
    * firstName(string), 
    * lastName(string), 
    * age(number), 
    * location(string) 
**/

export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

/** 
    * Create two students, 
    * and create an array named studentsList containing the two variables
**/

const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'Nakuru'
};

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 25,
    location: 'Kiambu'
};

const studentsList: Student[] = [student1, student2];

/** 
    * Using Vanilla Javascript, 
    * render a table and for each elements in the array, 
    * append a new row to the table,
    * Each row should contain the first name of the student and the location.
**/

export const table = document.createElement('table');
document.body.appendChild(table);

const thead = document.createElement('thead');
table.appendChild(thead);

const tbody = document.createElement('tbody');
table.appendChild(tbody);

const tr = document.createElement('tr');
thead.appendChild(tr);

const th1 = document.createElement('th');
th1.textContent = 'First Name';

const th2 = document.createElement('th');
th2.textContent = 'Location';

tr.appendChild(th1);
tr.appendChild(th2);

studentsList.forEach(student => {
    const tr = document.createElement('tr');
    tbody.appendChild(tr);

    const td1 = document.createElement('td');
    td1.textContent = student.firstName;

    const td2 = document.createElement('td');
    td2.textContent = student.location;

    tr.appendChild(td1);
    tr.appendChild(td2);
});
