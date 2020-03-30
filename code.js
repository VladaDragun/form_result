/*function sbmt() {
  let name = document.getElementById('name');
  if(name.validity.valid) {
    let table = document.querySelector('div.res_table');

    function addRow() {
    let table = document.getElementById('results');

    var row = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');
    var td7 = document.createElement('td');
    var td8 = document.createElement('td');
    td1.innerHTML = document.getElementById('name').value;
    td2.innerHTML = document.getElementById('age').value;
    td3.innerHTML = document.getElementById('gender').value;
    td4.innerHTML = document.getElementById('date').value;
    var contact = document.getElementsByName("contact");
    var rate_value;
    for (var i = 0; i < contact.length; i++) {
      if (contact[i].checked) {
        rate_value = contact[i].value;
      }
    }
    td5.innerHTML = rate_value;
    td6.innerHTML = document.getElementById('select-choice').value;
    td7.innerHTML = document.getElementById('textarea').value;
    td8.innerHTML = document.getElementById('select-choice2').value;
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    row.appendChild(td5);
    row.appendChild(td6);
    row.appendChild(td7);
    row.appendChild(td8);
    table.children[0].appendChild(row);
    }

    function addLi() {
      var ol = document.querySelector("ol");
      var li = document.createElement("li");
      li.innerHTML = document.getElementById("name").value;
      table.appendChild(ol);
      ol.appendChild(li);
    }

    addRow();
    addLi();
    console.log('Всё хорошо');
  }
  else {
    console.log('Не вышло');
  }
}

function show() {
  let table = document.querySelector('div.res_table');

  table.style.display = "inline-block";
}

function hide() {
  let table = document.querySelector('div.res_table');

  table.style.display = "none";
}*/


//let btn = document.getElementById("myBtn");
//let span = document.getElementsByClassName("close")[0];


function sbmt() {
  let modal = document.getElementById("myModal");
  let name = document.getElementById('name');
  if(name.validity.valid) {
    let table = document.querySelector('div.res_table');

    function addRow() {
    let table = document.getElementById('results');

    var row = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');
    var td7 = document.createElement('td');
    var td8 = document.createElement('td');
    td1.innerHTML = document.getElementById('name').value;
    td2.innerHTML = document.getElementById('age').value;
    td3.innerHTML = document.getElementById('gender').value;
    td4.innerHTML = document.getElementById('date').value;
    var contact = document.getElementsByName("contact");
    var rate_value;
    for (var i = 0; i < contact.length; i++) {
      if (contact[i].checked) {
        rate_value = contact[i].value;
      }
    }
    td5.innerHTML = rate_value;
    td6.innerHTML = document.getElementById('select-choice').value;
    td7.innerHTML = document.getElementById('textarea').value;
    td8.innerHTML = document.getElementById('select-choice2').value;
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    row.appendChild(td5);
    row.appendChild(td6);
    row.appendChild(td7);
    row.appendChild(td8);
    table.children[0].appendChild(row);
    }

    function addLi() {
      var ol = document.querySelector("ol");
      var li = document.createElement("li");
      li.innerHTML = document.getElementById("name").value;
     // table.appendChild(ol);
      ol.appendChild(li);
    }

    addRow();
    addLi();
    modal.style.display = "inline-block";
    console.log('Всё хорошо');
  }
  else {
    console.log('Не вышло');
  }

  
}

function hide() {
  let modal = document.getElementById("myModal");
  modal.style.display = "none";
}

window.onclick = function(event) {
  let modal = document.getElementById("myModal");
  if(event.target == modal) {
    modal.style.display = "none";
  }
}

function show() {
  let table = document.getElementById('myModal');

  table.style.display = "inline-block";
}