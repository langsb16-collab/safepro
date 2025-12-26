// Safe Pro 다국어 지원 시스템 (localStorage 기반)

export const translations = {
  ko: {
    // 앱 이름
    appName: 'Safe Pro',
    appDescription: '산업 안전 & 시설 관리 AI 플랫폼',
    
    // 메인 네비게이션
    nav: {
      home: '홈',
      homeDesc: '대시보드 및 통계',
      detection: '실시간 감지',
      detectionDesc: '카메라 기반 위험 감지',
      inspection: '현장 점검',
      inspectionDesc: '안전 점검 수행',
      reports: '리포트',
      reportsDesc: '점검 기록 및 PDF',
      matching: '기술자 매칭',
      matchingDesc: '전문가 연결 서비스',
      console: '기업 콘솔',
      consoleDesc: '관리자 대시보드',
      settings: '설정',
      settingsDesc: '시스템 설정'
    },
    
    // 대시보드
    dashboard: {
      title: '대시보드',
      realtimeMonitoring: '실시간 모니터링',
      riskScore: '위험도 점수',
      totalInspections: '총 점검 수',
      highRiskAlerts: '고위험 경고',
      activeWorkers: '작업 중인 인원',
      recentInspections: '최근 점검 기록',
      viewAll: '전체 보기'
    },
    
    // 공사 현장 안전
    construction: {
      title: '공사 현장 안전 감지',
      description: '작업자 보호구, 위험 요소를 AI로 실시간 감지합니다',
      ppeDetection: '보호구 착용 감지',
      ppeDesc: '안전모, 장갑, 조끼, 안전화 확인',
      wireExposure: '전선 노출 감지',
      wireDesc: '위험한 전선 노출 상태 탐지',
      safetyDistance: '안전 거리 감지',
      safetyDistanceDesc: '장비 반경 내 접근 경고',
      uploadImage: '이미지 업로드',
      uploadDesc: '점검할 현장 사진을 업로드하거나 촬영하세요',
      startCamera: '카메라 시작',
      analyzeNow: '지금 분석하기'
    },
    
    // 시설 진단
    facility: {
      title: '건물 시설 유지보수 진단',
      description: '건물, 배관, 시설물의 결함을 AI로 자동 진단합니다',
      crackDetection: '균열 감지',
      crackDesc: '천장, 벽면 균열 자동 탐지',
      waterLeakage: '누수 흔적 감지',
      waterDesc: '물얼룩, 변색 등 누수 징후 분석',
      moldDetection: '곰팡이 포인트 감지',
      moldDesc: '곰팡이 발생 지점 식별',
      pipeInspection: '배관 점검',
      pipeDesc: '배관 노출, 부식 상태 진단'
    },
    
    // 위험도
    risk: {
      level: '위험도',
      high: '높음',
      medium: '중간',
      low: '낮음',
      critical: '긴급'
    },
    
    // 리포트
    report: {
      title: '점검 리포트',
      inspectionReport: '안전 점검 보고서',
      hazardsDetected: '감지된 위험 요소',
      recommendations: '조치 권장사항',
      inspectionDate: '점검 일시',
      inspector: '점검자',
      location: '위치',
      generatePDF: 'PDF 생성',
      downloadPDF: 'PDF 다운로드',
      shareReport: '리포트 공유'
    },
    
    // 기술자 매칭
    matching: {
      title: '기술자 매칭',
      description: '지역별 전문 기술자를 찾고 견적을 비교하세요',
      findTechnician: '기술자 찾기',
      findDesc: '지역 기반 전문가 검색',
      requestQuote: '견적 요청',
      quoteDesc: '무료 견적 신청',
      comparePrice: '가격 비교',
      compareDesc: '여러 견적 비교 분석'
    },
    
    // 기업 콘솔
    enterpriseConsole: {
      title: '기업 콘솔',
      description: '다중 현장을 통합 관리하고 분석합니다',
      siteManagement: '현장 관리',
      siteDesc: '사업장별 위험도 모니터링',
      userManagement: '사용자 관리',
      userDesc: '권한 및 역할 관리',
      analytics: '분석 통계',
      analyticsDesc: '월간 리스크 지표 분석'
    },
    
    // 설정
    settings: {
      title: '설정',
      language: '언어',
      selectLanguage: '언어 선택',
      theme: '테마',
      notifications: '알림 설정',
      account: '계정 관리'
    },
    
    // 공통
    common: {
      loading: '로딩 중...',
      save: '저장',
      cancel: '취소',
      confirm: '확인',
      delete: '삭제',
      edit: '편집',
      close: '닫기',
      search: '검색',
      filter: '필터',
      export: '내보내기',
      import: '가져오기'
    }
  },
  
  en: {
    appName: 'Safe Pro',
    appDescription: 'Industrial Safety & Facility Management AI Platform',
    
    nav: {
      home: 'Home',
      homeDesc: 'Dashboard and Statistics',
      detection: 'Real-time Detection',
      detectionDesc: 'Camera-based Hazard Detection',
      inspection: 'Site Inspection',
      inspectionDesc: 'Safety Inspection',
      reports: 'Reports',
      reportsDesc: 'Inspection Records & PDF',
      matching: 'Technician Matching',
      matchingDesc: 'Expert Connection Service',
      console: 'Enterprise Console',
      consoleDesc: 'Admin Dashboard',
      settings: 'Settings',
      settingsDesc: 'System Settings'
    },
    
    dashboard: {
      title: 'Dashboard',
      realtimeMonitoring: 'Real-time Monitoring',
      riskScore: 'Risk Score',
      totalInspections: 'Total Inspections',
      highRiskAlerts: 'High Risk Alerts',
      activeWorkers: 'Active Workers',
      recentInspections: 'Recent Inspections',
      viewAll: 'View All'
    },
    
    construction: {
      title: 'Construction Site Safety Detection',
      description: 'AI-powered real-time detection of worker PPE and hazards',
      ppeDetection: 'PPE Detection',
      ppeDesc: 'Helmet, gloves, vest, safety shoes',
      wireExposure: 'Wire Exposure Detection',
      wireDesc: 'Detect hazardous wire exposure',
      safetyDistance: 'Safety Distance Detection',
      safetyDistanceDesc: 'Proximity alert within equipment radius',
      uploadImage: 'Upload Image',
      uploadDesc: 'Upload or capture site photos for inspection',
      startCamera: 'Start Camera',
      analyzeNow: 'Analyze Now'
    },
    
    facility: {
      title: 'Building Facility Maintenance Diagnosis',
      description: 'AI-powered automatic diagnosis of building and facility defects',
      crackDetection: 'Crack Detection',
      crackDesc: 'Auto-detect ceiling and wall cracks',
      waterLeakage: 'Water Leakage Detection',
      waterDesc: 'Analyze water stains and discoloration',
      moldDetection: 'Mold Detection',
      moldDesc: 'Identify mold growth points',
      pipeInspection: 'Pipe Inspection',
      pipeDesc: 'Diagnose pipe exposure and corrosion'
    },
    
    risk: {
      level: 'Risk Level',
      high: 'High',
      medium: 'Medium',
      low: 'Low',
      critical: 'Critical'
    },
    
    report: {
      title: 'Inspection Reports',
      inspectionReport: 'Safety Inspection Report',
      hazardsDetected: 'Hazards Detected',
      recommendations: 'Recommendations',
      inspectionDate: 'Inspection Date',
      inspector: 'Inspector',
      location: 'Location',
      generatePDF: 'Generate PDF',
      downloadPDF: 'Download PDF',
      shareReport: 'Share Report'
    },
    
    matching: {
      title: 'Technician Matching',
      description: 'Find local experts and compare quotes',
      findTechnician: 'Find Technician',
      findDesc: 'Location-based expert search',
      requestQuote: 'Request Quote',
      quoteDesc: 'Free quote request',
      comparePrice: 'Compare Prices',
      compareDesc: 'Compare multiple quotes'
    },
    
    enterpriseConsole: {
      title: 'Enterprise Console',
      description: 'Integrated management and analysis of multiple sites',
      siteManagement: 'Site Management',
      siteDesc: 'Risk monitoring by site',
      userManagement: 'User Management',
      userDesc: 'Permission and role management',
      analytics: 'Analytics',
      analyticsDesc: 'Monthly risk indicator analysis'
    },
    
    settings: {
      title: 'Settings',
      language: 'Language',
      selectLanguage: 'Select Language',
      theme: 'Theme',
      notifications: 'Notifications',
      account: 'Account'
    },
    
    common: {
      loading: 'Loading...',
      save: 'Save',
      cancel: 'Cancel',
      confirm: 'Confirm',
      delete: 'Delete',
      edit: 'Edit',
      close: 'Close',
      search: 'Search',
      filter: 'Filter',
      export: 'Export',
      import: 'Import'
    }
  },
  
  zh: {
    appName: 'Safe Pro',
    appDescription: '工业安全与设施管理AI平台',
    
    nav: {
      home: '首页',
      homeDesc: '仪表板和统计',
      detection: '实时检测',
      detectionDesc: '基于摄像头的危险检测',
      inspection: '现场检查',
      inspectionDesc: '安全检查',
      reports: '报告',
      reportsDesc: '检查记录和PDF',
      matching: '技术人员匹配',
      matchingDesc: '专家连接服务',
      console: '企业控制台',
      consoleDesc: '管理员仪表板',
      settings: '设置',
      settingsDesc: '系统设置'
    },
    
    dashboard: {
      title: '仪表板',
      realtimeMonitoring: '实时监控',
      riskScore: '风险评分',
      totalInspections: '总检查数',
      highRiskAlerts: '高风险警报',
      activeWorkers: '活跃工人',
      recentInspections: '最近检查',
      viewAll: '查看全部'
    },
    
    construction: {
      title: '施工现场安全检测',
      description: 'AI驱动的工人个人防护装备和危险实时检测',
      ppeDetection: '个人防护装备检测',
      ppeDesc: '头盔、手套、背心、安全鞋',
      wireExposure: '电线暴露检测',
      wireDesc: '检测危险电线暴露',
      safetyDistance: '安全距离检测',
      safetyDistanceDesc: '设备半径内接近警报',
      uploadImage: '上传图片',
      uploadDesc: '上传或拍摄现场照片进行检查',
      startCamera: '启动相机',
      analyzeNow: '立即分析'
    },
    
    facility: {
      title: '建筑设施维护诊断',
      description: 'AI驱动的建筑和设施缺陷自动诊断',
      crackDetection: '裂缝检测',
      crackDesc: '自动检测天花板和墙壁裂缝',
      waterLeakage: '漏水检测',
      waterDesc: '分析水渍和变色',
      moldDetection: '霉菌检测',
      moldDesc: '识别霉菌生长点',
      pipeInspection: '管道检查',
      pipeDesc: '诊断管道暴露和腐蚀'
    },
    
    risk: {
      level: '风险级别',
      high: '高',
      medium: '中',
      low: '低',
      critical: '紧急'
    },
    
    report: {
      title: '检查报告',
      inspectionReport: '安全检查报告',
      hazardsDetected: '检测到的危险',
      recommendations: '建议',
      inspectionDate: '检查日期',
      inspector: '检查员',
      location: '位置',
      generatePDF: '生成PDF',
      downloadPDF: '下载PDF',
      shareReport: '共享报告'
    },
    
    matching: {
      title: '技术人员匹配',
      description: '查找当地专家并比较报价',
      findTechnician: '查找技术人员',
      findDesc: '基于位置的专家搜索',
      requestQuote: '请求报价',
      quoteDesc: '免费报价请求',
      comparePrice: '比较价格',
      compareDesc: '比较多个报价'
    },
    
    enterpriseConsole: {
      title: '企业控制台',
      description: '多站点集成管理和分析',
      siteManagement: '站点管理',
      siteDesc: '按站点进行风险监控',
      userManagement: '用户管理',
      userDesc: '权限和角色管理',
      analytics: '分析',
      analyticsDesc: '月度风险指标分析'
    },
    
    settings: {
      title: '设置',
      language: '语言',
      selectLanguage: '选择语言',
      theme: '主题',
      notifications: '通知',
      account: '账户'
    },
    
    common: {
      loading: '加载中...',
      save: '保存',
      cancel: '取消',
      confirm: '确认',
      delete: '删除',
      edit: '编辑',
      close: '关闭',
      search: '搜索',
      filter: '筛选',
      export: '导出',
      import: '导入'
    }
  },
  
  ja: {
    appName: 'Safe Pro',
    appDescription: '産業安全と施設管理AIプラットフォーム',
    
    nav: {
      home: 'ホーム',
      homeDesc: 'ダッシュボードと統計',
      detection: 'リアルタイム検出',
      detectionDesc: 'カメラベースの危険検出',
      inspection: '現場点検',
      inspectionDesc: '安全点検',
      reports: 'レポート',
      reportsDesc: '点検記録とPDF',
      matching: '技術者マッチング',
      matchingDesc: '専門家接続サービス',
      console: '企業コンソール',
      consoleDesc: '管理者ダッシュボード',
      settings: '設定',
      settingsDesc: 'システム設定'
    },
    
    dashboard: {
      title: 'ダッシュボード',
      realtimeMonitoring: 'リアルタイムモニタリング',
      riskScore: 'リスクスコア',
      totalInspections: '総点検数',
      highRiskAlerts: '高リスク警告',
      activeWorkers: '作業中の人員',
      recentInspections: '最近の点検',
      viewAll: 'すべて表示'
    },
    
    construction: {
      title: '工事現場安全検知',
      description: 'AI駆動の作業者PPEと危険のリアルタイム検出',
      ppeDetection: '保護具着用検知',
      ppeDesc: 'ヘルメット、手袋、ベスト、安全靴',
      wireExposure: '電線露出検知',
      wireDesc: '危険な電線露出を検出',
      safetyDistance: '安全距離検知',
      safetyDistanceDesc: '機器半径内の接近警告',
      uploadImage: '画像アップロード',
      uploadDesc: '点検用の現場写真をアップロードまたは撮影',
      startCamera: 'カメラ起動',
      analyzeNow: '今すぐ分析'
    },
    
    facility: {
      title: '建物施設メンテナンス診断',
      description: 'AI駆動の建物と施設の欠陥自動診断',
      crackDetection: 'ひび割れ検知',
      crackDesc: '天井と壁のひび割れ自動検出',
      waterLeakage: '漏水検知',
      waterDesc: '水染みと変色を分析',
      moldDetection: 'カビ検知',
      moldDesc: 'カビ発生点を識別',
      pipeInspection: '配管点検',
      pipeDesc: '配管露出と腐食を診断'
    },
    
    risk: {
      level: 'リスクレベル',
      high: '高',
      medium: '中',
      low: '低',
      critical: '緊急'
    },
    
    report: {
      title: '点検レポート',
      inspectionReport: '安全点検報告書',
      hazardsDetected: '検出された危険',
      recommendations: '推奨事項',
      inspectionDate: '点検日',
      inspector: '点検者',
      location: '場所',
      generatePDF: 'PDF生成',
      downloadPDF: 'PDFダウンロード',
      shareReport: 'レポート共有'
    },
    
    matching: {
      title: '技術者マッチング',
      description: '地域の専門家を見つけて見積もりを比較',
      findTechnician: '技術者を探す',
      findDesc: '地域ベースの専門家検索',
      requestQuote: '見積もり依頼',
      quoteDesc: '無料見積もり依頼',
      comparePrice: '価格比較',
      compareDesc: '複数の見積もりを比較'
    },
    
    enterpriseConsole: {
      title: '企業コンソール',
      description: '複数サイトの統合管理と分析',
      siteManagement: 'サイト管理',
      siteDesc: 'サイト別リスク監視',
      userManagement: 'ユーザー管理',
      userDesc: '権限と役割管理',
      analytics: '分析',
      analyticsDesc: '月次リスク指標分析'
    },
    
    settings: {
      title: '設定',
      language: '言語',
      selectLanguage: '言語選択',
      theme: 'テーマ',
      notifications: '通知',
      account: 'アカウント'
    },
    
    common: {
      loading: '読み込み中...',
      save: '保存',
      cancel: 'キャンセル',
      confirm: '確認',
      delete: '削除',
      edit: '編集',
      close: '閉じる',
      search: '検索',
      filter: 'フィルター',
      export: 'エクスポート',
      import: 'インポート'
    }
  },
  
  de: {
    appName: 'Safe Pro',
    appDescription: 'Industriesicherheit & Anlagenverwaltung AI-Plattform',
    
    nav: {
      home: 'Startseite',
      homeDesc: 'Dashboard und Statistiken',
      detection: 'Echtzeit-Erkennung',
      detectionDesc: 'Kamerabasierte Gefahrenerkennung',
      inspection: 'Standortinspektion',
      inspectionDesc: 'Sicherheitsinspektion',
      reports: 'Berichte',
      reportsDesc: 'Inspektionsaufzeichnungen & PDF',
      matching: 'Techniker-Vermittlung',
      matchingDesc: 'Experten-Verbindungsservice',
      console: 'Unternehmenskonsole',
      consoleDesc: 'Admin-Dashboard',
      settings: 'Einstellungen',
      settingsDesc: 'Systemeinstellungen'
    },
    
    dashboard: {
      title: 'Dashboard',
      realtimeMonitoring: 'Echtzeit-Überwachung',
      riskScore: 'Risikobewertung',
      totalInspections: 'Gesamtinspektionen',
      highRiskAlerts: 'Hochrisikowarnungen',
      activeWorkers: 'Aktive Arbeiter',
      recentInspections: 'Letzte Inspektionen',
      viewAll: 'Alle anzeigen'
    },
    
    construction: {
      title: 'Baustellen-Sicherheitserkennung',
      description: 'KI-gestützte Echtzeiterkennung von Arbeiter-PSA und Gefahren',
      ppeDetection: 'PSA-Erkennung',
      ppeDesc: 'Helm, Handschuhe, Weste, Sicherheitsschuhe',
      wireExposure: 'Kabelexpositions-Erkennung',
      wireDesc: 'Gefährliche Kabelexposition erkennen',
      safetyDistance: 'Sicherheitsabstands-Erkennung',
      safetyDistanceDesc: 'Näherungsalarm innerhalb Geräteradius',
      uploadImage: 'Bild hochladen',
      uploadDesc: 'Standortfotos zur Inspektion hochladen oder aufnehmen',
      startCamera: 'Kamera starten',
      analyzeNow: 'Jetzt analysieren'
    },
    
    facility: {
      title: 'Gebäudeanlage-Wartungsdiagnose',
      description: 'KI-gestützte automatische Diagnose von Gebäude- und Anlagendefekten',
      crackDetection: 'Risserkennung',
      crackDesc: 'Automatische Erkennung von Decken- und Wandrissen',
      waterLeakage: 'Wasserleckerkennung',
      waterDesc: 'Analyse von Wasserflecken und Verfärbungen',
      moldDetection: 'Schimmelerkennung',
      moldDesc: 'Identifizierung von Schimmelwachstumspunkten',
      pipeInspection: 'Rohrinspektion',
      pipeDesc: 'Diagnose von Rohrexposition und Korrosion'
    },
    
    risk: {
      level: 'Risikolevel',
      high: 'Hoch',
      medium: 'Mittel',
      low: 'Niedrig',
      critical: 'Kritisch'
    },
    
    report: {
      title: 'Inspektionsberichte',
      inspectionReport: 'Sicherheitsinspektionsbericht',
      hazardsDetected: 'Erkannte Gefahren',
      recommendations: 'Empfehlungen',
      inspectionDate: 'Inspektionsdatum',
      inspector: 'Inspektor',
      location: 'Standort',
      generatePDF: 'PDF generieren',
      downloadPDF: 'PDF herunterladen',
      shareReport: 'Bericht teilen'
    },
    
    matching: {
      title: 'Techniker-Vermittlung',
      description: 'Lokale Experten finden und Angebote vergleichen',
      findTechnician: 'Techniker finden',
      findDesc: 'Standortbasierte Expertensuche',
      requestQuote: 'Angebot anfordern',
      quoteDesc: 'Kostenlose Angebotsanfrage',
      comparePrice: 'Preise vergleichen',
      compareDesc: 'Mehrere Angebote vergleichen'
    },
    
    enterpriseConsole: {
      title: 'Unternehmenskonsole',
      description: 'Integriertes Management und Analyse mehrerer Standorte',
      siteManagement: 'Standortverwaltung',
      siteDesc: 'Risikoüberwachung nach Standort',
      userManagement: 'Benutzerverwaltung',
      userDesc: 'Berechtigungs- und Rollenverwaltung',
      analytics: 'Analysen',
      analyticsDesc: 'Monatliche Risikoindikatoranalyse'
    },
    
    settings: {
      title: 'Einstellungen',
      language: 'Sprache',
      selectLanguage: 'Sprache auswählen',
      theme: 'Theme',
      notifications: 'Benachrichtigungen',
      account: 'Konto'
    },
    
    common: {
      loading: 'Laden...',
      save: 'Speichern',
      cancel: 'Abbrechen',
      confirm: 'Bestätigen',
      delete: 'Löschen',
      edit: 'Bearbeiten',
      close: 'Schließen',
      search: 'Suchen',
      filter: 'Filter',
      export: 'Exportieren',
      import: 'Importieren'
    }
  },
  
  es: {
    appName: 'Safe Pro',
    appDescription: 'Plataforma de IA para Seguridad Industrial y Gestión de Instalaciones',
    
    nav: {
      home: 'Inicio',
      homeDesc: 'Panel de control y estadísticas',
      detection: 'Detección en Tiempo Real',
      detectionDesc: 'Detección de peligros basada en cámara',
      inspection: 'Inspección de Sitio',
      inspectionDesc: 'Inspección de seguridad',
      reports: 'Informes',
      reportsDesc: 'Registros de inspección y PDF',
      matching: 'Coincidencia de Técnicos',
      matchingDesc: 'Servicio de conexión de expertos',
      console: 'Consola Empresarial',
      consoleDesc: 'Panel de administración',
      settings: 'Configuración',
      settingsDesc: 'Configuración del sistema'
    },
    
    dashboard: {
      title: 'Panel de Control',
      realtimeMonitoring: 'Monitoreo en Tiempo Real',
      riskScore: 'Puntuación de Riesgo',
      totalInspections: 'Inspecciones Totales',
      highRiskAlerts: 'Alertas de Alto Riesgo',
      activeWorkers: 'Trabajadores Activos',
      recentInspections: 'Inspecciones Recientes',
      viewAll: 'Ver Todo'
    },
    
    construction: {
      title: 'Detección de Seguridad en Obra',
      description: 'Detección en tiempo real de EPP de trabajadores y peligros impulsada por IA',
      ppeDetection: 'Detección de EPP',
      ppeDesc: 'Casco, guantes, chaleco, zapatos de seguridad',
      wireExposure: 'Detección de Cables Expuestos',
      wireDesc: 'Detectar exposición de cables peligrosos',
      safetyDistance: 'Detección de Distancia de Seguridad',
      safetyDistanceDesc: 'Alerta de proximidad dentro del radio del equipo',
      uploadImage: 'Subir Imagen',
      uploadDesc: 'Subir o capturar fotos del sitio para inspección',
      startCamera: 'Iniciar Cámara',
      analyzeNow: 'Analizar Ahora'
    },
    
    facility: {
      title: 'Diagnóstico de Mantenimiento de Instalaciones',
      description: 'Diagnóstico automático de defectos de edificios e instalaciones impulsado por IA',
      crackDetection: 'Detección de Grietas',
      crackDesc: 'Detección automática de grietas en techo y pared',
      waterLeakage: 'Detección de Fugas de Agua',
      waterDesc: 'Analizar manchas de agua y decoloración',
      moldDetection: 'Detección de Moho',
      moldDesc: 'Identificar puntos de crecimiento de moho',
      pipeInspection: 'Inspección de Tuberías',
      pipeDesc: 'Diagnosticar exposición y corrosión de tuberías'
    },
    
    risk: {
      level: 'Nivel de Riesgo',
      high: 'Alto',
      medium: 'Medio',
      low: 'Bajo',
      critical: 'Crítico'
    },
    
    report: {
      title: 'Informes de Inspección',
      inspectionReport: 'Informe de Inspección de Seguridad',
      hazardsDetected: 'Peligros Detectados',
      recommendations: 'Recomendaciones',
      inspectionDate: 'Fecha de Inspección',
      inspector: 'Inspector',
      location: 'Ubicación',
      generatePDF: 'Generar PDF',
      downloadPDF: 'Descargar PDF',
      shareReport: 'Compartir Informe'
    },
    
    matching: {
      title: 'Coincidencia de Técnicos',
      description: 'Encuentre expertos locales y compare cotizaciones',
      findTechnician: 'Encontrar Técnico',
      findDesc: 'Búsqueda de expertos basada en ubicación',
      requestQuote: 'Solicitar Cotización',
      quoteDesc: 'Solicitud de cotización gratuita',
      comparePrice: 'Comparar Precios',
      compareDesc: 'Comparar múltiples cotizaciones'
    },
    
    enterpriseConsole: {
      title: 'Consola Empresarial',
      description: 'Gestión integrada y análisis de múltiples sitios',
      siteManagement: 'Gestión de Sitios',
      siteDesc: 'Monitoreo de riesgos por sitio',
      userManagement: 'Gestión de Usuarios',
      userDesc: 'Gestión de permisos y roles',
      analytics: 'Analíticas',
      analyticsDesc: 'Análisis mensual de indicadores de riesgo'
    },
    
    settings: {
      title: 'Configuración',
      language: 'Idioma',
      selectLanguage: 'Seleccionar Idioma',
      theme: 'Tema',
      notifications: 'Notificaciones',
      account: 'Cuenta'
    },
    
    common: {
      loading: 'Cargando...',
      save: 'Guardar',
      cancel: 'Cancelar',
      confirm: 'Confirmar',
      delete: 'Eliminar',
      edit: 'Editar',
      close: 'Cerrar',
      search: 'Buscar',
      filter: 'Filtrar',
      export: 'Exportar',
      import: 'Importar'
    }
  }
}

export type Language = keyof typeof translations
export type TranslationPath = string

// localStorage 키
const LANGUAGE_STORAGE_KEY = 'safe-pro-language'

// 기본 언어
const DEFAULT_LANGUAGE: Language = 'ko'

// localStorage에서 언어 가져오기
export function getSavedLanguage(): Language {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE
  
  const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY)
  if (saved && saved in translations) {
    return saved as Language
  }
  return DEFAULT_LANGUAGE
}

// localStorage에 언어 저장
export function saveLanguage(lang: Language): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(LANGUAGE_STORAGE_KEY, lang)
}

// 중첩된 객체에서 번역 가져오기
export function getTranslation(lang: Language, path: string): string {
  const keys = path.split('.')
  let value: any = translations[lang]
  
  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key]
    } else {
      // Fallback to English
      value = translations['en']
      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k]
        } else {
          return path // Return path if translation not found
        }
      }
      break
    }
  }
  
  return typeof value === 'string' ? value : path
}
