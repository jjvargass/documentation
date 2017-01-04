angular.module('laboard-frontend')
    .constant(
        'LABOARD_CONFIG',
        {
            gitlabUrl: 'http://mv12cl01',
            socketIoPort: 9090,
            defaultColumns: [
                {
                    title: 'Backlog',
                    position: 0
                },
                {
                    title: 'Esta semana',
                    position: 1
                },
                {
                    title: 'En progreso',
                    position: 2
                },
                {
                    title: 'Revisión',
                    position: 3,
                    theme: 'info'
                },
                {
                    title: 'Terminada',
                    position: 4,
                    theme: 'success',
                    closable: true
                }
            ]
        }
    );
