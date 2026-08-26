/// <reference path="../pb_data/types.d.ts" />
migrate(
    (app) => {
        const collection = new Collection({
            name: 'contact_submissions',
            type: 'base',
            listRule: null,
            viewRule: null,
            createRule: '',
            updateRule: null,
            deleteRule: null,
            fields: [
                { name: 'name', type: 'text', required: true, max: 120 },
                { name: 'email', type: 'email', required: true },
                { name: 'company', type: 'text', required: false, max: 160 },
                { name: 'project_type', type: 'text', required: false, max: 80 },
                { name: 'budget', type: 'text', required: false, max: 80 },
                { name: 'message', type: 'text', required: true, max: 4000 },
                { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
            ],
        });

        app.save(collection);
    },
    (app) => {
        const collection = app.findCollectionByNameOrId('contact_submissions');
        app.delete(collection);
    },
);
