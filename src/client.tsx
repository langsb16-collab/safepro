import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { translations, type Language, getSavedLanguage, saveLanguage } from './i18n'
import { emergency119Translations } from './emergency-i18n'

// 메인 App 컴포넌트 - 모바일 최적화
function App() {
  const [language, setLanguage] = useState<Language>(getSavedLanguage())
  const [activeSection, setActiveSection] = useState<string>('home')
  const [dashboardData, setDashboardData] = useState<any>(null)
  const [show119Modal, setShow119Modal] = useState<boolean>(false)
  const [emergencyCountdown, setEmergencyCountdown] = useState<number>(3)
  const [emergencyType, setEmergencyType] = useState<string>('')
  const [isMonitoring, setIsMonitoring] = useState<boolean>(false)
  
  const t = translations[language]
  const e119 = emergency119Translations[language]
  
  // 언어 변경 핸들러
  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang)
    saveLanguage(newLang)
  }
  
  // 대시보드 데이터 로드
  useEffect(() => {
    fetch('/api/dashboard')
      .then(res => res.json())
      .then(data => {
        // 현장 이름 번역 적용
        if (data.recentInspections) {
          data.recentInspections = data.recentInspections.map((item: any) => ({
            ...item,
            location: t.sites?.[`site${item.location.match(/[ABC]/)?.[0]}` as keyof typeof t.sites] || item.location
          }))
        }
        setDashboardData(data)
      })
      .catch(err => console.error('Dashboard load error:', err))
  }, [language, t])
  
  // 이미지 분석
  const analyzeImage = async (type: string) => {
    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: 'sample_image_data', type })
      })
      const data = await response.json()
      alert(`${t.common?.confirm || '확인'}!\n\n검사 ID: ${data.inspection_id}\n위험도 점수: ${data.riskScore}\n감지된 위험요소: ${data.hazards.length}개`)
      
      // 대시보드 새로고침
      fetch('/api/dashboard')
        .then(res => res.json())
        .then(data => setDashboardData(data))
    } catch (error) {
      console.error('Analysis error:', error)
      alert('분석 중 오류가 발생했습니다.')
    }
  }
  
  return (
    <div className="min-h-screen bg-brand-bg">
      {/* 모바일 최적화 헤더 */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="px-3 py-2">
          <div className="flex justify-between items-center">
            {/* 로고 - 작게 */}
            <div className="flex items-center">
              <i className="fas fa-shield-alt text-brand-blue text-lg mr-2"></i>
              <div>
                <div className="text-base font-bold text-brand-blue leading-tight">{t.appName}</div>
                <div className="text-xs text-brand-text truncate max-w-[180px]">{t.appDescription}</div>
              </div>
            </div>
            
            {/* 언어 선택 드롭다운 - 스타일 개선 */}
            <select
              value={language}
              onChange={(e) => handleLanguageChange(e.target.value as Language)}
              className="bg-brand-blue text-white font-semibold border-2 border-brand-blue rounded-lg px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-brand-yellow shadow-md"
              style={{ minWidth: '80px' }}
            >
              <option value="ko" className="bg-white text-gray-900">🇰🇷 한국어</option>
              <option value="en" className="bg-white text-gray-900">🇺🇸 English</option>
              <option value="zh" className="bg-white text-gray-900">🇨🇳 中文</option>
              <option value="ja" className="bg-white text-gray-900">🇯🇵 日本語</option>
              <option value="de" className="bg-white text-gray-900">🇩🇪 Deutsch</option>
              <option value="es" className="bg-white text-gray-900">🇪🇸 Español</option>
            </select>
          </div>
          
          {/* 모바일 네비게이션 - 가로 스크롤 */}
          <div className="flex gap-1 overflow-x-auto mt-2 pb-1 scrollbar-hide">
            {[
              { id: 'home', icon: 'fa-home', label: t.nav.home },
              { id: 'emergency', icon: 'fa-ambulance', label: e119.emergency.title, color: 'text-brand-red' },
              { id: 'detection', icon: 'fa-camera', label: t.nav.detection },
              { id: 'inspection', icon: 'fa-clipboard-check', label: t.nav.inspection },
              { id: 'reports', icon: 'fa-file-alt', label: t.nav.reports },
              { id: 'matching', icon: 'fa-user-cog', label: t.nav.matching },
              { id: 'console', icon: 'fa-tachometer-alt', label: t.nav.console }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex-shrink-0 px-2 py-1 rounded text-xs font-medium whitespace-nowrap transition-colors ${
                  activeSection === item.id
                    ? 'bg-brand-blue text-white'
                    : item.id === 'emergency' 
                      ? 'bg-red-50 text-brand-red font-bold border border-brand-red'
                      : 'bg-gray-100 text-gray-700'
                }`}
              >
                <i className={`fas ${item.icon} mr-1 ${item.color || ''}`}></i>
                <span className="text-xs">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
      
      {/* 메인 컨텐츠 - 여백 축소 */}
      <div className="px-3 py-3">
        {activeSection === 'home' && <HomeSection t={t} data={dashboardData} />}
        {activeSection === 'emergency' && <Emergency119Section e119={e119} language={language} show119Modal={show119Modal} setShow119Modal={setShow119Modal} emergencyCountdown={emergencyCountdown} setEmergencyCountdown={setEmergencyCountdown} emergencyType={emergencyType} setEmergencyType={setEmergencyType} isMonitoring={isMonitoring} setIsMonitoring={setIsMonitoring} />}
        {activeSection === 'detection' && <DetectionSection t={t} onAnalyze={analyzeImage} />}
        {activeSection === 'inspection' && <InspectionSection t={t} onAnalyze={analyzeImage} />}
        {activeSection === 'reports' && <ReportsSection t={t} data={dashboardData} />}
        {activeSection === 'matching' && <MatchingSection t={t} />}
        {activeSection === 'console' && <ConsoleSection t={t} data={dashboardData} />}
      </div>
      
      {/* 푸터 - 간소화 */}
      <footer className="bg-white border-t border-gray-200 mt-6">
        <div className="px-3 py-3">
          <p className="text-center text-brand-text text-xs">
            © 2025 {t.appName}
          </p>
        </div>
      </footer>
    </div>
  )
}

// 홈 섹션 - 모바일 최적화
function HomeSection({ t, data }: any) {
  return (
    <div>
      <h1 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
        <i className="fas fa-home text-brand-blue mr-2 text-base"></i>
        {t.dashboard.title}
      </h1>
      
      {/* 통계 카드 - 2x2 그리드, 작은 크기 */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        <StatCard
          icon="fa-exclamation-triangle"
          color="brand-blue"
          title={t.dashboard.riskScore}
          value={data?.riskScore || '--'}
        />
        <StatCard
          icon="fa-clipboard-check"
          color="brand-green"
          title={t.dashboard.totalInspections}
          value={data?.totalInspections?.toLocaleString() || '--'}
        />
        <StatCard
          icon="fa-bell"
          color="brand-red"
          title={t.dashboard.highRiskAlerts}
          value={data?.highRiskAlerts || '--'}
        />
        <StatCard
          icon="fa-users"
          color="brand-yellow"
          title={t.dashboard.activeWorkers}
          value={data?.activeWorkers || '--'}
        />
      </div>
      
      {/* 최근 점검 - 간소화 */}
      <div className="bg-white rounded-lg shadow-sm p-3">
        <h2 className="text-sm font-bold text-gray-900 mb-2 flex items-center">
          <i className="fas fa-history text-brand-blue mr-1 text-xs"></i>
          {t.dashboard.recentInspections}
        </h2>
        <div className="space-y-2">
          {data?.recentInspections?.map((item: any, idx: number) => (
            <div key={idx} className="border border-gray-200 rounded p-2">
              <div className="flex justify-between items-start mb-1">
                <div className="flex-1 pr-2">
                  <p className="font-medium text-xs text-gray-900 line-clamp-1">{item.location}</p>
                  <p className="text-xs text-brand-text">{item.date}</p>
                </div>
                <span className={`risk-badge-${item.riskLevel} text-xs px-2 py-0.5`}>
                  {t.risk[item.riskLevel as keyof typeof t.risk]}
                </span>
              </div>
              {item.hazards.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {item.hazards.map((h: string, i: number) => (
                    <span key={i} className="text-xs bg-gray-100 px-1 py-0.5 rounded">{h}</span>
                  ))}
                </div>
              )}
            </div>
          )) || <p className="text-brand-text text-xs">{t.common?.loading || '로딩 중...'}</p>}
        </div>
      </div>
    </div>
  )
}

// 통계 카드 - 작은 크기
function StatCard({ icon, color, title, value }: any) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-3">
      <div className="flex flex-col">
        <div className="flex items-center justify-between mb-1">
          <p className="text-brand-text text-xs font-medium line-clamp-1">{title}</p>
          <i className={`fas ${icon} text-${color} text-sm`}></i>
        </div>
        <p className="text-xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  )
}

// 실시간 감지 섹션 - 모바일 최적화
function DetectionSection({ t, onAnalyze }: any) {
  return (
    <div>
      <h1 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
        <i className="fas fa-camera text-brand-blue mr-2 text-base"></i>
        <span className="line-clamp-1">{t.construction.title}</span>
      </h1>
      
      <p className="text-xs text-brand-text mb-3 line-clamp-2">{t.construction.description}</p>
      
      <div className="grid grid-cols-1 gap-2 mb-4">
        <FeatureCard
          icon="fa-hard-hat"
          title={t.construction.ppeDetection}
          description={t.construction.ppeDesc}
          color="brand-blue"
        />
        <FeatureCard
          icon="fa-bolt"
          title={t.construction.wireExposure}
          description={t.construction.wireDesc}
          color="brand-yellow"
        />
        <FeatureCard
          icon="fa-ruler"
          title={t.construction.safetyDistance}
          description={t.construction.safetyDistanceDesc}
          color="brand-red"
        />
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-3">
        <h3 className="font-semibold text-sm text-gray-900 mb-2">{t.construction.uploadImage}</h3>
        <p className="text-xs text-brand-text mb-2 line-clamp-2">{t.construction.uploadDesc}</p>
        <div className="flex gap-2">
          <button className="flex-1 btn-primary text-xs py-2">
            <i className="fas fa-camera mr-1"></i>
            {t.construction.startCamera}
          </button>
          <button onClick={() => onAnalyze('construction')} className="flex-1 bg-brand-green text-white text-xs py-2 px-3 rounded-lg font-semibold">
            <i className="fas fa-search mr-1"></i>
            {t.construction.analyzeNow}
          </button>
        </div>
      </div>
    </div>
  )
}

// 시설 점검 섹션 - 모바일 최적화
function InspectionSection({ t, onAnalyze }: any) {
  return (
    <div>
      <h1 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
        <i className="fas fa-clipboard-check text-brand-blue mr-2 text-base"></i>
        <span className="line-clamp-1">{t.facility.title}</span>
      </h1>
      
      <p className="text-xs text-brand-text mb-3 line-clamp-2">{t.facility.description}</p>
      
      <div className="grid grid-cols-1 gap-2 mb-4">
        <FeatureCard
          icon="fa-exclamation-triangle"
          title={t.facility.crackDetection}
          description={t.facility.crackDesc}
          color="brand-red"
        />
        <FeatureCard
          icon="fa-tint"
          title={t.facility.waterLeakage}
          description={t.facility.waterDesc}
          color="brand-blue"
        />
        <FeatureCard
          icon="fa-bug"
          title={t.facility.moldDetection}
          description={t.facility.moldDesc}
          color="brand-yellow"
        />
        <FeatureCard
          icon="fa-wrench"
          title={t.facility.pipeInspection}
          description={t.facility.pipeDesc}
          color="brand-green"
        />
      </div>
      
      <button onClick={() => onAnalyze('facility')} className="w-full btn-primary text-xs py-2">
        <i className="fas fa-search mr-1"></i>
        {t.construction.analyzeNow}
      </button>
    </div>
  )
}

// 리포트 섹션 - 모바일 최적화
function ReportsSection({ t, data }: any) {
  return (
    <div>
      <h1 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
        <i className="fas fa-file-alt text-brand-blue mr-2 text-base"></i>
        {t.report.title}
      </h1>
      
      <div className="bg-white rounded-lg shadow-sm p-3 mb-3">
        <h2 className="font-semibold text-sm text-gray-900 mb-2">{t.report.inspectionReport}</h2>
        <div className="space-y-2 text-xs">
          <div className="flex justify-between">
            <span className="text-brand-text">{t.report.inspectionDate}</span>
            <span className="font-medium">2025-12-26 14:30</span>
          </div>
          <div className="flex justify-between">
            <span className="text-brand-text">{t.report.location}</span>
            <span className="font-medium">{data?.recentInspections?.[0]?.location || t.sites?.siteA || '현장 A'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-brand-text">{t.report.hazardsDetected}</span>
            <span className="font-medium text-brand-red">{data?.highRiskAlerts || 23}개</span>
          </div>
        </div>
        
        <div className="flex gap-2 mt-3">
          <button className="flex-1 btn-primary text-xs py-2">
            <i className="fas fa-file-pdf mr-1"></i>
            {t.report.downloadPDF}
          </button>
          <button className="flex-1 bg-brand-green text-white text-xs py-2 rounded-lg font-semibold">
            <i className="fas fa-share mr-1"></i>
            {t.report.shareReport}
          </button>
        </div>
      </div>
    </div>
  )
}

// 기술자 매칭 섹션 - 모바일 최적화
function MatchingSection({ t }: any) {
  return (
    <div>
      <h1 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
        <i className="fas fa-user-cog text-brand-blue mr-2 text-base"></i>
        {t.matching.title}
      </h1>
      
      <p className="text-xs text-brand-text mb-3 line-clamp-2">{t.matching.description}</p>
      
      <div className="space-y-2">
        <FeatureCard
          icon="fa-search"
          title={t.matching.findTechnician}
          description={t.matching.findDesc}
          color="brand-blue"
        />
        <FeatureCard
          icon="fa-file-invoice"
          title={t.matching.requestQuote}
          description={t.matching.quoteDesc}
          color="brand-yellow"
        />
        <FeatureCard
          icon="fa-balance-scale"
          title={t.matching.comparePrice}
          description={t.matching.compareDesc}
          color="brand-green"
        />
      </div>
    </div>
  )
}

// 기업 콘솔 섹션 - 모바일 최적화
function ConsoleSection({ t, data }: any) {
  return (
    <div>
      <h1 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
        <i className="fas fa-tachometer-alt text-brand-blue mr-2 text-base"></i>
        {t.console.title}
      </h1>
      
      <div className="space-y-2">
        <div className="bg-white rounded-lg shadow-sm p-3">
          <h3 className="font-semibold text-sm text-gray-900 mb-2">
            <i className="fas fa-building text-brand-blue mr-1 text-xs"></i>
            {t.console.siteManagement}
          </h3>
          <p className="text-xs text-brand-text line-clamp-2">{t.console.siteDesc}</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-3">
          <h3 className="font-semibold text-sm text-gray-900 mb-2">
            <i className="fas fa-users text-brand-yellow mr-1 text-xs"></i>
            {t.console.userManagement}
          </h3>
          <p className="text-xs text-brand-text line-clamp-2">{t.console.userDesc}</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-3">
          <h3 className="font-semibold text-sm text-gray-900 mb-2">
            <i className="fas fa-chart-line text-brand-green mr-1 text-xs"></i>
            {t.console.analytics}
          </h3>
          <p className="text-xs text-brand-text line-clamp-2">{t.console.analyticsDesc}</p>
        </div>
      </div>
    </div>
  )
}

// 119 긴급신고 섹션 - 모바일 최적화 (간단한 버전)
function Emergency119Section({ e119, language, show119Modal, setShow119Modal, emergencyCountdown, setEmergencyCountdown, emergencyType, setEmergencyType, isMonitoring, setIsMonitoring }: any) {
  const [emergencyLogs, setEmergencyLogs] = useState<any[]>([])

  // 긴급 상황 시뮬레이션
  const triggerEmergency = (type: string) => {
    setEmergencyType(type)
    setShow119Modal(true)
    setEmergencyCountdown(5)
    
    const timer = setInterval(() => {
      setEmergencyCountdown((prev: number) => {
        if (prev <= 1) {
          clearInterval(timer)
          report119(type)
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  const report119 = async (type: string) => {
    const report = {
      id: `EMG${Date.now()}`,
      type,
      timestamp: new Date().toISOString(),
      location: { lat: 37.5665, lng: 126.9780 },
      status: 'reported'
    }
    
    setEmergencyLogs([report, ...emergencyLogs])
    setShow119Modal(false)
    
    try {
      await fetch('/api/emergency/report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(report)
      })
    } catch (error) {
      console.error('119 report error:', error)
    }
  }

  return (
    <div>
      <h1 className="text-lg font-bold text-brand-red mb-3 flex items-center">
        <i className="fas fa-ambulance mr-2 text-base"></i>
        {e119.emergency.title}
      </h1>
      
      <p className="text-xs text-brand-text mb-3 line-clamp-2">{e119.emergency.subtitle}</p>
      
      {/* 긴급 감지 버튼들 - 2x2 그리드 */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        <button onClick={() => triggerEmergency('fire')} className="bg-brand-red text-white p-3 rounded-lg shadow-sm">
          <i className="fas fa-fire text-2xl mb-1"></i>
          <p className="text-xs font-semibold line-clamp-1">{e119.types.fire.name}</p>
        </button>
        <button onClick={() => triggerEmergency('fall')} className="bg-orange-500 text-white p-3 rounded-lg shadow-sm">
          <i className="fas fa-user-injured text-2xl mb-1"></i>
          <p className="text-xs font-semibold line-clamp-1">{e119.types.fall.name}</p>
        </button>
        <button onClick={() => triggerEmergency('collapse')} className="bg-gray-700 text-white p-3 rounded-lg shadow-sm">
          <i className="fas fa-house-damage text-2xl mb-1"></i>
          <p className="text-xs font-semibold line-clamp-1">{e119.types.collapse.name}</p>
        </button>
        <button onClick={() => triggerEmergency('scream')} className="bg-purple-600 text-white p-3 rounded-lg shadow-sm">
          <i className="fas fa-volume-up text-2xl mb-1"></i>
          <p className="text-xs font-semibold line-clamp-1">{e119.types.scream.name}</p>
        </button>
      </div>
      
      {/* 신고 이력 - 간소화 */}
      {emergencyLogs.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm p-3">
          <h3 className="font-semibold text-sm text-gray-900 mb-2">{e119.history.title}</h3>
          <div className="space-y-2">
            {emergencyLogs.slice(0, 3).map((log) => (
              <div key={log.id} className="border-l-4 border-brand-red pl-2 py-1">
                <p className="text-xs font-medium">{e119.types[log.type]?.name || log.type}</p>
                <p className="text-xs text-brand-text">{new Date(log.timestamp).toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* 모달 - 간소화 */}
      {show119Modal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-4 max-w-sm w-full">
            <h2 className="text-base font-bold text-brand-red mb-2">{e119.modal.title}</h2>
            <p className="text-xs text-brand-text mb-3 line-clamp-2">{e119.types[emergencyType]?.description}</p>
            <div className="text-4xl font-bold text-brand-red text-center my-3">{emergencyCountdown}</div>
            <button onClick={() => { setShow119Modal(false); setEmergencyCountdown(5); }} className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg text-sm font-semibold">
              {e119.modal.cancel}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

// 기능 카드 - 작은 크기
function FeatureCard({ icon, title, description, color }: any) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-3 flex items-start gap-2">
      <div className={`bg-${color} bg-opacity-10 rounded p-2 flex-shrink-0`}>
        <i className={`fas ${icon} text-${color} text-sm`}></i>
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-xs text-gray-900 mb-0.5 line-clamp-1">{title}</h3>
        <p className="text-xs text-brand-text line-clamp-2">{description}</p>
      </div>
    </div>
  )
}

// 앱 마운트
const root = document.getElementById('root')
if (root) {
  createRoot(root).render(<App />)
}
