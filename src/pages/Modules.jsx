import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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
      <div className="mb-8 rounded-lg overflow-hidden">
        <img 
          src="https://picsum.photos/1200/400?random=banner" 
          alt="MemberStream Banner" 
          className="w-full h-auto object-cover"
        />
      </div>
      <Carousel className="w-full max-w-7xl mx-auto">
        <CarouselContent className="-ml-4">
          {modules.map((module) => (
            <CarouselItem key={module.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card 
                  className="cursor-pointer transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105"
                  onClick={() => navigate(`/module/${module.id}`)}
                  style={{
                    borderRadius: '16px',
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div className="relative rounded-t-lg overflow-hidden" style={{ aspectRatio: '720/1280' }}>
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
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Modules;
