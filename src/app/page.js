"use client";
import Ads from "@/Home/Ads";
/* eslint-disable react/no-unescaped-entities */
import Banner from "@/Home/Banner";
import Cyberbulling from "@/Home/Cyberbulling";
import HappyClient from "@/Home/HappyClient";
import LawyerSection from "@/Home/LawyerSection";
import ServicesPage from "@/Home/Services";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [confirm, setConfirm] = useState(false);
  const handleSaveTerms = () => {
    localStorage.setItem("legalco_terms", JSON.stringify({ confirm: true }));
    setConfirm(false);
  };
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("legalco_terms"));
    if (!data?.confirm) {
      setConfirm(true);
    }
  }, []);
  return (
    <div>
      <Banner />
      <Ads></Ads>
      <ServicesPage></ServicesPage>
      {/* <LawyerSection></LawyerSection> */}
      <Cyberbulling></Cyberbulling>
      <HappyClient></HappyClient>

      {/* Terms and Condition  */}

      {confirm && (
        <div className="w-full h-screen bg-[#23232380] bg-opacity-50 z-40 fixed top-0 left-0 flex items-center justify-center">
                <div className="w-[95%] md:w-2/3 bg-white h-[90vh] rounded-lg p-5">
                  <h3 className="text-4xl font-bold mb-3">**শর্তাবলী**</h3>
                  <div className="h-[65vh] overflow-auto">
                    <p className=" font-semibold mb-4 ">
                    LegalCO লিমিটেডে স্বাগতম!
                    </p>
                    <p className="text-justify mb-4">
                    যেহেতু আমরা ব্যক্তিগতভাবে মিলিত হব না, তাই চুক্তির শর্তাদি আগেই রূপরেখা করা অত্যন্ত গুরুত্বপূর্ণ৷ আপনার যদি LegalCO সম্পর্কে কোন প্রশ্ন থাকে, অনুগ্রহ করে নির্দ্বিধায় যোগাযোগ করুন। এই চুক্তির মধ্যে, আমরা আমাদের পরিষেবাটিকে পরিষেবা হিসাবে উল্লেখ করেছি, আপনি ব্যবহারকারী হিসাবে এবং এই চুক্তিটিকে চুক্তি হিসাবে উল্লেখ করেছি ৷
                    </p>
                    <p className="text-justify mb-4">
                      
                    </p>
                    <p className="text-justify font-semibold mb-4">
                      2. LEGALCO ONLY PROVIDES A MEDIUM FOR INTERACTION
                    </p>
                    <p className="text-justify mb-4">
                      LegalCO serves as an online platform and mobile
                      application designed to facilitate communication,
                      connections, and online consultations (via video, audio,
                      and text) between legal professionals and potential users
                      seeking legal services. It acts as a medium for
                      information exchange, with the ultimate aim of
                      establishing professional relationships. However, it's
                      important to note that LegalCO does not guarantee the
                      successful matching of users with lawyers, and it does not
                      take a stance on whether a lawyer-client relationship is
                      formed.
                    </p>
                    <p className="text-justify mb-4">
                      It's worth emphasizing that LegalCO operates as a bridge
                      for interaction and does not accept responsibility for any
                      losses experienced by users. Users are encouraged to take
                      action against any individuals they believe have caused
                      harm, rather than directing complaints or blame towards
                      LegalCO. Additionally, the platform is not liable for
                      services provided outside its framework.
                    </p>
                    <p className="text-justify mb-4">
                      LegalCO does not directly offer services to customers; any
                      services provided by individuals are their own
                      responsibility. Thus, LegalCO disclaims liability for any
                      incorrect information, anti-government activities,
                      inappropriate language, exchanged documents, or misuse
                      that might occur. It functions solely as an online
                      platform and holds no liability in these matters
                    </p>
                    <p className="text-justify mb-4">
                      If you join LegalCO as a lawyer or user, you are told that
                      LegalCO only provides a medium for interaction. Therefore,
                      Legalco will not be liable for any financial loss, fraud,
                      fraud or any type of crime on the part of both the lawyer
                      and the service recipient. You agree to all terms and
                      conditions by installing the App/web or taking the Service
                      from legalco.Legalco reserves the right to change prices
                      and rules, policies and to remove or ban any user or any
                      lawyer from the platform.
                    </p>
                    <p className="text-justify font-semibold">
                      A. Clarification Regarding Lawyer-Client Relationship.
                    </p>
                    <p className="text-justify mb-4">
                      LegalCO operates as a platform that enables communication
                      between lawyers and potential clients; however, it does
                      not function as an agent for lawyers. Sending electronic
                      communications solely to LegalCO does not establish a
                      lawyer-client relationship between the user and LegalCO,
                      as this is explicitly disclaimed.
                    </p>
                    <p className="text-justify font-semibold">
                      B. LegalCO does not endorse any specific users.
                    </p>
                    <p className="text-justify mb-4">
                      Its purpose is to assist individuals in need of legal
                      representation in finding lawyers who are most suitable
                      for their specific requirements. LegalCO's intention is
                      not to serve as a platform for advertising or
                      solicitation, and the content provided on the app/website
                      should not be interpreted as legal advice.LegalCO may
                      suggest subscribing lawyers only if they align with a
                      user's needs, and not otherwise. The use of LegalCO,
                      whether through transmission or receipt, does not
                      establish a lawyer-client relationship. Individuals who
                      receive content from this app/website should not make
                      decisions to act or refrain from acting solely based on
                      its contents. We encourage users to independently review
                      lawyers' profiles and make well-informed choices.
                    </p>
                    <p className="text-justify font-semibold ">
                      C. In particular, LegalCO does not facilitate any form of
                      solicitatio
                    </p>
                    <p className="text-justify mb-4">
                      The platform ensures that client information remains
                      concealed from lawyers until direct communication occurs
                      between the client and lawyers, either through direct
                      contact or online interaction. Consequently, lawyers are
                      not permitted to access private details about potential
                      clients.
                    </p>
                    <p className="text-justify font-semibold">
                      D. LegalCo does not offer legal advice.
                    </p>
                    <p className="text-justify mb-4">
                      The 'Common Needs' feature of LegalCo uses only
                      user-provided content to generate basic documents. The
                      information in the 'FAQs' section is not considered legal
                      advice; it simply addresses commonly asked questions about
                      creating wills, drafting lease agreements, issuing cheque
                      dishonor notices, sending money recovery notices, granting
                      power of attorney for rent collection, and other potential
                      document types that may be included over time. Users are
                      recommended to seek guidance from legal professionals for
                      specialized assistance with any of these documents.
                    </p>
                    <p className="text-justify font-semibold">
                      E. Restrictions on 'Common Needs' Feature Usage:
                    </p>
                    <p className="text-justify mb-4">
                      LegalCO provides you with a limited, personal,
                      non-exclusive, and non-transferable license to utilize our
                      'Common Needs' feature strictly for your own personal use.
                      If you are an attorney or professional, you may also use
                      it for your clients. Except as explicitly permitted, you
                      acknowledge and agree that you are not authorized to
                      modify, edit, copy, reproduce, create derivative works,
                      reverse engineer, alter, enhance, or exploit the Forms in
                      any way. However, you can make necessary modifications for
                      completing the Forms within the scope of your authorized
                      use. Terms for Purchased Documents: When you acquire a
                      document from LegalCO, you are agreeing that the document
                      is meant for your personal or business use, or for use in
                      conjunction with your client if you are a professional.
                      You are prohibited from selling or redistributing the
                      purchased document without the explicit written consent of
                      LegalCO. Engaging in unauthorized reselling or
                      distribution constitutes a violation of LegalCO's
                      exclusive copyright and may result in legal action.
                    </p>
                    <p className="text-justify font-semibold ">
                      F. Users' Representation Disclaimer
                    </p>
                    <p className="text-justify mb-4">
                      LegalCO does not make any representations, guarantees, or
                      warranties (express or implied) regarding the legal
                      ability, competence, or quality of services that may be
                      provided by any of the attorneys or law firms listed on
                      this site or any affiliated entities. Please be aware that
                      LegalCO, along with its subsidiaries and employees, are
                      not legal advocates. We are not a law firm and do not
                      offer legal advice. Any content on our app/website or
                      materials sent in communication should not be interpreted
                      as legal advice. Our app/website, blog, and other
                      materials are intended solely to disseminate information
                      and raise awareness, and they do not replace the advice or
                      services of a legal advocate or professional. Whenever
                      necessary to meet your requirements, we will assist in
                      connecting you with appropriate professionals like
                      lawyers, chartered accountants, or company secretaries.
                      Please note that these professionals are not affiliated
                      with us as representatives, agents, or employees. Our
                      website and services serve as just one information source
                      among the various options at your disposal. It's advisable
                      to consult multiple sources for making well-informed
                      decisions. The choice to engage any of these professionals
                      is significant, and it's one that you should consider
                      thoughtfully, relying solely on your own judgment. By
                      agreeing to utilize the services offered on our
                      App/website, you grant us the authorization to assist in
                      this selection process on your behalf. If you do not
                      concur with these terms and conditions or prefer that we
                      do not assist in selecting a suitable professional to
                      fulfill your request, we kindly ask that you refrain from
                      using our services. We make continuous efforts to maintain
                      the accuracy, currency, and relevance of our content and
                      documents. However, due to the evolving nature of laws and
                      regulations, we are unable to provide an absolute
                      assurance that all the information on our site and in
                      other communications is entirely up-to-date. Please be
                      aware that legal statutes, requirements, rules, and
                      regulations are sometimes bound by specific geographic
                      locations, leading to variations from place to place. The
                      general information and other materials we offer may not
                      be universally applicable to all scenarios. It's important
                      to note that our websites and services are not intended to
                      establish an attorney-client relationship. Your
                      utilization of our websites and services does not, and
                      under no circumstances will it, create any such
                      relationship between you and us.
                    </p>
                    <p className="text-justify font-semibold">
                      3. GUIDELINES FOR USERS
                    </p>
                    <p className="text-justify mb-4">
                      Users of LegalCO are granted a non-exclusive, limited
                      right to access and utilize the service in accordance with
                      the stipulations outlined in this agreement. In order to
                      maintain the system's appeal and utility for all users, it
                      is imperative that users adhere to the system's
                      regulations. LegalCO retains the authority to discontinue
                      access to its service for any user who contravenes these
                      regulations, becomes the subject of grievances from other
                      LegalCO users, or for any other valid grounds.
                    </p>
                    <p className="text-justify mb-4">
                      Engaging in any of the following activities on our system
                      will not be sanctioned:
                    </p>
                    <p className="text-justify">
                      1. Utilize the service to exhibit material that is
                      harassing, abusive, threatening, harmful, vulgar, obscene,
                      or invasive of others' privacy.
                    </p>
                    <p className="text-justify">
                      2. Disrupt or interfere with the service, its servers, or
                      connected networks by posting advertisements or links to
                      rival services, transmitting unsolicited bulk emails,
                      spam, chain letters, or indiscriminate email distribution.
                    </p>
                    <p className="text-justify">
                      3. Disrupt or interfere with the service, its servers, or
                      connected networks by posting advertisements or links to
                      rival services, transmitting unsolicited bulk emails,
                      spam, chain letters, or indiscriminate email distribution.
                    </p>
                    <p className="text-justify">
                      4. Racist, hateful, or otherwise offensive comments.
                    </p>
                    <p className="text-justify">
                      5. Foul or otherwise inappropriate language.
                    </p>
                    <p className="text-justify">
                      6. Enhance or share instructional content related to
                      unlawful actions, or advocate for physical damage or harm
                      towards any group or individual.
                    </p>
                    <p className="text-justify">
                      7. Enhance or share instructional content related to
                      unlawful actions, or advocate for physical damage or harm
                      towards any group or individual.
                    </p>
                    <p className="text-justify">
                      8. Violate Internet standards
                    </p>
                    <p className="text-justify mb-4">
                      9. Engaging in activities that infringe upon the rights of
                      others, including but not limited to their intellectual
                      property rights. This encompasses actions involving
                      copyright, trademark, patent, trade secret, or any form of
                      intellectual property violation. This includes, but is not
                      limited to, sharing pirated software or providing links to
                      such software, sharing information aimed at bypassing copy
                      protection measures installed by manufacturers,such as
                      serial or registration numbers for software programs, or
                      distributing any tools designed for circumventing these
                      protections. This also applies to files intended solely
                      for game emulation.
                    </p>
                    <p className="text-justify font-semibold">
                      4. EXEMPTION REGARDING INFORMATION ATTAINED ON THE SERVICE
                      AND SPECIFIC USER-SUPPLIED CONTENT
                    </p>
                    <p className="text-justify mb-4">
                      A. Disclaimer Regarding Information Obtained from the
                      Service LegalCO serves as a platform connecting lawyers
                      and potential clients, providing a forum for individuals
                      seeking legal assistance to connect with legal service
                      providers. It is important to note that LegalCO is
                      intended for informational purposes and while efforts are
                      made, it cannot guarantee the accuracy, completeness, or
                      current status of the information provided. The accuracy,
                      completeness, or adequacy of LegalCO's content is not
                      assured.It's important to understand that LegalCO assumes
                      no responsibility for how the information on this
                      App/website is interpreted or used. Any links from this
                      site to other apps/websites are not meant as referrals,
                      endorsements, or affiliations with those linked entities.
                      LegalCO does not vouch for the content of apps/websites
                      linked from this platform. LegalCO diligently strives to
                      remove promotional content where users attempt to
                      self-promote on the App/website. However, the opinions
                      expressed by individual users of the service are their own
                      and do not represent LegalCO's views. Information
                      submitted by non-legal professionals is not verified
                      before appearing on the LegalCO App/website. Caution
                      should be exercised when using this platform. While
                      LegalCO makes efforts to verify the licensing and good
                      standing of subscribing lawyers with the local bar during
                      registration, it cannot continuously track, verify, or
                      monitor the status of lawyers using the service. As a
                      result, LegalCO cannot guarantee the status, standing, or
                      abilities of the lawyers or law firms listed on the site.
                      Users are advised to conduct their own independent
                      research and assessment of lawyers or law firms they are
                      considering. Decisions about legal services and the choice
                      of lawyers should not be solely based on claims of
                      expertise or cost. LegalCO does not endorse or validate
                      claims of specialization or practice limitations by
                      lawyers or law firms. Though efforts are made to prevent
                      misinformation, certification as specialists or experts in
                      any specific area of law practice by agencies or boards
                      cannot be guaranteed. Lawyers claiming specialization are
                      not necessarily more proficient than others. Users are
                      encouraged to inquire about the factual basis of any
                      claims made by lawyers, request details of certifying
                      agencies, and verify all information. When reviewing
                      information submitted by lawyers and other parties, users
                      should exercise caution. While LegalCO mandates lawyers to
                      adhere to regulations governing their conduct, it cannot
                      constantly monitor their integrity. LegalCO does not
                      endorse the content or legality of offers, statements, or
                      commitments made by lawyers or other parties on or off
                      this platform
                    </p>
                    <p className="text-justify font-semibold mb-4">
                      B. Notice Regarding User-Generated Content including
                      Reviews, Comments, and Communications:
                    </p>
                    <p className="text-justify mb-4">
                      At various sections of the Site, LegalCO might allow
                      visitors to contribute reviews, comments, and other forms
                      of content (referred to as "user content"). It's important
                      to note that LegalCO is not the creator or originator of
                      this user content. Rather, it serves as a platform for
                      storing and sharing the ideas and viewpoints that members
                      of LegalCO choose to express through user content.LegalCO
                      explicitly disclaims any responsibility for this content.
                      In case any objectionable material is brought to the
                      attention of LegalCO, prompt action will be taken to
                      remove it. The determination of whether the material is
                      indeed objectionable will be made at the discretion of
                      LegalCO.
                    </p>
                    <p className="text-justify font-semibold mb-4">
                      5. USAGE LIMITATIONS
                    </p>
                    <p className="text-justify mb-4">
                      The content within LegalCO is intended for personal use
                      exclusively and is not intended for commercial
                      exploitation. Decompiling, reverse engineering,
                      disassembling, renting, leasing, selling, sublicensing, or
                      generating derivative works from LegalCO is prohibited.
                      Additionally, using network monitoring or discovery
                      software to ascertain site architecture or extract
                      usage/user information is not allowed.Prior written
                      consent from LegalCO is necessary to employ robots,
                      spiders, automated tools, or manual processes to monitor
                      or replicate content. Copying, altering, reproducing,
                      publishing, distributing, displaying, or transmitting any
                      part of LegalCO for commercial, non-profit, or public
                      purposes is restricted, except as mentioned above. Using
                      or exporting LegalCO or any portion from LegalCO in
                      contravention of Bangladesh's export control laws and
                      regulations is prohibited. Unauthorized usage of LegalCO
                      or its content is strictly forbidden.
                    </p>
                    <p className="text-justify font-semibold mb-4">
                      6. SECRECY / NON-DISCLOSURE
                    </p>
                    <p className="text-justify mb-4">
                      LegalCO diligently strives to uphold the confidentiality
                      of all information provided by users within our system and
                      lawyer database. However, users are advised that sharing
                      confidential or sensitive information over the internet or
                      via email carries inherent risks. As LegalCO cannot govern
                      the actions of others, we cannot ensure absolute
                      confidentiality of such information. Exercise caution
                      while determining the details to input into the system;
                      refrain from admissions or confessions.Users are
                      encouraged to outline their issue or dispute in broad
                      terms. Specifics should be shared only after selecting a
                      lawyer and establishing contact off the platform (e.g.,
                      via phone or appointment). Lawyers subscribed to this
                      service should avoid requesting specific or confidential
                      details through the platform. LegalCO cannot be held
                      liable for the inadvertent release or misuse of such
                      information by users or due to system errors or failures.
                    </p>
                    <p className="text-justify font-semibold mb-4">
                      7. COMPENSATION
                    </p>
                    <p className="text-justify mb-4">
                      The user acknowledges that LegalCO shall not be held
                      responsible for any harm resulting from their use of this
                      service. The user agrees to defend, indemnify, and protect
                      LegalCO from any and all liability and costs arising due
                      to losses, claims, demands, damages, or expenses related
                      to the content or use of the service. This defense and
                      indemnification also extend to any user breaches of the
                      agreement or the aforementioned statements, assurances,
                      and commitments.The user further consents that this
                      defense and indemnification encompass legal fees and
                      expenses. This commitment also encompasses LegalCO, its
                      founders, officers, and employees. LegalCO retains the
                      right, at its expense, to exclusively control the defense
                      of any issue subject to user indemnification, and the user
                      cannot settle any matter without LegalCO's written
                      consent.
                    </p>
                    <p className="text-justify font-semibold mb-4">
                      8. COMMUNICATIONS AND OTHER
                    </p>
                    <p className="text-justify mb-4">
                      LegalCO shall not be held liable for any data loss arising
                      from accidental or intentional deletion, network or system
                      disruptions, backup failures, file corruption, or any
                      other causes.
                    </p>
                    <p className="text-justify font-semibold mb-4">
                      9. GRANTING A LICENSE OF YOUR CONTENT TO LEGALCO
                    </p>
                    <p className="text-justify mb-4">
                      By uploading content to LegalCO or submitting any
                      materials for use on the platform, you are granting (or
                      confirming that the rights owner has explicitly granted)
                      LegalCO an everlasting, royalty-free, unchangeable,
                      non-exclusive right and license to utilize, reproduce,
                      adapt, publish, translate, generate derivative works, and
                      distribute those materials. This includes incorporating
                      them into any form, medium, or technology, both current
                      and future.
                    </p>
                    <p className="text-justify font-semibold mb-4">
                      10. LEGALCO'S EXCLUSIVE PROPRIETARY RIGHTS
                    </p>
                    <p className="text-justify mb-4">
                      Except as explicitly stated in these terms and conditions,
                      nothing contained herein should be interpreted as granting
                      any license or right, whether implied, estoppel, or
                      otherwise, under copyright or other intellectual property
                      rights. The user acknowledges that both the content and
                      the App/Web Site are safeguarded by copyright, trademark,
                      service marks, patents, or other proprietary rights and
                      laws.Furthermore, the user agrees that they are authorized
                      to utilize this material and information solely as
                      explicitly sanctioned by LegalCO, and may not replicate,
                      reproduce, transmit, distribute, or generate derivative
                      works from said content or information without explicit
                      authorization. The user also acknowledges that LegalCO is
                      authorized to showcase images and text throughout the
                      Service. Users are restricted from extracting and
                      publishing any information from the system, in either
                      electronic or print format, without the consent of LegalCO
                      and all other relevant parties. This list is not
                      exhaustive – additional elements within the system are
                      also the property of LegalCO. Prior to duplicating any
                      content from the system with intentions of reproduction or
                      distribution, please reach out to LegalCO.
                    </p>
                    <p className="text-justify font-semibold mb-4">
                      11. ADVERTISERS
                    </p>
                    <p className="text-justify mb-4">
                      LegalCO may feature advertisements and sponsorships.
                      Advertisers and sponsors hold the responsibility of
                      ensuring the accuracy and compliance of materials
                      submitted for inclusion on LegalCO with relevant laws.
                      LegalCO shall not be held accountable for the legality or
                      any inaccuracies in the content provided by advertisers or
                      sponsors.
                    </p>
                    <p className="text-justify font-semibold mb-4">
                      12. REGISTRATION
                    </p>
                    <p className="text-justify mb-4">
                      Certain portions of LegalCO may require registration. If
                      prompted, you agree to provide accurate and complete
                      registration details to LegalCO. It is your duty to update
                      LegalCO about any changes to this information. Each
                      registration is strictly for individual use, unless
                      otherwise indicated on the registration page. LegalCO does
                      not allow a) sharing of registered sections with others
                      under your identity, or b) granting access to multiple
                      users on a network under a single name. It's your
                      responsibility to prevent such unauthorized usage.If you
                      suspect unauthorized access, please promptly inform
                      LegalCO by reaching out to us. In case we discover
                      unauthorized usage on LegalCO and its services, we reserve
                      the right to terminate access for one or more users.
                    </p>
                    <p className="text-justify font-semibold mb-4">
                      13. RRORS AND CORRECTIONS
                    </p>
                    <p className="text-justify mb-4">
                      LegalCO does not guarantee that the service will be devoid
                      of errors, viruses, or other detrimental elements, nor
                      does it assure the rectification of defects. LegalCO
                      retains the right to enhance, modify, or alter its
                      features, functionality, or service at its discretion.
                    </p>
                    <p className="text-justify font-semibold mb-4">
                      14. CONTENT PROVIDED BY THIRD PARTIES
                    </p>
                    <p className="text-justify mb-4">
                      LegalCO may feature third-party content or provide links
                      to such content. Please note that LegalCO assumes no
                      responsibility and bears no liability for any
                      inaccuracies, legal errors, defamatory statements,
                      misinformation, omissions, untruths, explicit content, or
                      offensive language present in third-party content on the
                      platform. It's important to understand that the
                      information and viewpoints presented in third-party
                      content are not endorsed by LegalCO and do not necessarily
                      align with LegalCO's beliefs.
                    </p>
                    <p className="text-justify font-semibold mb-4">
                      15. UNAUTHORIZED ACTIONS
                    </p>
                    <p className="text-justify mb-4">
                      LegalCO retains the authority to probe into grievances or
                      notified breaches of the Agreement, and to undertake
                      suitable measures as deemed fitting by LegalCO. These
                      measures encompass, but are not restricted to, notifying
                      law enforcement authorities, regulatory bodies, or other
                      external parties about suspected illicit activities.
                      Furthermore, LegalCO may divulge any requisite or
                      pertinent information to said entities or individuals,
                      encompassing user profiles, email addresses, usage
                      history, posted content, IP addresses, and traffic data.
                    </p>
                    <p className="text-justify font-semibold mb-4">
                      16. REMEDIES FOR VIOLATIONS
                    </p>
                    <p className="text-justify mb-4">
                      LegalCO retains the authority to pursue all legal and fair
                      remedies for breaches of the Agreement, which encompasses,
                      among other actions, the ability to restrict access from a
                      specific Internet address to LegalCO and its associated
                      functionalities.
                    </p>
                    <p className="text-justify font-semibold mb-4">
                      17. CONFLICTS CHECKS
                    </p>
                    <p className="text-justify mb-4">
                      The user acknowledges that enrolled attorneys will not
                      conduct preliminary conflict of interest assessments
                      between the user and other clients before responding.
                      Assessing conflicts necessitates the user sharing their
                      personal details, affiliations, opposing parties, and any
                      additional information requested by attorneys. Registered
                      attorneys cannot perform conflict checks based solely on
                      user submissions through this service.
                    </p>
                    <p className="text-justify font-semibold mb-4">
                      18. ENHANCEMENT OF PROVISIONS FOR PERPETUITY
                    </p>
                    <p className="text-justify mb-4">
                      The Agreement and Privacy Policy collectively form the
                      comprehensive understanding governing the utilization of
                      LegalCO's services. In the event that any provision within
                      these terms and conditions is determined to be unlawful,
                      void, or unenforceable, said provision will be treated as
                      separate from the remaining provisions, having no impact
                      on their validity and enforceabilit
                    </p>
                    <p className="text-justify font-semibold mb-4">
                      19. MODIFICATIONS TO TERMS OF USE
                    </p>
                    <p className="text-justify mb-4">
                      The Agreement and Privacy Policy collectively form the
                      comprehensive understanding governing the utilization of
                      LegalCO's services. In the event that any provision within
                      these terms and conditions is determined to be unlawful,
                      void, or unenforceable, said provision will be treated as
                      separate from the remaining provisions, having no impact
                      on their validity and enforceabilit
                    </p>
                    <p className="text-justify font-semibold mb-4">
                      20. SERVICE ALTERATIONS
                    </p>
                    <p className="text-justify mb-4">
                      LegalCO retains the authority to alter or terminate the
                      service, whether temporarily or permanently, with or
                      without prior notice to the user. By using the service,
                      the user acknowledges that LegalCO shall not be held
                      accountable to the user or any third party for such
                      changes or discontinuations. The user further understands
                      and accepts that service termination, as outlined in this
                      agreement, could occur without advance
                      notice.Additionally, the user recognizes and agrees that
                      LegalCO holds the right to promptly remove data and files
                      from the user's account and prevent further access to both
                      the files and the Service.
                    </p>
                    <p className="text-justify font-semibold mb-4">
                      21. WARRANTY DISCLAIMER AND LIABILITY LIMITATION
                    </p>
                    <p className="text-justify mb-4">
                      Risk Allocation for LegalCO and Online System Operators: A
                      significant concern for LegalCO, along with all operators
                      of online systems, is the potential liability stemming
                      from the actions of our users. If a user defames another
                      user, the aggrieved party might hold us accountable,
                      despite the actual culpability lying with the first user.
                      Similarly, in cases where a user uploads a virus-infected
                      program leading to damage on other users' computers, we
                      could face blame, even though the virus originated from a
                      user.Additionally, if a user transmits unlawful or
                      inappropriate content to another user, we might be
                      unjustly implicated, despite our role merely as
                      intermediaries in transmitting messages between users.
                      Consequently, it's vital for every user to assume
                      responsibility for their own actions and recognize that
                      harm caused by another user should be attributed solely to
                      that user, not us. While LegalCO's objective is to furnish
                      users with dependable and high-quality systems, occasional
                      errors or system failures may occur.Given the scale of
                      operating a system of this magnitude, encountering such
                      issues is unavoidable. Were we to be held liable or
                      financially responsible for usability glitches, system
                      failures, errors, or damages of any nature, it would
                      impede our ability to provide this system to users. In
                      order to persist in delivering and enhancing our service,
                      LegalCO must abstain from providing any warranties for
                      this service and stipulate that our liability pertaining
                      to issues related to system usage is rigidly restricted.
                      These objectives are achieved through the ensuing
                      disclaimers.
                    </p>
                    <p className="text-justify mb-4">
                      Warranty Disclaimer: The user explicitly agrees that
                      utilizing the service is entirely at the user's own risk.
                      The service is presented on an "as is" and "as available"
                      basis. LegalCO explicitly disclaims all forms of
                      warranties, whether express or implied, encompassing, but
                      not confined to, implied warranties of merchantability,
                      fitness for a specific purpose, and non-infringement.
                      LegalCO does not assure that the service will align with a
                      user's requisites, that the service will remain
                      uninterrupted, punctual, secure, or devoid of errors.
                      Furthermore, LegalCO does not guarantee outcomes that may
                      arise from service utilization, and does not vouch for the
                      precision or dependability of information acquired via the
                      service or for the rectification of software defects.
                      LegalCO does not warrant any products or services procured
                      or information obtained through the service, nor for any
                      transactions initiated via the service. Any counsel or
                      data, whether conveyed orally or in writing, that the User
                      obtains from LegalCO shall not establish any warranty
                      beyond what is expressly articulated herein.
                    </p>
                    <p className="text-justify mb-4">
                      The user acknowledges and agrees that LegalCO shall not be
                      held accountable for any direct, indirect, incidental,
                      special, or consequential damages arising from the
                      utilization of the service, or from the inability to use
                      said service, or for the expenses incurred in acquiring
                      substitute goods and services. Furthermore, this includes
                      damages resulting from the purchase of goods or services,
                      receipt of messages, or engagement in transactions
                      facilitated through or originating from the service, as
                      well as damages arising from unauthorized access to or
                      alteration of the user's data or transmissions. Such
                      damages encompass, but are not restricted to, loss of
                      profits, utilization, data, or other intangible assets.
                      This applies even if LegalCO has been forewarned about the
                      potential for such damages. The user also affirms that
                      LegalCO shall not be held liable for any damages arising
                      from interruptions, suspensions, or terminations of the
                      service, irrespective of whether such interruptions,
                      suspensions, or terminations were justified, negligent,
                      deliberate, or inadvertent.
                    </p>
                    <p className="text-justify font-semibold mb-4">
                      22. DISPUTE RESOLUTION
                    </p>
                    <p className="text-justify mb-4">
                      Any dispute or claim arising from or in connection with
                      this Agreement or the services provided by LegalCO will be
                      resolved through binding arbitration, following the laws
                      of Bangladesh. Such disputes or claims will be arbitrated
                      on an individual basis and will not be combined with any
                      claims or disputes of other parties. Any other legal
                      disagreements or conflicts will also be determined in
                      accordance with Bangladesh's laws, with the Courts of
                      Dhaka holding jurisdiction over all such matters.
                    </p>
                    <p className="text-justify font-semibold mb-4">
                      23. OWNERSHIP
                    </p>
                    <p className="text-justify mb-4">
                      This platform is both owned and operated by LegalCO. All
                      rights, titles, and interests related to the materials
                      presented on this app/website, including but not limited
                      to information, documents, logos, graphics, sounds, and
                      images (referred to as the 'Materials'), are the sole
                      property of LegalCO. Unless explicitly authorized by
                      LegalCO, none of these materials may be copied,
                      reproduced, republished, downloaded, uploaded, posted,
                      displayed, transmitted, or distributed in any manner.It's
                      important to note that nothing on this site should be
                      interpreted as granting any license under LegalCO's
                      intellectual property rights, whether by implication,
                      estoppel, or any other means. Should you have inquiries
                      about obtaining such licenses, please feel free to contact
                      us. It's essential to understand that LegalCO does not
                      sell, license, lease, or otherwise provide any materials
                      beyond those explicitly designated as being offered by
                      LegalCO. Any rights not expressly granted in this
                      statement are hereby reserved by LegalCO.
                    </p>
                    <p className="text-justify font-semibold mb-4">
                      24. COMPLETE AGREEMENT
                    </p>
                    <p className="text-justify mb-4">
                      This agreement represents the comprehensive and entirety
                      of the understanding between the user and LegalCO. It
                      stands as an exhaustive and exclusive expression of the
                      agreement's terms. This agreement holds precedence over
                      all other communications between LegalCO and its users,
                      relating to the subject matter herein. It surpasses and
                      replaces all prior or concurrent agreements, whether
                      written or spoken, pertaining to said subject matter. If
                      you find these Terms and Conditions unacceptable at any
                      point or if you do not align with them, we kindly request
                      you to refrain from using this Site.We retain the right to
                      modify these Terms and Conditions at our discretion,
                      without prior notice. It is your responsibility to
                      periodically review these Terms and Conditions. By making
                      use of LegalCO's services or accessing the LegalCO
                      App/web, you acknowledge that you have thoroughly read and
                      consent to abide by these terms and conditions
                    </p>
                    <p className="text-justify font-semibold mb-4">
                      25. INDEMNIFICATION
                    </p>
                    <p className="text-justify mb-4">
                      You consent to protect, indemnify, and absolve LegalCO,
                      alongside our officers, directors, shareholders,
                      employees, and agents, from any and all claims,
                      liabilities, damages, losses, or expenses. This includes
                      reasonable legal fees and costs that may arise directly or
                      indirectly from your utilization of the App/web and its
                      materials.
                    </p>
                    <p className="text-justify font-semibold mb-4">
                      26. POLICY FOR CANCELLATION AND REFUNDS
                    </p>
                    <p className="text-justify mb-4">
                      We are dedicated to ensuring that the services you acquire
                      via our App/website not only meet but exceed your
                      expectations, all while being competitively priced within
                      the industry. Yet, there might be instances when you seek
                      a refund. Firstly, if you've paid for services but later
                      decide not to proceed with them. Secondly, if we fail to
                      deliver services within the communicated time frame due to
                      our own oversight or errors. Thirdly, although we have
                      reservations, you might deem our services
                      unsatisfactory.In any of these scenarios, kindly email the
                      assigned Ticket in your name, copying info@legalco.com.bd.
                      It's important to clarify that only the professional fees
                      portion of the charges is eligible for refund
                      consideration. Upon receiving your email, LegalCO's Senior
                      Management will assess the refund request based on its
                      merits. It's crucial to note that the final decision
                      regarding refund requests rests with us. Furthermore, we
                      want to emphasize that circumstances beyond our control,
                      such as national holidays, government delays, acts of
                      nature, technical issues, and more, may result in delays.
                      In such cases, we cannot be held liable. If your refund
                      request is approved based on the terms and conditions
                      outlined here or in other sections, we will send you an
                      email requesting the necessary information to process the
                      refund. This might include your Bank Account details like
                      account number and the SWIFT code of the relevant branch.
                      Please be aware that it will take us a minimum of
                      approximately 72 to 144 working hours, starting from the
                      receipt of all required information, to complete the
                      refund process and initiate the transfer. We want to
                      emphasize once more that only the professional fees
                      associated with our services are eligible for a refund,
                      pending the decision of LegalCO Limited's Senior
                      Management.
                    </p>
                    <p className="text-justify mb-4">
                      We want you to know that we are continuously enhancing our
                      services and greatly value any suggestions you may have.
                      For any further inquiries, please reach out to our
                      customer service desk at LegalCO Limited.
                    </p>
                    <p className="text-justify mb-4">
                      Your interest and support are highly appreciated, and we
                      warmly welcome you to our community!
                    </p>
                    <p className="text-justify mb-4">
                    Feel free to contact us if you have any questions Via Email:
<span className="text-sky-600"> support@legalco.com.bd</span>
                    </p>

                  </div>
                  <div className="border-t py-3 text-center">
                    <button
                      onClick={handleSaveTerms}
                      className="btn btn-primary rounded-3xl px-20"
                    >
                      Accept
                    </button>
                  </div>
                </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
