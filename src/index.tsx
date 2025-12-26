import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

// CORS 설정
app.use('/api/*', cors())

// 정적 파일 제공
app.use('/static/*', serveStatic({ root: './' }))
app.use('/assets/*', serveStatic({ root: './dist' }))

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

// 메인 페이지 - React 앱 제공
app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Safe Pro - 산업 안전 플랫폼</title>
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
            border: none;
            cursor: pointer;
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
    <body>
        <div id="root"></div>
        <script type="module" src="/assets/client.js"></script>
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
