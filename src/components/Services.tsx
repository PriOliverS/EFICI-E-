import React from 'react';
import { Check, Star, Crown, Shield } from 'lucide-react';

export const Services: React.FC = () => {
  const departments = [
    {
      name: "Financeiro",
      color: "emerald",
      icon: "💰",
      description: "Gestão financeira e controle de custos"
    },
    {
      name: "Marketing",
      color: "purple",
      icon: "📢",
      description: "Estratégias de comunicação e branding"
    },
    {
      name: "Logística",
      color: "blue",
      icon: "🚚",
      description: "Operações e cadeia de suprimentos"
    },
    {
      name: "Recursos Humanos",
      color: "amber",
      icon: "👥",
      description: "Gestão de pessoas e talentos"
    }
  ];

  const plans = [
    {
      name: "Essencial",
      icon: <Shield className="h-8 w-8" />,
      price: "R$ 2.500",
      period: "/mês",
      description: "Ideal para pequenas empresas",
      features: [
        "Suporte administrativo básico",
        "Gestão de agenda",
        "Organização de documentos",
        "Atendimento telefônico",
        "Relatórios mensais",
        "Suporte por email"
      ],
      popular: false
    },
    {
      name: "Otimizado",
      icon: <Star className="h-8 w-8" />,
      price: "R$ 4.500",
      period: "/mês",
      description: "Para empresas em crescimento",
      features: [
        "Tudo do plano Essencial",
        "Gestão de projetos",
        "Análises estratégicas",
        "Suporte especializado",
        "Treinamentos mensais",
        "Consultoria personalizada",
        "Relatórios semanais",
        "Suporte prioritário"
      ],
      popular: true
    },
    {
      name: "Premium",
      icon: <Crown className="h-8 w-8" />,
      price: "R$ 7.500",
      period: "/mês",
      description: "Solução completa para grandes empresas",
      features: [
        "Tudo do plano Otimizado",
        "Secretário executivo dedicado",
        "Gestão completa de processos",
        "Automação de workflows",
        "Integração com sistemas",
        "Suporte 24/7",
        "Relatórios em tempo real",
        "Consultoria estratégica",
        "Treinamentos personalizados"
      ],
      popular: false
    }
  ];

  const getColorClasses = (color: string, type: 'bg' | 'text' | 'border') => {
    const colorMap = {
      emerald: {
        bg: 'bg-emerald-500',
        text: 'text-emerald-600',
        border: 'border-emerald-500'
      },
      purple: {
        bg: 'bg-purple-500',
        text: 'text-purple-600',
        border: 'border-purple-500'
      },
      blue: {
        bg: 'bg-blue-500',
        text: 'text-blue-600',
        border: 'border-blue-500'
      },
      amber: {
        bg: 'bg-amber-500',
        text: 'text-amber-600',
        border: 'border-amber-500'
      }
    };
    return colorMap[color as keyof typeof colorMap]?.[type] || 'bg-gray-500';
  };

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Planos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Secretariado</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Soluções personalizadas de secretariado executivo para cada departamento da sua empresa, 
            com planos que se adaptam às suas necessidades e orçamento.
          </p>
        </div>

        {/* Departments */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 text-center"
            >
              <div className="text-4xl mb-4">{dept.icon}</div>
              <h3 className={`text-xl font-bold mb-2 ${getColorClasses(dept.color, 'text')}`}>
                {dept.name}
              </h3>
              <p className="text-gray-600 text-sm">{dept.description}</p>
            </div>
          ))}
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 relative overflow-hidden ${
                plan.popular ? 'ring-2 ring-indigo-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-center py-2 text-sm font-semibold">
                  Mais Popular
                </div>
              )}
              
              <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex p-3 rounded-full mb-4 ${
                    plan.popular ? 'bg-indigo-100 text-indigo-500' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className={`text-4xl font-bold ${
                      plan.popular ? 'text-indigo-500' : 'text-gray-900'
                    }`}>
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className={`h-5 w-5 mt-0.5 mr-3 flex-shrink-0 ${
                        plan.popular ? 'text-indigo-500' : 'text-green-500'
                      }`} />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Escolher Plano
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Precisa de algo personalizado?</h3>
            <p className="text-lg opacity-90 mb-6">
              Criamos soluções sob medida para atender às necessidades específicas da sua empresa.
            </p>
            <button
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-indigo-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Solicitar Orçamento Personalizado
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};