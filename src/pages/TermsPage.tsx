import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../contexts/ThemeContext";
import Navbar from "../components/Navbar";

export default function TermsPage() {
  const { i18n } = useTranslation();
  const { isDark } = useTheme();
  const isKo = i18n.language === "ko";

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const bg = isDark ? "bg-[#020617]" : "bg-[#F0F9FF]";
  const headingColor = isDark ? "text-[#F8FAFC]" : "text-[#0F172A]";
  const textColor = isDark ? "text-[#F8FAFC]/70" : "text-[#475569]";
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
              ? "시행일: 2026년 3월 20일 · 최종 업데이트: 2026년 4월 19일"
              : "Effective: March 20, 2026 · Last Updated: April 19, 2026"}
          </p>
        </div>

        <div className={`border rounded-2xl p-8 space-y-8 ${cardBg}`}>

          {isKo ? (
            <>
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>제1조 (목적)</h2>
                <p className={`text-sm leading-relaxed ${textColor}`}>
                  본 약관은 onueldev(이하 "회사")가 제공하는 모든 디지털 서비스(이하 "서비스")의
                  이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
                </p>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>제2조 (서비스 소개)</h2>
                <ul className={`text-sm space-y-2 list-decimal list-inside ${textColor}`}>
                  <li>회사는 모바일 애플리케이션, 웹 서비스 등 다양한 디지털 서비스를 제공합니다.</li>
                  <li>각 서비스의 세부 기능 및 이용 조건은 해당 서비스의 앱스토어 상세 페이지 또는 서비스 내 안내를 통해 확인할 수 있습니다.</li>
                  <li>회사는 서비스 내용을 추가, 변경, 종료할 수 있으며 중요한 변경 시 사전에 공지합니다.</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>제3조 (약관의 효력 및 변경)</h2>
                <ul className={`text-sm space-y-2 list-decimal list-inside ${textColor}`}>
                  <li>본 약관은 서비스 내 공지 또는 앱스토어 상세 페이지를 통해 게시되며 이용자에게 효력이 발생합니다.</li>
                  <li>회사는 관련 법령을 위배하지 않는 범위에서 약관을 개정할 수 있습니다.</li>
                  <li>약관 변경 시 시행일 7일 전 앱 내 공지를 통해 안내합니다. 단, 이용자에게 불리한 변경은 30일 전부터 공지합니다.</li>
                  <li>변경된 약관 공지 후 이용자가 명시적으로 거부 의사를 표시하지 않으면 동의한 것으로 간주합니다.</li>
                  <li>변경된 약관에 동의하지 않을 경우 서비스 이용을 중단하고 계정을 탈퇴할 수 있습니다.</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>제4조 (서비스 이용 및 계정)</h2>
                <ul className={`text-sm space-y-2 list-decimal list-inside ${textColor}`}>
                  <li>일부 서비스는 계정 없이 이용 가능하며, 계정 가입 시 추가 기능을 이용할 수 있습니다.</li>
                  <li>이용자는 정확한 정보로 계정을 등록해야 하며, 허위 정보로 인한 불이익은 이용자 본인이 책임집니다.</li>
                  <li>계정 정보는 본인이 안전하게 관리해야 하며, 타인에게 양도하거나 공유할 수 없습니다.</li>
                  <li>타인의 명의를 도용하거나 허위 정보로 가입하는 행위는 금지됩니다.</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>제5조 (미성년자 이용)</h2>
                <ul className={`text-sm space-y-2 list-decimal list-inside ${textColor}`}>
                  <li>만 14세 미만 아동은 법정대리인의 동의를 받은 경우에 한하여 서비스를 이용할 수 있습니다.</li>
                  <li>법정대리인은 해당 아동의 서비스 이용 및 개인정보 처리에 대해 동의·열람·수정·삭제를 요청할 수 있습니다.</li>
                  <li>만 14세 미만 아동이 법정대리인 동의 없이 이용한 경우, 법정대리인은 해당 계정의 삭제를 요청할 수 있습니다.</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>제6조 (기기 권한 및 알림)</h2>
                <ul className={`text-sm space-y-2 list-decimal list-inside ${textColor}`}>
                  <li>일부 서비스는 원활한 기능 제공을 위해 기기 권한(카메라, 사진, 건강 데이터, 알림 등)을 요청할 수 있습니다.</li>
                  <li>기기 권한은 이용자의 동의 후 수집되며, 언제든지 기기 설정에서 변경하거나 철회할 수 있습니다.</li>
                  <li>권한 철회 시 관련 기능 이용이 제한될 수 있습니다.</li>
                  <li>서비스 알림은 이용자의 동의 후 발송되며, 기기 설정 또는 서비스 내 설정에서 언제든지 변경할 수 있습니다.</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>제7조 (광고)</h2>
                <ul className={`text-sm space-y-2 list-decimal list-inside ${textColor}`}>
                  <li>서비스는 무료 제공을 위해 앱 내 광고를 포함할 수 있습니다.</li>
                  <li>광고는 제3자 광고 플랫폼을 통해 제공될 수 있으며, 해당 광고 내용에 대해 회사는 책임을 지지 않습니다.</li>
                  <li>광고를 통한 외부 서비스 이용은 이용자 본인의 책임하에 이루어집니다.</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>제8조 (데이터 저장 및 관리)</h2>
                <ul className={`text-sm space-y-2 list-decimal list-inside ${textColor}`}>
                  <li>서비스 내 데이터 저장 방식은 각 서비스별 안내에 따릅니다.</li>
                  <li>계정 이용 시 이용자 데이터는 암호화된 서버에 안전하게 저장됩니다.</li>
                  <li>서버에 저장된 데이터는 계정 탈퇴 요청 후 30일 이내에 삭제됩니다.</li>
                  <li>회사는 이용자 데이터에 대한 소유권을 주장하지 않으며, 서비스 제공 목적 외에 해당 데이터를 이용하지 않습니다.</li>
                  <li>불가항력적 사유로 인한 데이터 손실에 대해 회사는 책임을 지지 않습니다.</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>제9조 (이용자 생성 콘텐츠)</h2>
                <ul className={`text-sm space-y-2 list-decimal list-inside ${textColor}`}>
                  <li>이용자가 서비스 내에서 작성·저장하는 콘텐츠의 저작권 및 소유권은 이용자 본인에게 귀속됩니다.</li>
                  <li>이용자는 타인의 저작권, 초상권, 개인정보를 침해하는 콘텐츠를 저장하거나 이용해서는 안 됩니다.</li>
                  <li>이용자 콘텐츠로 인해 발생하는 법적 분쟁 및 손해에 대한 책임은 이용자 본인에게 있습니다.</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>제10조 (지식재산권)</h2>
                <ul className={`text-sm space-y-2 list-decimal list-inside ${textColor}`}>
                  <li>서비스의 앱, 디자인, 로고, 소스코드 등 모든 콘텐츠에 대한 지식재산권은 회사에 귀속됩니다.</li>
                  <li>이용자는 회사의 사전 동의 없이 서비스를 복제, 수정, 배포, 판매할 수 없습니다.</li>
                  <li>이용자가 제공한 피드백·제안은 회사가 별도 보상 없이 서비스 개선에 활용할 수 있습니다.</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>제11조 (금지행위)</h2>
                <p className={`text-sm mb-3 ${textColor}`}>이용자는 다음 행위를 해서는 안 됩니다.</p>
                <ul className={`text-sm space-y-1.5 list-decimal list-inside ${textColor}`}>
                  <li>서비스를 역설계, 해킹하거나 보안을 우회하는 행위</li>
                  <li>타인의 지식재산권·초상권·개인정보를 침해하는 행위</li>
                  <li>스팸, 악성코드, 허위 정보를 생성하거나 유포하는 행위</li>
                  <li>서비스 운영을 방해하거나 서버에 과부하를 주는 행위</li>
                  <li>상업적 목적으로 서비스를 무단 이용하거나 재판매하는 행위</li>
                  <li>기타 법령 또는 공서양속에 반하는 행위</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>제12조 (서비스 이용 제한 및 해지)</h2>
                <ul className={`text-sm space-y-2 list-decimal list-inside ${textColor}`}>
                  <li>회사는 이용자가 본 약관을 위반하거나 서비스 운영을 방해한 경우 사전 통보 후 서비스 이용을 제한하거나 계정을 해지할 수 있습니다.</li>
                  <li>법령 위반 등 중대한 위반의 경우 사전 통보 없이 즉시 이용을 제한할 수 있습니다.</li>
                  <li>이용자는 언제든지 서비스 내 설정을 통해 계정을 탈퇴할 수 있습니다.</li>
                  <li>탈퇴 시 서버에 저장된 모든 데이터는 30일 이내에 삭제되며, 삭제된 데이터는 복구되지 않습니다.</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>제13조 (서비스 변경 및 중단)</h2>
                <ul className={`text-sm space-y-2 list-decimal list-inside ${textColor}`}>
                  <li>회사는 서비스 내용을 변경하거나 중단할 수 있으며, 중요한 변경 시 사전 공지합니다.</li>
                  <li>시스템 점검, 기술적 사유 등으로 일시적으로 서비스가 중단될 수 있습니다.</li>
                  <li>서비스 종료 시 종료일 30일 전까지 앱 내 공지 또는 이메일을 통해 안내합니다.</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>제14조 (면책조항)</h2>
                <ul className={`text-sm space-y-2 list-decimal list-inside ${textColor}`}>
                  <li>회사는 천재지변, 해킹 등 불가항력적 사유로 서비스를 제공할 수 없는 경우 책임을 지지 않습니다.</li>
                  <li>회사는 이용자의 귀책 사유로 인한 서비스 이용 장애에 대해 책임을 지지 않습니다.</li>
                  <li>회사는 서비스를 통해 제공되는 정보·자료의 정확성을 보증하지 않습니다.</li>
                  <li>회사는 서비스 이용과 관련하여 발생한 간접 손해, 결과적 손해에 대해 법령이 허용하는 최대 범위 내에서 책임을 지지 않습니다.</li>
                  <li>서비스 내 광고 또는 링크를 통해 연결된 제3자 서비스에서 발생한 손해에 대해 회사는 책임을 지지 않습니다.</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>제15조 (분쟁 해결 및 준거법)</h2>
                <ul className={`text-sm space-y-2 list-decimal list-inside ${textColor}`}>
                  <li>본 약관의 해석 및 이용자와 회사 간 발생한 분쟁은 대한민국 법률을 준거법으로 합니다.</li>
                  <li>분쟁이 발생한 경우 양 당사자는 성실히 협의하여 해결하도록 노력합니다.</li>
                  <li>협의로 해결되지 않는 경우 관련 법령에 따른 분쟁조정 기관에 조정을 신청할 수 있습니다.</li>
                  <li>소송이 불가피한 경우 서울중앙지방법원을 전속 관할 법원으로 합니다.</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>부칙</h2>
                <p className={`text-sm leading-relaxed ${textColor}`}>
                  본 약관은 2026년 3월 20일부터 시행됩니다.
                </p>
              </section>
            </>
          ) : (
            <>
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>Article 1 (Purpose)</h2>
                <p className={`text-sm leading-relaxed ${textColor}`}>
                  These Terms of Service govern the rights, obligations, and responsibilities between
                  onueldev (hereinafter "Company") and users in connection with the use of all digital
                  services (hereinafter "Service") provided by the Company.
                </p>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>Article 2 (Service Description)</h2>
                <ul className={`text-sm space-y-2 list-decimal list-inside ${textColor}`}>
                  <li>The Company provides a variety of digital services including mobile applications and web services.</li>
                  <li>Detailed features and conditions for each service can be found on the respective app store listing page or within the service itself.</li>
                  <li>The Company may add, modify, or discontinue service content and will provide advance notice for significant changes.</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>Article 3 (Effect and Changes to Terms)</h2>
                <ul className={`text-sm space-y-2 list-decimal list-inside ${textColor}`}>
                  <li>These Terms take effect when posted via in-app notices or the app store listing page.</li>
                  <li>The Company may amend these Terms within the scope permitted by applicable laws.</li>
                  <li>When Terms are changed, users will be notified via in-app notice at least 7 days before the effective date. Changes unfavorable to users will be announced at least 30 days in advance.</li>
                  <li>If a user does not expressly refuse after notification of changes, they are deemed to have agreed.</li>
                  <li>Users who do not agree to the changed Terms may stop using the Service and delete their account.</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>Article 4 (Service Use and Accounts)</h2>
                <ul className={`text-sm space-y-2 list-decimal list-inside ${textColor}`}>
                  <li>Some services may be used without an account; additional features may be available upon registration.</li>
                  <li>Users must register with accurate information; any disadvantages arising from false registration are the user's responsibility.</li>
                  <li>Account information must be managed securely and may not be transferred or shared with others.</li>
                  <li>Impersonating others or registering with false information is prohibited.</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>Article 5 (Minors)</h2>
                <ul className={`text-sm space-y-2 list-decimal list-inside ${textColor}`}>
                  <li>Children under the age of 14 may only use the Service with the consent of a legal guardian.</li>
                  <li>Legal guardians may request consent, access, correction, or deletion regarding their child's use of the Service and personal information.</li>
                  <li>If a child under 14 uses the Service without guardian consent, the guardian may request the Company to delete the account.</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>Article 6 (Device Permissions and Notifications)</h2>
                <ul className={`text-sm space-y-2 list-decimal list-inside ${textColor}`}>
                  <li>Some services may request device permissions (camera, photos, health data, notifications, etc.) to provide full functionality.</li>
                  <li>Permissions are collected with the user's consent and may be changed or revoked at any time in device settings.</li>
                  <li>Revoking permissions may limit the use of related features.</li>
                  <li>Service notifications are sent with the user's consent and may be changed at any time in device settings or within the service.</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>Article 7 (Advertising)</h2>
                <ul className={`text-sm space-y-2 list-decimal list-inside ${textColor}`}>
                  <li>Services may include in-app advertising to provide the service free of charge.</li>
                  <li>Ads may be delivered through third-party advertising platforms; the Company is not responsible for the content of such ads.</li>
                  <li>Use of external services through advertisements is entirely at the user's own risk.</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>Article 8 (Data Storage and Management)</h2>
                <ul className={`text-sm space-y-2 list-decimal list-inside ${textColor}`}>
                  <li>The method of data storage varies by service and is described in each service's guidelines.</li>
                  <li>When an account is used, user data is stored securely on encrypted servers.</li>
                  <li>Server-stored data is deleted within 30 days of an account deletion request.</li>
                  <li>The Company does not claim ownership of users' data and does not use such data beyond the purpose of providing the Service.</li>
                  <li>The Company is not liable for data loss caused by force majeure events.</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>Article 9 (User-Generated Content)</h2>
                <ul className={`text-sm space-y-2 list-decimal list-inside ${textColor}`}>
                  <li>Copyright and ownership of all content created or saved by users within the Service belong to the user.</li>
                  <li>Users must not store or use content that infringes the copyright, portrait rights, or personal information of others.</li>
                  <li>Users are responsible for any legal disputes or damages arising from their content.</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>Article 10 (Intellectual Property)</h2>
                <ul className={`text-sm space-y-2 list-decimal list-inside ${textColor}`}>
                  <li>All intellectual property rights in the Service, including the app, design, logos, and source code, belong to the Company.</li>
                  <li>Users may not reproduce, modify, distribute, or sell any part of the Service without the Company's prior consent.</li>
                  <li>Feedback and suggestions provided by users may be used by the Company to improve the Service without additional compensation.</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>Article 11 (Prohibited Activities)</h2>
                <p className={`text-sm mb-3 ${textColor}`}>Users must not engage in the following activities.</p>
                <ul className={`text-sm space-y-1.5 list-decimal list-inside ${textColor}`}>
                  <li>Reverse engineering, hacking, or circumventing security measures of the Service</li>
                  <li>Infringing the intellectual property rights, portrait rights, or personal information of others</li>
                  <li>Creating or distributing spam, malware, or false information</li>
                  <li>Interfering with Service operations or overloading servers</li>
                  <li>Unauthorized commercial use or resale of the Service</li>
                  <li>Any other acts that violate applicable laws or public morals</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>Article 12 (Service Restriction and Termination)</h2>
                <ul className={`text-sm space-y-2 list-decimal list-inside ${textColor}`}>
                  <li>The Company may restrict Service access or terminate an account after prior notice if a user violates these Terms or disrupts normal Service operations.</li>
                  <li>For serious violations such as breaches of law, access may be restricted immediately without prior notice.</li>
                  <li>Users may terminate their account at any time via the settings within the respective service.</li>
                  <li>Upon account deletion, all server-stored data will be deleted within 30 days and cannot be recovered.</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>Article 13 (Service Changes and Discontinuation)</h2>
                <ul className={`text-sm space-y-2 list-decimal list-inside ${textColor}`}>
                  <li>The Company may change or discontinue the Service and will provide advance notice for significant changes.</li>
                  <li>The Service may be temporarily suspended due to system maintenance or technical reasons.</li>
                  <li>Upon Service termination, the Company will notify users via in-app notice or email at least 30 days before the termination date.</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>Article 14 (Disclaimers)</h2>
                <ul className={`text-sm space-y-2 list-decimal list-inside ${textColor}`}>
                  <li>The Company is not liable when unable to provide the Service due to force majeure events such as natural disasters or hacking.</li>
                  <li>The Company is not liable for Service disruptions caused by the user's own actions.</li>
                  <li>The Company does not guarantee the accuracy of information or materials provided through the Service.</li>
                  <li>To the maximum extent permitted by applicable law, the Company is not liable for indirect or consequential damages arising from use of the Service.</li>
                  <li>The Company is not liable for damages occurring through third-party services accessed via in-app advertisements or links.</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>Article 15 (Dispute Resolution and Governing Law)</h2>
                <ul className={`text-sm space-y-2 list-decimal list-inside ${textColor}`}>
                  <li>These Terms and any disputes between users and the Company shall be governed by the laws of the Republic of Korea.</li>
                  <li>In the event of a dispute, both parties shall endeavor to resolve it through good-faith consultation.</li>
                  <li>If not resolved through consultation, either party may apply for mediation through the relevant dispute mediation body under applicable law.</li>
                  <li>If litigation is unavoidable, the Seoul Central District Court shall have exclusive jurisdiction.</li>
                </ul>
              </section>
              <div className={`border-t ${divider}`} />
              <section>
                <h2 className={`text-lg font-bold mb-3 ${sectionTitle}`}>Supplementary Provisions</h2>
                <p className={`text-sm leading-relaxed ${textColor}`}>
                  These Terms shall take effect from March 20, 2026.
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
