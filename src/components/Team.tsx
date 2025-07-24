import React from 'react';
import { Linkedin, Mail, Award } from 'lucide-react';

export const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Alana Alves",
      position: "Secretário Executivo - Recursos humanos",
      image: "https://f6f3b31670.cbaul-cdnwnd.com/112fa8a5594ecbfdd9d3378b60b0b5e5/200000000-c22f2c22f4/alana.jpeg?ph=f6f3b31670",
      bio: "Especialista em gestão administrativa e coordenação de projetos e recrutamento",
      specialties: ["Gestão", "Coordenação", "Administração"]
    },
    {
      name: "Luiz Felipe",
      position: "Secretário Executivo - Financeiro",
      image: "https://f6f3b31670.cbaul-cdnwnd.com/112fa8a5594ecbfdd9d3378b60b0b5e5/200000002-a230fa2313/luiz.jpeg?ph=f6f3b31670",
      bio: "Responsável pela organização e execução de processos administrativos e documentação financeira",
      specialties: ["Documentação", "Processos", "Organização"]
    },
    {
      name: "Vitória Pitre",
      position: "Secretário Executivo - Logística",
      image: "https://f6f3b31670.cbaul-cdnwnd.com/112fa8a5594ecbfdd9d3378b60b0b5e5/200000016-2216e22170/IMG_7124.jpeg?ph=f6f3b31670",
      bio: "Especialista em atendimento ao cliente e suporte administrativo executivo responsável pela organização da logística",
      specialties: ["Atendimento", "Suporte", "Relacionamento"]
    },
    {
      name: "Priscila Soares - Marketing",
      position: "Secretário Executivo",
      image: "https://f6f3b31670.cbaul-cdnwnd.com/112fa8a5594ecbfdd9d3378b60b0b5e5/200000004-955f6955f8/Captura%20de%20Tela%20%28157%29.png?ph=f6f3b31670",
      bio: "Coordenadora de agenda executiva e gestão de comunicações internas e marketing",
      specialties: ["Agenda", "Comunicação", "Coordenação"]
    }
  ];

  return (
    <section id="time" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nosso <span className="text-emerald-600">Time</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Profissionais altamente qualificados e apaixonados por inovação e gestão secretarial, 
            unidos pela missão de transformar o futuro da sua empresa.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-3">
                    <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors duration-200">
                      <Linkedin className="h-4 w-4 text-gray-700" />
                    </button>
                    <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors duration-200">
                      <Mail className="h-4 w-4 text-gray-700" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-emerald-600 font-semibold mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((specialty, specialtyIndex) => (
                    <span
                      key={specialtyIndex}
                      className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Nossa Equipe em Números</h3>
            <p className="text-xl opacity-90">Profissionais qualificados fazendo a diferença</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <Award className="h-12 w-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-4xl font-bold mb-2">4</div>
              <div className="text-lg opacity-90">Secretários</div>
            </div>
            <div className="group">
              <Award className="h-12 w-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-lg opacity-90">Dedicação</div>
            </div>
            <div className="group">
              <Award className="h-12 w-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-lg opacity-90">Anos Experiência</div>
            </div>
            <div className="group">
              <Award className="h-12 w-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-lg opacity-90">Eficiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
