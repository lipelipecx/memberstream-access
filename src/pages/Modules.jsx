import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Modules = () => {
  const navigate = useNavigate();
  const modules = [
    { id: 1, title: 'Módulo 1', description: 'Introdução ao curso' },
    { id: 2, title: 'Módulo 2', description: 'Conceitos avançados' },
    { id: 3, title: 'Módulo 3', description: 'Prática e projetos' },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="bg-primary text-primary-foreground p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-2">Bem-vindo ao MemberStream</h1>
        <p className="text-xl">Explore nossos módulos exclusivos e comece sua jornada de aprendizado.</p>
      </div>
      <div className="space-y-6">
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
