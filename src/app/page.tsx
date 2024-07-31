import { ButtonRules } from '@/components/button-rules'
import { Header } from '@/components/header'
import { Rules } from '@/components/rules'
import { Selector } from '@/components/selector'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Rules />
      <Header />
      <section>
        <Selector />
      </section>
      <footer className="absolute flex items-center justify-end bottom-0 w-full p-6 z-20">
        <ButtonRules>Rules</ButtonRules>
      </footer>
    </main>
  )
}
