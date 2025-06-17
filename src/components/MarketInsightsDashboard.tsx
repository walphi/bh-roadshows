import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Chart } from '@/components/ui/chart';
import { Badge } from '@/components/ui/badge';
import {
  TrendingUp,
  BarChart3,
  PieChart,
  FileText,
  Download,
  Info,
  ArrowUpRight,
  ArrowDownRight,
  Building2,
  Home,
  MapPin,
  Award,
  TrendingDown
} from 'lucide-react';

const MarketInsightsDashboard = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [investmentAmount, setInvestmentAmount] = useState(2000000);
  const [propertyType, setPropertyType] = useState('apartment');
  const [location, setLocation] = useState('dubai-marina');
  
  // Updated data for charts reflecting general Dubai Offplan Market
  const dubaiOffplanPriceHistoryData = {
    labels: ['2021', '2022', '2023', '2024', '2025 (Projected)'],
    datasets: [
      {
        label: 'Avg. Offplan Price (AED/sqft)',
        data: [1200, 1350, 1550, 1750, 1950],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  const dubaiOffplanRentalYieldData = {
    labels: ['Studio', '1 Bed Apt', '2 Bed Apt', 'Townhouse', 'Villa'],
    datasets: [
      {
        label: 'Potential Offplan Rental Yield (%)',
        data: [8.5, 8.0, 7.5, 6.8, 6.2],
        backgroundColor: 'rgba(255, 159, 64, 0.8)',
      },
    ],
  };

  const dubaiOffplanSupplyDemandData = {
    labels: ['Q3 2024', 'Q4 2024', 'Q1 2025', 'Q2 2025', 'Q3 2025 (Proj.)'],
    datasets: [
      {
        label: 'Offplan Supply (New Units)',
        data: [7500, 8200, 8800, 9500, 10200],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 1,
        yAxisID: 'y',
      },
      {
        label: 'Offplan Demand Index (0-100)',
        data: [78, 82, 85, 88, 90],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y1',
      },
    ],
  };

  const sobhaPerformanceData = { // This remains specific to Sobha
    labels: ['On-Time Completion', 'Quality Score (out of 100)', '5-Yr Avg. Appreciation', 'Investor Satisfaction'],
    datasets: [
      {
        label: 'Sobha Realty',
        data: [98, 95, 92, 96],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgb(153, 102, 255)',
        borderWidth: 1,
      },
      {
        label: 'Industry Average',
        data: [82, 78, 75, 80],
        backgroundColor: 'rgba(201, 203, 207, 0.6)',
        borderColor: 'rgb(201, 203, 207)',
        borderWidth: 1,
      },
    ],
  };

  // ROI Calculator (using more generic offplan ROI assumptions)
  const calculateROI = () => {
    let baseROI = 0; // Potential average ROI for offplan
    
    if (propertyType === 'apartment') baseROI = 8.0; // Higher for offplan apartments
    else if (propertyType === 'villa') baseROI = 6.5; // Good ROI for offplan villas
    else if (propertyType === 'penthouse') baseROI = 7.0; // Premium offplan penthouses
    
    // Location can still influence offplan ROI
    if (location === 'dubai-marina') baseROI += 0.5;
    else if (location === 'palm-jumeirah') baseROI += 0.2;
    else if (location === 'downtown-dubai') baseROI += 0.7;
    else if (location === 'sobha-hartland') baseROI += 0.6; // Adding Sobha Hartland as an option

    const yearlyAppreciation = baseROI / 100;
    const fiveYearValue = investmentAmount * Math.pow(1 + yearlyAppreciation, 5);
    const totalAppreciation = fiveYearValue - investmentAmount;
    
    return {
      yearlyROI: baseROI.toFixed(1),
      fiveYearValue: fiveYearValue.toFixed(0),
      totalAppreciation: totalAppreciation.toFixed(0),
      monthlyRental: ((investmentAmount * (baseROI / 100)) / 12).toFixed(0)
    };
  };

  const roi = calculateROI();

  // Sobha Specific Data
  const sobhaProjects = [
    {
      name: "Sobha Hartland II Villas",
      priceRange: "AED 7.5M - 30M+",
      usp: "Exclusive forest sanctuary, waterfront villas and mansions, premium amenities.",
      icon: Building2
    },
    {
      name: "Sobha Seahaven (Sky Edition)",
      priceRange: "AED 3.5M - 20M+",
      usp: "Ultra-luxury apartments with iconic sea & city views, exclusive Sky Edition features.",
      icon: Building2
    },
    {
      name: "Sobha Reserve",
      priceRange: "AED 7.6M - 15M+",
      usp: "Lush green gated community, spacious villas with private facilities, nature-inspired living.",
      icon: Home
    },
  ];

  const sobhaUSPs = [
    "Backward Integration: Ensuring quality control from design to delivery.",
    "Prime Locations: Strategically chosen for growth and lifestyle.",
    "Meticulous Craftsmanship: Attention to detail and superior finishes.",
    "Sustainable Development: Commitment to green building practices."
  ];
  
  const sobhaPopularityChartData = {
    labels: ['Hartland II', 'Seahaven', 'Sobha Reserve', 'Creek Vistas Heights'],
    datasets: [
      {
        label: 'Investor Interest Score (Higher is Better)',
        data: [92, 88, 85, 80],
        backgroundColor: [
          'rgba(153, 102, 255, 0.7)',
          'rgba(255, 159, 64, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(54, 162, 235, 0.7)',
        ],
        borderColor: [
          'rgb(153, 102, 255)',
          'rgb(255, 159, 64)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
        ],
        borderWidth: 1,
      },
    ],
  };


  // Research reports
  const researchReports = [
    {
      title: "Dubai Luxury Property Investment Outlook 2025 for European HNWIs",
      description: "Comprehensive analysis of Dubai's luxury real estate market with specific insights for European investors.",
      date: "May 2025",
      type: "PDF"
    },
    {
      title: "Sobha Realty's Masterplan Vision",
      description: "Detailed overview of Sobha's development strategy and upcoming premium projects.",
      date: "April 2025",
      type: "PDF"
    },
    {
      title: "Tax Benefits Guide for Dutch Investors in Dubai Real Estate",
      description: "Comparative analysis of tax implications for Dutch nationals investing in Dubai property.",
      date: "March 2025",
      type: "PDF"
    },
    {
      title: "Dubai Infrastructure Development Impact on Property Values",
      description: "Analysis of how major infrastructure projects affect long-term property appreciation.",
      date: "February 2025",
      type: "PDF"
    }
  ];

  const handleRegisterClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById('contact');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFullAccessClick = () => {
    navigate('/register');
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="mb-4 bg-bh-coral text-white hover:bg-bh-coral/90 px-4 py-1 text-sm">EXCLUSIVE</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-bh-navy mb-4 hover:text-bh-coral transition-colors duration-300 cursor-default">
            Dubai Market Insights
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Access premium market intelligence and data-driven insights to inform your Dubai real estate investment decisions.
          </p>
        </div>

        <Tabs defaultValue="roi-calculator" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
            <TabsTrigger value="roi-calculator" className="data-[state=active]:bg-bh-navy data-[state=active]:text-white">
              <BarChart3 className="mr-2 h-4 w-4" />
              ROI Calculator
            </TabsTrigger>
            <TabsTrigger value="market-analytics" className="data-[state=active]:bg-bh-navy data-[state=active]:text-white">
              <TrendingUp className="mr-2 h-4 w-4" />
              Market Analytics
            </TabsTrigger>
            <TabsTrigger value="tax-legal" className="data-[state=active]:bg-bh-navy data-[state=active]:text-white">
              <FileText className="mr-2 h-4 w-4" />
              Tax & Legal
            </TabsTrigger>
            <TabsTrigger value="research" className="data-[state=active]:bg-bh-navy data-[state=active]:text-white">
              <PieChart className="mr-2 h-4 w-4" />
              Research Reports
            </TabsTrigger>
          </TabsList>

          {/* Market Analytics Tab */}
          <TabsContent value="market-analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <Card className="hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium flex items-center text-bh-navy">
                    <ArrowUpRight className="mr-2 h-5 w-5 text-green-500" />
                    Offplan Price Growth (YoY)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-bh-navy">15.2%</div>
                  <p className="text-sm text-gray-500">Dubai Offplan Market (2024)</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium flex items-center text-bh-navy">
                    <TrendingUp className="mr-2 h-5 w-5 text-green-500" />
                    Potential Offplan ROI
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-bh-navy">8-12%</div>
                  <p className="text-sm text-gray-500">Typical for new launches</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium flex items-center text-bh-navy">
                    <BarChart3 className="mr-2 h-5 w-5 text-blue-500" />
                    Offplan Sales Volume
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-bh-navy">+22%</div>
                  <p className="text-sm text-gray-500">Increase Q1 2025 vs Q1 2024</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-bh-navy">Dubai Offplan Price Trends (Avg. AED/sqft)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <Chart
                      type="line"
                      data={dubaiOffplanPriceHistoryData}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                          legend: {
                            position: 'top',
                          },
                          tooltip: {
                            mode: 'index',
                            intersect: false,
                          },
                        },
                        scales: {
                          y: {
                            title: {
                              display: true,
                              text: 'Price (AED/sqft)'
                            }
                          }
                        }
                      }}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-bh-navy">Potential Offplan Rental Yields by Type</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <Chart
                      type="bar"
                      data={dubaiOffplanRentalYieldData}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                          legend: {
                            position: 'top',
                          },
                        },
                        scales: {
                          y: {
                            beginAtZero: true,
                            title: {
                              display: true,
                              text: 'Yield (%)'
                            }
                          }
                        }
                      }}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-bh-navy">Dubai Offplan Supply vs Demand</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <Chart
                      type="bar"
                      data={dubaiOffplanSupplyDemandData}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                          legend: {
                            position: 'top',
                          },
                        },
                        scales: {
                          y: {
                            type: 'linear',
                            display: true,
                            position: 'left',
                            title: {
                              display: true,
                              text: 'Supply (Units)'
                            }
                          },
                          y1: {
                            type: 'linear',
                            display: true,
                            position: 'right',
                            grid: {
                              drawOnChartArea: false,
                            },
                            title: {
                              display: true,
                              text: 'Demand Index'
                            },
                            min: 70,
                            max: 100
                          },
                        }
                      }}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-bh-navy">Sobha Realty Performance Metrics (%)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <Chart
                      type="radar"
                      data={sobhaPerformanceData}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                          legend: {
                            position: 'top',
                          },
                        },
                        scales: {
                          r: {
                            min: 50,
                            max: 100,
                            ticks: {
                              stepSize: 10
                            }
                          }
                        }
                      }}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sobha Realty Specific Section */}
            <div className="mt-12">
              <div className="text-center mb-8">
                <Badge className="mb-4 bg-bh-coral text-white hover:bg-bh-coral/90 px-4 py-1 text-sm">DEVELOPER SPOTLIGHT</Badge>
                <h3 className="text-2xl md:text-3xl font-bold text-bh-navy mb-3">
                  Sobha Realty: Investing in Excellence
                </h3>
                <p className="text-md text-gray-600 max-w-2xl mx-auto">
                  Discover why Sobha Realty stands out in Dubai's luxury property market, known for its quality, innovation, and prime developments.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {sobhaProjects.map((project, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
                    <CardHeader>
                      <CardTitle className="text-lg font-medium flex items-center">
                        <project.icon className="mr-2 h-5 w-5 text-bh-coral" />
                        {project.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 mb-1"><span className="font-semibold">Price:</span> {project.priceRange}</p>
                      <p className="text-sm text-gray-500"><span className="font-semibold">Key USP:</span> {project.usp}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle>Sobha Realty: Unique Selling Propositions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {sobhaUSPs.map((usp, index) => (
                        <li key={index} className="flex items-start">
                          <Award className="h-5 w-5 text-bh-coral mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{usp}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle>Popular Sobha Offplan Projects (Investor Interest)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <Chart
                        type="doughnut"
                        data={sobhaPopularityChartData}
                        options={{
                          responsive: true,
                          maintainAspectRatio: false,
                          plugins: {
                            legend: {
                              position: 'bottom',
                            },
                            tooltip: {
                              callbacks: {
                                label: function(context) {
                                  let label = context.dataset.label || '';
                                  if (label) {
                                    label += ': ';
                                  }
                                  if (context.parsed !== null) {
                                    label += context.parsed;
                                  }
                                  return label;
                                }
                              }
                            }
                          },
                        }}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* ROI Calculator Tab */}
          <TabsContent value="roi-calculator">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle className="text-bh-navy">Investment Parameters</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Investment Amount (AED)
                    </label>
                    <div className="flex items-center space-x-4">
                      <Slider
                        value={[investmentAmount]}
                        min={500000}
                        max={10000000}
                        step={100000}
                        onValueChange={(value) => setInvestmentAmount(value[0])}
                        className="flex-1"
                      />
                      <span className="text-bh-navy font-medium">
                        {investmentAmount.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Property Type
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <Button
                        variant={propertyType === 'apartment' ? 'default' : 'outline'}
                        className={propertyType === 'apartment' ? 'bg-bh-navy text-white' : ''}
                        onClick={() => setPropertyType('apartment')}
                      >
                        <Building2 className="mr-2 h-4 w-4" />
                        Apartment
                      </Button>
                      <Button
                        variant={propertyType === 'villa' ? 'default' : 'outline'}
                        className={propertyType === 'villa' ? 'bg-bh-navy text-white' : ''}
                        onClick={() => setPropertyType('villa')}
                      >
                        <Home className="mr-2 h-4 w-4" />
                        Villa
                      </Button>
                      <Button
                        variant={propertyType === 'penthouse' ? 'default' : 'outline'}
                        className={propertyType === 'penthouse' ? 'bg-bh-navy text-white' : ''}
                        onClick={() => setPropertyType('penthouse')}
                      >
                        <Building2 className="mr-2 h-4 w-4" />
                        Penthouse
                      </Button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        variant={location === 'dubai-marina' ? 'default' : 'outline'}
                        className={location === 'dubai-marina' ? 'bg-bh-navy text-white' : ''}
                        onClick={() => setLocation('dubai-marina')}
                      >
                        <MapPin className="mr-2 h-4 w-4" />
                        Dubai Marina
                      </Button>
                      <Button
                        variant={location === 'palm-jumeirah' ? 'default' : 'outline'}
                        className={location === 'palm-jumeirah' ? 'bg-bh-navy text-white' : ''}
                        onClick={() => setLocation('palm-jumeirah')}
                      >
                        <MapPin className="mr-2 h-4 w-4" />
                        Palm Jumeirah
                      </Button>
                      <Button
                        variant={location === 'downtown-dubai' ? 'default' : 'outline'}
                        className={location === 'downtown-dubai' ? 'bg-bh-navy text-white' : ''}
                        onClick={() => setLocation('downtown-dubai')}
                      >
                        <MapPin className="mr-2 h-4 w-4" />
                        Downtown Dubai
                      </Button>
                      <Button
                        variant={location === 'sobha-hartland' ? 'default' : 'outline'}
                        className={location === 'sobha-hartland' ? 'bg-bh-navy text-white' : ''}
                        onClick={() => setLocation('sobha-hartland')}
                      >
                        <MapPin className="mr-2 h-4 w-4" />
                        Sobha Hartland
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="text-bh-navy">Projected Returns</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-6">
                    <Card className="bg-gray-50 hover:shadow-md transition-all duration-300 transform hover:scale-[1.02]">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-medium">Annual ROI</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-4xl font-bold text-bh-navy">{roi.yearlyROI}%</div>
                        <p className="text-sm text-gray-500">Based on current market conditions</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-50 hover:shadow-md transition-all duration-300 transform hover:scale-[1.02]">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-medium">Monthly Rental Income</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-4xl font-bold text-bh-navy">AED {roi.monthlyRental}</div>
                        <p className="text-sm text-gray-500">Estimated monthly rental</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-50 hover:shadow-md transition-all duration-300 transform hover:scale-[1.02]">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-medium">5-Year Value</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-4xl font-bold text-bh-navy">AED {parseInt(roi.fiveYearValue).toLocaleString()}</div>
                        <p className="text-sm text-gray-500">Projected property value in 5 years</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-50 hover:shadow-md transition-all duration-300 transform hover:scale-[1.02]">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-medium">Total Appreciation</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-4xl font-bold text-bh-navy">AED {parseInt(roi.totalAppreciation).toLocaleString()}</div>
                        <p className="text-sm text-gray-500">Projected 5-year capital gain</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="mt-6 bg-bh-navy/5 p-4 rounded-lg">
                    <div className="flex items-start">
                      <Info className="h-5 w-5 text-bh-navy mr-2 mt-0.5" />
                      <p className="text-sm text-gray-600">
                        This calculator provides estimates based on current market data and historical trends. 
                        Actual returns may vary. For a personalized investment analysis, please book a consultation 
                        with our experts during the roadshow.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Tax & Legal Tab */}
          <TabsContent value="tax-legal">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-bh-navy">Tax Benefits for Foreign Investors</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-full mr-3">
                        <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-bh-navy">Zero Income Tax</h4>
                        <p className="text-gray-600">No tax on rental income from Dubai properties, maximizing your investment returns.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-full mr-3">
                        <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-bh-navy">No Capital Gains Tax</h4>
                        <p className="text-gray-600">Profit from property appreciation is not subject to capital gains tax.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-full mr-3">
                        <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-bh-navy">No Property Tax</h4>
                        <p className="text-gray-600">Dubai does not impose annual property taxes, reducing ongoing ownership costs.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-full mr-3">
                        <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-bh-navy">Minimal Transaction Fees</h4>
                        <p className="text-gray-600">Low registration fees (4% of property value) compared to many European countries.</p>
                      </div>
                    </li>
                  </ul>

                  <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-bh-navy flex items-center">
                      <Info className="h-5 w-5 mr-2" />
                      Note for Dutch Investors
                    </h4>
                    <p className="text-gray-600 mt-1">
                      Dutch nationals may still be subject to wealth tax in the Netherlands on worldwide assets. 
                      We recommend consulting with a tax advisor for personalized guidance on optimizing your 
                      international investment strategy.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-bh-navy">Legal Protections for Off-Plan Investors</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-3">
                        <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-bh-navy">Escrow Account System</h4>
                        <p className="text-gray-600">All off-plan payments are secured in regulated escrow accounts, released to developers only as construction milestones are achieved.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-3">
                        <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-bh-navy">RERA Registration</h4>
                        <p className="text-gray-600">All off-plan projects must be registered with the Real Estate Regulatory Agency, ensuring they meet strict development standards.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-3">
                        <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-bh-navy">Investor-Friendly Contracts</h4>
                        <p className="text-gray-600">Sale and Purchase Agreements (SPAs) are standardized and regulated to protect buyer interests.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-3">
                        <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-bh-navy">Compensation Mechanisms</h4>
                        <p className="text-gray-600">Legal frameworks for compensation in case of significant delays or material changes to the promised specifications.</p>
                      </div>
                    </li>
                  </ul>

                  <div className="mt-6 bg-bh-navy/5 p-4 rounded-lg">
                    <h4 className="font-semibold text-bh-navy">Sobha Realty Advantage</h4>
                    <p className="text-gray-600 mt-1">
                      Sobha Realty has a proven track record of 98% on-time delivery and maintains quality standards 
                      that exceed regulatory requirements, providing an additional layer of security for investors.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Research Reports Tab */}
          <TabsContent value="research">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {researchReports.map((report, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:scale-[1.01]">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="bg-bh-navy/10 p-3 rounded-lg mr-4">
                        <FileText className="h-6 w-6 text-bh-navy" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-bh-navy mb-2">{report.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{report.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{report.date} • {report.type}</span>
                          <Button variant="outline" className="text-bh-coral border-bh-coral hover:bg-bh-coral hover:text-white" onClick={handleRegisterClick}>
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 bg-bh-navy text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Premium Research Access</h3>
              <p className="mb-4">
                Register for the roadshow to gain exclusive access to our complete library of premium research reports, 
                market analyses, and investment guides tailored specifically for high-net-worth investors.
              </p>
              <Button className="bg-bh-coral hover:bg-bh-coral/90 text-white" onClick={handleFullAccessClick}>
                Register for Full Access
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default MarketInsightsDashboard;