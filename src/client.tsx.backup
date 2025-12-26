import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { translations, type Language, getSavedLanguage, saveLanguage, getTranslation } from './i18n'

// 메인 App 컴포넌트
function App() {
  const [language, setLanguage] = useState<Language>(getSavedLanguage())
  const [activeSection, setActiveSection] = useState<string>('home')
  const [dashboardData, setDashboardData] = useState<any>(null)
  
  const t = translations[language]
  
  // 언어 변경 핸들러
  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang)
    saveLanguage(newLang)
  }
  
  // 대시보드 데이터 로드
  useEffect(() => {
    fetch('/api/dashboard')
      .then(res => res.json())
      .then(data => setDashboardData(data))
      .catch(err => console.error('Dashboard load error:', err))
  }, [])
  
  // 이미지 분석
  const analyzeImage = async (type: string) => {
    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: 'sample_image_data', type })
      })
      const data = await response.json()
      alert(`${t.common.confirm}!\n\n검사 ID: ${data.inspection_id}\n위험도 점수: ${data.riskScore}\n감지된 위험요소: ${data.hazards.length}개`)
      
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
      {/* 헤더 네비게이션 */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <i className="fas fa-shield-alt text-brand-blue text-2xl mr-3"></i>
              <div>
                <div className="text-2xl font-bold text-brand-blue">{t.appName}</div>
                <div className="text-xs text-brand-text">{t.appDescription}</div>
              </div>
            </div>
            
            <div className="hidden md:flex space-x-1">
              {[
                { id: 'home', icon: 'fa-home' },
                { id: 'detection', icon: 'fa-camera' },
                { id: 'inspection', icon: 'fa-clipboard-check' },
                { id: 'reports', icon: 'fa-file-alt' },
                { id: 'matching', icon: 'fa-user-cog' },
                { id: 'console', icon: 'fa-tachometer-alt' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-brand-blue text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  title={t.nav[item.id + 'Desc' as keyof typeof t.nav]}
                >
                  <i className={`fas ${item.icon} mr-2`}></i>
                  {t.nav[item.id as keyof typeof t.nav]}
                </button>
              ))}
            </div>
            
            <div className="flex items-center space-x-4">
              <select
                value={language}
                onChange={(e) => handleLanguageChange(e.target.value as Language)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
              >
                <option value="ko">🇰🇷 한국어</option>
                <option value="en">🇺🇸 English</option>
                <option value="zh">🇨🇳 中文</option>
                <option value="ja">🇯🇵 日本語</option>
                <option value="de">🇩🇪 Deutsch</option>
                <option value="es">🇪🇸 Español</option>
              </select>
            </div>
          </div>
        </div>
      </nav>
      
      {/* 메인 컨텐츠 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeSection === 'home' && <HomeSection t={t} data={dashboardData} />}
        {activeSection === 'detection' && <DetectionSection t={t} onAnalyze={analyzeImage} />}
        {activeSection === 'inspection' && <InspectionSection t={t} onAnalyze={analyzeImage} />}
        {activeSection === 'reports' && <ReportsSection t={t} data={dashboardData} />}
        {activeSection === 'matching' && <MatchingSection t={t} />}
        {activeSection === 'console' && <ConsoleSection t={t} data={dashboardData} />}
      </div>
      
      {/* 푸터 */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-brand-text text-sm">
            © 2025 {t.appName}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

// 홈 섹션
function HomeSection({ t, data }: any) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        <i className="fas fa-home text-brand-blue mr-3"></i>
        {t.dashboard.title}
      </h1>
      
      {/* 통계 카드 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
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
      
      {/* 최근 점검 */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          <i className="fas fa-history text-brand-blue mr-2"></i>
          {t.dashboard.recentInspections}
        </h2>
        <div className="space-y-4">
          {data?.recentInspections?.map((item: any, idx: number) => (
            <div key={idx} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-medium text-gray-900">{item.location}</p>
                  <p className="text-sm text-brand-text">{item.date}</p>
                </div>
                <span className={`risk-badge-${item.riskLevel}`}>
                  {t.risk[item.riskLevel as keyof typeof t.risk]}
                </span>
              </div>
              {item.hazards.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {item.hazards.map((h: string, i: number) => (
                    <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">{h}</span>
                  ))}
                </div>
              )}
            </div>
          )) || <p className="text-brand-text">{t.common.loading}</p>}
        </div>
      </div>
    </div>
  )
}

// 통계 카드 컴포넌트
function StatCard({ icon, color, title, value }: any) {
  return (
    <div className="stat-card bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-brand-text text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">{value}</p>
        </div>
        <div className={`bg-${color} bg-opacity-10 rounded-full p-3`}>
          <i className={`fas ${icon} text-${color} text-xl`}></i>
        </div>
      </div>
    </div>
  )
}

// 실시간 감지 섹션
function DetectionSection({ t, onAnalyze }: any) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        <i className="fas fa-camera text-brand-blue mr-3"></i>
        {t.construction.title}
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          color="brand-green"
        />
      </div>
      
      <div className="mt-6 bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-bold mb-4">{t.construction.uploadImage}</h3>
        <p className="text-brand-text mb-4">{t.construction.uploadDesc}</p>
        
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-4">
          <i className="fas fa-cloud-upload-alt text-4xl text-gray-400 mb-2"></i>
          <p className="text-sm text-gray-600">{t.construction.uploadImage}</p>
          <button className="btn-primary mt-3">
            <i className="fas fa-camera mr-2"></i>
            {t.construction.startCamera}
          </button>
        </div>
        
        <button onClick={() => onAnalyze('construction')} className="btn-primary w-full">
          <i className="fas fa-search mr-2"></i>
          {t.construction.analyzeNow}
        </button>
      </div>
    </div>
  )
}

// 현장 점검 섹션
function InspectionSection({ t, onAnalyze }: any) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        <i className="fas fa-building text-brand-blue mr-3"></i>
        {t.facility.title}
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FeatureCard
          icon="fa-crack"
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
          icon="fa-bacteria"
          title={t.facility.moldDetection}
          description={t.facility.moldDesc}
          color="brand-green"
        />
        <FeatureCard
          icon="fa-wrench"
          title={t.facility.pipeInspection}
          description={t.facility.pipeDesc}
          color="brand-yellow"
        />
      </div>
      
      <div className="mt-6 bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-bold mb-4">{t.facility.title}</h3>
        <p className="text-brand-text mb-4">{t.facility.description}</p>
        
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-4">
          <i className="fas fa-cloud-upload-alt text-4xl text-gray-400 mb-2"></i>
          <p className="text-sm text-gray-600">{t.construction.uploadImage}</p>
          <button className="btn-primary mt-3">
            <i className="fas fa-camera mr-2"></i>
            {t.construction.startCamera}
          </button>
        </div>
        
        <button onClick={() => onAnalyze('facility')} className="btn-primary w-full">
          <i className="fas fa-search mr-2"></i>
          {t.construction.analyzeNow}
        </button>
      </div>
    </div>
  )
}

// 리포트 섹션
function ReportsSection({ t, data }: any) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        <i className="fas fa-file-alt text-brand-blue mr-3"></i>
        {t.report.title}
      </h1>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">{t.report.inspectionReport}</h2>
          <button className="btn-primary">
            <i className="fas fa-download mr-2"></i>
            {t.report.downloadPDF}
          </button>
        </div>
        
        <div className="space-y-4">
          {data?.recentInspections?.map((item: any, idx: number) => (
            <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:border-brand-blue transition-colors">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="font-medium text-gray-900 text-lg">{item.location}</p>
                  <p className="text-sm text-brand-text">
                    <i className="fas fa-calendar mr-1"></i>
                    {item.date}
                  </p>
                </div>
                <span className={`risk-badge-${item.riskLevel}`}>
                  {t.risk[item.riskLevel as keyof typeof t.risk]}
                </span>
              </div>
              {item.hazards.length > 0 && (
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">{t.report.hazardsDetected}:</p>
                  <div className="flex flex-wrap gap-2">
                    {item.hazards.map((h: string, i: number) => (
                      <span key={i} className="text-xs bg-red-100 text-red-800 px-3 py-1 rounded-full">
                        <i className="fas fa-exclamation-circle mr-1"></i>
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )) || <p className="text-brand-text text-center py-8">{t.common.loading}</p>}
        </div>
      </div>
    </div>
  )
}

// 기술자 매칭 섹션
function MatchingSection({ t }: any) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        <i className="fas fa-user-cog text-brand-blue mr-3"></i>
        {t.matching.title}
      </h1>
      
      <p className="text-brand-text text-lg mb-6">{t.matching.description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="feature-card bg-white text-center">
          <i className="fas fa-search text-5xl text-brand-blue mb-4"></i>
          <h3 className="text-xl font-bold mb-2">{t.matching.findTechnician}</h3>
          <p className="text-brand-text mb-4">{t.matching.findDesc}</p>
          <button className="btn-primary w-full">
            {t.matching.findTechnician}
          </button>
        </div>
        
        <div className="feature-card bg-white text-center">
          <i className="fas fa-file-invoice-dollar text-5xl text-brand-yellow mb-4"></i>
          <h3 className="text-xl font-bold mb-2">{t.matching.requestQuote}</h3>
          <p className="text-brand-text mb-4">{t.matching.quoteDesc}</p>
          <button className="btn-primary w-full">
            {t.matching.requestQuote}
          </button>
        </div>
        
        <div className="feature-card bg-white text-center">
          <i className="fas fa-chart-line text-5xl text-brand-green mb-4"></i>
          <h3 className="text-xl font-bold mb-2">{t.matching.comparePrice}</h3>
          <p className="text-brand-text mb-4">{t.matching.compareDesc}</p>
          <button className="btn-primary w-full">
            {t.matching.comparePrice}
          </button>
        </div>
      </div>
    </div>
  )
}

// 기업 콘솔 섹션
function ConsoleSection({ t, data }: any) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        <i className="fas fa-tachometer-alt text-brand-blue mr-3"></i>
        {t.enterpriseConsole.title}
      </h1>
      
      <p className="text-brand-text text-lg mb-6">{t.enterpriseConsole.description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-bold text-lg mb-4 flex items-center">
            <i className="fas fa-map-marked-alt text-brand-blue mr-2"></i>
            {t.enterpriseConsole.siteManagement}
          </h3>
          <p className="text-brand-text text-sm mb-4">{t.enterpriseConsole.siteDesc}</p>
          <div className="space-y-2">
            {data?.sitesRiskScores?.map((site: any, idx: number) => (
              <div key={idx} className="flex justify-between items-center text-sm border-b pb-2">
                <span>{site.site}</span>
                <span className="font-medium">
                  {site.score} <span className="text-xs text-brand-text">({site.trend})</span>
                </span>
              </div>
            )) || <p className="text-brand-text text-sm">{t.common.loading}</p>}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-bold text-lg mb-4 flex items-center">
            <i className="fas fa-users text-brand-blue mr-2"></i>
            {t.enterpriseConsole.userManagement}
          </h3>
          <p className="text-brand-text text-sm mb-4">{t.enterpriseConsole.userDesc}</p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>관리자</span>
              <span className="font-medium">5명</span>
            </div>
            <div className="flex justify-between">
              <span>현장책임자</span>
              <span className="font-medium">12명</span>
            </div>
            <div className="flex justify-between">
              <span>작업자</span>
              <span className="font-medium">156명</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-bold text-lg mb-4 flex items-center">
            <i className="fas fa-chart-bar text-brand-blue mr-2"></i>
            {t.enterpriseConsole.analytics}
          </h3>
          <p className="text-brand-text text-sm mb-4">{t.enterpriseConsole.analyticsDesc}</p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>이번 달 점검</span>
              <span className="font-medium">342건</span>
            </div>
            <div className="flex justify-between">
              <span>위험요소 발견</span>
              <span className="font-medium text-brand-red">87건</span>
            </div>
            <div className="flex justify-between">
              <span>조치 완료</span>
              <span className="font-medium text-brand-green">64건</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// 기능 카드 컴포넌트
function FeatureCard({ icon, title, description, color }: any) {
  return (
    <div className="feature-card bg-white">
      <div className={`bg-${color} bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mb-4`}>
        <i className={`fas ${icon} text-${color} text-2xl`}></i>
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-brand-text text-sm">{description}</p>
    </div>
  )
}

// React 앱 마운트
const root = document.getElementById('root')
if (root) {
  createRoot(root).render(<App />)
}
