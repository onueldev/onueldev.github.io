import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../contexts/ThemeContext";
import Navbar from "../components/Navbar";

export default function PrivacyPage() {
  const { i18n } = useTranslation();
  const { isDark } = useTheme();
  const isKo = i18n.language === "ko";

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const bg = isDark ? "bg-[#020617]" : "bg-[#F0F9FF]";
  const headingColor = isDark ? "text-[#F8FAFC]" : "text-[#0F172A]";
  const textColor = isDark ? "text-[#F8FAFC]/70" : "text-[#475569]";
  const accentColor = isDark ? "text-[#BAE6FD]" : "text-[#0284C7]";
  const sectionTitle = isDark ? "text-[#BAE6FD]" : "text-[#0284C7]";
  const cardBg = isDark ? "bg-[#0F172A]/60 border-[#6366F1]/20" : "bg-white/80 border-[#6366F1]/10";
  const divider = isDark ? "border-[#6366F1]/15" : "border-[#6366F1]/10";
  const subList = "list-disc list-inside ml-5 mt-1 space-y-1";
  const backLink = isDark
    ? "text-[#BAE6FD]/70 hover:text-[#BAE6FD]"
    : "text-[#0284C7]/70 hover:text-[#0284C7]";

  return (
    <div className={`min-h-screen ${bg} transition-colors duration-300`}>
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-16 pt-24">

        {/* Back link */}
        <Link to="/" className={`inline-flex items-center gap-2 text-sm mb-10 transition-colors ${backLink}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          {isKo ? "onueldev 홈으로" : "Back to onueldev"}
        </Link>

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#6366F1] mb-3">
            onueldev · Legal
          </p>
          <h1 className={`text-3xl sm:text-4xl font-bold mb-3 ${headingColor}`}>
            {isKo ? "개인정보처리방침" : "Privacy Policy"}
          </h1>
          <p className={`text-sm ${textColor}`}>
            {isKo
              ? "최종 수정일: 2026년 7월 8일"
              : "Last updated: July 8, 2026"}
          </p>
        </div>

        <div className={`border rounded-2xl p-8 space-y-8 ${cardBg}`}>

          {isKo ? (
            <>
              <section>
                <p className={`text-sm leading-relaxed ${textColor}`}>
                  본 방침은 onueldev(이하 "회사")가 제공하는 서비스(이하 "서비스")가 사용자의
                  개인정보를 어떻게 수집·이용·보관·제공하는지 안내합니다.
                </p>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>1. 수집하는 개인정보 항목</h2>
                <p className={`text-sm mb-3 ${textColor}`}>회사는 다음과 같은 개인정보를 수집합니다.</p>
                <ul className={`text-sm space-y-2 list-disc list-inside ${textColor}`}>
                  <li>위치 정보 (홈 화면 날씨 표시를 위해 위치 권한 허용 시)
                    <ul className={subList}>
                      <li>GPS 또는 IP 기반 위경도 및 지역명</li>
                    </ul>
                  </li>
                  <li>사진 및 미디어 (메모·일기에 이미지 첨부 시)
                    <ul className={subList}>
                      <li>사용자가 직접 선택한 사진</li>
                    </ul>
                  </li>
                  <li>광고 식별자 (Google 광고 서비스 이용 시)
                    <ul className={subList}>
                      <li>iOS: IDFA, Android: GAID</li>
                    </ul>
                  </li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>2. 개인정보 수집 및 이용 목적</h2>
                <ul className={`text-sm space-y-2 list-disc list-inside ${textColor}`}>
                  <li>위치 정보: 홈 화면에 현재 위치의 날씨·미세먼지 정보 표시</li>
                  <li>사진·미디어: 일기·메모에 이미지 첨부</li>
                  <li>광고 식별자: 맞춤형 광고 제공 (Google AdMob)</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>3. 개인정보 보유 및 이용 기간</h2>
                <ul className={`text-sm space-y-2 list-disc list-inside ${textColor}`}>
                  <li>로컬 데이터(할일, 일기, 지출, 메모, 식재 관리): 앱 삭제 전까지 기기 내 보관</li>
                  <li>백업 파일: 사용자가 직접 내보낸 백업(zip)은 사용자가 지정한 위치에 저장되며, 회사는 별도로 보관하지 않음</li>
                  <li>위치 정보: 날씨 조회에만 일시 사용하며, 원시 좌표는 저장하지 않음(표시용 지역명만 기기 내 캐시)</li>
                  <li>광고 식별자: Google의 개인정보처리방침에 따라 처리됨</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>4. 개인정보 제3자 제공</h2>
                <p className={`text-sm mb-3 ${textColor}`}>회사는 원칙적으로 사용자의 개인정보를 제3자에게 제공하지 않습니다.</p>
                <p className={`text-sm mb-3 ${textColor}`}>단, 다음의 경우는 예외입니다.</p>
                <ul className={`text-sm space-y-2 list-disc list-inside ${textColor}`}>
                  <li>Google LLC (Google AdMob)
                    <ul className={subList}>
                      <li>제공 정보: 광고 식별자</li>
                      <li>목적: 광고 서비스</li>
                    </ul>
                  </li>
                  <li>Open-Meteo (open-meteo.com)
                    <ul className={subList}>
                      <li>제공 정보: 위도·경도 (GPS 또는 IP 기반)</li>
                      <li>목적: 날씨·대기질 정보 조회 (오픈 API, 무료)</li>
                    </ul>
                  </li>
                  <li>IP 위치 조회 서비스 (ipwho.is, ipapi.co)
                    <ul className={subList}>
                      <li>제공 정보: IP 주소</li>
                      <li>목적: GPS 미사용 시 대략적 위치(도시/좌표) 파악 (무료)</li>
                    </ul>
                  </li>
                  <li>BigDataCloud (bigdatacloud.net)
                    <ul className={subList}>
                      <li>제공 정보: 위도·경도</li>
                      <li>목적: 좌표를 지역명으로 변환(역지오코딩). 기기 내장 지오코더가 앱 언어로 지역명을 제공하지 못할 때만 호출 (무료)</li>
                    </ul>
                  </li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>5. 개인정보 처리 위탁</h2>
                <p className={`text-sm mb-3 ${textColor}`}>회사는 서비스 운영을 위해 아래와 같이 개인정보 처리를 위탁하고 있습니다.</p>
                <ul className={`text-sm space-y-2 list-disc list-inside ${textColor}`}>
                  <li>Google LLC: 광고 서비스 (AdMob)</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>6. 사용자의 권리</h2>
                <p className={`text-sm mb-3 ${textColor}`}>사용자는 언제든지 다음 권리를 행사할 수 있습니다.</p>
                <ul className={`text-sm space-y-2 list-disc list-inside ${textColor}`}>
                  <li>개인정보 열람: 앱 내 데이터는 앱에서 직접 확인 가능</li>
                  <li>개인정보 삭제: 앱 삭제 시 모든 로컬 데이터가 함께 삭제됨</li>
                  <li>동의 철회:
                    <ul className={subList}>
                      <li>위치 정보: 기기 설정에서 위치 권한 해제 (권한 없이도 IP 기반으로 동작)</li>
                      <li>광고 식별자: 기기 설정에서 광고 추적 제한</li>
                    </ul>
                  </li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>7. 개인정보 보호 책임자</h2>
                <p className={`text-sm mb-3 ${textColor}`}>개인정보 처리에 관한 문의는 아래로 연락 주시기 바랍니다.</p>
                <ul className={`text-sm space-y-2 list-disc list-inside ${textColor}`}>
                  <li>이메일: <span className={`font-medium ${accentColor}`}>privacy@onuel.dev</span></li>
                  <li>웹사이트: https://onuel.dev/privacy</li>
                  <li>처리 기간: 접수 후 7일 이내 답변</li>
                </ul>
                <p className={`text-sm mt-4 leading-relaxed ${textColor}`}>
                  본 개인정보처리방침은 관련 법령 및 서비스 변경에 따라 업데이트될 수 있습니다.
                </p>
              </section>
            </>
          ) : (
            <>
              <section>
                <p className={`text-sm leading-relaxed ${textColor}`}>
                  This policy describes how onueldev (hereinafter the "Company") and its service collect,
                  use, store, and share your personal information.
                </p>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>1. Personal Information Collected</h2>
                <p className={`text-sm mb-3 ${textColor}`}>The Company collects the following personal information.</p>
                <ul className={`text-sm space-y-2 list-disc list-inside ${textColor}`}>
                  <li>Location information (when you grant location permission for home-screen weather)
                    <ul className={subList}>
                      <li>GPS- or IP-based coordinates and region name</li>
                    </ul>
                  </li>
                  <li>Photos and media (when attaching images to notes or journal entries)
                    <ul className={subList}>
                      <li>Photos selected directly by the user</li>
                    </ul>
                  </li>
                  <li>Advertising identifier (when using Google advertising services)
                    <ul className={subList}>
                      <li>iOS: IDFA, Android: GAID</li>
                    </ul>
                  </li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>2. Purpose of Collection and Use</h2>
                <ul className={`text-sm space-y-2 list-disc list-inside ${textColor}`}>
                  <li>Location information: Displaying current-location weather and air quality on the home screen</li>
                  <li>Photos and media: Attaching images in journals and notes</li>
                  <li>Advertising identifier: Personalized ads (Google AdMob)</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>3. Retention and Use Period</h2>
                <ul className={`text-sm space-y-2 list-disc list-inside ${textColor}`}>
                  <li>Local data (tasks, journal, expenses, notes, pantry): Stored on device until app is deleted</li>
                  <li>Backup files: A backup (zip) you export is saved to a location you choose; the Company does not retain it separately</li>
                  <li>Location information: Used only transiently for weather lookup; raw coordinates are not stored (only the display region name is cached on device)</li>
                  <li>Advertising identifier: Processed in accordance with Google’s Privacy Policy</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>4. Sharing with Third Parties</h2>
                <p className={`text-sm mb-3 ${textColor}`}>The Company does not share your personal information with third parties as a general rule.</p>
                <p className={`text-sm mb-3 ${textColor}`}>Exceptions include the following.</p>
                <ul className={`text-sm space-y-2 list-disc list-inside ${textColor}`}>
                  <li>Google LLC (Google AdMob)
                    <ul className={subList}>
                      <li>Information provided: Advertising identifier</li>
                      <li>Purpose: Advertising services</li>
                    </ul>
                  </li>
                  <li>Open-Meteo (open-meteo.com)
                    <ul className={subList}>
                      <li>Information provided: Latitude/longitude (GPS- or IP-based)</li>
                      <li>Purpose: Weather and air-quality retrieval (open API, free)</li>
                    </ul>
                  </li>
                  <li>IP geolocation services (ipwho.is, ipapi.co)
                    <ul className={subList}>
                      <li>Information provided: IP address</li>
                      <li>Purpose: Approximate location (city/coordinates) when GPS is not used (free)</li>
                    </ul>
                  </li>
                  <li>BigDataCloud (bigdatacloud.net)
                    <ul className={subList}>
                      <li>Information provided: Latitude/longitude</li>
                      <li>Purpose: Reverse geocoding (converting coordinates to a region name), called only when the on-device geocoder cannot provide the region name in the app language (free)</li>
                    </ul>
                  </li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>5. Entrustment of Processing</h2>
                <p className={`text-sm mb-3 ${textColor}`}>The Company entrusts the processing of personal information as follows for service operations.</p>
                <ul className={`text-sm space-y-2 list-disc list-inside ${textColor}`}>
                  <li>Google LLC: Advertising services (AdMob)</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>6. User Rights</h2>
                <ul className={`text-sm space-y-2 list-disc list-inside ${textColor}`}>
                  <li>Access to personal information: Data within the app can be viewed directly</li>
                  <li>Deletion: All local data is deleted when the app is uninstalled</li>
                  <li>Withdrawal of consent:
                    <ul className={subList}>
                      <li>Location information: Revoke the location permission in device settings (the app still works using IP-based location)</li>
                      <li>Advertising identifier: Limit ad tracking in device settings</li>
                    </ul>
                  </li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>7. Privacy Officer</h2>
                <p className={`text-sm mb-3 ${textColor}`}>For inquiries regarding personal information processing, please contact:</p>
                <ul className={`text-sm space-y-2 list-disc list-inside ${textColor}`}>
                  <li>Email: <span className={`font-medium ${accentColor}`}>privacy@onuel.dev</span></li>
                  <li>Website: https://onuel.dev/privacy</li>
                  <li>Response time: Within 7 days of receipt</li>
                </ul>
                <p className={`text-sm mt-4 leading-relaxed ${textColor}`}>
                  This privacy policy may be updated in accordance with relevant laws and service changes.
                </p>
              </section>
            </>
          )}
        </div>

        <div className="flex justify-end mt-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm transition-all duration-200 ${
              isDark
                ? "border-[#6366F1]/30 text-[#BAE6FD]/70 hover:border-[#BAE6FD]/50 hover:text-[#BAE6FD]"
                : "border-[#6366F1]/25 text-[#0284C7]/70 hover:border-[#0284C7]/50 hover:text-[#0284C7]"
            }`}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
            {isKo ? "맨 위로" : "Back to top"}
          </button>
        </div>

        <p className={`text-center text-xs mt-4 ${textColor}`}>
          © 2026 onueldev. All rights reserved.
        </p>
      </div>
    </div>
  );
}
