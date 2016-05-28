var Settings = {
    database : {
        host:     '192.168.55.108',
        database: 'juus_sys',
        user : 'root',
        password : '123',
        protocol: 'mysql',
        port:     '3306',
        query:    {pool: true}
    },
    properties : {
        primary_key            : "id",
        association_key        : "{name}_{field}",
        required               : false
    },
    instance   : {
        identityCache          : true,
        identityCacheSaveCheck : true,
        autoSave               : false,
        autoFetch              : false,
        autoFetchLimit         : 1,
        cascadeRemove          : true,
        returnAllErrors        : false
    },
    connection : {
        reconnect              : true,
        pool                   : false,
        debug                  : false
    }
};