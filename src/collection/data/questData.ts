import type { IDBrand } from '@/shared/types/typeUtils';

export type QuestType = {
    id: IDBrand;
    quest: string;
    description: string;
    xp: number;
    status: 'active' | 'completed';
};

export const questData: QuestType[] = [
    {
        id: '550e8400-e29b-41d4-a716-446655440001' as IDBrand,
        quest: 'Learn TypeScript',
        description: 'Master the basics of TypeScript and understand type safety',
        xp: 250,
        status: 'completed',
    },
    {
        id: '550e8400-e29b-41d4-a716-446655440002' as IDBrand,
        quest: 'Build a React App',
        description: 'Create a functional React application with hooks',
        xp: 500,
        status: 'active',
    },
    {
        id: '550e8400-e29b-41d4-a716-446655440003' as IDBrand,
        quest: 'Implement Database',
        description: 'Set up and configure a database with proper schemas',
        xp: 400,
        status: 'active',
    },
    {
        id: '550e8400-e29b-41d4-a716-446655440004' as IDBrand,
        quest: 'Write Unit Tests',
        description: 'Write comprehensive unit tests with >80% coverage',
        xp: 300,
        status: 'completed',
    },
    {
        id: '550e8400-e29b-41d4-a716-446655440005' as IDBrand,
        quest: 'Deploy to Production',
        description: 'Deploy the application to a production environment',
        xp: 600,
        status: 'active',
    },
    {
        id: '550e8400-e29b-41d4-a716-446655440006' as IDBrand,
        quest: 'Learn Docker',
        description: 'Understand containerization with Docker',
        xp: 350,
        status: 'completed',
    },
    {
        id: '550e8400-e29b-41d4-a716-446655440007' as IDBrand,
        quest: 'Optimize Performance',
        description: 'Improve application performance and reduce load time',
        xp: 450,
        status: 'active',
    },
    {
        id: '550e8400-e29b-41d4-a716-446655440008' as IDBrand,
        quest: 'Implement Authentication',
        description: 'Add secure user authentication and authorization',
        xp: 550,
        status: 'completed',
    },
    {
        id: '550e8400-e29b-41d4-a716-446655440009' as IDBrand,
        quest: 'Create API Documentation',
        description: 'Document all API endpoints with Swagger/OpenAPI',
        xp: 200,
        status: 'active',
    },
    {
        id: '550e8400-e29b-41d4-a716-446655440010' as IDBrand,
        quest: 'Master Git Workflows',
        description: 'Learn advanced Git branching and merging strategies',
        xp: 150,
        status: 'completed',
    },
    {
        id: '550e8400-e29b-41d4-a716-446655440011' as IDBrand,
        quest: 'Implement Caching',
        description: 'Add caching layer to improve data retrieval speed',
        xp: 400,
        status: 'active',
    },
    {
        id: '550e8400-e29b-41d4-a716-446655440012' as IDBrand,
        quest: 'Setup Monitoring',
        description: 'Configure logging and monitoring for production app',
        xp: 350,
        status: 'completed',
    },
    {
        id: '550e8400-e29b-41d4-a716-446655440013' as IDBrand,
        quest: 'Code Review Best Practices',
        description: 'Learn and apply effective code review techniques',
        xp: 200,
        status: 'active',
    },
    {
        id: '550e8400-e29b-41d4-a716-446655440014' as IDBrand,
        quest: 'Security Audit',
        description: 'Perform security audit and fix vulnerabilities',
        xp: 700,
        status: 'active',
    },
    {
        id: '550e8400-e29b-41d4-a716-446655440015' as IDBrand,
        quest: 'Refactor Legacy Code',
        description: 'Refactor and modernize existing codebase',
        xp: 500,
        status: 'completed',
    },
];
