'use client';

import { useState, useEffect } from 'react';
import { usePlausible } from 'next-plausible';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

interface AnalyticsData {
  pageviews: number;
  visitors: number;
  bounceRate: number;
  visitDuration: number;
  topPages: Array<{ page: string; visitors: number; pageviews: number }>;
  topSources: Array<{ source: string; visitors: number }>;
  countries: Array<{ country: string; visitors: number }>;
}

interface MetricCardProps {
  title: string;
  value: string | number;
}

export default function AnalyticsPage() {
  const plausible = usePlausible();
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    pageviews: 0,
    visitors: 0,
    bounceRate: 0,
    visitDuration: 0,
    topPages: [],
    topSources: [],
    countries: []
  });
  const [timeframe, setTimeframe] = useState<string>('7d');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnalyticsData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // In a real implementation, you would fetch this data from Plausible's API
        // This is a mock implementation since direct API access requires authentication
        setTimeout(() => {
          setAnalyticsData({
            pageviews: 1247,
            visitors: 892,
            bounceRate: 42.3,
            visitDuration: 98,
            topPages: [
              { page: '/', visitors: 523, pageviews: 678 },
              { page: '/services', visitors: 231, pageviews: 302 },
              { page: '/case-studies', visitors: 138, pageviews: 267 }
            ],
            topSources: [
              { source: 'Google', visitors: 412 },
              { source: 'Direct', visitors: 256 },
              { source: 'LinkedIn', visitors: 124 }
            ],
            countries: [
              { country: 'United States', visitors: 523 },
              { country: 'United Kingdom', visitors: 124 },
              { country: 'Canada', visitors: 87 }
            ]
          });
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Failed to fetch analytics data');
        setIsLoading(false);
      }
    };

    fetchAnalyticsData();
    plausible('pageview', { props: { page: 'analytics' } });
  }, [timeframe, plausible]);

  if (error) {
    return (
      <>
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-red-600 dark:text-red-400">
            Error loading analytics: {error}
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Website Analytics Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Track performance metrics and visitor engagement for McAdams AI Consulting.
          </p>
        </div>
        
        {/* Timeframe selector */}
        <div className="mb-8">
          <div className="flex space-x-2">
            {['7d', '30d', '6m', '12m'].map((period) => (
              <button
                key={period}
                onClick={() => setTimeframe(period)}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  timeframe === period
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                }`}
              >
                {period === '7d' ? 'Last 7 days' : 
                 period === '30d' ? 'Last 30 days' : 
                 period === '6m' ? 'Last 6 months' : 'Last 12 months'}
              </button>
            ))}
          </div>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <>
            {/* Key metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <MetricCard title="Unique Visitors" value={analyticsData.visitors} />
              <MetricCard title="Total Pageviews" value={analyticsData.pageviews} />
              <MetricCard title="Bounce Rate" value={`${analyticsData.bounceRate}%`} />
              <MetricCard title="Avg. Visit Duration" value={`${analyticsData.visitDuration}s`} />
            </div>
            
            {/* Top pages */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Top Pages
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-900">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Page
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Visitors
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Pageviews
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {analyticsData.topPages.map((page, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                          {page.page}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                          {page.visitors}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                          {page.pageviews}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Traffic sources and countries */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Traffic Sources
                </h2>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  {analyticsData.topSources.map((source, index) => (
                    <div key={index} className="mb-4 last:mb-0">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {source.source}
                        </span>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {source.visitors}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${(source.visitors / analyticsData.visitors) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Countries
                </h2>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  {analyticsData.countries.map((country, index) => (
                    <div key={index} className="mb-4 last:mb-0">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {country.country}
                        </span>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {country.visitors}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${(country.visitors / analyticsData.visitors) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

const MetricCard = ({ title, value }: MetricCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{title}</p>
      <p className="text-3xl font-bold text-gray-900 dark:text-white">{value}</p>
    </div>
  );
};
