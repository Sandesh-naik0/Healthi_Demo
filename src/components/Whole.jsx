// import React from "react";
// import { motion } from "framer-motion";
// import { Apple, Play, CheckCircle2, Shield, Sparkles, HeartPulse, TrendingDown, Activity, Star, ArrowRight, Menu } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Input } from "@/components/ui/input";
// import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

// // NOTE: This is an original, from-scratch homepage inspired by modern health & wellness apps.
// // It does not copy source code or proprietary text from any website.
// // Swap colors, text, and media to match your brand.

// const weightData = [
//   { week: "W1", kg: 82 },
//   { week: "W2", kg: 81.4 },
//   { week: "W3", kg: 80.9 },
//   { week: "W4", kg: 80.1 },
//   { week: "W5", kg: 79.6 },
//   { week: "W6", kg: 79.0 },
//   { week: "W7", kg: 78.3 },
// ];

// const features = [
//   {
//     icon: <Activity className="w-6 h-6" aria-hidden />,
//     title: "Smart tracking",
//     desc: "Log meals, activity, and water with one tap. Get insights that actually help.",
//   },
//   {
//     icon: <TrendingDown className="w-6 h-6" aria-hidden />,
//     title: "Personal plans",
//     desc: "Flexible programs that fit your lifestyle—not the other way around.",
//   },
//   {
//     icon: <Shield className="w-6 h-6" aria-hidden />,
//     title: "Science-based",
//     desc: "Evidence‑informed guidance from nutrition and behavior research.",
//   },
//   {
//     icon: <HeartPulse className="w-6 h-6" aria-hidden />,
//     title: "Coach support",
//     desc: "Daily nudges and optional coach check‑ins keep you moving forward.",
//   },
// ];

// const testimonials = [
//   {
//     name: "Aisha",
//     quote: "The gentle prompts and clear goals made healthy choices feel automatic.",
//     meta: "Lost 7kg in 10 weeks",
//   },
//   {
//     name: "Marco",
//     quote: "I finally understand what works for my body—and it’s sustainable.",
//     meta: "Down 2 pants sizes",
//   },
//   {
//     name: "Priya",
//     quote: "Logging is effortless, and the progress graph keeps me motivated.",
//     meta: "More energy than ever",
//   },
// ];

// function NavBar() {
//   return (
//     <div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center gap-2">
//             <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 grid place-items-center shadow-sm">
//               <Sparkles className="h-5 w-5 text-white" />
//             </div>
//             <span className="font-semibold text-xl tracking-tight">Healthi</span>
//             <Badge variant="secondary" className="hidden sm:inline-flex ml-2">Demo</Badge>
//           </div>
//           <div className="hidden md:flex items-center gap-8 text-sm">
//             <a href="#features" className="hover:text-emerald-600">Features</a>
//             <a href="#how-it-works" className="hover:text-emerald-600">How it works</a>
//             <a href="#results" className="hover:text-emerald-600">Results</a>
//             <a href="#pricing" className="hover:text-emerald-600">Pricing</a>
//           </div>
//           <div className="flex items-center gap-2">
//             <Button variant="ghost" size="sm" className="md:hidden" aria-label="Open menu">
//               <Menu className="h-5 w-5" />
//             </Button>
//             <Button className="rounded-2xl">Get the app</Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
//       <div className="absolute inset-0 -z-10" aria-hidden>
//         <div className="absolute -top-16 -right-16 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
//         <div className="absolute -bottom-16 -left-16 h-72 w-72 rounded-full bg-teal-200/40 blur-3xl" />
//       </div>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="space-y-6"
//           >
//             <Badge className="rounded-full w-fit" variant="secondary">
//               <Star className="h-3.5 w-3.5 mr-1" /> Loved by millions
//             </Badge>
//             <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
//               Make healthy habits simple
//             </h1>
//             <p className="text-lg text-muted-foreground max-w-xl">
//               Build momentum with daily tracking, flexible nutrition plans, and friendly nudges.
//               Your journey, your pace—with data that actually helps.
//             </p>
//             <div className="flex flex-wrap gap-3">
//               <Button className="rounded-2xl h-12 px-5">
//                 <Apple className="h-5 w-5 mr-2" /> Download on App Store
//               </Button>
//               <Button variant="outline" className="rounded-2xl h-12 px-5">
//                 <Play className="h-5 w-5 mr-2" /> Get it on Google Play
//               </Button>
//             </div>
//             <div className="flex items-center gap-4 pt-2">
//               <div className="flex items-center gap-1">
//                 {Array.from({ length: 5 }).map((_, i) => (
//                   <Star key={i} className="h-4 w-4 fill-current" />
//                 ))}
//               </div>
//               <p className="text-sm text-muted-foreground">4.9 average app rating</p>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//           >
//             <Card className="rounded-3xl shadow-lg">
//               <CardHeader>
//                 <CardTitle>Progress snapshot</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="h-56">
//                   <ResponsiveContainer width="100%" height="100%">
//                     <LineChart data={weightData} margin={{ left: 8, right: 8, top: 8, bottom: 8 }}>
//                       <XAxis dataKey="week" tickLine={false} axisLine={false} />
//                       <YAxis tickLine={false} axisLine={false} domain={[76, 83]} />
//                       <Tooltip cursor={{ opacity: 0.2 }} />
//                       <Line type="monotone" dataKey="kg" strokeWidth={3} dot={false} />
//                     </LineChart>
//                   </ResponsiveContainer>
//                 </div>
//                 <div className="mt-4 grid grid-cols-3 gap-3 text-center">
//                   <div>
//                     <p className="text-2xl font-semibold">-3.7kg</p>
//                     <p className="text-xs text-muted-foreground">7 weeks</p>
//                   </div>
//                   <div>
//                     <p className="text-2xl font-semibold">92% </p>
//                     <p className="text-xs text-muted-foreground">Log streak</p>
//                   </div>
//                   <div>
//                     <p className="text-2xl font-semibold">1.8x</p>
//                     <p className="text-xs text-muted-foreground">Goal adherence</p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Features() {
//   return (
//     <section id="features" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Everything you need to feel your best</h2>
//           <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
//             Thoughtfully designed tools to help you eat well, move more, and stay consistent.
//           </p>
//         </div>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {features.map((f, i) => (
//             <motion.div
//               key={f.title}
//               initial={{ opacity: 0, y: 16 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{ duration: 0.4, delay: i * 0.05 }}
//             >
//               <Card className="rounded-3xl h-full">
//                 <CardContent className="p-6">
//                   <div className="h-12 w-12 rounded-2xl bg-emerald-100 grid place-items-center mb-4">
//                     {f.icon}
//                   </div>
//                   <h3 className="font-semibold text-lg mb-1">{f.title}</h3>
//                   <p className="text-sm text-muted-foreground">{f.desc}</p>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function HowItWorks() {
//   const steps = [
//     {
//       title: "Pick your plan",
//       desc: "Answer a few questions and choose a flexible plan tailored to your goals.",
//     },
//     {
//       title: "Track what matters",
//       desc: "Meals, activity, sleep, and water—capture the habits that move the needle.",
//     },
//     {
//       title: "Get gentle nudges",
//       desc: "Smart reminders and tips keep you consistent without the guilt.",
//     },
//     {
//       title: "See steady progress",
//       desc: "Celebrate the small wins and watch them stack up over time.",
//     },
//   ];

//   return (
//     <section id="how-it-works" className="py-20 bg-gradient-to-b from-white to-emerald-50/60">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-10 items-start">
//           <div>
//             <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">How it works</h2>
//             <p className="mt-3 text-muted-foreground max-w-xl">
//               Start today in minutes. Healthi adapts as your routine changes—so you can stick with it for good.
//             </p>
//             <div className="mt-8 space-y-5">
//               {steps.map((s, idx) => (
//                 <div key={s.title} className="flex gap-4">
//                   <div className="mt-1">
//                     <div className="h-9 w-9 rounded-full bg-emerald-600 text-white grid place-items-center font-semibold">
//                       {idx + 1}
//                     </div>
//                   </div>
//                   <div>
//                     <h3 className="font-semibold">{s.title}</h3>
//                     <p className="text-sm text-muted-foreground">{s.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="mt-8 flex flex-wrap items-center gap-3">
//               <Button className="rounded-2xl">Start free</Button>
//               <Button variant="outline" className="rounded-2xl">
//                 Learn more <ArrowRight className="ml-2 h-4 w-4" />
//               </Button>
//             </div>
//           </div>
//           <Card className="rounded-3xl">
//             <CardHeader>
//               <CardTitle>What members say</CardTitle>
//             </CardHeader>
//             <CardContent className="grid sm:grid-cols-2 gap-4">
//               {testimonials.map((t) => (
//                 <div key={t.name} className="p-4 rounded-2xl border bg-white">
//                   <div className="flex items-center gap-1 mb-2">
//                     {Array.from({ length: 5 }).map((_, i) => (
//                       <Star key={i} className="h-4 w-4 fill-current" />
//                     ))}
//                   </div>
//                   <p className="text-sm">“{t.quote}”</p>
//                   <p className="mt-2 text-xs text-muted-foreground">{t.meta}</p>
//                   <p className="mt-1 text-xs font-medium">— {t.name}</p>
//                 </div>
//               ))}
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Results() {
//   const bullets = ["Avg. 0.5–1kg/week", "Simple food logging", "Built‑in accountability"];
//   return (
//     <section id="results" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-10 items-center">
//           <div>
//             <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Real results, steady and sustainable</h2>
//             <p className="mt-3 text-muted-foreground max-w-xl">
//               Healthi pairs flexible nutrition with gentle habit coaching. No extremes, no fads—just progress you can maintain.
//             </p>
//             <ul className="mt-6 space-y-3">
//               {bullets.map((b) => (
//                 <li key={b} className="flex items-start gap-3">
//                   <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
//                   <span>{b}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <Card className="rounded-3xl">
//             <CardHeader>
//               <CardTitle>Your weekly trend</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="h-64">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <LineChart data={weightData} margin={{ left: 8, right: 8, top: 8, bottom: 8 }}>
//                     <XAxis dataKey="week" tickLine={false} axisLine={false} />
//                     <YAxis tickLine={false} axisLine={false} domain={[76, 83]} />
//                     <Tooltip cursor={{ opacity: 0.2 }} />
//                     <Line type="monotone" dataKey="kg" strokeWidth={3} dot={false} />
//                   </LineChart>
//                 </ResponsiveContainer>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Pricing() {
//   return (
//     <section id="pricing" className="py-20 bg-gradient-to-t from-white to-emerald-50/60">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Pick a plan that fits</h2>
//           <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
//             Start free, upgrade any time. Cancel whenever—you’re in control.
//           </p>
//         </div>
//         <div className="grid md:grid-cols-3 gap-6">
//           {[
//             {
//               name: "Free",
//               price: "₹0",
//               desc: "Basics to get started",
//               features: ["Food & activity log", "Water tracking", "Daily reminders"],
//               cta: "Start free",
//               variant: "outline",
//             },
//             {
//               name: "Pro",
//               price: "₹399/mo",
//               desc: "Advanced tracking & insights",
//               features: ["Personalized plan", "Trends & predictions", "Priority support"],
//               cta: "Go Pro",
//               variant: "default",
//               highlight: true,
//             },
//             {
//               name: "Coach",
//               price: "₹1299/mo",
//               desc: "Weekly coach check‑ins",
//               features: ["1:1 coach messages", "Custom macros", "Accountability calls"],
//               cta: "Talk to a coach",
//               variant: "outline",
//             },
//           ].map((tier) => (
//             <Card key={tier.name} className={`rounded-3xl relative ${tier.highlight ? "ring-2 ring-emerald-600" : ""}`}>
//               {tier.highlight && (
//                 <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full" variant="secondary">
//                   Most popular
//                 </Badge>
//               )}
//               <CardHeader>
//                 <CardTitle className="flex items-center justify-between">
//                   <span>{tier.name}</span>
//                   <span className="text-2xl font-bold">{tier.price}</span>
//                 </CardTitle>
//                 <p className="text-sm text-muted-foreground">{tier.desc}</p>
//               </CardHeader>
//               <CardContent>
//                 <ul className="space-y-2 text-sm">
//                   {tier.features.map((f) => (
//                     <li key={f} className="flex items-start gap-2">
//                       <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5" />
//                       <span>{f}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <Button className="w-full mt-6 rounded-2xl" variant={tier.variant}>
//                   {tier.cta}
//                 </Button>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function Footer() {
//   return (
//     <footer className="py-14 border-t bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           <div>
//             <div className="flex items-center gap-2">
//               <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 grid place-items-center">
//                 <Sparkles className="h-5 w-5 text-white" />
//               </div>
//               <span className="font-semibold text-lg tracking-tight">Healthi</span>
//             </div>
//             <p className="mt-3 text-sm text-muted-foreground max-w-xs">
//               A friendly way to build lasting healthy habits.
//             </p>
//           </div>
//           <div>
//             <p className="font-medium mb-3">Product</p>
//             <ul className="space-y-2 text-sm text-muted-foreground">
//               <li><a href="#features">Features</a></li>
//               <li><a href="#how-it-works">How it works</a></li>
//               <li><a href="#pricing">Pricing</a></li>
//             </ul>
//           </div>
//           <div>
//             <p className="font-medium mb-3">Company</p>
//             <ul className="space-y-2 text-sm text-muted-foreground">
//               <li><a href="#">About</a></li>
//               <li><a href="#">Careers</a></li>
//               <li><a href="#">Press</a></li>
//             </ul>
//           </div>
//           <div>
//             <p className="font-medium mb-3">Get the app</p>
//             <div className="flex flex-col gap-2">
//               <Button variant="outline" className="justify-start rounded-2xl">
//                 <Apple className="h-5 w-5 mr-2" /> App Store
//               </Button>
//               <Button variant="outline" className="justify-start rounded-2xl">
//                 <Play className="h-5 w-5 mr-2" /> Google Play
//               </Button>
//             </div>
//           </div>
//         </div>
//         <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
//           <p>© {new Date().getFullYear()} Healthi (Demo). All rights reserved.</p>
//           <div className="flex items-center gap-4">
//             <a href="#">Privacy</a>
//             <a href="#">Terms</a>
//             <a href="#">Contact</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default function HealthiHomePage() {
//   return (
//     <div className="min-h-screen bg-white text-slate-900">
//       <NavBar />
//       <Hero />
//       <Features />
//       <HowItWorks />
//       <Results />
//       <Pricing />
//       <Footer />
//     </div>
//   );
// }
