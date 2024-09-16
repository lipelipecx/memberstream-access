import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Modules = () => {
  const navigate = useNavigate();
  const modules = [
    { id: 1, title: 'Módulo 1', description: 'Introdução ao curso', image: 'https://picsum.photos/720/1280?random=1' },
    { id: 2, title: 'Módulo 2', description: 'Conceitos básicos', image: 'https://picsum.photos/720/1280?random=2' },
    { id: 3, title: 'Módulo 3', description: 'Fundamentos avançados', image: 'https://picsum.photos/720/1280?random=3' },
    { id: 4, title: 'Módulo 4', description: 'Prática inicial', image: 'https://picsum.photos/720/1280?random=4' },
    { id: 5, title: 'Módulo 5', description: 'Desenvolvimento de projetos', image: 'https://picsum.photos/720/1280?random=5' },
    { id: 6, title: 'Módulo 6', description: 'Técnicas avançadas', image: 'https://picsum.photos/720/1280?random=6' },
    { id: 7, title: 'Módulo 7', description: 'Estudo de casos', image: 'https://picsum.photos/720/1280?random=7' },
    { id: 8, title: 'Módulo 8', description: 'Implementação prática', image: 'https://picsum.photos/720/1280?random=8' },
    { id: 9, title: 'Módulo 9', description: 'Otimização e performance', image: 'https://picsum.photos/720/1280?random=9' },
    { id: 10, title: 'Módulo 10', description: 'Projeto final', image: 'https://picsum.photos/720/1280?random=10' },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="bg-primary text-primary-foreground p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-2">Bem-vindo ao MemberStream</h1>
        <p className="text-xl">Explore nossos módulos exclusivos e comece sua jornada de aprendizado.</p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {modules.map((module) => (
          <Card 
            key={module.id} 
            className="cursor-pointer hover:shadow-lg transition-all transform hover:scale-105"
            onClick={() => navigate(`/module/${module.id}`)}
            style={{
              aspectRatio: '720 / 1280',
              perspective: '1000px',
              transformStyle: 'preserve-3d',
            }}
          >
            <div 
              className="w-full h-full relative rounded-lg overflow-hidden"
              style={{
                transform: 'rotateY(5deg) rotateX(5deg)',
                transition: 'transform 0.3s ease',
              }}
            >
              <img 
                src={module.image} 
                alt={module.title} 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <CardHeader className="text-white">
                  <CardTitle className="text-2xl">{module.title}</CardTitle>
                  <CardDescription className="text-gray-200">{module.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white">Clique para ver as aulas</p>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Modules;
