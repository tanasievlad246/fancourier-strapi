module.exports = {
    kind: 'collectionType',
    collectionName: 'fan-user-credentials',
    info: {
        displayName: 'Fan Courier User Credentials',
        singularName: 'fan-user-credentials',
        pluralName: 'fan-user-credentials',
    },
    options: {
        draftAndPublish: true,
        timestamps: true,
    },
    pluginOptions: {
        'content-manager': {
            visible: true,
        },
        'content-type-builder': {
            visible: true,
        },
    },
    attributes: {
        username: {
            type: 'string',
            required: true,
        },
        password: {
            type: 'string',
            required: true,
        },
        clientId: {
            type: 'string',
            required: true,
        },
    },
}