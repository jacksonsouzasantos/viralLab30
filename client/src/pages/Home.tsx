import { Button } from "@/components/ui/button";
import { Check, Zap, Lock, Clock, TrendingUp, Users } from "lucide-react";
import { useState } from "react";

const KIWIFY_LINK = "https://pay.kiwify.com.br/jKzzLis";

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleCTAClick = () => {
    window.open(KIWIFY_LINK, "_blank");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20">
              🚀 Método Comprovado e Escalável
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Desvende o Segredo dos Vídeos Curtos que Geram
            <span className="block bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent">
              Milhões de Visualizações
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            O método completo que transforma qualquer pessoa em um criador de conteúdo viral, mesmo começando do zero, sem equipamentos caros e sem precisar aparecer.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={handleCTAClick}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              SIM! Quero Viralizar Agora
            </Button>
            <Button
              onClick={handleCTAClick}
              variant="outline"
              size="lg"
              className="border-accent/30 text-foreground hover:bg-accent/10 font-bold text-lg px-8 py-6 rounded-lg"
            >
              Conhecer o Método
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-accent" />
              <span>Acesso Vitalício</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-accent" />
              <span>Garantia 7 Dias</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-accent" />
              <span>Suporte Exclusivo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
            Por Que Você Precisa do ViralLab 30?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Domine a Criação",
                desc: "Aprenda a produzir vídeos curtos hipnotizantes em minutos, sem experiência prévia.",
              },
              {
                icon: Users,
                title: "Alcance Massivo",
                desc: "Conquiste milhões de visualizações e atraia uma audiência engajada para seu perfil.",
              },
              {
                icon: Zap,
                title: "Monetização Simplificada",
                desc: "Transforme cada vídeo em uma máquina de vendas, gerando renda passiva e escalável.",
              },
              {
                icon: Clock,
                title: "Tempo Otimizado",
                desc: "Crie conteúdo de alta qualidade em tempo recorde, liberando mais horas para você.",
              },
            ].map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-xl bg-background border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
                >
                  <div className="mb-4 inline-block p-3 rounded-lg bg-accent/10">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What You'll Get Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            O Que Você Vai Receber
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Um método estruturado em 5 módulos + bônus exclusivo, com tudo que você precisa para começar a viralizar hoje mesmo.
          </p>

          <div className="space-y-4">
            {[
              {
                title: "Módulo 1: Desvendando o Algoritmo",
                desc: "Entenda como as plataformas funcionam e como fazer seus vídeos serem entregues para milhões.",
              },
              {
                title: "Módulo 2: Roteiro Viral na Prática",
                desc: "Modelos prontos e técnicas comprovadas para criar roteiros que prendem a atenção do primeiro ao último segundo.",
              },
              {
                title: "Módulo 3: Edição Expressa e Profissional",
                desc: "Ferramentas e truques para editar vídeos de forma rápida, com qualidade cinematográfica, usando apenas o celular.",
              },
              {
                title: "Módulo 4: Estratégias de Monetização",
                desc: "Descubra os 7 pilares para transformar visualizações em vendas, mesmo sem ter um produto próprio.",
              },
              {
                title: "Módulo 5: Crescimento Acelerado",
                desc: "Hacks e segredos para escalar seu perfil e multiplicar seus resultados em tempo recorde.",
              },
              {
                title: "🎁 Bônus Exclusivo: Comunidade ViralLab 30",
                desc: "Acesso à comunidade exclusiva, suporte direto, networking e atualizações constantes.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg bg-card border border-border/50 hover:border-accent/50 transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Check className="w-6 h-6 text-accent mt-1" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Triggers Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
            Sua Jornada de Transformação Começa Aqui
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 rounded-xl bg-background border-l-4 border-accent">
              <h3 className="text-2xl font-bold mb-4 text-accent">Clareza Total</h3>
              <p className="text-muted-foreground leading-relaxed">
                Passo a passo descomplicado, sem enrolação. Você saberá exatamente o que fazer em cada momento para criar vídeos que convertem.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-background border-l-4 border-secondary">
              <h3 className="text-2xl font-bold mb-4 text-secondary">Economia de Tempo</h3>
              <p className="text-muted-foreground leading-relaxed">
                Crie vídeos em minutos, não em horas. Nossas técnicas e ferramentas garantem máxima eficiência sem comprometer a qualidade.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-background border-l-4 border-accent">
              <h3 className="text-2xl font-bold mb-4 text-accent">Segurança e Suporte</h3>
              <p className="text-muted-foreground leading-relaxed">
                Comunidade exclusiva e suporte para todas as suas dúvidas. Você nunca estará sozinho nessa jornada.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-background border-l-4 border-secondary">
              <h3 className="text-2xl font-bold mb-4 text-secondary">Crescimento Real</h3>
              <p className="text-muted-foreground leading-relaxed">
                Método baseado em dados e resultados comprovados. Não são promessas milagrosas, é execução estratégica.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button
              onClick={handleCTAClick}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Começar Minha Transformação Agora
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
            Respondendo Suas Objeções
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "Não tenho experiência em criar vídeos. Consigo mesmo assim?",
                a: "Sim! Nosso método é especialmente projetado para iniciantes. Você receberá aulas didáticas, passo a passo, e suporte completo. Centenas de pessoas começaram do zero e agora têm canais virais.",
              },
              {
                q: "Preciso de equipamentos caros?",
                a: "Não. Você só precisa do seu celular e acesso à internet. Ensinamos como usar o que você já tem para criar vídeos de qualidade profissional.",
              },
              {
                q: "Não quero aparecer nos vídeos. É possível?",
                a: "Claro! Ensinamos várias técnicas para criar vídeos virais sem precisar mostrar seu rosto. Você pode usar voiceover, animações, B-roll e muito mais.",
              },
              {
                q: "Já tentei de tudo e não tive resultados. Por que isso seria diferente?",
                a: "Porque o ViralLab 30 foca em estratégias atualizadas e comprovadas, com acompanhamento para garantir seu sucesso. Não é apenas um curso, é um método com suporte.",
              },
              {
                q: "E se não gostar? Há garantia?",
                a: "Sim! Oferecemos garantia de 7 dias. Se não estiver satisfeito, devolvemos seu dinheiro, sem perguntas. Seu risco é zero.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="border border-border/50 rounded-lg overflow-hidden hover:border-accent/50 transition-all duration-300"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full p-6 flex items-center justify-between bg-card hover:bg-card/80 transition-colors"
                >
                  <h3 className="font-bold text-lg text-left">{faq.q}</h3>
                  <span className={`text-accent transition-transform duration-300 ${expandedFaq === idx ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>
                {expandedFaq === idx && (
                  <div className="p-6 bg-background border-t border-border/50">
                    <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">
            Sua Oferta Especial Hoje
          </h2>

          <div className="bg-background rounded-2xl p-8 sm:p-12 border-2 border-accent/30 mb-8">
            <div className="mb-8">
              <p className="text-muted-foreground text-lg mb-4">Preço Original</p>
              <p className="text-4xl font-bold line-through text-muted-foreground mb-4">R$ 147</p>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
              </div>
              <p className="text-muted-foreground text-lg mb-4">Seu Preço Agora</p>
              <p className="text-6xl sm:text-7xl font-bold text-accent mb-2">R$ 47</p>
              <p className="text-muted-foreground">Apenas hoje - Oferta por tempo limitado</p>
            </div>

            <div className="space-y-4 mb-8 text-left">
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-accent flex-shrink-0" />
                <span>Acesso vitalício ao método completo</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-accent flex-shrink-0" />
                <span>Todas as atualizações futuras sem custo adicional</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-accent flex-shrink-0" />
                <span>Acesso à Comunidade ViralLab 30</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-accent flex-shrink-0" />
                <span>Suporte direto e atualizações constantes</span>
              </div>
            </div>

            <Button
              onClick={handleCTAClick}
              size="lg"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl mb-4"
            >
              SIM! Quero Aproveitar Essa Oferta Agora
            </Button>

            <p className="text-sm text-muted-foreground">
              Clique no botão acima para finalizar sua compra de forma segura via Kiwify
            </p>
          </div>

          <div className="bg-background rounded-xl p-8 border border-secondary/30">
            <Lock className="w-8 h-8 text-secondary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Garantia de 7 Dias</h3>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Sua satisfação é nossa prioridade. Se por qualquer motivo você não estiver 100% satisfeito com o ViralLab 30, basta solicitar o reembolso em até 7 dias e devolveremos cada centavo, sem perguntas. Seu risco é zero!
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>

        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Não Deixe Essa Oportunidade Passar
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Cada dia que você espera é um dia sem gerar visualizações, sem crescimento, sem renda. O momento de começar é agora. Seus vídeos virais estão esperando por você.
          </p>

          <Button
            onClick={handleCTAClick}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Começar Agora - R$ 47
          </Button>

          <p className="text-sm text-muted-foreground mt-6">
            Pagamento seguro via Kiwify | Garantia de 7 dias | Acesso imediato
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border/50 bg-card/30">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">ViralLab 30</h3>
              <p className="text-muted-foreground text-sm">
                O método completo para criar e monetizar vídeos curtos.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Recursos</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Módulos</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Comunidade</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Suporte</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Política de Privacidade</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 ViralLab 30. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
