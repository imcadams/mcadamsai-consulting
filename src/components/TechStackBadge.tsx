export default function TechStackBadge({ name, color }: { 
    name: string, 
    color: 'orange' | 'blue' | 'green' | 'purple' 
  }) {
    const colorClasses = {
      orange: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
      blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      green: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
    };
  
    return (
      <span className={`${colorClasses[color]} px-4 py-2 rounded-full text-sm font-medium`}>
        {name}
      </span>
    );
  }
  