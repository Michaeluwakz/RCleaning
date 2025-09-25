import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

export default function HealthInsightsPage() {
  return (
    <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 min-h-screen">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-amber-600 to-orange-600 py-16 md:py-20 text-center text-white">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Health Insights Dashboard
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto">
            Your personalized wellness journey with data-driven insights and actionable recommendations
          </p>
        </div>
      </header>

      <main className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          
          {/* Health Metrics Overview */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Health Metrics Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="bg-white/80 backdrop-blur-sm border-amber-200 hover:shadow-lg transition-all">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-2xl text-amber-700">85%</CardTitle>
                  <CardDescription>Overall Wellness Score</CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={85} className="h-2 bg-amber-100" />
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-green-200 hover:shadow-lg transition-all">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-2xl text-green-700">92%</CardTitle>
                  <CardDescription>Sleep Quality</CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={92} className="h-2 bg-green-100" />
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-blue-200 hover:shadow-lg transition-all">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-2xl text-blue-700">78%</CardTitle>
                  <CardDescription>Physical Activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={78} className="h-2 bg-blue-100" />
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-purple-200 hover:shadow-lg transition-all">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-2xl text-purple-700">88%</CardTitle>
                  <CardDescription>Nutrition Score</CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={88} className="h-2 bg-purple-100" />
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Wellness Insights */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Wellness Insights
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-white/80 backdrop-blur-sm border-orange-200">
                <CardHeader>
                  <CardTitle className="text-orange-700 flex items-center gap-2">
                    🌟 Positive Trends
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>Sleep duration increased by 15% this month</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>Water intake consistently above daily target</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>Stress levels decreased by 22%</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-700 flex items-center gap-2">
                    ⚠️ Areas for Improvement
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span>Screen time increased by 8%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span>Exercise frequency below weekly target</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span>Vitamin D levels need attention</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Personalized Recommendations */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-12">
              Personalized Recommendations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-amber-100 to-orange-100 border-amber-300">
                <CardHeader>
                  <CardTitle className="text-amber-800">🌅 Morning Routine</CardTitle>
                  <CardDescription>Optimize your start to the day</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Start with 10 minutes of stretching</li>
                    <li>• Drink warm lemon water</li>
                    <li>• Practice 5 minutes of meditation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-100 to-emerald-100 border-green-300">
                <CardHeader>
                  <CardTitle className="text-green-800">🏃‍♂️ Fitness Goals</CardTitle>
                  <CardDescription>Build sustainable exercise habits</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Aim for 30 minutes daily activity</li>
                    <li>• Include strength training 3x/week</li>
                    <li>• Take walking breaks every hour</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-100 to-cyan-100 border-blue-300">
                <CardHeader>
                  <CardTitle className="text-blue-800">🍎 Nutrition Focus</CardTitle>
                  <CardDescription>Enhance your eating habits</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Increase leafy green vegetables</li>
                    <li>• Include omega-3 rich foods</li>
                    <li>• Reduce processed sugar intake</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <Card className="bg-gradient-to-r from-amber-600 to-orange-600 text-white border-0">
              <CardContent className="py-12">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Optimize Your Health Journey?
                </h3>
                <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
                  Track your progress, discover patterns, and receive personalized recommendations 
                  to achieve your wellness goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/about"
                    className="bg-white text-amber-700 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
                  >
                    Learn More About Us
                  </Link>
                  <Link 
                    href="/quote"
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-700 transition-colors"
                  >
                    Get Started Today
                  </Link>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
}
