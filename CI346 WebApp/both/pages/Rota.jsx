NotFound = React.createClass({
  render() {
    return (
      <div className='Not Found'>
        <h5> Weekly Rota </h5>
     
      <table>

        <thead>

          <tr>
          	  <th>Work ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Rota</th>
          </tr>
        </thead>

        <tbody>
          <tr>
         	<td>01</td>
            <td>John</td>
            <td>Snow</td>
            <td>Monday Day, Tuesday Night, Sunday Evening</td>
          </tr>
          <tr>
          	<td>02</td>
            <td>Alan</td>
            <td>Smith</td>
            <td>Tuesday Day, Thursday Evening, Saturday Night</td>
          </tr>
          <tr>
          	<td>03</td>
            <td>Rick</td>
            <td>James</td>
            <td>Wednesday Day, Friday Evening, Saturday Day</td>
          </tr>
        </tbody>
      </table>
            
</div>
    );
  }
});
