// 119 자동신고 시스템 번역 추가

export const emergency119Translations = {
  ko: {
    emergency: {
      title: '119 긴급 신고',
      subtitle: '화재·연기·비명·쓰러짐 자동 감지 & 신고',
      startMonitoring: '실시간 감지 시작',
      stopMonitoring: '감지 중지',
      status: {
        idle: '대기중',
        monitoring: '감지 중',
        detecting: '위험 감지!',
        reporting: '신고 전송 중',
        reported: '신고 완료'
      },
      
      // 감지 유형
      types: {
        fire: '화재/연기',
        collapse: '붕괴/낙석',
        fall: '쓰러짐/부상',
        scream: '비명/고음',
        spark: '전기 스파크',
        gas: '가스 누출',
        explosion: '폭발음'
      },
      
      // 119 신고 모달
      modal: {
        title: '⚠ 119에 자동 신고합니다',
        countdownTitle: '초 후 신고됩니다',
        location: '위치',
        incidentType: '사고 유형',
        sendingInfo: '전송 정보',
        gps: 'GPS 좌표',
        photos: '현장 사진',
        audio: '음성 로그',
        riskLog: '위험 로그',
        
        // 버튼
        reportNow: '긴급 신고 (즉시)',
        cancel: '취소',
        adminOnly: '관리자에게만 알림',
        retry: '재시도',
        callAdmin: '관리자 호출',
        smsSend: 'SMS+전화 동시발송'
      },
      
      // 전송 중
      sending: {
        title: '신고 전송 중...',
        subtitle: '소방청(119) 연결 → GPS / 사진 / 로그 동기화',
        gpsAttached: 'GPS 좌표 첨부 완료',
        addressConfirmed: '현장 주소 확인',
        typeAnalyzed: '사고 유형 분석',
        photosAttached: '사진 첨부 완료',
        sending: '전송 중...',
        voicePrompt: '119 신고가 전송되었습니다. 주변 위험 인원을 대피시키십시오.'
      },
      
      // 완료
      success: {
        title: '119 신고 완료',
        message: '구조 요청이 접수되었습니다.',
        viewDashboard: '현장 대시보드 보기',
        downloadReport: '리포트 다운로드',
        viewMap: '위험구역 지도 보기'
      },
      
      // 실패
      failure: {
        title: '신고 실패',
        networkError: '네트워크 장애 또는 GPS 오류',
        retry: '재시도',
        contactAdmin: '관리자에게 연락'
      },
      
      // 신고 이력
      history: {
        title: '119 신고 이력',
        viewAll: '전체 이력 보기',
        noRecords: '신고 기록이 없습니다',
        incident: '사고',
        reportedAt: '신고 시각',
        status: '상태',
        location: '위치',
        attachments: '첨부 파일'
      },
      
      // 설정
      settings: {
        title: '긴급 감지 설정',
        workMode: '작업 모드',
        modes: {
          construction: '고소작업',
          electrical: '전기작업',
          fire: '화기작업',
          confined: '밀폐공간',
          general: '일반 점검'
        },
        sensitivity: '감지 민감도',
        high: '높음',
        medium: '중간',
        low: '낮음',
        autoReport: '자동 신고',
        manualApproval: '수동 승인 필요',
        soundAlert: '음성 경고',
        vibration: '진동 알림',
        gpsTemplate: '현장별 GPS 템플릿'
      },
      
      // 감지 상태 메시지
      detection: {
        fireDetected: '🔥 화재/연기 감지됨!',
        collapseDetected: '⚠ 붕괴 위험 감지!',
        fallDetected: '🚑 작업자 쓰러짐 감지!',
        screamDetected: '🔊 비명 소리 감지!',
        sparkDetected: '⚡ 전기 스파크 감지!',
        analyzing: '위험 상황 분석 중...',
        safe: '안전 상태 유지 중'
      },
      
      // 실시간 로그
      log: {
        started: '실시간 감지 시작됨',
        stopped: '감지 중지됨',
        hazardDetected: '위험 요소 감지',
        reportSent: '119 신고 전송됨',
        adminNotified: '관리자 알림 발송됨',
        locationUpdated: '위치 정보 업데이트됨'
      }
    }
  },
  
  en: {
    emergency: {
      title: '119 Emergency Report',
      subtitle: 'Auto-detect & report fire, smoke, screams, falls',
      startMonitoring: 'Start Real-time Detection',
      stopMonitoring: 'Stop Detection',
      status: {
        idle: 'Idle',
        monitoring: 'Monitoring',
        detecting: 'Hazard Detected!',
        reporting: 'Reporting',
        reported: 'Reported'
      },
      
      types: {
        fire: 'Fire/Smoke',
        collapse: 'Collapse/Rockfall',
        fall: 'Fall/Injury',
        scream: 'Scream/High Pitch',
        spark: 'Electrical Spark',
        gas: 'Gas Leak',
        explosion: 'Explosion Sound'
      },
      
      modal: {
        title: '⚠ Auto-reporting to 119',
        countdownTitle: 'seconds until report',
        location: 'Location',
        incidentType: 'Incident Type',
        sendingInfo: 'Sending Info',
        gps: 'GPS Coordinates',
        photos: 'Site Photos',
        audio: 'Audio Log',
        riskLog: 'Risk Log',
        
        reportNow: 'Report Now (Immediate)',
        cancel: 'Cancel',
        adminOnly: 'Notify Admin Only',
        retry: 'Retry',
        callAdmin: 'Call Admin',
        smsSend: 'SMS + Call Together'
      },
      
      sending: {
        title: 'Sending Report...',
        subtitle: 'Connecting to 119 → Syncing GPS / Photos / Logs',
        gpsAttached: 'GPS coordinates attached',
        addressConfirmed: 'Site address confirmed',
        typeAnalyzed: 'Incident type analyzed',
        photosAttached: 'Photos attached',
        sending: 'Sending...',
        voicePrompt: '119 report sent. Please evacuate nearby personnel from danger.'
      },
      
      success: {
        title: '119 Report Completed',
        message: 'Rescue request has been received.',
        viewDashboard: 'View Site Dashboard',
        downloadReport: 'Download Report',
        viewMap: 'View Hazard Map'
      },
      
      failure: {
        title: 'Report Failed',
        networkError: 'Network failure or GPS error',
        retry: 'Retry',
        contactAdmin: 'Contact Admin'
      },
      
      history: {
        title: '119 Report History',
        viewAll: 'View All History',
        noRecords: 'No report records',
        incident: 'Incident',
        reportedAt: 'Reported At',
        status: 'Status',
        location: 'Location',
        attachments: 'Attachments'
      },
      
      settings: {
        title: 'Emergency Detection Settings',
        workMode: 'Work Mode',
        modes: {
          construction: 'High-altitude Work',
          electrical: 'Electrical Work',
          fire: 'Hot Work',
          confined: 'Confined Space',
          general: 'General Inspection'
        },
        sensitivity: 'Detection Sensitivity',
        high: 'High',
        medium: 'Medium',
        low: 'Low',
        autoReport: 'Auto Report',
        manualApproval: 'Manual Approval Required',
        soundAlert: 'Sound Alert',
        vibration: 'Vibration Alert',
        gpsTemplate: 'GPS Template by Site'
      },
      
      detection: {
        fireDetected: '🔥 Fire/Smoke Detected!',
        collapseDetected: '⚠ Collapse Risk Detected!',
        fallDetected: '🚑 Worker Fall Detected!',
        screamDetected: '🔊 Scream Detected!',
        sparkDetected: '⚡ Electrical Spark Detected!',
        analyzing: 'Analyzing hazard situation...',
        safe: 'Safe status maintained'
      },
      
      log: {
        started: 'Real-time detection started',
        stopped: 'Detection stopped',
        hazardDetected: 'Hazard detected',
        reportSent: '119 report sent',
        adminNotified: 'Admin notified',
        locationUpdated: 'Location updated'
      }
    }
  },
  
  zh: {
    emergency: {
      title: '119紧急报告',
      subtitle: '自动检测和报告火灾、烟雾、尖叫、跌倒',
      startMonitoring: '开始实时检测',
      stopMonitoring: '停止检测',
      status: {
        idle: '待机',
        monitoring: '监控中',
        detecting: '检测到危险！',
        reporting: '报告中',
        reported: '已报告'
      },
      
      types: {
        fire: '火灾/烟雾',
        collapse: '坍塌/落石',
        fall: '跌倒/受伤',
        scream: '尖叫/高音',
        spark: '电火花',
        gas: '气体泄漏',
        explosion: '爆炸声'
      },
      
      modal: {
        title: '⚠ 正在自动报告119',
        countdownTitle: '秒后报告',
        location: '位置',
        incidentType: '事故类型',
        sendingInfo: '发送信息',
        gps: 'GPS坐标',
        photos: '现场照片',
        audio: '音频日志',
        riskLog: '风险日志',
        
        reportNow: '立即报告',
        cancel: '取消',
        adminOnly: '仅通知管理员',
        retry: '重试',
        callAdmin: '呼叫管理员',
        smsSend: '短信+电话同时发送'
      },
      
      sending: {
        title: '正在发送报告...',
        subtitle: '连接119 → 同步GPS/照片/日志',
        gpsAttached: 'GPS坐标已附加',
        addressConfirmed: '现场地址已确认',
        typeAnalyzed: '事故类型已分析',
        photosAttached: '照片已附加',
        sending: '发送中...',
        voicePrompt: '119报告已发送。请疏散附近危险人员。'
      },
      
      success: {
        title: '119报告完成',
        message: '已收到救援请求。',
        viewDashboard: '查看现场仪表板',
        downloadReport: '下载报告',
        viewMap: '查看危险地图'
      },
      
      failure: {
        title: '报告失败',
        networkError: '网络故障或GPS错误',
        retry: '重试',
        contactAdmin: '联系管理员'
      },
      
      history: {
        title: '119报告历史',
        viewAll: '查看所有历史',
        noRecords: '无报告记录',
        incident: '事故',
        reportedAt: '报告时间',
        status: '状态',
        location: '位置',
        attachments: '附件'
      },
      
      settings: {
        title: '紧急检测设置',
        workMode: '工作模式',
        modes: {
          construction: '高空作业',
          electrical: '电气作业',
          fire: '热作业',
          confined: '受限空间',
          general: '一般检查'
        },
        sensitivity: '检测灵敏度',
        high: '高',
        medium: '中',
        low: '低',
        autoReport: '自动报告',
        manualApproval: '需要手动批准',
        soundAlert: '声音警报',
        vibration: '震动提醒',
        gpsTemplate: '按站点的GPS模板'
      },
      
      detection: {
        fireDetected: '🔥 检测到火灾/烟雾！',
        collapseDetected: '⚠ 检测到坍塌风险！',
        fallDetected: '🚑 检测到工人跌倒！',
        screamDetected: '🔊 检测到尖叫！',
        sparkDetected: '⚡ 检测到电火花！',
        analyzing: '正在分析危险情况...',
        safe: '保持安全状态'
      },
      
      log: {
        started: '实时检测已启动',
        stopped: '检测已停止',
        hazardDetected: '检测到危险',
        reportSent: '119报告已发送',
        adminNotified: '管理员已通知',
        locationUpdated: '位置已更新'
      }
    }
  },
  
  ja: {
    emergency: {
      title: '119緊急通報',
      subtitle: '火災・煙・叫び声・転倒を自動検知・通報',
      startMonitoring: 'リアルタイム検知開始',
      stopMonitoring: '検知停止',
      status: {
        idle: '待機中',
        monitoring: '監視中',
        detecting: '危険検知！',
        reporting: '通報中',
        reported: '通報完了'
      },
      
      types: {
        fire: '火災/煙',
        collapse: '崩壊/落石',
        fall: '転倒/負傷',
        scream: '叫び声/高音',
        spark: '電気スパーク',
        gas: 'ガス漏れ',
        explosion: '爆発音'
      },
      
      modal: {
        title: '⚠ 119に自動通報します',
        countdownTitle: '秒後に通報',
        location: '位置',
        incidentType: '事故種類',
        sendingInfo: '送信情報',
        gps: 'GPS座標',
        photos: '現場写真',
        audio: '音声ログ',
        riskLog: 'リスクログ',
        
        reportNow: '緊急通報（即時）',
        cancel: 'キャンセル',
        adminOnly: '管理者にのみ通知',
        retry: '再試行',
        callAdmin: '管理者呼出',
        smsSend: 'SMS+電話同時送信'
      },
      
      sending: {
        title: '通報送信中...',
        subtitle: '119接続 → GPS/写真/ログ同期',
        gpsAttached: 'GPS座標添付完了',
        addressConfirmed: '現場住所確認',
        typeAnalyzed: '事故種類分析',
        photosAttached: '写真添付完了',
        sending: '送信中...',
        voicePrompt: '119通報が送信されました。周辺の危険人員を避難させてください。'
      },
      
      success: {
        title: '119通報完了',
        message: '救助要請が受理されました。',
        viewDashboard: '現場ダッシュボード表示',
        downloadReport: 'レポートダウンロード',
        viewMap: '危険区域地図表示'
      },
      
      failure: {
        title: '通報失敗',
        networkError: 'ネットワーク障害またはGPSエラー',
        retry: '再試行',
        contactAdmin: '管理者に連絡'
      },
      
      history: {
        title: '119通報履歴',
        viewAll: '全履歴表示',
        noRecords: '通報記録なし',
        incident: '事故',
        reportedAt: '通報時刻',
        status: 'ステータス',
        location: '位置',
        attachments: '添付ファイル'
      },
      
      settings: {
        title: '緊急検知設定',
        workMode: '作業モード',
        modes: {
          construction: '高所作業',
          electrical: '電気作業',
          fire: '火気作業',
          confined: '密閉空間',
          general: '一般点検'
        },
        sensitivity: '検知感度',
        high: '高',
        medium: '中',
        low: '低',
        autoReport: '自動通報',
        manualApproval: '手動承認必要',
        soundAlert: '音声警告',
        vibration: '振動通知',
        gpsTemplate: 'サイト別GPSテンプレート'
      },
      
      detection: {
        fireDetected: '🔥 火災/煙検知！',
        collapseDetected: '⚠ 崩壊危険検知！',
        fallDetected: '🚑 作業者転倒検知！',
        screamDetected: '🔊 叫び声検知！',
        sparkDetected: '⚡ 電気スパーク検知！',
        analyzing: '危険状況分析中...',
        safe: '安全状態維持中'
      },
      
      log: {
        started: 'リアルタイム検知開始',
        stopped: '検知停止',
        hazardDetected: '危険検知',
        reportSent: '119通報送信',
        adminNotified: '管理者通知完了',
        locationUpdated: '位置情報更新'
      }
    }
  },
  
  de: {
    emergency: {
      title: '119 Notfallmeldung',
      subtitle: 'Automatische Erkennung & Meldung von Feuer, Rauch, Schreien, Stürzen',
      startMonitoring: 'Echtzeiterkennung starten',
      stopMonitoring: 'Erkennung stoppen',
      status: {
        idle: 'Bereit',
        monitoring: 'Überwachung',
        detecting: 'Gefahr erkannt!',
        reporting: 'Meldung',
        reported: 'Gemeldet'
      },
      
      types: {
        fire: 'Feuer/Rauch',
        collapse: 'Einsturz/Steinschlag',
        fall: 'Sturz/Verletzung',
        scream: 'Schrei/Hohe Töne',
        spark: 'Elektrischer Funke',
        gas: 'Gasleck',
        explosion: 'Explosionsgeräusch'
      },
      
      modal: {
        title: '⚠ Auto-Meldung an 119',
        countdownTitle: 'Sekunden bis zur Meldung',
        location: 'Standort',
        incidentType: 'Vorfalltyp',
        sendingInfo: 'Sendeinfo',
        gps: 'GPS-Koordinaten',
        photos: 'Standortfotos',
        audio: 'Audiolog',
        riskLog: 'Risikolog',
        
        reportNow: 'Sofort melden',
        cancel: 'Abbrechen',
        adminOnly: 'Nur Admin benachrichtigen',
        retry: 'Wiederholen',
        callAdmin: 'Admin anrufen',
        smsSend: 'SMS + Anruf zusammen'
      },
      
      sending: {
        title: 'Meldung wird gesendet...',
        subtitle: 'Verbindung zu 119 → GPS / Fotos / Protokolle synchronisieren',
        gpsAttached: 'GPS-Koordinaten angehängt',
        addressConfirmed: 'Standortadresse bestätigt',
        typeAnalyzed: 'Vorfalltyp analysiert',
        photosAttached: 'Fotos angehängt',
        sending: 'Wird gesendet...',
        voicePrompt: '119-Meldung gesendet. Bitte evakuieren Sie nahegelegenes Personal.'
      },
      
      success: {
        title: '119-Meldung abgeschlossen',
        message: 'Rettungsanfrage wurde empfangen.',
        viewDashboard: 'Standort-Dashboard anzeigen',
        downloadReport: 'Bericht herunterladen',
        viewMap: 'Gefahrenkarte anzeigen'
      },
      
      failure: {
        title: 'Meldung fehlgeschlagen',
        networkError: 'Netzwerkfehler oder GPS-Fehler',
        retry: 'Wiederholen',
        contactAdmin: 'Admin kontaktieren'
      },
      
      history: {
        title: '119-Meldungsverlauf',
        viewAll: 'Gesamten Verlauf anzeigen',
        noRecords: 'Keine Meldungsaufzeichnungen',
        incident: 'Vorfall',
        reportedAt: 'Gemeldet am',
        status: 'Status',
        location: 'Standort',
        attachments: 'Anhänge'
      },
      
      settings: {
        title: 'Notfall-Erkennungseinstellungen',
        workMode: 'Arbeitsmodus',
        modes: {
          construction: 'Höhenarbeit',
          electrical: 'Elektroarbeit',
          fire: 'Heißarbeit',
          confined: 'Enger Raum',
          general: 'Allgemeine Inspektion'
        },
        sensitivity: 'Erkennungsempfindlichkeit',
        high: 'Hoch',
        medium: 'Mittel',
        low: 'Niedrig',
        autoReport: 'Auto-Meldung',
        manualApproval: 'Manuelle Genehmigung erforderlich',
        soundAlert: 'Tonalarm',
        vibration: 'Vibrationsalarm',
        gpsTemplate: 'GPS-Vorlage nach Standort'
      },
      
      detection: {
        fireDetected: '🔥 Feuer/Rauch erkannt!',
        collapseDetected: '⚠ Einsturzrisiko erkannt!',
        fallDetected: '🚑 Arbeitersturz erkannt!',
        screamDetected: '🔊 Schrei erkannt!',
        sparkDetected: '⚡ Elektrischer Funke erkannt!',
        analyzing: 'Gefahrensituation wird analysiert...',
        safe: 'Sicherer Status beibehalten'
      },
      
      log: {
        started: 'Echtzeiterkennung gestartet',
        stopped: 'Erkennung gestoppt',
        hazardDetected: 'Gefahr erkannt',
        reportSent: '119-Meldung gesendet',
        adminNotified: 'Admin benachrichtigt',
        locationUpdated: 'Standort aktualisiert'
      }
    }
  },
  
  es: {
    emergency: {
      title: 'Informe de Emergencia 119',
      subtitle: 'Detección y reporte automático de fuego, humo, gritos, caídas',
      startMonitoring: 'Iniciar Detección en Tiempo Real',
      stopMonitoring: 'Detener Detección',
      status: {
        idle: 'Inactivo',
        monitoring: 'Monitoreando',
        detecting: '¡Peligro Detectado!',
        reporting: 'Informando',
        reported: 'Informado'
      },
      
      types: {
        fire: 'Fuego/Humo',
        collapse: 'Colapso/Desprendimiento',
        fall: 'Caída/Lesión',
        scream: 'Grito/Tono Alto',
        spark: 'Chispa Eléctrica',
        gas: 'Fuga de Gas',
        explosion: 'Sonido de Explosión'
      },
      
      modal: {
        title: '⚠ Reporte automático a 119',
        countdownTitle: 'segundos hasta el reporte',
        location: 'Ubicación',
        incidentType: 'Tipo de Incidente',
        sendingInfo: 'Enviando Info',
        gps: 'Coordenadas GPS',
        photos: 'Fotos del Sitio',
        audio: 'Registro de Audio',
        riskLog: 'Registro de Riesgo',
        
        reportNow: 'Reportar Ahora (Inmediato)',
        cancel: 'Cancelar',
        adminOnly: 'Solo Notificar al Admin',
        retry: 'Reintentar',
        callAdmin: 'Llamar Admin',
        smsSend: 'SMS + Llamada Juntos'
      },
      
      sending: {
        title: 'Enviando Reporte...',
        subtitle: 'Conectando a 119 → Sincronizando GPS / Fotos / Registros',
        gpsAttached: 'Coordenadas GPS adjuntadas',
        addressConfirmed: 'Dirección del sitio confirmada',
        typeAnalyzed: 'Tipo de incidente analizado',
        photosAttached: 'Fotos adjuntadas',
        sending: 'Enviando...',
        voicePrompt: 'Reporte 119 enviado. Por favor evacue al personal cercano del peligro.'
      },
      
      success: {
        title: 'Reporte 119 Completado',
        message: 'Solicitud de rescate recibida.',
        viewDashboard: 'Ver Panel del Sitio',
        downloadReport: 'Descargar Reporte',
        viewMap: 'Ver Mapa de Peligros'
      },
      
      failure: {
        title: 'Reporte Fallido',
        networkError: 'Fallo de red o error de GPS',
        retry: 'Reintentar',
        contactAdmin: 'Contactar Admin'
      },
      
      history: {
        title: 'Historial de Reportes 119',
        viewAll: 'Ver Todo el Historial',
        noRecords: 'Sin registros de reportes',
        incident: 'Incidente',
        reportedAt: 'Reportado en',
        status: 'Estado',
        location: 'Ubicación',
        attachments: 'Adjuntos'
      },
      
      settings: {
        title: 'Configuración de Detección de Emergencia',
        workMode: 'Modo de Trabajo',
        modes: {
          construction: 'Trabajo en Altura',
          electrical: 'Trabajo Eléctrico',
          fire: 'Trabajo en Caliente',
          confined: 'Espacio Confinado',
          general: 'Inspección General'
        },
        sensitivity: 'Sensibilidad de Detección',
        high: 'Alta',
        medium: 'Media',
        low: 'Baja',
        autoReport: 'Reporte Automático',
        manualApproval: 'Aprobación Manual Requerida',
        soundAlert: 'Alerta Sonora',
        vibration: 'Alerta de Vibración',
        gpsTemplate: 'Plantilla GPS por Sitio'
      },
      
      detection: {
        fireDetected: '🔥 ¡Fuego/Humo Detectado!',
        collapseDetected: '⚠ ¡Riesgo de Colapso Detectado!',
        fallDetected: '🚑 ¡Caída de Trabajador Detectada!',
        screamDetected: '🔊 ¡Grito Detectado!',
        sparkDetected: '⚡ ¡Chispa Eléctrica Detectada!',
        analyzing: 'Analizando situación de peligro...',
        safe: 'Estado seguro mantenido'
      },
      
      log: {
        started: 'Detección en tiempo real iniciada',
        stopped: 'Detección detenida',
        hazardDetected: 'Peligro detectado',
        reportSent: 'Reporte 119 enviado',
        adminNotified: 'Admin notificado',
        locationUpdated: 'Ubicación actualizada'
      }
    }
  }
}
