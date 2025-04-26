import Link from "next/link"
import AnimationWrapper from "@/components/animation-wrapper"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <AnimationWrapper>
          <div className="max-w-4xl mx-auto">
            <Link href="/">
              <Button variant="ghost" className="mb-8 text-muted-gray hover:text-electric-blue">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>

            <h1 className="text-4xl font-bold text-charcoal mb-8">Privacy Policy</h1>

            <div className="prose prose-lg max-w-none text-text-secondary">
              <p className="text-lg">Last Updated: April 26, 2025</p>

              <p>
                At MomentumAI, we take your privacy seriously. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our website or use our services.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Information We Collect</h2>

              <h3 className="text-xl font-bold text-charcoal mt-6 mb-3">Personal Information</h3>
              <p>We may collect personal information that you voluntarily provide to us when you:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Register for our newsletter</li>
                <li>Purchase a subscription</li>
                <li>Fill out a contact form</li>
                <li>Participate in our community</li>
                <li>Request customer support</li>
              </ul>
              <p>
                This information may include your name, email address, billing information, and any other information
                you choose to provide.
              </p>

              <h3 className="text-xl font-bold text-charcoal mt-6 mb-3">Automatically Collected Information</h3>
              <p>
                When you visit our website, we may automatically collect certain information about your device,
                including:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Operating system</li>
                <li>Pages visited</li>
                <li>Time spent on pages</li>
                <li>Referring website</li>
                <li>Other browsing data</li>
              </ul>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">How We Use Your Information</h2>
              <p>We may use the information we collect for various purposes, including to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send administrative information, such as updates or changes to our policies</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Send newsletters, marketing communications, and other information that may interest you</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                <li>Personalize your experience</li>
              </ul>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our website and hold certain
                information. Cookies are files with a small amount of data that may include an anonymous unique
                identifier.
              </p>
              <p>
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However,
                if you do not accept cookies, you may not be able to use some portions of our website.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Third-Party Services</h2>
              <p>
                We may use third-party services such as Google Analytics, payment processors, email marketing platforms,
                and community forum software. These third parties may collect information about you when you visit our
                website or use our services.
              </p>
              <p>
                We do not control these third parties' tracking technologies or how they may be used. If you have
                questions about a third party's privacy policies, you should contact them directly.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect the security of your personal
                information. However, please be aware that no method of transmission over the internet or electronic
                storage is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate or incomplete information</li>
                <li>The right to delete your personal information</li>
                <li>The right to restrict or object to processing</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided in the "Contact Us" section
                below.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal
                information from children. If we learn that we have collected personal information from a child, we will
                take steps to delete that information as soon as possible.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last Updated" date.
              </p>
              <p>
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy
                Policy are effective when they are posted on this page.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <p className="mb-1">
                Email:{" "}
                <a href="mailto:privacy@blackheartlabs.com" className="text-electric-blue">
                  privacy@blackheartlabs.com
                </a>
              </p>
              <p>
                MomentumAI
                <br />
                123 AI Avenue
                <br />
                San Francisco, CA 94105
                <br />
                United States
              </p>
            </div>
          </div>
        </AnimationWrapper>
      </div>
    </div>
  )
}
