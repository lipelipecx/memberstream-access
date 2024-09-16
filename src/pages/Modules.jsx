import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Modules = () => {
  const navigate = useNavigate();
  const modules = [
    { id: 1, title: 'Módulo 1', description: 'Introdução ao curso' },
    { id: 2, title: 'Módulo 2', description: 'Conceitos básicos' },
    { id: 3, title: 'Módulo 3', description: 'Fundamentos avançados' },
    { id: 4, title: 'Módulo 4', description: 'Prática inicial' },
    { id: 5, title: 'Módulo 5', description: 'Desenvolvimento de projetos' },
    { id: 6, title: 'Módulo 6', description: 'Técnicas avançadas' },
    { id: 7, title: 'Módulo 7', description: 'Estudo de casos' },
    { id: 8, title: 'Módulo 8', description: 'Implementação prática' },
    { id: 9, title: 'Módulo 9', description: 'Otimização e performance' },
    { id: 10, title: 'Módulo 10', description: 'Projeto final' },
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
            className="cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => navigate(`/module/${module.id}`)}
          >
            <CardHeader>
              <CardTitle>{module.title}</CardTitle>
              <CardDescription>{module.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Clique para ver as aulas</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Modules;
