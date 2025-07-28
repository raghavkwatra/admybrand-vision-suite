import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { BarChart3, Brain, Cpu, TrendingUp, Zap, Activity } from "lucide-react"

export const AIUsageReport = () => {
  const aiTools = [
    {
      name: "ChatGPT",
      provider: "OpenAI",
      usage: 2847,
      cost: 284.70,
      accuracy: 94,
      responseTime: 1.2,
      status: "active",
      color: "bg-green-500"
    },
    {
      name: "Claude",
      provider: "Anthropic", 
      usage: 1934,
      cost: 193.40,
      accuracy: 96,
      responseTime: 0.8,
      status: "active",
      color: "bg-blue-500"
    },
    {
      name: "Gemini",
      provider: "Google",
      usage: 1245,
      cost: 124.50,
      accuracy: 92,
      responseTime: 1.5,
      status: "active",
      color: "bg-purple-500"
    },
    {
      name: "Cursor",
      provider: "Anysphere",
      usage: 856,
      cost: 85.60,
      accuracy: 89,
      responseTime: 2.1,
      status: "active",
      color: "bg-orange-500"
    },
    {
      name: "v0.dev",
      provider: "Vercel",
      usage: 634,
      cost: 63.40,
      accuracy: 87,
      responseTime: 3.2,
      status: "active",
      color: "bg-cyan-500"
    },
    {
      name: "Bolt",
      provider: "StackBlitz",
      usage: 423,
      cost: 42.30,
      accuracy: 85,
      responseTime: 2.8,
      status: "limited",
      color: "bg-yellow-500"
    }
  ]

  const totalUsage = aiTools.reduce((sum, tool) => sum + tool.usage, 0)
  const totalCost = aiTools.reduce((sum, tool) => sum + tool.cost, 0)
  const avgAccuracy = aiTools.reduce((sum, tool) => sum + tool.accuracy, 0) / aiTools.length

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            AI Usage Analytics Report
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive overview of AI tool utilization, performance metrics, and cost analysis
          </p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="glass-card border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Requests</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                <AnimatedCounter value={totalUsage} />
              </div>
              <p className="text-xs text-muted-foreground">
                +12.5% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Cost</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                $<AnimatedCounter value={Math.round(totalCost)} />
              </div>
              <p className="text-xs text-muted-foreground">
                +8.2% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Accuracy</CardTitle>
              <Brain className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                <AnimatedCounter value={Math.round(avgAccuracy)} />%
              </div>
              <p className="text-xs text-muted-foreground">
                +2.1% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Tools</CardTitle>
              <Zap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                <AnimatedCounter value={aiTools.filter(tool => tool.status === "active").length} />
              </div>
              <p className="text-xs text-muted-foreground">
                6 tools monitored
              </p>
            </CardContent>
          </Card>
        </div>

        {/* AI Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {aiTools.map((tool, index) => (
            <Card key={tool.name} className="glass-card border-0 hover:shadow-elegant transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${tool.color}`}></div>
                    <div>
                      <CardTitle className="text-lg">{tool.name}</CardTitle>
                      <CardDescription>{tool.provider}</CardDescription>
                    </div>
                  </div>
                  <Badge variant={tool.status === "active" ? "default" : "secondary"}>
                    {tool.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Usage</span>
                  <span className="font-semibold">
                    <AnimatedCounter value={tool.usage} />
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Cost</span>
                  <span className="font-semibold">${tool.cost}</span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Accuracy</span>
                    <span className="font-semibold">{tool.accuracy}%</span>
                  </div>
                  <Progress value={tool.accuracy} className="h-2" />
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Avg Response</span>
                  <span className="font-semibold">{tool.responseTime}s</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Usage Distribution Chart */}
        <Card className="glass-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5" />
              <span>Usage Distribution</span>
            </CardTitle>
            <CardDescription>
              Monthly usage breakdown by AI tool
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {aiTools.map((tool) => (
                <div key={tool.name} className="flex items-center space-x-4">
                  <div className="w-20 text-sm font-medium">{tool.name}</div>
                  <div className="flex-1">
                    <Progress value={(tool.usage / totalUsage) * 100} className="h-3" />
                  </div>
                  <div className="w-16 text-sm text-muted-foreground text-right">
                    {Math.round((tool.usage / totalUsage) * 100)}%
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Performance Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Card className="glass-card border-0">
            <CardHeader>
              <CardTitle>Top Performers</CardTitle>
              <CardDescription>Best accuracy and response time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[...aiTools]
                  .sort((a, b) => b.accuracy - a.accuracy)
                  .slice(0, 3)
                  .map((tool, index) => (
                    <div key={tool.name} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`text-lg font-bold ${
                          index === 0 ? 'text-yellow-500' : 
                          index === 1 ? 'text-gray-400' : 'text-orange-600'
                        }`}>
                          {index + 1}
                        </div>
                        <span className="font-medium">{tool.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{tool.accuracy}%</span>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-0">
            <CardHeader>
              <CardTitle>Cost Efficiency</CardTitle>
              <CardDescription>Best value for usage ratio</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[...aiTools]
                  .sort((a, b) => (a.cost / a.usage) - (b.cost / b.usage))
                  .slice(0, 3)
                  .map((tool, index) => (
                    <div key={tool.name} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`text-lg font-bold ${
                          index === 0 ? 'text-green-500' : 
                          index === 1 ? 'text-blue-500' : 'text-purple-500'
                        }`}>
                          {index + 1}
                        </div>
                        <span className="font-medium">{tool.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        ${(tool.cost / tool.usage).toFixed(3)}/req
                      </span>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}