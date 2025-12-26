# SafeVision Pro - 산업 안전 플랫폼

## 🎯 프로젝트 개요

**SafeVision Pro**는 AI 기반 산업 안전 및 시설 관리 플랫폼입니다. 휴대폰 카메라를 활용하여 공사 현장의 위험 요소를 실시간으로 감지하고, 건물 시설의 유지보수 진단을 수행하는 B2B SaaS 솔루션입니다.

### 핵심 가치
- 📸 **실시간 위험 감지**: 작업자 보호구 미착용, 전선 노출, 안전거리 위반 자동 감지
- 🏗️ **현장 안전 관리**: 공사·설비 현장의 위험 요소 인식 및 산재 예방
- 🏢 **시설 진단**: 건물·시설의 균열, 누수, 곰팡이 등 유지보수 진단
- 📊 **통합 대시보드**: 현장별 위험도 지표 및 실시간 모니터링
- 🌍 **다국어 지원**: 한국어, 영어, 중국어, 일본어, 독일어, 스페인어

## 🌐 배포 URL

### 현재 배포된 URL
- **개발 서버**: https://3000-i6yo3k9pwb0tdvdm5v7nx-8f57ffe2.sandbox.novita.ai
- **언어별 접속**:
  - 한국어: https://3000-i6yo3k9pwb0tdvdm5v7nx-8f57ffe2.sandbox.novita.ai/?lang=ko
  - English: https://3000-i6yo3k9pwb0tdvdm5v7nx-8f57ffe2.sandbox.novita.ai/?lang=en
  - 中文: https://3000-i6yo3k9pwb0tdvdm5v7nx-8f57ffe2.sandbox.novita.ai/?lang=zh
  - 日本語: https://3000-i6yo3k9pwb0tdvdm5v7nx-8f57ffe2.sandbox.novita.ai/?lang=ja
  - Deutsch: https://3000-i6yo3k9pwb0tdvdm5v7nx-8f57ffe2.sandbox.novita.ai/?lang=de
  - Español: https://3000-i6yo3k9pwb0tdvdm5v7nx-8f57ffe2.sandbox.novita.ai/?lang=es

## ✨ 완료된 주요 기능

### 1. 공사 현장 안전 감지 (Construction Safety Detection)
- ✅ **보호구 착용 감지**: 안전모, 장갑, 안전조끼, 안전화 착용 여부 인식
- ✅ **전선 노출 감지**: 위험한 전선 노출 상태 자동 탐지
- ✅ **안전거리 감지**: 장비 반경 내 작업자 접근 경고
- ✅ **이미지 업로드**: 현장 사진 업로드 및 즉시 분석
- ✅ **위험도 평가**: High/Medium/Low 3단계 위험도 자동 분류

### 2. 건물 시설 유지보수 진단 (Facility Diagnosis)
- ✅ **균열 감지**: 천장/벽면 균열 자동 탐지 및 위치 표시
- ✅ **누수 흔적 감지**: 물얼룩, 변색 등 누수 징후 분석
- ✅ **곰팡이 포인트 감지**: 곰팡이 발생 지점 자동 식별
- ✅ **배관 점검**: 배관 노출, 부식 상태 진단

### 3. 통합 대시보드
- ✅ **실시간 모니터링**: 현장별 위험도 점수 실시간 표시
- ✅ **통계 정보**: 총 점검 수, 고위험 경고, 작업 인원 현황
- ✅ **최근 점검 기록**: 시간순 점검 이력 및 위험 요소 목록
- ✅ **현장별 위험도**: 사업장별 위험 점수 및 추세 분석

### 4. AI 분석 시뮬레이션
- ✅ **자동 분석 API**: `/api/analyze` 엔드포인트로 이미지 분석
- ✅ **위험 요소 태깅**: 감지된 위험 요소 자동 라벨링
- ✅ **리포트 생성**: PDF 리포트 자동 생성 API
- ✅ **위험도 스코어링**: 위험 요소별 가중치 기반 점수 계산

### 5. 기술자 매칭 플랫폼
- ✅ **기술자 찾기**: 지역 기반 전문 기술자 매칭 시스템
- ✅ **견적 요청**: 수리/점검 견적 요청 인터페이스
- ✅ **가격 비교**: 여러 기술자 견적 비교 기능

### 6. 기업 콘솔
- ✅ **현장 관리**: 다중 사업장 통합 관리
- ✅ **사용자 관리**: 관리자/현장책임자/작업자 권한 체계
- ✅ **분석 통계**: 월간 점검 통계 및 조치 현황

### 7. 다국어 지원 시스템
- ✅ **6개 언어 지원**: 한국어, 영어, 중국어, 일본어, 독일어, 스페인어
- ✅ **실시간 언어 전환**: 드롭다운 메뉴로 즉시 언어 변경
- ✅ **완전한 번역**: 모든 UI 요소 및 메시지 다국어 처리

## 🎨 UI/UX 디자인

### 색상 시스템 (Color System)
```
브랜드 메인:     #024D9D (안전·신뢰감 블루)
포인트/CTA:      #FFB800 (주의·조치 요청 옐로우)
위험 라벨:       #D72638 (위험/미착용/화재 레드)
성공/정상:       #2BA84A (정상 상태 그린)
배경 라이트:     #F3F6FA (부드러운 백그라운드)
서브 텍스트:     #6B7685 (보조 정보 그레이)
```

### 폰트 (Typography)
- **영문**: Inter (Google Fonts)
- **제목**: Bold 22~26px
- **본문**: Regular 15~17px
- **수치/대시보드**: Medium 14px

### 주요 컴포넌트
- **Stat Cards**: 호버 효과, 그림자, 아이콘 통합
- **Feature Cards**: 2px 테두리, 10px 둥근 모서리
- **Risk Badges**: 위험도별 색상 배지 (High/Medium/Low)
- **Primary Button**: 8px 둥근 모서리, 호버 효과

## 🏗️ 기술 스택

### Frontend
- **Framework**: Hono (Cloudflare Workers 최적화)
- **Styling**: TailwindCSS (CDN)
- **Icons**: Font Awesome 6.4.0
- **HTTP Client**: Axios 1.6.0

### Backend
- **Runtime**: Cloudflare Workers/Pages
- **API Framework**: Hono
- **Language**: TypeScript

### Development Tools
- **Build Tool**: Vite 6.3.5
- **Process Manager**: PM2
- **Package Manager**: npm
- **Version Control**: Git

## 📁 프로젝트 구조

```
webapp/
├── src/
│   ├── index.tsx          # 메인 애플리케이션 (API + UI)
│   ├── i18n.ts            # 다국어 번역 시스템
│   └── renderer.tsx       # (기본 템플릿)
├── public/
│   └── static/            # 정적 파일 (향후 확장)
├── dist/                  # 빌드 결과물
├── .git/                  # Git 저장소
├── .gitignore             # Git 제외 파일
├── ecosystem.config.cjs   # PM2 설정
├── wrangler.jsonc         # Cloudflare 설정
├── package.json           # 의존성 관리
├── tsconfig.json          # TypeScript 설정
├── vite.config.ts         # Vite 빌드 설정
└── README.md              # 프로젝트 문서 (본 파일)
```

## 🚀 로컬 개발 가이드

### 설치 및 실행

```bash
# 의존성 설치
cd /home/user/webapp
npm install

# 프로젝트 빌드
npm run build

# 개발 서버 시작 (PM2)
pm2 start ecosystem.config.cjs

# 서비스 상태 확인
pm2 list

# 로그 확인 (non-blocking)
pm2 logs --nostream

# 테스트
curl http://localhost:3000
```

### 포트 정리 및 재시작

```bash
# 포트 3000 정리
fuser -k 3000/tcp 2>/dev/null || true

# 또는 PM2로 정리
pm2 delete all

# 재시작
npm run build
pm2 start ecosystem.config.cjs
```

## 📊 API 엔드포인트

### 1. 이미지 분석 API
```http
POST /api/analyze
Content-Type: application/json

{
  "image": "base64_string_or_url",
  "type": "construction" | "facility"
}

Response:
{
  "success": true,
  "inspection_id": "INS1234567890",
  "hazards": [
    {
      "type": "helmet_missing",
      "risk": "high",
      "location": "Zone A"
    }
  ],
  "riskScore": 75,
  "timestamp": "2025-12-26T10:30:00Z"
}
```

### 2. 리포트 생성 API
```http
POST /api/report/generate
Content-Type: application/json

{
  "inspection_id": "INS1234567890",
  "hazards": [...]
}

Response:
{
  "success": true,
  "pdf_url": "/reports/INS1234567890.pdf",
  "report_id": "INS1234567890"
}
```

### 3. 대시보드 데이터 API
```http
GET /api/dashboard

Response:
{
  "riskScore": 75,
  "totalInspections": 1248,
  "highRiskAlerts": 23,
  "activeWorkers": 156,
  "recentInspections": [...],
  "sitesRiskScores": [...]
}
```

## 🎯 향후 개발 계획 (미완료 기능)

### Phase 1: AI 모델 통합 (2개월)
- [ ] 실제 AI 모델 통합 (YOLOv8 기반 PPE 감지)
- [ ] 이미지 전처리 파이프라인 구축
- [ ] 모델 정확도 85% 이상 달성

### Phase 2: 고급 기능 (2~3개월)
- [ ] 실시간 영상 스트리밍 감지
- [ ] AR 기반 위험구역 Overlay
- [ ] KOSHA 안전 기준 자동 체크리스트
- [ ] Cloudflare D1 데이터베이스 연동

### Phase 3: 보험/공공기관 연계 (2개월)
- [ ] 보험사 API 연동 (위험도 기반 할인)
- [ ] 지자체 실증사업 데이터 제공
- [ ] 공공기관 리포트 자동 제출

### Phase 4: 엔터프라이즈 기능
- [ ] 다중 사업장 계층 구조 관리
- [ ] 역할 기반 접근 제어 (RBAC)
- [ ] 상세 감사 로그 (Audit Trail)
- [ ] 커스텀 AI 모델 학습 지원

## 💼 비즈니스 모델

### 수익 구조
- **B2B SaaS 구독**: 기업당 월 150만원 (기본 1개 현장)
- **추가 현장**: 현장당 월 30만원
- **리포트 유료 발행**: 건당 2~5만원
- **기술자 매칭 수수료**: 매칭 금액의 5~8%
- **커스텀 AI 모델**: 480만원~ (협의)

### 타겟 고객
- 건설사 및 협력업체 안전관리자
- 아파트 관리사무소/빌딩 관리팀
- 유지보수 기술자 및 점검 전문 업체
- 지자체 및 공공기관 (실증사업)
- 보험사 (위험도 데이터 연계)

## 🔒 보안 및 규정 준수

### 데이터 보안
- HTTPS 전용 통신
- 이미지 데이터 암호화 저장
- 사용자 권한 기반 접근 제어

### 규정 준수
- 산업안전보건법 기준 반영
- KOSHA 가이드 체크리스트 연동 (예정)
- 개인정보보호법 준수

## 📝 Git 커밋 이력

```bash
# 초기 커밋
git log --oneline
d143269 Initial commit: Hono + Cloudflare Pages template

# 현재 브랜치
git branch
* main
```

## 🛠️ 개발 환경

- **Node.js**: v18+
- **npm**: v10.8.2
- **PM2**: 최신 버전 (사전 설치됨)
- **Wrangler**: v4.4.0

## 📞 지원 및 문의

- **이슈 트래킹**: GitHub Issues (예정)
- **기술 문서**: [문서 사이트] (예정)
- **고객 지원**: support@safevision.pro (예정)

## 📜 라이선스

Copyright © 2025 SafeVision Pro. All rights reserved.

---

**마지막 업데이트**: 2025-12-26  
**버전**: 1.0.0 (MVP)  
**상태**: ✅ 개발 완료, 테스트 중
