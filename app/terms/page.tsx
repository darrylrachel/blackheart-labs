import Link from "next/link"
import AnimationWrapper from "@/components/animation-wrapper"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function TermsOfServicePage() {
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

            <h1 className="text-4xl font-bold text-charcoal mb-8">Terms of Service</h1>

            <div className="prose prose-lg max-w-none text-text-secondary">
              <p className="text-lg">Last Updated: April 26, 2025</p>

              <p>
                Please read these Terms of Service ("Terms") carefully before using the Blackheart Labs website and
                services.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing or using our website, subscribing to our newsletter, purchasing a membership, or using any
                of our services, you agree to be bound by these Terms. If you disagree with any part of the Terms, you
                may not access our services.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">2. Intellectual Property</h2>
              <p>
                The content on our website, including text, graphics, logos, images, audio clips, digital downloads,
                data compilations, and software, is the property of Blackheart Labs or its content suppliers and is
                protected by international copyright laws.
              </p>
              <p>
                Our trademarks and trade dress may not be used in connection with any product or service without the
                prior written consent of Blackheart Labs.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">3. User Accounts</h2>
              <p>
                When you create an account with us, you must provide accurate, complete, and current information.
                Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your
                account.
              </p>
              <p>
                You are responsible for safeguarding the password that you use to access our services and for any
                activities or actions under your password.
              </p>
              <p>
                You agree not to disclose your password to any third party. You must notify us immediately upon becoming
                aware of any breach of security or unauthorized use of your account.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">4. Subscriptions and Payments</h2>
              <p>
                We offer various subscription plans for our services. By subscribing to a paid plan, you agree to pay
                the subscription fees as described at the time of purchase.
              </p>
              <p>
                Subscription fees are billed in advance on a recurring basis, depending on the billing cycle you select.
                You authorize us to charge your payment method for the subscription fees.
              </p>
              <p>
                You can cancel your subscription at any time by contacting us or through your account settings. Upon
                cancellation, your subscription will remain active until the end of your current billing period.
              </p>
              <p>
                We reserve the right to change our subscription fees at any time. If we change our fees, we will provide
                notice of the change on our website or by email at least 14 days before the change takes effect.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">5. Refund Policy</h2>
              <p>
                We offer a 14-day money-back guarantee for new premium subscribers. If you're not satisfied with our
                services, you can request a refund within 14 days of your initial payment by contacting us at
                support@blackheartlabs.com.
              </p>
              <p>
                After the 14-day period, subscription fees are non-refundable, and there are no refunds or credits for
                partially used periods.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">6. User Content</h2>
              <p>
                Our services may allow you to post, link, store, share, or otherwise make available certain information,
                text, graphics, videos, or other material ("User Content"). You are responsible for the User Content
                that you post, including its legality, reliability, and appropriateness.
              </p>
              <p>
                By posting User Content, you grant us the right to use, modify, publicly perform, publicly display,
                reproduce, and distribute such content on and through our services.
              </p>
              <p>You agree not to post User Content that:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Is unlawful, harmful, threatening, abusive, harassing, defamatory, or invasive of privacy</li>
                <li>
                  Infringes on any patent, trademark, trade secret, copyright, or other intellectual property rights
                </li>
                <li>
                  Contains software viruses or any other code designed to interrupt, destroy, or limit the functionality
                  of any computer software or hardware
                </li>
                <li>Is false, misleading, or designed to manipulate engagement</li>
                <li>Impersonates any person or entity or misrepresents your affiliation with a person or entity</li>
              </ul>
              <p>
                We reserve the right to remove any User Content that violates these Terms or is otherwise objectionable
                at our sole discretion.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">7. Limitation of Liability</h2>
              <p>
                In no event shall Blackheart Labs, its directors, employees, partners, agents, suppliers, or affiliates
                be liable for any indirect, incidental, special, consequential, or punitive damages, including without
                limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Your access to or use of or inability to access or use our services</li>
                <li>Any conduct or content of any third party on our services</li>
                <li>Any content obtained from our services</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              </ul>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">8. Disclaimer</h2>
              <p>
                Our services are provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, expressed or
                implied, regarding the operation of our services or the information, content, or materials included
                therein.
              </p>
              <p>
                We do not guarantee that our services will be uninterrupted, secure, or error-free, or that defects will
                be corrected.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">9. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of California,
                without regard to its conflict of law provisions.
              </p>
              <p>
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those
                rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining
                provisions of these Terms will remain in effect.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">10. Changes to Terms</h2>
              <p>
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will
                provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material
                change will be determined at our sole discretion.
              </p>
              <p>
                By continuing to access or use our services after those revisions become effective, you agree to be
                bound by the revised terms.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">11. Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us at:</p>
              <p className="mb-1">
                Email:{" "}
                <a href="mailto:legal@blackheartlabs.com" className="text-electric-blue">
                  legal@blackheartlabs.com
                </a>
              </p>
              <p>
                Blackheart Labs
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
