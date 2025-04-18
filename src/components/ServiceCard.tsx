import { ReactElement } from 'react'

export interface ServiceCardProps {
  service: {
    title: string
    icon: ReactElement
    description: string
    features: string[]
  }
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition">
      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
        {service.icon} 
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        {service.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {service.description}
      </p>
      <ul className="space-y-2">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center text-gray-600 dark:text-gray-400">
            <span className="text-blue-600 dark:text-blue-400 mr-2">▹</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}
