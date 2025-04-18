"use client"

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

interface CaseStudy {
  id: string
  title: string
  client: string
  challenge: string
  solution: string
  technologies: string[]
  results: string[]
}

export default function CaseStudyAccordion() {
  const [openId, setOpenId] = useState<string | null>(null)
  
  const caseStudies: CaseStudy[] = [
    {
      id: 'case1',
      title: 'Enterprise Knowledge Management System',
      client: 'Fortune 500 Manufacturing Company',
      challenge: 'Engineers were spending 35% of their time searching for information across siloed systems, leading to significant productivity losses and delayed equipment repairs.',
      solution: 'Implemented a multi-agent system using AWS Bedrock and Claude 3.5 Sonnet to create an intelligent knowledge retrieval platform with domain-specific RAG pipelines.',
      technologies: ['AWS Bedrock', 'Claude 3.5 Sonnet', 'Custom RAG Pipeline', 'Vector Database'],
      results: [
        '68% reduction in time spent searching for technical information',
        '$2.4M annual productivity savings',
        '42% decrease in equipment downtime'
      ]
    },
    {
      id: 'case2',
      title: 'AI-Powered Marketing Assistant',
      client: 'Mid-Size E-commerce Company',
      challenge: 'Marketing team struggled to maintain consistent messaging across channels and lacked data-driven insights for campaign optimization.',
      solution: 'Developed an autonomous marketing assistant using GPT-4o that analyzed customer data, generated content variations, and provided performance recommendations.',
      technologies: ['GPT-4o', 'Azure AI Studio', 'Custom Evaluation Framework', 'Marketing Analytics Integration'],
      results: [
        '31% increase in email campaign conversion rates',
        '4.2x faster content creation process',
        '26% improvement in customer engagement metrics'
      ]
    },
    {
      id: 'case3',
      title: 'Intelligent Document Processing System',
      client: 'Financial Services Provider',
      challenge: 'Manual processing of complex financial documents created bottlenecks, with 12% error rates and 3-day average processing times.',
      solution: 'Created a specialized GenAI system with computer vision capabilities to extract, validate, and process financial information from diverse document types.',
      technologies: ['AWS Rekognition', 'Custom LLM Fine-tuning', 'Document Processing Pipeline', 'Compliance Verification System'],
      results: [
        '97% reduction in processing time (3 days to 2 hours)',
        'Error rates decreased from 12% to 0.8%',
        '$1.7M annual cost savings from automation'
      ]
    }
  ]
  
  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id)
  }
  
  return (
    <div className="space-y-6">
      {caseStudies.map((study) => (
        <div key={study.id} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <button
            className="w-full flex justify-between items-center p-6 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
            onClick={() => toggleAccordion(study.id)}
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{study.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-1">{study.client}</p>
            </div>
            <ChevronDownIcon 
              className={`w-5 h-5 text-gray-500 transition-transform ${openId === study.id ? 'transform rotate-180' : ''}`} 
            />
          </button>
          
          {openId === study.id && (
            <div className="p-6 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Challenge</h4>
                  <p className="text-gray-600 dark:text-gray-300">{study.challenge}</p>
                  
                  <h4 className="font-medium text-gray-900 dark:text-white mt-4 mb-2">Solution</h4>
                  <p className="text-gray-600 dark:text-gray-300">{study.solution}</p>
                  
                  <h4 className="font-medium text-gray-900 dark:text-white mt-4 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech) => (
                      <span key={tech} className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Results</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-600 dark:text-gray-300">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
