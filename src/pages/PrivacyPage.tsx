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
  const tableBg = isDark ? "bg-[#020617]/60" : "bg-[#F0F9FF]/80";
  const tableHeader = isDark ? "bg-[#6366F1]/10 text-[#BAE6FD]" : "bg-[#EFF6FF] text-[#4F46E5]";
  const tableBorder = isDark ? "border-[#6366F1]/15" : "border-[#6366F1]/10";
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
              ? "시행일: 2026년 3월 20일 · 최종 업데이트: 2026년 4월 19일"
              : "Effective: March 20, 2026 · Last Updated: April 19, 2026"}
          </p>
        </div>

        <div className={`border rounded-2xl p-8 space-y-8 ${cardBg}`}>

          {isKo ? (
            <>
              <section>
                <p className={`text-sm leading-relaxed ${textColor}`}>
                  onueldev(이하 "회사")는 회사가 운영하는 모든 앱 서비스(이하 "서비스")를 운영함에 있어
                  「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을
                  신속·원활하게 처리할 수 있도록 다음과 같이 개인정보처리방침을 수립·공개합니다.
                </p>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>제1조 (개인정보의 처리 목적)</h2>
                <p className={`text-sm mb-3 ${textColor}`}>
                  회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하는 개인정보는 다음의 목적 이외의 용도로는
                  이용되지 않으며, 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등
                  필요한 조치를 이행할 예정입니다.
                </p>
                <ul className={`text-sm space-y-2 list-decimal list-inside ${textColor}`}>
                  <li>회원 가입·관리: 회원 가입 의사 확인, 본인 식별·인증, 회원자격 유지·관리</li>
                  <li>서비스 제공: 각 서비스의 핵심 기능 제공 및 기기 간 데이터 동기화</li>
                  <li>서비스 개선 및 통계: 서비스 이용 통계 분석, 오류 탐지 및 품질 개선</li>
                  <li>기기 권한 기반 기능: 이용자가 명시적으로 허용한 기기 권한을 통한 부가 기능 제공</li>
                  <li>광고 서비스: 제3자 광고 플랫폼 연동을 통한 앱 내 광고 제공</li>
                  <li>법령상 의무 이행 및 분쟁 해결</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>제2조 (처리하는 개인정보의 항목)</h2>
                <p className={`text-sm mb-4 ${textColor}`}>회사는 다음의 개인정보 항목을 처리하고 있습니다.</p>
                <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
                  <table className={`w-full text-sm ${tableBg}`}>
                    <thead>
                      <tr className={tableHeader}>
                        <th className="text-left px-4 py-3 font-semibold">수집 경위</th>
                        <th className="text-left px-4 py-3 font-semibold">항목</th>
                        <th className="text-left px-4 py-3 font-semibold">목적</th>
                        <th className="text-left px-4 py-3 font-semibold">필수 여부</th>
                      </tr>
                    </thead>
                    <tbody className={`divide-y ${tableBorder}`}>
                      <tr>
                        <td className={`px-4 py-3 ${textColor}`}>이메일 회원가입</td>
                        <td className={`px-4 py-3 ${textColor}`}>이메일 주소, 비밀번호(암호화 저장)</td>
                        <td className={`px-4 py-3 ${textColor}`}>계정 생성·인증</td>
                        <td className={`px-4 py-3 ${textColor}`}>필수</td>
                      </tr>
                      <tr>
                        <td className={`px-4 py-3 ${textColor}`}>서비스 이용</td>
                        <td className={`px-4 py-3 ${textColor}`}>기기 식별자(UUID), OS·앱 버전, 접속 로그</td>
                        <td className={`px-4 py-3 ${textColor}`}>서비스 품질 개선·오류 분석</td>
                        <td className={`px-4 py-3 ${textColor}`}>필수</td>
                      </tr>
                      <tr>
                        <td className={`px-4 py-3 ${textColor}`}>콘텐츠 저장</td>
                        <td className={`px-4 py-3 ${textColor}`}>서비스 이용 중 생성한 콘텐츠 데이터</td>
                        <td className={`px-4 py-3 ${textColor}`}>서비스 기능 제공·동기화</td>
                        <td className={`px-4 py-3 ${textColor}`}>필수</td>
                      </tr>
                      <tr>
                        <td className={`px-4 py-3 ${textColor}`}>기기 권한 기반 기능</td>
                        <td className={`px-4 py-3 ${textColor}`}>각 서비스별 허용 권한에 따른 데이터</td>
                        <td className={`px-4 py-3 ${textColor}`}>부가 기능 제공</td>
                        <td className={`px-4 py-3 ${textColor}`}>선택</td>
                      </tr>
                      <tr>
                        <td className={`px-4 py-3 ${textColor}`}>광고</td>
                        <td className={`px-4 py-3 ${textColor}`}>광고 식별자(IDFA/GAID)</td>
                        <td className={`px-4 py-3 ${textColor}`}>맞춤형 광고 제공</td>
                        <td className={`px-4 py-3 ${textColor}`}>선택</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className={`text-xs mt-3 leading-relaxed ${textColor}`}>
                  * 로컬 전용 이용 시(로그인 없음) 이메일·서버 관련 정보는 수집되지 않습니다.<br />
                  * 선택 항목에 동의하지 않더라도 기본 서비스 이용이 가능합니다.<br />
                  * 각 서비스별 수집 항목의 세부 내용은 해당 서비스 내 안내를 통해 확인하실 수 있습니다.
                </p>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>제3조 (개인정보의 처리 및 보유기간)</h2>
                <p className={`text-sm mb-3 ${textColor}`}>
                  회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은
                  보유·이용기간 내에서 개인정보를 처리·보유합니다.
                </p>
                <ul className={`text-sm space-y-2 list-decimal list-inside ${textColor}`}>
                  <li>회원 정보: 회원 탈퇴 시까지 (탈퇴 후 30일 이내 파기)</li>
                  <li>콘텐츠 데이터: 회원 탈퇴 시까지 (탈퇴 후 30일 이내 파기)</li>
                  <li>접속 로그: 서비스 이용 시부터 3개월</li>
                </ul>
                <p className={`text-sm mt-3 mb-2 ${textColor}`}>관련 법령에 따른 보존 의무가 있는 경우 해당 기간 동안 별도 보관합니다.</p>
                <ul className={`text-sm space-y-1 list-decimal list-inside ml-2 ${textColor}`}>
                  <li>전자상거래 계약·청약철회 기록: 5년 (전자상거래법)</li>
                  <li>대금결제 및 재화 공급 기록: 5년 (전자상거래법)</li>
                  <li>소비자 불만·분쟁 처리 기록: 3년 (전자상거래법)</li>
                  <li>통신사실 확인자료: 3개월 (통신비밀보호법)</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>제4조 (개인정보의 제3자 제공)</h2>
                <p className={`text-sm mb-3 ${textColor}`}>
                  회사는 정보주체의 개인정보를 제1조(처리 목적)에서 명시한 범위 내에서만 처리하며,
                  정보주체의 동의, 법률의 특별한 규정 등 「개인정보 보호법」 제17조·제18조에 해당하는 경우에만
                  개인정보를 제3자에게 제공합니다.
                </p>
                <p className={`text-sm mb-3 ${textColor}`}>
                  현재 회사는 정보주체의 개인정보를 제3자에게 제공하고 있지 않습니다. 다만, 아래 경우는 예외입니다.
                </p>
                <ul className={`text-sm space-y-2 list-decimal list-inside ${textColor}`}>
                  <li>정보주체가 사전에 동의한 경우</li>
                  <li>법률에 특별한 규정이 있거나 법령상 의무를 준수하기 위해 불가피한 경우</li>
                  <li>수사기관이 수사 목적으로 법령에 정해진 절차와 방법에 따라 요청하는 경우</li>
                  <li>광고 식별자(IDFA/GAID)는 이용자 동의 하에 제3자 광고 플랫폼에 제공될 수 있습니다.</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>제5조 (개인정보 처리 위탁)</h2>
                <p className={`text-sm mb-4 ${textColor}`}>
                  회사는 원활한 서비스 제공을 위해 다음과 같이 개인정보 처리 업무를 위탁하고 있으며,
                  위탁계약 시 「개인정보 보호법」 제26조에 따라 개인정보가 안전하게 관리될 수 있도록
                  필요한 사항을 규정하고 있습니다.
                </p>
                <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
                  <table className={`w-full text-sm ${tableBg}`}>
                    <thead>
                      <tr className={tableHeader}>
                        <th className="text-left px-4 py-3 font-semibold">수탁업체</th>
                        <th className="text-left px-4 py-3 font-semibold">위탁 업무 내용</th>
                        <th className="text-left px-4 py-3 font-semibold">보유·이용기간</th>
                      </tr>
                    </thead>
                    <tbody className={`divide-y ${tableBorder}`}>
                      <tr>
                        <td className={`px-4 py-3 font-medium ${textColor}`}>Google Firebase<br />(Google LLC)</td>
                        <td className={`px-4 py-3 ${textColor}`}>인증, 데이터베이스, 분석, 클라우드 저장소 운영</td>
                        <td className={`px-4 py-3 ${textColor}`}>위탁계약 종료 시까지</td>
                      </tr>
                      <tr>
                        <td className={`px-4 py-3 font-medium ${textColor}`}>Supabase, Inc.</td>
                        <td className={`px-4 py-3 ${textColor}`}>데이터베이스 저장·관리</td>
                        <td className={`px-4 py-3 ${textColor}`}>위탁계약 종료 시까지</td>
                      </tr>
                      <tr>
                        <td className={`px-4 py-3 font-medium ${textColor}`}>Google AdMob<br />(Google LLC)</td>
                        <td className={`px-4 py-3 ${textColor}`}>앱 내 광고 서비스 제공</td>
                        <td className={`px-4 py-3 ${textColor}`}>위탁계약 종료 시까지</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>제6조 (개인정보의 국외이전)</h2>
                <p className={`text-sm mb-4 ${textColor}`}>
                  회사는 서비스 제공을 위해 아래와 같이 개인정보를 국외로 이전하고 있습니다.
                </p>
                <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
                  <table className={`w-full text-sm ${tableBg}`}>
                    <thead>
                      <tr className={tableHeader}>
                        <th className="text-left px-4 py-3 font-semibold">이전받는 업체</th>
                        <th className="text-left px-4 py-3 font-semibold">이전 국가</th>
                        <th className="text-left px-4 py-3 font-semibold">이전 항목</th>
                        <th className="text-left px-4 py-3 font-semibold">이전 목적</th>
                      </tr>
                    </thead>
                    <tbody className={`divide-y ${tableBorder}`}>
                      <tr>
                        <td className={`px-4 py-3 font-medium ${textColor}`}>Google LLC</td>
                        <td className={`px-4 py-3 ${textColor}`}>미국</td>
                        <td className={`px-4 py-3 ${textColor}`}>계정 정보, 콘텐츠 데이터, 로그</td>
                        <td className={`px-4 py-3 ${textColor}`}>Firebase 인증·저장·분석, AdMob 광고</td>
                      </tr>
                      <tr>
                        <td className={`px-4 py-3 font-medium ${textColor}`}>Supabase, Inc.</td>
                        <td className={`px-4 py-3 ${textColor}`}>미국</td>
                        <td className={`px-4 py-3 ${textColor}`}>계정 정보, 콘텐츠 데이터</td>
                        <td className={`px-4 py-3 ${textColor}`}>데이터베이스 저장·관리</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className={`text-xs mt-3 ${textColor}`}>
                  * 개인정보 국외이전에 동의하지 않으실 경우 서비스 이용이 제한될 수 있습니다.
                </p>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>제7조 (개인정보의 파기)</h2>
                <p className={`text-sm mb-3 ${textColor}`}>
                  회사는 개인정보 보유기간의 경과, 처리 목적 달성 등 개인정보가 불필요하게 되었을 때에는
                  지체 없이 해당 개인정보를 파기합니다.
                </p>
                <ul className={`text-sm space-y-2 list-decimal list-inside ${textColor}`}>
                  <li>전자적 파일 형태: 복원이 불가능한 방법으로 영구 삭제</li>
                  <li>종이 출력물: 분쇄기로 분쇄하거나 소각</li>
                </ul>
                <p className={`text-sm mt-3 ${textColor}`}>
                  회원 탈퇴는 앱 설정 &gt; 계정 &gt; 회원탈퇴 메뉴를 통해 직접 진행하실 수 있으며,
                  탈퇴 후 30일 이내에 모든 개인정보 및 콘텐츠 데이터가 삭제됩니다.
                </p>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>제8조 (정보주체의 권리·의무 및 행사방법)</h2>
                <p className={`text-sm mb-3 ${textColor}`}>
                  정보주체(이용자)는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
                </p>
                <ul className={`text-sm space-y-2 list-decimal list-inside ${textColor}`}>
                  <li>개인정보 처리 현황 열람 요구</li>
                  <li>오류 등이 있을 경우 정정 요구</li>
                  <li>삭제 요구 (단, 다른 법령에서 수집 대상으로 명시된 경우 삭제 불가)</li>
                  <li>처리 정지 요구</li>
                  <li>개인정보 이동 요구: 처리한 개인정보를 체계적·기계 판독 가능한 형태로 수령하거나 다른 개인정보처리자에게 이전 요구</li>
                  <li>자동화된 결정에 대한 거부·설명 요구</li>
                </ul>
                <p className={`text-sm mt-4 ${textColor}`}>
                  위 권리 행사는 앱 설정 메뉴 또는 이메일{" "}
                  <span className={`font-medium ${accentColor}`}>privacy@onuel.dev</span>으로 요청하실 수 있으며,
                  회사는 지체 없이 조치하겠습니다.
                </p>
                <p className={`text-sm mt-3 ${textColor}`}>
                  만 14세 미만 아동의 법정대리인은 해당 아동의 개인정보에 대한 열람, 정정, 삭제, 처리정지를 요구할 수 있습니다.
                </p>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>제9조 (기기 권한 요청)</h2>
                <p className={`text-sm mb-3 ${textColor}`}>
                  서비스는 기능 제공을 위해 기기 접근 권한을 요청할 수 있습니다. 권한은 이용자가 직접 허용·거부할 수 있으며,
                  거부 시 해당 기능 이용이 제한될 수 있습니다.
                </p>
                <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
                  <table className={`w-full text-sm ${tableBg}`}>
                    <thead>
                      <tr className={tableHeader}>
                        <th className="text-left px-4 py-3 font-semibold">권한</th>
                        <th className="text-left px-4 py-3 font-semibold">사용 목적</th>
                        <th className="text-left px-4 py-3 font-semibold">필수 여부</th>
                      </tr>
                    </thead>
                    <tbody className={`divide-y ${tableBorder}`}>
                      <tr>
                        <td className={`px-4 py-3 font-medium ${textColor}`}>카메라</td>
                        <td className={`px-4 py-3 ${textColor}`}>서비스 내 사진 촬영 기능</td>
                        <td className={`px-4 py-3 ${textColor}`}>선택</td>
                      </tr>
                      <tr>
                        <td className={`px-4 py-3 font-medium ${textColor}`}>사진 라이브러리</td>
                        <td className={`px-4 py-3 ${textColor}`}>갤러리에서 사진 선택·첨부</td>
                        <td className={`px-4 py-3 ${textColor}`}>선택</td>
                      </tr>
                      <tr>
                        <td className={`px-4 py-3 font-medium ${textColor}`}>위치 정보</td>
                        <td className={`px-4 py-3 ${textColor}`}>위치 기반 부가 기능 제공</td>
                        <td className={`px-4 py-3 ${textColor}`}>선택</td>
                      </tr>
                      <tr>
                        <td className={`px-4 py-3 font-medium ${textColor}`}>건강 데이터</td>
                        <td className={`px-4 py-3 ${textColor}`}>건강 관련 부가 기능 제공</td>
                        <td className={`px-4 py-3 ${textColor}`}>선택</td>
                      </tr>
                      <tr>
                        <td className={`px-4 py-3 font-medium ${textColor}`}>알림</td>
                        <td className={`px-4 py-3 ${textColor}`}>서비스 알림 발송</td>
                        <td className={`px-4 py-3 ${textColor}`}>선택</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className={`text-xs mt-3 leading-relaxed ${textColor}`}>
                  * 각 권한의 실제 사용 여부는 서비스별로 다를 수 있습니다.<br />
                  * 이용자가 명시적으로 허용한 권한만 사용되며, 백그라운드 위치는 수집하지 않습니다.
                </p>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>제10조 (개인정보의 안전성 확보조치)</h2>
                <p className={`text-sm mb-3 ${textColor}`}>
                  회사는 「개인정보 보호법」 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적·관리적·물리적 조치를 하고 있습니다.
                </p>
                <ul className={`text-sm space-y-2 list-decimal list-inside ${textColor}`}>
                  <li><span className="font-medium">내부 관리계획 수립·시행:</span> 개인정보 처리 관련 업무 담당자 지정 및 정기 교육 실시</li>
                  <li><span className="font-medium">접근 권한 관리:</span> 최소 권한 원칙에 따른 개인정보 접근 통제</li>
                  <li><span className="font-medium">암호화:</span> 비밀번호 암호화 저장, 서버 통신 TLS/HTTPS 암호화 적용</li>
                  <li><span className="font-medium">해킹 등에 대비한 기술적 대책:</span> Row Level Security(RLS) 등 보안 정책 적용</li>
                  <li><span className="font-medium">접속기록 보관 및 위변조 방지:</span> 서비스 접속 로그 보관 및 관리</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>제11조 (아동의 개인정보 보호)</h2>
                <p className={`text-sm leading-relaxed ${textColor}`}>
                  서비스는 만 14세 미만 아동을 주 대상으로 하지 않습니다. 회사는 만 14세 미만 아동의 개인정보를
                  수집하지 않는 것을 원칙으로 하며, 만 14세 미만 아동이 서비스에 가입하려는 경우 법정대리인의
                  동의를 받아야 합니다. 만 14세 미만 아동의 법정대리인은 해당 아동의 개인정보 열람, 정정, 삭제 및
                  처리정지를 요청할 수 있습니다.
                </p>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>제12조 (개인정보 보호책임자)</h2>
                <p className={`text-sm mb-4 ${textColor}`}>
                  회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 정보주체의 개인정보 관련 불만 처리 및
                  피해 구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
                </p>
                <div className={`text-sm space-y-1.5 ${textColor}`}>
                  <p>· 성명: onueldev 운영팀장</p>
                  <p>· 직책: 개인정보 보호책임자</p>
                  <p>· 연락처: <span className={`font-medium ${accentColor}`}>privacy@onuel.dev</span></p>
                </div>
                <p className={`text-sm mt-4 ${textColor}`}>
                  정보주체께서는 서비스 이용 과정에서 발생한 모든 개인정보 보호 관련 문의, 불만 처리,
                  피해 구제 등에 관한 사항을 개인정보 보호책임자에게 문의하실 수 있습니다.
                </p>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>제13조 (권익침해 구제방법)</h2>
                <p className={`text-sm mb-3 ${textColor}`}>
                  정보주체는 아래 기관에 개인정보 침해에 대한 피해 구제, 상담 등을 문의하실 수 있습니다.
                </p>
                <ul className={`text-sm space-y-2 ${textColor}`}>
                  <li>· <span className="font-medium">개인정보침해신고센터</span> (한국인터넷진흥원 운영)<br />
                    &nbsp;&nbsp;- 홈페이지: privacy.kisa.or.kr / 전화: ☎ 118
                  </li>
                  <li>· <span className="font-medium">개인정보 분쟁조정위원회</span><br />
                    &nbsp;&nbsp;- 홈페이지: www.kopico.go.kr / 전화: ☎ 1833-6972
                  </li>
                  <li>· <span className="font-medium">대검찰청 사이버범죄수사단</span>: www.spo.go.kr / ☎ 1301</li>
                  <li>· <span className="font-medium">경찰청 사이버수사국</span>: ecrm.cyber.go.kr / ☎ 182</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>제14조 (개인정보처리방침의 변경)</h2>
                <p className={`text-sm leading-relaxed ${textColor}`}>
                  개인정보처리방침의 내용 추가, 삭제 및 수정이 있을 경우 시행일 최소 7일 전에 앱 내 공지사항을 통해
                  안내하겠습니다. 다만, 정보주체의 권리 또는 의무에 중요한 변경이 있는 경우 시행일 30일 전부터
                  사전에 알려드립니다.
                </p>
                <div className={`text-sm mt-3 space-y-1 ${textColor}`}>
                  <p>· 최신 방침: <span className={`font-medium ${accentColor}`}>onuel.dev/privacy</span></p>
                  <p>· 이전 버전 문의: <a href="mailto:privacy@onuel.dev" className={`font-medium ${accentColor} underline`}>privacy@onuel.dev</a></p>
                </div>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>부칙</h2>
                <p className={`text-sm leading-relaxed ${textColor}`}>
                  본 개인정보처리방침은 2026년 3월 20일부터 시행됩니다.
                </p>
              </section>
            </>
          ) : (
            <>
              <section>
                <p className={`text-sm leading-relaxed ${textColor}`}>
                  onueldev (hereinafter "Company") establishes and discloses this Privacy Policy in accordance with
                  Article 30 of the Personal Information Protection Act, to protect the personal information of data
                  subjects and to handle related grievances promptly and smoothly in operating all app services
                  (hereinafter "Service") operated by the Company.
                </p>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>Article 1 (Purpose of Processing Personal Information)</h2>
                <p className={`text-sm mb-3 ${textColor}`}>
                  The Company processes personal information for the following purposes. Personal information is not used
                  for purposes other than those listed below, and if the purpose changes, necessary measures such as
                  obtaining separate consent will be taken in accordance with Article 18 of the Personal Information
                  Protection Act.
                </p>
                <ul className={`text-sm space-y-2 list-decimal list-inside ${textColor}`}>
                  <li>Member registration and management: confirming intent to join, identity verification and authentication, maintaining and managing membership status</li>
                  <li>Service provision: providing core service functions and cross-device data synchronization</li>
                  <li>Service improvement and analytics: analyzing usage statistics, detecting errors, and improving quality</li>
                  <li>Device permission-based features: providing additional features through device permissions explicitly granted by users</li>
                  <li>Advertising services: providing in-app advertising through third-party ad platform integrations</li>
                  <li>Compliance with legal obligations and dispute resolution</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>Article 2 (Personal Information Items Processed)</h2>
                <p className={`text-sm mb-4 ${textColor}`}>The Company processes the following personal information items.</p>
                <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
                  <table className={`w-full text-sm ${tableBg}`}>
                    <thead>
                      <tr className={tableHeader}>
                        <th className="text-left px-4 py-3 font-semibold">Collection Method</th>
                        <th className="text-left px-4 py-3 font-semibold">Items</th>
                        <th className="text-left px-4 py-3 font-semibold">Purpose</th>
                        <th className="text-left px-4 py-3 font-semibold">Required</th>
                      </tr>
                    </thead>
                    <tbody className={`divide-y ${tableBorder}`}>
                      <tr>
                        <td className={`px-4 py-3 ${textColor}`}>Email registration</td>
                        <td className={`px-4 py-3 ${textColor}`}>Email address, password (encrypted)</td>
                        <td className={`px-4 py-3 ${textColor}`}>Account creation & authentication</td>
                        <td className={`px-4 py-3 ${textColor}`}>Required</td>
                      </tr>
                      <tr>
                        <td className={`px-4 py-3 ${textColor}`}>Service use</td>
                        <td className={`px-4 py-3 ${textColor}`}>Device ID (UUID), OS & app version, access logs</td>
                        <td className={`px-4 py-3 ${textColor}`}>Service quality improvement & error analysis</td>
                        <td className={`px-4 py-3 ${textColor}`}>Required</td>
                      </tr>
                      <tr>
                        <td className={`px-4 py-3 ${textColor}`}>Content storage</td>
                        <td className={`px-4 py-3 ${textColor}`}>Content data created while using the service</td>
                        <td className={`px-4 py-3 ${textColor}`}>Service functionality & sync</td>
                        <td className={`px-4 py-3 ${textColor}`}>Required</td>
                      </tr>
                      <tr>
                        <td className={`px-4 py-3 ${textColor}`}>Device permission-based features</td>
                        <td className={`px-4 py-3 ${textColor}`}>Data based on permissions granted per service</td>
                        <td className={`px-4 py-3 ${textColor}`}>Additional feature provision</td>
                        <td className={`px-4 py-3 ${textColor}`}>Optional</td>
                      </tr>
                      <tr>
                        <td className={`px-4 py-3 ${textColor}`}>Advertising</td>
                        <td className={`px-4 py-3 ${textColor}`}>Ad identifier (IDFA/GAID)</td>
                        <td className={`px-4 py-3 ${textColor}`}>Personalized advertising</td>
                        <td className={`px-4 py-3 ${textColor}`}>Optional</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className={`text-xs mt-3 leading-relaxed ${textColor}`}>
                  * When using the Service locally (without login), email and server-related information is not collected.<br />
                  * Declining optional items does not affect basic Service use.<br />
                  * Detailed collection items per service can be found in the respective service's in-app guidance.
                </p>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>Article 3 (Retention Period)</h2>
                <p className={`text-sm mb-3 ${textColor}`}>
                  The Company processes and retains personal information within the retention period stipulated by law
                  or agreed upon when collecting personal information from data subjects.
                </p>
                <ul className={`text-sm space-y-2 list-decimal list-inside ${textColor}`}>
                  <li>Member information: until account deletion (destroyed within 30 days of deletion)</li>
                  <li>Content data: until account deletion (destroyed within 30 days)</li>
                  <li>Access logs: 3 months from service use</li>
                </ul>
                <p className={`text-sm mt-3 mb-2 ${textColor}`}>When legal retention obligations apply, data is stored separately for the required period.</p>
                <ul className={`text-sm space-y-1 list-decimal list-inside ml-2 ${textColor}`}>
                  <li>Records of e-commerce contracts and withdrawal of offers: 5 years (E-Commerce Act)</li>
                  <li>Records of payment and supply of goods: 5 years (E-Commerce Act)</li>
                  <li>Consumer complaint and dispute records: 3 years (E-Commerce Act)</li>
                  <li>Communication verification data: 3 months (Communications Secrets Protection Act)</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>Article 4 (Third-Party Disclosure)</h2>
                <p className={`text-sm mb-3 ${textColor}`}>
                  The Company processes personal information only within the scope specified in Article 1 and provides
                  personal information to third parties only in cases that fall under Articles 17 and 18 of the Personal
                  Information Protection Act, such as the data subject's consent or special provisions of law.
                </p>
                <p className={`text-sm mb-3 ${textColor}`}>
                  Currently, the Company does not provide personal information to third parties. Exceptions include the following cases.
                </p>
                <ul className={`text-sm space-y-2 list-decimal list-inside ${textColor}`}>
                  <li>When the data subject has given prior consent</li>
                  <li>When required by special provisions of law or unavoidable to comply with legal obligations</li>
                  <li>When requested by law enforcement agencies for investigative purposes through legally prescribed procedures</li>
                  <li>Ad identifiers (IDFA/GAID) may be provided to third-party ad platforms with user consent</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>Article 5 (Outsourcing of Personal Information Processing)</h2>
                <p className={`text-sm mb-4 ${textColor}`}>
                  To provide the Service smoothly, the Company outsources personal information processing as follows, and
                  stipulates necessary provisions to ensure safe management of personal information in accordance with
                  Article 26 of the Personal Information Protection Act.
                </p>
                <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
                  <table className={`w-full text-sm ${tableBg}`}>
                    <thead>
                      <tr className={tableHeader}>
                        <th className="text-left px-4 py-3 font-semibold">Service Provider</th>
                        <th className="text-left px-4 py-3 font-semibold">Outsourced Work</th>
                        <th className="text-left px-4 py-3 font-semibold">Retention Period</th>
                      </tr>
                    </thead>
                    <tbody className={`divide-y ${tableBorder}`}>
                      <tr>
                        <td className={`px-4 py-3 font-medium ${textColor}`}>Google Firebase<br />(Google LLC)</td>
                        <td className={`px-4 py-3 ${textColor}`}>Authentication, database, analytics, cloud storage</td>
                        <td className={`px-4 py-3 ${textColor}`}>Until end of contract</td>
                      </tr>
                      <tr>
                        <td className={`px-4 py-3 font-medium ${textColor}`}>Supabase, Inc.</td>
                        <td className={`px-4 py-3 ${textColor}`}>Database storage and management</td>
                        <td className={`px-4 py-3 ${textColor}`}>Until end of contract</td>
                      </tr>
                      <tr>
                        <td className={`px-4 py-3 font-medium ${textColor}`}>Google AdMob<br />(Google LLC)</td>
                        <td className={`px-4 py-3 ${textColor}`}>In-app advertising services</td>
                        <td className={`px-4 py-3 ${textColor}`}>Until end of contract</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>Article 6 (International Transfer of Personal Information)</h2>
                <p className={`text-sm mb-4 ${textColor}`}>
                  The Company transfers personal information overseas as follows to provide the Service.
                </p>
                <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
                  <table className={`w-full text-sm ${tableBg}`}>
                    <thead>
                      <tr className={tableHeader}>
                        <th className="text-left px-4 py-3 font-semibold">Recipient</th>
                        <th className="text-left px-4 py-3 font-semibold">Country</th>
                        <th className="text-left px-4 py-3 font-semibold">Items Transferred</th>
                        <th className="text-left px-4 py-3 font-semibold">Purpose</th>
                      </tr>
                    </thead>
                    <tbody className={`divide-y ${tableBorder}`}>
                      <tr>
                        <td className={`px-4 py-3 font-medium ${textColor}`}>Google LLC</td>
                        <td className={`px-4 py-3 ${textColor}`}>United States</td>
                        <td className={`px-4 py-3 ${textColor}`}>Account info, content data, logs</td>
                        <td className={`px-4 py-3 ${textColor}`}>Firebase auth/storage/analytics, AdMob ads</td>
                      </tr>
                      <tr>
                        <td className={`px-4 py-3 font-medium ${textColor}`}>Supabase, Inc.</td>
                        <td className={`px-4 py-3 ${textColor}`}>United States</td>
                        <td className={`px-4 py-3 ${textColor}`}>Account info, content data</td>
                        <td className={`px-4 py-3 ${textColor}`}>Database storage and management</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className={`text-xs mt-3 ${textColor}`}>
                  * If you do not consent to international transfer of personal information, your use of the Service may be restricted.
                </p>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>Article 7 (Destruction of Personal Information)</h2>
                <p className={`text-sm mb-3 ${textColor}`}>
                  When personal information becomes unnecessary due to expiration of the retention period or achievement
                  of processing purposes, the Company destroys such personal information without delay.
                </p>
                <ul className={`text-sm space-y-2 list-decimal list-inside ${textColor}`}>
                  <li>Electronic files: permanently deleted by methods that make recovery impossible</li>
                  <li>Printed materials: shredded or incinerated</li>
                </ul>
                <p className={`text-sm mt-3 ${textColor}`}>
                  Account deletion can be performed via App Settings &gt; Account &gt; Delete Account.
                  All personal information and content data will be deleted within 30 days of deletion.
                </p>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>Article 8 (Rights of Data Subjects)</h2>
                <p className={`text-sm mb-3 ${textColor}`}>
                  Data subjects (users) may exercise the following personal information protection rights against
                  the Company at any time.
                </p>
                <ul className={`text-sm space-y-2 list-decimal list-inside ${textColor}`}>
                  <li>Request to access the status of personal information processing</li>
                  <li>Request correction of errors</li>
                  <li>Request deletion (except where collection is specified by other laws)</li>
                  <li>Request suspension of processing</li>
                  <li>Data portability: request to receive processed personal information in a structured, machine-readable format or transfer it to another processor</li>
                  <li>Right to object to or request explanation of automated decisions</li>
                </ul>
                <p className={`text-sm mt-4 ${textColor}`}>
                  These rights may be exercised via the app settings menu or by contacting us at{" "}
                  <span className={`font-medium ${accentColor}`}>privacy@onuel.dev</span>.
                  The Company will take action without delay.
                </p>
                <p className={`text-sm mt-3 ${textColor}`}>
                  Legal guardians of children under 14 may request access, correction, deletion, or suspension of
                  processing of that child's personal information.
                </p>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>Article 9 (Device Permissions)</h2>
                <p className={`text-sm mb-3 ${textColor}`}>
                  The Service may request device access permissions to provide its features. Users may grant or deny
                  each permission, and denial may restrict use of the related feature.
                </p>
                <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
                  <table className={`w-full text-sm ${tableBg}`}>
                    <thead>
                      <tr className={tableHeader}>
                        <th className="text-left px-4 py-3 font-semibold">Permission</th>
                        <th className="text-left px-4 py-3 font-semibold">Purpose</th>
                        <th className="text-left px-4 py-3 font-semibold">Required</th>
                      </tr>
                    </thead>
                    <tbody className={`divide-y ${tableBorder}`}>
                      <tr>
                        <td className={`px-4 py-3 font-medium ${textColor}`}>Camera</td>
                        <td className={`px-4 py-3 ${textColor}`}>In-service photo capture feature</td>
                        <td className={`px-4 py-3 ${textColor}`}>Optional</td>
                      </tr>
                      <tr>
                        <td className={`px-4 py-3 font-medium ${textColor}`}>Photo Library</td>
                        <td className={`px-4 py-3 ${textColor}`}>Select and attach photos from gallery</td>
                        <td className={`px-4 py-3 ${textColor}`}>Optional</td>
                      </tr>
                      <tr>
                        <td className={`px-4 py-3 font-medium ${textColor}`}>Location</td>
                        <td className={`px-4 py-3 ${textColor}`}>Location-based additional features</td>
                        <td className={`px-4 py-3 ${textColor}`}>Optional</td>
                      </tr>
                      <tr>
                        <td className={`px-4 py-3 font-medium ${textColor}`}>Health Data</td>
                        <td className={`px-4 py-3 ${textColor}`}>Health-related additional features</td>
                        <td className={`px-4 py-3 ${textColor}`}>Optional</td>
                      </tr>
                      <tr>
                        <td className={`px-4 py-3 font-medium ${textColor}`}>Notifications</td>
                        <td className={`px-4 py-3 ${textColor}`}>Service notification delivery</td>
                        <td className={`px-4 py-3 ${textColor}`}>Optional</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className={`text-xs mt-3 leading-relaxed ${textColor}`}>
                  * Actual permission usage may vary by service.<br />
                  * Only permissions explicitly granted by the user are used; background location is not collected.
                </p>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>Article 10 (Security Measures)</h2>
                <p className={`text-sm mb-3 ${textColor}`}>
                  In accordance with Article 29 of the Personal Information Protection Act, the Company implements the
                  following technical, administrative, and physical measures to ensure security.
                </p>
                <ul className={`text-sm space-y-2 list-decimal list-inside ${textColor}`}>
                  <li><span className="font-medium">Internal management plan:</span> Designation of staff responsible for personal information processing and regular training</li>
                  <li><span className="font-medium">Access control:</span> Personal information access control based on the principle of least privilege</li>
                  <li><span className="font-medium">Encryption:</span> Encrypted password storage, TLS/HTTPS encryption for server communications</li>
                  <li><span className="font-medium">Technical measures against hacking:</span> Row Level Security (RLS) and other security policies</li>
                  <li><span className="font-medium">Access log retention and integrity:</span> Service access log retention and management</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>Article 11 (Protection of Children's Personal Information)</h2>
                <p className={`text-sm leading-relaxed ${textColor}`}>
                  The Service is not primarily directed at children under the age of 14. The Company does not knowingly
                  collect personal information from children under 14. If a child under 14 wishes to register, consent
                  from a legal guardian is required. Legal guardians of children under 14 may request access, correction,
                  deletion, or suspension of processing of that child's personal information.
                </p>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>Article 12 (Privacy Officer)</h2>
                <p className={`text-sm mb-4 ${textColor}`}>
                  The Company designates a Privacy Officer to take overall responsibility for personal information
                  processing and to handle complaints and remedies related to data subjects' personal information.
                </p>
                <div className={`text-sm space-y-1.5 ${textColor}`}>
                  <p>· Name: onueldev Operations Team Lead</p>
                  <p>· Title: Privacy Officer</p>
                  <p>· Contact: <span className={`font-medium ${accentColor}`}>privacy@onuel.dev</span></p>
                </div>
                <p className={`text-sm mt-4 ${textColor}`}>
                  Data subjects may contact the Privacy Officer for all personal information protection inquiries,
                  complaint handling, and remedies arising from use of the Service.
                </p>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>Article 13 (Remedies for Rights Violations)</h2>
                <p className={`text-sm mb-3 ${textColor}`}>
                  Data subjects may contact the following agencies for relief and consultation regarding personal
                  information violations.
                </p>
                <ul className={`text-sm space-y-2 ${textColor}`}>
                  <li>· <span className="font-medium">Personal Information Infringement Report Center</span> (operated by KISA)<br />
                    &nbsp;&nbsp;- Website: privacy.kisa.or.kr / Phone: ☎ 118
                  </li>
                  <li>· <span className="font-medium">Personal Information Dispute Mediation Committee</span><br />
                    &nbsp;&nbsp;- Website: www.kopico.go.kr / Phone: ☎ 1833-6972
                  </li>
                  <li>· <span className="font-medium">Supreme Prosecutors' Office Cybercrime Investigation Unit</span>: www.spo.go.kr / ☎ 1301</li>
                  <li>· <span className="font-medium">National Police Agency Cyber Investigation Bureau</span>: ecrm.cyber.go.kr / ☎ 182</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>Article 14 (Changes to this Privacy Policy)</h2>
                <p className={`text-sm leading-relaxed ${textColor}`}>
                  Any additions, deletions, or modifications to this Privacy Policy will be announced via in-app notices
                  at least 7 days before the effective date. For significant changes affecting data subjects' rights or
                  obligations, notice will be given at least 30 days in advance.
                </p>
                <div className={`text-sm mt-3 space-y-1 ${textColor}`}>
                  <p>· Latest policy: <span className={`font-medium ${accentColor}`}>onuel.dev/privacy</span></p>
                  <p>· Previous version inquiries: <a href="mailto:privacy@onuel.dev" className={`font-medium ${accentColor} underline`}>privacy@onuel.dev</a></p>
                </div>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>Supplementary Provisions</h2>
                <p className={`text-sm leading-relaxed ${textColor}`}>
                  This Privacy Policy shall take effect from March 20, 2026.
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
