import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../contexts/theme-context";
import Navbar from "../components/Navbar";

export default function TermsPage() {
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
            {isKo ? "서비스 통합 이용약관" : "Unified Terms of Service"}
          </h1>
          <p className={`text-sm ${textColor}`}>
            {isKo
              ? "최종 수정일: 2026년 7월 8일"
              : "Last updated: July 8, 2026"}
          </p>
        </div>

        <div className={`border rounded-2xl p-8 space-y-8 break-keep ${cardBg}`}>

          {isKo ? (
            <>
              <section>
                <p className={`text-sm leading-relaxed ${textColor}`}>
                  본 약관은 onueldev(이하 "회사")가 제공하는 서비스(이하 "서비스")의 이용에 관한 조건을 규정합니다.
                </p>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>1. 서비스 이용</h2>
                <ul className={`text-sm space-y-2 list-disc list-inside ${textColor}`}>
                  <li>"서비스"란 회사가 제공하는 모바일 애플리케이션, 게임, 웹 서비스 등 모든 디지털 서비스를 의미합니다.</li>
                  <li>13세 미만의 아동은 보호자의 동의 없이 서비스를 이용할 수 없습니다.</li>
                  <li>서비스의 정상적인 운영을 방해하는 행위는 금지됩니다.</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>2. 데이터 및 백업</h2>
                <ul className={`text-sm space-y-2 list-disc list-inside ${textColor}`}>
                  <li>모든 데이터는 사용자 기기에 로컬로 저장됩니다.</li>
                  <li>데이터 백업·복원은 설정 &gt; 데이터 관리 &gt; 내보내기/가져오기에서 백업 파일(zip)로 직접 관리할 수 있습니다.</li>
                  <li>백업 파일은 사용자가 직접 관리하며, 분실 시 복구를 보장하지 않습니다.</li>
                  <li>로컬 데이터는 앱 삭제 시 함께 삭제됩니다.</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>3. 광고</h2>
                <ul className={`text-sm space-y-2 list-disc list-inside ${textColor}`}>
                  <li>회사는 Google AdMob을 통해 광고를 표시합니다.</li>
                  <li>광고는 연령 등급에 적합한 콘텐츠만 표시됩니다.</li>
                  <li>광고 관련 문의는 Google AdMob 정책을 참고하시기 바랍니다.</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>4. 지적 재산권</h2>
                <ul className={`text-sm space-y-2 list-disc list-inside ${textColor}`}>
                  <li>서비스의 디자인, 텍스트, 기능은 회사의 지적 재산입니다.</li>
                  <li>서비스 내 콘텐츠를 무단으로 복제하거나 배포하는 것을 금지합니다.</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>5. 면책 조항</h2>
                <ul className={`text-sm space-y-2 list-disc list-inside ${textColor}`}>
                  <li>서비스는 현재 상태로 제공되며, 중단 없는 운영을 보장하지 않습니다.</li>
                  <li>사용자의 데이터 손실에 대해 회사는 책임을 지지 않습니다.</li>
                  <li>데이터 보호를 위해 백업 파일(설정 &gt; 데이터 관리 &gt; 내보내기/가져오기) 저장을 적극 활용하시기 바랍니다.</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>6. 약관 변경</h2>
                <ul className={`text-sm space-y-2 list-disc list-inside ${textColor}`}>
                  <li>본 약관은 관련 법령 및 서비스 변경에 따라 업데이트될 수 있습니다.</li>
                  <li>변경 시 앱 업데이트 또는 설정 내 공지를 통해 안내합니다.</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>7. 문의</h2>
                <ul className={`text-sm space-y-2 list-disc list-inside ${textColor}`}>
                  <li>이메일: <span className={`font-medium ${accentColor}`}>privacy@onuel.dev</span></li>
                  <li>웹사이트: https://onuel.dev/privacy</li>
                  <li>처리 기간: 접수 후 7일 이내 답변</li>
                </ul>
                <p className={`text-sm mt-4 leading-relaxed ${textColor}`}>
                  본 이용약관은 대한민국 법률에 따라 적용됩니다.
                </p>
              </section>
            </>
          ) : (
            <>
              <section>
                <p className={`text-sm leading-relaxed ${textColor}`}>
                  These terms govern the conditions for using the services provided by onueldev (hereinafter the "Company").
                </p>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>1. Use of the Service</h2>
                <ul className={`text-sm space-y-2 list-disc list-inside ${textColor}`}>
                  <li>"Service" refers to all digital services provided by the Company, including mobile applications, games, and web services.</li>
                  <li>Children under 13 may not use the service without parental consent.</li>
                  <li>Any actions that interfere with the normal operation of the Service are prohibited.</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>2. Data and Backup</h2>
                <ul className={`text-sm space-y-2 list-disc list-inside ${textColor}`}>
                  <li>All data is stored locally on your device.</li>
                  <li>Back up and restore your data yourself as a backup file (zip) via Settings &gt; Data &gt; Export / Import.</li>
                  <li>Backup files are managed by the user; recovery is not guaranteed if they are lost.</li>
                  <li>Local data is deleted when the app is uninstalled.</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>3. Advertising</h2>
                <ul className={`text-sm space-y-2 list-disc list-inside ${textColor}`}>
                  <li>The Company displays ads through Google AdMob.</li>
                  <li>Only age-appropriate content is displayed in ads.</li>
                  <li>For ad-related inquiries, please refer to Google AdMob policies.</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>4. Intellectual Property</h2>
                <ul className={`text-sm space-y-2 list-disc list-inside ${textColor}`}>
                  <li>The design, text, and features of the Service are the intellectual property of the Company.</li>
                  <li>Unauthorized reproduction or distribution of content within the Service is prohibited.</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>5. Disclaimer</h2>
                <ul className={`text-sm space-y-2 list-disc list-inside ${textColor}`}>
                  <li>The Service is provided as-is and does not guarantee uninterrupted operation.</li>
                  <li>The Company is not responsible for any loss of user data.</li>
                  <li>To protect your data, we strongly recommend saving a backup file (Settings &gt; Data &gt; Export / Import).</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>6. Changes to Terms</h2>
                <ul className={`text-sm space-y-2 list-disc list-inside ${textColor}`}>
                  <li>These terms may be updated in accordance with relevant laws and service changes.</li>
                  <li>Any changes will be communicated via app updates or notices in settings.</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>7. Contact</h2>
                <ul className={`text-sm space-y-2 list-disc list-inside ${textColor}`}>
                  <li>Email: <span className={`font-medium ${accentColor}`}>privacy@onuel.dev</span></li>
                  <li>Website: https://onuel.dev/privacy</li>
                  <li>Response time: Within 7 days of receipt</li>
                </ul>
                <p className={`text-sm mt-4 leading-relaxed ${textColor}`}>
                  These terms of service are governed by the laws of the Republic of Korea.
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
