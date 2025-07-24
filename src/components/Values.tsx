import React from 'react';
import { Heart, Shield, Lightbulb, Users, Award, Zap } from 'lucide-react';

export const Values: React.FC = () => {
  const values = [
    {
      icon: <Heart className="h-12 w-12 text-red-500" />,
      title: "Compromisso",
      description: "Dedicação total aos nossos clientes, buscando sempre superar expectativas."
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "Confiabilidade",
      description: "Soluções robustas e duradouras, com garantia de qualidade e suporte contínuo."
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-amber-500" />,
      title: "Inovação",
      description: "Tecnologias de ponta e metodologias avançadas para resultados excepcionais."
    },
    {
      icon: <Users className="h-12 w-12 text-purple-600" />,
      title: "Colaboração",
      description: "Trabalho em equipe e parceria estratégica para alcançar objetivos comuns."
    },
    {
      icon: <Award className="h-12 w-12 text-green-600" />,
      title: "Excelência",
      description: "Padrão de qualidade superior em todos os projetos e relacionamentos."
    },
    {
      icon: <Zap className="h-12 w-12 text-emerald-600" />,
      title: "Diferencial",
      description: "Compromisso com o futuro da sua empresa, escolha o profissional que mais se adequa ás suas necessidades."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossos <span className="text-emerald-600">Valores</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Os princípios que guiam nossa empresa e definem nossa cultura organizacional, 
            garantindo excelência em cada projeto e relacionamento.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2 group border border-gray-100"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
