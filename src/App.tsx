import './App.css';
import ProgressBarForLongProjects from './ProgressBarForLongProjects';

function App() {
  return (
    <div className="App">
      <ProgressBarForLongProjects startDate={new Date('2022-11-04')} title="Pełnoletność Andrzeja" endDate={new Date('2033-07-27')} />
      <ProgressBarForLongProjects startDate={new Date('2022-11-04')} title="Pełnoletność Wery" endDate={new Date('2036-01-11')} />
      <ProgressBarForLongProjects startDate={new Date('2018-09-10')} title="Kredyt I" endDate={new Date('2033-10-15')} />
      <ProgressBarForLongProjects startDate={new Date('2021-08-11')} title="Kredyt II" endDate={new Date('2037-11-15')} />
    </div>
  );
}

export default App;
