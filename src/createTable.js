/**
 * Create table header
 * @returns thead
 */
const createTableHeader = () => {
  const headers = [
    "Stt",
    "Customer name",
    "Phone",
    "Purchased Item",
    "Total",
    "Purchased Date",
  ];
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  headers.forEach((header) => {
    const th = document.createElement("th");
    th.innerHTML = header;
    tr.append(th);
  });
  thead.append(tr);
  return thead;
};

// for (count === 1; count < 100; count++) {
//   const index = count;
//   return index;
// }

var currentdate = new Date();
var datetime =
  currentdate.getDate() +
  "/" +
  (currentdate.getMonth() + 1) +
  "/" +
  currentdate.getFullYear() +
  "  " +
  currentdate.getHours() +
  ":" +
  currentdate.getMinutes() +
  ":" +
  currentdate.getSeconds();

const createTableBody = () => {
  let index = 1;
  const tbody = document.createElement("tbody");
  const tr = document.createElement("tr");
  tr.setAttribute("id", "num");
  const sttTd = document.createElement("td");
  const nameTd = document.createElement("td");
  const phoneTd = document.createElement("td");
  const itemTd = document.createElement("td");
  const totalTd = document.createElement("td");
  const dateTd = document.createElement("td");

  sttTd.innerHTML = index++;
  nameTd.innerHTML = $("inputName").value;
  phoneTd.innerHTML = $("inputPhone").value;
  itemTd.innerHTML = $("inputItem").value;
  totalTd.innerHTML = $("totalValue").innerHTML;
  dateTd.innerHTML = datetime;

  tr.append(sttTd);
  tr.append(nameTd);
  tr.append(phoneTd);
  tr.append(itemTd);
  tr.append(totalTd);
  tr.append(dateTd);

  tbody.append(tr);

  return tbody;
};

// Create table header
const table = document.createElement("table");
const tableHeader = createTableHeader();
table.append(tableHeader);

const saveButton = () => {
  const createTable = () => {
    table.setAttribute("id", "userTable");
    table.setAttribute("class", "table table-success table-striped");
    const tableBody = createTableBody();

    table.append(tableBody);
    return table;
  };

  // Execute functions
  const sectionData = $("data");
  const finalTable = createTable();
  sectionData.append(finalTable);
};
