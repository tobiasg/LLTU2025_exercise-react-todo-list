import type { ReactElement } from "react";

interface TaskProgressProps {
  numberOfTasks: number;
  numberOfCompletedTasks: number;
}

export const TaskProgress = ({
  numberOfTasks,
  numberOfCompletedTasks,
}: TaskProgressProps): ReactElement => {
  const completionPercentage =
    numberOfTasks > 0 ? Math.round((numberOfCompletedTasks / numberOfTasks) * 100) : 0;

  return (
    <section className="list-info">
      <div className="stats-container">
        <span className="stats">
          {completionPercentage === 100
            ? "All tasks completed"
            : `${numberOfCompletedTasks}/${numberOfTasks} completed`}
        </span>
        <span className="name">{completionPercentage}% done</span>
      </div>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${completionPercentage}%` }}></div>
      </div>
    </section>
  );
};
