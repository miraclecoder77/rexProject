this.ctx = document.getElementById('myChart') as HTMLElement;
this.chart = new Chart(this.ctx, {
  type: 'doughnut',
  data: {
    datasets: [
      {
        data: [55, 45],
        backgroundColor: ['skyblue', 'red'],
      },
    ], 
  },
  options: {
    
  }
} )
