import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">InnVest Coin</h1>
          <nav className="space-x-6">
            <Link href="#why"><a className="hover:underline">Why IVC</a></Link>
            <Link href="#roadmap"><a className="hover:underline">Roadmap</a></Link>
            <Link href="#token"><a className="hover:underline">Token</a></Link>
            <Link href="#invest"><a className="hover:underline">Invest</a></Link>
            <Link href="#about"><a className="hover:underline">About</a></Link>
            <Link href="#contact"><a className="hover:underline">Contact</a></Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section id="hero" className="bg-gradient-to-br from-blue-100 to-blue-300 py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-extrabold mb-4">Own a Piece of Your Next Getaway</h2>
            <p className="mb-6">Join IVC to earn discounts, vote on new destinations, and grow value through buybacks.</p>
            <Button asChild>
              <a href="https://startengine.com/innvestcoin" target="_blank">Invest Now</a>
            </Button>
          </div>
        </section>

        <section id="why" className="py-16">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent>
                <h3 className="text-xl font-semibold mb-2">The Problem</h3>
                <p>High fees, lack of true loyalty, and no shared upside for frequent travelers.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-xl font-semibold mb-2">Our Solution</h3>
                <p>IVC token combines real-world lodging discounts with governance and buyback-driven growth.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="roadmap" className="bg-gray-50 py-16">
          <div className="container mx-auto px-6">
            <h3 className="text-2xl font-semibold mb-6 text-center">Roadmap</h3>
            <ul className="space-y-4">
              <li>0–6 months: Reg CF launch, acquire & renovate Upstate NY motel</li>
              <li>7–18 months: Open Midtown Manhattan boutique property</li>
              <li>19–36 months: Expand to 2 regional motels in key vacation corridors</li>
              <li>3–5 years: Global flagship partnerships in top leisure markets</li>
            </ul>
          </div>
        </section>

        <section id="token" className="py-16">
          <div className="container mx-auto px-6">
            <h3 className="text-2xl font-semibold mb-4 text-center">IVC Token Details</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent>
                  <h4 className="font-semibold">Total Supply</h4>
                  <p>1,000,000 IVC</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <h4 className="font-semibold">Utility</h4>
                  <p>10% off stays, comp nights, governance voting</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <h4 className="font-semibold">Anti-Whale Controls</h4>
                  <p>2% max wallet, vesting cliffs, quadratic voting</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <h4 className="font-semibold">Buybacks</h4>
                  <p>Quarterly net income allocation for repurchases & burns</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="invest" className="bg-gradient-to-br from-green-100 to-green-300 py-16">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-2xl font-semibold mb-4">Invest via StartEngine</h3>
            <p className="mb-6">Join our Reg CF offering. Minimum investment \$250. Crowdfunding cap \$5M.</p>
            <Button asChild>
              <a href="https://startengine.com/innvestcoin" target="_blank">Invest Now</a>
            </Button>
          </div>
        </section>

        <section id="about" className="py-16">
          <div className="container mx-auto px-6">
            <h3 className="text-2xl font-semibold mb-4 text-center">About Us</h3>
            <p className="text-center max-w-2xl mx-auto">IVC Holdings LLC, founded by hospitality and blockchain veterans, powers your next getaway with real ownership and governance.</p>
          </div>
        </section>

        <section id="contact" className="bg-gray-50 py-16">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-2xl font-semibold mb-4">Contact</h3>
            <p>Email us at <a href="mailto:investorrelations@innvestcoin.com" className="text-blue-600">investorrelations@innvestcoin.com</a></p>
            <div className="mt-4 space-x-4">
              <a href="#" className="hover:underline">Discord</a>
              <a href="#" className="hover:underline">Telegram</a>
              <a href="#" className="hover:underline">Twitter</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
