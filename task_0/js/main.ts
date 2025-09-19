interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}
const studentOne: Student = {
    firstName: 'John',
    lastName: 'Adewale',
    age: 25,
    location: 'Lagos'
}
const studentTwo: Student = {
    firstName: 'Janet',
    lastName: 'Ajayi',
    age: 24,
    location: 'Abuja'
}
const studentsList: Student[] = [studentOne, studentTwo];
const table: HTMLTableElement = document.createElement("table");
const tablebody: HTMLTableSectionElement = document.createElement("tbody");

studentsList.forEach(student => {
    const row: HTMLTableRowElement = document.createElement("tr");
    const firstNameCell: HTMLTableCellElement = document.createElement("td");
    const locationCell: HTMLTableCellElement = document.createElement("td");

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    tablebody.appendChild(row)
    table.appendChild(tablebody);
})

document.body.appendChild(table)


