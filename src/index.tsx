import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { translations, type Language } from './i18n'

const app = new Hono()

// CORS 설정
app.use('/api/*', cors())

// 정적 파일 제공
app.use('/static/*', serveStatic({ root: './' }))

// API: 이미지 분석 (시뮬레이션)
app.post('/api/analyze', async (c) => {
  try {
    const body = await c.req.json()
    const { image, type } = body
    
    // AI 분석 시뮬레이션
    const hazards = simulateAnalysis(type)
    
    return c.json({
      success: true,
      inspection_id: `INS${Date.now()}`,
      hazards,
      riskScore: calculateRiskScore(hazards),
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    return c.json({ success: false, error: 'Analysis failed' }, 500)
  }
})

// API: 리포트 생성
app.post('/api/report/generate', async (c) => {
  try {
    const body = await c.req.json()
    const { inspection_id, hazards } = body
    
    return c.json({
      success: true,
      pdf_url: `/reports/${inspection_id}.pdf`,
      report_id: inspection_id
    })
  } catch (error) {
    return c.json({ success: false, error: 'Report generation failed' }, 500)
  }
})

// API: 대시보드 데이터
app.get('/api/dashboard', (c) => {
  const data = {
    riskScore: 75,
    totalInspections: 1248,
    highRiskAlerts: 23,
    activeWorkers: 156,
    recentInspections: [
      {
        id: 'INS001',
        location: '서울 강남구 현장 A',
        date: '2025-12-26 10:30',
        riskLevel: 'high',
        hazards: ['안전모 미착용', '전선 노출']
      },
      {
        id: 'INS002',
        location: '서울 서초구 현장 B',
        date: '2025-12-26 09:15',
        riskLevel: 'medium',
        hazards: ['안전거리 위반']
      },
      {
        id: 'INS003',
        location: '경기 성남시 현장 C',
        date: '2025-12-26 08:45',
        riskLevel: 'low',
        hazards: []
      }
    ],
    sitesRiskScores: [
      { site: '현장 A', score: 85, trend: '+5' },
      { site: '현장 B', score: 72, trend: '-3' },
      { site: '현장 C', score: 45, trend: '0' }
    ]
  }
  
  return c.json(data)
})

// 메인 페이지
app.get('/', (c) => {
  const lang = (c.req.query('lang') as Language) || 'ko'
  const t = translations[lang]
  
  return c.html(`
    <!DOCTYPE html>
    <html lang="${lang}">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${t.appName} - 산업 안전 플랫폼</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script>
          tailwind.config = {
            theme: {
              extend: {
                colors: {
                  'brand-blue': '#024D9D',
                  'brand-yellow': '#FFB800',
                  'brand-red': '#D72638',
                  'brand-green': '#2BA84A',
                  'brand-bg': '#F3F6FA',
                  'brand-text': '#6B7685'
                }
              }
            }
          }
        </script>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          body {
            font-family: 'Inter', sans-serif;
          }
          .stat-card {
            transition: transform 0.2s, box-shadow 0.2s;
          }
          .stat-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          }
          .risk-badge-high {
            background: #D72638;
            color: white;
            padding: 4px 12px;
            border-radius: 6px;
            font-weight: 600;
            font-size: 12px;
          }
          .risk-badge-medium {
            background: #FFB800;
            color: white;
            padding: 4px 12px;
            border-radius: 6px;
            font-weight: 600;
            font-size: 12px;
          }
          .risk-badge-low {
            background: #2BA84A;
            color: white;
            padding: 4px 12px;
            border-radius: 6px;
            font-weight: 600;
            font-size: 12px;
          }
          .btn-primary {
            background: #024D9D;
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            font-weight: 600;
            transition: background 0.2s;
          }
          .btn-primary:hover {
            background: #023875;
          }
          .feature-card {
            border: 2px solid #E5E7EB;
            border-radius: 10px;
            padding: 24px;
            transition: all 0.3s;
          }
          .feature-card:hover {
            border-color: #024D9D;
            box-shadow: 0 4px 12px rgba(2, 77, 157, 0.1);
          }
        </style>
    </head>
    <body class="bg-brand-bg">
        <!-- 헤더 네비게이션 -->
        <nav class="bg-white shadow-md">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <div class="flex items-center">
                        <i class="fas fa-shield-alt text-brand-blue text-2xl mr-3"></i>
                        <span class="text-2xl font-bold text-brand-blue">${t.appName}</span>
                    </div>
                    <div class="hidden md:flex space-x-6">
                        <a href="#home" class="text-gray-700 hover:text-brand-blue font-medium">${t.home}</a>
                        <a href="#detection" class="text-gray-700 hover:text-brand-blue font-medium">${t.detection}</a>
                        <a href="#inspection" class="text-gray-700 hover:text-brand-blue font-medium">${t.inspection}</a>
                        <a href="#reports" class="text-gray-700 hover:text-brand-blue font-medium">${t.reports}</a>
                        <a href="#matching" class="text-gray-700 hover:text-brand-blue font-medium">${t.matching}</a>
                        <a href="#console" class="text-gray-700 hover:text-brand-blue font-medium">${t.console}</a>
                    </div>
                    <div class="flex items-center space-x-4">
                        <select id="langSelector" class="border border-gray-300 rounded-md px-3 py-1">
                            <option value="ko" ${lang === 'ko' ? 'selected' : ''}>한국어</option>
                            <option value="en" ${lang === 'en' ? 'selected' : ''}>English</option>
                            <option value="zh" ${lang === 'zh' ? 'selected' : ''}>中文</option>
                            <option value="ja" ${lang === 'ja' ? 'selected' : ''}>日本語</option>
                            <option value="de" ${lang === 'de' ? 'selected' : ''}>Deutsch</option>
                            <option value="es" ${lang === 'es' ? 'selected' : ''}>Español</option>
                        </select>
                    </div>
                </div>
            </div>
        </nav>

        <!-- 메인 대시보드 -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <!-- 통계 카드 -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div class="stat-card bg-white rounded-lg shadow p-6">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-brand-text text-sm font-medium">${t.riskScore}</p>
                            <p class="text-3xl font-bold text-gray-900 mt-1" id="riskScore">--</p>
                        </div>
                        <div class="bg-brand-blue bg-opacity-10 rounded-full p-3">
                            <i class="fas fa-exclamation-triangle text-brand-blue text-xl"></i>
                        </div>
                    </div>
                </div>
                
                <div class="stat-card bg-white rounded-lg shadow p-6">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-brand-text text-sm font-medium">${t.totalInspections}</p>
                            <p class="text-3xl font-bold text-gray-900 mt-1" id="totalInspections">--</p>
                        </div>
                        <div class="bg-brand-green bg-opacity-10 rounded-full p-3">
                            <i class="fas fa-clipboard-check text-brand-green text-xl"></i>
                        </div>
                    </div>
                </div>
                
                <div class="stat-card bg-white rounded-lg shadow p-6">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-brand-text text-sm font-medium">${t.highRiskAlerts}</p>
                            <p class="text-3xl font-bold text-gray-900 mt-1" id="highRiskAlerts">--</p>
                        </div>
                        <div class="bg-brand-red bg-opacity-10 rounded-full p-3">
                            <i class="fas fa-bell text-brand-red text-xl"></i>
                        </div>
                    </div>
                </div>
                
                <div class="stat-card bg-white rounded-lg shadow p-6">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-brand-text text-sm font-medium">${t.activeWorkers}</p>
                            <p class="text-3xl font-bold text-gray-900 mt-1" id="activeWorkers">--</p>
                        </div>
                        <div class="bg-brand-yellow bg-opacity-10 rounded-full p-3">
                            <i class="fas fa-users text-brand-yellow text-xl"></i>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 주요 기능 섹션 -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <!-- 공사 현장 안전 감지 -->
                <div id="detection" class="feature-card bg-white">
                    <div class="flex items-center mb-4">
                        <i class="fas fa-hard-hat text-brand-blue text-2xl mr-3"></i>
                        <h2 class="text-xl font-bold text-gray-900">${t.constructionSafety}</h2>
                    </div>
                    <p class="text-brand-text mb-4">${t.uploadImageDescription}</p>
                    
                    <div class="space-y-3 mb-4">
                        <div class="flex items-center text-sm">
                            <i class="fas fa-check-circle text-brand-green mr-2"></i>
                            <span>${t.ppeDetection}</span>
                        </div>
                        <div class="flex items-center text-sm">
                            <i class="fas fa-check-circle text-brand-green mr-2"></i>
                            <span>${t.wireExposure}</span>
                        </div>
                        <div class="flex items-center text-sm">
                            <i class="fas fa-check-circle text-brand-green mr-2"></i>
                            <span>${t.safetyDistance}</span>
                        </div>
                    </div>
                    
                    <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-4">
                        <i class="fas fa-cloud-upload-alt text-4xl text-gray-400 mb-2"></i>
                        <p class="text-sm text-gray-600">${t.uploadImage}</p>
                        <input type="file" id="constructionImage" accept="image/*" class="hidden">
                        <button onclick="document.getElementById('constructionImage').click()" 
                                class="btn-primary mt-3">
                            <i class="fas fa-camera mr-2"></i>${t.startCamera}
                        </button>
                    </div>
                    
                    <button onclick="analyzeImage('construction')" class="btn-primary w-full">
                        <i class="fas fa-search mr-2"></i>${t.analyzeNow}
                    </button>
                </div>

                <!-- 건물 시설 유지보수 진단 -->
                <div id="inspection" class="feature-card bg-white">
                    <div class="flex items-center mb-4">
                        <i class="fas fa-building text-brand-blue text-2xl mr-3"></i>
                        <h2 class="text-xl font-bold text-gray-900">${t.facilityDiagnosis}</h2>
                    </div>
                    <p class="text-brand-text mb-4">${t.uploadImageDescription}</p>
                    
                    <div class="space-y-3 mb-4">
                        <div class="flex items-center text-sm">
                            <i class="fas fa-check-circle text-brand-green mr-2"></i>
                            <span>${t.crackDetection}</span>
                        </div>
                        <div class="flex items-center text-sm">
                            <i class="fas fa-check-circle text-brand-green mr-2"></i>
                            <span>${t.waterLeakage}</span>
                        </div>
                        <div class="flex items-center text-sm">
                            <i class="fas fa-check-circle text-brand-green mr-2"></i>
                            <span>${t.moldDetection}</span>
                        </div>
                    </div>
                    
                    <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-4">
                        <i class="fas fa-cloud-upload-alt text-4xl text-gray-400 mb-2"></i>
                        <p class="text-sm text-gray-600">${t.uploadImage}</p>
                        <input type="file" id="facilityImage" accept="image/*" class="hidden">
                        <button onclick="document.getElementById('facilityImage').click()" 
                                class="btn-primary mt-3">
                            <i class="fas fa-camera mr-2"></i>${t.startCamera}
                        </button>
                    </div>
                    
                    <button onclick="analyzeImage('facility')" class="btn-primary w-full">
                        <i class="fas fa-search mr-2"></i>${t.analyzeNow}
                    </button>
                </div>
            </div>

            <!-- 최근 점검 기록 -->
            <div id="reports" class="bg-white rounded-lg shadow p-6 mb-8">
                <div class="flex items-center justify-between mb-6">
                    <h2 class="text-xl font-bold text-gray-900">
                        <i class="fas fa-list-alt text-brand-blue mr-2"></i>
                        ${t.inspectionReport}
                    </h2>
                    <button class="text-brand-blue font-medium">
                        <i class="fas fa-download mr-1"></i>${t.downloadPDF}
                    </button>
                </div>
                
                <div id="recentInspections" class="space-y-4">
                    <!-- 동적으로 로드됨 -->
                </div>
            </div>

            <!-- 기술자 매칭 섹션 -->
            <div id="matching" class="bg-white rounded-lg shadow p-6 mb-8">
                <div class="flex items-center mb-6">
                    <i class="fas fa-user-cog text-brand-blue text-2xl mr-3"></i>
                    <h2 class="text-xl font-bold text-gray-900">${t.technicianMatching}</h2>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="border border-gray-200 rounded-lg p-4 text-center hover:border-brand-blue cursor-pointer">
                        <i class="fas fa-wrench text-3xl text-brand-blue mb-2"></i>
                        <p class="font-medium">${t.findTechnician}</p>
                    </div>
                    <div class="border border-gray-200 rounded-lg p-4 text-center hover:border-brand-blue cursor-pointer">
                        <i class="fas fa-file-invoice-dollar text-3xl text-brand-yellow mb-2"></i>
                        <p class="font-medium">${t.requestQuote}</p>
                    </div>
                    <div class="border border-gray-200 rounded-lg p-4 text-center hover:border-brand-blue cursor-pointer">
                        <i class="fas fa-chart-line text-3xl text-brand-green mb-2"></i>
                        <p class="font-medium">${t.comparePrice}</p>
                    </div>
                </div>
            </div>

            <!-- 기업 콘솔 섹션 -->
            <div id="console" class="bg-white rounded-lg shadow p-6">
                <div class="flex items-center mb-6">
                    <i class="fas fa-tachometer-alt text-brand-blue text-2xl mr-3"></i>
                    <h2 class="text-xl font-bold text-gray-900">${t.companyConsole}</h2>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <h3 class="font-medium text-gray-900 mb-3">${t.siteManagement}</h3>
                        <div id="sitesRiskScores" class="space-y-2">
                            <!-- 동적으로 로드됨 -->
                        </div>
                    </div>
                    <div>
                        <h3 class="font-medium text-gray-900 mb-3">${t.userManagement}</h3>
                        <p class="text-brand-text text-sm">관리자: 5명</p>
                        <p class="text-brand-text text-sm">현장책임자: 12명</p>
                        <p class="text-brand-text text-sm">작업자: 156명</p>
                    </div>
                    <div>
                        <h3 class="font-medium text-gray-900 mb-3">${t.analytics}</h3>
                        <p class="text-brand-text text-sm">이번 달 점검: 342건</p>
                        <p class="text-brand-text text-sm">위험요소 발견: 87건</p>
                        <p class="text-brand-text text-sm">조치 완료: 64건</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- 푸터 -->
        <footer class="bg-white border-t border-gray-200 mt-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <p class="text-center text-brand-text text-sm">
                    © 2025 SafeVision Pro. All rights reserved. | 산업 안전 플랫폼
                </p>
            </div>
        </footer>

        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script>
          // 언어 변경
          document.getElementById('langSelector').addEventListener('change', (e) => {
            window.location.href = '/?lang=' + e.target.value
          })
          
          // 대시보드 데이터 로드
          async function loadDashboard() {
            try {
              const response = await axios.get('/api/dashboard')
              const data = response.data
              
              document.getElementById('riskScore').textContent = data.riskScore
              document.getElementById('totalInspections').textContent = data.totalInspections.toLocaleString()
              document.getElementById('highRiskAlerts').textContent = data.highRiskAlerts
              document.getElementById('activeWorkers').textContent = data.activeWorkers
              
              // 최근 점검 기록
              const inspectionsHtml = data.recentInspections.map(item => \`
                <div class="border border-gray-200 rounded-lg p-4">
                  <div class="flex justify-between items-start mb-2">
                    <div>
                      <p class="font-medium text-gray-900">\${item.location}</p>
                      <p class="text-sm text-brand-text">\${item.date}</p>
                    </div>
                    <span class="risk-badge-\${item.riskLevel}">\${item.riskLevel.toUpperCase()}</span>
                  </div>
                  <div class="flex flex-wrap gap-2">
                    \${item.hazards.map(h => \`<span class="text-xs bg-gray-100 px-2 py-1 rounded">\${h}</span>\`).join('')}
                  </div>
                </div>
              \`).join('')
              document.getElementById('recentInspections').innerHTML = inspectionsHtml
              
              // 현장별 위험도
              const sitesHtml = data.sitesRiskScores.map(site => \`
                <div class="flex justify-between items-center text-sm">
                  <span>\${site.site}</span>
                  <span class="font-medium">\${site.score} <span class="text-xs text-brand-text">(\${site.trend})</span></span>
                </div>
              \`).join('')
              document.getElementById('sitesRiskScores').innerHTML = sitesHtml
            } catch (error) {
              console.error('Dashboard load error:', error)
            }
          }
          
          // 이미지 분석
          async function analyzeImage(type) {
            try {
              const response = await axios.post('/api/analyze', {
                image: 'sample_image_data',
                type: type
              })
              
              const data = response.data
              alert(\`분석 완료!\\n\\n검사 ID: \${data.inspection_id}\\n위험도 점수: \${data.riskScore}\\n감지된 위험요소: \${data.hazards.length}개\\n\\n리포트를 생성하시겠습니까?\`)
              
              // 대시보드 새로고침
              loadDashboard()
            } catch (error) {
              console.error('Analysis error:', error)
              alert('분석 중 오류가 발생했습니다.')
            }
          }
          
          // 페이지 로드 시 대시보드 로드
          loadDashboard()
        </script>
    </body>
    </html>
  `)
})

// 분석 시뮬레이션 함수
function simulateAnalysis(type: string) {
  if (type === 'construction') {
    return [
      { type: 'helmet_missing', risk: 'high', location: 'Zone A' },
      { type: 'wire_exposure', risk: 'medium', location: 'Zone B' },
      { type: 'unsafe_distance', risk: 'low', location: 'Zone C' }
    ]
  } else {
    return [
      { type: 'crack_detected', risk: 'high', location: 'Wall Section 3' },
      { type: 'water_leakage', risk: 'medium', location: 'Ceiling Area' },
      { type: 'mold_detected', risk: 'low', location: 'Corner Section' }
    ]
  }
}

// 위험도 점수 계산
function calculateRiskScore(hazards: any[]) {
  const weights = { high: 30, medium: 20, low: 10 }
  return hazards.reduce((sum, h) => sum + (weights[h.risk as keyof typeof weights] || 0), 0)
}

export default app
