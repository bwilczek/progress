import React from 'react';

interface ProgressBarForLongProjectsProps {
  startDate: Date;
  endDate: Date;
  title: string;
}

const ProgressBarForLongProjects: React.FC<ProgressBarForLongProjectsProps> = ({ startDate, endDate, title }) => {
  const calculateProgress = () => {
    const now = new Date();
    const totalDuration = endDate.getTime() - startDate.getTime();
    const elapsedDuration = now.getTime() - startDate.getTime();
    const remainingDuration = endDate.getTime() - now.getTime();
    return [remainingDuration, (elapsedDuration / totalDuration) * 100];
  };

  const [remainingDuration, progress] = calculateProgress();

  return (
    <div>
      <h3>{title} : {progress.toFixed(2)}%</h3>
      <div style={{ border: '1px solid #000', width: '100%', height: '30px', borderRadius: '5px', overflow: 'hidden' }}>
        <div
          title={`Od ${startDate.toISOString().split('T')[0]} do ${endDate.toISOString().split('T')[0]} pozostało:\n${Math.floor(remainingDuration / (1000 * 60 * 60 * 24))} dni\n${(remainingDuration / (1000 * 60 * 60 * 24 * 7)).toFixed(2)} tygodni\n${(remainingDuration / (1000 * 60 * 60 * 24 * 30)).toFixed(2)} miesięcy\n${(remainingDuration / (1000 * 60 * 60 * 24 * 365)).toFixed(2)} lat`}
          style={{
            width: `${progress}%`,
            height: '100%',
            backgroundColor: 'green',
            transition: 'width 0.5s ease-in-out',
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBarForLongProjects;
