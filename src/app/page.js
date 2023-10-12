"use client"
/* eslint-disable react/no-unescaped-entities */
import Banner from '@/Home/Banner';
import HappyClient from '@/Home/HappyClient';
import LawyerSection from '@/Home/LawyerSection';
import ServicesPage from '@/Home/Services';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [confirm, setConfirm] = useState(false);
  const handleSaveTerms = () => {
    localStorage.setItem("legalco_terms", JSON.stringify({confirm: true}))
    setConfirm(false)
  }
  useEffect(()=> {
    const data = JSON.parse(localStorage.getItem("legalco_terms"));
    if(!data?.confirm){
      setConfirm(true)
    }
  },[])
  return (
    <div>
        <Banner />
        <ServicesPage></ServicesPage>
        <LawyerSection></LawyerSection>
        <HappyClient></HappyClient>


{/* Terms and Condition  */}

{
  confirm && <div className='w-full h-screen bg-[#23232380] bg-opacity-50 z-50 fixed top-0 left-0 flex items-center justify-center'>
      <div className="w-2/3 bg-white h-[90vh] rounded-lg p-5">
              <h3 className='text-4xl font-bold mb-3'>Privacy Policy:</h3>
          <div className="h-[65vh] overflow-auto">
              <p className='text-justify'>This policy is designed to provide you with insights into how we utilize and safeguard your data.
Should you have any inquiries, please don't hesitate to reach out to us at info@legalco.com.bd.
We sincerely appreciate your selection of LegalCO. Thank you.
Date of Effectiveness: [ ]
LegalCO Limited offers an app & web and mobile-enabled application/website. This platform
serves to provide information about LegalCO, its services, and general legal matters. The
privacy notice pertains to this App/website and is under the ownership and operation of
LegalCO Limited. This notice outlines how LegalCO gathers and utilizes personal information
from App/website visitors. Additionally, it informs users and visitors about the choices they have
regarding LegalCO's handling of their personal data.
These policies are subject to change at the discretion of the management, and in such cases,
the updated privacy notice will pertain only to information gathered after the posting date of the
revised policy.
The commencement date of this privacy notice is provided at the top of this app/webpage. We
shall inform you of substantial alterations through a notice posted on this app/webpage. Your
ongoing utilization of the Services subsequent to the commencement date signifies your
acknowledgment of the modified privacy notice. We suggest you review this page intermittently
for the most recent insights into our privacy protocols. Any revised privacy notice shall take
precedence over all prior versions.
Should you disagree with forthcoming modifications to this privacy notice, it is imperative that
you discontinue using the Services following the effective date of said alterations. Upon
accessing the app/website, you affirm that you have perused, comprehended, and consented to
the terms and conditions outlined in this privacy notice.
LegalCO's Policy
Your privacy holds immense importance to us, and we echo your apprehensions regarding any
data you furnish us while engaging with our online presence. We advise you to peruse this
comprehensive privacy notice as you traverse our app/website.
Personal Information"
Encompasses any details enabling us to recognize you, such as your complete name, contact
number, email address, postal code, paternal name, National ID number (NID), BAR number,
District BAR affiliation, Bar Council certification, District Bar ID Card,experience,office/chamber
address as well as any other identifying particulars you willingly furnish to us.
In the event that you opt to initiate a payment to LegalCO through a payment gateway
integrated into the app/website, essential financial details will be gathered by a third-party
service provider. The utilization and safekeeping of such data by these partners are regulated
by their relevant terms of service and privacy disclosures. Among the information retained in our
records are the payment card's category and the concluding four digits of the card. Recognizing
the sensitive nature of financial information, our approach is meticulously designed to ensure its
utmost confidentiality.
Certain external parties, including our business partners and service providers, furnish us with
Personal Information pertaining to you. This information may encompass the following:
Regarding account details for third-party services: In case you engage with third-party services
while using our platform, like using services such as Facebook or Google to log into our
platform, or if you share our content via social media platforms, certain information about you
may be sent to us by these third-party services, based on their policies and your account
settings. It's important to note that the information shared with us falls under the scope of our
privacy policy, including the fundamental details we receive from Facebook about you.
Upon utilizing our Services, certain data, potentially encompassing Personal Information, is
gathered automatically. This data could involve the subsequent:
Traffic Data: Additionally, we may automatically gather specific information when you engage
with our Services. This includes: (1) IP address and mobile app details; (2) domain server; (3)
device type(s) employed for accessing the Services; (4) app/web browser(s) utilized to reach the
Services; (5) originating app/web page or other origins that led you to the Services; (6)
geolocation data; and (7) further statistics and details associated with the interaction between
your device or browser and the Services (collectively referred to as 'Traffic Data'). Depending on
relevant laws, certain Traffic Data may be classified as Personal Information.
Feel free to explore our app/ without divulging any personal information. Nonetheless, when
making a service request on our app/website, your authentication details will be necessary.
For online payments, they will be managed by a third-party service provider. Prior to using any
non-LegalCO apps/websites, we recommend perusing the section below labeled 'Links and
Third-Party Apps/Websites' to acquaint yourself with their privacy terms."
How We Collect Information
We gather information (including Personal Information and Traffic Data) while you engage with
and utilize the Services. This data may also originate from third-party sources. The methods of
collection include:
When you interact with the Services' interactive tools and features, such as searching for
lawyers or legal service providers ('Service Providers'), looking for available appointments with
Service Providers, engaging in live chats, or submitting queries and requests.
When you willingly provide information within open-text boxes via the Services or in response to
surveys, questionnaires, and similar mechanisms.
Through technologies like cookies, app/web beacons, analytics services, and other tracking
tools.When you utilize the 'Contact Us' feature on the app/website, send us emails, or initiate
contact in other ways.
Information is collected during account registration and digital profile creation in the app.
Utilizing Your Provided Information
We may utilize non-Personal Information to gain a deeper understanding of LegalCO's user
base and enhance the client-lawyer experience, all at our discretion. Our use of information,
both Personal and non-Personal, is geared towards delivering, enhancing, and expanding the
Services. This encompasses activities such as:
Fulfilling your requests for products, services, and information.Promptly addressing any
communications received from you.Reaching out when necessary, including reminders for
upcoming appointments.Maintaining, administering, and improving the Services, along with
conducting internal analyses to support our business.Tailoring your experience of the Services
to suit your preferences.Informing you about resources or services that might align with your
interests.
Sharing information about LegalCO, our products, and Services.Sending carefully curated
communications based on your preferences.Integrating third-party information with your data to
achieve the purposes outlined in this privacy notice.Displaying advertisements, including those
based on your interests and online behavior.
Leveraging legally permissible statistical information for various purposes, including third-party
commercial and marketing endeavors.
Meeting legal obligations, such as preventing, detecting, and investigating security breaches
and potentially unlawful activities.Resolving disputes and deterring fraudulent, illegal, or harmful
actions.Enforcing our Terms of Use and other agreements."
Please note that this is a revised version of the text provided in English, aimed at enhancing its
clarity and readability.
How We Share Your Information
Sharing of Information in Specific Scenarios: As part of providing the Services, we might need to
share certain collected information with third parties, as elaborated in this section:
Our Agents: We may share your Personal Information and/or Traffic Data with our agents,
affiliates, or contractors who aid us in operating this site. These partners cover a spectrum of
functions including hosting, billing, fulfillment, data storage, security, insurance verification,
app/web service analytics, and ad serving. Their involvement assists us in business operations
and service delivery as per your requests.
Legal Service Providers: We might share your Personal Information with legal service providers
who can offer the services you seek.
Cross-Device Connectivity: Collaborating with partners who scrutinize device activity data, we
endeavor to determine user interactions across multiple devices. This entails device matching
based on your information, encompassing demographic, geographic, and interest-based data.
In this pursuit, we may utilize de-identified data. The outcome may involve targeted
advertisements across devices we believe are interconnected, or further analysis of Services
usage spanning devices.
Transitions in Ownership: In the event of a merger, sale, acquisition, or change of
ownership/control involving LegalCO, your Personal Information may be transferred to another
entity. We'll make reasonable efforts to alert you before your information becomes subject to
altered privacy and security policies.
Public Information and Contributions: Any information you disclose in a review, online
discussion, or forum is considered public, not private. Exercise caution when revealing Personal
Information in public postings or forums. Such submissions might be accessed or collected by
third parties, beyond our control or prediction.
Safeguarding LegalCO and Others: We may be obliged to reveal your Personal Information or
other collected data if we genuinely believe such disclosure is necessary to: (1) adhere to legal
obligations, court orders, or regulatory mandates; (2) protect the rights, property, or safety of
you, LegalCO, or others; (3) enforce agreements with you; or (4) respond to claims of third-party
rights violation.
Additional Data: Information that does not identify individuals (including de-identified or
aggregated data) might be disclosed at our discretion."This revision aims to enhance the clarity
and readability of the provided text while maintaining its content and intent.
External Links and Third-Party Applications/Websites:
This policy exclusively pertains to information collection by LegalCO. LegalCO's app/website
features hyperlinks or connections to external app/websites, granting access to content,
products, and services from both affiliated and non-affiliated applications/websites. We strongly
recommend acquainting yourself with the specific privacy policy and terms of use for each
third-party application/website before furnishing any personal information. We cannot be held
responsible for the data collection, privacy protocols, information sharing practices, or the
content of any non-LegalCO applications/websites.
Data Storage and Duration of Retention:
LegalCO adheres to stringent data protection norms. Your information is stored within secure
operational environments inaccessible to the general public. Our entire LegalCO team and
associates are committed to safeguarding your privacy and security, fully acquainted with our
privacy and security protocols. We will retain your information as long as necessary to furnish
our services. If required to meet legal obligations, resolve disputes, prevent fraud, uphold
agreements, or as permitted by relevant law, we may retain and employ your data. While we
diligently endeavor to house Personal Information in a secure non-public environment, we
cannot guarantee its absolute security. In the event that we suspect the security of your
Personal Information may be compromised during or after our association, we will attempt to
notify you of the situation. Should notification be deemed appropriate, we will strive to apprise
you promptly, considering the prevailing circumstances.
Granting Permission for Processing
Subject to your opt-out preferences and the stipulations within this notice, you hereby grant
consent to LegalCO for the collection, processing, disclosure, and transfer of your personally
identifiable information, limited to the purposes elucidated within this notice. Your consent,
pertaining to the right to transfer information as mentioned in this paragraph, is to be understood
as encompassing approval for the transfer of your personally identifiable information to
jurisdictions that may possess varying levels of privacy safeguards compared to those afforded
to you under your local laws.
Cookies

Opt-Out or Unsubscribe
Should you be receiving regular communications, such as our online newsletter subscription, via
our app/website or application, you have the option to cease receiving them. Each
communication dispatched to you will feature an opt-out or unsubscribe alternative. It's
important to note that certain messages, such as notifications about secure messages from
lawyers or legal documents in response to your LegalCO request, cannot be opted out of or
unsubscribed from.
Intellectual Property and Copyright
All information showcased, conveyed, or presented by LegalCO and its affiliated app/websites is
safeguarded by copyright. The content is the rightful property of LegalCO Limited. By perusing
this notice, you commit to respecting all copyright notifications and limitations associated with
any content accessed via the app/website.
Assessment and Enhancement of Quality
LegalCO is committed to elevating service quality through collaborative efforts involving all
stakeholders. We may periodically solicit users to participate in surveys aimed at gauging their
experience with our app/website and application. These surveys might seek demographic
insights (such as age, gender, and education), while refraining from soliciting specific
information. Information garnered from the surveys will be exclusively utilized for the purpose of
assessment and quality enhancement, geared towards enhancing the user experience.
Furthermore, users offering feedback may be personally contacted for follow-ups regarding
raised concerns.
Additional Clauses
Your utilization of our app/website hinges on your acceptance of all other terms and conditions.
Beyond the scope outlined in this notice, LegalCO will not employ your information for any
purposes without your explicit consent. Should you have inquiries concerning this notice, feel
free to reach out to us at info@legalco.com.bd </p>
          </div>
          <div className="border-t py-3 text-center">
              <button onClick={handleSaveTerms} className='btn btn-primary rounded-3xl px-20'>Accept</button>
          </div>
      </div>
  </div>
}
    </div>
  );
};

export default HomePage;