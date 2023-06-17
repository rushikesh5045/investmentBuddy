import React, { useState } from 'react';
import './App.css';
import Box from './Components/Box';

function App() {
  const [sum, setSum] = useState('');
  const [interest, setInterest] = useState('');
  const [years, setYears] = useState('');
  const [investments, setInvestments] = useState([]);

  const sumHandler = (e) => {
    setSum(e.target.value);
    setInvestments([]);
  };
  const interestHandler = (e) => {
    setInterest(e.target.value);
    setInvestments([]);

  };
  const yearsHandler = (e) => {
    setYears(e.target.value);
    setInvestments([]);

  };

  const submitHandler = (e) => {
    e.preventDefault();

    const calculatedInvestments = [];
    const principal = parseFloat(sum);
    const rate = parseFloat(interest);
    const numYears = parseInt(years);

    let investment = principal;
    let totalIntrest = 0;
    for (let i = 1; i <= numYears; i++) {
      investment += investment * (rate / 100);
      totalIntrest+=investment * (rate / 100);;
      calculatedInvestments.push({
        year: i,
        intrest:totalIntrest.toFixed(2),
        amount: investment.toFixed(2),
      });
    }

    setInvestments(calculatedInvestments);
    setSum('');
    setInterest('');
    setYears('')
  };

  return (
    <>
     <div className='head'>
      <h1 >Investment Calculator</h1>
      </div>
      <div className="App">
     

        <form onSubmit={submitHandler}>

         <div>
         <Box
            for="sum"
            type="number"
            onChange={sumHandler}
            name="sum"
            placeholder="Sum"
            value={sum}
          >
            Principal Sum
          </Box>
         </div>
         <div>
          <Box
            for="interest"
            type="number"
            onChange={interestHandler}
            name="interest"
            placeholder="Interest Rate"
            value={interest}
          >
            Interest Rate
          </Box>
          </div>
          <div>
          <Box
            for="years"
            type="number"
            onChange={yearsHandler}
            name="years"
            placeholder="Years"
            value={years}
          >
            Years
          </Box></div>
          <button type="submit">Submit</button>
        </form>

        
      </div>
     <div className='render'>
     {investments.length > 0 && (
          <table className="investments-table">
            <thead>
              <tr>
                <th style={{color:"#2e0343", fontSize:'20px'}}>Year</th>
                <th style={{color:"#2e0343", fontSize:'20px'}}>Intrest</th>
                <th style={{color:"#2e0343", fontSize:'20px'}}>Amount</th>
              </tr>
            </thead>
            <tbody>
              {investments.map((investment) => (
                <tr key={investment.year}>
                  <td>{investment.year}</td>
                  <td>{investment.intrest}</td>
                  <td>{investment.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
     </div>
    </>
  );
}

export default App;
