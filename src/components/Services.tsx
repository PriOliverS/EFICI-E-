import React from 'react';
import { BarChart3, Settings, Shield, Smartphone, Battery, Cpu } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: <BarChart3 className="h-12 w-12 text-emerald-600" />,
      title: "Financeiro",
      description: "Análise completa do consumo energético para identificar oportunidades de economia e otimização.",
      features: ["Relatórios detalhados", "Métricas precisas", "Plano de ação"]
    },
    {
      icon: <Settings className="h-12 w-12 text-blue-600" />,
      title: "Recursos Humanos",
      description: "Sistemas automatizados que otimizam o uso de energia em tempo real baseado em padrões de consumo.",
      features: ["Controle automático", "Aprendizado de máquina", "Interface intuitiva"]
    },
    {
      icon: <Smartphone className="h-12 w-12 text-purple-600" />,
      title: "Logística",
      description: "Acompanhamento 24/7 através de aplicativo móvel com alertas e relatórios em tempo real.",
      features: ["App móvel", "Alertas instantâneos", "Dashboard completo"]
    },
    {
      icon: <Battery className="h-12 w-12 text-green-600" />,
      title: "Marketing",
      description: "Implementação de soluções inovadoras como  sistemas de armazenamento.",
      features: ["Painéis solares", "Baterias inteligentes", "Grid tie"]
    },
   
    
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossos <span className="text-emerald-600">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma gama completa de soluções para maximizar a produtividade e gestão do seu negócio
            e promover a maximização da sua organização.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-6 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-200 group-hover:translate-x-2 transform transition-transform">
                Saiba mais →
              </button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-12 py-4 rounded-full font-semibold hover:from-emerald-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </section>
  );
};
