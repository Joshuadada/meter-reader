document.getElementById('contact').addEventListener('click', () => {
    document.getElementById('j-modal').classList.add('show-j-modal');
})
document.getElementById('close-j-modal').addEventListener('click', () => {
    document.getElementById('j-modal').classList.remove('show-j-modal');
})

const ctx = document.getElementById("myChart").getContext("2d");
      const myChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: [
            "May 06 2022",
            "May 09 2022",
            "May 10 2022",
            "May 11 2022",
            "May 12 2022",
            "May 13 2022"
          ],
          datasets: [
            {
              label: "Consumed Energy (₦)",
              data: [1000, 600, 1200, 2000, 800, 200],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)"
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)"
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                // Include a dollar sign in the ticks
                callback: function(value, index, ticks) {
                  return "₦" + value;
                }
              }
            },
            x: {
              // min: "May 11 2022",
              // max: ""
            }
          }
        }
      });

      $(document).ready(function() {
        $("#myTable").DataTable({
          "pageLength": 5,
          "lengthChange": false
        });
      });





// function printChart(){
//     let prtContent = document.getElementById("chart");
//     let WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
//     WinPrint.document.write(`
//       <html>
//         <head>
//           <link
//             rel="stylesheet"
//             href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css"
//             integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
//             crossorigin="anonymous"
//           />
//         </head>
//         <body class="text-primary">
//             yo men
//           ${prtContent.innerHTML}
//           <script src="https://cdn.jsdelivr.net/npm/chart.js@3.7.1/dist/chart.min.js"></script>
//           <script src="../js/dashboard.js"></script>
//         </body>
//       </html>
//     `);
//     WinPrint.document.close();
//     WinPrint.focus();
//     WinPrint.print();
//     WinPrint.close();
//   }

//logout
// document.getElementById('logout').addEventListener('click', ()=>{
//   const logoutUrl = 'http://ginjar.tech/api/logout';

//   fetch(logoutUrl)
//     .then(res => res.json())
//     .then(data => {
//           console.log(data);
//           if(data.success){
//             sessionStorage.clear('login')
//             location.href = "../index.html"
//           } else {
//             document.getElementById('logout-alert').classList.add('show-logout-alert');
//           }
//       }).catch(error => {
//           console.error('Error:', error)
//           document.getElementById('logout-alert').classList.add('show-logout-alert');
//       })
// })

//close logout-alert
// document.getElementById('close-logout-alert')
//   .addEventListener('click', ()=>{
//       document.getElementById('logout-alert').classList.remove('show-logout-alert');
//   })