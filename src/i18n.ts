// 다국어 지원 시스템 (한국어, 영어, 중국어, 일본어, 독일어, 스페인어)

export const translations = {
  ko: {
    // 메인 네비게이션
    appName: 'SafeVision Pro',
    home: '홈',
    detection: '실시간 감지',
    inspection: '현장 점검',
    reports: '리포트',
    matching: '기술자 매칭',
    console: '기업 콘솔',
    settings: '설정',
    
    // 대시보드
    dashboard: '대시보드',
    realtimeMonitoring: '실시간 모니터링',
    riskScore: '위험도 점수',
    totalInspections: '총 점검 수',
    highRiskAlerts: '고위험 경고',
    activeWorkers: '작업 중인 인원',
    
    // 공사 현장 안전
    constructionSafety: '공사 현장 안전 감지',
    ppeDetection: '보호구 착용 감지',
    wireExposure: '전선 노출 감지',
    safetyDistance: '안전 거리 감지',
    helmetMissing: '안전모 미착용',
    gloveMissing: '장갑 미착용',
    vestMissing: '안전조끼 미착용',
    safetyShoesMissing: '안전화 미착용',
    
    // 시설 진단
    facilityDiagnosis: '건물 시설 유지보수 진단',
    crackDetection: '균열 감지',
    waterLeakage: '누수 흔적 감지',
    moldDetection: '곰팡이 포인트 감지',
    pipeInspection: '배관 점검',
    
    // 위험도
    riskLevel: '위험도',
    high: '높음',
    medium: '중간',
    low: '낮음',
    
    // 액션
    uploadImage: '이미지 업로드',
    startCamera: '카메라 시작',
    analyzeNow: '지금 분석',
    generateReport: '리포트 생성',
    downloadPDF: 'PDF 다운로드',
    requestTechnician: '기술자 요청',
    
    // 리포트
    inspectionReport: '점검 리포트',
    hazardsDetected: '감지된 위험 요소',
    recommendations: '조치 권장사항',
    inspectionDate: '점검 일시',
    inspector: '점검자',
    location: '위치',
    
    // 기술자 매칭
    technicianMatching: '기술자 매칭',
    findTechnician: '기술자 찾기',
    requestQuote: '견적 요청',
    comparePrice: '가격 비교',
    
    // 기업 콘솔
    companyConsole: '기업 콘솔',
    siteManagement: '현장 관리',
    userManagement: '사용자 관리',
    analytics: '분석 통계',
    
    // 설명
    selectLanguage: '언어 선택',
    uploadImageDescription: '점검할 이미지를 업로드하거나 카메라로 촬영하세요',
  },
  
  en: {
    // Main Navigation
    appName: 'SafeVision Pro',
    home: 'Home',
    detection: 'Real-time Detection',
    inspection: 'Site Inspection',
    reports: 'Reports',
    matching: 'Technician Matching',
    console: 'Enterprise Console',
    settings: 'Settings',
    
    // Dashboard
    dashboard: 'Dashboard',
    realtimeMonitoring: 'Real-time Monitoring',
    riskScore: 'Risk Score',
    totalInspections: 'Total Inspections',
    highRiskAlerts: 'High Risk Alerts',
    activeWorkers: 'Active Workers',
    
    // Construction Safety
    constructionSafety: 'Construction Site Safety Detection',
    ppeDetection: 'PPE Detection',
    wireExposure: 'Wire Exposure Detection',
    safetyDistance: 'Safety Distance Detection',
    helmetMissing: 'Helmet Missing',
    gloveMissing: 'Gloves Missing',
    vestMissing: 'Safety Vest Missing',
    safetyShoesMissing: 'Safety Shoes Missing',
    
    // Facility Diagnosis
    facilityDiagnosis: 'Building Facility Maintenance Diagnosis',
    crackDetection: 'Crack Detection',
    waterLeakage: 'Water Leakage Detection',
    moldDetection: 'Mold Detection',
    pipeInspection: 'Pipe Inspection',
    
    // Risk Level
    riskLevel: 'Risk Level',
    high: 'High',
    medium: 'Medium',
    low: 'Low',
    
    // Actions
    uploadImage: 'Upload Image',
    startCamera: 'Start Camera',
    analyzeNow: 'Analyze Now',
    generateReport: 'Generate Report',
    downloadPDF: 'Download PDF',
    requestTechnician: 'Request Technician',
    
    // Reports
    inspectionReport: 'Inspection Report',
    hazardsDetected: 'Hazards Detected',
    recommendations: 'Recommendations',
    inspectionDate: 'Inspection Date',
    inspector: 'Inspector',
    location: 'Location',
    
    // Technician Matching
    technicianMatching: 'Technician Matching',
    findTechnician: 'Find Technician',
    requestQuote: 'Request Quote',
    comparePrice: 'Compare Price',
    
    // Enterprise Console
    companyConsole: 'Enterprise Console',
    siteManagement: 'Site Management',
    userManagement: 'User Management',
    analytics: 'Analytics',
    
    // Description
    selectLanguage: 'Select Language',
    uploadImageDescription: 'Upload an image or take a photo for inspection',
  },
  
  zh: {
    // 主导航
    appName: 'SafeVision Pro',
    home: '首页',
    detection: '实时检测',
    inspection: '现场检查',
    reports: '报告',
    matching: '技术人员匹配',
    console: '企业控制台',
    settings: '设置',
    
    // 仪表板
    dashboard: '仪表板',
    realtimeMonitoring: '实时监控',
    riskScore: '风险评分',
    totalInspections: '总检查数',
    highRiskAlerts: '高风险警报',
    activeWorkers: '活跃工人',
    
    // 施工安全
    constructionSafety: '施工现场安全检测',
    ppeDetection: '个人防护装备检测',
    wireExposure: '电线暴露检测',
    safetyDistance: '安全距离检测',
    helmetMissing: '未佩戴安全帽',
    gloveMissing: '未佩戴手套',
    vestMissing: '未佩戴安全背心',
    safetyShoesMissing: '未佩戴安全鞋',
    
    // 设施诊断
    facilityDiagnosis: '建筑设施维护诊断',
    crackDetection: '裂缝检测',
    waterLeakage: '漏水检测',
    moldDetection: '霉菌检测',
    pipeInspection: '管道检查',
    
    // 风险级别
    riskLevel: '风险级别',
    high: '高',
    medium: '中',
    low: '低',
    
    // 操作
    uploadImage: '上传图片',
    startCamera: '启动相机',
    analyzeNow: '立即分析',
    generateReport: '生成报告',
    downloadPDF: '下载PDF',
    requestTechnician: '请求技术人员',
    
    // 报告
    inspectionReport: '检查报告',
    hazardsDetected: '检测到的危险',
    recommendations: '建议措施',
    inspectionDate: '检查日期',
    inspector: '检查员',
    location: '位置',
    
    // 技术人员匹配
    technicianMatching: '技术人员匹配',
    findTechnician: '查找技术人员',
    requestQuote: '请求报价',
    comparePrice: '价格比较',
    
    // 企业控制台
    companyConsole: '企业控制台',
    siteManagement: '现场管理',
    userManagement: '用户管理',
    analytics: '分析统计',
    
    // 描述
    selectLanguage: '选择语言',
    uploadImageDescription: '上传图片或拍照进行检查',
  },
  
  ja: {
    // メインナビゲーション
    appName: 'SafeVision Pro',
    home: 'ホーム',
    detection: 'リアルタイム検出',
    inspection: '現場点検',
    reports: 'レポート',
    matching: '技術者マッチング',
    console: '企業コンソール',
    settings: '設定',
    
    // ダッシュボード
    dashboard: 'ダッシュボード',
    realtimeMonitoring: 'リアルタイムモニタリング',
    riskScore: 'リスクスコア',
    totalInspections: '総点検数',
    highRiskAlerts: '高リスク警告',
    activeWorkers: '作業中の人員',
    
    // 工事現場安全
    constructionSafety: '工事現場安全検知',
    ppeDetection: '保護具着用検知',
    wireExposure: '電線露出検知',
    safetyDistance: '安全距離検知',
    helmetMissing: 'ヘルメット未着用',
    gloveMissing: '手袋未着用',
    vestMissing: '安全ベスト未着用',
    safetyShoesMissing: '安全靴未着用',
    
    // 施設診断
    facilityDiagnosis: '建物施設メンテナンス診断',
    crackDetection: 'ひび割れ検知',
    waterLeakage: '漏水検知',
    moldDetection: 'カビ検知',
    pipeInspection: '配管点検',
    
    // リスクレベル
    riskLevel: 'リスクレベル',
    high: '高',
    medium: '中',
    low: '低',
    
    // アクション
    uploadImage: '画像アップロード',
    startCamera: 'カメラ起動',
    analyzeNow: '今すぐ分析',
    generateReport: 'レポート生成',
    downloadPDF: 'PDFダウンロード',
    requestTechnician: '技術者依頼',
    
    // レポート
    inspectionReport: '点検レポート',
    hazardsDetected: '検知された危険要素',
    recommendations: '推奨措置',
    inspectionDate: '点検日時',
    inspector: '点検者',
    location: '場所',
    
    // 技術者マッチング
    technicianMatching: '技術者マッチング',
    findTechnician: '技術者を探す',
    requestQuote: '見積依頼',
    comparePrice: '価格比較',
    
    // 企業コンソール
    companyConsole: '企業コンソール',
    siteManagement: '現場管理',
    userManagement: 'ユーザー管理',
    analytics: '分析統計',
    
    // 説明
    selectLanguage: '言語選択',
    uploadImageDescription: '点検する画像をアップロードまたは撮影してください',
  },
  
  de: {
    // Hauptnavigation
    appName: 'SafeVision Pro',
    home: 'Startseite',
    detection: 'Echtzeit-Erkennung',
    inspection: 'Standortinspektion',
    reports: 'Berichte',
    matching: 'Techniker-Vermittlung',
    console: 'Unternehmenskonsole',
    settings: 'Einstellungen',
    
    // Dashboard
    dashboard: 'Dashboard',
    realtimeMonitoring: 'Echtzeit-Überwachung',
    riskScore: 'Risikobewertung',
    totalInspections: 'Gesamtinspektionen',
    highRiskAlerts: 'Hochrisikowarnungen',
    activeWorkers: 'Aktive Arbeiter',
    
    // Bausicherheit
    constructionSafety: 'Baustellen-Sicherheitserkennung',
    ppeDetection: 'PSA-Erkennung',
    wireExposure: 'Kabelexposition-Erkennung',
    safetyDistance: 'Sicherheitsabstand-Erkennung',
    helmetMissing: 'Helm fehlt',
    gloveMissing: 'Handschuhe fehlen',
    vestMissing: 'Sicherheitsweste fehlt',
    safetyShoesMissing: 'Sicherheitsschuhe fehlen',
    
    // Anlagendiagnose
    facilityDiagnosis: 'Gebäudeanlage-Wartungsdiagnose',
    crackDetection: 'Risserkennung',
    waterLeakage: 'Wasserleckerkennung',
    moldDetection: 'Schimmelerkennung',
    pipeInspection: 'Rohrinspektion',
    
    // Risikolevel
    riskLevel: 'Risikolevel',
    high: 'Hoch',
    medium: 'Mittel',
    low: 'Niedrig',
    
    // Aktionen
    uploadImage: 'Bild hochladen',
    startCamera: 'Kamera starten',
    analyzeNow: 'Jetzt analysieren',
    generateReport: 'Bericht erstellen',
    downloadPDF: 'PDF herunterladen',
    requestTechnician: 'Techniker anfordern',
    
    // Berichte
    inspectionReport: 'Inspektionsbericht',
    hazardsDetected: 'Erkannte Gefahren',
    recommendations: 'Empfehlungen',
    inspectionDate: 'Inspektionsdatum',
    inspector: 'Inspektor',
    location: 'Standort',
    
    // Techniker-Vermittlung
    technicianMatching: 'Techniker-Vermittlung',
    findTechnician: 'Techniker finden',
    requestQuote: 'Angebot anfordern',
    comparePrice: 'Preis vergleichen',
    
    // Unternehmenskonsole
    companyConsole: 'Unternehmenskonsole',
    siteManagement: 'Standortverwaltung',
    userManagement: 'Benutzerverwaltung',
    analytics: 'Analysen',
    
    // Beschreibung
    selectLanguage: 'Sprache auswählen',
    uploadImageDescription: 'Laden Sie ein Bild hoch oder nehmen Sie ein Foto zur Inspektion auf',
  },
  
  es: {
    // Navegación principal
    appName: 'SafeVision Pro',
    home: 'Inicio',
    detection: 'Detección en tiempo real',
    inspection: 'Inspección de sitio',
    reports: 'Informes',
    matching: 'Coincidencia de técnicos',
    console: 'Consola empresarial',
    settings: 'Configuración',
    
    // Panel de control
    dashboard: 'Panel de control',
    realtimeMonitoring: 'Monitoreo en tiempo real',
    riskScore: 'Puntuación de riesgo',
    totalInspections: 'Inspecciones totales',
    highRiskAlerts: 'Alertas de alto riesgo',
    activeWorkers: 'Trabajadores activos',
    
    // Seguridad en construcción
    constructionSafety: 'Detección de seguridad en obra',
    ppeDetection: 'Detección de EPP',
    wireExposure: 'Detección de cables expuestos',
    safetyDistance: 'Detección de distancia de seguridad',
    helmetMissing: 'Casco faltante',
    gloveMissing: 'Guantes faltantes',
    vestMissing: 'Chaleco de seguridad faltante',
    safetyShoesMissing: 'Zapatos de seguridad faltantes',
    
    // Diagnóstico de instalaciones
    facilityDiagnosis: 'Diagnóstico de mantenimiento de instalaciones',
    crackDetection: 'Detección de grietas',
    waterLeakage: 'Detección de fugas de agua',
    moldDetection: 'Detección de moho',
    pipeInspection: 'Inspección de tuberías',
    
    // Nivel de riesgo
    riskLevel: 'Nivel de riesgo',
    high: 'Alto',
    medium: 'Medio',
    low: 'Bajo',
    
    // Acciones
    uploadImage: 'Subir imagen',
    startCamera: 'Iniciar cámara',
    analyzeNow: 'Analizar ahora',
    generateReport: 'Generar informe',
    downloadPDF: 'Descargar PDF',
    requestTechnician: 'Solicitar técnico',
    
    // Informes
    inspectionReport: 'Informe de inspección',
    hazardsDetected: 'Peligros detectados',
    recommendations: 'Recomendaciones',
    inspectionDate: 'Fecha de inspección',
    inspector: 'Inspector',
    location: 'Ubicación',
    
    // Coincidencia de técnicos
    technicianMatching: 'Coincidencia de técnicos',
    findTechnician: 'Encontrar técnico',
    requestQuote: 'Solicitar cotización',
    comparePrice: 'Comparar precios',
    
    // Consola empresarial
    companyConsole: 'Consola empresarial',
    siteManagement: 'Gestión de sitios',
    userManagement: 'Gestión de usuarios',
    analytics: 'Analíticas',
    
    // Descripción
    selectLanguage: 'Seleccionar idioma',
    uploadImageDescription: 'Sube una imagen o toma una foto para inspección',
  }
}

export type Language = keyof typeof translations
export type TranslationKey = keyof typeof translations.ko

export function getTranslation(lang: Language, key: TranslationKey): string {
  return translations[lang][key] || translations.en[key] || key
}
