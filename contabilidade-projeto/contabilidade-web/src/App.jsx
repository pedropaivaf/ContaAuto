import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import ContactForm from './components/ContactForm.jsx'
import { 
  Calculator, 
  FileText, 
  TrendingUp, 
  Settings, 
  Receipt, 
  CheckCircle, 
  Smartphone, 
  Cloud,
  DollarSign,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Star
} from 'lucide-react'
import heroImage from './assets/hero_contabilidade.png'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const services = [
    {
      icon: Calculator,
      title: "Cálculos Automatizados",
      description: "Automatização completa de cálculos fiscais, impostos e folha de pagamento com precisão garantida."
    },
    {
      icon: FileText,
      title: "Relatórios Inteligentes",
      description: "Geração automática de relatórios financeiros, balanços e demonstrações de resultados."
    },
    {
      icon: TrendingUp,
      title: "Análise de Dados",
      description: "Dashboards interativos com métricas em tempo real para tomada de decisões estratégicas."
    },
    {
      icon: Settings,
      title: "Automação de Processos",
      description: "Eliminação de tarefas manuais repetitivas através de fluxos automatizados inteligentes."
    },
    {
      icon: Receipt,
      title: "Gestão Fiscal",
      description: "Controlo completo de obrigações fiscais com alertas automáticos de prazos e entregas."
    },
    {
      icon: CheckCircle,
      title: "Auditoria Digital",
      description: "Verificação automática de documentos e conformidade com a legislação vigente."
    },
    {
      icon: Smartphone,
      title: "Assinatura Digital",
      description: "Processamento seguro de documentos com assinatura digital certificada."
    },
    {
      icon: Cloud,
      title: "Armazenamento Seguro",
      description: "Backup automático e acesso seguro aos seus documentos a partir de qualquer lugar."
    }
  ]

  const testimonials = [
    {
      name: "Maria Silva",
      company: "Silva & Associados",
      text: "A automação reduziu em 70% o tempo gasto em tarefas repetitivas. Agora focamos no que realmente importa: aconselhar os nossos clientes.",
      rating: 5
    },
    {
      name: "João Santos",
      company: "Santos Contabilidade",
      text: "Excelente plataforma! A integração com os sistemas existentes foi perfeita e o suporte é excecional.",
      rating: 5
    },
    {
      name: "Ana Costa",
      company: "Costa & Partners",
      text: "Revolucionou a nossa forma de trabalhar. Os relatórios automáticos poupam horas de trabalho manual.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-900">
                Conta<span className="text-yellow-500">Auto</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-blue-900 transition-colors">Início</a>
              <a href="#servicos" className="text-gray-700 hover:text-blue-900 transition-colors">Serviços</a>
              <a href="#automacao" className="text-gray-700 hover:text-blue-900 transition-colors">Automação</a>
              <a href="#sobre" className="text-gray-700 hover:text-blue-900 transition-colors">Sobre Nós</a>
              <a href="#contacto" className="text-gray-700 hover:text-blue-900 transition-colors">Contacto</a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-50">
                Entrar
              </Button>
              <Button className="bg-blue-900 hover:bg-blue-800 text-white">
                Começar Agora
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#inicio" className="block px-3 py-2 text-gray-700 hover:text-blue-900">Início</a>
              <a href="#servicos" className="block px-3 py-2 text-gray-700 hover:text-blue-900">Serviços</a>
              <a href="#automacao" className="block px-3 py-2 text-gray-700 hover:text-blue-900">Automação</a>
              <a href="#sobre" className="block px-3 py-2 text-gray-700 hover:text-blue-900">Sobre Nós</a>
              <a href="#contacto" className="block px-3 py-2 text-gray-700 hover:text-blue-900">Contacto</a>
              <div className="px-3 py-2 space-y-2">
                <Button variant="outline" className="w-full border-blue-900 text-blue-900">
                  Entrar
                </Button>
                <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white">
                  Começar Agora
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative bg-gradient-to-br from-blue-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                  🚀 Automação Inteligente
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Revolucione a sua 
                  <span className="text-blue-900"> Contabilidade</span> com 
                  <span className="text-yellow-500"> Automação</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Elimine tarefas manuais, reduza erros e foque no que realmente importa: 
                  fazer crescer o seu negócio com a nossa plataforma de automação contábil.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3">
                  Começar Gratuitamente
                </Button>
                <Button size="lg" variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-50 px-8 py-3">
                  Ver Demonstração
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Sem compromisso</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Suporte 24/7</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Dados seguros</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Equipa de contabilidade moderna trabalhando com tecnologia" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">+70% Eficiência</p>
                    <p className="text-xs text-gray-600">Redução de tempo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200">
              Serviços Completos
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Tudo o que precisa para automatizar a sua contabilidade
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma gama completa de serviços automatizados para simplificar 
              e otimizar todos os processos contábeis da sua empresa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto bg-blue-100 p-3 rounded-xl w-fit group-hover:bg-blue-200 transition-colors">
                    <service.icon className="h-8 w-8 text-blue-900" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Features Section */}
      <section id="automacao" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                  Tecnologia Avançada
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Automação que <span className="text-blue-900">transforma</span> o seu negócio
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  A nossa plataforma utiliza inteligência artificial e automação avançada 
                  para eliminar tarefas repetitivas e aumentar a produtividade da sua equipa.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Processamento Automático de Documentos</h3>
                    <p className="text-gray-600">Digitalização e processamento automático de faturas, recibos e documentos fiscais.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Cálculos Fiscais Inteligentes</h3>
                    <p className="text-gray-600">Cálculo automático de impostos, IVA e contribuições com atualizações legislativas em tempo real.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Relatórios em Tempo Real</h3>
                    <p className="text-gray-600">Dashboards interativos com métricas atualizadas automaticamente para decisões informadas.</p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white">
                Descobrir Mais Funcionalidades
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Benefícios Comprovados</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span>Redução de Tempo</span>
                    <span className="text-2xl font-bold text-yellow-400">70%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Precisão dos Cálculos</span>
                    <span className="text-2xl font-bold text-yellow-400">99.9%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Satisfação dos Clientes</span>
                    <span className="text-2xl font-bold text-yellow-400">95%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>ROI Médio</span>
                    <span className="text-2xl font-bold text-yellow-400">300%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200">
              Sobre Nós
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Especialistas em automação contábil
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Com mais de 10 anos de experiência, somos pioneiros em soluções 
              tecnológicas para o setor contábil em Portugal.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <div className="mx-auto bg-blue-100 p-4 rounded-full w-fit">
                  <DollarSign className="h-8 w-8 text-blue-900" />
                </div>
                <CardTitle className="text-2xl font-bold text-blue-900">500+</CardTitle>
                <CardDescription>Empresas Atendidas</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <div className="mx-auto bg-yellow-100 p-4 rounded-full w-fit">
                  <TrendingUp className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-blue-900">10M+</CardTitle>
                <CardDescription>Documentos Processados</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <div className="mx-auto bg-green-100 p-4 rounded-full w-fit">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-blue-900">99.9%</CardTitle>
                <CardDescription>Uptime Garantido</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
              Testemunhos
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              O que dizem os nossos clientes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-gray-600 italic leading-relaxed">
                    "{testimonial.text}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Pronto para automatizar a sua contabilidade?
                </h2>
                <p className="text-xl text-blue-100">
                  Entre em contacto connosco e descubra como podemos transformar 
                  o seu negócio com automação inteligente.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-800 p-3 rounded-lg">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Telefone</p>
                    <p className="text-blue-100">+351 210 123 456</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-800 p-3 rounded-lg">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-blue-100">info@contaauto.pt</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-800 p-3 rounded-lg">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Morada</p>
                    <p className="text-blue-100">Av. da Liberdade, 123<br />1250-096 Lisboa</p>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="text-2xl font-bold">
                Conta<span className="text-yellow-500">Auto</span>
              </div>
              <p className="text-gray-400">
                Automação contábil inteligente para empresas modernas.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Serviços</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Automação Fiscal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Relatórios</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Auditoria</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Consultoria</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Imprensa</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Parceiros</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Suporte</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Centro de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentação</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2024 ContaAuto. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacidade</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Termos</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

