export class Task {
    public categories:string[] = [
        'IT',
        'Management',
        'Controlling',
        'UX/Design',
        'Support',
        'Maintenance'
    ];

    public urgencies:string[] = [
        'Low',
        'Medium',
        'High'
    ]

    public title: string = '';
    public category: string = '';
    public description: string = '';
    public date:string = '';
    public urgency: string = '';
    public assignedTo:string = ''

}