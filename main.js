
    function allData(){
     
        fetch('https://api.covid19api.com/summary').then((response)=>{
            return response.json();
        }).then((data)=>{
  
            const table = document.getElementById('table');

            for(let i=1; i<(data['Countries'].length); i++){
                let row = table.insertRow();
                // Creating Cells 
                row.insertCell(0);
                row.insertCell(1);
                row.insertCell(2);
                row.insertCell(3);

                // Inserting data on each cell
                table.rows[i].cells[0].innerHTML =  data['Countries'][i-1]['Country']; 
                table.rows[i].cells[0].style.backgroundColor = '#7a4a91';  
                table.rows[i].cells[0].style.color = 'white';  
                table.rows[i].cells[1].style.color = 'white';  
                table.rows[i].cells[2].style.color = 'white';  
                table.rows[i].cells[1].innerHTML =  data['Countries'][i-1]['TotalConfirmed'];
                table.rows[i].cells[1].style.backgroundColor = 'rgb(63, 117, 78)';
                table.rows[i].cells[3].innerHTML =  data['Countries'][i-1]['TotalDeaths'];     
                table.rows[i].cells[3].style.backgroundColor = '#cf2b2b';
                table.rows[i].cells[3].style.color = 'white';
                table.rows[i].cells[2].innerHTML =  data['Countries'][i-1]['TotalRecovered'];
                table.rows[i].cells[2].style.backgroundColor = '#567e94';

                table.rows[i].cells[0].style.letterSpacing = '2px';
                table.rows[i].cells[1].style.letterSpacing = '2px';
                table.rows[i].cells[2].style.letterSpacing = '2px';
                table.rows[i].cells[3].style.letterSpacing = '2px';
                // table.rows[i].cells[4].style.letterSpacing = '2px';
            }
        }).catch((error)=>{
            console.log(error);
        })
    
    }
   